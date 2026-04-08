const buildFormContentItems = (section) => Object.entries(section || {})
    .filter(([key]) => key !== 'title')
    .map(([key, value]) => {
        if (key.startsWith('paragraph') && typeof value === 'string') {
            return {
                type: 'paragraph',
                text: value,
            };
        }

        if (key === 'bullet-point-list' && typeof value === 'object' && value !== null) {
            return {
                type: 'bulletList',
                intro: value.paragraph1,
                items: Object.entries(value)
                    .filter(
                        ([bulletKey, bulletValue]) => (
                            bulletKey.startsWith('bullet-point-paragraph')
                            && typeof bulletValue === 'string'
                        ),
                    )
                    .map(([, bulletValue]) => bulletValue),
            };
        }

        return null;
    })
    .filter(Boolean);

export default buildFormContentItems;
