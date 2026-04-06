const rowJustifyClass = {
    start: 'justify-content-start',
    center: 'justify-content-center',
};

export default function FormIntroductionSection({
    title,
    paragraphs = [],
    innerContainer = true,
    rowJustify = 'start',
}) {
    const rowClassName = `row ${rowJustifyClass[rowJustify]} py-5`;

    const inner = (
        <div className={rowClassName}>
            <div className='col-12 col-lg-8 col-xxl-8 py-0 py-md-5'>
                <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>{title}</h3>
                <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>{title}</h4>
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
