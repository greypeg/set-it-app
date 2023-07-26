"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";;
import { Button } from "../baseweb-ui/button";

export const Navbar: React.FC = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='w-full h-[80px] z-10 bg-white drop-shadow-lg'>
            <div className='px-2 flex md:justify-around justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>SetItApp</h1>
                </div>
                <div className='hidden md:flex pr-4'>
                    <div className='flex items-center gap-16'>
                        <ul className='grid gap-8 hidden md:flex'>
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/"}>About</Link></li>
                            <li><Link href={"/"}>Pricing</Link></li>
                            <li><Link href={"/"}>Contact</Link></li>
                        </ul>
                        {/* {!user.isSignedIn ?
                            <>
                              
                                    <Button size="compact" overrides={{
                                        BaseButton: {
                                            style: ({ $theme }) => ({
                                                background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                            })
                                        }
                                    }}
                                    >
                                        Login
                                    </Button>
                           
                            </> : 
                                <Button size="compact" overrides={{
                                    BaseButton: {
                                        style: ({ $theme }) => ({
                                            background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                        })
                                    }
                                }}>
                                    Sign Out
                                </Button>
                            } */}
                    </div>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {/* {!nav ? <HiMenuAlt1 className='w-5' /> : <HiX className='w-5' />} */}
                </div>
            </div>
            <div>
                <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 py-8 h-screen flex flex-col gap-8'}>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/"}>Home</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>About</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Pricing</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Contact</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>FAQ</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/home"}>Contact</Link></li>
                    <div className='flex flex-col my-4'>
                        {/* {!user.isSignedIn ?
                            <>
                                <SignInButton>
                                    <Button size="compact" overrides={{
                                        BaseButton: {
                                            style: ({ $theme }) => ({
                                                background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                            })
                                        }
                                    }} >
                                        Login
                                    </Button>
                                </SignInButton>
                            </> : <SignOutButton>
                                <Button size="compact" overrides={{
                                    BaseButton: {
                                        style: ({ $theme }) => ({
                                            background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                        })
                                    }
                                }}>
                                    Sign Out
                                </Button>
                            </SignOutButton>} */}
                    </div>
                </ul>
            </div>
        </div>
    );
};