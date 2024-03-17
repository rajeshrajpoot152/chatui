import * as React from 'react';
import { Box, Grid, Typography, Breadcrumbs, InputBase, IconButton, Avatar, Badge, Button, ListItemButton, ListItem, ListItemAvatar, List, AccordionSummary, AccordionDetails, ImageList, ImageListItem } from '@mui/material';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomSeparator = () => (
  <Box className="w-1 h-1 bg-primarydark2 rounded-full" />
);

export default function Home() {
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
        <Grid className='flex-shrink-0 md:w-[362px]'>
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
                <Button className='MuiButton-root capitalize  MuiButton-text text-primarylight2 fontFamilyPlusJakarta text-sm font-semibold leading-tight' > Recent Chats
                  <KeyboardArrowDownOutlinedIcon style={{ color: '#7c8fac', fontSize: 20 }} />
                </Button>
              </Grid>
            </Box>
            <Grid className="scrollbar-thin  scrollbar-track-neutral-200  overflow-y-scroll h-[592px]" >
              <List sx={{ width: '100%', maxWidth: 362, bgcolor: 'background.paper', '& .Mui-selected': { backgroundColor: 'rgba(0, 0, 0, 0.04)', }, }}>
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
        <Grid className='flex-1'>
          <Box className="flex flex-col h-full">
            <Grid className='flex flex-col border-b border-slate-100'>
              <Box className='p-7'>
                <Grid container className='flex items-center'>
                  <Grid item className='flex-1'>
                    <Box className='flex items-center'>
                      <Grid className='me-3 relative'>
                        <Badge
                          className='rounded-full bg-[#fbf2ef] text-[#FA896B] w-[54px] h-[54px] flex items-center justify-center fontFamilyPlusJakarta text-sm font-semibold leading-tight uppercase'>
                          {/* MS */}
                          <Avatar className='!w-[54px] !h-[54px]' src="/avatar4.svg" />
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
                    <IconButton aria-label="more" aria-haspopup="true">
                      <MoreVertIcon />
                    </IconButton>
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
                          <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.svg" />
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
                          <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.svg" />
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
                          <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.svg" />
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
                          <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.svg" />
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
                          <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.svg" />
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
                          <Avatar className='!w-[40px] !h-[40px]' src="/avatar4.svg" />
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
              <Grid className='flex-shrink-0 md:w-[266px]'>
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
            </Grid>

            <Grid className='flex flex-col border-t border-slate-100'>
              <Box className='px-7 py-2'>
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

    </main>
  );
}
