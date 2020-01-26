use strict;
use warnings;
use Person;
use User;
use feature 'say';

my $person1 = Person->new( age => 18, name => 'Tom' );
my $person2 = Person->new( age => 22, name => 'Music' );
my $user1 = User->new( age => 22, name => 'Mike' );

$user1->password('123456789-1');
say $person1->name;
say $person1->age;

say $person2->name();
say $person2->age();

say $user1->name;
say $user1->age();
say $user1->password();

