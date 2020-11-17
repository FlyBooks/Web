function fn(a){
  console.log(a); //fn
  var a = 123;
  console.log(a); //123
  function a () {};
  console.log(a); //123
  var b = function() {};
  console.log(b); //fn
  function d() {};
}

fn(1);