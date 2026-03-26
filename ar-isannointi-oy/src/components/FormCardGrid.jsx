import FormCard from './FormCard.jsx';

export default function FormCardGrid({
  items,
  className = '',
  minCardWidthRem = 14,
}) {
  if (!items?.length) return null;

  return (
    <div
      className={`Form-Card-Grid ${className}`.trim()}
      style={{ '--form-card-min': `${minCardWidthRem}rem` }}
    >
      {items.map((item, index) => (
        <FormCard
          key={item.id ?? `${item.heading}-${index}`}
          heading={item.heading}
          icon={item.icon}
          iconAlt={item.iconAlt}
        />
      ))}
    </div>
  );
}
