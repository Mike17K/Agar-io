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
  socket.emit("set-profile",data)
})


socket.on("recive-access-key",(key)=>{
  accesskey = key;
});

socket.on("update",(data)=>{
  // fill it 
  console.log("updated");
})

// map position configuaration
gameContainer.style.setProperty("--offsetX", "0px");
gameContainer.style.setProperty("--offsetY", "0px");
gameContainer.style.setProperty("--width", "100%");
gameContainer.style.setProperty("--height", "100%");

document.querySelector("#M-10").style.setProperty("--radius","10px");
document.querySelector("#M-10").style.top='';
document.querySelector("#M-10").style.left='';