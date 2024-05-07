'use client'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import axios from 'axios';
import server from '../../config.json'

function Contact() {

  const Locations = [
    {'name':'Embrace'},
    { 'name': 'Ellen' },
    { 'name': 'Takshavi' },
    { 'name': 'Vista Do Mar' },
    { 'name': 'Moira' },
  ]

  const [errors, setErrors] = useState({});
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [submitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('');
  const [acceptance, setAcceptance] = useState('');


  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setAcceptance('agree');
    
  };
  const nameRegex = /^[a-zA-Z\s]*$/
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const phoneRegex = /^\d+$/
  const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com'];
  function isValidEmail(email) {
    const [_, domain] = email.split('@');
    return notAllowedDomains.includes(domain);
  }

  const nameErrors = {
    field: 'floating_first_name',
    message: 'invalid character'
  }
  const lastErrors = {
    field: 'floating_last_name',
    message: 'invalid character'
  }
  const locationErrors = {
    field: 'floating_location',
    message: 'invalid character'
  }
  const emailErrors = {
    field: 'floating_email',
    message: 'Please enter a valid email address.'
  }

  const customDomainErrors = {
    field: 'floating_email',
    message: 'This email domain is not allowed.'
  }
  const customPhoneErrors = {
    field: 'floating_phone',
    message: 'Please enter only numbers.'
  }



  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    //alert(e.target.value)

      if (name === 'floating_first_name') {
        if (!nameRegex.test(value)) {
          console.log('invalid character')
          const fieldErrors = {}
          const { field, message } = nameErrors;
          fieldErrors[field] = message;
          setErrors(fieldErrors);
        }
        else {
          console.log('valid character')
          setErrors('')
        }
      }
      if (name === 'floating_last_name') {
        if (!nameRegex.test(value)) {
          console.log('invalid character')
          const fieldErrors = {}
          const { field, message } = lastErrors;
          fieldErrors[field] = message;
          setErrors(fieldErrors);
        }
        else {
          console.log('valid character')
          setErrors('')
        }
      }

      if (name === 'floating_email') {

        if (!emailRegex.test(value)) {
          console.log('invalid Email')
          const fieldErrors = {}
          const { field, message } = emailErrors;
          fieldErrors[field] = message;
          setErrors(fieldErrors);
        }
        else {
          console.log('valid character')
          setErrors('')
        }
        if (isValidEmail(value)) {
          console.log('invalid Email')
          const fieldErrors = {}
          const { field, message } = customDomainErrors;
          fieldErrors[field] = message;
          setErrors(fieldErrors);
        }
        else {
          console.log('valid character')
          setErrors('')
        }

      }

      if (name === 'floating_phone') {
        if (!phoneRegex.test(value)) {
          console.log('invalid character')
          const fieldErrors = {}
          const { field, message } = customPhoneErrors;
          fieldErrors[field] = message;
          setErrors(fieldErrors);
        }
        else {
          console.log('valid character')
          setErrors('')
        }
      }
    if (name === 'floating_location') {
        if (!nameRegex.test(value)) {
          console.log('invalid character')
          const fieldErrors = {}
          const { field, message } = locationErrors;
          fieldErrors[field] = message;
          setErrors(fieldErrors);
        }
        else {
          console.log('valid character')
          setErrors('')
        }
    }
    
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });  



  }

  const [formData, setFormData] = useState({
    floating_first_name: '',
    floating_last_name: '',
    floating_email: '',
    floating_phone: '',
    project_select: '',
    floating_location: '',
    agree:'',
});

  const handleForm = async (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    setErrors({});
    setIsSubmitting(true)
    try {
      const response = await axios.post(`${server.SERVER_FROM}contact-form-7/v1/contact-forms/7/feedback`,
          formData,
          {
              headers: {
                  "Content-Type": 'multipart/form-data',
              }
          });
      console.log(response.data);
      if (response.data.status === 'mail_sent') {
        
        
      } else {
          const fieldErrors = {};
          const { status, invalid_fields } = response.data;
          invalid_fields.forEach((field) => {
              fieldErrors[field.field] = field.message;
          });
        setErrors(fieldErrors);
        setIsSubmitting(false)
      }
      
  } catch (err) {
      setError('An error occurred. Please try again.');
  }

  
  }

  return (
    <div className='mt-[100px] w-[80%] mx-auto bg-gray-200 p-6'>
      <h3 className='text-[46px]'>Get in touch</h3>
      <h4 className='text-2xl font-light text-gray-600'>*Required fields</h4>
      <form class="py-6">
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_first_name" id="floating_first_name" class={`font-light block py-2.5 px-0 w-full text-xl bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer text-gray-900 `}
              value={formData.floating_first_name}
              onChange={handleInput}
            // value={formData.contactNo}
            />
            {errors && errors.floating_first_name && <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{errors.floating_first_name}</p>}
            <label for="floating_first_name" class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors && errors.floating_first_name ? 'text-red-600 peer-focus:text-black peer-focus:dark:text-black' : ' text-gray-500 peer-focus:text-black peer-focus:dark:text-black'}`}>First name*</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_last_name" id="floating_last_name" class={`font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer ${errors && errors.floating_last_name ? 'text-red-600' : ' text-gray-900'}`}
              value={formData.floating_last_name}
              onChange={handleInput}
            />
            {errors && errors.floating_last_name && <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{errors.floating_last_name}</p>}
            <label for="floating_last_name" class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors && errors.floating_last_name ? 'text-red-600 peer-focus:text-black peer-focus:dark:text-black' : ' text-gray-500 peer-focus:text-black peer-focus:dark:text-black'}`}>Last name*</label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="email" name="floating_email" id="floating_email" class="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              value={formData.floating_email}
              onChange={handleInput}
            />
            {errors && errors.floating_email && <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{errors.floating_email}</p>}
            <label for="floating_email" class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors && errors.floating_email ? 'text-red-600 peer-focus:text-black peer-focus:dark:text-black' : ' text-gray-500 peer-focus:text-black peer-focus:dark:text-black'}`}>Email*</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength={11} name="floating_phone" id="floating_phone" class="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              value={formData.floating_phone}
              onChange={handleInput}
            />
            {errors && errors.floating_phone && <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{errors.floating_phone}</p>}
            <label for="floating_phone" class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors && errors.floating_email ? 'text-red-600 peer-focus:text-black peer-focus:dark:text-black' : ' text-gray-500 peer-focus:text-black peer-focus:dark:text-black'}`}>Telephone*</label>
          </div>
        </div>


        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            {/* <label for="underline_select" class="sr-only">Underline select</label> */}
            <label for="project_select" class={`peer-focus:font-light font-light absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors && errors.floating_email ? 'text-red-600 peer-focus:text-black peer-focus:dark:text-black' : ' text-gray-500 peer-focus:text-black peer-focus:dark:text-black'}`}>Choose project*</label>
            {/* <label for="project_select" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choose project</label> */}
            <select id="project_select" name="project_select" class="block py-2.5 px-0 w-full text-xl font-light text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-black peer "
              value={formData.project_select}
              onChange={handleInput}
            >
              <option selected></option>
              {
                                            Locations.map((items,index) => (
                                                <option value={items.name} key={index}>{items.name}</option>
                                            ))
                                            
                                        }
          
            </select>
            <div className='absolute right-0 -mt-[34px]'><IoMdArrowDropdown size={28} /></div>
            {errors && errors.project_select && <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{errors.project_select}</p>}
            
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_location" id="floating_location" class="font-light block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              value={formData.floating_location}
              onChange={handleInput}
            />
            {errors && errors.floating_location && <p id="filled_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{errors.floating_location}</p>}
            <label for="floating_location" class="peer-focus:font-light font-light absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your location</label>
          </div>
        </div>
        <div class="flex items-center">



          <input id="link-checkbox" type="checkbox" class={`checkbox-round border-4 bg-gray-100 border-red-500 rounded-full focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${errors && errors.agree?'border-4 border-red-500':'text-gray-500' }`}
            name="agree"
            value={formData.agree}
            onChange={handleCheckboxChange}
          />
          <label for="link-checkbox" class={`ms-2 text-[18px] font-light  dark:text-gray-300 ${errors && errors.agree?'text-red-500':'text-gray-500' }`}>I declare that I have read, understood and accept the <a href="#" class="text-black dark:text-black hover:underline">privacy policy</a>.</label>
          
        </div>
        <button type="submit" class="flex items-center my-6 text-white bg-gray-900 font-light text-[18px] w-full sm:w-auto px-10 py-2.5 text-center hover:bg-black"
          onClick={handleForm}
          disabled={submitting && 'disabled'}
        >Submit&nbsp;
          {submitting &&
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          }

        </button>
      </form>
      <div class="flex flex-col content-between gap-x-2 sm:flex-row sm:justify-center sm:space-y-0">
        <div class="block">
          <h5 class="mb-2 text-2xl font-light tracking-tight text-w-blue"><span className="text-e-green">Call:</span> +91 98440 32022</h5>
        </div>
        <div class="inline-block h-[31px] min-h-[0.20em] w-[0.15em] self-stretch bg-e-green lg:block hidden"></div>
        <hr className='h-px border-t w-9/12 border-e-green pb-4 mx-auto lg:hidden block' />
        <div class="block">
          <h5 class="mb-2 text-2xl font-light tracking-tight text-w-green poppins-light"><span className="text-e-green">Email:</span> contact@ekaya.in</h5>
        </div>
      </div>
    </div>
  )
}

export default Contact
