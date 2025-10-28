import React, { Suspense } from "react";
import Banner from "../../components/Amora/Banner";
import Content from "../../components/Amora/Content";
import Seo from "../../components/common/Seo";

const Page = () => {
  const pageTitle =
    "Luxury Villas in Moira, Goa - Amora Villas by Ekaya Spaces LLP";
  const pageDescription =
    "Discover the epitome of luxury vacation living at Amora Villas in Moira, Goa. Nestled amidst lush landscapes, our exclusive four-villa development offers spacious bedrooms, private gardens, and bespoke tranquillity";
  const MetaImage = "";
  const url = "https://ekaya-spaces.com/about-amora";

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <Suspense fallback={<div></div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Content />
      </Suspense>
    </>
  );
};

export default Page;
