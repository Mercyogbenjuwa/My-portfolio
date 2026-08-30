import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'ogbenjuwamercyonyoibo@gmail.com',
    href: 'mailto:ogbenjuwamercyonyoibo@gmail.com',
  },
  {
    social: 'github',
    link: 'Ogbenjuwa Mercy',
    href: 'https://github.com/Mercyogbenjuwa',
  },
  {
    social: 'linkedin',
    link: 'Ogbenjuwa Mercy',
    href: 'https://www.linkedin.com/in/mercy-ogbenjuwa-178805227'
  },
  {
    social: 'instagram',
    link: 'Ogbenjuwa Mercy',
    href: 'https://www.instagram.com/ogbenjuwamercy?igsh=NG9jZWRiZmNxazlt',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
