import styles from './projects.module.css'
import globalStyles from '../../app.module.css'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';

export default function ProjectContainer(props) {
  const data = props.data;

  return <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
    <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        p: 2,
        bgcolor: (theme) => theme.palette.mode === 'light' ? '#fff' : undefined
      }} >
      <img className={styles.projectImage} src={data.mainImage} alt={data.title} />      
      <div className={styles.projectDescriptionContainer}>
        <Typography className={styles.projectTitle} component="h4" variant="h4" sx={{ color: (theme) => theme.palette.mode === 'light' ? '#0959AA' : '#c4ceed'  }} >
          {data.title}
        </Typography>
        <div className={styles.projectDescription}>
          <p>{data.shortDescription}</p>
        </div>
        <button className={globalStyles.linkWithIcon} onClick={() => props.sidebarCallback(true, data)}>Read more <div className={globalStyles.linkIconIn}>&#10784;</div></button>
      </div>
    </Card>
  </Grid>
}