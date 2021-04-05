import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({lang, text}) => {
  useEffect (
    () => {
      axios.post (
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: lang.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
    },
    [lang, text]
  );

  return <div />;
};

export default Convert;
