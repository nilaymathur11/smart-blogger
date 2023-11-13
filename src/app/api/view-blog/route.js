import DBConnection from "@/utils/DBConnection";
import CreateBlogs from "@/models/CreateBlogs";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();
        const _id = body.blog_id
        await DBConnection();

        const blogs = await CreateBlogs.findById(_id);

        return NextResponse.json({
            status: true,
            message:"Success!",
            blogs
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