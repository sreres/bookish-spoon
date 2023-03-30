import React from 'react';
//import ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';

const App: React.FC = () => {
    return (
        <div>
            <h1>Hello, this is a blog</h1>
        </div>
    );
};

export default App;

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
