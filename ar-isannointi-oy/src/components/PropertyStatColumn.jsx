const PropertyStatColumn = ({ label, value, className = "col-6 col-md col-md-4 pb-3" }) => {
    return (
        <div className={className}>
            <p className="mb-2">{label}</p>
            <h5 className="d-none d-md-block">{value}</h5>
            <h6 className="d-block d-md-none">{value}</h6>
        </div>
    );
};

export default PropertyStatColumn;
