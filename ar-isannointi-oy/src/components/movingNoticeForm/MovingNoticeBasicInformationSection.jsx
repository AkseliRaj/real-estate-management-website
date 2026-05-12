import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MovingNoticeBasicInformationSection = () => {
    const { t } = useTranslation();
    const [movingNoticeType, setMovingNoticeType] = useState('');
    const [livingType, setLivingType] = useState('');

    const movingNoticeTypeOptions = [
        { value: 'moving-in', labelKey: 'Moving-Notice-Page.Form-Labels.Basic-Information.Moving-Date-Radio-Labels.Moving-In-Radio' },
        { value: 'moving-out', labelKey: 'Moving-Notice-Page.Form-Labels.Basic-Information.Moving-Date-Radio-Labels.Moving-Out-Radio' },
        { value: 'moving-within', labelKey: 'Moving-Notice-Page.Form-Labels.Basic-Information.Moving-Date-Radio-Labels.Moving-Inside-Radio' },
    ];

    const livingTypeOptions = [
        { value: 'temporary', labelKey: 'Moving-Notice-Page.Form-Labels.Basic-Information.Living-Type-Radio.Temporary-Label' },
        { value: 'permanent', labelKey: 'Moving-Notice-Page.Form-Labels.Basic-Information.Living-Type-Radio.Permanent-Label' },
    ];

    return (
        <div className='container'>
            <div className='row justify-content-center py-5'>

                <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                    <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                        {t('Moving-Notice-Page.Form-Labels.Basic-Information.title')}
                    </h3>
                    <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                        {t('Moving-Notice-Page.Form-Labels.Basic-Information.title')}
                    </h4>
                </div>

                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>

                        <div className='col-12 mb-3'>
                            <fieldset>
                                <legend className="form-label float-none w-auto p-0 mb-2">
                                    {t('Moving-Notice-Page.Form-Labels.Basic-Information.Moving-Notice-Type')} <span className='Required-Asterisk'>*</span>
                                </legend>
                                <div className="d-flex flex-column gap-2">
                                    {movingNoticeTypeOptions.map(({ value, labelKey }) => (
                                        <div className="form-check" key={value}>
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="movingNoticeType"
                                                id={`movingNoticeType-${value}`}
                                                value={value}
                                                checked={movingNoticeType === value}
                                                onChange={(e) => setMovingNoticeType(e.target.value)}
                                            />
                                            <label className="form-check-label" htmlFor={`movingNoticeType-${value}`}>
                                                {t(labelKey)}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        <div className='col-12 mb-3'>
                            <fieldset>
                                <legend className="form-label float-none w-auto p-0 mb-2">
                                    {t('Moving-Notice-Page.Form-Labels.Basic-Information.Living-Type-Label')} <span className='Required-Asterisk'>*</span>
                                </legend>
                                <div className="d-flex flex-column gap-2">
                                    {livingTypeOptions.map(({ value, labelKey }) => (
                                        <div className="form-check" key={value}>
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="livingType"
                                                id={`livingType-${value}`}
                                                value={value}
                                                checked={livingType === value}
                                                onChange={(e) => setLivingType(e.target.value)}
                                            />
                                            <label className="form-check-label" htmlFor={`livingType-${value}`}>
                                                {t(labelKey)}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="movingDate" className="form-label">
                                {t('Moving-Notice-Page.Form-Labels.Basic-Information.Moving-Date')} <span className='Required-Asterisk'>*</span>
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="movingDate"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovingNoticeBasicInformationSection;
