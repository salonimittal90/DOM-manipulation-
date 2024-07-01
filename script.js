var istatus = document.querySelector("h5");
var add = document.querySelector("#add");
// console.log(a)

var flag = 0;
add.addEventListener("click",function(){
    if(flag==0){
        istatus.innerHTML = "Friend";
        istatus.style.color = "green";
        add.innerHTML ="Remove";
        flag = 1;
}
else{
    istatus.innerHTML="stranger";
    istatus.style.color = "red";
    add.innerHTML ="Add Friend";
    flag = 0;
}

    
   
    
    


})

