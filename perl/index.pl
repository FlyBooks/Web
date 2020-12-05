use strict;
use warnings;
use feature 'say';
use Data::Dumper;

# open (my $fh, '<', "./flag.perl") or die "could not open file  $!";
# my $s_content ='';
# while (<$fh>) {
#   chomp($_);
#       $s_content .= $_;
# }

# close ($fh);
# say Data::Dumper::Dumper($s_content);

# 只读方式打开文件
open(DATA1, "<./flag.perl");
 
# 打开新文件并写入
open(DATA2, ">file2.txt");
 
# 拷贝数据
while(<DATA1>)
{
   print DATA2 $_;
}
close( DATA1 );
close( DATA2 );

