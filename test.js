playAmbientSound();
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

const dimg = document.getElementById("dialogueimg");
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

//questionMarks 
const harleyq = document.getElementById("harleyspriteq");
const lucasq = document.getElementById("lucasspriteq");
const joq = document.getElementById("jospriteq");
const charlesq = document.getElementById("charlesspriteq");
const k8q = document.getElementById("K8spriteq");

var x = 0;
var game3track = 0;
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
    makedark()
    dialogueTime.style.display  = 'block';
    dialogueName.textContent = "Jimmy";
    dialogueText.textContent = "Hello! My name is Jimmy, and I’m a robot scientist. ";
    bg.style.display = 'block';
    Me.style.display = 'block';

    await waitForClick(dialogueTime);
    dialogueText.textContent = "My biggest dream is to build a cute robot that can befriend humans. I want to model it after my pet cat and name it K8!";
    
    
    await waitForClick(dialogueTime);
    dialogueText.textContent = "To do that, I must make use of Generative Artificial Intelligence (Gen AI).";
        
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Unfortunately, I don’t know much about Gen AI. Will you help me learn more about it so that I can achieve my dream?";
    
    await waitForClick(dialogueTime);
    dialogueName.textContent = "";
    dialogueText.textContent = "Play as Jimmy and help him learn more about Gen AI.";

    await waitForClick(dialogueTime);
    dialogueName.textContent = "Jimmy";
    dialogueText.textContent = "Thank you! I have gathered 4 scientists who will be helping us out. Let’s see what we can learn!";
    
    await waitForClick(dialogueTime);
    dialogueTime.style.display = 'none';
    charlesq.style.display = 'block';
    makelight();
    sprites.forEach(sprite => {
        sprite.style.display = 'block';;
    })

    await waitForClick(sprites[4]);
    charlesq.style.display = 'none';
    makedark();
    dialogueTime.style.display  = 'block';
    dialogueName.textContent = "Charles";
    dialogueText.textContent = "Hi Jimmy! I heard you wanted to learn more about AI?";
    charles.style.display = 'block';
    Me.style.display = 'block';
    await waitForClick(dialogueTime);

    //Do Question Thing Here.. Iforgot about it oops
    dialogueText.textContent = "Great! You’ve come to the right person!";
    await waitForClick(dialogueTime);
    dialogueText.textContent = " But before you learn about Gen AI, you must first understand how AI works.";
    await waitForClick(dialogueTime);
    dialogueText.textContent = "AI is the science of teaching machines to mimic intelligent human behaviors.";
    await waitForClick(dialogueTime);
    dialogueText.textContent = " AI systems are taught and trained using computer programming that learns and adapts.";
    await waitForClick(dialogueTime);
    dialogueText.textContent = "While humans learn by watching, listening, feeling, and experiencing the world around them,";
    await waitForClick(dialogueTime);
    dialogueText.textContent = "AI learns from data, using machine and deep learning. ";
    await waitForClick(dialogueTime);
    dialogueText.textContent = "As it learns, it gets smarter and can understand patterns and make decisions, like humans do.";
    await waitForClick(dialogueTime);
    dialogueText.textContent = "One example would be personalised product recommendations on websites.";
    await waitForClick(dialogueTime);
    dialogueText.textContent = "The AI is trained to analyse customers’ behaviour, preferences and buying patterns. ";
    await waitForClick(dialogueTime);
    dialogueText.textContent = "They can then recommend products and predict customers’ shopping trends.";
    await waitForClick(dialogueTime);
    dialogueText.textContent = " And that’s all you need to know about AI! I think you’re ready to start building K8!";

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

    notai.innerHTML = "NOT AI";
    notai.style.color = "whitesmoke"
    ai.innerHTML = "AI";
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

    notai.innerHTML = "NOT AI";
    notai.style.color = "whitesmoke"
    ai.innerHTML = "AI";
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
    notai.innerHTML = "NOT AI";
    notai.style.color = "whitesmoke"
    ai.innerHTML = "AI";
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
    await waitForClick(document);
    game1.style.display = 'none';
    awardimg.src = "./Media/K8 torso.png"
    awardimgText.innerHTML = "Torso Built!"
    complete.style.display = 'block';

    await waitForClick(document);
    lucasq.style.display = 'block';    
    sprites[5].style.visibility = "visible";
    x += 1;
    makelight();
    complete.style.display = 'none';

    await waitForClick(sprites[2]);
    makedark();
    Me.style.display = "block";
    lucasq.style.display = 'none';
    lucas.style.display = 'block';

    dialogueTime.style.display = "block";
    dialogueName.textContent = "Lucas";
    dialogueText.textContent = "Hey. Charles told me that you’re already familiar with AI. However, Gen AI is a little more complex. I can teach you about it. "
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Great. Let’s start by understanding what exactly Gen AI is.."
    //Do Questions thingy lmao..
    await waitForClick(dialogueTime);
    dialogueText.textContent = " Generative AI is a type of AI that specialises in creating new, original content rather than just processing existing information."
    await waitForClick(dialogueTime);
    dimg.style.display = 'block';
    dialogueText.textContent = "For example, it can generate this image of a cat-dog hybrid that doesn’t exist."
    await waitForClick(dialogueTime);
    dimg.style.display = 'none';
    dialogueText.textContent = "It can also help with daily tasks like drafting emails, planning schedules, and even tell you a joke."
    await waitForClick(dialogueTime);

    dialogueText.textContent = "Do be aware that this also means Gen AI can create untrue information or misleading content that look real, but are not."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Always make sure to fact-check. You can use AI-enabled tools to help identify AI-generated text and images."
    await waitForClick(dialogueTime);
    dialogueName.textContent = "Jimmy"
    dialogueText.textContent = " So it’s like a search engine? It gives you information when you ask for it."
    await waitForClick(dialogueTime);
    dialogueName.textContent = "Lucas"
    dialogueText.textContent = "Not quite. Search engines find information online by listing relevant web pages based on keywords entered in the search bar."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "When you enter another keyword, it will list another set of web pages without relating to earlier search."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Gen AI on the other hand, directly provides composed answers or summaries by understanding and generating human-like text."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "You can continue to chat to finetune and get your desired response. It will build on the earlier response within the same chat. Like chatting with a smart friend. "
    await waitForClick(dialogueTime);
    dialogueText.textContent = " Well, that’s about it for me. You can build the next part of K8 using what I taught you."
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
    
    awardimg.src = "Media/K8 legs.png"
    awardimgText.innerHTML = "Legs Built!"

    await waitForClick(document);
    sprites[5].src = "Media/+ legs.png"
    complete.style.display = 'none';
    x += 1;
    makelight();
    
    joq.style.display = 'block';

    await waitForClick(sprites[3])
    makedark();
    dialogueTime.style.display = 'block';
    lucas.style.display = 'none';
    joq.style.display = 'none';
    charles.style.display = 'none';
    Me.style.display = 'block';
    jo.style.display = 'block';
    dialogueName.textContent = "Jo";
    dialogueText.textContent = "Hi! I heard from Lucas that you know about Gen AI already, but you still need to learn about their common features. "
    await waitForClick(dialogueTime);
    dialogueText.textContent = " Alright! Firstly, let me introduce you to some common Gen AI tools."

    await waitForClick(dialogueTime);
    dialogueText.textContent = " For K8, you just need to know how to use “Text Generation” tools. Let’s focus on ChatGPT and Gemini."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "There are only 7 features you must know. "
    await waitForClick(dialogueTime);
    dimg.style.display = 'block';
    dimg.src = "./Media/chatgpt greetings.png"
    dialogueText.textContent = "Starting with the greetings and introductions. The application will greet you at the start of the conversation."
    await waitForClick(dialogueTime);
    dimg.src = "./Media/gemini response.png"
    dialogueText.textContent = "Next, the response area. The application responds in this area where you can read the text or an image"
    await waitForClick(dialogueTime);
    dimg.src = "./Media/chatgpt text input.png"
    dialogueText.textContent = "Then we have the text input field where you type in messages or questions to the application."
    await waitForClick(dialogueTime);
    dimg.src = "./Media/gemini voice_img.png"
    dialogueText.textContent = "You can also use voice or image input to speak to the application or insert an image. "
    await waitForClick(dialogueTime);
    dimg.src = "./Media/chatgpt history.png"
    dialogueText.textContent = "Your chat history will be saved and you can always go back to view previous chats. "
    await waitForClick(dialogueTime);
    dimg.src = "./Media/gemini settings.png"
    dialogueText.textContent = " Finally, you can go to your account settings and adjust things like language or provide custom instructions."
    await waitForClick(dialogueTime);
    dimg.style.display = "none";
    dialogueText.textContent = "And that’s all 7 features you need! Why not try building the next part of K8 using this knowledge now? "

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
    game3track += 1
    game3option[0].style.border = '0px #A8D3FB solid';
    game3option[0].innerHTML = "<p>Greetings and Introduction</p>";
    game3optionq[4].style.display = 'none'
    game3option[1].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[6])
    game3track += 1
    game3option[1].style.border = '0px #A8D3FB solid';
    game3option[1].innerHTML = "<p>Response Area</p>";
    game3optionq[6].style.display = 'none'
    game3option[2].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[0])
    game3track += 1
    game3option[2].style.border = '0px #A8D3FB solid';
    game3option[2].innerHTML = "<p>Text Input Field</p>";
    game3optionq[0].style.display = 'none'
    game3option[3].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[2])
    game3track += 1
    game3option[3].style.border = '0px #A8D3FB solid';
    game3option[3].innerHTML = "<p>Image Input</p>";
    game3optionq[2].style.display = 'none'
    game3option[4].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[5])
    game3track += 1
    game3option[4].style.border = '0px #A8D3FB solid';
    game3option[4].innerHTML = "<p>Voice Input</p>";
    game3optionq[5].style.display = 'none'
    game3option[5].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[1])
    game3track += 1
    game3option[5].style.border = '0px #A8D3FB solid';
    game3option[5].innerHTML = "<p>Chat History</p>";
    game3optionq[1].style.display = 'none'
    game3option[6].style.border = '5px #A8D3FB solid';

    await waitForClick(game3optionq[3])
    game3track += 1
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
    sprites[5].src = "Media/+ arms.png"
    x += 1;
    harleyq.style.display = 'block';
    makelight();

    await waitForClick(sprites[1]);
    makedark();
    dialogueTime.style.display = 'block';
    harleyq.style.display = 'none';
    Me.style.display = 'block';
    k8.style.display = 'none';
    lucas.style.display = 'none';
    charles.style.display = 'none';
    jo.style.display ='none';
    harley.style.display = 'block';
    dialogueName.textContent = "Harley";
    dialogueText.textContent = "Hello. Jo mentioned that she taught you about the features of Gen AI. But you said you also wanted to learn how to interact with it right? "
    await waitForClick(dialogueTime);
    dialogueText.textContent = " Okay, then let’s begin with understanding what is considered a “good” prompt”."
    await waitForClick(dialogueTime);
    dialogueText.textContent = " A good prompt should have the format of persona, task, audience, and context. "
    await waitForClick(dialogueTime);
    dialogueText.textContent = "For example, rather than telling Gen AI to “Suggest exercises I can do at a park”, you should say "
    await waitForClick(dialogueTime);
    dialogueText.textContent = "“Act as an expert on healthy aging with a focus on physical and mental wellbeing. Give me activities I can do at a nearby park. I am 65 years old with a knee injury.”"
    await waitForClick(dialogueTime);
    dialogueText.textContent = "The persona would be an “expert on healthy aging”, the task is to “give me activities”, the audience is “65 years old”, and the context is a “knee injury”. "
    await waitForClick(dialogueTime);
    dialogueText.textContent = "When writing prompts in this format, you should use natural language and write as if you’re speaking to a human. Express your thoughts in full sentences."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Always provide as much context as possible and be specific, while keeping your questions concise and clear."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "You can also fine-tune your prompts if required or use follow-up prompts to get a better response."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "However, be mindful that Gen AI might not keep your personal information safe."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "When you upload private documents or information on such platforms, it can risk your privacy."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "There may also be copyright issues on the content made by Gen AI, as it could copy others' work."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Hence, always cite information taken from other sources, and credit the Gen AI tool used."
        await waitForClick(dialogueTime);
    dialogueText.textContent = "Now that you know how to properly interact with Gen AI tools, you can finish building the last part of K8."
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
    
    await waitForClick(game4option2);
    await waitForClick(document);
    game4.style.display = 'none';
    complete.style.display = 'block';
    awardimg.src = "Media/K8 head.png"
    awardimgText.innerHTML = "Head Built!"

    await waitForClick(document);
    complete.style.display = 'none';
    k8q.style.display = 'block';    
    sprites[5].src = "Media/k8 full body.png"
    x += 1;
    makelight()

    await waitForClick(sprites[5]);
    makedark();    

    Me.style.display = "block";
    k8q.style.display = 'none';
    k8.style.display = 'block';

    dialogueTime.style.display = "block";
    dialogueName.textContent = "K8";
    dialogueText.textContent = "Hello Jimmy, I’m K8! Thank you for taking the time to learn about Gen AI to build me!"
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Let me help you summarise everything you’ve learnt so far!"
    await waitForClick(dialogueTime);
    dialogueText.textContent = "AI involves teaching machines to mimic intelligent human behavior through machine and deep learning."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "Gen AI can create new content by understanding and generating human-like text."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "It directly provides composed answers and allows you to fine-tune responses to achieve a desired answer."
    await waitForClick(dialogueTime);
    dialogueText.textContent = "There are 7 common features of Gen AI tools."
    await waitForClick(dialogueTime);
    dialogueText.textContent = " To properly interact with Gen AI tools, you must use prompts that follow the format of persona, task, audience, and context."
    await waitForClick(dialogueTime);
    dialogueText.textContent = " And that’s all! I hope you’re able to put this knowledge to good use, even outside of building robots!"
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

function playAmbientSound() {
    const audio = new Audio('./Media/game music.mp3'); // Replace with actual path (Bunch of dumdums didnt update this line :<)
    audio.loop = true;
    audio.play().catch((error) => {
      console.error("User interaction required to play audio", error);
    });
  }
function makedark(){
    bg.style.backgroundImage = "url('Media/darker floor_.png')" 
    sprites[0].src = "./Media/jimmy blackout.png";
    sprites[1].src = "./Media/harley blackout.png";
    sprites[2].src = "./Media/lucas blackout.png";
    sprites[3].src = "./Media/jo blackout.png";
    sprites[4].src = "./Media/charles blackout.png";
    switch (x){
        case 1: sprites[5].src = "./Media/torso blackout.png";break;
        case 2: sprites[5].src = "./Media/+ legs blackout.png";break;
        case 3: sprites[5].src = "./Media/+ arms blackout.png";break;
        case 4: sprites[5].src = "./Media/K8 full body blackout.png";break;
    }
    return;
}
function makelight(){
    bg.style.backgroundImage = "url('Media/floor layout.png')"
    sprites[0].src = "./Media/jimmy.png";
    sprites[1].src = "./Media/harley.png";
    sprites[2].src = "./Media/lucas.png";
    sprites[3].src = "./Media/jo.png";
    sprites[4].src = "./Media/charles.png";

    switch (x){
        case 1: sprites[5].src = "./Media/K8 torso.png";break;
        case 2: sprites[5].src = "./Media/+ legs.png";break;
        case 3: sprites[5].src = "./Media/+ arms.png";break;
        case 4: sprites[5].src = "./Media/K8 full body.png";break;
    }
    return;
}
function game3stuff(){
    switch (game3track){
        case 0 : game3option[0].innerHTML = "<p style='color:red'> 1. Try Again! </p>"; break;
        case 1 : game3option[1].innerHTML = "<p style='color:red'> 2. Try Again! </p>";break;
        case 2 : game3option[2].innerHTML = "<p style='color:red'> 3. Try Again! </p>";break;
        case 3 : game3option[3].innerHTML = "<p style='color:red'> 4. Try Again! </p>";break;
        case 4 : game3option[4].innerHTML = "<p style='color:red'> 5. Try Again! </p>";break;
        case 5 : game3option[5].innerHTML = "<p style='color:red'> 6. Try Again! </p>";break;
        case 6 : game3option[6].innerHTML = "<p style='color:red'> 7. Try Again! </p>";break;
    }
}

startcover.style.display = 'block';
StartGame.addEventListener('click', () => {
    playAmbientSound();
    run();
});
