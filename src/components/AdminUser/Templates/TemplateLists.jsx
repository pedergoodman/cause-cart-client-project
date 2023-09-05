import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";



function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


function TemplateLists() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const dispatch = useDispatch()
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));


  useEffect(() => {
    dispatch({ type: "FETCH_ADMIN_TEMPLATES" });
  }, []);
  

  return (
    <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
      Icon with text
    </Typography>
    <Demo>
      <List dense={dense}>
        {generate(
          <ListItem>
            <ListItemText
              primary="Text"
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
        )}
      </List>
    </Demo>
  </Grid>
  );
}

export default TemplateLists;
