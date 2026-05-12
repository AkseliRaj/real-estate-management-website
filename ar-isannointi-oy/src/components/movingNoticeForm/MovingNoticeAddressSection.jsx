import React from 'react';
import { useTranslation } from 'react-i18next';

const MovingNoticeAddressSection = ({ translationKey, idPrefix }) => {
    const { t } = useTranslation();

    const fields = [
        { suffix: 'Address', labelKey: 'Address' },
        { suffix: 'Postcode', labelKey: 'Postcode' },
        { suffix: 'City', labelKey: 'City' },
        { suffix: 'State', labelKey: 'State' },
    ];

    return (
        <div className='container'>
            <div className='row justify-content-center py-5'>

                <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                    <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                        {t(`${translationKey}.title`)}
                    </h3>
                    <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                        {t(`${translationKey}.title`)}
                    </h4>
                </div>

                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        {fields.map(({ suffix, labelKey }) => {
                            const inputId = `${idPrefix}${suffix}`;
                            return (
                                <div className="col-12 mb-3" key={inputId}>
                                    <label htmlFor={inputId} className="form-label">
                                        {t(`${translationKey}.${labelKey}`)} <span className='Required-Asterisk'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={inputId}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovingNoticeAddressSection;
