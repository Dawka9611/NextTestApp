import { NextRequest } from "next/server"

export async function  GET(params:Request) {
    return new Response('HI')
}

export async function  POST(params:NextRequest) {
    const body = await params.json()
    console.log(body)
    console.log(params.cookies.get('cookie'))
    return new Response(JSON.stringify({hello: 'world'}))
}