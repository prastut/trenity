import React from "react";
import { Link } from "react-router-dom";

//Material Styles
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

//UI ELements
import Navbar from "../../components/Navbar";

//Demo Data
import { DEMO_LIST } from "../../sampleData";

const styles = {
  root: {
    width: "calc(100vw*0.8)",
    maxWidth: "1000px",
    margin: "0 auto",
    color: "white"
  },
  brand: {
    fontSize: "1.5em"
  },
  headings: {
    fontSize: "0.8em",
    letterSpacing: "5px"
  },
  demoListContainer: {
    paddingTop: "20px"
  },
  demo: {
    padding: "10px 0"
  },
  demoLink: {
    color: "white"
  }
};

const View = ({ classes }) => {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Navbar>
          <div className={classes.brand}>Trenity</div>
        </Navbar>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.headings}> DEMO LIST </div>
            <div className={classes.demoListContainer}>
              {DEMO_LIST.map(demo => (
                <div key={demo.variant} className={classes.demo}>
                  <Link
                    className={classes.demoLink}
                    to={`/demo-chrome/match/${demo.matchId}?variant=${
                      demo.variant
                    }`}
                  >
                    {demo.title}
                  </Link>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} />
    </Grid>
  );
};

export default withStyles(styles)(View);
