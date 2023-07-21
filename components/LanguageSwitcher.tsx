
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();

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
        <option value='en'>English</option>
        <option value='fa'>Persian</option>
      </select>
    </div>
  );
}