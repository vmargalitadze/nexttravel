import { NextResponse } from 'next/server';
import { registerUser } from '@/utils/actions';

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    const result = await registerUser(formData);

   
    return NextResponse.redirect('http://localhost:3000/');
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
