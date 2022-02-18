import { useState } from 'react';

const EventPracticeFunction = () => {
  const [form, setform] = useState({
    message: '',
    username: '',
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setform(nextForm);
  };
  const onClick = () => {
    alert(username + ' : ' + message);
    setform({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <>
      <h1>함수형컴포넌트 복습</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="성함을 입력해주세요"
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="메세지를 입력해주세요"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Alert</button>
    </>
  );
  //     const [form,setForm] = useState({
  //         username:'',
  //         message:''
  //     });
  //   const {username, message} = form;

  //   const onChange = (e) => {
  //       const nextForm = {
  //           ...form,
  //           [e.target.name]: e.target.value
  //       };
  //       setForm(nextForm)
  //   }

  //   const onClick = () => {
  //     alert(username + ': ' + message);
  //     setForm({
  //         username:'',
  //         message:''
  //     })
  //   };
  //   const onKeyPress = (e) => {
  //     if (e.key === 'Enter') {
  //       onClick();
  //     }
  //   };
  //   return (
  //     <div>
  //       <h1>이벤트 연습</h1>
  //       <input
  //         type="text "
  //         name="username"
  //         placeholder="사용자명"
  //         value={username}
  //         onChange={onChange}
  //       />
  //       <input
  //         type="text"
  //         name="message"
  //         placeholder="아무거나 입력하세요"
  //         value={message}
  //         onChange={onChange}
  //         onKeyPress={onKeyPress}
  //       />
  //       <button onClick={onClick}>확인</button>
  //     </div>
  //   );
};

export default EventPracticeFunction;
