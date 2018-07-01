$(document).ready(function() {
    var question = ["What was the name of the first man?", "Who was the first murderer?", "Who built the ark?", "Who was promised a baby, even though she was very old?", "Who was sold as a slave by his brothers?", "Who was put into a basket-boat by his mother and found by a princess?", "What big work did God have for Moses?", "Who was the little boy whose mother took him to live with Eli the priest?"];
    var answers = ["Jesus&Joseph&Adam&Abel", "Judas&Abel&Moses&Cain", "Jonah&Jesus&Noah&Moses", "Mary&Sarah&Eve&Rebecca", "Joseph&Moses&Jesus&Noah", "Noah&Moses&Samuel&Eli", "Be a shepherd&Be a priest&Rescue the Israelites&Fight for the Promised Land", "Moses&Samuel&Jesus&Abel"];
    var corrAnswer = ["Adam", "Cain", "Noah", "Sarah", "Joseph", "Moses", "Rescue the Israelites", "Samuel"];
    var corrImage = ["adam.png", "cain.jpg", "noah.jpg", "sarah.jpg", "joseph.jpg", "moses.jpg", "rescued-the-israelites.jpg", "samuel.jpg"];
    var scoreCorr = 0;
    var scoreIncorr = 0;
    var scoreTimeOut = 0;
    var clockRunning = false;
    var Index = 0;

    $("#startBtn").on("click", function() {
        $(".startClass").css("display", "none");
        $(".btnClass").css("display", "block");
        $(".insideScroll").css("visibility", "visible");
        $("#progress").css("visibility", "visible");
        $("#progress").text("Question 1 of " + question.length);
        countdown.start();
        countdown.count();
    });

    $(".btn").on("click", function() {
        countdown.stop();
        guess = $(this).text();
        console.log("guess = " + guess);
        console.log("Index = " + Index);
        console.log("corrAnswer[Index] = " + corrAnswer[Index]);
        $(".btnClass").css("display", "none");
        $(".resultClass").css("display", "block");
        var cImage = "./assets/images/" + corrImage[Index];
        if (guess == corrAnswer[Index]) {
            $("#result").html("Correct!<br>&nbsp;");
            $("#imgResult").attr("src", cImage);
            console.log("answer is correct");
            scoreCorr++;
        }
        else {
            $("#result").html("Wrong Answer!<br>The correct answer is:  " + corrAnswer[Index]);
            $("#imgResult").attr("src", cImage);
            console.log("answer is not correct");
            scoreIncorr++;
        }
        pauseReset();
    });
    
    function pauseReset() {
        var pauseId = setTimeout(function() 
            {
                console.log("timeout is set");
                Index++;
                if (Index < question.length) {
                    $(".btnClass").css("display", "block");
                    $(".resultClass").css("display", "none");
                    $("#progress").text("Question " + (Index + 1) + " of " + question.length);
                    countdown.reset();
                    countdown.start();
                    countdown.count();
                }
                else {
                    showScore();

                }
            },
            4 * 1000);
    }

    function showScore() {
        console.log("Show the score page here...");
        $(".resultClass").css("display", "none");
        $(".endClass").css("display", "block");
        $("#AnsCorr").text("Correct Answers:  " + scoreCorr);
        $("#AnsInc").text("Incorrect Answers:  " + scoreIncorr);
        $("#AnsTime").text("Unanswered:  " + scoreTimeOut);
    }
    

    // countdown object
    var countdown = {
        time: 30,
        reset: function() {
            countdown.time = 30;
            // Change display to 30 seconds
            $("#timeRem").text("Time Remaining:  30 seconds");
        },
        start: function() {
            console.log("countdown.start function");
            console.log("clockRunning = " + clockRunning);
            $("#qstn").text(question[Index]);
            var str = answers[Index];
            var ans = str.split("&");
            for (var j=0; j<4; j++) {
                $("#btn"+j).text(ans[j]);
            }
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
            console.log("countdown.count function");
            countdown.time -= 1;
            console.log("countdown.time = " + countdown.time);
            $("#timeRem").text("Time Remaining:  " + countdown.time + " seconds");
            if (countdown.time === 0) {
                countdown.stop();
                var cImage = "./assets/images/" + corrImage[Index];
                $(".btnClass").css("display", "none");
                $(".resultClass").css("display", "block");
                $("#result").html("Out of Time!<br>The correct answer is:  " + corrAnswer[Index]);
                $("#imgResult").attr("src", cImage);
                console.log("out of time");
                scoreTimeOut++;
                pauseReset();
            }
        }
    };
});    