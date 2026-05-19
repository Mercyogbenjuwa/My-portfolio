import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mercy Ogbenjuwa is an avid full stack engineer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Mercy Ogbenjuwa, druxamb, engineer portfolio, mern stack, next.js, react, node.js, express, mongodb, .net, c#, go, gin, fiber, echo, nestjs"
      />
      <meta property="og:title" content="Mercy Ogbenjuwa Portfolio" />
      <meta
        property="og:description"
        content="A full-stack engineer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mercy Ogbenjuwa',
};
