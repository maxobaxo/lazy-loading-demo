import React from "react";
import ReactDOM from "react-dom";
import Home from 'Containers/Home';

// Import css for Webpack to process and bundle.
import "./styles/index.css";

// Render our React app (the Home component, in this case) within an
// HTML element that has an id attribute of "app", which can be seen in 
// our index.html template
ReactDOM.render(<Home />, document.getElementById('app'));