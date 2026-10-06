import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE = 'https://mercyogbenjuwaikya.com';
const NAME = 'Mercy Ogbenjuwa Ikya';
const DEFAULT_DESCRIPTION =
  'Founder of Juwa Tech, Product Manager and Senior Product Engineer building reliable financial, enterprise and operational software.';

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: NAME,
  url: SITE,
  image: `${SITE}/portrait.png`,
  jobTitle: 'Product Manager and Senior Product Engineer',
  worksFor: { '@type': 'Organization', name: 'Juwa Tech', url: 'https://juwatech.com' },
  sameAs: ['https://github.com/Mercyogbenjuwa', 'https://www.linkedin.com/in/mercy-ogbenjuwa-178805227'],
};

const CustomHead = ({ title, description, noindex }) => {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const url = path === '/' ? SITE : `${SITE}${path}`;
  const fullTitle = title === NAME ? title : `${title} — ${NAME}`;
  const summary = description || DEFAULT_DESCRIPTION;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={summary} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={summary} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/portrait.png`} />
      <meta name="twitter:card" content="summary" />
      <meta name="theme-color" content="#7a1f35" />
      <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
      <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
      <link rel="canonical" href={url} />
      {path === '/' && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      )}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: NAME,
};
