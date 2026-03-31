import ArrowButton from './ArrowButtonOrange.jsx';

export default function ArticleItem({
  heading,
  mobileHeading,
  body,
  image,
  imageAlt = '',
  ctaLabel,
  ctaHref,
  onCtaClick,
}) {
  if (!heading) return null;

  const handleCtaClick = () => {
    if (ctaHref) {
      window.open(ctaHref, '_blank', 'noopener,noreferrer');
      return;
    }

    if (typeof onCtaClick === 'function') {
      onCtaClick();
    }
  };

  return (
    <article className="Article-Item">
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <h4 className="pb-2 d-none d-md-block">{heading}</h4>
          <h5 className="pb-1 d-block d-md-none">{mobileHeading || heading}</h5>
          {body && <p className="pb-1 pb-md-2">{body}</p>}
          {ctaLabel && (
            <ArrowButton
              label={ctaLabel}
              onClick={handleCtaClick}
              variant="orange"
            />
          )}
        </div>
      </div>
    </article>
  );
}
