import {Box, Toolbar} from '@mui/material';
import {UserMenu} from './UserMenu';

export const TopBar = () => {

    return (
        <>
            <Box
                //position="fixed"
                sx={{
                    //zIndex: (theme) => theme.zIndex.drawer + 1,
                    boxShadow: 'none'
                    //backgroundColor: "purple"
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderRadius: 0,
                        minHeight: '3.5rem !important',
                        //backgroundColor: "black"k,
                    }}
                >
                    <UserMenu/>
                </Toolbar>
            </Box>
        </>
    );
};

