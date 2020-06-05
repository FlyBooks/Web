use strict;
use warnings;
use feature 'say';
use Data::Dumper;

sub get_what_wanna{
    my @a_names = qw(Taylor Selena Lauv);

    return wantarray ? @a_names : [@a_names];
}

my @a_getNames = get_what_wanna();
my $ar_get_names = get_what_wanna();

say @a_getNames;
say $ar_get_names;