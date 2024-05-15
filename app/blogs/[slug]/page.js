import React from 'react'
import Banner from './Banner'
import Content from './Content'

function page({params}) {
  return (
      <div>
          <Banner slug={params.slug} />
          <Content slug={params.slug}/>
          
    </div>
  )
}

export default page
