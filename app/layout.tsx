'use client'
import { useState } from 'react';
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Script from "next/script";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [status, setStatus] = useState(false);

  const handleClick = () => {
      setStatus(false);
  };

  return (
    <html lang="en">
      
      <body  onClick={handleClick}>
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flow/bite/2.3.0/flowbite.min.css" rel="stylesheet" /> */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
        
        <Header stats={status} />
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
