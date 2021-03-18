import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map((option) => {
        return (
            option.value !== selected.value && (
                <div
                    key={option.value}
                    className="item"
                    onClick={() => onSelectedChange(option)}
                >
                    {option.label}
                </div>
            )
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label"> Select an option </label>
                <div
                    className={`ui selection dropdown ${
                        open && "visible active"
                    }`}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open && "visible transition"} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
