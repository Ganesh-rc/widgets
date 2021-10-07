import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
const items =[{
    title:'what is react',
    content:'React is a front end javascript framework'
},
{
    title:'why use react',
    content:'React is a fav among js engineers'
},
{
    title:'How do you use react',
    content:'you use it by creating  components'
},
];

const App = () => {
    return (
        <div>
            <div><Search /></div>
        </div>

    );
};

export default App;
