import React from 'react';


class Realizacje extends React.Component {

    render() {
        return (
            <div>
                <section className="portfolio">
                    <div className="portfolio-header">
                        <h2 className="text-center text-uppercase">Nasze najnowsze realizacje</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <img className="rounded img-fluid portfolio-img" src="images/inwestycja-1-mod.jpg"
                                     alt="Inwestycja 1"/>
                                <span className="text-uppercase page-label text-danger">Inwestycja</span>
                                <h3 className="text-uppercase portfolio-subheader">Biurowiec</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptatem
                                    eveniet in sint a inventore dolor nulla dolorum repudiandae voluptas commodi
                                    minus porro aspernatur, itaque nemo vel quibusdam nobis reiciendis</p>
                                <button className="btn btn-danger portfolio-button">Czytaj więcej</button>
                            </div>
                            <div className="col-md">
                                <img className="rounded img-fluid portfolio-img" src="images/inwestycja-2-mod.jpg"
                                     alt="Inwestycja 2"/>
                                <span className="text-uppercase page-label text-danger">Inwestycja</span>
                                <h3 className="text-uppercase portfolio-subheader">Osiedle mieszkaniowe</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda voluptatem
                                    eveniet in sint a inventore dolor nulla dolorum repudiandae voluptas commodi
                                    minus porro aspernatur, itaque nemo vel quibusdam nobis reiciendis</p>
                                <button className="btn btn-danger portfolio-button">Czytaj więcej</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }


}

export default Realizacje;