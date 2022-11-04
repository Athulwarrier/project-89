function AddUser(){
    Player_1_name = document.getElementById("Player1_name").value;
    Player_2_name = document.getElementById("Player2_name").value;
    localStorage.setItem("name1",Player_1_name);
    localStorage.setItem("name2",Player_2_name);
    window.location = "quiz.html";
}