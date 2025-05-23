import React, { useState } from 'react';
import { oliveMemberRegister } from '../../service/user/registerservice';
import { OliveUserRegisterRequestDto } from '../../service/dto/OliveUserRequestDto';


const OliveUserRegisterPage = () => {
    const [UserName, setUserName] = useState("");
    const [UserId, setUserId] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [UserPasswd, setUserPasswd] = useState("");
    const [UserCountry, setUserCountry] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const RequestDto = new OliveUserRegisterRequestDto(
            UserName, UserId, UserEmail, UserPasswd, UserCountry
          );
          await oliveMemberRegister(RequestDto);
          alert("회원가입이 완료되었습니다.");
        } catch (error) {
          console.error("회원가입 실패:", error);
          alert("회원가입에 실패했습니다. 아이디 또는 이메일 중복 여부를 확인해주세요.");
        }
      };

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-white">
            <form 
                onSubmit={handleSubmit} 
                className="w-[90%] max-w-md flex flex-col items-center gap-4 border border-gray-300 p-8 rounded-2xl shadow-md"
            >
              <h1>회원가입!!</h1>
                <div className='flex items-center'>
                <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>이름</p>
                <input
                    type="text"
                    placeholder="이름"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
                />
                </div>

                <div className='flex items-center'>
                <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>아이디</p>
                <input
                    type="text"
                    placeholder="아이디"
                    value={UserId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
                />
                </div>


                <div className='flex items-center'>
                <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>비밀번호</p>
                  <input
                    type="password"
                    placeholder="비밀번호"
                    value={UserPasswd}
                    onChange={(e) => setUserPasswd(e.target.value)}
                    className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
                />
                </div>


                 <div className='flex items-center'>
                 <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>이메일</p>
                   <input
                     type="text"
                     placeholder="이메일"
                    value={UserEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
                />
                </div>

                <div className='flex items-center'>
                    <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>국적</p>
                    <select
                        value={UserCountry}
                        onChange={(e) => setUserCountry(e.target.value)}
                        className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
                    >
                    <option value="">국적 선택</option>
                    <option value="kr">대한민국 (KR)</option>
                    <option value="us">미국 (US)</option>
                    </select>
                </div>
              
                <div className='flex items-center'>
                  <button 
                    type="submit"
                    className="w-[300px] h-[40px] bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 transition"
                >
                    회원가입
                </button>
                </div>

                
             </form>
         </div>
    );
};

export default OliveUserRegisterPage;
