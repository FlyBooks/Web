use strict;
use warnings;
use feature 'say';

my $arr = [1,2,3,4,5,6];
my $arr1 = ["a","b","c","d"];

outer: foreach my $num ( @$arr ) {
      inner: foreach my $str ( @$arr1 ) {
                if($str eq "d"){
                   last outer;
                }
               say $num;
      }
}
