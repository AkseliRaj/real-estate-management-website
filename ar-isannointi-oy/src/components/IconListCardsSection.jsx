const IconListCardsSection = ({ title, cards = [], iconSrc, listClassName = '' }) => (
    <div className="container-fluid px-0 py-5">
        <div className="row mx-0 d-flex align-items-center justify-content-center">
            <div className="col-12 col-xl-8 py-0 py-md-5 text-center">
                <h3 className='d-none d-md-block pb-3'>{title}</h3>
                <h4 className='d-block d-md-none pb-3'>{title}</h4>
            </div>
            <div className="col-12 col-xl-8 py-0 py-md-3">
                <div className="row mx-0 align-items-stretch justify-content-center gap-4 gap-xl-5">
                    {cards.map((card, index) => (
                        <div key={card.id || index} className="Form-Card col-11 col-md-5">
                            <img src={iconSrc} className="Form-Icon" alt="" aria-hidden="true" />
                            <h5 className="Form-Card-Heading d-none d-md-block pt-4 pb-3">{card.title}</h5>
                            <h6 className="Form-Card-Heading d-block d-md-none pt-4 pb-3">{card.title}</h6>
                            <ul className={`text-start ${listClassName}`.trim()}>
                                {card.items.map((item, itemIndex) => (
                                    <li key={item.id || itemIndex}>
                                        <span className='bolded-text'>{item.boldWord}</span>
                                        {item.paragraph}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default IconListCardsSection;
