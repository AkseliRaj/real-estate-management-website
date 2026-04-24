import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../css/RealEstateProperties.css';
import ArrowButtonOrange from '../components/ArrowButtonOrange';
import PropertyCard from '../components/PropertyCard';
import HeroImageBanner from '../components/HeroImageBanner';
import SearchCategoryFilterSection from '../components/SearchCategoryFilterSection';
import BannerImage from '../assets/svg/BannerImage.svg';

const RealEstatePropertiesPage = () => {
    const { t } = useTranslation();
    const [searchInput, setSearchInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minSquare, setMinSquare] = useState('');
    const [maxSquare, setMaxSquare] = useState('');

    const properties = Array.from({ length: 9 }, () => ({
        address: 'Keskuskatu 56 A 4',
        city: 'Kankaanpää',
        specifications: '2H+K+KPH',
        squares: '30 m2',
        price: '40 000 €',
    }));
    const categoryButtons = [
        { id: 'all', label: t('Properties-Page.Filtering-Section.Categories.All') },
        { id: 'kerrostalo', label: t('Properties-Page.Filtering-Section.Categories.Apartment-Building') },
        { id: 'rivitalo', label: t('Properties-Page.Filtering-Section.Categories.Row-House') },
        { id: 'omakotitalo', label: t('Properties-Page.Filtering-Section.Categories.Detached-House') },
    ];

    const handleSearch = () => {
        setSearchTerm(searchInput.trim().toLowerCase());
    };

    const handleResetFilters = () => {
        setSearchInput('');
        setSearchTerm('');
        setSelectedCategory('all');
        setMinPrice('');
        setMaxPrice('');
        setMinSquare('');
        setMaxSquare('');
    };

    return (
        <div className="container-fluid">
            <HeroImageBanner
                title={t('Rental-Properties-Page.Banner-Title')}
                imageSrc={BannerImage}
                imageAlt={t('Rental-Properties-Page.Banner-Alt')}
            />
            <SearchCategoryFilterSection
                searchInputId="propertySearch"
                instructionNameLabel={t('Properties-Page.Filtering-Section.Property-Address')}
                categoriesLabel={t('Properties-Page.Filtering-Section.Categories-Label')}
                searchValue={searchInput}
                onSearchChange={(event) => setSearchInput(event.target.value)}
                onSearch={handleSearch}
                onReset={handleResetFilters}
                searchButtonLabel={t('Properties-Page.Filtering-Section.Search-Button')}
                resetButtonLabel={t('Properties-Page.Filtering-Section.Reset-Button')}
                categoryButtons={categoryButtons}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                showRangeFilters={true}
                priceRangeLabel={t("Properties-Page.Filtering-Section.Price-Amount")}
                minPriceInputId="minPrice"
                maxPriceInputId="maxPrice"
                minPriceValue={minPrice}
                maxPriceValue={maxPrice}
                onMinPriceChange={(event) => setMinPrice(event.target.value)}
                onMaxPriceChange={(event) => setMaxPrice(event.target.value)}
                squareRangeLabel={t("Properties-Page.Filtering-Section.Square-Amount")}
                minSquareInputId="minSquare"
                maxSquareInputId="maxSquare"
                minSquareValue={minSquare}
                maxSquareValue={maxSquare}
                onMinSquareChange={(event) => setMinSquare(event.target.value)}
                onMaxSquareChange={(event) => setMaxSquare(event.target.value)}
            />
            <div className="row justify-content-center justify-content-lg-start g-3 p-3 p-xl-5">
                <div className='col-12 d-flex justify-content-between flex-wrap gap-3 py-5'>
                    <p className='Card-Amount m-0'>{t("Properties-Page.Propertie-Count")} 1 - 6 (12)</p>
                    <select className='Properties-SortSelect' defaultValue='uusimmat' aria-label='Järjestä kohteet'>
                        <option value='Newest'>{t("Properties-Page.Order-By.Latest")}</option>
                        <option value='Price-asc'>{t("Properties-Page.Order-By.Cheapest")}</option>
                        <option value='Price-desc'>{t("Properties-Page.Order-By.Expensive")}</option>
                        <option value='Squares-asc'>{t("Properties-Page.Order-By.Least-Squares")}</option>
                        <option value='Squares-desc'>{t("Properties-Page.Order-By.Most-Squares")}</option>
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

            <div className='row justify-content-center'>
                <div className='col-12 d-flex justify-content-center py-5'>
                    <nav aria-label="Properties pagination">
                        <ul className="pagination d-flex align-items-center mb-0 gap-3">
                            <li className="page-item">
                                <ArrowButtonOrange label="Previous" variant="orange" showArrow={false} />
                            </li>
                            <li className="page-item">
                                <button type="button" className="Pagination-NumberLink active" aria-current="page">1</button>
                            </li>
                            <li className="page-item">
                                <button type="button" className="Pagination-NumberLink">2</button>
                            </li>
                            <li className="page-item">
                                <button type="button" className="Pagination-NumberLink">3</button>
                            </li>
                            <li className="page-item">
                                <ArrowButtonOrange label="Next" variant="orange" showArrow={false} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default RealEstatePropertiesPage;