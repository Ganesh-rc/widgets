import React from 'react';
import Accordion from './components/Accordion';

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
        <div><Accordion items={items} /></div>
        
    );
}

export default App;