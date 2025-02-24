import React from 'react'
import Banner from '../../components/Ellen/Banner'
import Content from '../../components/Ellen/Content'
import Seo from '../../components/common/Seo'


function AboutUs() {
  const pageTitle = 'Luxury Apartments at ELLEN by Ekaya - Premium Living in Bengaluru'
  const pageDescription = 'Discover ELLEN by Ekaya, your next home in Bengaluru. This exclusive three-storey development features 11 spacious, Vaastu-compliant apartments, each designed with privacy, space, and luxury in mind'
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
