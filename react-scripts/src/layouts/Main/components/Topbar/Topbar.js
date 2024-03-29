import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  /* eslint-disable no-unused-vars */
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;
  /* eslint-disable no-unused-vars */

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Procedence Logo"
        width={{ xs: 100, md: '15%' }}
      >
        <Box
          component={'img'}
          src={
            'https://procedencebucket2023.s3.amazonaws.com/Procedence-Sail-and-Text-Large.png'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          {/* <NavItem
            title={'Client Login'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          /> */}
        </Box>
        <Box marginLeft={4}>
          {/* <NavItem
            title={'pompany'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          /> */}
        </Box>
        <Box marginLeft={4}>
          {/* <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          /> */}
        </Box>
        <Box marginLeft={4}>
          {/* <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          /> */}
        </Box>
        <Box marginLeft={4}>
          {/* <Button
            variant="text"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Training Catalog
          </Button> */}
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="text"
            color="primary"
            component="a"
            target="blank"
            href="https://www.office.com/?auth=2&home=1"
            size="large"
          >
            Client Login
          </Button>
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="mailto:rriggs@procedence.com"
            size="large"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
