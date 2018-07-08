$(document).ready(function() {
    var question = ["What was the name of the first man?", 
                    "Who was the first murderer?", 
                    "Who built the ark?", 
                    "Who was promised a baby, even though she was very old?", 
                    "Who was sold as a slave by his brothers?", 
                    "Who was put into a basket-boat by his mother and found by a princess?", 
                    "What big work did God have for Moses?", 
                    "Who was the little boy whose mother took him to live with Eli the priest?",
                    "Who was the first king of Israel?",
                    "Who was the little boy who fought a giant with only a sling?",
                    "Given the chance to ask God for anything, who only asked for wisdom?",
                    "Who was considered the strongest man that ever lived?",
                    "What was the secret to Samson's strength?",
                    "How many tribes did Israel have?",
                    "Bad King Ahab stole his neighbor's vineyard - what was the neighbor's name?",
                    "What was King Ahab's wife's name?",
                    "Who was the prophet that went to Heaven in a chariot made of fire?",
                    "What prophet spent the night in a den of lions without being hurt?",
                    "What Jewish girl became the Queen of Persia and saved her people's lives?",
                    "Who was the promised Messiah?",
                    "Where was Jesus born?",
                    "Who tried to kill Jesus when he was a baby?",
                    "Who baptized Jesus?",
                    "Who was NOT one of Jesus' disciples?",
                    "How many disciples did Jesus have?",
                    "How many fish and loaves of bread did Jesus use to feed 5000 people?",
                    "Who did Jesus raise from the dead?",
                    "How did Jesus die?",
                    "What happened after 3 days?",
                    "Why did they crucify Jesus?"           
                ];
    var answers =  ["Jesus&Joseph&Adam&Abel", 
                    "Judas&Abel&Moses&Cain", 
                    "Jonah&Jesus&Noah&Moses", 
                    "Mary&Sarah&Eve&Rebecca", 
                    "Joseph&Moses&Jesus&Noah", 
                    "Noah&Moses&Samuel&Eli", 
                    "Be a shepherd&Be a priest&Rescue the Israelites&Fight for the Promised Land", 
                    "Moses&Samuel&Jesus&Abel",
                    "David&Saul&Solomon&Paul",
                    "David&Joseph&Moses&Jesus",
                    "Samson&David&Noah&Solomon",
                    "Samson&Solomon&Moses&Elijah",
                    "He didn't drink wine&He didn't cut his hair&He was in love with Delilah&He was very angry",
                    "22&9&3&12",
                    "Baalam&Elijah&Boaz&Naboth",
                    "Sarah&Ruth&Jezebel&Esther", 
                    "Elijah&Elisha&Ezekiel&Daniel",
                    "Ezekiel&Elijah&Elisha&Daniel",
                    "Esther&Mary&Elizabeth&Sarah",
                    "Joshua&Jesus&John&Judah",
                    "New York&Jerusalem&Bethlehem&Nazareth",
                    "King David&King Herod&King Solomon&King George",
                    "Mary and Joseph&John the Baptist&King Solomon&Peter",
                    "Peter&Judas&James&Jonah",
                    "7&3&10&12",
                    "7 fish and 3 loaves&4 fish and 2 loaves&100 fish and 500 loaves&2 fish and 5 loaves",
                    "Zacheus&Lazarus&Matthias&Judas",
                    "Shot by an Arrow&Was stoned by a crowd&Was crucified&He never died",
                    "The disciples stole his body&He was resurrected with an immortal body&The women annointed his body&The guards moved his body",
                    "The Jewish leaders were jealous of him&The Romans thought he wanted to be king&He blasphemed by saying He was the Son of God&He died voluntarily for our sins"
                ];
    var corrAnswer = ["Adam", 
                    "Cain", 
                    "Noah", 
                    "Sarah", 
                    "Joseph", 
                    "Moses", 
                    "Rescue the Israelites", 
                    "Samuel",
                    "Saul",
                    "David",
                    "Solomon",
                    "Samson",
                    "He didn't cut his hair",
                    "12",
                    "Naboth",
                    "Jezebel",
                    "Elijah",
                    "Daniel",
                    "Esther",
                    "Jesus",
                    "Bethlehem",
                    "King Herod",
                    "John the Baptist",
                    "Jonah",
                    "12",
                    "2 fish and 5 loaves",
                    "Lazarus",
                    "Was crucified",
                    "He was resurrected with an immortal body",
                    "He died voluntarily for our sins"
                ];
    var corrImage = ["adam.png", 
                    "cain.jpg", 
                    "noah.jpg", 
                    "sarah.jpg", 
                    "joseph.jpg", 
                    "moses.jpg", 
                    "rescued-the-israelites.jpg", 
                    "samuel.jpg",
                    "King_Saul.jpg",
                    "David_Goliath.gif",
                    "King_Solomon_wisdom.jpg",
                    "Samson_strength.jpg",
                    "Samson_hair.jpg",
                    "Tribes_of_Israel.JPG",
                    "Naboth_vineyard.jpg",
                    "Jezebel.jpg",
                    "Elijah_fiery_chariot.jpg",
                    "Daniel_lions.gif",
                    "Esther3.jpg",
                    "Baby_Jesus.gif",
                    "Bethlehem.gif",
                    "King_Herod.jpg",
                    "Baptism.jpg",
                    "disciples.jpg",
                    "12-disciples-of-Jesus.jpg",
                    "Jesus_feeds_5000.jpg",
                    "Lazarus.jpg",
                    "jesus-on-the-cross.jpg",
                    "resurrectiongraphic.jpg",
                    "jesus-in-heaven1.jpg"
                ];
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

    $("#restartBtn").on("click", function() {
        $(".endClass").css("display", "none");
        $(".btnClass").css("display", "block");
        $(".insideScroll").css("visibility", "visible");
        $("#progress").css("visibility", "visible");
        $("#progress").text("Question 1 of " + question.length);
        scoreCorr = 0;
        scoreIncorr = 0;
        scoreTimeOut = 0;
        clockRunning = false;
        Index = 0;
        countdown.reset();
        countdown.start();
        countdown.count();

    })

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
            3 * 1000);
    }

    function showScore() {
        console.log("Show the score page here...");
        $(".insideScroll").css("visibility", "hidden");
        $("#qstn").html("&nbsp;");
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