player_1=0;
player_2=0;

function login_quiz() {



    player_1=document.getElementById("player1_name").value;
    localStorage.setItem("player1", player_1)



    player_2=document.getElementById("player2_name").value;
    localStorage.setItem("player2", player_2)

    window.location="quiz_main.html";
}
