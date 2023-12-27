"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "../icons";
import { Button } from "baseui/button";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

export const Navbar: React.FC = () => {
    const router = useRouter();
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const { data: session } = useSession();
    return (
        <div className='w-full h-[80px] z-10 bg-white drop-shadow-lg'>
            <div className='px-2 flex md:justify-around justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='mr-4 text-3xl font-bold sm:text-4xl'>SetApp.</h1>
                </div>
                <div className='hidden md:flex pr-4'>
                    <div className='flex items-center gap-16'>
                        <ul className='grid gap-8 hidden md:flex'>
                            {session?.user ? <li><Link href={"/dashboard"} className="hover:underline">Dashboard</Link></li> : null}
                            <li><Link href={"/"} className="hover:underline">Home</Link></li>
                            {/* <li><Link href={"/pricing"} className="hover:underline">Pricing</Link></li> */}
                            <li><Link href={"/our-team"} className="hover:underline">Our Team</Link></li>
                            <li><Link href={"/contact"} className="hover:underline">Contact</Link></li>
                        </ul>
                        {session && session.user ?
                            <Button
                                onClick={() => signOut()}
                                overrides={{
                                    BaseButton: {
                                        style: () => ({
                                            background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                        })
                                    }
                                }}>Log out</Button> : <Button
                                    onClick={() => router.push('/login')}
                                    overrides={{
                                        BaseButton: {
                                            style: () => ({
                                                background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                            })
                                        }
                                    }}>Login</Button>}
                    </div>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon /> : <div className="ease-in-out duration-300"> <CloseIcon /> </div>}
                </div>
            </div>
            <div>
                <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 py-8 h-screen flex flex-col gap-8'}>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/"}>Home</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/pricing"}>Pricing</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/out-team"}>Our Team</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/licensing"}>Licensing</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link href={"/contact"}>Contact</Link></li>

                    <div className='flex flex-col my-4'>
                        {session && session.user ?
                            <Button
                                onClick={() => signOut()}
                                overrides={{
                                    BaseButton: {
                                        style: () => ({
                                            background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                        })
                                    }
                                }}>Log out</Button> : <Button
                                    onClick={() => router.push('/login')}
                                    overrides={{
                                        BaseButton: {
                                            style: () => ({
                                                background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                                            })
                                        }
                                    }}>Login</Button>}
                    </div>
                </ul>
            </div>
        </div>
    );
};