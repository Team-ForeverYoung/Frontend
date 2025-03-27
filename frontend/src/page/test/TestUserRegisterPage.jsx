import React, { useState } from 'react';
import { testMemberRegister } from '../../service/test/testService';
import { TestUserRegisterRequestDto } from '../../service/dto/TestUserRequestDto';

const TestUserRegisterPage = () => {
    const [toggle, setToggle] = useState(null);
    const [testUserName, setTestUserName] = useState("");
    const [testUserAge, setTestUserAge] = useState("");

    const handleTestUserNameInputChange = (e) => {
        console.log(e.target.value);
        setTestUserName(e.target.value);
    };

    const handleTestUserAgeInputChange = (e) => {
        console.log(e.target.value);
        setTestUserAge(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        const testUserRegisterRequestDto = new TestUserRegisterRequestDto(testUserName, testUserAge);
        testMemberRegister(testUserRegisterRequestDto);
    }

    return (
        <div className="w-full h-full border flex items-center justify-center">
            <input
              type="text"
              placeholder="이름을 입력해주세용"
              value={testUserName}
              onChange={handleTestUserNameInputChange}
              className="w-[50%] h-[35px] border-blue-500 border rounded-2xl px-2 bg-block"
            />
            <input
              type="text"
              placeholder="나이를 입력해주세용"
              value={testUserAge}
              onChange={handleTestUserAgeInputChange}
              className="w-[50%] h-[35px] border-blue-500 border rounded-2xl px-2 mt-2 block"
            />
            <button onClick={handleSubmit} className="mt-2 w-[35%] h-[35px] border-1 text-black bg-blue-500 rounded-2xl bg- center">
                제출
            </button>
        </div>
    );
};

export default TestUserRegisterPage;
