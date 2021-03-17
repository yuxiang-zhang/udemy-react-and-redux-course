import React from "react";
import Accordion from "./components/Accordion";
import Search from './components/Search';

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favourite JS library among engineers",
    },
    {
        title: "HOw?",
        content: "components",
    },
];

export default function render() {
    return (
        <div>
            <Search />
        </div>
    );
};
