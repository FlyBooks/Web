use strict;
use warnings;
use Data::Dumper;

use if $ENV{DEBUG} => 'Smart::Comments';

my @a_arr = ( 1, 2, 3, 4, 5 );

###@a_arr
local $/ = undef;
print "www";

__END__
这之后的内容，perl会忽略


DEBUG=1 ./ex/refs-group
local $/ = undef;
