/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 300,
    subtitle: '300 emails saved each week by switching to carrier pigeon',
    suffix: '+',
  },
  {
    title: 45,
    subtitle: '45 years of doing this work',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers are still in business',
    suffix: '%',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Why We Do What We Do{' '}
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              As a nation, our competitive edge has always been the ability to
              adapt to new technology. This same virtue must remain to maintain
              our global leadership position.
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              At Procedence, it is our mission to help ensure that continuation
              happens. We constantly submerge ourselves in the vast process vs.
              production issues that affect our clients.
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Plus, our approach to learning how to adapt to new technology is
              non-threatening and fun, yet practical, and yes, extremely
              productive.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {/* {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))} */}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://procedencebucket2023.s3.amazonaws.com/ParkStock"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
