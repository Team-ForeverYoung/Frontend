import React, { useState } from 'react';
import { eventJoin } from '../../service/event/EventService';
import { EventJoinResponseDto } from '../../service/dto/EventJoinRequestDto';

const EventJoinPage = () => {
    const [userId, setUserId] = useState("");
    const [eventId, setEventId] = useState("");

    const handleUserIdInputChange = (event) => {
        setUserId(event.target.value);
    }

    const handleEventIdInputChange = (event) => {
        setEventId(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventJoinRequestDto = new EventJoinResponseDto(Number(userId), Number(eventId));
        const response = await eventJoin(eventJoinRequestDto);
        console.log(response);
    }

    return (
        <div className="w-full h-[50%] border items-center justify-center bg-black">
            <p className="text-[50px] text-white">이벤트에 참여 할 userId를 입력하세요</p>
            <input
                type="text"
                placeholder="이벤트에 참여 할 userId를 입력하세요"
                value={userId}
                onChange={handleUserIdInputChange}
                className="w-[50%] h-[35px] border-blue-500 border rounded-2xl px-2 mt-2 block"
            />
            <p className="text-[50px] text-white">참여 할 이벤트의 eventId를 입력하세요</p>
            <input
                type="text"
                placeholder="참여 할 이벤트의 eventId를 입력하세요"
                value={eventId}
                onChange={handleEventIdInputChange}
                className="w-[50%] h-[35px] border-blue-500 border rounded-2xl px-2 mt-2 block"
            />
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={handleSubmit}>
                참여
            </button>
        </div>
    );
}

export default EventJoinPage;
