import React, { useState } from "react";

// functional component
const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const clickTitleCallback = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => clickTitleCallback(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
        </div>
    );
};

class Accordion2 extends React.Component {
    state = { activeIndex: 0 };

    onTitleClick = (index) => {
        this.setState({ activeIndex: index });
    };

    renderItems() {
        return this.propsitems.map((item, index) => {
            return (
                <React.Fragment key={item.title}>
                    <div
                        className="title active"
                        onClick={() => this.onTitleClick(index)}
                    >
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                </React.Fragment>
            );
        });
    }

    render() {
        return (
            <div className="ui styled accordion">
                {this.renderItems()}
                <h1>{this.state.activeIndex}</h1>
            </div>
        );
    }
}

export default Accordion;
