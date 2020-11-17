use strict;
use warnings;
use feature 'say';
use Father;
use Data::Dumper;

# $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

# $text = decode_json($json);
# say  Dumper($text);
# say ref $text;

sub get{
  my $num = @_ % 2;
  my $oFather = Father->new();
  $oFather->useCall();
  # print ($num);
}

&get('xx','yy','zz')

