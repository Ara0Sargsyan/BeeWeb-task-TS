import Button from "@mui/material/Button";
import { LOGIN_REGISTR_PAGE } from "../utils/consts";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="">
      <Header>
        <Button>
          <Link
            style={{ textDecoration: "none", color: "#FFB300" }}
            to={LOGIN_REGISTR_PAGE}
          >
            log in
          </Link>
        </Button>
      </Header>
    </div>
  );
}

export default Home;
