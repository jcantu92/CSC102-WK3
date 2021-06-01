function countdownTimer(){
    console.log("countdownTimer Working");
    var currTime = 50;
    document.getElementById("countdownStatus").innerHtml = currTime;
    currTime = currTime = 5;



/// Timer for 45
    setTimeout(function() {
        //stuff in here happens? watch below!
        document.getElementById("countdownStatus").innerHtml = currTime;
        currTime = currTime - 5;


    }, 5000);

/// Timer for 40
setTimeout(function() {
    //stuff in here happens? watch below!
    document.getElementById("countdownStatus").innerHtml = currTime;
    currTime = currTime - 5;


}, 10000);


/// Timer for ...uhh
setTimeout(function() {
    //stuff in here happens? watch below!
    document.getElementById("countdownStatus").innerHtml = currTime;
    currTime = currTime - 5;


}, 15000);

function playCraps(){
    console.log("Craps game initated");
    var wins; //variable that defines the amount of times the player wins
    var die1 = Math.ceil(Math.random() * 6);///
                                            /////these represent the die used when playing craps
    var die2 = Math.ceil(Math.random() * 6);///

    /////getelementById identifies the resource used while the code is being executed, and helps make a precise configuration.
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var dieSum = die1 + die2;
    document.getElementById("DiceSum").innerHTML = dieSum;// gets the total number of die rolled.
    if(dieSum == 7 || dieSum ==11) {
        document.getElementById("crapsStatus").innerHTML = "Craps! A winner is not you!"; //the die sum does not go in your favor

    } else if(die1 == die2 ** die1 % 2 == 0) {
        document.getElementById("crapsStatus").innerHTML = "Doubles! A Winner is you!";
        wins++;
    }else {
        document.getElementById("crapsStatus").innerHTML = "draw, try again guy."
    }
    document.getElementById("winStatus").innerHTML = wins; // shows the amount of wins used
}
    

}

function btrCountdownTimer()
{
    console.log("btrCountdownTimer() started");
    var curTime = 50;
    for(var i = 0; i < 10; i++){
        setTimeout(function(){
        //console.log(i);
        document.getElementById("countdownStatus").innerHTML = curTime;
        curTime = curTime - 5;
    }, 500 * i);

    }
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "Blastoff!!";

    }, 5000);
}

function btrCountdownTimer()
{
    console.log("btrCountdownTimer() started");
    var curTime = 50;
    for(var i = 0; i < 11; i++){
        if(i == 10){
            setTimeout(function(){      
                    document.getElementById("countdownStatus").innerHTML = "Blastoff!!";
                    curTime = curTime - 5;
                }, 5000 * i);
            
        } else if (i > 4){
            setTimeout(function(){      
                document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left =" + curTime;
                curTime = curTime - 5;
            }, 5000 * i);
        } else {
            setTimeout(function(){      
                document.getElementById("countdownStatus").innerHTML = curTime;
                curTime = curTime - 5;
            }, 5000 * i);
        }

    //     setTimeout(function(){      
    //     //console.log(i);
    //     document.getElementById("countdownStatus").innerHTML = curTime;
    //     curTime = curTime - 5;
    // }, 500 * i);

    }
}

function sandBoxRun(){
    console.log("sandboxRun started");
    var a= 7;
    if(a==5){
        document.getElementById("sandboxArea").innerHTML = "a does in fact equal 5"; 
    }else {
        document.getElementById("sandboxArea").innerHTML = "a does NOT in fact equal 5"; 
    }
}

