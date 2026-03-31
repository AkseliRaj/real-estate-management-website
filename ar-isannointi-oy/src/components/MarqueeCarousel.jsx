import '../css/MarqueeCarousel.css'

import KankaanpäänKiinteistohuoltoLogo from '../assets/webp/KankaanpäänKiinteistohuoltoLogo.webp';
import KnuutilaLogo from '../assets/webp/KnuutilaKiinteistohuoltoLogo.webp';
import KuusistonLasiLogo from '../assets/webp/KuusistonLasiLogo.webp';
import LVIPeltomakiLogo from '../assets/webp/LVI-HalliPeltomakiLogo.webp';
import SeutuverkkoLogo from '../assets/webp/PohjoisSatakunnanSeutuverkkoLogo.webp';

export default function MarqueeCarousel() {
    const images = [KankaanpäänKiinteistohuoltoLogo, KnuutilaLogo, KuusistonLasiLogo, LVIPeltomakiLogo, SeutuverkkoLogo];
    const loopCopies = 4;
    const loopImages = Array.from({ length: loopCopies }, () => images).flat();

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {/* Render multiple copies so larger screens stay filled */}
                {loopImages.map((img, index) => (
                    <img key={index} src={img} alt="Logo" />
                ))}
            </div>
        </div>
    )
}