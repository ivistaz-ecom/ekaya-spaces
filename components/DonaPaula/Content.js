import React from 'react'
import Image from 'next/image'

function Content() {
    return (
      <div className='z-50 overflow-hidden w-full '>
    <div className='mt-[100px] w-[80%] mx-auto' data-aos="fade-up">
    {/* <h1 className='text-2xl text-e-green font-light tracking-[0.2em] pb-12'>ABOUT US</h1> */}
          <p className='poppins-light text-[18px] text-start pb-5'>Nestled along the picturesque coastline of Goa, Dona Paula stands as a testament to the region’s timeless allure and natural beauty. Named after Dona Paula de Menezes, a historical figure enveloped in folklore, this iconic locale captivates visitors with its panoramic vistas of the Arabian Sea and verdant landscapes.</p>
          <p className='poppins-light text-[18px] text-start pb-5'>Renowned as the “Lover’s Paradise,” Dona Paula beckons romantics and adventurers alike to bask in its romantic ambiance and witness the breathtaking confluence of the Mandovi and Zuari rivers. The famed Dona Paula Viewpoint offers a serene retreat, where one can immerse themselves in the tranquil atmosphere and marvel at the scenic splendor that surrounds them.</p>
            </div>

<div className='lg:justify-items-end z-50 lg:w-full w-[90%] mx-auto'>  
<div class="lg:flex flex-col items-center bg-white md:flex-row mx-auto" data-aos="fade-right">
    <Image class="object-cover lg:w-[30em] mr-10 sm:w-[20em]"  src="/dona-paula/1.png" alt="moira" width={600} height={500} />
    <div class="flex flex-col justify-between leading-normal lg:pt-0 pt-6">
        <p class="mb-3 poppins-light text-[18px] text-start pb-5">Dona Paula boasts a rich historical tapestry, with tales dating back to the colonial era of Portuguese rule in Goa. Legend has it that Dona Paula de Menezes, a noblewoman of Portuguese descent, tragically fell in love with a local fisherman, only to meet her demise by plunging into the Arabian Sea from the precipice now known as the Dona Paula Viewpoint. Her love story has since become the subject of folklore and continues to intrigue visitors to this day.</p>
    </div>
 </div>
                
                <div class="flex lg:flex-row flex-col-reverse lg:items-center items-end bg-white md:flex-col-reverse  justify-items-end" data-aos="fade-left">
                <div class="flex flex-col justify-between leading-normal">
                <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36 lg:pt-0 pt-6">Furthermore, Dona Paula’s strategic location along the coast made it a significant port during the colonial era, facilitating trade and commerce between Portugal and other parts of Asia. The remnants of this maritime heritage can still be seen in the quaint fishing villages and historic landmarks that dot the coastline.</p>
                    </div>
                    <Image class="object-cover lg:w-[30em] lg:ml-10 sm:w-[20em]"  src="/dona-paula/2.png" alt="dona paula" width={600} height={500} />
                </div>



<div class="lg:flex flex-col items-center bg-white md:flex-row w-[90%]" data-aos="fade-right">
    <Image class="object-cover lg:w-[30em] lg:mr-10 sm:w-[20em] w-full"  src="/dona-paula/3.png" alt="dona paula" width={600} height={500} />
    <div class="flex flex-col justify-between leading-normal lg:pt-0 pt-6">
        <p class="mb-3 poppins-light text-[18px] text-start pb-5">Rich in cultural heritage, Dona Paula boasts landmarks such as the Cabo Raj Bhavan, once a Portuguese fort and now the official residence of the Governor of Goa. Its vibrant markets and proximity to renowned beaches like Miramar and Vainguinim further elevate its charm, offering a perfect blend of relaxation and exploration.</p>
    </div>
                </div>  



                <div class="flex lg:flex-row flex-col-reverse lg:items-center items-end bg-white md:flex-col-reverse  justify-items-end" data-aos="fade-left">
    <div class="flex flex-col justify-between leading-normal">
        <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36 lg:pt-0 pt-6">With its timeless beauty, affluent ambiance, and enchanting coastal vistas, Dona Paula continues to enchant visitors and residents alike, promising an unforgettable experience amidst the wealth and luxury of Goa’s coastal paradise.</p>
                    </div>
                    <Image class="object-cover lg:w-[30em] lg:ml-10 sm:w-[20em]"  src="/dona-paula/4.png" alt="dona paula" width={600} height={500} />
                </div>   
                


</div>        
        
        
   
        
        </div>
        

  )
}

export default Content
