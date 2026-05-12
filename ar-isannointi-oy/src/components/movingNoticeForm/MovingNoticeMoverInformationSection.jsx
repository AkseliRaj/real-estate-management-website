import React from 'react';
import { useTranslation } from 'react-i18next';

const FULL_FIELDS = [
    { id: 'moverFirstNames', type: 'text', labelKey: 'Moving-Notice-Page.Form-Labels.Mover-Information.Firsnames' },
    { id: 'moverLastName', type: 'text', labelKey: 'Moving-Notice-Page.Form-Labels.Mover-Information.Lastname' },
    { id: 'moverPhoneNumber', type: 'tel', labelKey: 'Moving-Notice-Page.Form-Labels.Mover-Information.Phonenumber' },
    { id: 'moverEmail', type: 'email', labelKey: 'Moving-Notice-Page.Form-Labels.Mover-Information.Email' },
    { id: 'moverBirthday', type: 'date', labelKey: 'Moving-Notice-Page.Form-Labels.Mover-Information.Birthday' },
    { id: 'moverNationality', type: 'text', labelKey: 'Moving-Notice-Page.Form-Labels.Mover-Information.Nationality' },
];

const KIDS_ONLY_FIELD_IDS = new Set(['moverFirstNames', 'moverLastName', 'moverBirthday', 'moverNationality']);

const MovingNoticeMoverInformationSection = ({
    idPrefix = '',
    showTitle = true,
    mode = 'full',
    embedded = false,
}) => {
    const { t } = useTranslation();

    const fields = mode === 'kidsOnly'
        ? FULL_FIELDS.filter(({ id }) => KIDS_ONLY_FIELD_IDS.has(id))
        : FULL_FIELDS;

    const inputId = (fieldId) => (idPrefix ? `${idPrefix}-${fieldId}` : fieldId);

    const fieldsRow = (
        <div className='row Quote-Form-Section g-4'>
            {fields.map(({ id, type, labelKey }) => (
                <div className="col-12 mb-3" key={id}>
                    <label htmlFor={inputId(id)} className="form-label">
                        {t(labelKey)} <span className='Required-Asterisk'>*</span>
                    </label>
                    <input
                        type={type}
                        className="form-control"
                        id={inputId(id)}
                    />
                </div>
            ))}
        </div>
    );

    if (embedded) {
        return fieldsRow;
    }

    return (
        <div className='container'>
            <div className='row justify-content-center py-5'>

                {showTitle && (
                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('Moving-Notice-Page.Form-Labels.Mover-Information.title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('Moving-Notice-Page.Form-Labels.Mover-Information.title')}
                        </h4>
                    </div>
                )}

                <div className='col-11 col-lg-8 col-xxl-8'>
                    {fieldsRow}
                </div>

            </div>
        </div>
    );
};

export default MovingNoticeMoverInformationSection;
