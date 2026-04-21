import { useTranslation } from 'react-i18next';
import '../css/RealEstateProperties.css';
import PropertyCard from '../components/PropertyCard';
import ArrowButtonOrange from '../components/ArrowButtonOrange';
import BannerImage from '../assets/webp/banner.webp';
import FilterIcon from '../assets/svg/filterIcon.svg'

const RealEstatePropertiesPage = () => {
    const { t } = useTranslation();

    const properties = Array.from({ length: 9 }, () => ({
        address: 'Keskuskatu 56 A 4',
        city: 'Kankaanpää',
        specifications: '2H+K+KPH',
        squares: '30 m2',
        price: '40 000 €',
    }));

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col-12 p-0'>
                    <div className='Banner-Section'>
                        <img
                            src={BannerImage}
                            alt='Myyntikohteet banneri'
                            className='Banner-Image'
                        />
                        <div className='Banner-Mask' />
                        <div className='Banner-Content'>
                            <h1 className='hero-content-header d-none d-md-block m-0'>Myyntikohteemme</h1>
                            <h3 className='hero-content-header d-none d-sm-block d-md-none m-0'>Myyntikohteemme</h3>
                            <h4 className='hero-content-header d-block d-sm-none m-0'>Myyntikohteemme</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row Filtering-Section justify-content-center justify-content-lg-start g-5 p-3 p-xl-5">
                <div className='col'>
                    <label htmlFor="propertyAddress" className="form-label pb-2">
                        Vuokran määrä:
                    </label>
                    <div className="Rent-RangeRow">
                        <div className="Rent-InputRow">
                            <input
                                type="text"
                                className="form-control"
                                id="minRent"
                                placeholder="Min"
                            />
                            <span className="Currency-Addon">€</span>
                        </div>
                        <div className="Rent-InputRow">
                            <input
                                type="text"
                                className="form-control"
                                id="maxRent"
                                placeholder="Max"
                            />
                            <span className="Currency-Addon">€</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <label htmlFor="propertyAddress" className="form-label pb-2">
                        Asunnon koko m2:
                    </label>
                    <div className="Rent-RangeRow">
                        <div className="Rent-InputRow">
                            <input
                                type="text"
                                className="form-control"
                                id="minRent"
                                placeholder="Min"
                            />
                            <span className="Currency-Addon">€</span>
                        </div>
                        <div className="Rent-InputRow">
                            <input
                                type="text"
                                className="form-control"
                                id="maxRent"
                                placeholder="Max"
                            />
                            <span className="Currency-Addon">€</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center justify-content-lg-start g-3 p-3 p-xl-5">
                <div className='col-12 d-flex justify-content-between flex-wrap gap-3 py-5'>
                    <p className='Card-Amount m-0'>Kohteet 1 - 6 (12)</p>
                    <ArrowButtonOrange iconSrc={FilterIcon} label='Suodata' altText='Filter icon' />
                    <select className='Properties-SortSelect' defaultValue='uusimmat' aria-label='Järjestä kohteet'>
                        <option value='uusimmat'>Uusimmat ensin</option>
                        <option value='hinta-asc'>Hinta: Halvin ensin</option>
                        <option value='hinta-desc'>Hinta: Kallein ensin</option>
                        <option value='pinta-asc'>Pinta-ala: Pienin ensin</option>
                        <option value='pinta-desc'>Pinta-ala: Suurin ensin</option>
                    </select>
                </div>
                {properties.map((property, index) => (
                    <PropertyCard
                        key={index}
                        address={property.address}
                        city={property.city}
                        specifications={property.specifications}
                        squares={property.squares}
                        price={property.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default RealEstatePropertiesPage;