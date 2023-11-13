import DBConnection from "@/utils/DBConnection";
import UserSignup from "@/models/UserSignup";
import {NextResponse} from "next/server";
var jwt = require('jsonwebtoken');

export async function POST(req, res) {
    try {

        const body = await req.json();
        await DBConnection();

        await UserSignup.create(body);

        const token = jwt.sign({
            data: body
        }, 'secret', { expiresIn: '12h' });

        return NextResponse.json({
            status: true,
            message:"Registered successfully!",
            token
        }, {
            status: 200
        })

    }catch (error) {
        console.log(error);
        return NextResponse.json(
            { status: false, message: 'Something went wrong' },
            { status: 500 }
        )
    }
}