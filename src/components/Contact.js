import React from 'react'

import { Grid, List, ListItem, Typography } from '@mui/material'

import { info } from '../data/data'

export default function Contact() {
    console.log(info.length)

  return (
    <Grid container spacing={3} justifyContent='center'>
        <Grid item xs={12}>
            <Typography variant='h2' my={3}>Welcome to the Karl Hanger.</Typography>
            <Typography variant='h3'>Contact Information</Typography>
        </Grid>
        {info.map((element, index) => (
            <Grid item xs={4} key={index}>
                <Typography variant='h4'>{element.name}</Typography>
                <List>
                    {element.items.map((item, i) => (
                        <ListItem key={i} sx={styles.listItem}>
                            <Typography variant='h5'>{item.name}</Typography>
                            <Typography>{item.phone}</Typography>
                            <Typography>{item.address}</Typography>
                            <Typography>{item.doctor}</Typography>
                        </ListItem>
                    ))}
                </List>
            </Grid>
        ))}
    </Grid>
  )
}

const styles = {
    listItem: {
        display: 'flex',
        flexDirection: 'column',
    }
}
