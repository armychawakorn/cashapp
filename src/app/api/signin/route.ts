import { CreateConnection } from "@/libs/mongodb";
import user from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { signIn } from "next-auth/react";

export async function POST(req: NextRequest){
    const body = await req.json();
    const {email, password} = body;
    if(!email || !password){
        return NextResponse.json({
            status: 400,
            message: 'Email and password are required'
        });
    }

    const res = await signIn('credentials', {
        email,
        password,
        redirect: false
    });

    return NextResponse.json({
        status: 200,
        data: res
    });
}