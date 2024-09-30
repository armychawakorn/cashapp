'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { ICash } from './Cash';
import Link from 'next/link';

export default function page() {
    const { data: session } = useSession();
    const [cash, setCash] = useState<ICash[]>([]);
    useEffect(() => {
        fetch('/api/cash', {
            method: 'GET',
        }).then(res=>res.json()).then(data=>{
            console.log(data.body);
        })
    }, [session])

    if (!session) {
        return (
            <>
                <div className="flex justify-center">
                    <p className="text-2xl">
                        Loading....
                    </p>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex justify-center text-white rounded-xl">
                <div className="container p-3 shadow-lg py-32">
                    <div className="grid grid-row justify-center gap-3">
                        <p className="text-3xl text-center">รายรับรายจ่ายของคุณ</p>
                        <div className="grid grid-cols-7 gap-x-2 text-center font-bold">
                            <div className="col-span-7">
                                <div className="flex justify-end">
                                    <Link href={"/dashboard/add"} className="bg-green-500 p-2 rounded text-white">เพิ่มรายการ</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-x-2 text-center font-bold">
                            <div className="col-span-1">วันที่</div>
                            <div className="col-span-2">รายละเอียด</div>
                            <div className="col-span-1">ประเภท</div>
                            <div className="col-span-2">จำนวน</div>
                            <div className="col-span-1">จัดการ</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
