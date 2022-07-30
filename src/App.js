import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//1. Get method
// function App() {
//   return (
//     <div className="App">
//       <Movie/>
//     </div>
//   );
// }

//  function Movie(){
//   const[movies,setmovies]=useState([]);
//   useEffect(()=>{
//        fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/movies")
//       .then((data)=>data.json())
//       .then((mv)=>setmovies(mv));
//      },[]);
//   return(
//     <div>
//       {movies.map((m)=><Poster post={m}/>)}
//     </div>
//   )
//  }
//  function Poster({post}){
//   return(
//     <div>
//       <img src={post.poster} alt={post.name}/>
//     </div>
//   )
//  }
//2. get 1 method

// function App(){
//   return(
//     <div>
//       <ol>
//         <li>
//            <Link to="/all"> All STUDENTS</Link>
//         </li>
//       </ol>
//        <Routes>
//         <Route path="/all" element={<App1 />} />
//         <Route path="/studentdetails/:id" element={<Getstudentdata/>} />
//       </Routes>
//     </div>
//   )
// }
//  function App1(){
//   const [students,setstudents]=useState([]);
//   useEffect(()=>{
//     fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails")
//     .then((response)=>response.json())
//     .then((data)=>setstudents(data));
//   },[])
//   return(
//     <div>
//        {students.map((st)=><Manavan name={st.name} id={st.id} email={st.email}/>)}
//     </div>
//   )
//  }
//  function Manavan({name,id,email}){
//  const navigate=useNavigate();
//   return(
//     <div>
//        <ul>
//         <li>name:{name}</li>
//         <li><button onClick={()=>navigate(`/studentdetails/${id}`)}>more info</button></li>
//        </ul>
//        <hr/>
//     </div>
//   )
//  }
 
//  function Getstudentdata(){
//   const {id}=useParams();
//   const[std,setstd]=useState({});
//   useEffect(()=>{
//     fetch(`https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails/${id}`)
//     .then((response)=>response.json())
//     .then((data)=>setstd(data))
//   },[])
//   return(
//     <div>
//       <ol>
//         <li>email:{std.email}</li>
//         <li>id:{std.id}</li>
//       </ol>
//     </div>
//   )
//  }

//crud3 delete method
// function App(){
//   return(
//     <div>
//       <Link to="/all">students</Link>
//          <Routes>
//         <Route path="/all" element={<App1 />} />
//       </Routes>
//     </div>
//   )
// }
// function App1(){
//   const[students,setstudents]=useState([]);
//   let data=async()=>{
//     let response=await fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails");
//     let data=await response.json();
//     setstudents(data);
//   }
//   let del=async(id)=>{
//     await fetch(`https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails/${id}`,{method:"DELETE"});
//     await data();
    
//   }
//   let dele=(id)=>{
//     fetch(`https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails/${id}`,{method:"DELETE"})
//    .then(()=>data()); 
//  }
  // useEffect(()=>{
  //   fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails")
  //   .then((response)=>response.json())
  //   .then((data)=>setstudents(data));
  // },[])
//   useEffect(()=>{
//     data();
//   },[]);
 
//   return(
//     <div>
//       {students.map((val)=><Student value={val} deletebutton={<button onClick={()=>del(val.id)}>delete</button>} />)}
//     </div>
//   )
// }
// function Student({value,deletebutton}){
  
//   return(
//     <div>
//    <h1>Name:{value.name}</h1>
//    <h2>email:{value.email}</h2>
//    <h2>id:{value.id}</h2>
//    {deletebutton}
//    <hr/>
//     </div>
//   )
// }
// crud operation POST method
function App(){
  return(
    <div>
      <ul>
        <li>
        <Link to="/all"> students</Link>
        </li>
        <li>
        <Link to="/add">add new student</Link>
        </li>
      </ul>
      
     
      <Routes>
        <Route path="/all" element={<App1/>}></Route>
        <Route path="/add" element={<AddNewstudent/>}></Route>
      </Routes>
    </div>
  )
}
function App1(){
  const[student,setstudent]=useState([]);
  let studentsdata=async()=>{
    let response=await fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails");
    let data=await response.json();
    setstudent(data);
  }
  useEffect(()=>{
    studentsdata();
  },[])
  return(
    <div>
       {student.map((std)=><Std value={std}/>)}
    </div>
  )
}
function Std({value}){
  const style={
    border:"1px solid black",
    margin:"3px"
  }
  return(
    <div>
      <ul>
        <li>
        <b>{value.name}</b>
        </li>
        <li>
        <b>{value.id}</b>
        </li>
      </ul>
      
     
      <hr/>
    </div>
  )
}
 function AddNewstudent(){
  const navigate=useNavigate();
  const[name,setname]=useState();
  const [email,setemail]=useState()
  const newone={name:name,
                email:email};
  const update=async()=>{
    await fetch("https://627f71c3b1cc1b126255a8a2.mockapi.io/studentdetails",
    {method:"POST",
    body: JSON.stringify(newone),
    headers: {"Content-Type": "application/json"}}).then(navi());
  }
  const navi=(()=>navigate("/all"))
  return(
    <div>
      <label for="name">Enter the Student Name</label>
      <input type="text" id="name" onChange={(event)=>setname(event.target.value)} />
      <label for="email">enter the gmail</label>
      <input type="text" id="email" onChange={(event)=>setemail(event.target.value)}/>
      <button onClick={()=>update()}>addStudent</button>
    </div>
  )
 }
 
export default App;
