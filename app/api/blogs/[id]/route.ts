import { deletePosts, getById, updatePost } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    try{
        const id = req.url.split('blogs/')[1]
        const post = getById(id)
        if (!post) {
            return NextResponse.json({ message: 'not found id' }, { status: 404 })
        }
        return NextResponse.json({ message: 'OK', post }, { status: 200 })
    } catch(err) {
        return NextResponse.json(
            { message: 'not found id', err },
            { status: 500 }
        )
    }
}

export const PUT = async (req: Request) => {
    try {
        const { title, desc } = await req.json()
        const id = req.url.split('blogs/')[1]
        
        updatePost(id, title, desc)
        return NextResponse.json({ message: 'OK', id, title, desc }, { status: 200 })
    } catch(err) {
        return NextResponse.json({ message: 'not found id', err }, { status: 500 })
    }
}

export const DELETE = async (req: Request) => {
    try {
        const id = req.url.split('blogs/')[1]
        if (id) {
            deletePosts(id)
            return NextResponse.json({ message: 'OK', id }, { status: 200 })
        } else {
            return NextResponse.json({ message: 'not found id' }, { status: 404 })
        }
    } catch(err) {
        return NextResponse.json({ message: 'not found id', err }, { status: 500 })
    }
}