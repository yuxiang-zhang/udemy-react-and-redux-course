// Import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component (func or class)
const App = function() {
    const buttonText = 'Click Me!';
    return (
	    <div>
	      <label className="label" htmlFor="name" type="text" />
	      <input id="name" type="text" />
	      <button style={{ backgroundColor: 'blue', color: 'white' }}>
	    	{buttonText}
	      </button>
	    </div>
    );
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

if (module.hot) {
    module.hot.accept();
}
