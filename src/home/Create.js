import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Create(props) {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      user: {
        gender: event.target.gender.value,
        name: {
          title: event.target.title.value,
          first: event.target.fName.value,
          last: event.target.lName.value,
        },
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        dob: event.target.dob.value,
        phone: event.target.phone.value,
      },
    };
    const userData = [newData].concat(
      JSON.parse(localStorage.getItem("userDetailsData"))
    );
    localStorage.setItem("userDetailsData", JSON.stringify(userData));
    props.handleCreate()
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create your New User
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            name="gender"
            id="select"
            label="Gender"
            defaultValue="Male"
            select
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            name="title"
            id="select"
            label="Title"
            defaultValue="mr"
            select
          >
            <MenuItem value="mr">Mr</MenuItem>
            <MenuItem value="mrs">Mrs</MenuItem>
            <MenuItem value="miss">miss</MenuItem>
            <MenuItem value="ms">ms</MenuItem>
          </TextField>
          </div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="fName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="User Name"
            type="text"
            value="newuser"
            id="userName"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            id="date"
            variant="outlined"
            required
            fullWidth
            label="DOB"
            name="dob"
            type="date"
            defaultValue="2021-01-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone"
            type="text"
            id="Phone"
            autoComplete="phone"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
