import React from 'react'
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { JobDetailsStyle } from './style';
import Image from 'next/image';

const index = () => {
  return (
    <JobDetailsStyle>
    <Navbar />
    <section className='pageContainer'>
        <div className='gridWrapper'>
          <Image src={'/assets/svg/hero-background.svg'} alt='hero-background' className='grid' width={1440} height={1010} />
        </div>
        <div className='background'>
            <div className='heroContainer'>
                <div>JOIN FILMMAKERS MART</div>
                <h1>Let's Shape Tomorrow's Film Industry</h1>
                <dl>
                    <dt></dt>
                </dl>
                <div className='button'>Apply Now</div>
            </div>
        </div>
    </section>
    <Footer />
    </JobDetailsStyle>
  )
}

export default index
