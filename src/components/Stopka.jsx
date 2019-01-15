import React from 'react';


class Stopka extends React.Component {

    render() {
        return (
            <div>
                <footer className="text-white site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 footer-first-col">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fa fa-phone text-warning" aria-hidden="true">888-223-111</i>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone text-warning" aria-hidden="true">888-223-111</i>
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o text-warning" aria-hidden="true">Pn.-Pt. 8:00-16:00</i>
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o text-warning" aria-hidden="true">Pn.-Pt. 8:00-16:00</i>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope text-warning" aria-hidden="true">firma@kurs.yt</i>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope text-warning" aria-hidden="true">firma@kurs.yt</i>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 footer-second-col">
                                <ul className="list-unstyled">
                                    <li><span className="text-warning">></span>Dlaczego my</li>
                                    <li><span className="text-warning">></span>Zobacz nasza najnowsze realizacje</li>
                                    <li><span className="text-warning">></span>Jak dbamy o bezpieczeństwo</li>
                                    <li><span className="text-warning">></span>Innowacja oraz technologie</li>
                                    <li><span className="text-warning">></span>Wybrane opinie inwestorów</li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-center">
                                <img src="images/mapa.jpg" alt="Mapa" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }


}

export default Stopka;