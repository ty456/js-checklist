//pag requirement
function paperRequirements(firstbook,secondbook,thirdbook){
    let firstBookPage = 100;
    let secondBookPage = 200;
    let thirdBookPage = 300;
    let total =firstbook*firstBookPage+secondbook*secondBookPage+thirdbook*thirdBookPage;
    return total;

}
totalPages =paperRequirements(10,5,4);// koyta book chapabo setar value, first bookchapabo 10ta,second 5 ta
console.log(totalPages)                 //& thrird book 4ta