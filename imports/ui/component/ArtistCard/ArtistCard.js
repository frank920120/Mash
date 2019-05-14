import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const ArtistCard = ({ classes, profile }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={profile.imageurl}
          title="Profile Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Full Name {profile.fullname}
          </Typography>
          <Typography component="p">
            Specialties{profile.specialities}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Full Name {profile.fullname}
          </Typography>
          <Typography component="p">Styles{profile.genre}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Sample Work
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

ArtistCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ArtistCard);
