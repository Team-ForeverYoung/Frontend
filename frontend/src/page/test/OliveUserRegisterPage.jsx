// import React, { useState } from 'react';
// import { oliveMemberRegister } from '../../service/test/registerservice';
// import { OliveUserRegisterRequestDto } from '../../service/dto/OliveUserRequestDto';

// const OliveUserRegisterPage = () => {
//     const [UserName, setUserName] = useState("");
//     const [UserId, setUserId] = useState("");
//     const [UserEmail, setUserEmail] = useState("");
//     const [UserPasswd, setUserPasswd] = useState("");
//     const [UserCountry, setUserCountry] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();  
//         const RequestDto = new OliveUserRegisterRequestDto(
//             UserName, UserId, UserEmail, UserPasswd, UserCountry
//         );
//         oliveMemberRegister(RequestDto);
//     }

//     return (
//         <div className="w-full min-h-screen flex justify-center items-center bg-white">
//             <form 
//                 onSubmit={handleSubmit} 
//                 className="w-[90%] max-w-md flex flex-col items-center gap-4 border border-gray-300 p-8 rounded-2xl shadow-md"
//             >
//               <h1>회원가입</h1>
//                 <div className='flex items-center'>
//                 <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>이름</p>
//                 <input
//                     type="text"
//                     placeholder="이름"
//                     value={UserName}
//                     onChange={(e) => setUserName(e.target.value)}
//                     className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
//                 />
//                 </div>

//                 <div className='flex items-center'>
//                 <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>아이디</p>
//                 <input
//                     type="text"
//                     placeholder="아이디"
//                     value={UserId}
//                     onChange={(e) => setUserId(e.target.value)}
//                     className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
//                 />
//                 </div>

//                 <div className='flex items-center'>
//                 <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>비밀번호</p>
//                   <input
//                     type="text"
//                     placeholder="비밀번호"
//                     value={UserPasswd}
//                     onChange={(e) => setUserPasswd(e.target.value)}
//                     className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
//                 />
//                 </div>

//                 <div className='flex items-center'>
//                 <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>이메일</p>
//                   <input
//                     type="text"
//                     placeholder="이메일"
//                     value={UserEmail}
//                     onChange={(e) => setUserEmail(e.target.value)}
//                     className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
//                 />
//                 </div>

//                 <div className='flex items-center'>
//                 <p className='w-[200px] h-[40px] py-[5px] flex justify-center items-center'>국적</p>
//                   <input
//                     type="text"
//                     placeholder="국적"
//                     value={UserCountry}
//                     onChange={(e) => setUserCountry(e.target.value)}
//                     className="w-full h-[40px] border border-blue-500 rounded-2xl px-3"
//                 />
//                 </div>
              
//                 <div className='flex items-center'>
//                   <button 
//                     type="submit"
//                     className="w-[300px] h-[40px] bg-blue-500 text-white font-semibold rounded-2xl hover:bg-blue-600 transition"
//                 >
//                     제출
//                 </button>
//                 </div>
                
//             </form>
//         </div>
//     );
// };

// export default OliveUserRegisterPage;
