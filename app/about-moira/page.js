import React from 'react'
import Banner from '../../components/AboutMoira/Banner'
import Content from '../../components/AboutMoira/Content'
import Seo from '../../components/common/Seo'


function AboutUs() {
  const pageTitle = 'Moira, Goa: A Luxurious Retreat in a Tranquil Village Setting'
  const pageDescription = 'Discover Moira in Goa, a serene village with a rich Portuguese heritage. Nestled among lush landscapes, Moira offers a peaceful retreat with its charming architecture and luxurious living'
  const MetaImage=''
  const url='https://ekaya-spaces.com/about-moira'


  return (
    <>
      < Seo pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />
      <Banner />
      <Content/>
    </>
  )
}

export default AboutUs
