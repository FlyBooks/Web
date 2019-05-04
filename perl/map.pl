use strict;
use warnings;
use 5.010;

my @mixed_nums = qw (ROT12 FLY233 QUIT211 GO985);
my @only_nums = map{ /(\d+)/} @mixed_nums;

say @only_nums;