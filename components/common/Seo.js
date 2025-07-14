const seo = ({ pageTitle, pageDescription, MetaImage, url }) => {

    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "Barak News Xpress",
      "url": {url},
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${url}{search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
  
    return (
  
      <head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}></meta>
        <meta name="robots" content="index,follow"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/app/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href={url} />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content={pageTitle}></meta>
        <meta itemprop="description" content={pageDescription}></meta>
        <meta itemprop="image" content={MetaImage}></meta>
  
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content={pageTitle}></meta>
        <meta property="og:description" content={pageDescription}></meta>
        <meta property="og:image" content={MetaImage}></meta>
  
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content={pageTitle}></meta>
        <meta name="twitter:description" content={pageDescription}></meta>
        <meta name="twitter:image" content={MetaImage}></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
  
    )
  }
  
  export default seo