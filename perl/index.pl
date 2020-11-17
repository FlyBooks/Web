use strict;
use warnings;
use feature 'say';
use Data::Dumper;

# my $s_string = "perlmeme.org";
# my $s_char = 'l';

# my $result = index($s_string,$s_char);
# say $result;


# my $match = ".owaht_www";

# $match =~ /\.o(.*)_(.*)/;
# say $1;
# say $2;

sub fun{
  my ($hr, $name) = @_;
  Data::Dumper::Dumper($hr);
  Data::Dumper::Dumper($name);
}

fun(_ {name: 'Eva'})
