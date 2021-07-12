import { clickableName, divContainer, layoutHeader, borderRadius, nameInHome, colorInherit, backToHome } from './LinaliaCSS';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

const name = 'Linca';
const profileIconPath = '/images/profile.png';
export const siteTitle = 'Linca Website';

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className={divContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Linca\'s biography" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={layoutHeader}>
        {home ? (
          <>
            <Image src={profileIconPath} alt={name} width="250" height="250" className={borderRadius}/>
            <h1 className={nameInHome}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image src={profileIconPath} alt={name} width="200" height="200" className={borderRadius}/>
              </a>
            </Link>
            <a className={clickableName}>
              <Link href="/">
                <a className={colorInherit}>{name}</a>
              </Link>
            </a>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
