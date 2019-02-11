import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    photo: {
      weight: '900px',
      height: '200px',
    },
};


class Photo extends React.Component {


    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="boxer" src="/images/boxer.png" className={classes.photo} />
                </Grid>
            </div>
        );
    }
}

Photo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photo);