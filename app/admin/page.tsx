"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getDecodedToken } from '@/utils/actions';

function Page() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const decoded = getDecodedToken(); 
  console.log(decoded);



  return (
    <div>
      <h1>Admin Page</h1>
      <p>Only admins can see this page!</p>
    </div>
  );
}

export default Page;
