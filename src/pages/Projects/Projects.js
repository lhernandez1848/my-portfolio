import styles from './projects.module.css'
import { projects } from '../../data/data'
import ProjectContainer from './ProjectContainer'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export default function Projects() {
  const [sidebar, setIsOpen] = useState({ isOpen: false, data: null });

  return <>
    {sidebar.isOpen === true && <Sidebar data={sidebar.data} callback={() => setIsOpen(false)} />}
    <Grid id="projects" item xs={12} sm={6} md={4} sx={{ display: 'flex', color: (theme) =>
        theme.palette.mode === 'light' ? 'white' : 'primary.main', bgcolor: (theme) => theme.palette.mode === 'light' ? '#fbfcfe' : '#06090a' }}>
      <Container className={styles.projectSection}
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }} >
        <Typography component="h2" variant="h4" sx={{ color: (theme) => theme.palette.mode === 'light' ? 'text.primary' : 'white'  }} >
          My Projects
        </Typography>
        <Grid container spacing={4} >
          {projects.map((item, i) => {
            return (
              <ProjectContainer key={i} data={item} sidebarCallback={(bool, description) => setIsOpen({ isOpen: bool, data: description })} />
            )
          })}
        </Grid>
      </Container>
    </Grid>
  </>
}