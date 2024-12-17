

import db from './db';
import { redirect } from 'next/navigation';
import { PrismaClient } from "@prisma/client";
import jwt, { JwtPayload } from 'jsonwebtoken'
import prisma from "./db";
import bcrypt from 'bcryptjs'
import * as cookie from 'cookie';





// const getAuthUser = async () => {
//   const user = await currentUser();
//   if (!user) {
//     throw new Error('You must be logged in to access this route');
//   }

//   return user;
// };


const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};

const getAdminUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  const isAdmin = user?.admin;
  return { user, isAdmin };
};

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  if (!email || !password || !name) {
    throw new Error('All fields are required.');
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User already exists.');
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return { message: 'User created successfully', user };
}

export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Fetch the user from the database based on the email
  const user = await prisma.user.findUnique({
    where: { email },
  });
const isAdmin = user?.admin
  if (!user) {
    throw new Error('User not found');
  }

  // Compare the provided password with the hashed password stored in the database
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid password');
  }

  // Generate JWT token, include the userId and admin status in the payload
  const token = jwt.sign(
    { userId: user.id, isAdmin },  // Include admin status in the payload
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );
console.log(user);
console.log(isAdmin);

  // Return user data along with the token and admin status
  return { message: 'Login successful', token, user };
}

interface CustomJwtPayload extends JwtPayload {
  userId: string;
  isAdmin: boolean;
}



// For client-side token decoding:
export async function getDecodedToken() {
  if (typeof window === 'undefined') {
    return null;
  }

  const token = localStorage.getItem('token');
  if (!token) return null;

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('JWT_SECRET is not defined');
    return null;
  }

  try {
    // Decode the JWT token
    const decoded: any = jwt.verify(token, secret);

    // Extract the email from the decoded token
    const email = decoded.email;

    if (!email) {
      console.error('Email not found in token');
      return null;
    }

    // Fetch user and check if they are an admin
    const { user, isAdmin } = await getAdminUser(email);

    if (!user) {
      console.error('User not found');
      return null;
    }

    // Return the user and their admin status
    return { user, isAdmin };
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}