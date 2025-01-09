//StartGame
const startcover = document.getElementById("startcover");
const StartGame = document.getElementById("startgame")
const bg = document.getElementById("Background")

//Talking Stuff
const dialogueTime = document.getElementById("dialogueTime");
const dialogueName = document.getElementById("dialogueName");
const dialogueText = document.getElementById("dialogueText");

const Me = document.getElementById("Me");
const harley = document.getElementById("harley");
const lucas = document.getElementById("lucas");
const jo = document.getElementById("jo");
const charles = document.getElementById("charles");
const k8 = document.getElementById("K8");

const sprites = document.querySelectorAll(".sprite");

//PreGame
const gameTime = document.getElementById("gameTime");
const gameexplain = document.getElementById("gameExplain");
const explaintext = document.getElementById("Explaintext");

//Game 1
const game1 = document.getElementById("game1");
const game1t = document.getElementById("game1t");
const game1l = document.getElementById("game1l");
const ai = document.getElementById("ai");
const notai = document.getElementById("notai");

//Game 2
const game2 = document.getElementById("game2");
const game2question = document.getElementById("game2question")
const game2box1 = document.getElementById("game2box1");
const game2label = document.getElementById("game2label");
const game2box2 = document.getElementById("game2box2");
const game2again = document.getElementById("game2again");
const game1box1l = document.getElementById("game2box1l");
const game1box2l = document.getElementById("game2box2l");

//Game 3
const game3 = document.getElementById("game3");
const game3option = document.querySelectorAll(".option");
const game3optionq = document.querySelectorAll(".optionq");


//Game 4
const game4 = document.getElementById("game4");
const game4question = document.getElementById("question");
const tryagain = document.getElementById("tryagain");
const game4option1 = document.getElementById("option1");
const game4option2 = document.getElementById("option2");

//Post Game
const complete = document.getElementById("complete");
const awardimg = document.getElementById("awardimg");
const awardimgText= document.getElementById("awardText");

//end 
const endcover = document.getElementById("endcover");
const playagain = document.getElementById("Playagain");
// Initialize game states and events// Game state management
function waitForClick(element) {
    return new Promise(resolve => {
        const onClick = () => {
            element.removeEventListener('click', onClick);
            resolve();
        };
        element.addEventListener('click', onClick);
    });
}
async function run(){

    startcover.style.display = 'none';
    bg.style.backgroundImage = 'url("Media/darker floor_.png")';
    dialogueTime.style.display  = 'block';
    dialogueName.textContent = "Jimmy";
    dialogueText.textContent = "Hey guys! I’m Jimmy, a robot scientist. I want to build a robot that uses Gen AI.";
    bg.style.display = 'block';
    Me.style.display = 'block';

    await waitForClick(dialogueTime);
    dialogueText.textContent = "Unfortunately, I don’t know much about Gen AI. Will you help me learn more about it?";
    
    await waitForClick(dialogueTime);
    dialogueName.textContent = "";
    dialogueText.textContent = "Play as Jimmy and help him learn more about Gen AI.";
    
    await waitForClick(dialogueTime);
    dialogueName.textContent = "Jimmy";
    dialogueText.textContent = "Great! I have gathered 4 scientists who will be helping us out, let’s see what we can learn!";
    
    await waitForClick(dialogueTime);
    dialogueTime.style.display = 'none';
    bg.style.backgroundImage = 'url("Media/floor layout.png")';
    sprites.forEach(sprite => {
        sprite.style.display = 'block';;
    })

    await waitForClick(sprites[4]);

    bg.style.backgroundImage = 'url("Media/darker floor_.png")';
    dialogueTime.style.display  = 'block';
    dialogueName.textContent = "Charles";
    dialogueText.textContent = "Hi Jimmy! I heard you wanted to learn more about AI?";
    charles.style.display = 'block';
    Me.style.display = 'block';
    await waitForClick(dialogueTime);

    //Do Question Thing Here.. Iforgot about it oops
    dialogueText.textContent = "Great! You’ve come to the right person!";
    await waitForClick(dialogueTime);
    charles.style.display = 'none';
    Me.style.display = 'none';
    dialogueTime.style.display  = 'none';
    gameTime.style.display = 'block';

    await waitForClick(gameTime);
    gameTime.style.display = 'none';
    gameexplain.style.display = 'block';
    explaintext.textContent = "In the box at the top, a function/task will be given. Decide whether it is done by AI or not by clicking either “AI” or “Not AI” in the boxes below."

    await waitForClick(gameexplain);
    gameexplain.style.display = 'none';
    game1.style.display = 'block'
    game1t.textContent = "Face ID"

    var li = document.createElement('li');
    game1l.appendChild(li);
    li.innerHTML = li.innerHTML + "Scans and learns your unique facial features with a 3D map.";
    
    var li2 = document.createElement('li');
    game1l.appendChild(li2);
    li2.innerHTML = li2.innerHTML + "Adapts to changes in your appearance.";

    var li3 = document.createElement('li');
    li3.innerHTML = li3.innerHTML + "Ensures only you can unlock your device by comparing your face with stored data.";
    game1l.appendChild(li3);

    await waitForClick(ai);

    notai.innerHTML = "Not Ai";
    notai.style.color = "whitesmoke"
    ai.innerHTML = "Ai";
    ai.style.color = "whitesmoke"
    game1t.textContent = "Music Shuffle"
    game1l.innerHTML = "";

    var li = document.createElement('li');
    game1l.appendChild(li);
    li.innerHTML = li.innerHTML + "Plays songs in a random order from your playlist.";
    
    var li2 = document.createElement('li');
    game1l.appendChild(li2);
    li2.innerHTML = li2.innerHTML + "Uses a shuffle algorithm to ensure songs are completely randomised.";

    var li3 = document.createElement('li');
    li3.innerHTML = li3.innerHTML + "Does not consider your listening habits.";
    game1l.appendChild(li3);

    await waitForClick(notai);

    notai.innerHTML = "Not Ai";
    notai.style.color = "whitesmoke"
    ai.innerHTML = "Ai";
    ai.style.color = "whitesmoke"
    game1t.textContent = "Google Search"
    game1l.innerHTML = "";
   var li = document.createElement('li');
    game1l.appendChild(li);
    li.innerHTML = "Ranks millions of pages by relevance using algorithms.";
    
    var li2 = document.createElement('li');
    game1l.appendChild(li2);
    li2.innerHTML = "Tailor results based on your past searches.";

    var li3 = document.createElement('li');
    li3.innerHTML = "Interprets your search terms using Natural Language Processing (NLP).";
    game1l.appendChild(li3);

    await waitForClick(ai);
    notai.innerHTML = "Not Ai";
    notai.style.color = "whitesmoke"
    ai.innerHTML = "Ai";
    ai.style.color = "whitesmoke"
    game1t.textContent = "Barcode Scanning"
    game1l.innerHTML = "";
    var li = document.createElement('li');
    game1l.appendChild(li);
    li.innerHTML = "Reads the barcode on items to retrieve price and product information.";
    
    var li2 = document.createElement('li');
    game1l.appendChild(li2);
    li2.innerHTML = "Relies on laser photo detectors and pre-programmed database matching.";

    var li3 = document.createElement('li');
    li3.innerHTML = "Does not analyse your purchase patterns.";
    game1l.appendChild(li3);
    await waitForClick(notai);
    game1.style.display = 'none';

    complete.style.display = 'block';
    awardimg.src = "Media/K8 torso.png"
    awardimgText.innerHTML = "Torso Built!"

    await waitForClick(document);
    complete.style.display = 'none';
    bg.style.backgroundImage = 'url("Media/floor layout.png")';

    await waitForClick(sprites[2]);
    bg.style.backgroundImage = 'url("Media/darker floor_.png")';
    Me.style.display = "block";
    lucas.style.display = 'block';

    dialogueTime.style.display = "block";
    dialogueName.textContent = "Lucas";
    dialogueText.textContent = "I heard that Charles taught you about AI already."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Now I’ll teach you the differences between AI and Gen AI."
    //Do Questions thingy lmao..
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Great. Let’s start by understanding what Gen AI is."
    
    await waitForClick(dialogueTime);
    charles.style.display = 'none';
    Me.style.display = 'none';
    dialogueTime.style.display  = 'none';
    gameTime.style.display = 'block';

    await waitForClick(gameTime);
    gameTime.style.display = 'none';
    gameexplain.style.display = 'block';
    explaintext.textContent = "In the box at the top, a feature will be given. Decide whether it is a feature of Generative AI or Search Engines by clicking on the section it belongs to."

    await waitForClick(gameexplain);
    game2again.style.display = 'none';
    gameexplain.style.display = 'none';
    game2.style.display = 'block';

    await waitForClick(game2box1);
    game2again.style.display = 'none';
    var li = document.createElement('li');
    game1box1l.appendChild(li);
    li.innerHTML = "Create new and original content like images, music and text.";
    game2question.innerHTML = "<p>Find information online by listing relevant web pages based on keywords entered in the search bar.</p>"
    
    await waitForClick(game2box2);
    game2again.style.display = 'none';
    var li = document.createElement('li');
    game1box2l.appendChild(li);
    li.innerHTML = "Find information online by listing relevant web pages based on keywords entered in the search bar.";
    game2question.innerHTML = "<p>May produce errors and false stories when it 'hallucinates'.</p>"
    
    await waitForClick(game2box1);
    game2again.style.display = 'none';
    var li = document.createElement('li');
    game1box1l.appendChild(li);
    li.innerHTML = "May produce errors and false stories when it 'hallucinates'.";
    game2question.innerHTML = "<p>Will not relate to earlier searches when another keyword is entered.</p>"
    
    await waitForClick(game2box2);
    game2again.style.display = 'none';
    var li = document.createElement('li');
    game1box2l.appendChild(li);
    li.innerHTML = "Will not relate to earlier searches when another keyword is entered.";
    game2question.innerHTML = "<p>Directly provides composed answers by understanding and generating human-like text.</p>"
    
    await waitForClick(game2box1);
    game2again.style.display = 'none';
    game2question.style.display = 'none';
    var li = document.createElement('li');
    game1box2l.appendChild(li);
    li.innerHTML = "Directly provides composed answers by understanding and generating human-like text.";    
    
    await waitForClick(document);
    game2.style.display = "none";
    complete.style.display = 'block';
    awardimg.src = "Media/k8 legs.png"
    awardimgText.innerHTML = "Legs Built!"

    await waitForClick(document);
    complete.style.display = 'none';
    bg.style.backgroundImage = 'url("Media/floor layout.png")';

    await waitForClick(sprites[3])
    bg.style.backgroundImage = 'url("Media/darker floor_.png")';
    dialogueTime.style.display = 'block';
    lucas.style.display = 'none';
    charles.style.display = 'none';
    Me.style.display = 'block';
    jo.style.display = 'block';
    dialogueName.textContent = "Jo";
    dialogueText.textContent = "Hi! You wanted to learn about the common features of Gen AI right?"

    //Do Button Logic...
    await waitForClick(dialogueTime);
    charles.style.display = 'none';
    Me.style.display = 'none';
    dialogueTime.style.display  = 'none';
    gameTime.style.display = 'block';

    await waitForClick(gameTime);
    gameTime.style.display = 'none';
    gameexplain.style.display = 'block';
    explaintext.textContent = "On the left, features of Gen AI tools are circled and numbered. Match the number to the feature by clicking on the names on the right."

    await waitForClick(gameexplain);
    gameexplain.style.display = 'none';
    game3.style.display = 'block';
    game3option[0].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[4])
    game3option[0].style.border = '0px #A8D3FB solid';
    game3option[0].innerHTML = "<p>Greetings and Introduction</p>";
    game3optionq[4].style.display = 'none'
    game3option[1].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[6])
    game3option[1].style.border = '0px #A8D3FB solid';
    game3option[1].innerHTML = "<p>Response Area</p>";
    game3optionq[6].style.display = 'none'
    game3option[2].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[0])
    game3option[2].style.border = '0px #A8D3FB solid';
    game3option[2].innerHTML = "<p>Text Input Field</p>";
    game3optionq[0].style.display = 'none'
    game3option[3].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[2])
    game3option[3].style.border = '0px #A8D3FB solid';
    game3option[3].innerHTML = "<p>Image Input</p>";
    game3optionq[2].style.display = 'none'
    game3option[4].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[5])
    game3option[4].style.border = '0px #A8D3FB solid';
    game3option[4].innerHTML = "<p>Voice Input</p>";
    game3optionq[5].style.display = 'none'
    game3option[5].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[1])
    game3option[5].style.border = '0px #A8D3FB solid';
    game3option[5].innerHTML = "<p>Chat History</p>";
    game3optionq[1].style.display = 'none'
    game3option[6].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[3])
    game3option[6].style.border = '0px #A8D3FB solid';
    game3option[6].innerHTML = "<p>Account Settings</p>";
    game3optionq[3].style.display = 'none'
    
    await waitForClick(document)
    game3.style.display = 'none';
    complete.style.display = 'block';
    awardimg.src = "Media/K8 arms.png"
    awardimgText.innerHTML = "Arms Built!"

    await waitForClick(document);
    complete.style.display = 'none';
    bg.style.backgroundImage = 'url("Media/floor layout.png")';

    await waitForClick(sprites[1]);
    bg.style.backgroundImage = 'url("Media/darker floor_.png")';
    dialogueTime.style.display = 'block';
    Me.style.display = 'block';
    k8.style.display = 'none';
    lucas.style.display = 'none';
    charles.style.display = 'none';
    jo.style.display ='none';
    harley.style.display = 'block';
    dialogueName.textContent = "Harley";
    dialogueText.textContent = "Hey. You mentioned that you wanted me to teach you how to interact with Gen AI?"

    await waitForClick(dialogueTime);
    dialogueText.textContent = "Okay. Let’s begin with simple prompts first."

    await waitForClick(dialogueTime);
    harley.style.display = 'none';
    Me.style.display = 'none';
    dialogueTime.style.display  = 'none';
    gameTime.style.display = 'block';

    await waitForClick(gameTime);
    gameTime.style.display = 'none';
    gameexplain.style.display = 'block';
    explaintext.textContent = "In the box at the top, a situation will be given. Select the correct prompt below that will receive the best response from a Gen AI tool."

    await waitForClick(gameexplain);
    gameexplain.style.display = 'none';

    game4.style.display = 'block';
    game4question.innerHTML = "<p>It’s your best friend’s birthday tomorrow! You want to bake a cake for him, but you don’t know how to.</p>"
    game4option1.innerHTML = "<p>I’m a 22 year old looking to bake a birthday cake for my friend who has a sweet tooth and loves strawberries. Guide me through the process of buying ingredients, baking the cake and storing the cake. </p>";
    game4option2.innerHTML = "<p>Teach me how to bake a strawberry birthday cake.</p>"

    await waitForClick(game4option1)
    tryagain.style.display = 'none';
    game4question.innerHTML = "<p>You want to make healthy meals weekly for your 5-year-old girl but are out of ideas.</p>"
    game4option1.innerHTML = "<p>I'm a mom looking to create a healthy weekly meal plan for my picky 5-year-old daughter. Generate a plan with breakfast, lunch, dinner, and snack options for each day, presented in a bulleted list.</p>";
    game4option2.innerHTML = "<p>Give me ideas on what to cook for my daughter.</p>"
    await waitForClick(game4option1)
    tryagain.style.display = 'none';
    game4question.innerHTML = "<p>You are planning a vacation to Bangkok with your wife, but unsure of what to do there with her.</p>";
    game4option1.innerHTML = "<p>List some things to do in Bangkok for 3 days.</p>";
    game4option2.innerHTML = "<p>I‘m a husband planning a 3-day 2-night trip to Bangkok with my wife. Create a fun and engaging itinerary in bullet points, including a mix of cultural experiences and suggestions for local restaurants.</p>"
    
    await waitForClick(game4option2)
    game4.style.display = 'none';
    complete.style.display = 'block';
    awardimg.src = "Media/head.png"
    awardimgText.innerHTML = "Torso Built!"

    await waitForClick(document);
    complete.style.display = 'none';
    bg.style.backgroundImage = 'url("Media/floor layout.png")';

    await waitForClick(sprites[5]);
    bg.style.backgroundImage = 'url("Media/darker floor_.png")';
    Me.style.display = "block";
    k8.style.display = 'block';

    dialogueTime.style.display = "block";
    dialogueName.textContent = "K8";
    dialogueText.textContent = "Hello, I’m K8! Thank you for taking the time to learn about Gen AI to build me!"
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Let’s summarise everything you’ve learnt so far! "
    await waitForClick(dialogueTime);
    bg.style.display = 'none';
    endcover.style.display = 'block';
    await waitForClick(playagain)
    await waitForClick(playagain)
    location.reload();
    return;
}
function wrong(huh){
    switch (huh){
        case "notai" : notai.textContent = "Try Again"; notai.style.color = "red"; break;
        case "ai" : ai.textContent = "Try Again"; ai.style.color = "red"; break;
    }
    return;
}
function game2wrong(){
    game2again.style.display = 'block';
}
function game4again(){
    tryagain.style.display = 'block';
}
startcover.style.display = 'block';
StartGame.addEventListener('click', () => {
    run();
});