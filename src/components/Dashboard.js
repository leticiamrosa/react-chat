import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  List,
  ListItem,
  ListItemText,
  Chip,
  Button,
  TextField
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  topicWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "300px"
  },
  chatBox: {
    width: "85%"
  },
  button: {
    width: "15%"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

export const Dashboard = () => {
  const classes = useStyles();
  const [textValue, changeTextValue] = useState("");
  return (
    <>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Chat app
        </Typography>
        <Typography component="p">Topic placeholder</Typography>
        <div className={classes.flex}>
          <div className={classes.topicWindow}>
            <List component="nav" aria-label="Main mailbox folders">
              {["topic"].map(topic => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            <List component="nav" aria-label="Main mailbox folders">
              {[{ from: "user", msg: "hello" }].map((chat, i) => (
                <div className={classes.flex} key={i}>
                  <Chip label={chat.from} className={classes.chip} />
                  <Typography variant="p">{chat.msg}</Typography>
                </div>
              ))}
            </List>
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
          />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default Dashboard;
