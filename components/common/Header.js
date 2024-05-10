'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { initFlowbite } from 'flowbite'
import { FaBarsStaggered } from "react-icons/fa6";

function Header({stats}) {


  const [status, setStatus] = useState(false);
  const [ekaya, setEkaya] = useState(false);

  const handleToggle = () => {
    setStatus(!status);
    setEkaya(false);
  };
  const handleEkaya = () => {
    setEkaya(!ekaya);
    setStatus(false);
  };



  const handleClick = () => {
    setStatus(false);
    setEkaya(false);
    // alert('hello')
  };

  useEffect(() => {
    initFlowbite();

},[])


  return (

    < >
      <span className='absolute w-full h-screen z-10' onClick={handleClick}></span>
      <nav class="bg-transparent bg-opacity-5 absolute w-full z-50 top-0 start-0 border-b border-[#f8fafc7a]">
<div class="flex justify-between p-4 lg:w-[80%] mx-auto  items-center z-50 ">
          
<div class="text-center lg:hidden">
   <button class="text-white bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
    <FaBarsStaggered size={23} color='black' />
   </button>
</div>
          <div className=''>
            <div class="hidden w-full lg:block md:w-auto" id="navbar-dropdown">

              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center text-white justify-between text-[18px] poppins-light hover:text-white"
                    onClick={handleToggle}
                  >
                    Our Projects <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                  {
                    status && (
                      <div class="z-10 top-20 absolute font-normal bg-white divide-y divide-gray-100  shadow w-44 dark:bg-gray-700 dark:divide-gray-600 w-[600px]">
                        <div className='flex justify-between p-0'>
                          <div className='p-0 w-full'>
                            <p className='border-b border-gray-400 p-2 poppins-light text-[18px]'>Ongoing Projects</p>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                              <li>
                                <Link href="/about-dona-paula" className='px-4 text-e-green poppins-light text-[18px]'>Goa - Dona Paula</Link>
                              </li>
                              <li>
                                <Link href="/vista-do-mar" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Vista Do Mar</Link>
                              </li>
                              <li className='pt-4'>
                                <p className='px-4 text-e-green poppins-light text-[18px]'>Bangalore</p>
                              </li>
                              <li>
                                <Link href="/takshavi" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Takshavi</Link>
                              </li>

                            </ul>
                          </div>
                          <div className='bg-gray-200 p-0 w-full'>
                            <p className='border-b border-gray-400 p-2 poppins-light text-[18px]'>Completed Projects</p>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                              <li>
                                <p className='px-4 text-e-green poppins-light text-[18px]'>Bangalore</p>
                              </li>
                              <li>
                                <Link href="/about-embrace" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Embrace</Link>
                              </li>
                              <li>
                                <Link href="/about-ellen" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Ellen</Link>
                              </li>

                            </ul>
                          </div>
                          <div className='p-0 w-full'>
                            <p className='border-b border-gray-400 p-2 poppins-light text-[18px]'>Upcoming Projects</p>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                              <li>
                              <Link href="/about-moira" className='px-4 text-e-green poppins-light text-[18px]'>Goa — Moira</Link>
                              </li>
                              
                              <li>
                                <Link href="/about-amora" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Amora</Link>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </li>

                <li>
                  <button id="dropdownNavbarLink1" data-dropdown-toggle="dropdownNavba1r" class="flex items-center text-white justify-between text-[18px] poppins-light hover:text-white"
                    onClick={handleEkaya}
                  >
                    About Ekaya <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>

                  {
                    ekaya && (
                      <div class="z-10 top-20 absolute font-normal bg-white divide-y divide-gray-100  shadow w-44 dark:bg-gray-700 dark:divide-gray-600 w-[200px]">
                        <div className='flex justify-between p-0'>
                          <div className='p-0 w-full'>

                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                              <li>
                                <Link href="/about-us" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Story</Link>
                              </li>
                              <li>
                                <Link href="/our-team" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Team</Link>
                              </li>
                              <li>
                                <Link href="why-ekaya" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Why Ekaya</Link>
                              </li>
                              <li>
                                <Link href="/sustainability" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sustainability</Link>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  }
                </li>

              </ul>
            </div>


          </div>
          <div className='lg:mr-[200px] w-40 lg:w-60 md:w-96'>

            <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo.svg" class="h-8" alt="Ekaya" />

            </Link>

          </div>
          <div class="flex md:order-2 space-x-3 md:space-x-0">
            <button type="button" class="text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 poppins-normal rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              INQUIRE
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>



<div id="drawer-navigation" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
  <div class="py-12 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <button type="button" class="flex items-center poppins-light w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-ongoing" data-collapse-toggle="dropdown-ongoing">
                  
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Ongoing Projects</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-ongoing" class="hidden py-2 space-y-2">
                  <li>
                     
                  <Link href="/about-dona-paula" class="flex poppins-light items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group bg-e-green dark:text-white dark:hover:bg-gray-700">
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Goa - Dona Paula</span>
            </Link>
            <ul class="py-2 space-y-2">
                  <li>
                     <Link href="/vista-do-mar" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">— Vista Do Mar</Link>
                  </li>
        
                      </ul>
                <button type="button" class="flex items-center poppins-light w-full p-2 text-base text-white bg-e-green transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                 <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Bangalore</span>
                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                 </svg>
                      </button>
                      <ul class="py-2 space-y-2">
                  <li>
                     <Link href="/takshavi" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">— Takshavi</Link>
                  </li>
                      </ul>
                    </li>
            </ul>
                </li>
                <li>
            <button type="button" class="flex items-center w-full p-2 poppins-light text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-completed" data-collapse-toggle="dropdown-completed">
                  
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Completed Projects</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-completed" class="hidden py-2 space-y-2">
                  <li>
                <button type="button" class="flex poppins-light items-center w-full p-2 text-base text-white bg-e-green transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                 <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Bangalore</span>
                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                 </svg>
                      </button>
                      <ul class="py-2 space-y-2">
                  <li>
                     <Link href="/about-embrace" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">— Embrace</Link>
                        </li>
                        <li>
                     <Link href="/about-ellen" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">— Ellen</Link>
                        </li>
                        
                      </ul>
                    </li>
            </ul>
         </li>
        
         <li>
            <button type="button" class="flex items-center poppins-light w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-upcoming" data-collapse-toggle="dropdown-upcoming">
                  
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Upcoming Projects</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-upcoming" class="hidden py-2 space-y-2">
                  <li>
                     
                  <button type="button" class="flex items-center w-full p-2 text-base poppins-light text-white transition duration-75 rounded-lg group bg-e-green dark:text-white dark:hover:bg-gray-700">
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Goa — Moira</span>
            </button>
            <ul class="py-2 space-y-2">
                  <li>
                     <Link href="/about-amora" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">— Amora</Link>
                  </li>
                      </ul>
                    </li>
            </ul>
                </li>  
                

                <li>
            <button type="button" class="flex items-center poppins-light w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-about" data-collapse-toggle="dropdown-about">
                  
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">About Ekaya</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-about" class="hidden py-2 space-y-2">
                  <li>
            <ul class="py-2 space-y-2">
                  <li>
                     <Link href="/about-us" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Our Story</Link>
                        </li>
                        <li>
                     <Link href="/our-team" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Our Team</Link>
                        </li>
                        <li>
                     <Link href="/why-ekaya" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Why Ekaya</Link>
                        </li>
                        <li>
                     <Link href="/sustainability" class="flex items-center poppins-light w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sustainability</Link>
                  </li>
        
                      </ul>
          
                    </li>
            </ul>
         </li> 
     
       
      </ul>
   </div>
</div>




        </div>










        
      </nav>







    </>
  )
}

export default Header
