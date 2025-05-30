"use client";
import React, { useState, useEffect } from "react";
import configData from "../../../config.json";
import Seo from "../../../components/common/Seo";

function Content({ slug }) {
  const [Page, setData] = useState();
  const [pageTitle, setPageTitle] = useState();
  const [pageDescription, setPageDescription] = useState();
  const [error, setError] = useState(false);

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(
        `${configData.SERVER_URL}posts?_embed&slug=${slug}`
      );
      const postData = await postResponse.json();

      if (postData.length === 0) {
        setError(true);
      } else {
        setData(postData[0].content.rendered);
        setPageTitle(postData[0].acf.meta_title);
        setPageDescription(postData[0].acf.meta_description);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug]); // Ensure the effect runs when `slug` changes

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage=""
        url={`${configData.WEBSITE_URL}blogs/${slug}`}
      />
      {error ? (
        <div className="text-center py-12 poppins-light text-[24px] z-50">
          <p>Oops! We couldn't find the page that you're looking for.</p>
          <p>Please check the address and try again.</p>
        </div>
      ) : (
        <div className="mt-10 lg:mt-[100px] w-[80%] mx-auto" data-aos="fade-up">
          <p
            className="poppins-light text-[18px] text-start pb-5"
            dangerouslySetInnerHTML={{ __html: Page }}
          />
        </div>
      )}
    </>
  );
}

export default Content;
