import style from './Footer.module.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={style.footer}>
            <p>Dev. Carol Lavinia</p>
            <div className={style.socialIcons}>
                <a
                    href="https://github.com/laviniacarol?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/carol-lavinia-166410287/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
