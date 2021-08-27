import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  // DiNodejs,
  // DiMongodb,
  DiGit,
  DiSass,
  DiJava,
  DiBootstrap,
  DiVisualstudio,
  DiCss3,
  DiHtml5
} from 'react-icons/di';
import {
  SiRedux,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiVisualstudio />
      </li>
    </ul>
  );
};

export default TechSkills;
