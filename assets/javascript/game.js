var win = 0;
var lose = 0;
var score = 0;
var randomNum;
var a;
var r;
var e;
var s;
var rand;

$(document).ready(function () {

    var aRand = [];
    for (a = 1; a <= 15; a++) {
        aRand.push(a);
    }

    var rRand = [];
    for (r = 1; r <= 15; r++) {
        rRand.push(r);
    }

    var eRand = [];
    for (e = 1; e <= 15; e++) {
        eRand.push(e);
    }

    var sRand = [];
    for (s = 1; s <= 15; s++) {
        sRand.push(s);
    }

    var randomNumber = [];
    for (rand = 50; rand <= 250; rand++) {
        randomNumber.push(rand);
    }
    
    
    $("#startButton").on("click", function () {
        var numRandom = randomNumber[Math.floor(Math.random() * randomNumber.length)];
        $("#randNum").text(numRandom);
    

        var amRandom = aRand[Math.floor(Math.random() * aRand.length)];

        $("#aImgRand").off("click");
        $("#aImgRand").on("click", function () {
            
            score += amRandom;
            $("#totalScore").text(score);

            if (score === numRandom) {
                win++;
                $("#totalWins").text(win);
                score = 0;
                $("#totalScore").text(score);
            } 
            else if (score > numRandom) {
                lose++;
                $("#totalLosses").text(lose);
                score = 0;
                $("#totalScore").text(score);
            }
        })

        var rubRandom = rRand[Math.floor(Math.random() * rRand.length)];

        $("#rImgRand").off("click");
        $("#rImgRand").on("click", function () {
            score = score + rubRandom;
            $("#totalScore").text(score);

            if (score === numRandom) {
                win++;
                $("#totalWins").text(win);
                score = 0;
                $("#totalScore").text(score);
            
            } 
            else if (score > numRandom) {
                lose++;
                $("#totalLosses").text(lose);
                score = 0;
                $("#totalScore").text(score);
                
            }
        })

        var emRandom = eRand[Math.floor(Math.random() * eRand.length)];

        $("#eImgRand").off("click");
        $("#eImgRand").on("click", function () {
                score = score + emRandom;
                $("#totalScore").text(score);

            if (score === numRandom) {
                win++;
                $("#totalWins").text(win);
                score = 0;
                $("#totalScore").text(score);
                
            } 
            else if (score > numRandom) {
                lose++;
                $("#totalLosses").text(lose);
                score = 0;
                $("#totalScore").text(score);
                
            }
        })

        var sapRandom = sRand[Math.floor(Math.random() * sRand.length)];

        $("#sImgRand").off("click");
        $("#sImgRand").on("click", function () {
                score = score + sapRandom;
                $("#totalScore").text(score);

            if (score === numRandom) {
                win++;
                $("#totalWins").text(win);
                score = 0;
                $("#totalScore").text(score);
                
            } 
            else if (score > numRandom) {
                lose++;
                $("#totalLosses").text(lose);
                score = 0;
                $("#totalScore").text(score);
                
            }
        })
    })

    
    
})