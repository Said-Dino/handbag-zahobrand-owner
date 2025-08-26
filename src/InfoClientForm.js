import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import { contextOpenCreate } from "./Context/openContextCreate";

export default function InfoClientForm() {
  const {ipen,setIpen,usr,setUsr} = useContext(contextOpenCreate);
    const [values, setValues] = useState({fulName:"",number:""});
  
    
    function handleSubmit(e){
        e.preventDefault();
          console.log("usr:", usr);
  console.log("values:", values);

  if (!values.fulName || !values.number) {
    alert("⚠️ Remplis tous les champs avant de confirmer !");
    return;
  }
            axios.post(
  "https://backendbag-1.onrender.com/order",
  {
    Images: usr.images,
    Names: usr.name,
    flName: values.fulName,
    nmbr: values.number,
  },
  { withCredentials: true }
)
.then(res => {
  console.log(res.data);
  setIpen(false);
  setValues({ fulName: "", number: "" }); 
})
.catch(err => console.log(err));
    }
    
    function handleeClose(){
        setIpen(false)
    }
  
  return (
    <div>
      <Dialog open={ipen} onClose={handleeClose}>
      <div style={{width: "40%", background: "#d5dee7", minWidth: "600px", margin: "auto",}}>
        <form onSubmit={handleSubmit}>
            <input autoFocus
             onChange={(e)=>{setValues({...values, fulName :e.target.value})}} type="text" placeholder="name" 
            style={{width:"80%", margin:"20px", padding:"10px",
            borderRadius:"8px",border:"none",outline:"none"}}></input>

            <input
             onChange={(e)=>{setValues({...values, number :e.target.value})}} type="number" placeholder="number" 
            style={{width:"80%", marginLeft:"20px", 
            marginBottom:"20px",padding:"10px",borderRadius:"8px",
            border:"none",outline:"none"}}></input>

            <Button type="submit" style={{margin:"5px",background:"#ea4c88",color:"white"}} variant="contained" >confrim</Button>
        </form>

      </div>  
      </Dialog>
      
    </div>
  );
}
