"use client"
import React, { useEffect } from 'react';
import Hero from '../components/hero';
const Page = () => {
    useEffect(() => {
        // Code to execute after component mounts on client-side
        console.log("dsdas");
    }, []);

    return (
        <div>
           <Hero/>
           dsa
        </div>
    );
}

export default Page;
