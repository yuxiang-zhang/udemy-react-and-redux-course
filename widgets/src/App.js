import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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

const showAccordion = () => {
  return window.location.pathname === '/' && <Accordion items={items} />;
};

const showComponent = (path, component) => {
  return window.location.pathname === path && component;
};

export default () => {
  const [selected, setSelected] = useState (options[0]);

  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select: "
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
