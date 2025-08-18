// PingPong Challenge

const pingPong = () => {
    for(let i = 1; i <=20; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0){
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
pingPong()