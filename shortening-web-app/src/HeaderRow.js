import React from 'react';

function HeaderRow() {
  return ( 
    <div className='container-fluid header-row py-5 pt-0 pt-md-5 px-0 px-md-3'>
        <div className="container pb-5">
            <div className="row">
                <div className='d-flex flex-column-reverse flex-md-row p-0 p-md-3'>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start gap-3 px-3">
                        <div className="col-12 d-flex flex-column gap-2">
                            <h1 className='m-0'>
                                More than just shorter links
                            </h1>                   
                            <p className="subtitle m-0">Build your brand's recognition and get detailed insights on how your links are performing</p>
                        </div>                  
                        <a href="localhost:3000/#" className="btn primary-cta text-capitalize bold radius-4">Get Started</a>                
                    </div>
                    
                    <div className="col-12 col-md-6 mb-3 mb-md-0 px-md-3 px-0">
                        <div className='illustration-working'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeaderRow;