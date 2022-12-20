import {useState, useEffect} from 'react'
const TicketWinner =()=> {
    const [ticketList, setTicketList] = useState([])
    const[bgColor,setBgColor]=useState(["red"])
    const[typeNumber,setTypeNumber]=useState([])
    const[typeName,setTypeName]=useState([])
    const fetchTicketData = async()=> {
       const data = await fetch('http://127.0.0.1:3000/ticket/')
       const tickets = await data.json() 
       const allTicketList = tickets.ticketList
       const tempList = []
       allTicketList.map((item)=>{
         if(!tempList.includes(item.ticketNo)){
            tempList.push(item.ticketNo)
         }
       })
       
       setTicketList(tempList.sort())
    }

    useEffect(()=>{
        fetchTicketData()
    },[])
    const drawRandom=()=>{
        const tempTicket=[...ticketList]
        const randomID=Math.floor(Math.random()*ticketList.length)
        tempTicket.splice(randomID,1)
        setTicketList(tempTicket)
    }

    return (
    <>
    Hi {typeName}
     {ticketList.length >0 && ticketList.map((item,id)=>{
      
        return(
            
        <div 
        style={
            {backgroundColor:typeNumber.toString()===item.toString()? bgColor :null ,
            height:"100px",width:"100px",margin:"10px"}}>
        {item}</div>
     )})}
           <input onKeyUp={(e)=> setTypeNumber(e.target.value)} placeholder="number"/>
           <input onKeyUp={(e)=> setTypeName(e.target.value)} placeholder="Enter name"/>
           <button onClick={()=>ticketList.length===1? null: drawRandom()}>Draw</button>

     </>
    );
  }
  
  export default TicketWinner;
  