import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Drawer} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import AdbIcon from '@mui/icons-material/Adb';
import {fetchDataSources} from "./dataSourcesSlice";
import {Tags} from "../containers/Tags/Tags";
import './DataSourceList.style.scss'

function DataSourceTile({dataSource}) {
    return (
        <div className='tile'>
            <div className='icon'>
                {dataSource.type === "web" ? <PublicIcon fontSize='medium'/> :
                    <AdbIcon fontSize='medium'/>}
            </div>
            <h3>{dataSource.name}</h3>
            <h4>{dataSource.url}</h4>
        </div>
    )
}

export const DataSourceList = () => {
    const dispatch = useDispatch();

    const dataSourcesList = useSelector((state) => state.dataSources.results)

    React.useEffect(() => {
        dispatch(fetchDataSources())
    });

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    const list =
        <Box sx={{width: 600}} role="presentation" onClick={toggleDrawer(false)} className="datasource">
            <h2>Datasources</h2>
            {dataSourcesList?.data?.map((dataSource) =>
                <DataSourceTile key={dataSource.id} dataSource={dataSource}/>
            )}
            <Button sx={{width: 400}}>Add Datasource</Button>
        </Box>

    return (
        <>
            <Button onClick={toggleDrawer(true)}>Manage Datasources</Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
                {list}
                <Tags/>
            </Drawer>
        </>
    )
}
