'use client';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [date, setDate] = useState('');
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('0');
    const [amount, setAmount] = useState(0);

    function AddHandler() {
        fetch('/api/cash', {
            method: 'POST',
            body: JSON.stringify({
                date,
                detail,
                type,
                amount
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    return (
        <>
            <div className="flex justify-center text-white rounded-xl">
                <div className="container p-3 shadow-lg py-32">
                    <div className="grid grid-row justify-center gap-3">
                        <p className="text-3xl text-center">เพิ่มรายการ</p>
                        <div className="grid-grid-cols 1">
                            <div className="grid grid-row-2">
                                <label className='text-lg font-bold'>วันที่:</label>
                                <input type="datetime-local" className="border border-gray-300 p-2 rounded w-96 text-black" onChange={(e) => {
                                    setDate(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="grid grid-row-2">
                                <label className='text-lg font-bold'>รายละเอียด:</label>
                                <input type="text" placeholder="รายละเอียด" className="border border-gray-300 p-2 rounded w-96 text-black" onChange={(e) => {
                                    setDetail(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="grid grid-row-2">
                                <label className='text-lg font-bold'>ประเภท:</label>
                                <select className="border border-gray-300 p-2 rounded text-black" defaultValue={"0"} onChange={(e) => {
                                    setType(e.target.value);
                                }}>
                                    <option value="0">รายรับ</option>
                                    <option value="1">รายจ่าย</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="grid grid-row-2">
                                <label className='text-lg font-bold'>จำนวน:</label>
                                <input type="number" placeholder="จำนวน" className="border border-gray-300 p-2 rounded text-black" onChange={(e) => {
                                    setAmount(parseInt(e.target.value));
                                }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            <div className="grid grid-row-2">
                                <button className="bg-green-500 p-2 rounded text-white" onClick={AddHandler}>บันทึก</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
