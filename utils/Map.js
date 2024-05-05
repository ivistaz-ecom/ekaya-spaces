import React, { useState } from 'react'

function Map({ data }) {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='w-[80%] mx-auto py-12' data-aos='fade-down z-50'>
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-e-green hover:text-e-green dark:text-purple-500 dark:hover:text-purple-500 border-e-green dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                    {data.map((items, index) => (
                        <li class="me-2" role="presentation" key={index}>
                            <button class="inline-block p-4 border-b-2 rounded-t-lg text-xl poppins-light" type="button" role="tab"
                                onClick={() => setActiveTab(index)}
                            >{items.plan_name}</button>
                        </li>
                    ))}
                </ul>
            </div>


            <div id="default-styled-tab-content">
                {data.map((items, index) => (
                    //   console.log(activeTab)
                    <div key={index} className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === index ? 'block' : 'hidden'}`} role="tabpanel">

                        <div>
                            <img src={items.floor} alt={`Floor plan ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}

export default Map
