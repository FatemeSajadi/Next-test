
export default function LanguageSwitcher() {

  return (
    <div>
      <select className="p-2 mx-2 bg-inherit color-inherit" onChange={(e) => e.target.value }>
        <option value='en'>English</option>
        <option value='fa'>Persian</option>
      </select>
    </div>
  );
}