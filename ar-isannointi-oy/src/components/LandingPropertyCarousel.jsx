import PropertyCard from './PropertyCard.jsx';
import '../css/LandingPropertyCarousel.css';

function LandingPropertyCarousel({ properties }) {
  return (
    <div className='row justify-content-start g-3 my-4 my-md-5 Landing-PropertyCarousel'>
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
  );
}

export default LandingPropertyCarousel;
