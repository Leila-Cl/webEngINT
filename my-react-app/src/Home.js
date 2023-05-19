import './Home.css';
import { auth } from "./firebase";
import { Popover } from 'react-tiny-popover'

function enterPass(){
  let userPass = prompt("Please Enter Code")
  if (userPass.toLowerCase() === 'ivanthetiger'){
    let d = new Date()
    d.setHours(d.getHours()+1)
    alert("Your Lab Has Been Booked for:"+ d.toString())
  }
  else{
    alert("not quite")
  }
}

const time = ["9:00am" , "9:30am" , "10:00am" ,"10:30am","11:00am","11:30am", "12:00pm", "1:00pm","1:30pm","2:00pm","2:30pm" ]
const day = [ "SUN","MON", "TUES", "WED", "THURS","FRI","SAT"]

const Home = ({ user }) => {
  return (
    <div id="container1">

      <h1>Welcome to YouCantBook Me {user.displayName}! </h1>
     
      <div id="container">

      <div class="days"id="sunday">
        {day[0]}
      <button id="sunsun">No Times Available</button>
      </div>
      
      
      <div class="days" id="monday">
        {day[1]}
      <button>{time[0]}</button><button>{time[1]}</button><button>{time[3]}</button><button>{time[4]}</button>
      </div>

      <div class="days" div id="tuesday">
        {day[2]}
      <button onMouseEnter={()=>alert("I")}>{time[3]}</button>
      <button onMouseEnter={()=>alert("v")}>{time[10]}</button>
      </div>

      <div class="days" div id="wednesday">
        {day[3]}
      <button onMouseEnter={()=>alert("a")}>{time[0]}</button>
      <button onMouseEnter={()=>alert("n")}>{time[2]}</button>
      <button onMouseEnter={()=>alert("t")}> {time[3]}</button>
      <button onMouseEnter={()=>alert("h")}>{time[5]}</button>
      <button onMouseEnter={()=>alert("e")}>{time[8]}</button>
      <button onMouseEnter={()=>alert("t")}>{time[9]}</button>
      </div>

      <div class="days" div id="thursday">
        {day[4]}
      <button onClick={()=>alert("i")}>{time[0]}</button>
      <button onClick={()=>alert("g")}>{time[1]}</button>
      <button onClick={()=>alert("e")}>{time[0]}</button>
      <button onClick={()=>alert("r")}>{time[0]}</button>
      <button>{time[0]}</button>
      <button>{time[0]}</button>
      </div>

      <div class="days" div id="friday">
        {day[5]}
      <button>{time[2]}</button><button>{time[4]}</button>
      </div>

      <div class="days" div id="saturday">
        {day[6]}
      <button id="start" onClick= {enterPass}>No Times Available?</button>

      </div>

    </div>

    <div id="botPage">
    <button id = "wow"onClick={() => auth.signOut()}>Sign out</button>
      <button id = "wowow" onClick={()=>alert("A=P")}>Key</button>
      </div>
    </div>


  );
};

export default Home;