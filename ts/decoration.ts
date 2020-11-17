function logClass(url: string) {
  return function (target: any) {
    console.log(target);
    console.log(url);
  };
}

@logClass("www.wechat.com")
class Logon {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

let logon = new Logon("Eva");

logon.run();
