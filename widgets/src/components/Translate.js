import React, {useState} from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [lang, setLang] = useState (options[0]);

  return (
    <div>
      <Dropdown
        label="Select A Language"
        selected={lang}
        onSelectedChange={setLang}
        options={options}
      />
    </div>
  );
};

export default Translate;
