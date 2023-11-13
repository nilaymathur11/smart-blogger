import DBConnection from "@/utils/DBConnection";
import UserLogin from "@/models/UserLogin";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

export async function POST(req, res) {
    try {

        const body = await req.json();
        await DBConnection();

        const user_data = await UserLogin.findOne(body);

        if (user_data) {
            const token = jwt.sign({
                data: body
            }, 'secret', { expiresIn: '12h' });
            return NextResponse.json({
                data: user_data,
                status: true,
                message: "Success!!",
                token
            }, {
                status: 200
            })
        } else {
            return NextResponse.json({
                status: false,
                message: "No user found"
            }, {
                status: 200
            })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { status: false, message: 'Something went wrong' },
            { status: 500 }
        )
    }
}