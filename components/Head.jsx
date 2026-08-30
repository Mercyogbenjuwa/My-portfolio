import Head from 'next/head';

const CustomHead = ({ title }) => {
  const fullTitle = title === 'Mercy Ogbenjuwa Ikya' ? title : `${title} — Mercy Ogbenjuwa Ikya`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta
        name="description"
        content="Product Manager and Senior Product Engineer building reliable financial, enterprise and operational software."
      />
      <meta
        name="keywords"
        content="Mercy Ogbenjuwa, druxamb, engineer portfolio, mern stack, next.js, react, node.js, express, mongodb, .net, c#, go, gin, fiber, echo, nestjs"
      />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content="Product Manager and Senior Product Engineer building reliable financial, enterprise and operational software."
      />
      <meta property="og:url" content="https://mercyogbenjuwaikya.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="theme-color" content="#0d1210" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="canonical" href="https://mercyogbenjuwaikya.com" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mercy Ogbenjuwa',
};
