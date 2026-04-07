import React from 'react';
import { useTranslation } from 'react-i18next';
import FormIcon from '../assets/svg/FilePenIcon.svg';
import formDataEn from '../data/FormDataEn';
import formDataFi from '../data/FormDataFi';

const FormCardsSection = ({ forms: formsProp }) => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage || i18n.language || 'en';
    const forms = formsProp || (currentLanguage.startsWith('fi') ? formDataFi : formDataEn);

    return (
        <div className="container-fluid px-0 py-5">
            <div className="row mx-0 d-flex align-items-center justify-content-center">
                <div className="col-12 col-xl-8 py-0 py-md-5">
                    <div className="row mx-0 align-items-stretch justify-content-center gap-4 gap-xl-5">
                        {forms.map((form) => (
                            <div key={form.id} className="Form-Card col-11 col-md-5">
                                <img src={FormIcon} className="Form-Icon" alt="" aria-hidden="true" />
                                <h5 className="Form-Card-Heading d-none d-md-block pt-4 pb-3">{form.title}</h5>
                                <h6 className="Form-Card-Heading d-block d-md-none pt-4 pb-3">{form.title}</h6>
                                <p>{form.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormCardsSection;
