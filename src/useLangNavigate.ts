import { useNavigate, useLocation } from 'react-router-dom';

/** Returns a navigate function that prefixes the current language from the URL */
export function useLN() {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = location.pathname.startsWith('/en') ? 'en' : 'zh';
  return (path: string) => navigate(`/${lang}${path}`);
}
