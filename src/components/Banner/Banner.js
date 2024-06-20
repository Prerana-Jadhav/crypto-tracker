import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./Bg.gif)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color: "black",
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "black",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Welcome To Crypto-Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "black",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Information About Crypto Currency
          </Typography>
          
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
