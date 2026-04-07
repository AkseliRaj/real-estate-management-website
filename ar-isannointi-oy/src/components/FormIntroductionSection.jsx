const rowJustifyClass = {
    start: 'justify-content-start',
    center: 'justify-content-center',
};

export default function FormIntroductionSection({
    title,
    paragraphs = [],
    bulletListIntro,
    bulletListItems = [],
    contentItems = [],
    innerContainer = true,
    rowJustify = 'start',
}) {
    const rowClassName = `row ${rowJustifyClass[rowJustify]} py-5`;
    const hasOrderedContent = contentItems.length > 0;

    const inner = (
        <div className={rowClassName}>
            <div className='col-12 col-lg-8 col-xxl-8 py-0 py-md-5'>
                <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>{title}</h3>
                <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>{title}</h4>
                {hasOrderedContent
                    ? contentItems.map((item, index) => {
                        if (item.type === 'paragraph') {
                            return (
                                <p key={`${item.type}-${index}`} className='pb-1 pb-sm-2 pb-lg-3'>
                                    {item.text}
                                </p>
                            );
                        }

                        if (item.type === 'bulletList') {
                            return (
                                <div key={`${item.type}-${index}`} className='pb-1 pb-sm-2 pb-lg-3'>
                                    {item.intro ? <p>{item.intro}</p> : null}
                                    <ul className='mb-0'>
                                        {item.items.map((bulletItem, bulletIndex) => (
                                            <li key={bulletIndex}>{bulletItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }

                        return null;
                    })
                    : (
                        <>
                            {paragraphs.map((text, index) => (
                                <p
                                    key={index}
                                    className={
                                        index === paragraphs.length - 1
                                            ? 'pb-1 pb-sm-2 pb-lg-3'
                                            : undefined
                                    }
                                >
                                    {text}
                                </p>
                            ))}
                            {bulletListIntro ? <p>{bulletListIntro}</p> : null}
                            {bulletListItems.length > 0 ? (
                                <ul className='pb-1 pb-sm-2 pb-lg-3'>
                                    {bulletListItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </>
                    )}
            </div>
        </div>
    );

    return (
        <div
            className={`container-fluid Quote-Form-Introduction-Section ${innerContainer ? 'px-0' : 'px-3'}`}
        >
            {innerContainer ? <div className='container'>{inner}</div> : inner}
        </div>
    );
}
