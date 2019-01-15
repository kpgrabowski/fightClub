import React from 'react';


class PrawaAutorskie extends React.Component {

    render() {
        return (
            <div>
                <section className="text-center text-white bg-warning copyright">
                    <div className="container">
                        &copy; Copyright 2017 NAZWA FIRMY Wszelkie prawa zastrzeżone
                        <span className="mt-2 d-block copyright-designed">Designed by Strefa Kursów</span>
                        <a className="text-white d-block my-1"
                           href='https://www.freepik.com/free-vector/vehicle-icons-collection_994494.htm'>Designed by
                            Freepik</a>
                        <a className="text-white d-block my-1"
                           href='https://www.freepik.com/free-photo/workman-pointing-to-the-latertal-over-white-background_1197371.htm'>Designed
                            by Freepik</a>
                    </div>
                </section>
            </div>
        )
    }


}

export default PrawaAutorskie;