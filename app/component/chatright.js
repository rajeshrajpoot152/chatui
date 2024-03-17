'use client'
import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Avatar, ListItem, ListItemAvatar, List, AccordionSummary, AccordionDetails, ImageList, ImageListItem } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ChatRight = () => {
    return (
        <Grid className='md:w-[266px]'>
            <Grid className='flex flex-col h-full border-l border-slate-100'>
                <Box className='p-7 pt-4 accordion-wrap'>
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />} aria-controls="panel1-content" id="panel1-header" >
                            <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight">
                                Media <span className='text-primarylight2'>(63)</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ImageList sx={{ width: 154, }} cols={2} gap={8} rowHeight={68}>
                                <ImageListItem>
                                    <img src="/img1.png" alt="chat bg" className="rounded" />
                                </ImageListItem>
                                <ImageListItem>
                                    <img src="/img2.png" alt="chat bg" className="rounded" />
                                </ImageListItem>
                                <ImageListItem>
                                    <img src="/img3.png" alt="chat bg" className="rounded" />
                                </ImageListItem>
                                <ImageListItem>
                                    <img src="/img4.png" alt="chat bg" className="rounded" />
                                </ImageListItem>
                                <ImageListItem>
                                    <img src="/img5.png" alt="chat bg" className="rounded" />
                                </ImageListItem>
                                <ImageListItem>
                                    <Avatar sx={{ bgcolor: '#eaeff4' }} variant="square" className='w-full h-full rounded cursor-pointer'>
                                        <Grid className='text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none'> 58+</Grid>
                                    </Avatar>
                                </ImageListItem>
                            </ImageList>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />} aria-controls="panel1-content" id="panel1-header" >
                            <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight">
                                Files  <span className='text-primarylight2'>(5)</span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ '& > :not(:last-child)': { marginBottom: '20px' }, '& > .MuiListItem-root': { padding: 0 } }}>
                                <ListItem className="group/item">
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#f2f6fa', width: 48, height: 48 }} variant="square" className="rounded">
                                            <img src="/adobe.png" alt="adobe" className="rounded" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Grid className="me-2">
                                        <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight mb-[6px]">
                                            service-task.pdf
                                        </Typography>
                                        <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                            2 MB  17 Mar 2024
                                        </Typography>
                                    </Grid>
                                    <Grid className='absolute inset-y-0 -right-2 group/edit invisible group-hover/item:visible'>
                                        <IconButton aria-label="keyboardVoice" aria-haspopup="true" >
                                            <KeyboardVoiceOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Grid>
                                </ListItem>
                                <ListItem className="group/item">
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#f2f6fa', width: 48, height: 48 }} variant="square" className="rounded">
                                            <img src="/figma.png" alt="figma" className="rounded" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Grid className="me-2">
                                        <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight mb-[6px]">
                                            homepage-design.fig
                                        </Typography>
                                        <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                            3 MB  17 Mar 2024
                                        </Typography>
                                    </Grid>
                                    <Grid className='absolute inset-y-0 -right-2 group/edit invisible group-hover/item:visible'>
                                        <IconButton aria-label="keyboardVoice" aria-haspopup="true" >
                                            <KeyboardVoiceOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Grid>
                                </ListItem>
                                <ListItem className="group/item">
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#f2f6fa', width: 48, height: 48 }} variant="square" className="rounded">
                                            <img src="/chrome.png" alt="chrome" className="rounded" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Grid className="me-2">
                                        <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight mb-[6px]">
                                            about-us.html
                                        </Typography>
                                        <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                            1 KB  17 Mar 2024
                                        </Typography>
                                    </Grid>
                                    <Grid className='absolute inset-y-0 -right-2 group/edit invisible group-hover/item:visible'>
                                        <IconButton aria-label="keyboardVoice" aria-haspopup="true" >
                                            <KeyboardVoiceOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Grid>
                                </ListItem>
                                <ListItem className="group/item">
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#f2f6fa', width: 48, height: 48 }} variant="square" className="rounded">
                                            <img src="/zip-folder.png" alt="zip-folder" className="rounded" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Grid className="me-2">
                                        <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight mb-[6px]">
                                            work-project.zip
                                        </Typography>
                                        <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                            20 MB 17 Mar 2024
                                        </Typography>
                                    </Grid>
                                    <Grid className='absolute inset-y-0 -right-2 group/edit invisible group-hover/item:visible'>
                                        <IconButton aria-label="keyboardVoice" aria-haspopup="true" >
                                            <KeyboardVoiceOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Grid>
                                </ListItem>
                                <ListItem className="group/item">
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: '#f2f6fa', width: 48, height: 48 }} variant="square" className="rounded">
                                            <img src="/javascript.png" alt="javascript" className="rounded" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Grid className="me-2">
                                        <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight mb-[6px]">
                                            custom.js
                                        </Typography>
                                        <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                            2 MB 17 Mar 2024
                                        </Typography>
                                    </Grid>
                                    <Grid className='absolute inset-y-0 -right-2 group/edit invisible group-hover/item:visible'>
                                        <IconButton aria-label="keyboardVoice" aria-haspopup="true" >
                                            <KeyboardVoiceOutlinedIcon fontSize="small" />
                                        </IconButton>
                                    </Grid>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ChatRight;
