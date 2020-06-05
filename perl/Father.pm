package Father;
use strict;
use warnings;
use Data::Dumper;
use feature 'say';

sub new{
    my($class) = @_;
    my $self = {};
    return bless $self, $class;
}

sub useCall{
    my ($self) = @_;
    my  @params = caller;
    say Data::Dumper::Dumper(\@params);
}

1;
