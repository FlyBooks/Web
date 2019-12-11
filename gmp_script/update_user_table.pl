use strict;
use warnings;
use lib '/DEV_RC/c5268836/GMP/cgi-bin/lib';
use feature 'say';
use GMP::Appl::Base::InputValidation;
use GMP::Config;
use GMP::DB;
use GMP::DateTime;
use GMP::Logging;
use GMP::DAO::User;
use GMP::RSA;
use GMP::Cache::Memcached;
use GMP::Lock;
use GMP::Util;
use Data::Dumper;

sub user_from_cache {
	my $user_field_map = {
		LNAME    => 'LNAME',
		FNAME    => 'FNAME',
		TELE_PRI => 'TELE_USER',
		TELE_OFF => 'TELE_USER',
		HANDY    => 'HANDY_USER',
		EMAIL    => 'EMAIL',
		CC_ID    => 'CC_ID'
	};

	my %user_data;

	# read data from ZBPA_USER
	my ( $rc1, $content_user, $r_msg1 ) = GMP::DB->exec_sql(
		{
			"action" => "SELECT",
			"fields" => "*",
			"tables" => "ZBPA_USER",
			"where"  => "duser = " . GMP::DB->quote("C5291611")
		}
	);

	foreach my $user ( @{$content_user} ) {
		$user_data{"$user->{DUSER}"} = $user;
	}

	# read relevant data from ZBPA_USER_CACHE ( only known GMP user )
	my ( $rc2, $content_user_cache, $r_msg2 ) = GMP::DB->exec_sql(
		{
			"action" => "SELECT",
			"fields" => "*",
			"tables" => "ZBPA_USER_CACHE",
			"where"  => "USERID =" . GMP::DB->quote("C5291611")
		}
	);

	# compare current data with new data from cache-table
	foreach my $cached_usr ( @{$content_user_cache} ) {
		my $curr_data = $user_data{ $cached_usr->{USERID} };

		next unless $curr_data;

		my @new_data;

		# check all attritbutes of current user
		foreach my $field ( keys %{$user_field_map} ) {

			if ( $curr_data->{$field} ne
				$cached_usr->{ $user_field_map->{$field} } )
			{
				$curr_data->{$field} =
				  $cached_usr->{ $user_field_map->{$field} };
				push @new_data, [ $field, $curr_data->{$field} ];
			}
		}

		# update required fields of current user
		if ( scalar(@new_data) > 0 ) {
			eval {
				my ( $rc, $content, $r_msg ) = GMP::DB->exec_sql(
					{
						"action" => "UPDATE",
						"tables" => "ZBPA_USER",
						"fields" => [ [@new_data] ],
						"where"  => "DUSER = '$cached_usr->{USERID}'"
					}
				);
			};

			if ($@) {
				warn
"Error during UPDATE ZBPA_USER (DUSER = '$cached_usr->{USERID})': $@ values"
				  . Dumper( \@new_data );
			}
		}
	}
}

&user_from_cache();
