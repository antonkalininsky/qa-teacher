"use client"

import React, { useMemo } from 'react'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import tasksList from '@/tasks/tasks'
import styles from './styles.module.css'

export default function Test({ params }: { params: { id: number } }) {

  const currentTask = useMemo(() => tasksList.find(task => task.id === Number(params.id)), [params.id])

  return (
    <div>
      <Box className={styles.title}>
        {currentTask?.title}
      </Box>
      <Box className={styles.description}>
        {currentTask?.description}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          test 1
        </Grid>
        <Grid item xs={6}>
          test 2
        </Grid>
      </Grid>
    </div>
  )
}
