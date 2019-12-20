import React, { useState } from 'react';
import './App.css';

let App = () => {
    const [text, setText] = useState('This is the first functional component');
    let handleChange = e => setText(e.target.value);
        return (     
        <div className="App">
            <Headline content={text} />
            <input type="text" value={ text } onChange={ handleChange } className="form-control" />
        </div>
    );
}

let Headline = ({ content }) => {
    return <h1>{ content }</h1>
};

export default App;
