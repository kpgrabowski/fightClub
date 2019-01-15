import React from 'react';


class Kontakt extends React.Component {

    render() {
        return (
            <div>
                <section className="write-to-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="write-to-us-left">
                                    <span className="text-uppercase text-success page-label">Masz pytanie?</span>
                                    <h2 className="text-uppercase write-to-us-header">Skontaktuj się z nami</h2>


                                    <form action="">
                                        <div>
                                            <label htmlFor="name" className="form-control-label">Imię i nazwisko</label>
                                            <input type="text" id="name" className="form-control">
                                            </input>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="form-control-label">E-mail</label>
                                            <input type="email" id="email" className="form-control">
                                            </input>
                                        </div>
                                        <div>
                                            <label htmlFor="msg-title" className="form-control-label">Tytuł
                                                wiadomości</label>
                                            <input type="text" id="msg-title" className="form-control">
                                            </input>
                                        </div>
                                        <label htmlFor="message"
                                               className="form-control-label">Wiadomość</label>
                                        <textarea id="message" cols="30" rows="5"
                                                  className="form-control"></textarea>
                                        <button className="btn btn-success">Wyślij wiadomość</button>
                                    </form>


                                </div>
                            </div>
                            <div className="col-md-8 d-flex">
                                <img className="align-self-end img-fluid" src="images/budowlaniec.jpg"
                                     alt="budowlaniec"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }


}

export default Kontakt;