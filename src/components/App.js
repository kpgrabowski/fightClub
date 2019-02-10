import React from 'react';
import Button from "@material-ui/core/Button";
import Cardd from './Card';


class App extends React.Component {
    render() {
        return (
            <div>
               <h4>Hello World</h4>
                <Button variant="contained"
                        color="primary">
                    Hello World
                </Button>
                <Cardd/>
            </div>
        );
    }
}

export default App;
