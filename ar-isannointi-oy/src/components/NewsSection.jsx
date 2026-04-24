import ArticleGrid from './ArticleGrid.jsx';

export default function NewsSection({
  title,
  items = [],
  ctaLabel,
  onCtaClick,
  defaultImage,
  defaultImageAlt = '',
  sectionClassName = 'News-Section',
}) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className={`${sectionClassName} row gx-0 d-flex justify-content-center`}>
      <div className='col-12'>
        <div className='row gx-0 d-flex justify-content-center'>
          <div className='col-11 col-md-10 col-xl-8 text-start text-md-center pb-3 pb-sm-4 pb-md-5'>
            <h3 className='pb-3 d-none d-md-block'>{title}</h3>
            <h4 className='pb-2 d-block d-md-none'>{title}</h4>
          </div>
          <div className='col-11 col-md-10 col-xl-8 d-flex justify-content-center'>
            <ArticleGrid
              items={items}
              defaultImage={defaultImage}
              defaultImageAlt={defaultImageAlt}
              ctaLabel={ctaLabel}
              onCtaClick={onCtaClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
