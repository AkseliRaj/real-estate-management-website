const ServiceCard = ({ iconSrc, iconAlt, title, paragraph }) => (
  <div className="col-12 col-md-6 col-lg-4">
    <div className="p-3 p-lg-5 text-center Service-Card h-100 d-flex flex-column">
      <img className="Card-Icon mt-3 mt-md-4" src={iconSrc} alt={iconAlt} />
      <h5 className="d-none d-md-block my-4">{title}</h5>
      <h6 className="d-block d-md-none my-4">{title}</h6>
      <p className="mb-3 mb-md-4">{paragraph}</p>
    </div>
  </div>
);

export default ServiceCard;
