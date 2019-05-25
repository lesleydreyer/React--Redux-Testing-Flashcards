import React from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';

//stateless functional component so don't have to worry about the 'this' object, purely presentational
const App = () => {
    return (
        <div>
            <h2>Flashcard Pro</h2>
            <StackList />
            <hr />
            <Link to='stack_form'>
                <h4>Create a New Stack</h4>
            </Link>
        </div>
    );
}

export default App;