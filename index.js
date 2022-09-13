const hourEl=document.getElementById("hours");
const minuEl=document.getElementById("minutes");
const secEL=document.getElementById("Seconds");
const ampmEl=document.getElementById("ampm");


function UpdateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";

    if(h>12){
        h=h-12;
        ampm="PM";
    }
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;
    
    hourEl.innerText=h;
    minuEl.innerText=m;
    secEL.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
UpdateClock();
    },1000)


}
UpdateClock();
