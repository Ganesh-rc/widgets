import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const options = [
    {
        label : 'The colour red',
        value:'red'
    },
    {
        label :"the color green",
        value:'green'
    },
    {
        label :"A shade of blue",
        value:'blue'
    }
];

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
    const [selected, setSelected] = useState(options[0]);
    
    
    return (
        <div>
            <Header />
            <Route path='/' >
                <Accordion items={items}/>
            </Route>
            <Route path='/list' >
                <Search />;
            </Route>
            <Route path='/dropdown' >
                <Dropdown 
                label="select a color"
                options={options}
                selected = {selected}
                onSelectedChange={setSelected}
                />;
            </Route>
            <Route path='/translate' >
                <Translate />;
            </Route>
        </div>

    );
};

export default App;
/*
            <div>
                <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button> 
                {showDropdown ?
                    <Dropdown 
                    selected = {selected}
                    onSelectedChange = {setSelected}
                    options ={ options } 
                /> : null
            }
            </div>  
*/ 
