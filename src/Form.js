// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import { contextOpenCreate } from './Context/openContextCreate';
// import axios from 'axios';
// import { useContext } from "react";

// export default function Form(){
//     const {valueLog,setValueLog} = useContext(contextOpenCreate);
//     const navigate = useNavigate();

    
//     function handleSubLog(e){
//     e.preventDefault();
//      axios.post('http://localhost:2000/log', {
//     email: valueLog.email,
//     password: valueLog.password,
//   },{ withCredentials: true })
//     .then(res => {
//       // console.log('response :', res, "/ reponse de serveur", res.data);
//       if(res.data.Status === "success"){
//           navigate('/orderdetails')
//       }else{
//         alert(res.data.Message)
//       }
      
//     })
//     .catch(err => console.log(err))
//   }

//     return(
        
//         <div
//         style={{
//             background:"#ED98B7",
//           width: "40%",
//           marginTop: "200px",
//           marginLeft:"auto",
//           marginRight:"auto"
//         }}
//       >
//         <form onSubmit={handleSubLog} className="form" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems: "center"}}>
//           <input onChange={(e)=>{setValueLog({...valueLog,email:e.target.value})}}
//             autoFocus
//             type="text"
//             placeholder="psuedo"
//             style={{
//               width: "80%",
//               margin: "10px",
//               padding: "10px",
//               borderRadius: "8px",
//               border: "none",
//               outline: "none",
//             }}
//           ></input>
//           <input onChange={(e)=>{setValueLog({...valueLog,password:e.target.value})}}
//             autoFocus
//             type="password"
//             placeholder="password"
//             style={{
//               width: "80%",
//               margin: "10px",
//               padding: "10px",
//               borderRadius: "8px",
//               border: "none",
//               outline: "none",
//             }}
//           ></input>
//           <Button type="submit" sx={{margin:"10px",color: "white",background:"#ea4c88",borderRadius:"8px",transition:"0.5s ease", '&:hover':{background:"#ea4c88",color:"white"} }} variant="contained">Confirm</Button>
//         </form>
//       </div>
//     )
// }