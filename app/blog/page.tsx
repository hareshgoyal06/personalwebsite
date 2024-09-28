'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from '@next/font/google'


const poppins = Poppins({
    weight: ['400', '600', '700'], // Choose font weights (regular, semi-bold, bold)
    subsets: ['latin'], // Choose the character subset you need
  })


export default function BlogPage() {
return (
    <div>
    <div className={poppins.className}></div>
        <p>My Blog</p>
        <p>yet to be updated </p>
    </div>


)
}
