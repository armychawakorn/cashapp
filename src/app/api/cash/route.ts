import { NextRequest, NextResponse } from "next/server";
import IResponse from "../IResponse";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import cash from "@/models/cash";

export async function GET(){
    const session = await getServerSession(authOptions);
    if(!session){
        return NextResponse.json<IResponse>({
            status: 401,
            message: 'Unauthorized'
        })
    }
    const userEmail = session!.user?.email;
    const allcash = await cash.find({email: userEmail});
    return NextResponse.json<IResponse>({
        status: 200,
        message: 'Success',
        body: allcash
    })
}

export async function POST(req: NextRequest){
    const session = await getServerSession(authOptions);
    if(!session){
        return NextResponse.json<IResponse>({
            status: 401,
            message: 'Unauthorized'
        })
    }
    const userEmail = session!.user?.email;
    const body = await req.json();
    const {detail, type, amount} = body;
    console.log(body);
    if(!detail || !type || !amount){
        return NextResponse.json<IResponse>({
            status: 400,
            message: 'Detail, type and amount are required'
        })
    }
    const newCash = new cash({
        owner: userEmail,
        description: detail,
        type,
        amount
    });
    await newCash.save();
    return NextResponse.json<IResponse>({
        status: 200,
        message: 'Success',
        body: newCash
    })
}