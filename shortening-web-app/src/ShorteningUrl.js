import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function ShorteningUrl() {

  const [cookies, setCookie] = useCookies(['urls']);
  const [longUrl, setLongUrl] = useState('');
  const [error, setError] = useState('');

  const handleShorten = async (e) => {
    e.preventDefault();

    try {

      setError(null);

      if (!longUrl) {
        setError('Please enter a URL');
        return;
      }
      debugger

      await  axios.post(`/api?url=${longUrl }`)
        .then(response => {
          // Handle the response
          const { short_link, original_link } = response.data.result;
          if(!cookies.urls){
            setCookie('urls', [{ shortLink: short_link, longUrl: original_link }], { path: '/' });
          }else {
            setCookie('urls', [...cookies.urls, { shortLink: short_link, longUrl: original_link }], { path: '/' });
          }
          // Clear the input fields
          setLongUrl('');
        })
        .catch(error => {
          // Handle the error
          setError('Please enter a valid URL');
        });


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleShorten} className='position-relative'>
          <div className='shortening-url p-5'>
            <div className='d-flex flex-column gap-2'>
                <div className='d-flex flex-column flex-md-row align-items-sm-stretch justify-content-center gap-4'>
                  <input 
                  type='text' 
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  className={error ? "input-error form-control radius-1 px-4 p-3" : "form-control radius-1 px-4 p-3"} 
                  placeholder='Shorten a link here ...'></input>
                  <button type='submit' className='btn primary-cta radius-1'>Shorten It!</button>
                </div>
                {error && <p className='m-0 validation-error'>{error}</p>}
              </div>
          </div> 
      </form>
    </div>
  );
}

export default ShorteningUrl;