function timer() {
    const target=new Date("1 Oct 2022");
    var now=new Date();
    var diff=Math.floor((target-now)/1000);
    
    document.getElementById("day").innerHTML=Math.floor(diff/(3600*24));
    diff%=(3600*24);
    document.getElementById("hour").innerHTML=Math.floor(diff/3600);
    diff%=3600;
    document.getElementById("minute").innerHTML=Math.floor(diff/60);
    diff%=60;
    document.getElementById("second").innerHTML=Math.floor(diff);
    //console.log(diff);
}

//const target=new Date(prompt("Please enter date (Ex. 1 Jan 2018)"));
setInterval(timer, 1000);