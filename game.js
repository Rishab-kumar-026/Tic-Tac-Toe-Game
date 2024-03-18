let boxes = document.querySelectorAll(".box");
let message = document.querySelector(".winner");
let show_winner = document.querySelector(".message_container");
let new_game_button = document.querySelector("#new_game");
let reset_game_button = document.querySelector("#reset_game");
let turn_O = true; // First player is O
let count = 0;

let winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn_O) {
            box.innerText = "O";
            box.style.color = "green";
            turn_O = false; // After O now its turn of X
        }
        else {
            box.innerText = "X"; //After X its turn of O
            box.style.color = "red";
            turn_O = true;
        }
        count++;
        box.disabled = true;
        check_winner();
        console.log(count);

        if (count === 9) {
            console.log("Game draw");
            message.innerText = `Game Got Draw...`;
            message.style.color = "Red";
            show_winner.classList.remove("hide");
        }
    })
})


let reset_game = () => { //Function for reseting the game
    turn_O = true;
    count = 0;
    enable_buttons();
    show_winner.classList.add("hide");
}

let disable_buttons = () => { //function for disabiling buttons after winningg
    boxes.forEach((box) => {
        box.disabled = true;

    })
}

let enable_buttons = () => { //function for enabiling buttons in new game or reset game
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}


let show_game_winner = (position_1) => { //function for showing the winner
    message.innerText = `Congratulations!!! Winner : ${position_1}`;
    show_winner.classList.remove("hide");
    disable_buttons();

}



let check_winner = () => { //function for finding the winner
    for (let pattern of winning_pattern) {
        let position_1 = boxes[pattern[0]].innerText;
        let position_2 = boxes[pattern[1]].innerText;
        let position_3 = boxes[pattern[2]].innerText;

        if (position_1 != "" && position_2 != "" && position_3 != "") {
            if (position_1 === position_2 && position_2 === position_3) {
                show_game_winner(position_1);
            }

        }
    }

}

new_game_button.addEventListener("click", reset_game); //calling new game
reset_game_button.addEventListener("click", reset_game); //calling reset game