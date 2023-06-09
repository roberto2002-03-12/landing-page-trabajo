import React from 'react'
import ScrollIntoView from 'react-scroll-into-view';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from '@mui/material';

export const BotonSubirArriba = () => {
    return (
        <ScrollIntoView selector='#landing-header'>
            <Button
                variant='contained'
                sx={{
                    backgroundColor: '#F44E77',
                    borderRadius: '50%',
                    position: 'fixed',
                    width: '60px',
                    height: '60px',
                    bottom: '20px',
                    right: '20px',
                    padding: '0px'
                }}
            >
                <ArrowUpwardIcon />
            </Button>
        </ScrollIntoView>
    )
}
