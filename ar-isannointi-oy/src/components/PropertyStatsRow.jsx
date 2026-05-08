import { useTranslation } from 'react-i18next';
import PropertyStatColumn from './PropertyStatColumn';

const PropertyStatsRow = () => {
    const { t } = useTranslation();

    const stats = [
        {
            labelKey: 'Apartment-Specification',
            value: '3h+k+kph',
        },
        {
            labelKey: 'Square-Meters',
            value: '59,0 m2',
        },
        {
            labelKey: 'House-Type',
            value: 'Kerrostalo',
            className: 'col-6 col-md col-lg-4',
        },
        {
            labelKey: 'Floor-Number',
            value: '2 / 4',
        },
        {
            labelKey: 'Year-Built',
            value: '2019',
        },
        {
            labelKey: 'Apartment-Availability',
            value: '1.12.2025',
        },
    ];

    return (
        <div className="row justify-content-start align-items-top pt-5 pb-4 pb-lg-5">
            {stats.map(({ labelKey, value, className }) => (
                <PropertyStatColumn
                    key={labelKey}
                    label={`${t(`RentalPropertyPage.Statistics-Labels.${labelKey}`)}:`}
                    value={value}
                    className={className}
                />
            ))}
        </div>
    );
};

export default PropertyStatsRow;
