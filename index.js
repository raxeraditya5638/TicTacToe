let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".btn1");
let new_btn = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg_container")
let msg = document.querySelector("#msg");
let turno = true;

const winning_pattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked the box")
        if (turno) {
            box.innerHTML = "O";
            turno = false;
        } else {
            box.innerHTML = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let stopGame = () => {
    for (let stop of boxes) {
        stop.disabled = true;
    }
};

let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

let resetGame = () => {
    for (let stop of boxes) {
        turno = true;
        msg_container.classList.add("hide");
        enableBoxes();
    }
};

new_btn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const showWinner = (winner) => {
    msg.innerHTML = `congratulation, winner is a ${winner}`;
    msg_container.classList.remove("hide");
    stopGame();
};

const checkWinner = () => {
    for (let pattern of winning_pattern) { // pattern check index each list of array
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]])
        let position_value = boxes[pattern[0]].innerText;
        let position1_value = boxes[pattern[1]].innerText;
        let position2_value = boxes[pattern[2]].innerText;
        if (position_value != "" && position1_value != "" && position2_value != "") {
            if (position_value === position1_value && position1_value === position2_value) {
                console.log("winner", position_value);
                showWinner(position_value);
            };
        };
    };
};
