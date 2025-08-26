import React, { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoClientForm from "./InfoClientForm";
import { contextOpenCreate } from "./Context/openContextCreate";
import { Link } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import "./home.css"; // <-- Nouveau fichier CSS

export default function Home() {
  const { ipen, setIpen, usr, setUsr } = useContext(contextOpenCreate);
  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    axios
      .get("https://backendbag-1.onrender.com/", { withCredentials: true })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Erreur fetch:", err));
  }, []);




  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleOrder(user) {
    setIpen(true);
    setUsr(user);
  }

  return (
    <div className="Hhome-container">
      {/* HEADER */}
      <div className="Hheader">
        <h1 className="Hbrand-title">
          ZAHO BRAND <BsHandbagFill />
        </h1>

        <h1 className="Hheader-title">Modèles de sac</h1>

        <div className="Hheader-buttons">
          <Link to="/">
            <Button className="Hbtn-primary" variant="contained">
              <IoMdHome className="Hicon-home" size={18} /> Home
            </Button>
          </Link>

          <Link to="/ctrl">
            <Button className="Hbtn-primary" variant="contained">
              Admin
            </Button>
          </Link>
        </div>
      </div>

      {/* FORMULAIRE CLIENT */}
      <InfoClientForm />

      {/* LISTE DES SACS */}
      <div className="Hcards-wrapper">
        {data.map((user) => (
          <div key={user.id} className="Hcard-container">
            <div className="Hcard">
              <div className="Hcard-header">
                <h2>{user.name}</h2>
              </div>

              <div className="Hcard-img">
                <img
                  src={`https://backendbag-1.onrender.com/images/${user.images}`}
                  alt={user.name}
                />
              </div>

              <div className="Hcard-actions">
                <Button
                  className="Hbtn-primary"
                  variant="contained"
                  onClick={() => handleOrder(user)}
                >
                  Commander <ShoppingCartIcon className="Hicon-cart" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
