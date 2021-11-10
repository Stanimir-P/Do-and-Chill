import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListSubheader from '@mui/material/ListSubheader';
import ManageSearchTwoToneIcon from '@mui/icons-material/ManageSearchTwoTone';
import PlaylistPlayTwoToneIcon from '@mui/icons-material/PlaylistPlayTwoTone';
import AddTaskIcon from '@mui/icons-material/AddTask';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const musicListItems = (
    <div>
        <ListSubheader>Music</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <ManageSearchTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Search Music" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <PlaylistPlayTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Playlists" />
        </ListItem>
    </div>
);

export const toDoListItems = (
    <div>
        <ListSubheader>To Do</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText primary="Daily Tasks" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddTaskIcon />
            </ListItemIcon>
            <ListItemText primary="Add task" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="View All" />
        </ListItem>
    </div>
);