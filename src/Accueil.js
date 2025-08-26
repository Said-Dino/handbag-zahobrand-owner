import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import bb from "./bb.jpg";
import { useState, useContext } from "react";
import axios from "axios";
import { contextOpenCreate } from './Context/openContextCreate';
import './accueil.css';

export default function Header() {
  const { valueLog, setValueLog, auth } = useContext(contextOpenCreate);
  const [showForm, setShowForm] = useState("none");
  const navigate = useNavigate();

  function handleLogin() {
    if (!auth) {
      setShowForm(showForm === "none" ? "flex" : "none");
    } else {
      navigate("/orderdetails");
    }
  }

  function handleSubLog(e) {
    e.preventDefault();
    axios.post('https://backendbag-1.onrender.com/log', {
      email: valueLog.email,
      password: valueLog.password,
    }, { withCredentials: true })
      .then(res => {
        if (res.data.Status === "success") {
          navigate('/orderdetails');
        } else {
          alert(res.data.Message);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      {/* HEADER */}
      <div className="anavbar">
        <h1 className="abrand-title">
          ZAHO BRAND <BsHandbagFill />
        </h1>
        <div className="anav-links">
          <Link to="/client" className="alink-btn">
            <Button className="abtn-primary" variant="outlined">
              Modèles Sac
            </Button>
          </Link>
          <Link className="alink-btn">
          <Button disabled className="abtn-primary" variant="outlined">
            Faire-part
          </Button></Link>
          <Link>
          <Button onClick={handleLogin} className="abtn-primary" variant="outlined">
            Admin
          </Button></Link>
        </div>
      </div>

      {/* FORMULAIRE LOGIN */}
      <div className="alogin-box">
        <form onSubmit={handleSubLog} className="aform" style={{ display: showForm }}>
          <Button
            type="submit"
            className="abtn-confirm"
            variant="contained"
          >
            Confirm
          </Button>
          <input
            onChange={(e) => setValueLog({ ...valueLog, email: e.target.value })}
            autoFocus
            autoComplete="username"
            id="email"
            name="email"
            type="text"
            placeholder="pseudo"
            className="ainput-field"
          />
          <input
            onChange={(e) => setValueLog({ ...valueLog, password: e.target.value })}
            id="password"
            name="password"
            autoComplete="current-password"
            type="password"
            placeholder="password"
            className="ainput-field"
          />
        </form>
      </div>

      {/* IMAGE */}
      <img src={bb} className="ahero-img" alt="image" />

      {/* FOOTER */}
      <div className="afooter">
        <a className="linko" href="https://www.facebook.com/zaho.brand?mibextid=kFxxJD">
          <h4><FaFacebook /> : Zaho brand</h4>
        </a>
        <a className="linko" href="https://www.instagram.com/brandzaho?igsh=MTk4Z3A4dHVtNzA0YQ==">
          <h4><FaInstagram /> : Zahobrand</h4>
        </a>
        <a className="linko" href="https://mail.google.com/mail/?view=cm&fs=1&to=zahobrand5@gmail.com" target="_blank" rel="noopener noreferrer">
          <h4><SiGmail /> : zahobrand5@gmail.com</h4>
        </a>
      </div>
    </div>
  );
}
