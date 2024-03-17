'use client'
import React, { useState } from 'react';
import { Box, Grid, Typography, InputBase, IconButton, Avatar, Badge, Button, ListItemButton, ListItem, ListItemAvatar, List, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ChatLeft = () => {
    // Recent Chats
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // Recent Chats
    return (
        <Grid className='md:w-[362px] '>
            <Grid className='flex flex-col h-full border-r border-slate-100'>
                <Box className='p-7 pb-2'>
                    <Grid container className='flex items-center'>
                        <Grid item className='flex-1'>
                            <Box className='flex items-center'>
                                <Grid className='me-3 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[54px] h-[54px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[54px] !h-[54px]' src="/avatar1.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#13DEB9] absolute right-0 bottom-2 z-10'> </Badge>
                                </Grid>
                                <Grid>
                                    <Typography className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight mb-[6px]">
                                        Mathew Anderson
                                    </Typography>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        Marketing Director
                                    </Typography>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item className='flex-shrink-0'>
                            <IconButton aria-label="more" id="long-button" aria-haspopup="true"> <MoreVertIcon /> </IconButton>
                        </Grid>
                    </Grid>

                    <Grid className='py-7'>
                        <Grid component="form" sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', border: '1px solid #f1f5f9', borderRadius: '4px', '&:focus-within': { borderColor: '#f1f5f9', boxShadow: '0 0 0 0.2rem rgba(241,245,249,.50)', }, }} >
                            <IconButton type="button" sx={{ p: '7px', color: '#92579E' }} aria-label="search"> <SearchIcon /> </IconButton>
                            <InputBase sx={{ ml: 1, flex: 1, color: '#333b54', fontWeight: 500, fontFamily: 'Plus Jakarta Sans, sans-serif', '&::placeholder': { color: '#333b54 !important', fontFamily: 'Plus Jakarta Sans, sans-serif', }, '&:-ms-input-placeholder': { color: '#333b54 !important', }, }} placeholder="Search contacts" inputProps={{ 'aria-label': 'Search contacts' }} />
                        </Grid>
                    </Grid>

                    <Grid>
                        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} className='MuiButton-root capitalize  MuiButton-text text-primarylight2 fontFamilyPlusJakarta text-sm font-semibold leading-tight' > Recent Chats
                            <KeyboardArrowDownOutlinedIcon style={{ color: '#7c8fac', fontSize: 20 }} />
                        </Button>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }} >
                            <MenuItem className='text-primarydark2 fontFamilyPlusJakarta  text-sm font-medium leading-tight' onClick={handleClose}>Sort By Time</MenuItem>
                            <MenuItem className='text-primarydark2 fontFamilyPlusJakarta  text-sm font-medium leading-tight' onClick={handleClose}>Sort By Unread</MenuItem>
                            <MenuItem className='text-primarydark2 fontFamilyPlusJakarta  text-sm font-medium leading-tight' onClick={handleClose}>Mark as all Read</MenuItem>
                        </Menu>
                    </Grid>
                </Box>
                <Grid className="scrollbar-thin  scrollbar-track-neutral-200  overflow-y-scroll h-[592px]" >
                    <List className='md:max-w-[362px] max-w-[280px]' sx={{ width: '100%', bgcolor: 'background.paper', '& .Mui-selected': { backgroundColor: 'rgba(0, 0, 0, 0.04)', }, }}>
                        <ListItemButton component="a" href="#simple-list" selected>
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar2.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#13DEB9] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>James Johnson </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  15 minutes </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Juce tazmawsam fe fikavo zo.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar3.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#fa896b] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Maria Hernandez </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  30 minutes </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        Empepje kalobzew tulipiosa uneiw hurininoj.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar4.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#ffae1f] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>David Smith </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'> 2 hours </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Puj juk giutkaf pun lobulaba.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar5.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#13DEB9] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Maria Rodriguez </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  5 hours  </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        Udsopew wivisu naut areh odegopuf tod asca.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        MS
                                        {/* <Avatar className='!w-[48px] !h-[48px]' src="/avatar5.svg" /> */}
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#13DEB9] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Robert Smith Robert SmithRobert Smith </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  5 days </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Fu puzzok baw ilielieli toozot. You: Fu puzzok baw ilielieli toozot.You: Fu puzzok baw ilielieli toozot.You: Fu puzzok baw ilielieli toozot.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar6.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#fa896b] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Joseph Sarah </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  30 minutes  </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Zeh immuw kemrela viab owgoc.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar5.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#ffae1f] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Samuel Eliza</Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  5 hours  </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Vihauzo be jesme uliojsaw me.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar2.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#13DEB9] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>James Johnson </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  15 minutes </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Juce tazmawsam fe fikavo zo.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar3.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#fa896b] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Maria Hernandez </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  30 minutes </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        Empepje kalobzew tulipiosa uneiw hurininoj.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar4.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#ffae1f] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>David Smith </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'> 2 hours </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Puj juk giutkaf pun lobulaba.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar5.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#13DEB9] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Maria Rodriguez </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  5 hours  </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        Udsopew wivisu naut areh odegopuf tod asca.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        MS
                                        {/* <Avatar className='!w-[48px] !h-[48px]' src="/avatar5.svg" /> */}
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#13DEB9] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Robert Smith Robert SmithRobert Smith </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  5 days </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Fu puzzok baw ilielieli toozot. You: Fu puzzok baw ilielieli toozot.You: Fu puzzok baw ilielieli toozot.You: Fu puzzok baw ilielieli toozot.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar6.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#fa896b] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Joseph Sarah </Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  30 minutes  </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Zeh immuw kemrela viab owgoc.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItem className='flex items-center w-full'>
                                <ListItemAvatar className='me-1 relative'>
                                    <Badge className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[48px] h-[48px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                        {/* MS */}
                                        <Avatar className='!w-[48px] !h-[48px]' src="/avatar5.svg" />
                                    </Badge>
                                    <Badge className='w-2 h-2 rounded-full bg-[#ffae1f] absolute right-2 bottom-2 z-10'> </Badge>
                                </ListItemAvatar>
                                <Grid className='w-[80%]'>
                                    <Box className="text-primarydark1 fontFamilyPlusJakarta text-sm font-semibold leading-tight mb-[6px] flex items-center w-full">
                                        <Grid className='flex-1 truncate'>Samuel Eliza</Grid>
                                        <Grid className='flex-shrink-0 text-primarylight2 text-xs font-normal text-end ps-2'>  5 hours  </Grid>
                                    </Box>
                                    <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                        You: Vihauzo be jesme uliojsaw me.
                                    </Typography>
                                </Grid>
                            </ListItem>
                        </ListItemButton>
                    </List>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default ChatLeft;
