{
//     let timeout = setTimeout(()=>{
//         console.log("timeout");
//     },2000);
    
//     clearTimeout(timeout);
    
    let interval = setInterval(()=>{
        console.log("interval");
    },1000);
    
    setTimeout(()=>{
    
        clearInterval(interval);
    },5000);
//



// let i=0;
// setInterval(() => {
//     console.log(i++)
// },1000);

//  setInterval(()=>{
//     clearInterval(i);
//  },4000);
}

