{
//     let timeout = setTimeout(()=>{
//         console.log("timeout");
//     },2000);
    
//     clearTimeout(timeout);
    
//     let interval = setInterval(()=>{
//         console.log("interval");
//     },1000);
    
//     setTimeout(()=>{
    
//         clearInterval(interval);
//     },5000);
// //



// let i=0;
// let interval=setInterval(() => {
//     console.log(i++)
// },1000);

//  setInterval(()= let  date = new Date();
   // document.getElementById("data").innerHTML = date;>{
//     clearInterval(interval);
//  },4000);

   
   }


{
   function displayTime() {
      let clock =document.getElementById("clock");

      let date = new Date()
      let seconds = date.getSeconds();
      let minutes = date.getMinutes();
      let hours = date.getHours();
      let amOrPm = hours >=12 ? "pm" : "am"; 
      let time = `${hours}:${minutes}:${seconds}${amOrPm}`;
      clock.innerHTML = time;
   }
   setInterval(displayTime,1000);
   


  
 
}


