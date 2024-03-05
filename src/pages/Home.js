import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Hero from '../components/Hero'
import Footer from '../components/Footer/Footer'
import About from './About/About'
import Resume from './Resume/Resume'

import { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import getLPTheme from '../getLPTheme'
import ColorMode from '../components/ColorMode'
import Projects from './Projects/Projects'
import Divider from '@mui/material/Divider'

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function Home() {
  const [mode, setMode] = useState('dark');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return <ThemeProvider theme={LPtheme}>
    <CssBaseline />
    <ColorMode mode={mode} toggleColorMode={toggleColorMode} />
    <Hero />
    <About />
    <Divider />
    <Projects />
    <Divider />
    <Resume />
    <Divider />
    <Footer />
  </ThemeProvider>
}