let compileUtil = {
  processData(value, vm) {
    let dataCollections = value.split(".");
    return dataCollections.reduce((accumulate, currentValue) => {
      return accumulate[currentValue.trim()];
    }, vm.$data);
  },
  processReg(node, value, vm) {
    //处理正则表达式匹配到的内容，比如：{{内容}}
    let reg = /\{\{(.+?)\}\}/gi;
    if (reg.test(value)) {
      let val = value.replace(reg, (match, p1) => {
        console.log(match, "match", p1);
        return this.processData(p1, vm);
      });
      console.log(val, "finally");
      node.textContent = val;
    }
  },
  model: function (node, value, vm) {
    const val = this.processData(value, vm);
    console.log(val, "model");
    node.value = val;
  },
  text: function (node, value, vm) {
    node.innerHTML = vm.$data[value];
  },
  html: function (node, value, vm) {
    node.innerText = vm.$data[value];
  },
  content: function (node, value, vm) {
    this.processReg(node, value, vm);
  },
};

class MyVue {
  constructor(options) {
    if (this.isElement(options.el)) {
      this.$el = options.el;
    } else {
      this.$el = document.querySelector(options.el);
    }

    this.$data = options.data;
    new Observe(this.$data);
    if (this.$el) {
      new Compile(this);
    }
  }

  isElement(node) {
    return node.nodeType === 1;
  }
}

class Compile {
  constructor(vm) {
    this.vm = vm;
    //1.将网页上的元素发给你到内存中
    let fragment = this.node2fragment(this.vm.$el);
    //2.利用指定的数据编译内存中的元素
    this.buildTemplate(fragment);
    //3.将编译好的内容重新渲染到网页上
    this.vm.$el.appendChild(fragment);
  }

  node2fragment(element) {
    //创建一个空的文档碎片对象
    let fragment = document.createDocumentFragment();

    //循环遍历取出每一个元素
    let node = element.firstChild;
    while (node) {
      //注意点：只要降元素添加到了文档碎片中，那么这个元素就会自动从网页中消失
      fragment.appendChild(node);
      node = element.firstChild;
    }

    return fragment;
  }

  buildTemplate(fragment) {
    let nodes = [...fragment.childNodes];

    nodes.forEach((node) => {
      if (this.vm.isElement(node)) {
        this.processElement(node);
      } else {
        this.processText(node);
      }
    });
  }

  processElement(node) {
    this.buildTemplate(node);
    let attrs = [...node.attributes];

    attrs.forEach((attr) => {
      const { name, value } = attr; //指令名称（v-model, v-html...） 属性（name,age,area.province...）

      if (name.startsWith("v-")) {
        let directive = name.split("-")[1];
        compileUtil[directive](node, value, this.vm);
      }
    });
  }

  processText(node) {
    let content = node.textContent;
    compileUtil["content"](node, content, this.vm);
  }
}

class Observe {
  constructor(obj) {
    this.obj = obj;
    this.listObj(obj);
  }
  listObj(obj) {
    if (obj && typeof obj === "object") {
      for (let key in obj) {
        this.setting(obj, key, obj[key]);
      }
    }
  }
  setting(obj, attr, value) {
    this.listObj(value);

    Object.defineProperty(obj, attr, {
      configurable: true,
      enumerable: true,
      get() {
        return value;
      },
      set: (newValue) => {
        if (newValue !== value) {
          console.log(this);
          value = newValue;
          this.listObj(value);
          console.log("set方法被调用了");
        }
      },
    });
  }
}

//实现数据变化之后更新ui界面，可以使用发布订阅模式来实现
//先定义一个观察者类，再定义一个发布订阅类，然后通过发布订阅的类来管理观察者类

