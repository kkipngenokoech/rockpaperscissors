function getcomputerchoice(list)
{
    const randomvalue = Math.floor(Math.random()*list.length);
    const randomitem = list[randomvalue];
    return randomitem;
}
const bucketlist = ["rock","paper","scissors"]
const computerchoice = getcomputerchoice(bucketlist);
//console.log(computerchoice);
function playround (computerselection, playerselection)
{
    if (computerchoice === "rock")
    {
        if (playerselection === "scissors")
        {
            return `you lose! ${computerchoice} beats ${playerselection}`;
        }
        else if (playerselection === "paper")
        {
            return `you win!yay, ${playerselection} beats ${computerchoice}`;
        }
        else
        {
              return `you both chose ${computerchoice}, its a draw`;
        }
    }
    else if (computerchoice === "paper")
    {
        if (playerselection === "rock")
        {
            return `you lose! ${computerchoice} beats ${playerselection}`;
        }
        else if (playerselection === "scissors")
        {
            return `you win ${playerselection} beats ${computerchoice}`;
        }
        else
        {
              return `you both chose ${computerchoice}, its a draw`;
        }
    }
    else
    {
        if (playerselection === "rock")
        {
            return `you win!, ${playerselection} beats ${computerchoice}`;
        }
        else if (playerselection === "paper")
        {
            return `you lose!, ${computerchoice} beats ${playerselection}`;
        }
        else
        {
            return `let's call it a draw, ${playerselection} equals ${computerchoice}`;
        }
    }
}
const playerinput = "rock";//prompt("enter your choice:",'')
const results = playround(computerchoice,playerinput);
console.log(results);
// function returnresults(results)
// {
//     return results;
// }
// returnresults(results);