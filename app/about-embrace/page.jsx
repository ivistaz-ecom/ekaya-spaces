import React, { Suspense } from "react";
import Banner from "../../components/Embrace/Banner";
import Content from "../../components/Embrace/Content";
import Seo from "../../components/common/Seo";

const Page = () => {
  const pageTitle =
    "Luxurious Homes at Ekaya’s Embrace in Ganga Nagar, Bengaluru - Near Embassy One";
  const pageDescription =
    "Discover modern luxury at Ekaya’s Embrace, offering six exclusive three-storey homes in Bengaluru's prestigious Ganga Nagar, near Embassy One. Enjoy seamless connectivity and unparalleled elegance with close proximity to essential amenities and vibrant market hubs";
  const MetaImage = "";
  const url = "https://ekaya-spaces.com/about-embrace";

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
