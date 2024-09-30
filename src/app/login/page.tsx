'use client'
import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import { signIn } from "next-auth/react";

export default function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function LoginHandler(){
        Swal.fire({
            icon: 'info',
            title: 'กำลังเข้าสู่ระบบ...',
            showConfirmButton: false,
        });
        
        signIn('credentials', {
            email,
            password,
            redirect: false
        }).then((res)=>{
            if(res!.error){
                Swal.fire({
                    icon: 'error',
                    title: 'กรุณาตรวจสอบอีเมลหรือรหัสผ่าน',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'เข้าสู่ระบบสำเร็จ',
                    showConfirmButton: false,
                    timer: 1500
                }).then(()=>{
                    window.location.href = '/dashboard';
                })
            }
        });
    }
    return (
        <div className="flex justify-center text-white rounded-xl">
            <div className="container p-3 shadow-lg py-32">
                <div className="grid grid-row justify-center gap-3">
                    <p className="text-3xl text-center">เข้าสู่ระบบ</p>
                    <div className="grid grid-cols-1">
                        <div className="grid grid-row-2">
                            <label className='text-lg font-bold'>Email:</label>
                            <input type="email" placeholder="อีเมล" className="border border-gray-300 p-2 rounded w-96 text-black" onChange={(e)=>{
                                setEmail(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="grid grid-row-2">
                            <label className='text-lg font-bold'>รหัสผ่าน:</label>
                            <input type="password" placeholder="รหัสผ่าน" className="border border-gray-300 p-2 rounded text-black" onChange={(e)=>{
                                setPassword(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={LoginHandler}>
                            เข้าสู๋ระบบ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
