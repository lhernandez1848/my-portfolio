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
        <Typography component="h4" variant="h4" sx={{ mb: { xs: 2, sm: 2 } }}>
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
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: { xs: 2, sm: 4 } }}>
          Back in 2014, I was freshly graduated and working in Accounting. I quickly came to the realization that this career path was not for me, 
          and by the following year had plans to return to school, but struggled to decide what truly interested me. After all, this would be my second 
          career and I wanted to be sure it would be something I enjoyed. So, I didn't like accounting, but there must have been something that initially 
          attracted me to it, right? The answer was Excel; I enjoyed writing formulas and building macros, essentially programming a spreadsheet to be more 
          user friendly. And so, in 2017 I was enrolled in college for computer programming, and never looked back.
        </Typography>
      </div>
      <LogoCollection />
    </Grid>
  </Container>
}