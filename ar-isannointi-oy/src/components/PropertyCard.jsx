import PropertyThumbnail from '../assets/webp/RealEstatePropertyImage.webp';

const PropertyCard = ({
    address,
    city,
    specifications,
    squares,
    price,
    thumbnail = PropertyThumbnail
}) => {
    return (
        <div className="col-12 col-md-5 col-lg-4">
            <div className='p-3 Property-Card'>
                <h6 className="Property-Address m-0">{address}</h6>
                <p className="Property-City m-0">{city}</p>
                <img
                    src={thumbnail}
                    className="Property-Thumbnail my-3"
                    alt={address}
                />
                <div className="row d-flex justify-content-between">
                    <div className="col">
                        <p className="Property-Specifications m-0">{specifications}</p>
                        <p className="Property-Squares m-0">{squares}</p>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <h6 className="Property-Price m-0">{price}</h6>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PropertyCard;