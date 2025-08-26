import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsHandbagFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { IoMdHome } from "react-icons/io";
import { contextOpenCreate } from "./Context/openContextCreate";
import "./orderDetails.css"; // ✅ import du css

export default function OrderDetails() {
  const { valueLog, setValueLog } = useContext(contextOpenCreate);
  const { auth, setAuth } = useContext(contextOpenCreate);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  function handleSubLog(e) {
    e.preventDefault();
    axios
      .post(
        "https://backendbag-1.onrender.com/log",
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

  useEffect(() => {
    axios
      .get("https://backendbag-1.onrender.com/order", { withCredentials: true })
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  function HandleDel(orderr) {
    axios
      .delete(`https://backendbag-1.onrender.com/order/${orderr.order_id}`, { withCredentials: true })
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.filter((o) => o.order_id !== orderr.order_id)
        );
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get("https://backendbag-1.onrender.com/orderdetails", { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "success") {
          setAuth(true);
          setEmail(res.data.Email);
        } else {
          setAuth(false);
          setMessage(res.data.Messgae);
        }
      });
  }, []);

  function handleLogout() {
    axios
      .get("https://backendbag-1.onrender.com/logout", { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "success") {
          window.location.reload(true);
        } else {
          alert("erro");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {auth ? (
        <div className="o-order-container">
          <div className="o-header">
            <h1 className="o-header-title">Les commandes</h1>
            <div className="o-header-buttons">
              <Link to="/">
                <Button className="o-btn-nav" variant="outlined">
                  <IoMdHome className="icon-home" size={18} /> Home
                </Button>
              </Link>
              <Link to="/client">
                <Button className="o-btn-nav" variant="outlined">
                  Modèles Sac
                </Button>
              </Link>
              <Link to="/ctrl">
                <Button className="o-btn-nav" variant="outlined">
                  Opération
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                className="o-btn-nav"
                variant="outlined"
              >
                Logout
              </Button>
            </div>
          </div>

          <div className="o-orders-list">
            {orders.map((orderr, index) => (
              <div className="o-order-card" key={orderr.order_id}>
                <div className="o-order-info">
                  <h4 className="o-order-field">Commande num : {index + 1}</h4>
                  <h4 className="o-order-field">Mme : {orderr.order_client}</h4>
                  <h4 className="o-order-field">Numéro : {orderr.order_nmbr}</h4>
                  <h4 className="o-order-field">Modèle : {orderr.order_name}</h4>
                  <Button
                    className="o-btn-delete"
                    variant="contained"
                    onClick={() => HandleDel(orderr)}
                  >
                    delete <DeleteIcon className="o-icon-delete" />
                  </Button>
                </div>
                <img
                  className="o-order-img"
                  src={`https://backendbag-1.onrender.com/images/${orderr.order_image}`}
                  alt="commande"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="o-login-box">
          <form onSubmit={handleSubLog} className="o-login-form">
            <input
              onChange={(e) => {
                setValueLog({ ...valueLog, email: e.target.value });
              }}
              autoFocus
              type="text"
              autoComplete="username"
              placeholder="pseudo"
              className="o-input-field"
            />
            <input
              onChange={(e) => {
                setValueLog({ ...valueLog, password: e.target.value });
              }}
              type="password"
              autoComplete="current-password"
              placeholder="password"
              className="o-input-field"
            />
            <Button type="submit" className="o-btn-confirm" variant="contained">
              Confirm
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
