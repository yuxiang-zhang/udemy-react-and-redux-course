import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({lang, text}) => {
  const [translated, setTranslated] = useState ('');
  const [debouncedText, setDebouncedText] = useState (text);
  useEffect (
    () => {
      (async () => {
        const {data: {data: {translations}}} = await axios.post (
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncedText,
              target: lang.value,
              key: '',
            },
          }
        );

        setTranslated (translations[0].translatedText);
      }) ();
    },
    [lang, debouncedText]
  );

  useEffect (
    () => {
      const timerId = setTimeout (() => {
        setDebouncedText (text);
      }, 500);
      return () => {
        clearTimeout (timerId);
      };
    },
    [text]
  );

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
