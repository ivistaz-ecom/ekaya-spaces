import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <div className='z-50'>
            <div className='mt-[100px] grid grid-cols-3 w-[80%] mx-auto overflow-hidden z-50'>
                <div className='justify-center align-center flex border-t border-b border-l group border-e-green gray-400 p-4 text-xl poppins-light' style={{clipPath: 'inset(0 0 0 0 )'}}>
                Facebook
  <div class="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">↗</div>              
                </div>
                <div className='justify-center align-center flex border group border-e-green p-4 text-xl poppins-light' style={{clipPath: 'inset(0 0 0 0 )'}}>
                LinkedIn
  <div class="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">↗</div>              
                </div>
                
                <div className='justify-center align-center flex border-t border-b border-r group border-e-green p-4 text-xl poppins-light' style={{clipPath: 'inset(0 0 0 0 )'}}>
                YouTube
  <div class="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:delay-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">↗</div>              
                </div>
                
        
            </div>

        <footer className='mx-auto bg-gray-200 p-6'>
            <div className='w-[80%] mx-auto'>
                    <Image src="footer-logo.svg" className='pb-6' width={300} height={300} />
                <hr className='h-px border-t border-gray-300 pb-4 mx-auto ' />
                <div class="grid grid-cols-3">
                    <div className=''>
                        <h3 className='text-xl font-medium pb-5 poppins-medium'>Contact Details</h3>
                        <hr className='h-px border-t-2 border-gray-300 pb-4 mx-auto ' />
                        <p className='text-xl font-light text-gray-600 pb-6 poppins-light'># C 2, Shanthi Kiran APartments, Nandhi Durga Road, Bengaluru 560046</p>
                        <p className='text-xl font-light text-gray-600 poppins-light'><span className="font-medium">Phone:</span> +91 98452 47374
                        </p>
                        <p className='text-xl font-light text-gray-600 poppins-light pb-6'><span className="ml-[72px]"></span> +91 98452 47374
                        </p>
                        <p className='text-xl font-light text-gray-600 poppins-light'><span className="font-medium">Email:</span> contact@ekaya.in
                        </p>
                    </div>
                    <div className='pl-16'>
                        <h3 className='text-xl font-medium pb-5 poppins-medium'>Our Projects</h3>
                        <hr className='h-px border-t-2 border-gray-300 pb-4 -ml-[77px] ' />
                        <h4 className='text-lg border p-2 border-e-green w-[220px]'>Projects in Bangalore</h4>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            
                                <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Embrace</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ellen</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Takshavi</a>
                            </li>

                        </ul>
                        <h4 className='text-lg border p-2 border-e-green w-[220px]'>Projects in Goa</h4>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <p className='px-4 text-e-green poppins-light text-[18px]'>Goa - Dona Paula</p>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">— Vista Do Mar</a>
                            </li>
                            <li className='pt-4'>
                                <p className='px-4 text-e-green poppins-light text-[18px]'>Moira</p>
                            </li>


                        </ul>

                    </div>
                    <div>
                        <h3 className='text-xl font-medium pb-5 poppins-medium'>About Ekaya</h3>
                        <hr className='h-px border-t-2 border-gray-300 pb-4 mx-auto ' />
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400 poppins-light" aria-labelledby="dropdownLargeButton">
                            <li>
                                <a href="#" class="poppins-light block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Story</a>
                            </li>
                            <li>
                                <a href="#" class="poppins-light block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Team</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Why Ekaya</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sustainability</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className='w-[80%] mx-auto'>
                <hr className='h-px border-t border-gray-300 mx-auto ' />
                <div className='flex justify-between py-6'>
                    <div className='text-xl poppins-light text-gray-600'>©2024 Ekaya. All Rights Reserved.</div>
                    <div className='text-xl poppins-light text-gray-600'>
                    Terms of Use l Privacy Policy l Disclaimer
                    </div>
                </div>
                <hr className='h-px border-t border-gray-300 pt-6 mx-auto ' />
</div>


            </footer>
            
            </div>
    )
}

export default Footer
