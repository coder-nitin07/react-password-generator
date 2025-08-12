import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = ()=>{
    const [ password, setPassword ] = useState('Password');
    const [ length, setLength ] = useState(8);
    const [ smallletters, setSmallLetters ] = useState(false);
    const [ specialCharacters, setSpecialCharacters ] = useState(false);
    const [ numbers, setNumbers ] = useState(false);

    const generatePassword = useCallback(()=>{
        let  upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        if(smallletters){
            upperCharacters += 'abcdefghijklmnopqrstuvxyz';
        }

        if(specialCharacters){
            upperCharacters += '!@#$%^&*()_+~';
        }

        if(numbers){
            upperCharacters += '1234567890';
        }

        let pass = '';

        for(let i=0; i< length; i++){
            pass += upperCharacters[Math.floor(Math.random()*upperCharacters.length)]
        }

        setPassword(pass);
    }, [ length, smallletters, specialCharacters, numbers ]);

    // function generatePassword(){
    //     let  upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
    //     if(smallletters){
    //         upperCharacters += 'abcdefghijklmnopqrstuvxyz';
    //     }

    //     if(specialCharacters){
    //         upperCharacters += '!@#$%^&*()_+~';
    //     }

    //     if(numbers){
    //         upperCharacters += '1234567890';
    //     }

    //     let pass = '';

    //     for(let i=0; i< length; i++){
    //         pass += upperCharacters[Math.floor(Math.random()*upperCharacters.length)]
    //     }

    //     setPassword(pass);
    // }

    useEffect(()=>{
        generatePassword();
    },[ generatePassword ]);
    return (
        <>
            <h1>Password Generator</h1>

            <p className='password'>{ password }</p>

            <p className='flex'>
                <input type='range' min='8' max='50' onChange={(e)=> setLength(e.target.value) } />
                <label>{ length }</label>
            </p>

            <p className='flex'>
                <label>Lowercase :</label>
                <input type='checkbox' defaultChecked={ smallletters } onChange={(e)=> setSmallLetters(!smallletters) } />
            </p>

            <p className='flex'>
                <label>Special Characters :</label>
                <input type='checkbox' defaultChecked={ specialCharacters } onChange={(e)=> setSpecialCharacters(!specialCharacters) } />
            </p>

            <p className='flex'>
                <label>Numbers :</label>
                <input type='checkbox' defaultChecked={ numbers } onChange={(e)=> setNumbers(!numbers) } />
            </p>
        </>
    )
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);