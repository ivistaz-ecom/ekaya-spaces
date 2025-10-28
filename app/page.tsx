import React, { Suspense } from "react";
import Banner from "../components/HomePage/Banner";
import Crafted from "../components/HomePage/Crafted";
import Overview from "../components/HomePage/PropertyOverview";
import Clients from "../components/HomePage/Clients";
import WhyEkaya from "../components/HomePage/WhyEkaya";
import Insights from "../components/HomePage/Insights";
import Contact from "../components/HomePage/Contact";
import Seo from "../components/common/Seo";

export default function Home() {
  const pageTitle =
    "Luxury apartments for sale in Bangalore | Best holiday home in Goa | Ekaya Spaces";
  const pageDescription =
    "Explore exquisite premium luxury apartments for sale in Goa and Bangalore. Find your dream home in these prime locations with top-notch amenities";
  const MetaImage = "";
  const url = "https://ekaya-spaces.com/";

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
        <Crafted />
        <Overview />
        {/* <Clients /> */}
        <WhyEkaya />
        <Insights />
        <Contact />
      </Suspense>
    </>
  );
}
