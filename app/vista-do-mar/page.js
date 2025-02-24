import React from 'react'
import Banner from '../../components/VistaDoMar/Banner'
import Content from '../../components/VistaDoMar/Content'
import Seo from '../../components/common/Seo'


function AboutUs() {
  const pageTitle = 'Luxury Oceanfront Apartments in Dona Paula, Goa - Vista Do Mar by Ekaya Spaces'
  const pageDescription = 'Discover unparalleled luxury at Vista Do Mar by Ekaya Spaces, located in the prestigious Dona Paula, Goa. Our oceanfront apartments offer a wide array of luxurious amenities designed to enhance your living experience.'
  const MetaImage=''
  const url='https://ekaya-spaces.com/vista-do-mar'


  return (
    <>
      < Seo pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />
          <Banner />
          <Content/>

    </>
  )
}

export default AboutUs
