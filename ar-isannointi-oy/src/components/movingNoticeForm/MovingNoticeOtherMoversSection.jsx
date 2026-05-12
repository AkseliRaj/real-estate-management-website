import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MovingNoticeMoverInformationSection from './MovingNoticeMoverInformationSection';

const YES = 'yes';
const NO = 'no';

const MovingNoticeOtherMoversSection = () => {
    const { t } = useTranslation();
    const [moreThanOnePerson, setMoreThanOnePerson] = useState('');
    const [movingWithKids, setMovingWithKids] = useState('');
    const [coMoverIds, setCoMoverIds] = useState([]);
    const [kidMoverIds, setKidMoverIds] = useState([]);

    const yesNoOptions = [
        { value: YES, labelKey: 'Moving-Notice-Page.Form-Labels.Other-Movers.Radio-Buttons.Yes' },
        { value: NO, labelKey: 'Moving-Notice-Page.Form-Labels.Other-Movers.Radio-Buttons.No' },
    ];

    const onMoreThanOnePersonChange = (value) => {
        setMoreThanOnePerson(value);
        if (value === YES) {
            setCoMoverIds((previousIds) => (previousIds.length === 0 ? [crypto.randomUUID()] : previousIds));
        } else if (value === NO) {
            setCoMoverIds([]);
        }
    };

    const onMovingWithKidsChange = (value) => {
        setMovingWithKids(value);
        if (value === YES) {
            setKidMoverIds((previousIds) => (previousIds.length === 0 ? [crypto.randomUUID()] : previousIds));
        } else if (value === NO) {
            setKidMoverIds([]);
        }
    };

    const addCoMover = () => {
        setCoMoverIds((previousIds) => [...previousIds, crypto.randomUUID()]);
    };

    const removeCoMover = (idToRemove) => {
        setCoMoverIds((previousIds) => previousIds.filter((id) => id !== idToRemove));
    };

    const addKidMover = () => {
        setKidMoverIds((previousIds) => [...previousIds, crypto.randomUUID()]);
    };

    const removeKidMover = (idToRemove) => {
        setKidMoverIds((previousIds) => previousIds.filter((id) => id !== idToRemove));
    };

    const showCoMoverRemove = coMoverIds.length > 1;
    const showKidRemove = kidMoverIds.length > 1;

    return (
        <div className='container'>
            <div className='row justify-content-center py-5'>

                <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                    <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.title')}
                    </h3>
                    <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.title')}
                    </h4>
                </div>

                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>

                        <div className='col-12 mb-3'>
                            <fieldset>
                                <legend className="form-label float-none w-auto p-0 mb-2">
                                    {t('Moving-Notice-Page.Form-Labels.Other-Movers.Spouse-Radio-Label')} <span className='Required-Asterisk'>*</span>
                                </legend>
                                <div className="d-flex flex-column gap-2">
                                    {yesNoOptions.map(({ value, labelKey }) => (
                                        <div className="form-check" key={`moreThanOne-${value}`}>
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="movingNoticeOtherMoversMultiplePeople"
                                                id={`movingNoticeOtherMoversMultiplePeople-${value}`}
                                                value={value}
                                                checked={moreThanOnePerson === value}
                                                onChange={() => onMoreThanOnePersonChange(value)}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`movingNoticeOtherMoversMultiplePeople-${value}`}
                                            >
                                                {t(labelKey)}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        {moreThanOnePerson === YES && (
                            <>
                                <div className='col-12'>
                                    <h3 className='d-none d-md-block pb-2 pb-md-3'>
                                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.Additional-Movers-Header')}
                                    </h3>
                                    <h4 className='d-block d-md-none pb-2 pb-md-3'>
                                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.Additional-Movers-Header')}
                                    </h4>
                                </div>
                                {coMoverIds.map((coMoverId, coMoverIndex) => (
                                    <React.Fragment key={coMoverId}>
                                        <div className='col-12 employment-fields-enter'>
                                            <MovingNoticeMoverInformationSection
                                                idPrefix={`co-mover-${coMoverId}`}
                                                showTitle={false}
                                                embedded
                                            />
                                            {showCoMoverRemove && (
                                                <div className='row Quote-Form-Section g-4'>
                                                    <div className='col-12 pb-4'>
                                                        <button
                                                            type="button"
                                                            className="Color-Button"
                                                            onClick={() => removeCoMover(coMoverId)}
                                                        >
                                                            {t('Moving-Notice-Page.Form-Labels.Other-Movers.Remove-button')} #{coMoverIndex + 1}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </React.Fragment>
                                ))}
                                <div className='col-12 mb-3'>
                                    <button type="button" className="Color-Button" onClick={addCoMover}>
                                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.Add-Applicant-Button')}
                                    </button>
                                </div>
                            </>
                        )}

                        <div className='col-12 mb-3'>
                            <fieldset>
                                <legend className="form-label float-none w-auto p-0 mb-2">
                                    {t('Moving-Notice-Page.Form-Labels.Other-Movers.Kids-Radio-Label')} <span className='Required-Asterisk'>*</span>
                                </legend>
                                <div className="d-flex flex-column gap-2">
                                    {yesNoOptions.map(({ value, labelKey }) => (
                                        <div className="form-check" key={`kids-${value}`}>
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="movingNoticeOtherMoversKids"
                                                id={`movingNoticeOtherMoversKids-${value}`}
                                                value={value}
                                                checked={movingWithKids === value}
                                                onChange={() => onMovingWithKidsChange(value)}
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor={`movingNoticeOtherMoversKids-${value}`}
                                            >
                                                {t(labelKey)}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>

                        {movingWithKids === YES && (
                            <>
                                <div className='col-12'>
                                    <h3 className='d-none d-md-block pb-2 pb-md-3'>
                                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.Children-Movers-Header')}
                                    </h3>
                                    <h4 className='d-block d-md-none pb-2 pb-md-3'>
                                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.Children-Movers-Header')}
                                    </h4>
                                </div>
                                {kidMoverIds.map((kidId, kidIndex) => (
                                    <React.Fragment key={kidId}>
                                        <div className='col-12 employment-fields-enter'>
                                            <MovingNoticeMoverInformationSection
                                                idPrefix={`kid-mover-${kidId}`}
                                                showTitle={false}
                                                mode="kidsOnly"
                                                embedded
                                            />
                                            {showKidRemove && (
                                                <div className='row Quote-Form-Section g-4'>
                                                    <div className='col-12 pb-4'>
                                                        <button
                                                            type="button"
                                                            className="Color-Button"
                                                            onClick={() => removeKidMover(kidId)}
                                                        >
                                                            {t('Moving-Notice-Page.Form-Labels.Other-Movers.Remove-button')} #{kidIndex + 1}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </React.Fragment>
                                ))}
                                <div className='col-12 mb-3'>
                                    <button type="button" className="Color-Button" onClick={addKidMover}>
                                        {t('Moving-Notice-Page.Form-Labels.Other-Movers.Add-Applicant-Button')}
                                    </button>
                                </div>
                            </>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MovingNoticeOtherMoversSection;
