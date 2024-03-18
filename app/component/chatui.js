'use client'
import React, { useState } from 'react';
import { Box, Grid, Typography, Breadcrumbs, InputBase, IconButton, Avatar, Badge } from '@mui/material';
import Link from 'next/link';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Drawer from '@mui/material/Drawer';

import ChatLeft from '../component/chatleft';
import ChatRight from '../component/chatright';

const CustomSeparator = () => (
    <Box className="w-1 h-1 bg-primarydark2 rounded-full" />
);

export default function ChatUI() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => () => {
        setState({ ...state, [anchor]: open });
    };

    const [isChatRightVisible, setIsChatRightVisible] = useState(true);
    const toggleChatRightVisibility = () => {
        setIsChatRightVisible(!isChatRightVisible);
    };

    return (
        <main className="md:py-16 py-6 md:px-24 px-6">
            <Grid container className="MuiGrid-container bg-primarylight1 rounded-xl p-8 relative overflow-hidden mb-6">
                <Grid item xs={12} sm={12} lg={12} className="MuiGrid-item relative z-10">
                    <Typography className="text-primarydark1 fontFamilyPlusJakarta text-xl font-bold leading-7 mb-1">
                        Chat Application
                    </Typography>
                    <Breadcrumbs separator={<CustomSeparator />} aria-label="breadcrumb">
                        <Link className="text-primarylight2 text-sm font-normal fontFamilyPlusJakarta leading-tight" color="inherit" href="#">
                            Dashboard
                        </Link>
                        <Link className="text-primarylight2 text-sm font-normal fontFamilyPlusJakarta leading-tight" color="inherit" href="#">
                            Chats
                        </Link>
                    </Breadcrumbs>
                </Grid>
                <Grid item className="MuiGrid-item ">
                    <Box className='absolute md:-top-5 bottom-0 md:right-16 sm:right-6 right-4 z-0 md:w-[168px] md:h-[165px] sm:h-[82.14px] h-[54.75px] sm:w-[120px] w-[80px]' component="img" src="/chat-banner-bg.svg" alt="Chat img" />
                </Grid>
            </Grid>
            <Grid className="h-full min-h-[912px] flex z-0 overflow-hidden bg-white shadow-lg shadow-slate-100 border border-slate-100 rounded-xl relative">

                <Grid className="flex-shrink-0 md:block hidden">
                    <ChatLeft />
                </Grid>

                <Grid className='flex-1'>
                    <Box className="flex flex-col h-full">
                        <Grid className='flex flex-col border-b border-slate-100'>
                            <Box className='md:py-7 md:px-7 py-7 px-3'>
                                <Grid container className='flex items-center'>
                                    <Grid item className='flex-1'>
                                        <Box className='flex items-center'>
                                            <Grid className='md:hidden block'>
                                                {['left'].map((anchor) => (
                                                    <React.Fragment key={anchor}>
                                                        <IconButton onClick={toggleDrawer(anchor, true)} aria-label="Menu" aria-haspopup="true" className='me-3'>
                                                            <MenuOutlinedIcon />
                                                        </IconButton>
                                                    </React.Fragment>
                                                ))}
                                            </Grid>
                                            <Grid className='me-3 relative'>
                                                <Badge
                                                    className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[54px] h-[54px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                                    {/* MS */}
                                                    <Avatar className='!w-[54px] !h-[54px]' src="/avatar4.png" />
                                                </Badge>
                                                <Badge className='w-2 h-2 rounded-full bg-[#ffae1f] absolute right-0 bottom-2 z-10'> </Badge>
                                            </Grid>
                                            <Grid>
                                                <Typography
                                                    className="text-primarydark1 fontFamilyPlusJakarta  text-sm font-semibold leading-tight mb-[6px]">
                                                    Andrew Johnson
                                                </Typography>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                                    Away
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item className='flex-shrink-0'>
                                        <IconButton aria-label="phone" aria-haspopup="true">
                                            <PhoneOutlinedIcon />
                                        </IconButton>
                                        <IconButton aria-label="videocam" aria-haspopup="true">
                                            <VideocamOutlinedIcon />
                                        </IconButton>
                                        <Grid className='inline-flex'>
                                            <Grid className='md:block hidden'>
                                                <IconButton aria-label="more" aria-haspopup="true" onClick={toggleChatRightVisibility}>
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        <Grid className='inline-flex'>
                                            <Grid className='md:hidden block'>
                                                {['right'].map((anchor) => (
                                                    <React.Fragment key={anchor}>
                                                        <IconButton onClick={toggleDrawer(anchor, true)} aria-label="more" aria-haspopup="true">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </React.Fragment>
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid className='flex h-full'>
                            <Grid className='flex-1'>
                                <Box className='p-7 scrollbar-thin  scrollbar-track-neutral-200 scrollbar-none overflow-y-scroll h-[698px]'>
                                    {/* Left */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 relative'>
                                                <Badge
                                                    className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[40px] h-[40px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                                    {/* MS */}
                                                    <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.png" />
                                                </Badge>
                                            </Grid>
                                            <Grid className='w-full'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                                    Andrew, 2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 w-[40px] h-[40px]'>
                                            </Grid>
                                            <Grid>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Left end*/}
                                    {/* Right */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='w-full flex justify-end'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                                    2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex justify-end w-full mb-2'>
                                            <Grid className='flex justify-end flex-col'>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Right end*/}
                                    {/* Left */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 relative'>
                                                <Badge
                                                    className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[40px] h-[40px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                                    {/* MS */}
                                                    <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.png" />
                                                </Badge>
                                            </Grid>
                                            <Grid className='w-full'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                                    Andrew, 2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 w-[40px] h-[40px]'>
                                            </Grid>
                                            <Grid>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Left end*/}
                                    {/* Right */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='w-full flex justify-end'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                                    2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex justify-end w-full mb-2'>
                                            <Grid className='flex justify-end flex-col'>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Right end*/}
                                    {/* Left */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 relative'>
                                                <Badge
                                                    className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[40px] h-[40px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                                    {/* MS */}
                                                    <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.png" />
                                                </Badge>
                                            </Grid>
                                            <Grid className='w-full'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                                    Andrew, 2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 w-[40px] h-[40px]'>
                                            </Grid>
                                            <Grid>
                                                <img src="/chat-bg-1.png" alt="chat bg" className="rounded mb-2 inline-flex" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Left end*/}
                                    {/* Left */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 relative'>
                                                <Badge
                                                    className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[40px] h-[40px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                                    {/* MS */}
                                                    <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.png" />
                                                </Badge>
                                            </Grid>
                                            <Grid className='w-full'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                                    Andrew, 2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 w-[40px] h-[40px]'>
                                            </Grid>
                                            <Grid>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Left end*/}
                                    {/* Right */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='w-full flex justify-end'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                                    2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex justify-end w-full mb-2'>
                                            <Grid className='flex justify-end flex-col'>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Right end*/}
                                    {/* Left */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 relative'>
                                                <Badge
                                                    className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[40px] h-[40px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                                    {/* MS */}
                                                    <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.png" />
                                                </Badge>
                                            </Grid>
                                            <Grid className='w-full'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                                    Andrew, 2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 w-[40px] h-[40px]'>
                                            </Grid>
                                            <Grid>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Left end*/}
                                    {/* Right */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='w-full flex justify-end'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none">
                                                    2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex justify-end w-full mb-2'>
                                            <Grid className='flex justify-end flex-col'>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                                <Typography className="bg-primarylight3 text-primarydark2 mb-2 leading-tight fontFamilyPlusJakarta rounded font-normal justify-start items-start inline-flex text-sm p-2">
                                                    If I don’t like something, I’ll stay away from it.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Right end*/}
                                    {/* Left */}
                                    <Box className="mb-4">
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 relative'>
                                                <Badge
                                                    className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[40px] h-[40px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                                                    {/* MS */}
                                                    <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.png" />
                                                </Badge>
                                            </Grid>
                                            <Grid className='w-full'>
                                                <Typography className="text-primarylight2 fontFamilyPlusJakarta text-xs font-normal leading-none truncate">
                                                    Andrew, 2 hours ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className='flex items-center w-full mb-2'>
                                            <Grid className='me-3 w-[40px] h-[40px]'>
                                            </Grid>
                                            <Grid>
                                                <img src="/chat-bg-1.png" alt="chat bg" className="rounded mb-2 inline-flex" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    {/* Left end*/}
                                </Box>
                            </Grid>
                            <Grid className='flex-shrink-0 md:block hidden'>
                                {isChatRightVisible && <ChatRight />}
                            </Grid>
                        </Grid>
                        <Grid className='flex flex-col border-t border-slate-100'>
                            <Box className='md:px-7 md:py-2 px-4'>
                                <Grid container className='flex items-center'>
                                    <Grid item className='flex-1'>
                                        <Grid className='py-0'>
                                            <Grid component="form" sx={{ p: '23px 4px', display: 'flex', alignItems: 'center', '&:focus-within': { borderColor: '#f1f5f9' }, }} >
                                                <IconButton type="button" sx={{ p: '7px', color: '#92579E' }} aria-label="addReaction"> <AddReactionOutlinedIcon /> </IconButton>
                                                <InputBase sx={{ ml: 1, flex: 1, color: '#333b54', fontWeight: 500, fontFamily: 'Plus Jakarta Sans, sans-serif' }} placeholder="Type a Message" inputProps={{ 'aria-label': 'Type a Message' }} />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item className='flex-shrink-0'>
                                        <IconButton aria-label="image" aria-haspopup="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="10" y1="14" x2="21" y2="3"></line><path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path></svg>
                                        </IconButton>
                                        <IconButton aria-label="image" aria-haspopup="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="15" y1="8" x2="15.01" y2="8"></line><rect x="4" y="4" width="16" height="16" rx="3"></rect><path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"></path><path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"></path></svg>
                                        </IconButton>
                                        <IconButton aria-label="attachFile" aria-haspopup="true">
                                            <AttachFileOutlinedIcon />
                                        </IconButton>
                                        {/* <IconButton aria-label="keyboardVoice" aria-haspopup="true">
                        <KeyboardVoiceOutlinedIcon />
                      </IconButton> */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            {/* Left mobile */}

            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <ChatLeft />
                    </Drawer>
                </React.Fragment>
            ))}
            {/* Left mobile */}
            {/* Right mobile */}
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <ChatRight />
                    </Drawer>
                </React.Fragment>
            ))}
            {/* Right mobile */}
            <div>

            </div>
        </main>
    );
}