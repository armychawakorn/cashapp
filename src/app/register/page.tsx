'use client'
import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2'

//หน้าสมัครสมาชิก
export default function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function RegisterHandler() {
        if(password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'รหัสผ่านไม่ตรงกัน',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        Swal.fire({
            icon: 'info',
            title: 'กำลังสมัครสมาชิก...',
            showConfirmButton: false,
        });
        fetch('/api/signup',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }
        ).then(res=>res.json()).then(data=>{
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'สมัครสมาชิกสำเร็จ',
                showConfirmButton: false,
                timer: 1500
            }).then(()=>{
                window.location.href = '/login';
            })
        })
    }
    return (
        <div className="flex justify-center text-white rounded-xl">
            <div className="container p-3 shadow-lg py-32">
                <div className="grid grid-row justify-center gap-3">
                    <p className="text-3xl text-center">สมัครสมาชิก</p>
                    <div className="grid grid-cols-1">
                        <div className="grid grid-row-2">
                            <label className='text-lg font-bold'>อีเมล:</label>
                            <input type="email" placeholder="อีเมล" className="border border-gray-300 p-2 rounded text-black" onChange={(e)=>{
                                setEmail(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="grid grid-row-2">
                            <label className='text-lg font-bold'>รหัสผ่าน:</label>
                            <input type="password" placeholder="รหัสผ่าน" className="border border-gray-300 p-2 rounded text-black" onChange={(e)=>{
                                setPassword(e.target.value);
                            }}/>
                        </div>
                        <div className="grid grid-row-2">
                            <label className='text-lg font-bold'>ยืนยันรหัสผ่าน:</label>
                            <input type="password" placeholder="ยืนยันรหัสผ่าน" className="border border-gray-300 p-2 rounded text-black" onChange={(e)=>{
                                setConfirmPassword(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={RegisterHandler}>
                            สมัครสมาชิก
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
