import List from '../../components/List/List'
import styles from './resume.module.css'
import Typography from '@mui/material/Typography'

export default function ExperienceLayout(props) {
  const data = props.data;

  return <div className={styles.expMain}>
    <Typography component="h5" variant="h5" >
      {data.name} &nbsp;
      <Typography component="span" variant="h5"
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
        }} >
        at {data.location}
      </Typography>
    </Typography>
    <Typography className={styles.expSubtitle} component="p" variant="body1" color="text.secondary" >
      {data.timeFrame}
    </Typography>
    {data.list && <List listItems={data.list} class={styles.expDescriptionList} />}
  </div>
}