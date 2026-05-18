import React from 'react';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../ArrowButtonOrange';
import RenovationNoticeSectionWrapper from './RenovationNoticeSectionWrapper';

const RenovationNoticeSubmitSection = () => {
    const { t } = useTranslation();

    return (
        <RenovationNoticeSectionWrapper bottomPadding>
            <div className='col-12 mb-3'>
                <ArrowButton
                    label={t('Renovation-Notice-Form-Page.Send-Button')}
                    variant="orange"
                    showArrow
                />
            </div>
        </RenovationNoticeSectionWrapper>
    );
};

export default RenovationNoticeSubmitSection;
