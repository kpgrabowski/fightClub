import React from 'react';
import HeaderOfSide from './HeaderOfSide';
import Photo from "./Photo";

class App extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <HeaderOfSide/>
                </div>
                <div>
                    <Photo/>
                </div>
            </div>
        );
    }
}

export default App;
