import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello, this is a blog<h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
