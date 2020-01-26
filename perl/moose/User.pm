package User;
use Moose;

extends 'Person';

has 'password' => (
	is  => 'rw',
	isa => 'Str'
);

1;
