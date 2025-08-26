import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useContext } from "react";
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import { contextOpenCreate } from "./Context/openContextCreate";

export default function Create({onCreate}) {
  const {open,setOpen} = useContext(contextOpenCreate);
    const [values, setValues] = useState({name:""});
    // const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    
    function handleSubmit(e){
        e.preventDefault();
         console.log(values, file);

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("image", file); 

        axios.post(
  "https://backendbag-1.onrender.com/add",
  formData,
  {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" }
  }
)
.then(res => {
  console.log(res.data);
  onCreate();
  handleClose();
})
.catch(err => console.log(err));
    }

   
  function handleClose(){
    setOpen(false)
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
      <div style={{width: "40%", background: "#d5dee7", minWidth: "600px", margin: "auto",}}>
        <form onSubmit={handleSubmit}>
            <input autoFocus
             onChange={(e)=>{setValues({...values, name :e.target.value})}} type="text" placeholder="name" 
            style={{width:"80%", margin:"20px", padding:"10px",
            borderRadius:"8px",border:"none",outline:"none"}}></input>

            <input
            id="filee" name="images"
             onChange={(e) => {
                setFile(e.target.files[0]);
              }} type="file" 
            style={{width:"80%", marginLeft:"20px", 
            marginBottom:"20px",padding:"10px",borderRadius:"8px",
            border:"none",outline:"none"}}></input>

            <Button type="submit" style={{margin:"5px"}} variant="contained" >confrim</Button>
        </form>

      </div>  
      </Dialog>
      {/* <Button variant="contained" onClick={handleClickOpen}>
              create <AddIcon />
            </Button> */}
    </div>
  );
}
