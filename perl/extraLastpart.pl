use strict;
use warnings;
use 5.010;
use Data::Dumper;

my $ar_allCookbookUrls = ['\'https://github.wdf.sap.corp/CloudChef/win_network_route\'', '\'https://github.wdf.sap.corp/CloudChef/spc\''];

   my %h_nameUrls;
   foreach my $s_singleUrl (@$ar_allCookbookUrls) {
      $s_singleUrl =~ s/\'//g;

      $s_singleUrl =~ m/([^\/]+(?!.*\/))/; 
      $h_nameUrls{$1} = $s_singleUrl;
   }
   

   say $h_nameUrls{win_network_route};
   
   say Data::Dumper::Dumper(\%h_nameUrls);