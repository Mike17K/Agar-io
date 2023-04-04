const socket = io("http://localhost:3000",{ transports: ['websocket'] });

socket.on("connect", () => {
  console.log("connected to server");  
});

socket.on("give-profile",()=>{
    data = {
        name: "test"
    }
    socket.emit("set-profile",data)
})

