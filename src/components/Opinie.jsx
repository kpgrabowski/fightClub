import React from 'react';


class Opinie extends React.Component {

    render() {
        return (
            <div>
                <section className="testimonial">
                    <div className="container">
                        <div className="text-center text-white testimonial-content mx-auto">
                            <h2 className="text-uppercase testimonial-header">Opinia <span
                                className="text-warning">klienta</span></h2>
                            <blockquote className="blockquote">
                                <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Nam, obcaecati placeat ut assumenda accusamus sunt iste distinctio quod! Lorem
                                    ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <footer className="blockquote-footer text-white">Jan Kowalski <cite
                                    title="Inwestor">Inwestor</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </section>
            </div>
        )
    }


}

export default Opinie;