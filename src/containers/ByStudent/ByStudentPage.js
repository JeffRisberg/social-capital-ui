import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Button, Card, Grid, Modal} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {fetchStudents} from "../OverTime/studentsSlice";
import './ByStudentPage.style.scss'

function StudentCard({student}) {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {student.dimension1}
                </Typography>
                <Typography>
                    {student.dimension2}
                </Typography>
                <Typography>
                    {student.dimension3}
                </Typography>
                <Typography>
                    {student.dimension4}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default function ByStudentPage() {
    const dispatch = useDispatch();

    const studentList = useSelector((state) => state.students.results)

    React.useEffect(() => {
        dispatch(fetchStudents())
    });

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
        <div>
            <h1>By Student</h1>

        </div>
    );
}
