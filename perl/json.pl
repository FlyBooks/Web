use JSON;
use feature 'say';

use Data::Dumper;

$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

$text = decode_json($json);
say  Dumper($text);
say ref $text;



