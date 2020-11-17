use strict;
use warnings;

my $str = "xwww oopppp\nhiaxxx kkk\nhiammmm";

if($str =~ /(^hia.*)/igm){
 print($1,'===',$2)
}