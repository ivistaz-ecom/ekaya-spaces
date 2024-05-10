import React from 'react'
import Banner from '../../components/Amora/Banner'
import Content from '../../components/Amora/Content'
import Seo from '../../components/common/Seo'


function AboutUs() {
  const pageTitle = 'Luxury apartments for sale in Bangalore | Best holiday home in Goa | Ekaya Spaces'
  const pageDescription = 'Explore exquisite premium luxury apartments for sale in Goa and Bangalore. Find your dream home in these prime locations with top-notch amenities'
  const MetaImage=''
  const url='https://ekaya-spaces.com/'


  return (
    <>
      < Seo pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />
          <Banner />
          <Content/>

    </>
  )
}

export default AboutUs
