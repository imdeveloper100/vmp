"use client"
import React, { useEffect } from 'react';
import Hero from '../components/hero';
const Page = () => {
    useEffect(() => {
        // Code to execute after component mounts on client-side
    }, []);

    return (
        <div>
           <Hero/>
        </div>
    );
}

export default Page;
