let buf = Buffer.alloc(5);
console.log(buf);
buf.write('abcdefg',2,2);
console.log(buf);
console.log(buf.toString());
