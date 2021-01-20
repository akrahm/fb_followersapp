var counter = document.querySelector(".counter");
var friends = document.querySelector(".friends");

let count = 1;

setInterval(() => {
    if(count<1000){
        count++;
        counter.innerText= count;
    }
},1);

setTimeout(() => {
    friends.innerText="friends on facebook";
},6000)