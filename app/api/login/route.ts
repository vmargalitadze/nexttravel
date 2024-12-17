import { NextResponse } from 'next/server';
import { loginUser } from '@/utils/actions';
import * as cookie from 'cookie';  // Correctly importing cookie

export async function POST(request: Request) {
  const formData = await request.formData();

  try {
    const { message, token } = await loginUser(formData);

    // Set the JWT token in an HTTP-only cookie
    const res = NextResponse.redirect('https://nexttravel2.vercel.app/');
    res.headers.set(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true, // Prevent JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === 'production', // Ensures the cookie is only sent over HTTPS in production
        maxAge: 60 * 60, // Token expiry in seconds (1 hour)
        path: '/', // Path where the cookie is available
        sameSite: 'strict', // Helps mitigate CSRF attacks
      })
    );

    return res;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
