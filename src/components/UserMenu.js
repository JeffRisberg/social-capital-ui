import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import {logout} from '../Redux/Actions/login.actions';
import {Box, Menu, MenuItem, Typography} from '@mui/material';
import {FETCH_USER_DETAILS_SUCCESS} from "../Redux/Actions/constants";
export const UserMenu = () => {

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails[FETCH_USER_DETAILS_SUCCESS.paramName])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = !!anchorEl;
    const handleClick = (event) => setAnchorEl(event.currentTarget);

    const closeMenu = () => setAnchorEl(null);

    const handleLogout = async () => {
        dispatch(logout());
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'right',
                    justifyContent: 'end',
                    background: 'transparent',
                    mt: 1,
                    position: 'absolute',
                    right: '0',
                }}
            >
                <Box
                    id="profile-menu-btn"
                    aria-controls={open ? 'profile-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        display: 'flex',
                        alignItems: 'right',
                        p: 1,
                    }}
                >
                    {userDetails?.email && (
                        <>
                            <Typography
                                variant="body1"
                                noWrap
                                component="div"
                                sx={{fontSize: "17px"}}
                            >
                                {userDetails.email}
                            </Typography>
                            <ArrowDropDownOutlinedIcon sx={{fontSize: "26px"}}/>
                        </>
                    )}
                </Box>
            </Box>

            <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                MenuListProps={{
                    'aria-labelledby': 'profile-menu-btn',
                }}
            >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
}
