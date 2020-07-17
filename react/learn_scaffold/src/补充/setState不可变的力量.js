import React, {PureComponent} from 'react';

export default class App extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      people:[
        {name:'lily',age:22},
        {name:'Emily',age:19},
        {name:'Selena',age:68},
        {name:'Taylor',age:99}
      ]
    };
  }
  render(){

    return (
      <div>
        <h1>好友列表：</h1>
        <ul>
          {
            this.state.people.map((item,index)=>{
            return (<li>姓名：{item.name} 年龄：{item.age}<button onClick={()=>{this.agePlusOne(index)}}>age+1</button></li>
              );
            })
          }
        </ul>
        <button>添加新的数据</button>
      </div>
    );
  }

  agePlusOne(index){
    const newPeople = [...this.state.people];
    newPeople[index].age++;
    this.setState({
      people: newPeople
    });
  }

}


