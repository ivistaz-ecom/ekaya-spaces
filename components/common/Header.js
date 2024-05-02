'use client'
import React, { useState } from 'react'
import Link from 'next/link'
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

  return (

    < >
      <span className='absolute w-full h-screen z-20' onClick={handleClick}></span>
      <nav class="bg-transparent bg-opacity-5 absolute w-full z-50 top-0 start-0 border-b border-[#f8fafc7a]">
      

      <div class="flex justify-between p-4 w-[80%] mx-auto  items-center z-50">
          <div className=''>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
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
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Vista Do Mar</a>
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
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Embrace</a>
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
                                <p className='px-4 text-e-green poppins-light text-[18px]'>Goa</p>
                              </li>
                              <li>
                                <Link href="/about-moira" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Moira</Link>
                              </li>
                              <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Amora</a>
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
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Team</a>
                              </li>
                              <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Why Ekaya</a>
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
          <div className='mr-[200px]'>

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
        </div>
      </nav>
    </>
  )
}

export default Header
