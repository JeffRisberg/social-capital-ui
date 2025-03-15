import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Button, Card, Grid, Modal} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {fetchBots} from "../NewBot/botsSlice";
import ResponsiveAppBar from './AppBar';
import NewBotPage from '../NewBot/NewBotPage';
import './LandingPage.style.scss'

function BotCard({bot}) {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {bot.domain}
                </Typography>
                <Typography variant="h5" component="div">
                    {bot.name}
                </Typography>
                <Typography variant="body2">
                    {bot.url}
                </Typography>
                <Typography variant="body2">
                    {bot.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default function LandingPage() {
    const dispatch = useDispatch();

    const botList = useSelector((state) => state.bots.results)

    React.useEffect(() => {
        dispatch(fetchBots())
    });

    //const userDetails = useSelector((state) => state.userDetails[FETCH_USER_DETAILS_SUCCESS.paramName]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <ResponsiveAppBar/>
            <Card sx={{minWidth: 275}} className='newBot'
                  onClick={() =>
                      // navigate({
                      //     pathname: '/new-bot',
                      // })
                      handleOpen()
                  }
            >
                <CardContent>
                    <Typography variant="h5" component="div" className='blue'>
                        Create New Bot
                    </Typography>
                </CardContent>
            </Card>
            <Grid container direction="row" spacing={2}>
                {botList?.data && botList?.data?.map(bot => (
                    <Grid key={bot.id} item md={4}>
                        <BotCard bot={bot}/>
                    </Grid>)
                )
                }
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <NewBotPage/>
                </Box>
            </Modal>
        </>
    );
}
