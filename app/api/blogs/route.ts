import { addPosts, getPosts, updatePost } from "@/lib/data";
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    try {
        const posts = getPosts();
        return NextResponse.json(
            { message: 'OK', posts },
            { status: 200 }
        )
    } catch(err) {
        return NextResponse.json(
            { message: "Error", err }.err, 
            { status: 500 }
        )
    }
}

export const POST = async (req: Request, res: Response) => {
    const { title, desc } = await req.json()

    try {
        const post = { id: Date.now().toString(), title, desc, date: new Date() }
        addPosts(post)
        return NextResponse.json({ message: 'OK', post }, { status: 201 })
    } catch(err) {
        return NextResponse.json(
            { message: "Error", err }.err,
            { status: 500 }
        )
    }
}

export const DELETE = async (req: Request, res: Response) => {
    console.log('delete request')
}