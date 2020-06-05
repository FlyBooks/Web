use strict;
use warnings;
use Tie::Hash;
# use NDBM_File;

tie(our %HIST, 'C:/Software/wamp64/www/Projects/JS/vue/vue小结.txt', 1, 0);

while(my($key, $val) = each %HIST){
   print $key, '=' , unpack('L',$val),"\n";
}
