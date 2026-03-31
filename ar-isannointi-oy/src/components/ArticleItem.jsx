import ArrowButton from './ArrowButtonOrange.jsx';

export default function ArticleItem({
  heading,
  mobileHeading,
  body,
  image,
  imageAlt = '',
  ctaLabel,
  onCtaClick,
}) {
  if (!heading) return null;

  return (
    <article className="Article-Item">
      {image && (
        <div className="d-block d-md-none col-12 col-sm-11 pb-5">
          <img src={image} alt={imageAlt} className="Responsibility-Image" />
        </div>
      )}

      <div className="row gx-0 justify-content-between align-items-center">
        {image && (
          <div className="d-none d-md-flex justify-content-end col-5">
            <img src={image} alt={imageAlt} className="Responsibility-Image" />
          </div>
        )}

        <div className="col-12 col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-5">
          <h3 className="pb-3 d-none d-md-block">{heading}</h3>
          <h4 className="pb-1 d-block d-md-none">{mobileHeading || heading}</h4>
          {body && <p className="pb-1 pb-md-3">{body}</p>}
          {ctaLabel && (
            <ArrowButton
              label={ctaLabel}
              onClick={onCtaClick}
              variant="orange"
            />
          )}
        </div>
      </div>
    </article>
  );
}
