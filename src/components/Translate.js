import React, { useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [
    {
        label : 'Africans',
        value : 'af',
    },
    {
        label : 'Arabic',
        value : 'ar',
    },
    {
        label : 'Hindi',
        value : 'hi',
    }

];

const Translate = () => {
    const [ language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
            <div className="field">
                <label>Enter text</label>
                <input value = {text} onChange={(e) =>setText(e.target.value) }/>
            </div>    
            </div>

            
            <Dropdown 
            label ="Slect a language"
            selected = {language} 
            onSelectedChange = {setLanguage}
            options={options}/>
            <hr />
            <h3 className="ui header">output</h3>
            <Convert language={language} text={text} />
        </div>
    );
}; 


export default Translate;
