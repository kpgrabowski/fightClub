import React from 'react';


class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navContent">
                            <div className="navbar-nav">
                                <a href={"#"} className="nav-item nav-link active text-warning">Start</a>
                                <a href={"#"} className="nav-item nav-link">Cennik</a>
                                <a href="#" className="nav-item nav-link">Realizacje</a>
                                <a href="#" className="nav-item nav-link">Kontakt</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }


}

export default Navbar;