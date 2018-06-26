$(document).ready(function() {
    var question = ["What was the name of the first man?", "Who was the first murderer?", "Who built the ark?", "Who was promised a baby, even though she was very old?", "Who was sold as a slave by his brothers?", "Who was put into a basket-boat by his mother and found by a princess?", "What big work did God have for Moses?", "Who was the little boy whose mother took him to live with the priest?"];
    var answers = ["Jesus&Joseph&Adam&Abel", "Judas&Abel&Moses&Cain", "Jonah&Jesus&Noah&Moses", "Mary&Sarah&Eve&Rebecca", "Joseph&Moses&Jesus&Noah", "Noah&Moses&Samuel&Eli", "Be a shepherd&Be a priest&Rescue the Israelites&Fight for the Promised Land", "Moses&Samuel&Jesus&Abel"];
    var corrAnswer = ["Adam", "Cain", "Noah", "Sarah", "Joseph", "Moses", "Rescue the Israelites", "Samuel"];
    var score = [false, false, false, false, false, false, false, false];
    var index = 0;
    var intervalId;
    var clockRunning = false;
    var guess = "";

    $(".btn").on("click", function() {
        countdown.stop();
        guess = $(this).text();
        console.log("guess = " + guess);
        console.log("index = " + index);
        console.log("corrAnswer[index] = " + corrAnswer[index]);
        if (guess == corrAnswer[index]) {
            console.log("answer is correct");
        }
        else {
            console.log("answer is not correct");
        }
    });
    

    

    // countdown object
    var countdown = {
        time: 30,
        reset: function() {
            countdown.time = 30;
            // Change display to 30 seconds
            $("#timeRem").text("Time Remaining:  30 seconds");
        },
        start: function() {
            if (!clockRunning) {
                clockRunning = true;
                intervalId = setInterval(countdown.count, 1000);
              }
        },
        stop: function() {
            clockRunning = false;
            clearInterval(intervalId);
        },
        count: function() {
            countdown.time -= 1;
            $("#timeRem").text("Time Remaining:  " + countdown.time + " seconds");
            if (countdown.time === 0) {
                countdown.stop();
            }
        }
    };

    for (var i=0; i<question.length; i++) {
        index = i;
        $("#qstn").text(question[i]);
        var str = answers[i];
        var ans = str.split("&");
        for (var j=0; j<4; j++) {
            $("#btn"+j).text(ans[j]);
        }
        countdown.start();
        countdown.count();

    }

  

});    