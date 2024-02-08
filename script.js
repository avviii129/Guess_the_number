let x =Math.floor(Math.random() * 100);
console.log(x);

let score = 100;

function guess(){
let n;
n = document.getElementById("input").value;
n = Number.parseInt(n);
if(n>x){
    document.getElementById("result").style.color="rgba(255, 13, 106, 0.897)";

   document.getElementById("result").innerHTML = "OOPS!";
   
   document.getElementById("info").innerHTML="Entered number is greater !" ;

}
else if (n==x){
    document.getElementById("result").style.color="rgba(0, 224, 56, 0.856)";

   document.getElementById("result").innerHTML = "YOOOHOOO!";
   
   document.getElementById("info").innerHTML="You Entered Correct Number," + " it Was " + x + ".";

}
else {
    document.getElementById("result").style.color="rgba(255, 13, 106, 0.897)";

   document.getElementById("result").innerHTML="OOPS!";
   
   document.getElementById("info").innerHTML="Entered number is smaller !";

}
}

function sc(){
    score = score - 1;
    document.getElementById("score").innerHTML="Your score: " + score;
}
