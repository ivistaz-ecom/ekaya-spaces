import React from 'react'
import Banner from '../../components/WhyEkaya/Banner'
import Content from '../../components/WhyEkaya/Content'
import Approach from '../../components/WhyEkaya/Approach'
import Blogs from '../../components/Sustainability/ApproachContent'
import Seo from '../../components/common/Seo'

function AboutUs() {
  const pageTitle = 'Ekaya Spaces - Boutique Real Estate Development for Community Living'
  const pageDescription = 'Discover Ekaya Spaces, where boutique real estate meets community and environmental harmony. Our projects focus on creating intimate, personalised spaces designed to foster community interaction and enhance the local charm'
  const MetaImage=''
  const url='https://ekaya-spaces.com/why-ekaya'


  return (
    <>
      < Seo pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />
      <Banner />
      <Content />
      <Approach />
      
    </>
  )
}

export default AboutUs
