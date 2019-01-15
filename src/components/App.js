import React from 'react';
import Navbar from './Navbar'
import Top from './Top'
import Wprowadzenie from './Wproiwadzenie'
import Opinie from './Opinie'
import Realizacje from './Realizacje'
import Kontakt from './Kontakt'
import Stopka from './Stopka'
import PrawaAutorskie from './PrawaAutorskie'


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Top/>
                <Wprowadzenie/>
                <Opinie/>
                <Realizacje/>
                <Kontakt/>
                <Stopka/>
                <PrawaAutorskie/>
            </div>
        );
    }
}

export default App;
