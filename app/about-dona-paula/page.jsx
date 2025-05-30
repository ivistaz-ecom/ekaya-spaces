import React, { Suspense } from "react";
import Banner from "../../components/DonaPaula/Banner";
import Content from "../../components/DonaPaula/Content";
import Seo from "../../components/common/Seo";
import Contact from "@/components/HomePage/Contact";

const Page = () => {
  const pageTitle =
    "Explore Dona Paula: A Romantic Paradise in Goa | Ekaya Spaces";
  const pageDescription =
    "Discover the charm of Dona Paula, an iconic spot in Goa named after the legendary Dona Paula de Menezes. Known as 'Lover's Paradise,' enjoy breathtaking views of the Arabian Sea, rich historical tales, and vibrant markets near some of Goa's best beaches.";
  const MetaImage = "";
  const url = "https://ekaya-spaces.com/about-dona-paula";

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <Suspense fallback={<div>Loading banner...</div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div>Loading content...</div>}>
        <Content />
      </Suspense>
      <Suspense fallback={<div>Loading contact...</div>}>
        <Contact />
      </Suspense>
    </>
  );
};

export default Page;
