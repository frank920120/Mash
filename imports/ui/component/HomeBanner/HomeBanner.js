import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTransition, animated, config } from "react-spring";
import Fade from "react-reveal/Fade";
import ExpandMore from "rmdi/lib/ExpandMore";
const items = [
  { id: 0, url: "/images/HomeBanner.png" },
  { id: 1, url: "/images/HomeBanner01.jpg" },
  { id: 2, url: "/images/HomeBanner03.jpg" },
  { id: 3, url: "/images/HomeBanner04.jpg" }
];
const HomeBanner = ({ classes }) => {
  const [index, set] = useState(0);

  const transitions = useTransition(items[index], items => items.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(() => {
    void setInterval(() => set(state => (state + 1) % 4), 2500);
  }, []);
  return (
    <section className={classes.bannerContainer}>
      <ExpandMore className={classes.arrow} size={60} />

      <div className={classes.imageContianer}>
        {transitions.map(({ item, key, props }) => (
          <animated.div
            key={key}
            className={classes.bannerImage}
            style={{
              ...props,
              backgroundImage: `url(${item.url})`
            }}
          />
        ))}

        <div className={classes.ContentContainer}>
          <Fade top duration={3000}>
            <Typography
              className={classes.subtext}
              component="h2"
              variant="headline"
              gutterBottom
            >
              Welcome to
            </Typography>
          </Fade>
          <Fade top duration={3500}>
            <Typography
              className={classes.text}
              component="h3"
              variant="display4"
              gutterBottom
            >
              Mash
            </Typography>
          </Fade>
        </div>
      </div>
    </section>
  );
};

HomeBanner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeBanner);
