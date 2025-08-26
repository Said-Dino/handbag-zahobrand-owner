// import { useState,useEffect } from "react";
// import Button from "@mui/material/Button";
// import { IoBagAdd } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { contextOpenCreate } from "./Context/openContextCreate";


// export default function Accessoires(){
//     const navigate = useNavigate();
//     const {auth} = useContext(contextOpenCreate);
    
//      useEffect(() => {
//     const storedData = localStorage.getItem("data");
//     if (storedData) {
//       setConfirmedData(JSON.parse(storedData));
//     }
//   }, []);
//     const [values,setValues] = useState({number:0,name:""});
//     const [type,setType] = useState({prc:750,grm:500,t:"perle"});
//     const [wire,setWire] = useState({prWire:90,dist:60,wiiire:90})
//     const [wiiire,setWiiire] = useState(90);
//     const [grChaine, setGrChaine] = useState(0);
//     const [prChaine, setPrChaine] = useState(0);
//     const [typhand, setTypHand] = useState("simple");
//     const [prCers, setPrCers] = useState(null);
//     const [prFerm, setPrFerm] = useState(0);

//        function handleSelectMain(e){

//         const valuee = e.target.value;

//         if(valuee === "3"){
//             setGrChaine(100)
//             setPrChaine(140)
//             setTypHand('main en perle')
//         }
//         else if(valuee === "2"){
//             setGrChaine(70)
//             setPrChaine(135)
//             setTypHand('main en crystal')
//         }
//         else{
//             setGrChaine(0)
//             setPrChaine(0)
//         }
//     };

//     function handleFerm(e){
//         const value = e.target.value;
//         if(value === "1"){
//             setPrFerm(0)
//         }else if(value === "2"){
//             setPrFerm(50)
//         }
//     }

//     function handleSelectcers(s){
//         const Valuee = s.target.value;
//         if(Valuee === "1"){
//             setPrCers(450)
//         }
//         else if(Valuee === "2"){
//             setPrCers(750)
//         }
//         else if(Valuee === "3"){
//             setPrCers(1100)
//         }else{
//             setPrCers(0)
//         }
//     }

//     const chainePr = 350;
//     const motifPr = 50;
//     const emballagePr = 50;
//     const livraisonPr = 150;
//     const doublurePr = 50;
    
//     const total = values.number*(prChaine + doublurePr + chainePr + type.prc + prCers + motifPr + wiiire + prFerm + emballagePr + livraisonPr);
//     let ben;
//     if(prChaine == 0){
//         ben = (values.number*2500)-total;
//     }else{
//         ben = (values.number*3000)-total;
//     }

//     if(prCers == 750){
//         ben = (values.number*3000)-total;
//     }else if(prCers == 1100){
//         ben = (values.number*3500)-total;
//     }

//     function handleSelectType(e){
//         const value = e.target.value
//         if(value === "2"){
//             setType({...type,prc:450,grm:200,t:"crystale"})
//         }else if (value === "1"){
//             setType({...type,prc:750,grm:500,t:"perle"})
//         }
//     }

//     // const res = Math.round(values.number*60*wire.prWire/wire.dist);
//     // const ress = Math.round(values.number*60*wire.prWire/wire.dist)+1;
// function handleWireSel(e) {
//     const Value = e.target.value;
//     if (Value === "1") {
//        setWire({...wire,
//             prWire: 450,
//             dist: 700,
//         });
//         setWiiire(90)
        
//     } else if (Value === "2") {
//          setWire({...wire,
//             prWire: 150,
//             dist: 100,
//         });
//         setWiiire(40)
        
//     }
// }

//     const [confirmedData, setConfirmedData] = useState([]);
    
//     function handleConfirm() {
//   const data = {
//     quantite: values.number,
//     nameTable : values.name,
//     accessoires: [
//       { nom: type.t, prix: type.prc * values.number },
//       { nom: "cerseau", prix: prCers * values.number },
//       { nom: "fil de pêche", prix: wiiire * values.number },
//       { nom: "chaine", prix: chainePr * values.number },
//       { nom: typhand, prix: prChaine * values.number },
//       { nom: "fermoire", prix: prFerm * values.number },
//       { nom: "motif", prix: motifPr * values.number },
//       { nom: "doublure", prix: doublurePr * values.number },
//       { nom: "emballage", prix: emballagePr * values.number },
//       { nom: "livraison", prix: livraisonPr },
//     ],
//     total: total,
//     benifice: ben
//   };
//   setValues({...values,name:""})
//   const updated = [...confirmedData, data];
//   setConfirmedData(updated);
//   localStorage.setItem("data",JSON.stringify(updated));
// }

// useEffect(() => {
//   if (!auth) {
//     navigate("/formm");
//   }
// }, [auth,useNavigate]);

// function handleDel(){
//     localStorage.removeItem('data');
//     window.location.reload(true)
// }

// function handleDeleteOne(indexToRemove) {
//   const updatedData = confirmedData.filter((_, index) => index !== indexToRemove);
//   setConfirmedData(updatedData);
//   localStorage.setItem("data", JSON.stringify(updatedData));
// }

//     return(
//         <div style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//             <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
//                 <h3>combien de sac</h3>
//                 <input id="inputNumbr" name="numbr" style={{height:"30px",marginLeft:"10px"}} value={values.number}
//                 onChange={(e)=>{setValues({...values,number:e.target.value})}} type="number" placeholder="nombre de sac"></input>
//                 <input id="inputNameTable" name="title" style={{height:"30px",marginLeft:"10px"}} value={values.name}
//                 onChange={(e)=>{setValues({...values,name:e.target.value})}} type="text" placeholder="nombre de sac"></input>
//             <Button onClick={handleConfirm} variant="contained" style={{marginLeft:"20px",color:"#ea4c88",height:"35px",background:"white",display:"flex",alignItems:"center"}} >
//             créer un devis de sac <IoBagAdd style={{color:"#ea4c88",marginLeft:"5px"}} size={17} />
//             </Button>
//             <Button onClick={handleDel} variant="contained" style={{marginLeft:"20px",color:"#ea4c88",height:"35px",background:"white",display:"flex",alignItems:"center"}} >
//             supprimer les devis <IoBagAdd style={{color:"#ea4c88",marginLeft:"5px"}} size={17} />
//             </Button>
            
//             </div>
//         <div >
//             <table style={{borderCollapse:"collapse"}}>
//                 <thead>
//                     <tr>
//                         <th style={{border:"1px solid black",padding:"8px"}}>accessoire</th>
//                         <th style={{border:"1px solid black",padding:"8px"}}>quantité</th>
//                         <th style={{border:"1px solid black",padding:"8px"}}>price</th>
//                     </tr>
                    
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>
//                         <label htmlFor="type_sac">matière : </label> 
//                         <select id="type_sac" style={{padding:"5px",outline:"none"}} defaultValue="1" onChange={handleSelectType}>
//                                 <option value="1">perle</option>
//                                 <option value="2">crystale</option>
//                             </select>    
//                         </td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{1*values.number} packets de {type.grm} gr</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{values.number*type.prc} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>
//                             <label htmlFor="crs">cerseau : </label> 
//                             <select id="crs" style={{padding:"5px",outline:"none"}} onChange={handleSelectcers} defaultValue="0">
//                                 <option value="0">sans</option>
//                                 <option value="1">450 da</option>
//                                 <option value="2">750 da</option>
//                                 <option value="3">1100 da</option>
//                             </select>
//                         </td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{1*values.number} pièces</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{values.number*prCers} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>
//                             <label htmlFor="fil">fil de peche : </label> 
//                             <select id="fil" style={{padding:"5px",outline:"none"}} onChange={handleWireSel} defaultValue="1">
//                                 <option value="1">petit</option>
//                                 <option value="2">grand</option>
//                             </select>
//                         </td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{60*values.number} m</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{wiiire*values.number} da </td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>chaine</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{1*values.number} mètres</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{values.number*chainePr} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>
//                             <label htmlFor="hand">main : </label> 
//                             <select id="hand" style={{padding:"5px",outline:"none"}} onChange={handleSelectMain} defaultValue="1">
//                                 <option value="1">simple</option>
//                                 <option value="2">en crystale</option>
//                                 <option value="3">en perle</option>
//                             </select>
//                         </td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{grChaine*values.number} gramme</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{prChaine*values.number} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>
//                             <label htmlFor="frmr">fermoir : </label> 
//                             <select id="frmr" style={{padding:"5px",outline:'none'}} onChange={handleFerm}>
//                                 <option value="1">sans</option>
//                                 <option value="2">avec</option>
//                             </select>
//                             </td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{1*values.number} pièces</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{values.number*prFerm} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>motif</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{1*values.number} pièces</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{values.number*motifPr} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>doublure</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{1*values.number} pièces</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{values.number*doublurePr} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>emballage</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>sachets + thanks</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{values.number*emballagePr} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>livraison</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>rec & sending</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}>{livraisonPr} da</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>total</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}> </td>
//                         <td style={{border:"1px solid black",padding:"8px",background:"#E0BA3F"}}>{total}</td>
//                     </tr>
//                     <tr>
//                         <td style={{border:"1px solid black",padding:"8px"}}>bénifice</td>
//                         <td style={{border:"1px solid black",padding:"8px"}}> </td>
//                         <td style={{border:"1px solid black",padding:"8px",background:"#3FE059"}}>{ben}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
        
//         {confirmedData.length > 0 && (
//             <div style={{marginTop:"20px"}}>    
//   <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//     {confirmedData.map((item, index) => (
// <div key={index} style={{ border:"solid 1px black",margin:"20px"}}>
//         <h5 style={{width:"90%",margin:"auto",padding:"5px"}}>{item.nameTable}</h5>
//       <table  style={{ borderCollapse: "collapse", marginBottom: "5px",margin:"auto" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid black", padding: "8px" }}>Accessoire</th>
//             <th style={{ border: "1px solid black", padding: "8px" }}>Prix</th>
//           </tr>
//         </thead>
//         <tbody>
//           {item.accessoires.map((acc, i) => (
//             <tr key={i}>
//               <td style={{ border: "1px solid black", padding: "8px" }}>{acc.nom}</td>
//               <td style={{ border: "1px solid black", padding: "8px" }}>{acc.prix} da</td>
//             </tr>
//           ))}
//           <tr>
//             <td style={{ border: "1px solid black", padding: "8px" }}>Total</td>
//             <td style={{ border: "1px solid black", padding: "8px", background: "#E0BA3F" }}>{item.total} da</td>
//           </tr>
//           <tr>
//             <td style={{ border: "1px solid black", padding: "8px" }}>Bénéfice</td>
//             <td style={{ border: "1px solid black", padding: "8px", background: "#3FE059" }}>{item.benifice} da</td>
//           </tr>
//         </tbody>
//       </table>
//       <Button onClick={()=>{handleDeleteOne(index)}} variant="contained" style={{color:"#ea4c88",height:"35px",background:"white",display:"flex",alignItems:"center"}} >
//             supprimer le tableau 
//             </Button>
//       </div>
//     ))}
//   </div></div>
// )}

//         </div>
//     )
// }