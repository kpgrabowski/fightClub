import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';

const styles = {
    photo: {
      weight: '900px',
      height: '200px',
    },
    media: {
        height: 0,
    },
    mainPhoto: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
    }
};


class Photo extends React.Component {


    render() {
        const {classes} = this.props;
        return (
            <div>
                <div>
                    <CardMedia
                        className={classes.media}
                        image='/images/hi.png'
                        title="hi"
                    />
                </div>
                <div className={classes.mainPhoto}>
                    <img src={require('../images/boxer.png')}
                         alt={"hi"}
                         />
                </div>
            </div>
        );
    }
}

Photo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photo);