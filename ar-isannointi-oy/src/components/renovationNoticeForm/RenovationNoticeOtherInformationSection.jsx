import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RenovationNoticeSectionWrapper from './RenovationNoticeSectionWrapper';

const ALLOWED_FILE_TYPES = new Set(['application/pdf', 'image/png', 'image/jpeg']);
const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.png', '.jpg', '.jpeg'];

const isAllowedAttachmentFile = (file) => {
    if (ALLOWED_FILE_TYPES.has(file.type)) {
        return true;
    }

    const fileName = file.name.toLowerCase();
    return ALLOWED_FILE_EXTENSIONS.some((extension) => fileName.endsWith(extension));
};

const isImageFile = (file) => file.type.startsWith('image/') || /\.(png|jpe?g)$/i.test(file.name);

const RenovationNoticeOtherInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Renovation-Notice-Form-Page.Form-Labels.Other-Information';
    const attachmentsRef = useRef([]);
    const [attachments, setAttachments] = useState([]);

    attachmentsRef.current = attachments;

    useEffect(() => () => {
        attachmentsRef.current.forEach(({ previewUrl }) => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        });
    }, []);

    const addAttachments = (fileList) => {
        const newAttachments = Array.from(fileList)
            .filter(isAllowedAttachmentFile)
            .map((file) => ({
                id: `${file.name}-${file.size}-${file.lastModified}-${crypto.randomUUID()}`,
                file,
                previewUrl: isImageFile(file) ? URL.createObjectURL(file) : null,
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

            if (attachmentToRemove?.previewUrl) {
                URL.revokeObjectURL(attachmentToRemove.previewUrl);
            }

            return previousAttachments.filter(({ id }) => id !== attachmentId);
        });
    };

    return (
        <RenovationNoticeSectionWrapper title={t(`${translationKey}.title`)}>
            <div className='col-12 mb-3'>
                <label htmlFor="renovationStartDate" className="form-label">
                    {t(`${translationKey}.Start-Date`)} <span className='Required-Asterisk'>*</span>
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="renovationStartDate"
                />
            </div>

            <div className='col-12 mb-3'>
                <label htmlFor="renovationEndDate" className="form-label">
                    {t(`${translationKey}.End-Date`)} <span className='Required-Asterisk'>*</span>
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="renovationEndDate"
                />
            </div>

            <div className='col-12 mb-3'>
                <label htmlFor="renovationAttachments" className="form-label">
                    {t(`${translationKey}.Attachment-Files`)}
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="renovationAttachments"
                    accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                    multiple
                    onChange={handleFileChange}
                />

                {attachments.length > 0 && (
                    <ul className="list-unstyled d-flex flex-wrap gap-3 mt-3 mb-0">
                        {attachments.map(({ id, file, previewUrl }) => (
                            <li
                                key={id}
                                className="p-2 d-flex flex-column align-items-center"
                                style={{
                                    width: '8.5rem',
                                    border: '1px solid #BEBEBE',
                                    borderRadius: '1rem',
                                }}
                            >
                                {previewUrl ? (
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
                                ) : (
                                    <div
                                        className="rounded mb-2 d-flex align-items-center justify-content-center small text-center px-2"
                                        style={{
                                            width: '7rem',
                                            height: '7rem',
                                            border: '1px solid #BEBEBE',
                                            borderRadius: '1rem',
                                        }}
                                    >
                                        PDF
                                    </div>
                                )}
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
                                    aria-label={file.name}
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className='col-12 mb-3'>
                <label htmlFor="renovationOtherInformation" className="form-label">
                    {t(`${translationKey}.Other-Information-Text-Area`)}
                </label>
                <textarea
                    className="form-control"
                    id="renovationOtherInformation"
                    rows="8"
                />
            </div>
        </RenovationNoticeSectionWrapper>
    );
};

export default RenovationNoticeOtherInformationSection;
