import React from 'react';
import { Container, Paper, Grid, Box } from '@material-ui/core';
import CountUp from 'react-countup';

import { useStyles } from './Styles';

export const Cards = (props) => {
  const classes = useStyles();
  return (
    <div >
      <Container maxWidth="lg">
        <Grid container spacing={3} >
          <Grid item xs >
            <div onClick={() => props.changeCase('cases')}>
              <Paper className={classes.totalPaper}>
                <Box className={classes.totalPaperText} fontSize={18}>
                  Total Cases
              </Box>
                <Box className={classes.totalTotalPaperText} mt={4}>
                  Total
              </Box>
                <Box className={classes.totalPaperText} fontSize={30}>
                  {props.total &&
                    <CountUp
                      start={0}
                      end={props.total}
                      duration={2.4}
                      separator=","
                    />
                  }
                </Box>
              </Paper>
            </div>
          </Grid>
          <Grid item xs>
            <div onClick={() => props.changeCase('active')}>
              <Paper className={classes.activePaper}>
                <Box className={classes.activePaperText} fontSize={18}>
                  Active
              </Box>
                <Box className={classes.activeTotalPaperText} mt={4}>
                  Total
              </Box>
                <Box className={classes.activePaperText} fontSize={30}>
                  {props.active &&
                    <CountUp
                      start={0}
                      end={props.active}
                      duration={2.4}
                      separator=","
                    />
                  }
                </Box>
              </Paper>
            </div>
          </Grid>
          <Grid item xs>
            <div onClick={() => props.changeCase('recovered')}>
              <Paper className={classes.recoveredPaper}>
                <Box className={classes.recoveredPaperText} fontSize={18}>
                  Recovered
              </Box>
                <Box className={classes.recoveredTotalPaperText} mt={4}>
                  Total
              </Box>
                <Box className={classes.recoveredPaperText} fontSize={30}>
                  {props.recovered &&
                    <CountUp
                      start={0}
                      end={props.recovered}
                      duration={2.4}
                      separator=","
                    />
                  }
                </Box>
              </Paper>
            </div>
          </Grid>
          <Grid item xs >
            <div onClick={() => props.changeCase('deaths')}>
              <Paper className={classes.deathsPaper}>
                <Box className={classes.deathsPaperText} fontSize={18}>
                  Deaths
              </Box>
                <Box className={classes.deathsTotalPaperText} mt={4}>
                  Total
              </Box>
                <Box className={classes.deathsPaperText} fontSize={30}>
                  {props.deaths &&
                    <CountUp
                      start={0}
                      end={props.deaths}
                      duration={2.4}
                      separator=","
                    />
                  }
                </Box>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}