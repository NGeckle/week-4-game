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
    
    var numRandom = randomNumber[Math.floor(Math.random() * randomNumber.length)];
    

    $("#startButton").on("click", function () {
        $("#randNum").text(numRandom);
    })

    var amRandom = aRand[Math.floor(Math.random() * aRand.length)];

    $("#aImgRand").on("click", function () {
        if (score === 0) {
            score = score + amRandom;
            $("#totalScore").text(score);
        } 
        else if (score >= 1) {
            score = score + amRandom;
            $("#totalScore").text(score);
        }

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

    $("#rImgRand").on("click", function () {
        if (score === 0) {
            score = score + rubRandom;
            $("#totalScore").text(score);
        } 
        else if (score >= 1) {
            score = score + rubRandom;
            $("#totalScore").text(score);
        }

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

    $("#eImgRand").on("click", function () {
        if (score === 0) {
            score = score + emRandom;
            $("#totalScore").text(score);
        } 
        else if (score >= 1) {
            score = score + emRandom;
            $("#totalScore").text(score);
        }

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

    $("#sImgRand").on("click", function () {
        if (score === 0) {
            score = score + sapRandom;
            $("#totalScore").text(score);
        } 
        else if (score >= 1) {
            score = score + sapRandom;
            $("#totalScore").text(score);
        }

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