import React from 'react'

function Banner() {
  return (
      <div className="bg-center bg-no-repeat bg-cover bg-[url('/slider.png')] bg-gray-300 bg-blend-multiply h-screen relative">
            <div className='w-[80%] absolute bottom-0 py-12 ml-40'>
              <h1 className='text-7xl text-white poppins-light'>
              Embrace
              </h1>
              <h2 className='text-7xl text-[#BBC6C9] poppins-light'>
              by Ekaya Spaces
              </h2>
            <div class="flex flex-col py-12 content-between gap-x-2 sm:flex-row sm:justify-start sm:space-y-0">
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-white">Ganga Nagar</h5>
          </div>
          <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block hidden"></div>
          <hr className='h-px border-t w-9/12 border-whitepb-4 mx-auto lg:hidden block'/>
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-white poppins-light">Bengaluru</h5>
                  </div>
                  <div class="inline-block h-[28px] min-h-[0.20em] w-[0.15em] self-stretch bg-white lg:block hidden"></div>
          <hr className='h-px border-t w-9/12 border-white pb-4 mx-auto lg:hidden block'/>
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-white poppins-light">India</h5>
          </div>
        </div>
          </div>
          
    
      <div className='bg-white flex w-[450px] justify-between absolute bottom-0 right-0 items-center'>
        <div className='hover:bg-[#46566D] group  tracking-[0.32px] poppins-light w-[350px] content-center hover:text-white h-20 text-center flex items-center justify-center' >CONTACT US
          <div class="items-center justify-center h-24 w-10 transition ease-in-out group-hover:delay-10 translate-y-10 translate-x-1 group-hover:translate-y-10 group-hover:translate-x-5">
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>

          </div>
          
        </div>
        <div className=''></div>
      </div>

    </div>
  )
}

export default Banner
