// import logo from './logo.svg';
// import './App.css';
// // import {us}
// function App() {
//   return (
//     <div className="App">
//      <h1>Sushan</h1>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'

// const App =()=> {
//   const [positionX,setPostionX] = useState(10)
//   const [positionY,setPostionY] = useState(10)
//   const [RadiusR,setRadiusR] = useState(0)
 
//   var clickMe =()=> {
//     setPostionX(positionX+10)
//   }
//   const clickMe1 =()=> {
//     setPostionX(positionX-10)
//   }
//   const clickMe2 =()=> {
//     setPostionY(positionY-10)
//   }
//   const clickMe3 =()=> {
//     setPostionY(positionY+20)
//   }
//   const clickMe4 =()=> {
//     setRadiusR(RadiusR+10)
//   }
  
//   return (
//     <div className="App" style={{marginLeft:positionX+'px', marginTop:positionY+'px', borderRadius:RadiusR+'px'}}>
//         <button onClick={clickMe} >Move right</button>
//         <button onClick={clickMe1}>Move left</button>
//         <button onClick={clickMe2}>Move up</button>
//         <button onClick={clickMe3}>Move button</button>
//         <button onClick={clickMe4}>Change shape</button>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'

// const App =()=> {
//   const [backgroundColor,setBackgroundColor]=useState("red")
//   const [heightDiv,setHeightDiv]=useState("100px")
//   const [widthDiv,setWidthDiv]=useState("100px")
  
//   return (
//     <div className="Main">
    
//     <div className="App"
//      style={{backgroundColor : backgroundColor,height : heightDiv,width:widthDiv}}> 
//     </div>
//      <input type="text" name="name" placeholder='height' onKeyUp={(e)=>setHeightDiv(e.target.value)}/>
//      <input type="text" name="name" placeholder='width' onKeyUp={(e)=>setWidthDiv(e.target.value)}/>
//      <input type="text" name="name" placeholder='backgroundColor' onKeyUp={(e)=>setBackgroundColor(e.target.value)}/>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'

// const App =()=> {
//   const defaultStyleObj = {
//     width:'50px',
//     height: '50px',
//     backgroundColor: 'black'
//   }
//   const [defaultStyle,setDefaultStyle] = useState(defaultStyleObj)
//   const changeStyle=(inputText)=>{
//     const copyStyle ={...defaultStyle}
//      const splittedArr=inputText.split("=")
//     const leftValue=splittedArr[0]
//     const rightValue=splittedArr[1]
//     copyStyle[leftValue] = rightValue
//     setDefaultStyle(copyStyle)
//   }
//   return (
//     <div className="Main">
//     <div className="App"
//      style={defaultStyle}>
//       </div>
//       <input onKeyUp={(event)=>changeStyle(event.target.value)} />
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'

// const App =()=> {
//   const defaultStyleObj = {
//     width:'200px',
//     height: '200px',
//     backgroundColor: 'pink'
//   }
//   const [defaultStyle,setDefaultStyle] = useState(defaultStyleObj)
//   const changeStyle =(inputText) => {
//     const copyStyle={...defaultStyle}
//     const splittedArr=inputText.split("=")
//     const leftValue=splittedArr[0]
//     const rightValue=splittedArr[1]
//     copyStyle[leftValue] = rightValue
//     setDefaultStyle(copyStyle)

//   }
//   return (
//     <div className="Main">
//     <div className="App"
//      style={defaultStyle}>
      
//        <input onKeyUp={(event)=>changeStyle(event.target.value)} />
//        </div>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Login from './containers/login';
import Register from './containers/register';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import RegisterUser from './containers/admin/registerUser';
import TicketWinner from './containers/users/ticketWinner';
import YupPractice from './containers/yupPractice';
import AssignWinner from './containers/admin/assignWinner';



const App =()=> {
  return (
     <>
     <Routes>
    <Route exact path="/ticketWinner" element={<TicketWinner/>} />
  </Routes>
  <Routes>
    <Route exact path="/registerUser" element={<RegisterUser/>} />
  </Routes>
  <Routes>
    <Route exact path="/assignWinner" element={<AssignWinner/>} />
  </Routes>
  <Routes>
    <Route exact path="/yupPractice" element={<YupPractice/>} />
  </Routes>

</>
  
  );
}

export default App;



