$(document).ready(function () {
    var questions = {
        "What is most important to you?": q1,
        "Which one of these animals is your favorite?": q2,
        "If you had only one minute left to live, what would you do?": q3,
        "When making a bowl of your favorite cereal, do you put cereal then milk, or milk then cereal?": q4
    };
    var q1 = {
        "Family": 1,
        "Chocolate": 2,
        "Your health": 3,
        "The heart of the cards": 4
    };
    var q2 = {
        "A gud boi": 1,
        "Fluffy kitty": 2,
        "Cute burb": 3,
        "tortle": 4
    };
    var q3 = {
        "Look up dank memes on Reddit": 4,
        "Tell my friends on Facebook that I love them": 3,
        "Loot a Goodwill": 2,
        "Take a nap": 1
    };
    var q4 = {
        "Like a normal human being": 4,
        "Milk then cereal": -10,
        "Cereal then milk": 10,
        "I eat that -ish raw": 1
    };
    var score = 0;
    var numQuestions = 4;

    var theQuestions = Object.keys(questions);
    for (var q = 0; i < 4; q++) {
        $("#theQuestion").text("Sheesh");
    }

    console.log("huh");
});
