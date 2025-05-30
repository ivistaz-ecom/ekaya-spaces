import React, { Suspense } from "react";
import ContactUS from "../../components/ContactUs";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading Contact Form...</div>}>
      <ContactUS />
    </Suspense>
  );
};

export default Page;
