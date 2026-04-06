import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import CheckmarkIcon from '../assets/svg/CheckmarkIcon.svg';
import responsibilityTablesFi from '../data/ResponsibilityTableFi';
import responsibilityTablesEn from '../data/ResponsibilityTableEn';

function ResponsibilityTable({ tableCategoryId = 'all', rowSearchTerm = '' }) {
    const { i18n } = useTranslation();
    const isEnglish = i18n.resolvedLanguage?.startsWith('en');
    const activeLanguage = i18n.resolvedLanguage ?? undefined;
    const { tables: allTables } = isEnglish ? responsibilityTablesEn : responsibilityTablesFi;

    const tables = useMemo(() => {
        let list = tableCategoryId === 'all'
            ? allTables
            : allTables.filter((table) => table.id === tableCategoryId);
        if (!rowSearchTerm) {
            return list;
        }
        return list
            .map((table) => ({
                ...table,
                rows: table.rows.filter((row) =>
                    row.name.toLocaleLowerCase(activeLanguage).includes(rowSearchTerm),
                ),
            }))
            .filter((table) => table.rows.length > 0);
    }, [allTables, tableCategoryId, rowSearchTerm, activeLanguage]);

    if (tables.length === 0) {
        return (
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8 py-4 py-md-5">
                        <p className="text-muted mb-0">
                            {isEnglish ? 'No rows match your search.' : 'Hakuehdoilla ei löytynyt rivejä.'}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-lg-8 py-4 py-md-5'>
                    {tables.map((table) => (
                        <section
                            key={table.id}
                            className="Responsibility-Table-Section"
                            aria-labelledby={table.title ? `responsibility-table-${table.id}-title` : undefined}
                        >
                            {table.title ? (
                                <h5
                                    id={`responsibility-table-${table.id}-title`}
                                    className="Responsibility-Table-Section-Title mb-3"
                                >
                                    {table.title}
                                </h5>
                            ) : null}
                            <div className="Responsibility-Table-Wrapper">
                                <div className="table-responsive-md">
                                    <table className="table table-hover table-sm Responsibility-Table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className='Table-Name align-middle p-3 p-md-4 ps-2 ps-md-3'>
                                                    <h6>{table.headers.firstColumn}</h6>
                                                </th>
                                                <th scope="col" className='Housing-Association-Responsibility align-middle text-center p-3 p-md-4'>
                                                    {table.headers.housingAssociation}
                                                </th>
                                                <th scope="col" className='Shareholder-Responsibility align-middle text-center p-3 p-md-4'>
                                                    {table.headers.shareholder}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {table.rows.map((row, rowIndex) => (
                                                <tr key={`${table.id}-${rowIndex}`}>
                                                    <th scope="row" className="align-middle Renovation-Name p-3">
                                                        {row.name}
                                                    </th>
                                                    <td className="align-middle text-center p-3">
                                                        {row.housingAssociation ? (
                                                            <img src={CheckmarkIcon} alt="" className="Checkmark-Icon" />
                                                        ) : null}
                                                    </td>
                                                    <td className="align-middle text-center p-3">
                                                        {row.shareholder ? (
                                                            <img src={CheckmarkIcon} alt="" className="Checkmark-Icon" />
                                                        ) : null}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ResponsibilityTable;
