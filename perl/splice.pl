use strict;
use warnings;
use feature 'say';

#splice 2个参数 对目标数组进行截取,并返回删除元素
#param1 数组本身
#param2 从某个位置开始splice,直到最后(位置是从1开始计数的)
my @array = 0..5;
my @remove = splice @array,2;
print "================two parameters==============\n";
say join(',',@array);
say join(',',@remove);


#splice 3个参数 对目标数组进行截取指定个数的元素,并返回删除元素
#param1 数组本身
#param2 从某个位置开始splice
#param3 删除的个数
my @array1 = 0..5;
my @remove1 = splice @array1,1,1;
print "==============three parameters================\n";
say join(',',@array1);
say join(',',@remove1);

#splice 4个参数 对目标数组进行截取指定个数的元素,添加另一个输入到当前数组中,并返回删除的元素
#param1 数组本身
#param2 从某个位置开始splice
#param3 删除的个数
#param4 需要插入的数组

my @array2 = 0..5;
my @newarray2 = splice @array2,2,1,qw(aa bb cc);

print "===========four parameters===================\n";
say join(',',@array2);
say join(',',@newarray2);

