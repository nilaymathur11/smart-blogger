import DBConnection from "@/utils/DBConnection";
import CreateBlogs from "@/models/CreateBlogs";
import fsPromises from 'fs/promises';
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const data = await req.formData();
        const image = data.get('blog_image');
        const imgByteData = await image.arrayBuffer();
        const imgBuffer = Buffer.from(imgByteData)
        const imgPath = `./public/uploads/${Date.now()}-${image.name}`
        const imgName = `${Date.now()}-${image.name}`;
        
        await fsPromises.writeFile(imgPath,imgBuffer);

        const video = data.get('blog_video');
        const vidByteData = await video.arrayBuffer();
        const vidBuffer = Buffer.from(vidByteData)
        const vidPath = `./public/uploads/${Date.now()}-${video.name}`
        const vidName = `${Date.now()}-${video.name}`
        
        await fsPromises.writeFile(vidPath,vidBuffer);

        await DBConnection();
        let finalData = {};
        data.forEach((value, key) => finalData[key] = value);
        finalData.blog_image = imgName;
        finalData.blog_video = vidName;
        CreateBlogs.create(finalData)
        return NextResponse.json({
            status: true,
            message:"Created blog successfully!"
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