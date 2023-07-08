import db from '@/db.json'
import { NextResponse } from "next/server"

export const GET =()=>{
    const products = db.products
    return NextResponse.json(products)
}