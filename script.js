//neccessary elements
const SelectValue=document.querySelectorAll("select");
const livetime=document.getElementById("time");
const Alarmbtn=document.querySelector("button");
const SelectBox=document.querySelector(".SelectBox-Content");
const LastComment=document.getElementById("LastComment")
let AlarmTime;
let  ringtone =new Audio("Alarm Tone.mp3")
for(let i=12;i>0;i--){
    i=i<10 ? "0"+ i : i;
    let option= `<option value="${i}">${i}</option>`;
    SelectValue[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=60;i>0;i--){
    i=i<10 ? "0"+ i : i;
    let option= `<option value="${i}">${i}</option>`;
    SelectValue[1].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let i=2;i>0;i--){
   const ampm=i<=1 ? "AM":"PM"
   let option= `<option value="${ampm}">${ampm}</option>`;
   SelectValue[2].firstElementChild.insertAdjacentHTML("afterend",option)
}
//setting live time on webpage
setInterval(() => {
     let d= new Date();
     let h=d.getHours();
     let m=d.getMinutes();
     let s=d.getSeconds();
     let  ampm="AM"
     if(h>=12){
         h=h-12;
         ampm="PM"
     }
     h = h==0 ?h=0:h;
     h=h<10 ?"0"+h:h
     m=m<10 ?"0"+m:m
     s=s<10 ?"0"+s:s

  livetime.textContent=`${h}:${m}:${s}:${ampm}`
   if(AlarmTime==`${h}:${m}:${ampm}`){
       ringtone.play();
       ringtone.loop=false;
   }
}, 1000);

//set alarm
function setalarm(){
     let time=`${SelectValue[0].value}:${SelectValue[1].value}:${SelectValue[2].value}`;
     if(time.includes("Hour")||time.includes("Minute")||time.includes("AM/PM")){
       return alert("Kindly Select Valid Time")
     }
     AlarmTime = time;
     SelectBox.classList.add("Disable");
     Alarmbtn.textContent="Clear Alarm"
     LastComment.classList.add("Comment")
}
Alarmbtn.addEventListener("click",setalarm)

//clear alarm
function ClearAlarm(){
     SelectBox.classList.remove("Disable");
     Alarmbtn.textContent="Set Alarm"
     AlarmTime=""
     ringtone.pause()
     LastComment.classList.remove("Comment")
}
Alarmbtn.addEventListener("dblclick",ClearAlarm)




