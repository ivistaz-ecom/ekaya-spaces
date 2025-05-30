import React from 'react'
import Banner from '../../components/Sustainability/Banner'
import Content from '../../components/Sustainability/Content'
import Approach from '../../components/Sustainability/Approach'
import Blogs from '../../components/Sustainability/ApproachContent'
import Seo from '../../components/common/Seo'

function AboutUs() {
  const pageTitle = 'Embracing Sustainability: Ekaya’s Commitment to the Environment'
  const pageDescription = 'Discover how Ekaya champions sustainability with initiatives like rainwater harvesting and ecosystem preservation to ensure a harmonious balance between business practices and environmental care'
  const MetaImage=''
  const url='https://ekaya-spaces.com/sustainability'


  return (
    <>
      < Seo pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />
      <Banner />
      <Content />
      <Approach />
      <Blogs/>
    </>
  )
}

export default AboutUs
