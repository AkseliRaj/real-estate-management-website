import React from 'react';
import '../css/PropertyManagementQuotePage.css';
import FormPageBanner from '../components/FormPageBanner';
import ArrowButton from '../components/ArrowButtonOrange';

const PropertyManagementQuotePage = () => {
    return (
        <div className="container-fluid px-0">
            <FormPageBanner />

            {/* Intro Section */}
            <div className='container-fluid Quote-Form-Introduction-Section px-0'>
                <div className='container'>
                    <div className='row justify-content-start py-5'>
                        <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-5'>
                            <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                                Yhteydenotto isännöinnistä
                            </h3>
                            <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                                Yhteydenotto isännöinnistä
                            </h4>

                            <p>
                                Kerro meille lyhyesti taloyhtiösi tarpeista oheisen lomakkeen kautta.
                                Kartoitamme tilanteenne huolellisesti ja palaamme teihin mahdollisimman pian
                                tarjouksen sekä jatkotoimenpiteiden merkeissä.
                            </p>

                            <p className='pb-1 pb-sm-2 pb-lg-3'>
                                Tarvittaessa voimme myös sopia tarkemman keskustelun, jossa käymme läpi
                                teille parhaiten sopivan isännöintiratkaisun. Sinun ei tarvitse kirjata
                                kaikkea taloyhtiöstä, lomakkeen kautta tulleita tietoja voidaan täydentää myöhemmin!
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Form sender information */}
            <div className='container'>
                <div className='row justify-content-start py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            Tarjouspyyntöä tekevän yhteystiedot
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            Tarjouspyyntöä tekevän yhteystiedot
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className="col-12 mb-3">
                                <label htmlFor="contactName" className="form-label">
                                    Nimi: <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactName"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="contactPhone" className="form-label">
                                    Puhelin: <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="contactPhone"
                                />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="contactEmail" className="form-label">
                                    Sähköposti: <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="contactEmail"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Property information */}
            <div className='container'>
                <div className='row justify-content-start py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            Taloyhtiön tiedot
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            Taloyhtiön tiedot
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className="col-12 mb-3">
                                <label htmlFor="propertyName" className="form-label">
                                    Taloyhtiön nimi: <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="propertyName"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="propertyAddress" className="form-label">
                                    Osoite: <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="propertyAddress"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="buildYear" className="form-label">
                                    Rakennusvuosi:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="buildYear"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="apartmentCount" className="form-label">
                                    Huoneistoluku:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="apartmentCount"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="squareFootage" className="form-label">
                                    Asuinpinta-ala neliöt:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="squareFootage"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="additionalInfo" className="form-label">
                                    Muita merkittäviä asioita taloyhtiöstä:
                                </label>
                                <textarea
                                    className="form-control"
                                    id="additionalInfo"
                                    rows="4"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <ArrowButton
                                    label="Lähetä lomake"
                                    variant="orange"
                                    showArrow={true}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <p>Lomake on lähetetty! Olemme sinuun yhteyksissä pikimmiten.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PropertyManagementQuotePage;