use strict;
use warnings;
use Data::Dumper;
use 5.010;

my @mixed_nums = qw (ROT12 FLY233 QUIT211 GO985);
my @only_nums = map{ /(\d+)/} @mixed_nums;

say Data::Dumper::Dumper(\@only_nums);