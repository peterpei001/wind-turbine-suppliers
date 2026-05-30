import { useLanguage } from '../LanguageContext';
import { UI, STRENGTHS } from '../i18n';
import { useLN } from '../useLangNavigate';

export default function AboutPage() {
  const { lang } = useLanguage();
  const ln = useLN();

  return (
    <div className="about-page">
      <div className="about-header">
        <h2 className="about-title">{UI.aboutUs[lang]}</h2>
      </div>

      <section className="about-section">
        <p className="about-text">{UI.aboutDesc[lang]}</p>
        <p className="about-text">{UI.aboutDesc2[lang]}</p>
        <p className="about-text">{UI.aboutDesc3[lang]}</p>
      </section>

      <section className="about-section">
        <h3 className="about-subtitle">{UI.aboutStrengthTitle[lang]}</h3>
        <ul className="about-list">
          {STRENGTHS[lang].map((s, i) => (
            <li key={i} className="about-list-item">{s}</li>
          ))}
        </ul>
      </section>

      <div className="about-back">
        <button className="about-back-btn" onClick={() => ln('/')}>
          {UI.back[lang]}
        </button>
      </div>
    </div>
  );
}
