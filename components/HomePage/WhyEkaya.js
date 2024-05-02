import React from 'react'

function WhyEkaya() {
  return (
<div className="w-[80%] mx-auto flex pt-32 pb-20">         
          <div className="">
              <h2 className="text-6xl font-light py-4 text-gray-700">Why Ekaya</h2>
<img src="slide.png" className="w-[524px]"/> 
</div>
<div className="w-[100%]">
<div class="mb-4 border-b-2 border-gray-200 dark:border-gray-700 mt-[0px]">
    <ul class=" flex flex-wrap" id="default-tab" data-tabs-toggle="#default-tab-content" data-tabs-active-classes="text-e-green hover:text-gray-600 dark:text-e-green dark:hover:text-e-green border-e-green dark:border-e-green" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
        <li class="me-2" role="presentation">
            <button class="text-xl text-start inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Nature’s Embrace<br/>in Every Corner</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="text-xl text-start inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Elite<br/>Sanctuaries</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="text-xl text-start inline-block p-4 border-b-4 rounded-t-lg hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Personalized<br/>elegance</button>
        </li>
       
    </ul>
</div>

<div id="default-tab-content">
    <div class="hidden p-4 h-[350px] content-center poppins-regular" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-[18px] font-light text-gray-600 ml-20">Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.</p>
    </div>
    <div class="hidden p-4 h-[350px] content-center poppins-regular" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
    <p class="text-[18px] font-light text-gray-600 ml-20">Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.</p>
    </div>
    <div class="hidden p-4 h-[350px] content-center poppins-regular" id="settings" role="tabpanel" aria-labelledby="settings-tab">
    <p class="text-[18px] font-light text-gray-600 ml-20">Every property we craft is a symphony of exclusivity and grandeur, designed to cater to the most refined tastes. From opulent interiors to breathtaking exteriors, each element is meticulously curated to ensure an ambiance of unparalleled sophistication. We pay attention to the minutest details, creating spaces that epitomize the height of elegance and comfort.</p>
    </div>
    
</div>
</div>
      </div>
  )
}

export default WhyEkaya
