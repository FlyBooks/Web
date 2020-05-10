use strict;
use warnings;
use feature 'say';

my $s_string = "perlmeme.org";
my $s_char = 'l';

my $result = index($s_string,$s_char);
say $result;


my $match = ".owaht_www";

$match =~ /\.o(.*)_(.*)/;
say $1;
say $2;

