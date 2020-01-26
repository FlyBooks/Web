package Person;
use Moose;

has 'name' => (
	is  => 'rw',
	isa => 'Str'
);

has 'age' => (
	is  => 'rw',
	isa => 'Int'
);

before 'name' => sub {
	print "about to call name", "\n";

};

after 'name' => sub {

	print "just called name", "\n";

};

around 'name' => sub {

	my $orig = shift;
	my $self = shift;

	print "around me", "\n";

	my $name = $self->$orig(@_);

	print "still around me", "\n";

	return $name;
};

1;
