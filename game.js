var player1= localStorage.getItem("player1")
var player2= localStorage.getItem("player2")

document.getElementById("player1").innerHTML=player1;
document.getElementById("player2").innerHTML=player2;
document.getElementById("player_ques").innerHTML="Question turn: "+player1;
document.getElementById("player_ans").innerHTML="Answer turn: "+player2;


function send() {
number1=document.getElementById("no1").value;
number2 = document.getElementById("no2").value;
console.log("values saved");

answer= parseInt(number1) * parseInt(number2);
console.log("answer="+answer);

num_question= "<h4>"+number1+" X "+number2+"</h4>";
console.log(num_question);
input_box="<br> Answer=<input type='text' placeholder='Input Answer Here' id='input_answer'>"
button_check="<br><br> <button id='button_check'class='btn btn-succses' onclick='check()'>Check</button>"
answer_div= num_question + input_box + button_check;

document.getElementById("question").innerHTML=answer_div;
document.getElementById("no1").value="";
document.getElementById("no2").value="";




}