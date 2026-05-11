const OFFICE_MAP_EMBED_URL =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1791.8176664894227!2d22.39316957716332!3d61.80490997590653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4688e323c5141bb5%3A0xbcd839b5e4221da6!2zQVIgSXPDpG5uw7ZpbnRpIE95!5e1!3m2!1sen!2sfi!4v1777370555707!5m2!1sen!2sfi';

const iframeStyle = {
    border: '1px solid #BEBEBE',
    borderRadius: '1rem',
    width: '100%',
    maxWidth: '600px',
    aspectRatio: '4 / 3',
    height: 'auto',
};

const GoogleMapsEmbed = ({
    src = OFFICE_MAP_EMBED_URL,
    title = 'AR Isännöinti Oy — office location map',
}) => (
    <iframe
        src={src}
        title={title}
        style={iframeStyle}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    />
);

export default GoogleMapsEmbed;
