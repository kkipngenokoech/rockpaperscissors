function GetComputerChoice(list)
{
    const randomvalue = Math.floor(Math.random()*list.length);
    const randomitem = list[randomvalue];
    return randomitem;
}
const bucketlist = ["rock","paper","scissors"]
const computerchoice = GetComputerChoice(bucketlist);
console.log(computerchoice);