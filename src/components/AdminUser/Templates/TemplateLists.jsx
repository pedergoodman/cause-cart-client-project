import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper"; // Import Paper component
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import Container from "@mui/material/Container";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function TemplateLists() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const templates = useSelector((store) => store.templateLinkReducer);
  const categories = useSelector((store) => store.categoryNameReducer);

  const dispatch = useDispatch();
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  useEffect(() => {
    dispatch({ type: "FETCH_ADMIN_TEMPLATES" });
    dispatch({ type: "FETCH_ADMIN_CATEGORIES" });
  }, []);

  function OpenModal() {
    console.log("clicked");
    return;
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "16px", borderRadius: "10px" }}>
            <List dense={dense} sx={{ display: "flex-wrap"}}>
              <Typography sx={{ mb: 2 }} variant="h6" component="div">
                Category Names
              </Typography>
              <TextField id="outlined-basic" label="Add Category" variant="outlined" />
              <Button variant="contained" sx={{margin:'10px'}}>Add</Button>
              {categories.map((category) => {
                return (
                  <>
                  <Container key={category.id}>
                    <ListItem>
                        <ListItemText
                          primary={category.name}
                        />
                        <IconButton sx={{justifyContent:"right"}}>
                        <EditOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{justifyContent:"right"}}>
                        <DeleteForeverOutlinedIcon />
                        </IconButton>
                    </ListItem>
                  </Container>
                  <Divider />
                  </>
                );
              })}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "16px", borderRadius: "10px" }}>
            <List dense={dense} sx={{ display: "flex-wrap"}}>
              <Typography sx={{mb: 2 }} variant="h6" component="div">
                Template Links
              </Typography>
              {templates.map((template) => {
                return (
                  <>
                  <Container key={template.id}>
                    <ListItem>
                      <ListItemButton
                        component="a"
                        href={template.link}
                        target="_blank"
                      >
                        <ListItemText
                          primary={template.name}
                          secondary={"click to view link"}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Container>
                <Divider />
                </>
                );
              })}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TemplateLists;
