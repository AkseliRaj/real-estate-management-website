import '../css/ResponsibilityTablePage.css'
import { useTranslation } from 'react-i18next';

import FormIntroductionSection from '../components/FormIntroductionSection';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import ResidentInstructionsImage from '../assets/webp/RenovationImage.webp'
import CheckmarkIcon from '../assets/svg/CheckmarkIcon.svg';



const ResponsibilityTablePage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">

            <IntroductionSectionWithImage
                title={t('ResponsibilityTable.Introduction-Section.title')}
                paragraphs={[
                    t('ResponsibilityTable.Introduction-Section.paragraph1'),
                ]}
                imageSrc={ResidentInstructionsImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
            />

            <FormIntroductionSection
                title={t('ResponsibilityTable.Prefix-Section.title')}
                paragraphs={[
                    t('ResponsibilityTable.Prefix-Section.paragraph1'),
                    t('ResponsibilityTable.Prefix-Section.paragraph2'),
                ]}
                innerContainer={false}
                rowJustify="center"
            />

            <div className='container-fluid '>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-lg-8'>
                        <div className="Responsibility-Table-Wrapper">
                            <div className="table-responsive-md">
                                <table className="table table-hover table-sm Responsibility-Table">
                                <thead>
                                    <tr>
                                        <th scope="col" className='Table-Name align-middle p-3 p-md-4 ps-2 ps-md-3'><h6>Rakenteet</h6></th>
                                        <th scope="col" className='Housing-Association-Responsibility align-middle text-center p-3 p-md-4'>Taloyhtiö</th>
                                        <th scope="col" className='Shareholder-Responsibility align-middle text-center p-3 p-md-4'>Osakas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name p-3">Vesikatto</th>
                                        <td className="align-middle text-center p-3">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name p-3">Ylä-, väli- ja alapohja</th>
                                        <td className="align-middle text-center p-3">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name p-3">Ulkoseinä, sisäseinät, pilarit ja palkit</th>
                                        <td className="align-middle text-center p-3">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name p-3">Painumat ja halkeamat rakenteissa</th>
                                        <td className="align-middle text-center p-3">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name  p-3">Parvekkeet</th>
                                        <td className="align-middle text-center  p-3">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center  p-3">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name  p-3">Lämmön-, veden- ja ääneneristeet</th>
                                        <td className="align-middle text-center p-3">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center  p-3"></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResponsibilityTablePage;