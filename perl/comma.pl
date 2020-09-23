use strict;
use warnings;
use Data::Dumper;
use feature 'say';

sub summary {
my @arr1 = (1,2,3);
my @arr2 = (4,5,6);
my @arr = @arr1, @arr2;
return @arr;
# return @arr1, @arr2;
}

say Data::Dumper::Dumper(&summary());
my $s_str = "3jjk##www##wwww##ww";
my %hash = split(m[##], $s_str);
say Data::Dumper::Dumper(\%hash);

# my $s_str = 'solution##script##level##full##account-id##769335778099##state##success##database-id####timestamp-last-successful##2020-06-02 07:12:05##s3-path##sap-hec-aws-769335778099-eu-central-1/backup/FLU/FHD/data##X-TICMCM-Hostname##hec44v003362##cloud##aws##hostname##hec44v003362##timestamp-send##2020-06-02 08:56:17##instance-id##i-0b3a11cc82decd802##bkpmon-timestamp##2020-06-02 08:56:18##error-message####method##file##timestamp-bkp-end##2020-06-02 08:56:17##backup-size##135560093696##timestamp-bkp-begin##2020-06-02 07:12:05##type##db##script-version##9##dbtype##hana##message-id##b381dcfd-70f3-4e90-901f-c691d18b0a40##system-id##FHD##database-name##FLD##customer-id##FLU##aws-account-id##769335778099';
# #my %hash = split(m[##], $s_str);
# my %hash = split('##', $s_str);
# say Data::Dumper::Dumper(\%hash);