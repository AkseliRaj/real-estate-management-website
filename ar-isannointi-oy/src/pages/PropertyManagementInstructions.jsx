import '../css/PropertyManagementInstructions.css'
import { useTranslation } from 'react-i18next';

import ResidentInstructionsImage from '../assets/webp/ResidentInstructionsImage.webp'
import AccordionMenuGrid from '../components/AccordionMenuGrid';

function PropertyManagementInstructions() {
    const { t } = useTranslation();

    const formCardItems = [
        { heading: t('propertyLanding.forms.cards.consumptionReading') },
        { heading: t('propertyLanding.forms.cards.faultReport') },
        { heading: t('propertyLanding.forms.cards.alterationAndRepairNotice') }
    ];

    return (
        <div className="container-fluid px-0">

            <div className='container-fluid Instruction-Introduction-Section'>
                <div className='row gx-0 d-flex justify-content-center py-5'>
                    <div className='col-11 col-xxl-9'>
                        <div className='d-block d-md-none col-12 col-sm-11 pb-5'>
                            <img src={ResidentInstructionsImage} alt={t('propertyLanding.images.introductionAlt')} className="Responsibility-Image" />
                        </div>
                        <div className='row gx-0 justify-content-between align-items-center'>
                            <div className='col-12 col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-5'>
                                <h3 className='pb-3 d-none d-md-block'>{t('PropertyManagementInstructions.Introduction-Section.title')}</h3>
                                <h4 className='pb-1 d-block d-md-none'>{t('PropertyManagementInstructions.Introduction-Section.title')}</h4>
                                <p>{t('PropertyManagementInstructions.Introduction-Section.paragraph1')}</p>
                                <p className='pb-1 pb-md-3'>{t('PropertyManagementInstructions.Introduction-Section.paragraph2')}</p>
                            </div>
                            <div className='d-none d-md-flex justify-content-end col-5'>
                                <img src={ResidentInstructionsImage} alt={t('propertyLanding.images.introductionAlt')} className="Responsibility-Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid Instruction-Accordion-Section'>
                <div className='row justify-content-center'>
                    <div className="col-9 py-5">
                        <AccordionMenuGrid
                            items={formCardItems}
                            className='Property-Form-Card-Grid'
                            minCardWidthRem={11}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyManagementInstructions