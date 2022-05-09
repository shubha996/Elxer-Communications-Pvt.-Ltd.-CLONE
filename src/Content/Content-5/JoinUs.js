import React from 'react'
import './joinus.css';
import data from '../../Assets/JoinUs_Data';

function JoinUs() {
  return (
        <div className="section">
            <div className="left">
                <div className='left-heading'>
                    <h2>Join us on mobile!</h2>
                    <p>Download MyElxer app to stay updated and get in touch right from your phone.</p>
                </div>
                <div className='map'>
                    {
                        data.map(fetch => {
                            return(
                                <div className='internal'>
                                    <div className='internal-left'>
                                        <img id='internal-left-image' src={fetch.img} alt="" />
                                    </div>
                                    <div className='internal-right'>
                                        <h4>{fetch.h4}</h4>
                                        <p>{fetch.p}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='app-div'>
                    <img className='download-app' src="https://elxer.com/assets/images/svg/google-play-store-badge.svg" alt="" />
                    <img className='download-app' src="https://elxer.com/assets/images/svg/app-store-badge-coming-soon.svg" alt="" />
                    <p id='para-text'><small>Available on Android device</small></p>
                </div>
            </div>
            <div className="right">
                <img src="https://elxer.com/assets/media/app/myelxer.png" alt="" />
            </div>
        </div>
  )
}
export default JoinUs;