import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaInstagramSquare,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Rishabh Panchal</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} Rishabh Panchal</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/panchal2002"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/iamrishabhpanchal/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rishabh-2002/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
