import React, { useState } from 'react';
import { login } from '../../service/user/loginService';

const Sign = () => {
  const [userId, setuserId] = useState('');
  const [passWord, setpassWord] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ userId, passWord });
      alert('로그인 성공!');
      console.log('응답 데이터:', data);
      const token = data.token;
      localStorage.setItem("accessToken", token);
    } catch (error) {
      alert('로그인 실패! 아이디 또는 비밀번호를 확인하세요.');
    }
  };

  return (
    <form onSubmit={handleLogin} className='flex flex-col items-center w-full h-full sm:max-w-96 m-auto mt-[100px]'>
      <div className='flex flex-col justify-center border border-gray-800 w-[80%] my-2'>
        <h1 className='text-gray-500 text-[30px]'>로그인</h1>

        <div className='flex flex-col gap-4 m-auto my-[10px]'>
          <input
            type="text"
            placeholder='아이디 입력'
            className='w-[300px] h-[40px]'
            value={userId}
            onChange={(e) => setuserId(e.target.value)}
          />
          <input
            type="password"
            placeholder='비밀번호 입력'
            className='w-[300px] h-[40px]'
            value={passWord}
            onChange={(e) => setpassWord(e.target.value)}
          />
        </div>
        <button type="submit" className='w-[400px] h-[50px] m-auto cursor-pointer'>로그인</button>
        <div className='flex justify-around'>
          <div className='flex'>
            <input type="checkbox" className='w-[20px]' />
            <p>아이디 찾기</p>
          </div>
          <div className='flex'>
            <input type="checkbox" className='w-[20px]'/>
            <p>비밀번호 찾기</p>
          </div>
        </div>
        <div className='my-[20px]'>
          <button type="button" className='w-[200px] h-[50px] bg-gray-500 cursor-pointer'>회원가입</button>
        </div>
      </div>
    </form>
  );
};

export default Sign;
