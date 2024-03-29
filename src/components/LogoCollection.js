import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import styles from './components.module.css';

const whiteLogos = [
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e339a586d406cbba8b0a2b_html5-light.svg',
    title: 'HTML5'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33a53837eb115bbd3f1b9_css3-light.svg',
    title: 'CSS3'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33ae9683fe19430e0fb7c_js-light.svg',
    title: 'JavaScript'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33b5a2be22acc2339e370_react-light.svg',
    title: 'React.js'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33cb6386e84fece524464_redux-light.svg',
    title: 'Redux'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33d517c25d085e7a000b0_nextjs-light.svg',
    title: 'NextJS'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e5e8fafa02c224cff01fb9_sql-light.png',
    title: 'SQL'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e5e7269b144df389f8479a_git-light.svg',
    title: 'GIT'
  }
];

const darkLogos = [
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e339009f2df27e83035807_html5-dark.svg',
    title: 'HTML5'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33a52d7c64851ec37ad2b_css3-dark.svg',
    title: 'CSS3'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33ae82e39102571e3554c_js-dark.svg',
    title: 'JavaScript'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33b5a1514c8d2f9c57593_react-dark.svg',
    title: 'React.js'
  },
  {
    link:  'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33cb70caabe7e98aa2f5c_redux-dark.svg',
    title: 'Redux'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e33d511514c8d2f9c65e64_nextjs-dark.svg',
    title: 'NextJS'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e5e8facba758a9e55d88e0_sql-dark.png',
    title: 'SQL'
  },
  {
    link: 'https://uploads-ssl.webflow.com/640735a82ae32f57c0ed3c0d/65e5e72679aeca003158c766_git-dark.svg',
    title: 'GIT'
  }  
];

const logoStyle = {
  width: '80px',
  height: 'auto',
  margin: '10px 32px'
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 2 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="left"
        color="text.secondary"
      >
        My current stack:
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img className={styles.logoImages}
              src={logo.link}
              alt={logo.title}
              title={logo.title}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}