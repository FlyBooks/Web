use strict;
use warnings;
use Data::Dumper;
use feature 'say';

my %exec_sql_args = map { $_ => 1 } qw(where options bind);
say Data::Dumper::Dumper(\%exec_sql_args);


# my $team = '0t9';

# if ($team =~ /[^\d+]/){
#   say 'error, must be numberic ', $team;
# }

my @arr = ('', undef,'99','iixxx');
# @arr = grep{defined} @arr;
say Data::Dumper::Dumper(\@arr);