use JSON::PP;
use Data::Dumper;
use feature 'say';
 
my $js = JSON::PP->new;
my $hh  = $js->decode('[1,2,3,4,4]');
say "@$hh \n";

my $hr = $js->decode('{"a": [1, 2],"b":2}');
say Data::Dumper::Dumper($hr);

