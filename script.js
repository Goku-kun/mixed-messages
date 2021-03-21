function genRandom(listlen) {
    return Math.floor(Math.random() * listlen);
}

function genMessage() {
    return `I will ${positive().verb} and ${positive().over} the ${
        positive().task
    }.`;
}

function positive() {
    const verbs = [
        "win",
        "wrestle",
        "catch-up",
        "improvise",
        "adapt",
        "overcome",
        "parkour",
        "commit",
    ];
    const tasks = [
        "war",
        "story",
        "recipe",
        "book",
        "code",
        "project",
        "task at hand",
    ];
    const verbs_over = [
        "complete",
        "finish",
        "accomplish",
        "acquire",
        "end",
        "settle",
        "conclude",
    ];

    return {
        verb: verbs[genRandom(verbs.length)],
        over: verbs_over[genRandom(verbs_over.length)],
        task: tasks[genRandom(tasks.length)],
    };
}
const harveySpecterQuotes = () => {
    const quotes = [
        "When you're backed against the wall, break the goddamn thing down.",
        "Winners don't make excuses when the other side plays the game.",
        "I'm not about caring. I'm about winning.",
        "I'm not the guy that gives you a hug when you're scared. I'm the guy that wins when you need it the most!",
        "I don't play the odds, I play the man.",
        "That's the difference between you and me. You wanna lost small, I wanna win big.",
        "I don't have dreams, I have goals. And now, it's onto the next one.",
        "Win a no-win situation by rewriting the rules.",
        "I win. That's what I do!",
        "Gloating is fine. You just don't have to suck at it.",
    ];
    return `${quotes[genRandom(quotes.length)]} ~ Harvey Specter`;
};

const thankYou = () => {
    art = `
████████ ██   ██  █████  ███    ██ ██   ██     ██    ██  ██████  ██    ██ ██ 
   ██    ██   ██ ██   ██ ████   ██ ██  ██       ██  ██  ██    ██ ██    ██ ██ 
   ██    ███████ ███████ ██ ██  ██ █████         ████   ██    ██ ██    ██ ██ 
   ██    ██   ██ ██   ██ ██  ██ ██ ██  ██         ██    ██    ██ ██    ██    
   ██    ██   ██ ██   ██ ██   ████ ██   ██        ██     ██████   ██████  ██                                                                              
        `;

    return art;
};

function genBreak() {
    for (let i = 0; i < 2; i++) {
        console.log();
    }
    console.log(`===================================================`);
    for (let i = 0; i < 2; i++) {
        console.log();
    }
}

function execute() {
    genBreak();
    console.log(harveySpecterQuotes());
    genBreak();
    console.log(genMessage());
    genBreak();
    console.log(thankYou());
}
execute();

