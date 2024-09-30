'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Nav() {
    return (
        <div className='grid grid-cols-4 bg-white h-full'>
            <div className='flex items-center'>
                <Image src='https://khonkaenuniversity.in.th/wp-content/uploads/2022/01/1.-official-logo-2022-26-500x465.png' alt='logo' width={64} height={64} />
                <p className="text-2xl font-bold">โปรแกรมบัญชีรายรับรายจ่าย</p>
            </div>
            <div className="col-span-3">
                <div className="flex justify-end h-full">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 m-2 px-4 rounded w-48 text-center" onClick={()=>{
                        signOut();
                    }}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
