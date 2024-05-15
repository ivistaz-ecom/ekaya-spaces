'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { initFlowbite } from 'flowbite'

function WhyEkaya() {

    useEffect(() => {
  
        initFlowbite();
    
    })
  return (
<div className="lg:w-[80%] mx-auto lg:flex lg:pt-32 pb-20 text-center pt-12">         
          <div className="">
              <h2 className="lg:text-6xl text-4xl font-light py-4 text-gray-700">Why Ekaya</h2>
              <Image src="/home/HomeBanner.png" className="lg:w-[524px] w-full" width={530} height={ 600} /> 
</div>
<div className="w-full">
<div class="mb-4 border-b-2 border-gray-200 dark:border-gray-700 mt-[0px]">
    <ul class=" flex flex-wrap" id="default-tab" data-tabs-toggle="#default-tab-content" data-tabs-active-classes="text-e-green hover:text-gray-600 dark:text-e-green dark:hover:text-e-green border-e-green dark:border-e-green" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
        <li class="me-2" role="presentation">
            <button class="text-xl text-start inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Nature’s Embrace<br/>in Every Corner</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="text-xl text-start inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Elite<br/>Sanctuaries</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="text-xl text-start inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Personalized<br/>Elegance</button>
        </li>
       
    </ul>
</div>

<div id="default-tab-content">
    <div class="hidden p-4 lg:h-[350px] content-center poppins-regular" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-[18px] font-light text-gray-600 lg:ml-20 text-start">Discover the essence of tranquil living where nature seamlessly intertwines with luxury. At Ekaya, every property is a testament to the harmonious relationship between architecture and the natural world. From lush gardens to panoramic views, immerse yourself in a sanctuary where every corner is a celebration of nature's beauty. Let the symphony of birdsong and rustling leaves be your soundtrack as you embrace the serenity surrounding you. </p>
    </div>
    <div class="hidden p-4 lg:h-[350px] content-center poppins-regular" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
    <p class="text-[18px] font-light text-gray-600 lg:ml-20 text-start">Step into a realm of unparalleled exclusivity where luxury knows no bounds. Ekaya presents elite sanctuaries that redefine luxury and sophistication. Each property is a masterpiece, meticulously crafted to cater to the most discerning tastes. From lavish amenities to bespoke finishes, experience the epitome of luxury living. </p>
    </div>
    <div class="hidden p-4 lg:h-[350px] content-center poppins-regular" id="settings" role="tabpanel" aria-labelledby="settings-tab">
    <p class="text-[18px] font-light text-gray-600 lg:ml-20 text-start">Elevate your living experience with Ekaya's signature blend of personalised elegance. We understand that true luxury lies in the details, so every aspect of our properties is tailored to reflect your unique style and preferences. From custom-designed interiors to exclusive amenities, immerse yourself in a world where luxury is curated especially for you. Experience the joy of living in a home that resonates with your personality, where every corner exudes sophistication and charm. </p>
    </div>
    
</div>
</div>
      </div>
  )
}

export default WhyEkaya
