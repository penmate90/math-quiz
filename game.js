var player1= localStorage.getItem("player1")
var player2= localStorage.getItem("player2")

document.getElementById("player1").innerHTML=player1;
document.getElementById("player2").innerHTML=player2;
document.getElementById("player_ques").innerHTML="Question turn: "+player1;
document.getElementById("player_ans").innerHTML="Answer turn: "+player2;
question_turn=player1;
answer_turn=player2;
player2_score=0;
player1_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send() {
number1=document.getElementById("no1").value;
number2 = document.getElementById("no2").value;
console.log("values saved");

answer= parseInt(number1) * parseInt(number2);
console.log("answer="+answer);

num_question= "<h4>"+number1+" X "+number2+"</h4>";
console.log(num_question);
input_box="<br> Answer=<input type='text' placeholder='Input Answer Here' id='input_answer'>"
button_check="<br><br> <button id='button_check'class='btn btn-success' onclick='check()'>Check</button>"
answer_div= num_question + input_box + button_check;

document.getElementById("question").innerHTML=answer_div;
document.getElementById("no1").value="";
document.getElementById("no2").value="";




}

function check() {
    user_answer=document.getElementById("input_answer").value;

    if (user_answer==answer) {
        document.getElementById("answer_comment").innerHTML="CORRECT ANSWER! SEND NEXT QUESTION";
        document.getElementById("input_answer").value="";
        document.getElementById("question").innerHTML="";
    
    if (answer_turn==player1) {
        player1_score =+1;
        answer_turn=player2
        question_turn=player1;
        document.getElementById("player_ques").innerHTML="Question turn: "+question_turn;
document.getElementById("player_ans").innerHTML="Answer turn: "+answer_turn;
document.getElementById("player1_score").innerHTML=player1_score;




    } else if(answer_turn== player2) {
        player2_score =+1;
        answer_turn=player1
        question_turn=player2;
        document.getElementById("player_ques").innerHTML="Question turn: "+question_turn;
document.getElementById("player_ans").innerHTML="Answer turn: "+answer_turn;
document.getElementById("player2_score").innerHTML=player2_score;

    }
}else{ document.getElementById("answer_comment").innerHTML="WRONG ANSWER! TRY AGAIN!";
document.getElementById("input_answer").value=""}

}