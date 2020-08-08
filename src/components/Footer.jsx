import React from 'react';
import '../assets/styles/components/Footer.scss'

const footerUse = "Terminos de uso";
const footerPrivacity = "Declaración de privacidad";
const footerHelp = "Centro de ayuda";

const Footer = () => (
    <footer className="footer">
        <a href="/">{footerUse}</a>
        <a href="/">{footerPrivacity}</a>
        <a href="/">{footerHelp}</a>
    </footer>
);

export default Footer;