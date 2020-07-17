import React,{PureComponent} from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent{
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal-root")
    );
  }
}


export default class App extends PureComponent{
  render(){
    return (
      <div>
        <Modal>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
          <p>blabla</p>
        </Modal>
      </div>
    );
  }
}