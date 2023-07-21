
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";

export default function LanguageSwitcher() {
  const router = useRouter();
  const {t} =  useTranslation('common')

  return (
    <div>
      <select className="p-2 mx-2 bg-inherit color-inherit"
       onChange={(e) =>
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            null,
            { locale: e.target.value }
          )
        }
      >
        <option value='en'>{t('english')}</option>
        <option value='fa'>{t('persian')}</option>
      </select>
    </div>
  );
}