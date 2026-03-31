import defaultIcon from '../assets/svg/FilePenIcon.svg';
import '../css/PropertyManagementLanding.css';

export default function FormCard({
  heading,
  icon = defaultIcon,
  iconAlt,
  className = '',
}) {
  return (
    <div className={`Form-Card ${className}`.trim()}>
      <img
        src={icon}
        alt={iconAlt ?? heading}
        className="Form-Icon"
      />
      <h5 className="Form-Card-Heading d-none d-md-block pt-4">{heading}</h5>
      <h6 className="Form-Card-Heading d-block d-md-none pt-4">{heading}</h6>
    </div>
  );
}
