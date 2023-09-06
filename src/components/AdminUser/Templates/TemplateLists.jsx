import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import Container from "@mui/material/Container";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function TemplateLists() {
  const [dense, setDense] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);

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

  function editCategory(category) {
    setCategoryName(category.name);
    setEditingCategory(category.id);
  }

  function saveCategory(category) {
    dispatch({
      type: "EDIT_ADMIN_CATEGORY",
      payload: {
        id: category.id,
        name: categoryName,
      },
    });
    setEditingCategory(null);
  }

  function deleteCategory(categoryId) {
    dispatch({
      type: "DELETE_ADMIN_CATEGORY",
      payload: categoryId,
    });
  }

  function addCategory() {
    dispatch({
      type: "ADD_ADMIN_CATEGORY",
      payload: {
        name: categoryName,
      },
    });
    setCategoryName("");
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
            <List dense={dense} sx={{ display: "flex-wrap" }}>
              <div style={{ display: "flex" }}>
                <Typography
                  sx={{ mb: 2, mt: "10px" }}
                  variant="h6"
                  component="div"
                >
                  Category Names
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Add Category"
                  variant="outlined"
                  sx={{ display: "flex", ml: "20px", width: "250px" }}
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <Button
                  sx={{ margin: "10px" }}
                  variant="contained"
                  onClick={addCategory}
                >
                  Add
                </Button>
              </div>
              {categories.map((category) => {
                return (
                  <div key={category.id}>
                    {editingCategory === category.id ? (
                      <>
                        <TextField
                          id="outlined-basic"
                          label="Edit Category"
                          variant="outlined"
                          value={categoryName}
                          onChange={(e) => setCategoryName(e.target.value)}
                          sx={{ mt: "20px", mb: "10px" }}
                        />
                        <Button
                          sx={{ margin: "30px", display: "inline" }}
                          variant="contained"
                          onClick={() => saveCategory(category)}
                        >
                          Save
                        </Button>
                        <Divider />
                      </>
                    ) : (
                      <>
                        <ListItem>
                          <ListItemText primary={category.name} />
                          <IconButton
                            sx={{ justifyContent: "right" }}
                            onClick={() => editCategory(category)}
                          >
                            <EditOutlinedIcon />
                          </IconButton>
                          <IconButton
                            sx={{ justifyContent: "right" }}
                            onClick={() => deleteCategory(category.id)}
                          >
                            <DeleteForeverOutlinedIcon />
                          </IconButton>
                        </ListItem>
                        <Divider />
                      </>
                    )}
                  </div>
                );
              })}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: "16px", borderRadius: "10px" }}>
            <List dense={dense} sx={{ display: "flex-wrap" }}>
              <Typography sx={{ mb: 2 }} variant="h6" component="div">
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
