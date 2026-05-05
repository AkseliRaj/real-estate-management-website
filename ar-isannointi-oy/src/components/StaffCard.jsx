const StaffCard = ({ name, title, phone, email }) => {
    const titles = Array.isArray(title)
        ? title
        : String(title || '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);

    return (
        <div className='col-11 col-md-6 col-lg-4 col-xxl-3'>
            <div className='Staff-Card text-center align-content-center p-3 p-md-4 py-4 h-100'>
                <h4 className="pb-3 m-0 d-none d-md-block">{name}</h4>
                <h5 className="pb-1 m-0 d-block d-md-none">{name}</h5>
                <div className='row d-flex justify-content-center'>
                    <div className='col'>
                        {titles.map((singleTitle) => (
                            <p key={singleTitle} className='m-1 Profession-Title'>
                                {singleTitle}
                            </p>
                        ))}
                    </div>
                </div>
                <p className='mt-3 mb-0'>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default StaffCard;
