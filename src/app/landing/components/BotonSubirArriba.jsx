import { memo } from 'react'
import ScrollIntoView from 'react-scroll-into-view';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from '@mui/material';

export const BotonSubirArriba = memo(() => {
    return (
        <ScrollIntoView selector='#landing-header'>
            <Button
                variant='contained'
                sx={{
                    backgroundColor: '#f44e4e',
                    '&:hover': {
                        backgroundColor: '#af1d1d'
                    },
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
});
