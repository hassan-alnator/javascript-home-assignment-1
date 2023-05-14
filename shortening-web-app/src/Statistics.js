import React , { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { ReactComponent as BrandRecognition  } from './assets/images/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecords  } from './assets/images/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizable  } from './assets/images/icon-fully-customizable.svg';

function Statistics() {

    const cookies = useCookies(['urls']);
    const [lastFiveUrls, setLastFiveUrls] = useState([
        { shortLink: '...', longUrl: '...', isCopied: false },
        { shortLink: '...', longUrl: '...', isCopied: false },
        { shortLink: '...', longUrl: '...', isCopied: false },
      ]);
      
      
    useEffect(() => {
        if (cookies[0].urls) {
        const reversedUrls = cookies[0].urls.slice().reverse(); // Reverse the array to get the latest URLs first
        const lastFive = reversedUrls.slice(0, 3); // Retrieve the last 3 URLs
        setLastFiveUrls(lastFive);
        }
    }, [cookies[0].urls]);

    const handleCopy = (index) => {
        const updatedUrls = lastFiveUrls.map((url, i) => {
          if (i === index) {
            return { ...url, isCopied: !url.isCopied };
          }
          return url;
        });
        setLastFiveUrls(updatedUrls);
        const shortLink = lastFiveUrls[index].shortLink;
        navigator.clipboard.writeText(shortLink);
      };

 

  return (
    <div className='container py-5'>
        <div className={lastFiveUrls.length === 0 ? 'py-5 mt-5 d-block d-md-none' : 'py-5 d-block d-md-none' }></div>
            {lastFiveUrls && lastFiveUrls.length > 0 && (
                <ul className='list-unstyled d-flex flex-column gap-3 pt-5 mt-5'>
                {lastFiveUrls.map((url, index) => (
                    <li key={index}>
                        <div className='align-items-md-center align-items-start bg-white d-flex flex-column flex-md-row justify-content-between px-0 px-md-4 py-3 radius-1 shorten-links gap-3'>
                            <a 
                            className='long-url px-4 px-md-0'
                            href={url.longUrl} 
                            target='blank'>{url.longUrl}</a>

                            <div className='px-4 px-md-0 align-items-md-center align-items-start d-flex flex-column flex-md-row gap-3 w-100 w-md-auto'>
                                <a 
                                href={url.shortLink} 
                                target='blank' 
                                className='active'>{url.shortLink}</a>

                                <button 
                                    onClick={() => handleCopy(index)}
                                    className={url.isCopied ? "copied btn primary-cta py-2 radius-1 w-100 w-md-auto" : "btn primary-cta py-2 radius-1 w-100 w-md-auto"}>
                                        {url.isCopied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            )}
        <div className={lastFiveUrls.length === 0 ? 'py-5 mt-5 d-none d-md-block' : 'py-5 d-none d-md-block' }></div>
  
        <div className='d-flex flex-column align-items-center gap-4 pb-5 mt-5 mt-md-0'>
            <h1 className='m-0'>Advanced Statistics</h1>
            <p className='col-12 col-lg-5 m-0 text-center'>Track how your links are performing across the web with our advanced statistics dasboard.</p>
        </div>
        <div className='py-5 statistics-cards d-flex flex-column flex-md-row gap-4 align-items-start position-relative'>
            <div className='d-flex flex-column gap-3 gap-4 position-relative radius-2 statistics-card'>
                <div className='card-icon'>
                    <BrandRecognition />
                </div>
                <h4 className='statistics-card-title'>Brand Recognition</h4>
                <p className='statistics-card-subtitle'>Boost your brand recognition with each click. Generic links don't mean a thing Branded links help instil confidence in your content.</p>
            </div>
            <div className='d-flex flex-column gap-3 gap-4 position-relative radius-2 statistics-card'>
                <div className='card-icon'>
                    <DetailedRecords />
                </div>
                <h4 className='statistics-card-title'>Detailed Records</h4>
                <p className='statistics-card-subtitle'>Goin insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions</p>
            </div>
            <div className='d-flex flex-column gap-3 gap-4 position-relative radius-2 statistics-card'>
                <div className='card-icon'>
                    <FullyCustomizable />
                </div>
                <h4 className='statistics-card-title'>Fully Customizable</h4>
                <p className='statistics-card-subtitle'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagemen</p>
            </div>
        </div>
    </div>
  );
}

export default Statistics;