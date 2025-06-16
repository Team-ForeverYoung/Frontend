import React, { useState } from 'react';
import "./Complete.css";
import { useNavigate } from 'react-router-dom';
import { getBaseInstance } from "../service/config";

const CompletePage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [totalPoint, setTotalPoint] = useState(null);

  const handleCheckPoint = async () => {
    if (!userId.trim()) {
      alert("유저 PK를 입력해주세요.");
      return;
    }

    try {
      const axiosInstance = getBaseInstance();
      const response = await axiosInstance.get(`/point/${userId}`);

      const userPoint = response.data?.data?.point || 0;
      setTotalPoint(userPoint);
    } catch (error) {
      console.error("서버 요청 중 오류:", error);
      alert("포인트 조회 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="complete-container">
      <div className="complete-left ml-[15%]">
        <h2 className="complete-title">포인트 조회</h2>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="유저 PK 입력"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <button className="complete-button" onClick={handleCheckPoint}>
            포인트 조회하기
          </button>
        </div>

        {totalPoint !== null && (
          <div style={{ fontWeight: "bold", fontSize: "18px", marginTop: "10px" }}>
            총 적립 포인트: {totalPoint.toLocaleString()}점
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletePage;
