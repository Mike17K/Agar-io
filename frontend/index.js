const gameContainer = document.querySelector(".game-container");
const socket = io("http://localhost:3000",{ transports: ['websocket'] });

let accesskey="";
let name="test";

socket.on("connect", () => {
  console.log("connected to server");  

  setInterval(()=>{
    data = {
      name:name,
      accesskey:accesskey,
    }
    socket.emit("update-request",data);
  },1000);
});

socket.on("give-profile",()=>{
  data = {
    "name": name,
  }
  socket.emit("set-profile",data);
})


socket.on("recive-access-key",(key)=>{
  console.log("access-key recieved",accesskey);
  accesskey = key;
});

socket.on("update",(data)=>{
  console.log("update");
  // we need coords of the masses and their names
  // we need our masses and coords and name
  const {otherMasses,clientMasses} = data;
  
  /////// fix
  // count all masses and be sure that there are exactly that many divs in the game container
  const masses = document.querySelectorAll(".mass");
  if(masses.length != otherMasses.length+clientMasses.length){
    // make sure that the data recieved for masses are the same in number for the divs of mass
    gameContainer.innerHTML = '';
    for(let mass of otherMasses){
      const m = document.createElement("div");
      m.classList.add("mass");
      m.classList.add(`P-${mass.playerid}`);
      m.classList.add(`M-${mass.id}`);

      m.style.setProperty("--radius",`${Math.round(mass.mass)}px`);
      m.style.top=`${Math.round(mass.posy)}px`;
      m.style.left=`${Math.round(mass.posx)}px`;

      gameContainer.appendChild(m);
    }  
    for(let mass of clientMasses){
      const m = document.createElement("div");
      m.classList.add("mass");
      m.classList.add("me");
      m.classList.add(`P-${mass.playerid}`);
      m.classList.add(`M-${mass.id}`);

      m.style.setProperty("--radius",`${Math.round(mass.mass)}px`);
      m.style.top=`${Math.round(mass.posy)}px`;
      m.style.left=`${Math.round(mass.posx)}px`;

      gameContainer.appendChild(m);
    }  
  }else{
    
    for(let mass of otherMasses){
      // for each mass update the properties
      const m = document.querySelector(`.P-${mass.playerid}.M-${mass.id}`);

      m.style.setProperty("--radius",`${Math.round(mass.mass)}px`);
      m.style.top=`${Math.round(mass.posy)}px`;
      m.style.left=`${Math.round(mass.posx)}px`;
  
      
    }  
    // handle your own masses
    // ...
    /////////
  }
    
})


// map position configuaration
gameContainer.style.setProperty("--offsetX", "0px");
gameContainer.style.setProperty("--offsetY", "0px");
gameContainer.style.setProperty("--width", "100%");
gameContainer.style.setProperty("--height", "100%");

document.querySelector("#M-10").style.setProperty("--radius","10px");
document.querySelector("#M-10").style.top='500px';
document.querySelector("#M-10").style.left='10px';