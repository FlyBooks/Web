 use strict;
 use warnings;
 use Storable qw(store retrieve freeze thaw dclone);

 my %color = ('Blue' => 0.1, 'Red' => 0.8, 'Black' => 0, 'White' => 1);
 store(\%color, 'mycolors') or die "Can't store %a in mycolors!\n";
 my $colref = retrieve('mycolors');
 die "Unable to retrieve from mycolors!\n" unless defined $colref;
 printf "Blue is still %lf\n", $colref->{'Blue'};
 my $colref2 = dclone(\%color);
 my $str = freeze(\%color);
 printf "Serialization of %%color is %d bytes long.\n", length($str);
 my $colref3 = thaw($str);

