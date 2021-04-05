import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers',
  },
  {
    title: 'HOw?',
    content: 'components',
  },
];

const options = [
  {
    label: 'first option',
    value: 'option1',
  },
  {
    label: 'second option',
    value: 'option2',
  },
  {
    label: 'third option',
    value: 'option3',
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
