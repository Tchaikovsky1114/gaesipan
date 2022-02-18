import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  handleChange = (e) => {
    //setState로 2개의 input의 값으로 state의 값을 객체형태로 재 할당함.
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      message: '',
      username: '',
    });
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이밴트 복습</h1>
        <input
          type="text"
          name="username"
          placeholder="성함을 입력해주세요"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="메세지를 작성해주세요"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.hanldeClick = this.handleClick.bind(this);
  // }
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // handleClick = () => {
  //   alert(this.state.username + ': ' + this.state.message);
  //   this.setState({
  //     username: '',
  //     message: '',
  //   });
  // };
  // render() {
  //   return (
  //     <div>
  //       <h1>이벤트 연습</h1>
  //       <input
  //         type="text"
  //         name="username"
  //         placeholder="사용자명"
  //         value={this.state.username}
  //         onChange={this.handleChange}
  //       />
  //       <input
  //         type="text"
  //         name="message"
  //         placeholder="아무거나 입력해 보세요"
  //         value={this.state.message}
  //         onChange={this.handleChange}
  //       />
  //       <button onClick={this.handleClick}>확인</button>
  //     </div>
  //   );
}

export default EventPractice;
