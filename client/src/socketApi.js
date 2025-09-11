import io from "socket.io-client"

let socket ;

export const init = () => {
    console.log("Sunucuya baglaniliyor...")
    socket = io("http://localhost:3001" , {
        transports: ["websocket"] ,
        

    });
    socket.on('connect', ()=>console.log("Sunucuya baglanti basari ile gerceklesti !! "))
}

export const send = (color) => {
    socket.emit('newColor', color);
}

export const subscribe = (color) => {
    socket.on ('receive', (color) => { //on methodu ile socket i dinliyorum
        console.log(color)
    })
}