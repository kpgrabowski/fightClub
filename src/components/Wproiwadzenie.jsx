import React from 'react';


class Wprowadzenie extends React.Component {

    render() {
        return (
            <div>
                <section className="introduction">
                    <h2 className="text-center text-uppercase introduction-header">Buduj z nami</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <div className="introduction-item text-center">
                                    <img src="images/ikona1.png" alt="ikona1"/>
                                    <h3 className="introduction-item-header">Innowacja</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                                        voluptatibus dicta laboriosam</p>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="introduction-item text-center">
                                    <img src="images/ikona2.png" alt="ikona2"/>
                                    <h3 className="introduction-item-header">Tradycja</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                                        voluptatibus dicta laboriosam</p>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="introduction-item text-center">
                                    <img src="images/ikona3.png" alt="ikona3"/>
                                    <h3 className="introduction-item-header">Doświadczenie</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                                        voluptatibus dicta laboriosam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }


}

export default Wprowadzenie;