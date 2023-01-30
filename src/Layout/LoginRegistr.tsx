import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useState } from "react";
import {
  fetchLogIn,
  fetchSignUp,
} from "../redux/actionCreators/loginRegistrActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import CustomModal from "../components/CustomModal";
import { clearError } from "../redux/reducers/logInRegistrReducer";

function LoginRegistr() {
  const [haveAccount, setHaveAccount] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.loginRegistrReducer.error);

  const haveAccountHandler = () => {
    setHaveAccount((prevState) => !prevState);
    setRepeatPassword("");
    setEmail("");
    setPassword("");
  };

  const submitHandler = () => {
    haveAccount
      ? dispatch(fetchLogIn({ email, password }))
      : dispatch(fetchSignUp({ email, password }));
  };

  const errorClearhandler = () => {
    dispatch(clearError())
  }

  return (
    <Box
      sx={{
        bgcolor: "#5090D3",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <CustomModal open={true}>
          <Typography textAlign="center" variant="h6" component="div">
            {error}
          </Typography>
          <Box sx={{ display: "flex" }}>
          <Button
            sx={{ flexGrow: 1, marginTop: "10px" }}
            onClick={errorClearhandler}
            variant="contained"
            size="small"
          >
            OK
          </Button>
        </Box>
        </CustomModal>
      ) : null}
      <Card sx={{ width: "400px" }}>
        <CardContent>
          <Typography
            sx={{ marginBottom: "25px" }}
            textAlign="center"
            variant="h5"
            component="div"
          >
            {haveAccount ? "LOG IN" : "SIGN UP"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="email"
              variant="outlined"
            />
            <TextField
              value={password}
              error={
                (!haveAccount && password !== repeatPassword) ||
                password.length < 6
              }
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              label="password 5+ simvol"
              variant="outlined"
            />
            {haveAccount ? null : (
              <TextField
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                id="repeatPassword"
                error={password !== repeatPassword || password.length < 6}
                type="password"
                label="repeat password 5+ simvol"
                variant="outlined"
              />
            )}
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            disabled={
              (!haveAccount && password !== repeatPassword) ||
              password.length < 6
            }
            onClick={submitHandler}
            variant="contained"
            size="medium"
          >
            {haveAccount ? "Log In" : "Create Account"}
          </Button>
          <Typography
            sx={{ marginTop: "5px" }}
            textAlign="center"
            component="div"
          >
            <b>
              If you have {haveAccount && "not"} account
              <span
                onClick={haveAccountHandler}
                style={{ color: "#FFB300", cursor: "pointer" }}
              >
                {haveAccount ? " sign up" : " Log In"}
              </span>
            </b>
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
}

export default LoginRegistr;
