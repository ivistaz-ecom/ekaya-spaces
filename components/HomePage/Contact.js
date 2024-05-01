import React from 'react'

function Contact() {
  return (
    <div className='mt-[100px] w-[80%] mx-auto bg-gray-200 p-6'>
          <h3 className='text-[46px]'>Get in touch</h3> 
          <h4 className='text-2xl font-light text-gray-600'>*Required fields</h4>

          <form class="py-6">
          <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name*</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name*</label>
    </div>
              </div>
              
              <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telephone*</label>
    </div>
  </div>


  <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_location" id="floating_location" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
        <label for="floating_location" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
    </div>
              </div>
              

              <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="checkbox-round text-gray-500 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" class="ms-2 text-xl font-light text-gray-500 dark:text-gray-300">I declare that I have read, understood and accept the <a href="#" class="text-black dark:text-black hover:underline">privacy policy</a>.</label>
</div>
    
              


  <button type="submit" class="my-6 text-white bg-gray-600 font-light text-xl w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
<div class="flex flex-col content-between gap-x-2 sm:flex-row sm:justify-center sm:space-y-0">
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-w-blue"><span className="text-e-green">Call:</span> +91 98440 32022</h5>
          </div>
          <div class="inline-block h-[31px] min-h-[0.20em] w-[0.15em] self-stretch bg-e-green lg:block hidden"></div>
          <hr className='h-px border-t w-9/12 border-e-green pb-4 mx-auto lg:hidden block'/>
          <div class="block">
            <h5 class="mb-2 text-2xl font-light tracking-tight text-w-green poppins-light"><span className="text-e-green">Email:</span> contact@ekaya.in</h5>
          </div>
        </div>
    </div>
  )
}

export default Contact
