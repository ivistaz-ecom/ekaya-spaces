import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className='z-50'>
            <div className='lg:mt-[100px] mt-[30px] grid grid-cols-3 lg:w-[80%] mx-auto overflow-hidden z-50'>
                <Link href="https://www.facebook.com/profile.php?id=61559578016047" className='justify-center align-center flex border-t border-b border-l group border-e-green gray-400 p-4 text-xl poppins-light' style={{ clipPath: 'inset(0 0 0 0 )' }}>
                    Facebook
                    <div class="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">↗</div>
                </Link>
                <Link href="https://www.linkedin.com/company/ekaya-spaces/" className='justify-center align-center flex border group border-e-green p-4 text-xl poppins-light' style={{ clipPath: 'inset(0 0 0 0 )' }}>
                    LinkedIn
                    <div class="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">↗</div>
                </Link>

                <Link href="https://www.youtube.com/@ekayaspaces" className='justify-center align-center flex border-t border-b border-r group border-e-green p-4 text-xl poppins-light' style={{ clipPath: 'inset(0 0 0 0 )' }}>
                    YouTube
                    <div class="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">↗</div>
                </Link>


            </div>

            <footer className='mx-auto bg-gray-200 p-6'>
                <div className='lg:w-[80%] mx-auto'>
                    <Image src="footer-logo.svg" className='pb-6' width={300} height={300} />
                    <hr className='h-px border-t border-gray-300 pb-4 mx-auto ' />
                    <div class="grid lg:grid-cols-3 grid-1">
                        <div className=''>
                            <h3 className='text-xl font-medium pb-5 poppins-medium'>Contact Details</h3>
                            <hr className='h-px border-t-2 border-gray-300 pb-4 mx-auto ' />
                            <p className='text-xl font-light text-gray-600 pb-6 poppins-light'># C 2, Shanthi Kiran apartments, Nandhi Durga Road, Bengaluru 560046</p>
                            <p className='text-xl font-light text-gray-600 poppins-light'><span className="font-medium">Phone:</span> <Link href="tel:+91 98452 47374">+91 98452 47374</Link>
                            </p>
                            <p className='text-xl font-light text-gray-600 poppins-light pb-6'><span className="ml-[72px]"></span> <Link href="tel:+91 98452 47374">+91 98452 47374 </Link>
                            </p>
                            <p className='text-xl font-light text-gray-600 poppins-light'><span className="font-medium">Email:</span> <Link href="mailto:info@ekaya-spaces.com">info@ekaya-spaces.com</Link>
                            </p>
                        </div>
                        <div className='lg:pl-16 mt-14 lg:mt-0'>
                            <h3 className='text-xl font-medium pb-5 poppins-medium'>Our Projects</h3>
                            <hr className='h-px border-t-2 border-gray-300 pb-4 -ml-[77px] ' />
                            <h4 className='text-lg border p-2 border-e-green w-[220px]'>Projects in Bangalore</h4>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                                <li>
                                    <Link href="/about-embrace" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Embrace</Link>
                                </li>
                                <li>
                                    <Link href="/about-ellen" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ellen</Link>
                                </li>
                                <li>
                                    <Link href="/takshavi" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Takshavi</Link>
                                </li>

                            </ul>
                            <h4 className='text-lg border p-2 border-e-green w-[220px]'>Projects in Goa</h4>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <p className='px-4 text-e-green poppins-light text-[18px]'>Goa - Dona Paula</p>
                                </li>
                                <li>
                                    <Link href="/vista-do-mar" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Vista Do Mar</Link>
                                </li>
                                <li className='pt-4'>
                                    <p className='px-4 text-e-green poppins-light text-[18px]'>Moira</p>
                                </li>


                            </ul>

                        </div>
                        <div className='mt-14 lg:mt-0'>
                            <h3 className='text-xl font-medium pb-5 poppins-medium'>About Ekaya</h3>
                            <hr className='h-px border-t-2 border-gray-300 pb-4 mx-auto ' />
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400 poppins-light" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <Link href="/about-us" class="poppins-light block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Story</Link>
                                </li>
                                <li>
                                    <Link href="/our-team" class="poppins-light block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Team</Link>
                                </li>
                                <li>
                                    <Link href="/why-ekaya" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Why Ekaya</Link>
                                </li>
                                <li>
                                    <Link href="/sustainability" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sustainability</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className='lg:w-[80%] mx-auto'>
                    <hr className='h-px border-t border-gray-300 mx-auto ' />
                    <div className='lg:flex justify-between py-6'>
                        <div className='text-[18px] poppins-light text-gray-600 lg:order-1 order-2'>©2024 Ekaya. All Rights Reserved.</div>
                        <div className='text-xl poppins-light text-gray-600 lg:order-2 order-1'>
                            <Link href="/terms-of-use">Terms of Use</Link> l <Link href="/privacy-policy">Privacy Policy</Link> l <Link href="/disclaimer">Disclaimer</Link>
                        </div>
                    </div>
                    <hr className='h-px border-t border-gray-300 pt-6 mx-auto ' />
                </div>


            </footer>

        </div>
    )
}

export default Footer
