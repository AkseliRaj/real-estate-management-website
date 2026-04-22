import '../css/PropertyManagementInstructions.css';

/**
 * Search field + category chips + search/reset actions (Bootstrap layout).
 */
function SearchCategoryFilterSection({
    searchInputId,
    instructionNameLabel,
    categoriesLabel,
    searchValue,
    onSearchChange,
    onSearch,
    onReset,
    searchButtonLabel,
    resetButtonLabel,
    categoryButtons,
    selectedCategory,
    onSelectCategory,
    showRangeFilters = false,
    priceRangeLabel = 'Price',
    minPriceInputId = 'minPrice',
    maxPriceInputId = 'maxPrice',
    minPricePlaceholder = 'Min',
    maxPricePlaceholder = 'Max',
    minPriceValue = '',
    maxPriceValue = '',
    onMinPriceChange,
    onMaxPriceChange,
    priceUnitLabel = '€',
    squareRangeLabel = 'Squares',
    minSquareInputId = 'minSquare',
    maxSquareInputId = 'maxSquare',
    minSquarePlaceholder = 'Min',
    maxSquarePlaceholder = 'Max',
    minSquareValue = '',
    maxSquareValue = '',
    onMinSquareChange,
    onMaxSquareChange,
    squareUnitLabel = 'm2',
}) {
    const handleSearchInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className="container-fluid Filtering-Section">
            <div className="row justify-content-center">
                <div className="col-11 col-md-9 col-lg-8 py-5">
                    {showRangeFilters && (
                        <div className="row justify-content-center justify-content-lg-start">
                            <div className='col-12 col-lg-6 px-0 py-3 p-lg-4 p-xl-5'>
                                <label htmlFor={minPriceInputId} className="form-label pb-2">
                                    {priceRangeLabel}
                                </label>
                                <div className="Rent-RangeRow">
                                    <div className="Rent-InputRow">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={minPriceInputId}
                                            placeholder={minPricePlaceholder}
                                            value={minPriceValue}
                                            onChange={onMinPriceChange}
                                        />
                                        <span className="Currency-Addon">{priceUnitLabel}</span>
                                    </div>
                                    <div className="Rent-InputRow">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={maxPriceInputId}
                                            placeholder={maxPricePlaceholder}
                                            value={maxPriceValue}
                                            onChange={onMaxPriceChange}
                                        />
                                        <span className="Currency-Addon">{priceUnitLabel}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 px-0 py-3 p-lg-4 p-xl-5'>
                                <label htmlFor={minSquareInputId} className="form-label pb-2">
                                    {squareRangeLabel}
                                </label>
                                <div className="Rent-RangeRow">
                                    <div className="Rent-InputRow">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={minSquareInputId}
                                            placeholder={minSquarePlaceholder}
                                            value={minSquareValue}
                                            onChange={onMinSquareChange}
                                        />
                                        <span className="Currency-Addon">{squareUnitLabel}</span>
                                    </div>
                                    <div className="Rent-InputRow">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={maxSquareInputId}
                                            placeholder={maxSquarePlaceholder}
                                            value={maxSquareValue}
                                            onChange={onMaxSquareChange}
                                        />
                                        <span className="Currency-Addon">{squareUnitLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="row">
                        <div className="col-12 pb-5">
                            <label htmlFor={searchInputId} className="form-label">
                                {instructionNameLabel}
                            </label>

                            <div className="d-flex flex-column flex-md-row gap-3">
                                <input
                                    type="text"
                                    className="form-control flex-grow-1"
                                    id={searchInputId}
                                    value={searchValue}
                                    onChange={onSearchChange}
                                    onKeyDown={handleSearchInputKeyDown}
                                />

                                <div className="d-flex gap-3 flex-wrap flex-sm-nowrap">
                                    <button
                                        type="button"
                                        className="Color-Button flex-shrink-0"
                                        onClick={onSearch}
                                    >
                                        {searchButtonLabel}
                                    </button>

                                    <button
                                        type="button"
                                        className="Outline-Button flex-shrink-0"
                                        onClick={onReset}
                                    >
                                        {resetButtonLabel}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <span className="form-label d-block">
                                {categoriesLabel}
                            </span>

                            <div className="d-flex gap-2 flex-wrap">
                                {categoryButtons.map((category) => (
                                    <button
                                        key={category.id}
                                        type="button"
                                        className={`Outline-Button ${selectedCategory === category.id ? 'active' : ''}`.trim()}
                                        onClick={() => onSelectCategory(category.id)}
                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SearchCategoryFilterSection;
