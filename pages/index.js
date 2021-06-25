import { Fragment } from "react"
import Link from "next/link"
import Script from "next/script"
//our-domain.com/
const HomePage = ()=>{
    return <Fragment>
        <ul>
            <li>
               <Link href="/news/next-js-is-great">
               first Row
               </Link>
            </li>
            <li>
            <Script
  src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserverEntry%2CIntersectionObserver"
  strategy="beforeInteractive"
/>
            </li>
            <li>
                Second Row
            </li>
            <li>
                 third Row
            </li>
        </ul>
    </Fragment> 
}
export default HomePage;

