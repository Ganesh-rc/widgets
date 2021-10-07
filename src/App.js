import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
    const [showDropdown, setShowDropdown] = useState(true);
    
    return (
        <div>
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
        </div>

    );
};

export default App;
