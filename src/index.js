import React from 'react';
import ReactDOM from 'react-dom';


import Search from './components/Search';

const API_KEY = 'AIzaSyBZUDmae0r-CJ4csCccVVMbHWcM8--7hAY';

const App = () => (
    <div>
        <Search/>
    </div>
);


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);