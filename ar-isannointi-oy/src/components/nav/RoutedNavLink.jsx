import { Link } from 'react-router-dom';

function isExternalHref(href) {
    return typeof href === 'string' && /^https?:\/\//i.test(href);
}

const RoutedNavLink = ({ href, className, children, target, rel, ...rest }) => {
    if (!href || href === '#') {
        return (
            <a href="#" className={className} {...rest}>
                {children}
            </a>
        );
    }
    if (isExternalHref(href)) {
        return (
            <a href={href} className={className} target={target} rel={rel} {...rest}>
                {children}
            </a>
        );
    }
    return (
        <Link to={href} className={className} {...rest}>
            {children}
        </Link>
    );
};

export default RoutedNavLink;
