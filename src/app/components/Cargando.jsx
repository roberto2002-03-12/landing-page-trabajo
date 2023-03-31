import React from 'react'
import { CircularProgress, Box } from '@mui/material'

export const Cargando = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
        <CircularProgress/>
    </Box>
  )
}
