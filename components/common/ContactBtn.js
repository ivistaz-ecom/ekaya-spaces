import React from 'react'

function ContactBtn() {
  return (
    <div className='lg:bg-white flex w-[450px] justify-between absolute bottom-0 right-0 items-center z-30'>
    <div className='hover:bg-[#46566D] bg-white group  tracking-[0.32px] poppins-light w-[350px] content-center hover:text-white h-20 text-center flex items-center justify-center' >CONTACT US
      <div class="items-center justify-center h-24 w-10 transition ease-in-out group-hover:delay-10 translate-y-10 translate-x-1 group-hover:translate-y-10 group-hover:translate-x-5">
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>

      </div>
      
    </div>
    <div className=''></div>
  </div>
  )
}

export default ContactBtn
