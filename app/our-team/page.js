import React from "react";
import Banner from "../../components/OurTeam/Banner";
import Content from "../../components/OurTeam/Content";
import Seo from "../../components/common/Seo";

function AboutUs() {
  const pageTitle =
    "Ekaya Spaces: Leading Real Estate Development and Design Experts";
  const pageDescription =
    "Discover Ekaya Spaces, where our team of dynamic partners combines decades of expertise in real estate development, design, and engineering to create exceptional spaces.";
  const MetaImage = "";
  const url = "https://ekaya-spaces.com/our-team";

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <Banner />
      <Content />
    </>
  );
}

export default AboutUs;
