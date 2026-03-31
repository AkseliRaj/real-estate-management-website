import '../css/AccordionMenuGrid.css';

export default function AccordionMenuGrid({
  items = [],
  className = '',
  accordionId = 'faq-accordion',
}) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className={`accordion custom-accordion ${className}`.trim()} id={accordionId}>
      {items.map((item, index) => {
        const itemId = item.id ?? `item-${index + 1}`;
        const headerId = `${accordionId}-heading-${itemId}`;
        const collapseId = `${accordionId}-collapse-${itemId}`;
        const isDefaultOpen = Boolean(item.defaultOpen) || index === 0;

        return (
          <div className="accordion-item" key={itemId}>
            <h2 className="accordion-header" id={headerId}>
              <button
                className={`accordion-button ${isDefaultOpen ? '' : 'collapsed'}`.trim()}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={isDefaultOpen}
                aria-controls={collapseId}
              >
                {item.heading}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${isDefaultOpen ? 'show' : ''}`.trim()}
              aria-labelledby={headerId}
              data-bs-parent={`#${accordionId}`}
            >
              <div className="accordion-body">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
