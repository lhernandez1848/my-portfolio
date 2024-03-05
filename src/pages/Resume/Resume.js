import { education, experience } from '../../data/data'
import styles from './resume.module.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ExperienceLayout from './ExperienseLayout'
import Tabs from '../../components/Tabs/Tabs'
import { Card, CardContent } from '@mui/material'

export default function Resume() {
  const expTabArray = experience.map(element => {
    return { name: element.name, tabName: element.tabName, body: <ExperienceLayout data={element} /> }
  });

  const eduTabArray = education.map(element => {
    return { name: element.name, tabName: element.tabName, body: <ExperienceLayout data={element} /> }
  });

  const tiers = [
    {
      title: 'Experience',
      element: <Tabs tabs={expTabArray} />
    },
    {
      title: 'Education',
      element: <Tabs tabs={eduTabArray} />
    },
  ]

  return <Box id="resume" className={styles.resume} >
    {tiers.map((tier, i) => (
      <Card key={i}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }} >
        <CardContent>
          <Typography component="h3" variant="h3"
            sx={{ marginBottom: '1em', color: (theme) => theme.palette.mode === 'light' ? 'primary.primary' : '#fff' }}> 
            {tier.title}
          </Typography>
          {tier.element}
        </CardContent>
      </Card>
    ))}
  </Box>  
}