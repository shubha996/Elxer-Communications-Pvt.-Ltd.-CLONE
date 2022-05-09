import React from 'react'
import './whyus.css';
import Cards from './Cards';

function WhyUs() {
  return (
    <div className='whyus'>
        <div id='heading'>
            <h2>Why choose Elxer as your Internet partner</h2>
            <p>We make it easy for you to enjoy your favorite shows, work/learn online, play online battle and binge-watch without any interruption with Elxer high-speed Internet.</p>
        </div>
        <Cards />
    </div>
  )
};
export default WhyUs;