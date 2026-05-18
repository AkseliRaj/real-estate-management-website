import React, { useState } from 'react';
import FormPageBanner from '../../components/FormPageBanner';
import FormIntroductionSection from '../../components/FormIntroductionSection';
import RenovationNoticeUserInformationSection from '../../components/renovationNoticeForm/RenovationNoticeUserInformationSection';
import RenovationNoticeApartmentInformationSection from '../../components/renovationNoticeForm/RenovationNoticeApartmentInformationSection';
import RenovationNoticeRenovationTypeCheckboxesSection from '../../components/renovationNoticeForm/RenovationNoticeRenovationTypeCheckboxesSection';
import RenovationNoticeRenovationInformationSection from '../../components/renovationNoticeForm/RenovationNoticeRenovationInformationSection';
import RenovationNoticeRenovationSupervisorSection from '../../components/renovationNoticeForm/RenovationNoticeRenovationSupervisorSection';
import RenovationNoticeOtherInformationSection from '../../components/renovationNoticeForm/RenovationNoticeOtherInformationSection';
import RenovationNoticeSubmitSection from '../../components/renovationNoticeForm/RenovationNoticeSubmitSection';
import { RENOVATION_WORK_TYPES } from '../../components/renovationNoticeForm/renovationNoticeConstants';
import { useTranslation } from 'react-i18next';

const RenovationNoticeFormPage = () => {
    const { t } = useTranslation();
    const [selectedRenovationTypes, setSelectedRenovationTypes] = useState([]);
    const [supervisorSameAsContractor, setSupervisorSameAsContractor] = useState(
        () => Object.fromEntries(RENOVATION_WORK_TYPES.map(({ value }) => [value, ''])),
    );

    const onRenovationTypeChange = (renovationType, isSelected) => {
        setSelectedRenovationTypes((previousTypes) => {
            if (isSelected) {
                return previousTypes.includes(renovationType)
                    ? previousTypes
                    : [...previousTypes, renovationType];
            }

            return previousTypes.filter((type) => type !== renovationType);
        });

        if (!isSelected && RENOVATION_WORK_TYPES.some(({ value }) => value === renovationType)) {
            setSupervisorSameAsContractor((previousValues) => ({
                ...previousValues,
                [renovationType]: '',
            }));
        }
    };

    const onSupervisorSameAsContractorChange = (workType, value) => {
        setSupervisorSameAsContractor((previousValues) => ({
            ...previousValues,
            [workType]: value,
        }));
    };

    return (
        <div className="container-fluid px-0">
            <FormPageBanner headingKey='Renovation-Notice-Form-Page.Banner-Title' />

            <FormIntroductionSection
                title={t('Renovation-Notice-Form-Page.Prefix-Section.title')}
                paragraphs={[
                    t('Renovation-Notice-Form-Page.Prefix-Section.paragraph1'),
                    t('Renovation-Notice-Form-Page.Prefix-Section.paragraph2'),
                    t('Renovation-Notice-Form-Page.Prefix-Section.paragraph3'),
                ]}
                rowJustify={'center'}
            />

            <RenovationNoticeUserInformationSection />

            <RenovationNoticeApartmentInformationSection />

            <RenovationNoticeRenovationTypeCheckboxesSection
                selectedRenovationTypes={selectedRenovationTypes}
                onRenovationTypeChange={onRenovationTypeChange}
            />

            <RenovationNoticeRenovationInformationSection
                selectedRenovationTypes={selectedRenovationTypes}
            />

            <RenovationNoticeRenovationSupervisorSection
                selectedRenovationTypes={selectedRenovationTypes}
                supervisorSameAsContractor={supervisorSameAsContractor}
                onSupervisorSameAsContractorChange={onSupervisorSameAsContractorChange}
            />

            <RenovationNoticeOtherInformationSection />

            <RenovationNoticeSubmitSection />

        </div>
    );
};

export default RenovationNoticeFormPage;
