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
      <h4 className="Form-Card-Heading pt-4">{heading}</h4>
    </div>
  );
}
