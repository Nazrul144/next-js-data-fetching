import { NextResponse } from "next/server";

const user = true;
export function middleware(request){
    if(!user){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    else{
        return NextResponse.next();
    }
    
}

export const config = {
    matcher: '/dashboard'
}