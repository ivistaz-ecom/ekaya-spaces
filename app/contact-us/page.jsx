import React, { Suspense } from "react";
import ContactUS from "../../components/ContactUs";

const Page = () => {
  return (
    <Suspense fallback={<div></div>}>
      <ContactUS />
    </Suspense>
  );
};

export default Page;
