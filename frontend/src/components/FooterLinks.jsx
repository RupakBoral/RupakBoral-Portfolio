import React from 'react';

const FooterLinks = ({label, href}) => {
    return (
        <a href={href}>
            {label}
        </a>
    );
}

export default FooterLinks;
