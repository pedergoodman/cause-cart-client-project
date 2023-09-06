import React from "react";
import { useSelector } from "react-redux";

function ContractTemplates() {
  const vendors = useSelector((store) => store.admin.vendors);

  return (
    <Grid item xs={12} md={6}>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
      Icon with text
    </Typography>
    <Demo>
      <List dense={dense}>
        {generate(
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
              secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>,
        )}
      </List>
    </Demo>
  </Grid>
  );
}

export default ContractTemplates;
