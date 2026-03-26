import '../css/MarqueeCarousel.css'

import KankaanpäänKiinteistohuoltoLogo from '../assets/webp/KankaanpäänKiinteistohuoltoLogo.webp';
import KnuutilaLogo from '../assets/webp/KnuutilaKiinteistohuoltoLogo.webp';
import KuusistonLasiLogo from '../assets/webp/KuusistonLasiLogo.webp';
import LVIPeltomakiLogo from '../assets/webp/LVI-HalliPeltomakiLogo.webp';
import SeutuverkkoLogo from '../assets/webp/PohjoisSatakunnanSeutuverkkoLogo.webp';

export default function MarqueeCarousel() {
    const images = [KankaanpäänKiinteistohuoltoLogo, KnuutilaLogo, KuusistonLasiLogo, LVIPeltomakiLogo, SeutuverkkoLogo];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {/* Render the images twice for a seamless loop */}
                {[...images, ...images].map((img, index) => (
                    <img key={index} src={img} alt="Logo" style={{ height: '50px' }} />
                ))}
            </div>
        </div>
    )
}