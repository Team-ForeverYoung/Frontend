import React, { useState } from 'react';
import {testMemberInfo} from '../../service/test/testService'
const TestUserInfoPage = () => {
    const [testUserPk, setTestUserPk] = useState("");

    const handleTestUserPkInputChange = (event) => {
        setTestUserPk(event.target.value);  // 새로운 값을 상태로 설정
        console.log(response);
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        const response = testMemberInfo(testUserPk);
        console.log(response);
        
        
    }

    return (
        <div className="w-full h-[50%] border items-center justify-center bg-black">
            <p className="text-[50px] text-white">TestUser의 PK를 입력해주세요</p>
            <input
                type="text"
                placeholder="pk입력 ㄱㄱ"
                value={testUserPk}
                onChange={handleTestUserPkInputChange}  // 여기서 수정한 함수 사용
                className="w-[50%] h-[35px] border-blue-500 border rounded-2xl px-2 mt-2 block"
            />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={handleSubmit}>
                조회
            </button>
        </div>
    );
}

export default TestUserInfoPage;
