 // import Button from "../components/button"
// import {useState} from 'react'
// const Login =()=> {
//   const [arr,setArr] = useState(['ram','hari','geeta','shyam']);
//  const[inputText,setinputText]=useState("")
  
//  const deleteItem=()=>{
//   const removedArr =arr.filter(item=>{
//       return item!=inputText
//     })
//     setArr(removedArr)
// }

//  const saveName=(e)=>{
// setinputText(e.target.value)
//   }

//   return (
//     <>
//     {arr.map((item,id)=> {
//       return <li>{item}</li>;
//     })}
//   <input
//         type="text"
//         placeholder={'enter your name'}
//         onKeyUp={saveName}
//         ></input>
//         <button onClick ={() => deleteItem()}>Delete</button>
//    </>
//   );
// };
  



// export default Login;

// import React, { useState } from 'react'

// export default function Worldcup(props) {
//   const arr = ['Spain','Portugal','Brazil','Germany',"Argentina",'England','France','Belgium','Netherlands']

//   const [list, setList] = useState(arr);

//   let backUpList = [...list]

//   const userInput = (e) => {
//     let userbackUp = e.target.value;
//     for(let i =0; i<backUpList.length;i++){
//       if(backUpList[i] === userbackUp ){
//         backUpList.splice(i,1);
//       }
//     }
//   }

// const [place,setPlace] = useState('Enter name')

//   const clickToDelete = ()=> {
//     setList(backUpList)
//     setPlace("Enter more")

//   }


//   return (
//     <div>
//       <h1>{props.heading}</h1>
//       {list.map((item) => {
//         return <li>{item}</li>
//       })}
//       <input type="text"  placeholder={place} onKeyUp={userInput}/>
    
//       <button onClick={clickToDelete}>{props.btnName}</button>

//     </div>
//   )
// }



// import Button from "../components/button";
// import {useState, useEffect} from 'react'
// const Login = () => {
//   const [arr,setArr] = useState([])
//   const [name,setName] = useState('')
//   useEffect(()=>{
//     const fetchedarray= ['ram','hari','geeta']
//     setArr(fetchedarray)
//   },[])
//   const popLastItem = () => {
//     //why i had to take a backup of arr state?
//     // -> we cannot manipulate state directly
//     // to manipulate we can change is somewhere else and pass it to setArr
//     const bckUp = [...arr]
//     bckUp.pop()
//     setArr(bckUp)
//   };

//   return (
//     <>
//       {arr.map((item, id) => {
//         return <li>{item}</li>;
//       })}
//       <input placeholder="name" onKeyUp={(e)=>setName(e.target.value)}/>
//       <button onClick={() => popLastItem()}>Pop</button>
//     </>
//   );
// };

// export default Login;

// import Button from "../components/button";
// import {useState, useEffect} from 'react'
// const Login = () => {
//   const [arr,setArr] = useState([])
//   const [name,setName] = useState('')
//   useEffect(()=>{
//     const fetchedarray= ['ram','hari','geeta']
//     setArr(fetchedarray)
//     if (name!==""){
//      deleteLastItem()
//     }
    
//   },[name])
//   const deleteLastItem = () => {
//     //why i had to take a backup of arr state?
//     // -> we cannot manipulate state directly
//     // to manipulate we can change is somewhere else and pass it to setArr
//     const bckUp = [...arr]
//     const filterArray=bckUp.filter((item)=>item!==name)
//     setArr(filterArray)
//   };

//   return (
//     <>
//       {arr.map((item, id) => {
//         return <li>{item}</li>;
//       })}
//       <input placeholder="name" onKeyUp={(e)=>setName(e.target.value)}/>
//     </>
//   );
// };

// export default Login;

// import Button from "../components/button";
// import {useState, useEffect} from 'react'
// const Login = () => {
//   const [arr,setArr] = useState([])
//   const [name,setName] = useState('')
//   useEffect(()=>{
//     const fetchedArray= ['ram','hari','geeta']
//     setArr(fetchedArray)
//     deleteItem()
//   },[name])

//   const deleteItem = () => {

//     //why i had to take a backup of arr state?
//     // -> we cannot manipulate state directly
//     // to manipulate we can change is somewhere else and pass it to setArr
//     const bckUp = [...arr]
//     if(bckUp.length>0){
//       const filteredArr = bckUp.filter((item)=> item !== name)
//       setArr(filteredArr)
//     }
//   };

//   return (
//     <>
//       {arr && arr.length>0 ? arr.map((item, id) => {
//         return <li>{item}</li>;
//       })
//     : 'loading'
//     }
//       <input placeholder="name" onKeyUp={(e)=>setName(e.target.value)}/>
     
//     </>
//   );
// };

// export default Login;



//  import Button from "../components/button"
// import {useEffect,useState} from 'react'

// const Login =()=> {
//   const [users,setUsers]= useState([])
// const fetchUser=()=>{
//   fetch('http://localhost:3000/usersorder='+order).then(res=>res.json()).then(data=>setUsers(data.newUser))
// }
//   useEffect(()=>{
//     fetchUser()
//   },[])
 
//   return (
//     <>
//         <button onClick ={() => fetchUser('asc')}>Ascending</button>
//         {
//         users.map((item)=>
//       <li>{item}</li>
//     )}
//         <button onClick ={() => fetchUser()}>decending</button>
//    </>
//   );
// };
// export default Login;


//  import Button from "../components/button"
// import {useEffect,useState} from 'react'

// const Login =()=> {
//   const [users, setUsers] = useState([])
//   const fetchUser = (order)=>{
//     fetch('http://localhost:3000/users?order='+order).then(res=> res.json())
//     .then(data=> setUsers(data.users))
//   }

//   useEffect(()=>{
//     fetchUser()
//   },[])

//   return (
//     <>
//     <button onClick={()=>fetchUser('asc')}>
//       Ascending
//     </button>
//     {users.map((item)=> <li>{item}</li>)}
//     <button onClick={()=>fetchUser('dsc')}>
//       Descending
//     </button>
  
//     </>
//   );
// }
// export default Login;


// import {useEffect, useState} from 'react'

// const Login =()=> {
//   const [tickets, setTickets] = useState([])
//   const fetchTicket = ()=>{
//     fetch('http://localhost:3000/ticket').then(res=> res.json())
//     .then(data=> setTickets(data.ticketList))
//   }

//   useEffect(()=>{
//     fetchTicket()
//   },[])

//   const generateRandom=()=>{
//     const tempTickets=[...tickets]
//     const a=Math.floor(Math.random()*5)
//     tempTickets.splice(a,1)
//     setTickets(tempTickets)
//   }
//   const congratulation=()=>{
//     if(tickets===1)
//     console.log("winner is ")
//   }

//   return (
//     <>
//   {tickets.map((item)=>{
//   return(
//   <div style={{backgroundColor:item.backgroundColor,height:"100px",width:"100px",margin:"10px"}}>
//     {item.ticket}</div>
//   )}
//   )}
//   {tickets.length>1? (<button onClick={()=> generateRandom()}>Choose Winner</button>): congratulation()
//   }
//     </>  
//   );
// }
// export default Login;

