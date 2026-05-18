export const RENOVATION_TYPE_OPTIONS = [
    { value: 'construction', labelKey: 'Construction-Work' },
    { value: 'electrical', labelKey: 'Electrical-Work' },
    { value: 'lvi', labelKey: 'LVI-Work' },
    { value: 'other', labelKey: 'Other' },
];

export const RENOVATION_WORK_TYPES = [
    {
        value: 'construction',
        titleKey: 'Construction-Work-title',
        supervisorRadioLabelKey: 'Construction-Work-Supervisor-Radio-Label',
        supervisorTitleKey: 'Construction-Work-title',
    },
    {
        value: 'electrical',
        titleKey: 'Electrical-Work-title',
        supervisorRadioLabelKey: 'Electrical-Work-Supervisor-Radio-Label',
        supervisorTitleKey: 'Electrical-Work-title',
    },
    {
        value: 'lvi',
        titleKey: 'LVI-Work-title',
        supervisorRadioLabelKey: 'LVI-Work-Supervisor-Radio-Label',
        supervisorTitleKey: 'LVI-Work-title',
    },
];

export const CONTRACTOR_FIELDS = [
    { field: 'companyName', labelKey: 'Company-Name' },
    { field: 'businessId', labelKey: 'Business-ID' },
    { field: 'firstNames', labelKey: 'Firsnames', type: 'text' },
    { field: 'lastName', labelKey: 'Lastname', type: 'text' },
    { field: 'phoneNumber', labelKey: 'Phonenumber', type: 'tel' },
    { field: 'email', labelKey: 'Email', type: 'email' },
];
