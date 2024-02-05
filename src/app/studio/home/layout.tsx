'use client'

import React, { useContext } from "react";

import MainLayout from "../layout";
import NoSSR from "../../../components/NoSSR";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Layout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/')
  }

  return (
    <NoSSR>
      <MainLayout>
        {children}
      </MainLayout>
    </NoSSR>
  )
};

