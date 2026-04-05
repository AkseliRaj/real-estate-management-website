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
                    <div className='col-8'>
                        <div className="Responsibility-Table-Wrapper">
                            <table className="table table-hover Responsibility-Table">
                                <thead>
                                    <tr>
                                        <th scope="col" className='Table-Name align-middle'><h6>Rakenteet</h6></th>
                                        <th scope="col" className='Housing-Association-Responsibility align-middle text-center'>Taloyhtiö</th>
                                        <th scope="col" className='Shareholder-Responsibility align-middle text-center'>Osakas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name">Vesikatto</th>
                                        <td className="align-middle text-center">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name">Ylä-, väli- ja alapohja</th>
                                        <td className="align-middle text-center">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name">Ulkoseinä, sisäseinät, pilarit ja palkit</th>
                                        <td className="align-middle text-center">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name">Painumat ja halkeamat rakenteissa</th>
                                        <td className="align-middle text-center">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name">Parvekkeet</th>
                                        <td className="align-middle text-center">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="align-middle Renovation-Name">Lämmön-, veden- ja ääneneristeet</th>
                                        <td className="align-middle text-center">
                                            <img src={CheckmarkIcon} className="Checkmark-Icon" />
                                        </td>
                                        <td className="align-middle text-center"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResponsibilityTablePage;