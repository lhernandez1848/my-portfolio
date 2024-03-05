import styles from './about.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LogoCollection from '../../components/LogoCollection'

export default function About() {
  return <Container sx={{ py: { xs: 8, sm: 16 } }} className={styles.about} id="about">
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: { xs: 'flex', sm: 'flex' }, width: '100%' }} >
      <img src='/assets/lisdanay.png' alt='Myself'  className={styles.aboutImage} />
    </Grid>
    <Grid item xs={12} md={6}>
      <div>
        <Typography component="h4" variant="h4" >
        Hi, I'm&nbsp;
        <Typography component="span"
          variant="h4"
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }} >
          Lisdanay Hernandez!
        </Typography>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: { xs: 2, sm: 4 } }} >
          I'm a Front-end developer based in Kitchener, Ontario, currently in search of an exciting role. With over 2 years of experience in designing, 
          developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.
        </Typography>
      </div>
      <LogoCollection />
    </Grid>
  </Container>
}