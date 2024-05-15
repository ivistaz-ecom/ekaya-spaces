'use client'
import React, { useState, useRef, useEffect } from 'react'
import configData from '../../../config.json'
import Link from 'next/link'

function Content({slug}) {

    const [Page, setData] = useState();
    const[error ,setError] =useState(false)
  

  const fetchPost = async () => {
    try {
        const postResponse = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${slug}`);
        const postData = await postResponse.json();
        //console.log(postData.length)
        if (postData.length == 0) {
            setError(true)  
        }
        else {
            setData(postData[0].content.rendered) 

        }



     
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      //setLoading(false);
    }
  };
    
  useEffect(()=>{
    fetchPost()


  },[])



  return (
      <>
          {
              error ? (
                  <>
                  <div className='text-center py-12 poppins-light text-[24px] z-50'>
                      <p>Oops! We couldn't find the page that you're looking for.</p>
                      <p>Please check the address and try again.</p>
                      
                  </div>
          
                 </>
              )
                  : (
                    <div className='mt-[100px] w-[80%] mx-auto' data-aos='fade-up'> 
                    <p className='poppins-light text-[18px] text-start pb-5'
                    dangerouslySetInnerHTML={{ __html: Page }}
                />
                </div>    
                      
            )
            
            }
          
          </>
  )
}

export default Content
