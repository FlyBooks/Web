use strict;
use warnings;
use lib '/DEV_RC/c5268836/GMP/cgi-bin/lib';
use GMP::ISM::DNS::OpenStack;
use Data::Dumper;
use feature 'say';

my $o_openstack = GMP::ISM::DNS::OpenStack->new(
	{
		provider => 'S4H-Openstack-VMWARE-SYD',
		project  => '96642b0ac8ec406bae80921a8b0dcde8'
	}
);

my @a_ips = $o_openstack->list_floating_ips;
@a_ips = map { $_->{'floating_ip_address'} } @a_ips;
say Dumper( \@a_ips );
