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
