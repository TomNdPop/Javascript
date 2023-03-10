//Main function

//Player selection function
function playerSelection(){

    //Initialize string as falsy.
    playerSelect = ''

    //Prompt user for rock, paper, or scissors
    // and then convert the string as to help player out with valid input.
    playerSelect = prompt("Enter Rock, Paper or Scissors.")
    playerSelect = playerSelect.toUpperCase()
    playerSelect = playerSelect[0]

    //Correct the string for the user and for future function use.
    if (playerSelect =="R"){
        playerSelect = 0
    }else if(playerSelect =="P"){
        playerSelect = 1
    }else if(playerSelect =="S"){
        playerSelect = 2
    }

    return playerSelect
}

//Random integer function
function getRandInt(max){
    return Math.floor(Math.random()*max)
}

//Computer selection function
function computerSelection(){
    test = getRandInt(3)
    return test
}

function game(){
    //I use 0 = Rock, 1 = Paper, and 2 = Scissors
    yWin = 0
    cWin = 0
    tie = 0

    while (yWin !== 4 || cWin !== 4){
        pSelect = playerSelection()
        cSelect = computerSelection()
        if(pSelect ==2){
            if(cSelect==1){
                ++yWin
                console.log(yWin,"You Won! Scissors beats Paper.")
                continue
            }else if(cSelect==0){
                ++cWin
                console.log(cWin,"You Lost! Rock beats Scissors.")
                continue
            }
        }else if(pSelect==1){
            if(cSelect==2){
                ++cWin
                console.log(cWin,"You Lost! Scissors beats Paper.")
                continue
            }else if(cSelect==0){
                ++yWin
                console.log(yWin,"You Won! Paper beats Rock.")
                continue
            }
        }else if(pSelect==0){
            if(cSelect==1){
                ++cWin
                console.log(cWin,"You Lost! Paper beats Rock.")
                continue
            }else if(cSelect==2){
                ++yWin
                console.log(yWin,"You Won! Rock beats Scissors.")
                continue
            }
        }else{
            ++tie
            console.log("That was a tie!")
            continue
        }
    }
    if(yWin>cWin){
        console.log("You Win!")
    }else if(cWin>yWin){
        console.log("You Lost!")
    }

}

function Main(){
    game()
}

Main()