import React from 'react';

const ConsumptionReadingsSectionWrapper = ({ title, children, bottomPadding = false }) => (
    <div className='container'>
        <div className={`row justify-content-center ${bottomPadding ? 'pb-5' : 'py-5'}`}>
            {title && (
                <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                    <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                        {title}
                    </h3>
                    <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                        {title}
                    </h4>
                </div>
            )}

            <div className='col-11 col-lg-8 col-xxl-8'>
                <div className='row Quote-Form-Section g-4'>
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export default ConsumptionReadingsSectionWrapper;
