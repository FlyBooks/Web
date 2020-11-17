use strict;
use warnings;
use List::MoreUtils qw(natatime);
use Data::Dumper;

my $count = 0;
# while (1) {
    my @rows = ("...") x 100;
    my $it = natatime(10,@rows);
    Data::Dumper::Dumper($it->());
    # while(my @chunk = $it->()) {
    #     $count += @chunk;
    #     if ($count % 1000 == 0) {
    #         warn "COUNT : $count\n";
    #     }
    # }
# }