import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Create from "./Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { contextOpenCreate } from "./Context/openContextCreate";
import { IoBagAdd } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./homeControler.css"; // <-- styles avec d-

export default function HomeControler() {
  const navigate = useNavigate();
  const { auth, setAuth, open, setOpen, valueLog, setValueLog } =
    useContext(contextOpenCreate);
  const [data, setdata] = useState([]);

  const fetch = () => {
    axios
      .get("https://backendbag-1.onrender.com/")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch();
    axios
      .get("https://backendbag-1.onrender.com/homeControl", { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "success") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch(() => setAuth(false));
  }, []);

  function HandleDelete(id) {
    axios
      .delete(`https://backendbag-1.onrender.com/delete/${id}`)
      .then(() => fetch())
      .catch((err) => console.log(err));
  }

  function handleLogout() {
    axios
      .get("https://backendbag-1.onrender.com/logout", { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "success") {
          setAuth(false);
        } else {
          alert("Erreur logout");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleClickOpen(e) {
    e.currentTarget.blur();
    setOpen(true);
  }

  function handleSubLog(e) {
    e.preventDefault();
    axios
      .post(
        "https://backendbag-1.onrender.com/log" ,
        {
          email: valueLog.email,
          password: valueLog.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.Status === "success") {
          setAuth(true);
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-container">
      {auth ? (
        <>
          <div className="d-header">
            <div className="d-header-left">
              <h1>Opérations</h1>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                className="d-create-btn"
              >
                create <IoBagAdd style={{ color: "#ea4c88", marginLeft: "5px" }} size={17} />
              </Button>
            </div>

            <div className="d-nav-buttons">
              <Link to="/">
                <Button className="d-nav-btn" variant="outlined">
                  <IoMdHome style={{ marginBottom: "5px" }} size={18} /> Home
                </Button>
              </Link>
              <Link to="/client">
                <Button className="d-nav-btn">Modèles Sac</Button>
              </Link>
              <Link to="/orderdetails">
                <Button className="d-nav-btn">Reception</Button>
              </Link>
              <Button onClick={handleLogout} className="d-nav-btn">
                logout
              </Button>
            </div>
          </div>

          <Create onCreate={fetch} />

          <div className="d-card-container">
            {data.map((user, index) => (
              <div className="d-card" key={index}>
                <div className="d-card-inner">
                  <div className="d-card-title">
                    <h2>{user.name}</h2>
                  </div>
                  <div>
                    <img
                      src={`https://backendbag-1.onrender.com/images/${user.images}`}
                      alt="sac"
                      width="300"
                      className="d-card-img"
                    />
                  </div>
                  <div>
                    <Button
                      className="d-delete-btn"
                      variant="contained"
                      onClick={() => HandleDelete(user.id)}
                    >
                      delete <DeleteIcon style={{ color: "#c42337" }} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="d-login-container">
          <form onSubmit={handleSubLog} className="d-login-form">
            <input
              className="d-login-input"
              onChange={(e) => setValueLog({ ...valueLog, email: e.target.value })}
              autoFocus
              type="text"
              autoComplete="username"
              placeholder="pseudo"
            />
            <input
              className="d-login-input"
              onChange={(e) => setValueLog({ ...valueLog, password: e.target.value })}
              type="password"
              autoComplete="current-password"
              placeholder="password"
            />
            <Button
              type="submit"
              sx={{
                margin: "10px",
                color: "white",
                background: "#ea4c88",
                borderRadius: "8px",
                transition: "0.5s ease",
                "&:hover": { background: "#ea4c88", color: "white" },
              }}
              variant="contained"
            >
              Confirm
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
