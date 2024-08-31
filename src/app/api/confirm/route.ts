import { NextRequest, NextResponse } from "next/server"
import { join } from "path";
import fs from 'fs/promises'
import {confirmedOrder } from "../../../../dataset/confirm"


export async function POST(request : NextRequest, response : NextResponse) {
    try {
        const body = await request.json();
        
        confirmedOrder.push(body);
        const fileContent = `export const confirmedOrder = ${JSON.stringify(confirmedOrder, null, 2)};`;

        const filePath = join('F:/webs/sih_project/dataset', 'confirm.js');
        await fs.writeFile(filePath, fileContent, 'utf8');

        return NextResponse.json({ status: 200, message: 'Success' });
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
}

export async function GET(request : NextRequest, response : NextResponse) {
    return NextResponse.json({ message: 'success' })
}