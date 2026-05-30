import { useLanguage } from '../LanguageContext';
import { UI } from '../i18n';
import { useLN } from '../useLangNavigate';

export default function ContactPage() {
  const { lang } = useLanguage();
  const ln = useLN();

  return (
    <div className="about-page">
      <div className="about-header">
        <h2 className="about-title">{UI.contactUs[lang]}</h2>
      </div>

      <section className="about-section">
        <p className="about-text">{UI.contactDesc[lang]}</p>
        <div className="contact-card">
          <div className="contact-item">
            <span className="contact-item-label">{UI.contactEmail[lang]}</span>
            <a href="mailto:info@bigwingstech.com" className="contact-item-value">info@bigwingstech.com</a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h3 className="about-subtitle">{UI.aboutDisclaimerTitle[lang]}</h3>
        <p className="about-text">{UI.aboutDisclaimer[lang]}</p>
      </section>

      <div className="about-back">
        <button className="about-back-btn" onClick={() => ln('/')}>
          {UI.back[lang]}
        </button>
      </div>
    </div>
  );
}
