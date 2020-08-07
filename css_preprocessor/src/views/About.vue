<template>
  <div class="about">
    <div class="father">
      hhh
      <div class="son"></div>
    </div>
    <div class="tri"></div>
  </div>
</template>

<style lang="less" scoped>
/*
1.什么是变量插值：
在less中如果属性的取值可以直接使用变量，但是如果属性名称或者选择器名称并不能直接使用变量，
如果属性名称或者选择器名称想使用变量中保存的值，那么必须使用变量插值的格式；

2.变量插值的格式：
格式： @{变量名称}

3.在css3中新增了一个calc函数，可以实现简单的加减乘除运算；

4.什么是less中的混合？ 就是将重复使用的代码封装到一个类中，在需要使用的地方调用封装好的类即可；在预处理的时候less会自动
将使用到的封装好的类拷贝过来

5.less中混合的注意点：
如果混合名称的后面没有(),那么在预处理的时候，会保留混合的代码
如何混合名称的后面加上了(),那么在预处理的时候，不会保留混合的代码；

6.混合的匹配模式
通过混合的第一个字符串形参，来确定具体要执行哪一个同名混合

@_:表示通用的匹配模式
通用匹配模式：无论同名的哪一个混合被匹配了，都会先执行通用匹配模式中的代码

在less文件中导入其他less文件
*/
@fz: 40px;
@w: width;
.father {
  @c: blue;
  width: 100px;
  height: 100px;
  background-color: antiquewhite;
  font-size: @fz;
  color: @c;
  .son {
    @{w}: 50px; /*变量插值*/
    height: 50px;
    background-color: lavender;
  }
}
.tri {
  .triangle(10px, red);
}

.triangle(@width,@color) {
  width: 0px;
  height: 0px;
  border-width: @width;
  border-color: @color transparent transparent transparent;
  border-style: solid solid solid solid;
}
</style>
