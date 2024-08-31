import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextResponse) {
  try {
    const response = await fetch('http://192.168.34.173:8080/buyer/get-all-orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log('Spring boot backend data-',data)
    NextResponse.json(data)
    }

    catch (error) {
        console.error('Error:', error);
        }
}
