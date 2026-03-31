import ArticleItem from './ArticleItem.jsx';

export default function ArticleGrid({
  items = [],
  className = '',
  defaultImage,
  defaultImageAlt = '',
  ctaLabel,
  onCtaClick,
}) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className={`Article-Grid ${className}`.trim()}>
      {items.map((item, index) => (
        <ArticleItem
          key={item.id ?? `${item.heading}-${index}`}
          heading={item.heading}
          mobileHeading={item.mobileHeading}
          body={item.body}
          image={item.image ?? defaultImage}
          imageAlt={item.imageAlt ?? defaultImageAlt}
          ctaLabel={item.ctaLabel ?? ctaLabel}
          onCtaClick={item.onCtaClick ?? onCtaClick}
        />
      ))}
    </div>
  );
}
