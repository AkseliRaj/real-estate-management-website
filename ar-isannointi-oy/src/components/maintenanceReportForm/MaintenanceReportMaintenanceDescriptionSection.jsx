import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaintenanceReportSectionWrapper from './MaintenanceReportSectionWrapper';

const ALLOWED_IMAGE_TYPES = new Set(['image/png', 'image/jpeg']);
const ALLOWED_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

const isAllowedImageFile = (file) => {
    if (ALLOWED_IMAGE_TYPES.has(file.type)) {
        return true;
    }

    const fileName = file.name.toLowerCase();
    return ALLOWED_IMAGE_EXTENSIONS.some((extension) => fileName.endsWith(extension));
};

const MaintenanceReportMaintenanceDescriptionSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Maintenance-Request-Form-Page.Form-Labels.Maintenance-Description';
    const attachmentsRef = useRef([]);
    const [attachments, setAttachments] = useState([]);

    attachmentsRef.current = attachments;

    useEffect(() => () => {
        attachmentsRef.current.forEach(({ previewUrl }) => {
            URL.revokeObjectURL(previewUrl);
        });
    }, []);

    const addAttachments = (fileList) => {
        const newAttachments = Array.from(fileList)
            .filter(isAllowedImageFile)
            .map((file) => ({
                id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
                file,
                previewUrl: URL.createObjectURL(file),
            }));

        if (newAttachments.length === 0) {
            return;
        }

        setAttachments((previousAttachments) => [...previousAttachments, ...newAttachments]);
    };

    const handleFileChange = (event) => {
        const { files } = event.target;

        if (files?.length) {
            addAttachments(files);
        }

        event.target.value = '';
    };

    const removeAttachment = (attachmentId) => {
        setAttachments((previousAttachments) => {
            const attachmentToRemove = previousAttachments.find(({ id }) => id === attachmentId);

            if (attachmentToRemove) {
                URL.revokeObjectURL(attachmentToRemove.previewUrl);
            }

            return previousAttachments.filter(({ id }) => id !== attachmentId);
        });
    };

    return (
        <MaintenanceReportSectionWrapper title={t(`${translationKey}.title`)}>
            <div className='col-12 mb-3'>
                <label htmlFor="maintenanceDescription" className="form-label">
                    {t(`${translationKey}.Maintenance-Description-Label`)} <span className='Required-Asterisk'>*</span>
                </label>
                <textarea
                    className="form-control"
                    id="maintenanceDescription"
                    rows="8"
                />
            </div>

            <div className='col-12 mb-3'>
                <label htmlFor="maintenanceAttachments" className="form-label">
                    {t(`${translationKey}.Attachments-Label`)}
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="maintenanceAttachments"
                    accept=".png,.jpg,.jpeg,image/png,image/jpeg"
                    multiple
                    onChange={handleFileChange}
                />

                {attachments.length > 0 && (
                    <ul className="list-unstyled d-flex flex-wrap gap-3 mt-3 mb-0">
                        {attachments.map(({ id, file, previewUrl }) => (
                            <li
                                key={id}
                                className=" p-2 d-flex flex-column align-items-center"
                                style={{
                                    width: '8.5rem',
                                    border: '1px solid #BEBEBE',
                                    borderRadius: '1rem',
                                }}
                            >
                                <img
                                    src={previewUrl}
                                    alt={file.name}
                                    className="rounded mb-2"
                                    style={{
                                        width: '7rem',
                                        height: '7rem',
                                        objectFit: 'cover',
                                        border: '1px solid #BEBEBE',
                                        borderRadius: '1rem',
                                    }}
                                />
                                <span
                                    className="small text-center text-break w-100 mb-2"
                                    title={file.name}
                                >
                                    {file.name}
                                </span>
                                <button
                                    type="button"
                                    className="Color-Button"
                                    onClick={() => removeAttachment(id)}
                                    aria-label={t(`${translationKey}.Remove-Attachment-Aria-Label`, { fileName: file.name })}
                                >
                                    {t(`${translationKey}.Remove-Attachment-Button`)}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </MaintenanceReportSectionWrapper>
    );
};

export default MaintenanceReportMaintenanceDescriptionSection;
