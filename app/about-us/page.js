import React from 'react'
import Banner from '../../components/Aboutus/Banner'
import Content from '../../components/Aboutus/Content'
import Seo from '../../components/common/Seo'

function AboutUs() {
  const pageTitle = 'Ekaya Spaces: Pioneering Luxury Real Estate with Surbhi Sharma and Chethan Puvannaa'
  const pageDescription = 'Discover Ekaya Spaces, founded by Surbhi Sharma and Chethan Puvannaa in 2014, a leader in luxury real estate development in sought-after locations. Explore our journey of excellence and innovation in creating unique, high-quality properties that offer not just luxury but lasting value'
  const MetaImage=''
  const url='https://ekaya-spaces.com/about-us'


  return (
    <>
      < Seo pageTitle={pageTitle} pageDescription={pageDescription} MetaImage={MetaImage} url={url} />
      <Banner />
      <Content/>
    </>
  )
}

export default AboutUs
