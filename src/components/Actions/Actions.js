import React from 'react';
import PropTypes from 'prop-types';
import styles from './Actions.module.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}

const Actions = () => (
  <div className={styles.Actions} data-testid="Actions">
    {FloatingActionButtons()}
  </div>
);

Actions.propTypes = {};

Actions.defaultProps = {};

export default Actions;
