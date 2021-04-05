import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({lang, text}) => {
  const [translated, setTranslated] = useState ('');

  useEffect (
    () => {
      (async () => {
        const {data: {data: {translations}}} = await axios.post (
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: text,
              target: lang.value,
              key: '',
            },
          }
        );

        setTranslated (translations[0].translatedText);
      }) ();
    },
    [lang, text]
  );

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
