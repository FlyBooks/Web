use strict;
use warnings;
use lib '/DEV_RC/c5268836/GMP/cgi-bin/lib';
use feature 'say';
use GMP::ISM::DNS::OpenStack;
use GMP::ISM::Storage::OpenStack::OpenStack;
use Data::Dumper;
use GMP::Inventory;
use ExtComm::Config::OSL;
use ExtComm;
use GMP::Util;

my $s_uuid = GMP::Util::generate_uuid();
sub _openstack_connection {
   my ($resource_pool, $provider, $project, $service) = @_;

   my $oasis_dnshost = $resource_pool->landscape->oasis_host;
   my $data          = {
      Service    => $service,
      Ip         => $oasis_dnshost->ip,
      ModuleArgs => [{
         config   => ExtComm::Config::OSL::build_osl_openstack_config($oasis_dnshost->key, {uuid => $s_uuid}),
         provider => {
            username => $provider->admin_user,
            password => $provider->admin_pwd,
            domain   => $provider->domain,
            url      => $provider->connection_target,
         },
         project  => {
            name   => $project->name,
            domain => $project->domain,
            token  => $project->token,
         },
      }],
   };

   return ExtComm->new($data, {
      provider => $provider->key,
      project  => $project->key,
   });
}

sub old_conn {
   my $o_openstack = GMP::ISM::DNS::OpenStack->new({provider => 'S4H-Openstack-VMWARE-VLAB', project => '4ff2cfd47d084070ae3a429c41d126c9'});

   say Data::Dumper::Dumper($o_openstack->get_ports());

   my $inv_resource_pool = GMP::Inventory->getResourcePool('CCloud01-ROT-SFH-Customer');
   my @a_networks        = $inv_resource_pool->project->networks; #GMP::Inventory::DNSNetwork

   #get backup network

}


sub get_openstack_port {
   # my $resource_pool = GMP::Inventory->getResourcePool('CCloud01-ROT-SFH-Customer');
   my $resource_pool = GMP::Inventory->getResourcePool('CCloud01-ROT-SHP-PROD-A');
   my $provider      = $resource_pool->provider;
   my $project       = $resource_pool->project;
   my $o_con_nw      = _openstack_connection($resource_pool, $provider, $project, 'OpenStackCommunicationNetwork');

   #here we can get port accroding to $resource_pool, $provider and $project
   my @a_ports = $o_con_nw->get_ports();

   my @a_fixedips = grep {$_->{'fixed_ips'}->[0]->{'ip_address'} =~ m/100\.64\.41\.24/ or $_->{'fixed_ips'}->[0]->{'ip_address'}=~ /100\.64\.32\.70/} @a_ports;


   say Data::Dumper::Dumper(\@a_fixedips);
}

sub resourcepool_get_iprange {
   my $resource_pool = GMP::Inventory->getResourcePool('CCloud01-ROT-SFH-Customer');
   my @a_networks    = $resource_pool->project->networks;
   my @a_ips         = map {$_->iprange} @a_networks;

   say Data::Dumper::Dumper(\@a_ips);
   # $VAR1 = [
   #    '10.2.0.0/24',
   #    '10.1.0.0/20',
   #    '157.133.160.192/26',
   #    '10.180.2.0/24',
   #    '10.4.0.0/24',
   #    '10.180.8.0/22',
   #    '10.180.1.0/24',
   #    '10.180.3.0/24',
   #    '10.180.4.0/24',
   #    '192.168.60.0/24',
   #    '192.168.0.0/16',
   #    '10.180.48.0/24',
   #    '10.180.50.0/24',
   #    '10.180.64.0/20',
   #    '10.47.9.0/24',
   #    '10.47.8.0/25'
   # ];
}

sub get_networkd_id {
   my $resource_pool   = GMP::Inventory->getResourcePool('CCloud01-ROT-SFH-Customer');
   my @a_inv_storages  = $resource_pool->storages;
   my $o_openstack_net = GMP::ISM::Storage::OpenStack::OpenStack->new;
   my @a_network_id    = ();
   foreach my $inv_storage (@a_inv_storages) {
      my $network_id = eval {$o_openstack_net->_get_share_network_id($inv_storage);};

      push @a_network_id, $network_id;
   }
   say Data::Dumper::Dumper(\@a_network_id);

   # $VAR1 = [
   #    '8bc97da7-4b1e-41ec-9058-423a75597a1e',
   #    undef,
   #    undef
   # ];

}

&get_openstack_port();
