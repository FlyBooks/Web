use strict;
use warnings;


my @a1 = qw(jjj kkk lll mmm nnn);
my @a2 = qw(aaa sss www jjj lll);

my %hash_a1 = map{$_=>1} @a1;
my %hash_a2 = map{$_=>1} @a2;

my @a2_only = grep{ !$hash_a1{$_}}@a2; 

print "@a2_only\n";


