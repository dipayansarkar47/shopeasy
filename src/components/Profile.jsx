import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

const Profile = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    return (
        <>

            {isAuthenticated && <div>
                <section class="bg-gradient-to-b from-rose-200 via-pink-100 to-cyan-200  flex font-medium items-center justify-center h-screen">

                    <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-400 text-sm">Profile</span>
                            <span class="text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </span>
                        </div>
                        <div class="mt-6 w-fit mx-auto">
                            <img src={user.picture} class="rounded-full w-28 " alt="profile" srcset="" />
                        </div>

                        <div class="mt-8 ">
                            <h2 class="text-white font-bold text-2xl tracking-wide">{user.given_name} <br /> {user.family_name}</h2>
                        </div>
                        <div onClick={() => logout()} class="bg-emerald-400 py-1 cursor-pointer rounded font-semibold mt-2.5" >
                            Logout
                        </div>

                        <div class="h-1 w-full bg-black mt-8 rounded-full">
                            <div class="h-1 rounded-full  bg-yellow-500 "></div>
                        </div>
                        <div class="mt-3 text-white text-sm">
                            <span class="text-gray-400 font-semibold">Shopeasy | @codewithbiki</span>
                            <span></span>
                        </div>

                    </section>


                </section>
            </div>}
        </>
    )
}

export default Profile