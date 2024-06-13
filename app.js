const dataChar = document.getElementById("charContainer");
const scroll = document.getElementsByClassName('modalContainer');


let charsJSON;
const getData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/vivaldi1794/vivaldi1794/main/chars.json");
    const data = await response.json();
    charsJSON = data;
    data.forEach(unit => {
        dataChar.insertAdjacentHTML('beforeend', `<button type="button" onclick="getdevName(this); showModal();" class="charBtn" id="${unit.devNicknames}">
            <img style="font-size: 11px; width: 100px; height: 100px;" alt="${unit.enName}" title="${unit.enName}\n${unit.jpName}" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.devNicknames}/ui/square_132_132_0.png" class="units" draggable="false">
        </button>`)
        })
    return data;
}
( async () => {
    await getData();
})();


function modalBtn() {
    document.getElementById("charModal").classList.remove('show');
    document.getElementById("general").classList.remove('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("story").classList.remove('selected');
}

var tempdevname = "";
var tempenName = "";
var tempjpName = "";
var tempenTitle = "";
var templeaderBuff = "";
var tempskill = "";
var tempskillCost = "";
var tempability1 = "";
var tempability2 = "";
var tempability3 = "";
var tempability4 = "";
var tempability5 = "";
var tempability6 = "";
var tempattribute = "";
var temprole = "";
var tempstance = "";
var temprace = "";
var tempgender = "";


function showModal() {
    getenName()
    document.getElementById("charenName").innerHTML = tempenName;
    showGeneral()
    document.getElementById("charModal").classList.add('show');
}


function getdevName(unit) {
    return tempdevname = unit.id;
}
function getenName() {
    let enName = charsJSON.find(unit => unit.devNicknames === tempdevname).enName;
    return tempenName = enName;
}
function getjpName() {
    let jpName = charsJSON.find(unit => unit.devNicknames === tempdevname).jpName;
    return tempjpName = jpName;
}
function getenTitle() {
    let enTitle = charsJSON.find(unit => unit.devNicknames === tempdevname).enTitle;
    return tempenTitle = enTitle;
}
function getleaderBuff() {
    let leaderBuff = charsJSON.find(unit => unit.devNicknames === tempdevname).leaderBuff;
    return templeaderBuff = leaderBuff;
}
function getskill() {
    let skill = charsJSON.find(unit => unit.devNicknames === tempdevname).skill;
    return tempskill = skill;
}
function getskillCost() {
    let skillCost = charsJSON.find(unit => unit.devNicknames === tempdevname).skillCost;
    return tempskillCost = skillCost;
}
function getability1() {
    let ability1 = charsJSON.find(unit => unit.devNicknames === tempdevname).ability1;
     return tempability1 = ability1;
}
function getability2() {
    let ability2 = charsJSON.find(unit => unit.devNicknames === tempdevname).ability2;
    return tempability2 = ability2;
}
function getability3() {
    let ability3 = charsJSON.find(unit => unit.devNicknames === tempdevname).ability3;
    return tempability3 = ability3;
}
function getability4() {
    let ability4 = charsJSON.find(unit => unit.devNicknames === tempdevname).ability4;
    return tempability4 = ability4;
}
function getability5() {
    let ability5 = charsJSON.find(unit => unit.devNicknames === tempdevname).ability5;
    return tempability5 = ability5;
}
function getability6() {
    let ability6 = charsJSON.find(unit => unit.devNicknames === tempdevname).ability6;
   return tempability6 = ability6;
}   
function getattribute() {
    let attribute = charsJSON.find(unit => unit.devNicknames === tempdevname).attribute;
    return tempattribute = attribute;
}
function getrole() {
    let role = charsJSON.find(unit => unit.devNicknames === tempdevname).role;
    return temprole = role;
}
function getstance() {
    let stance = charsJSON.find(unit => unit.devNicknames === tempdevname).stance;
    return tempstance = stance;
}
function getrace() {
    let race = charsJSON.find(unit => unit.devNicknames === tempdevname).race;
    return temprace = race;
}
function getgender() {
    let gender = charsJSON.find(unit => unit.devNicknames === tempdevname).gender;
    return tempgender = gender;
}


function showGeneral() {
    document.getElementById("general").classList.add('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("audio").classList.remove('selected');
    document.getElementById("story").classList.remove('selected');
    getenName() 
    getjpName()
    getenTitle()
    getleaderBuff()
    getskill()
    getskillCost()
    getability1()
    getability2()
    getability3()
    getability4()
    getability5()
    getability6()
    getattribute()
    getrole()
    getstance()
    getrace()
    getgender()
    scroll[0].scrollTop = 0;
    document.getElementById("infoContainer").innerHTML = `
    <div class="charInfoContainer">
        <img class="infoIcon" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/pixelart/animated/kachidoki.gif">
        <p class="charTitle">${tempenTitle}</p>
        <p class="charName">${tempenName} ${tempjpName}<p>
        <br>
        <p><span class="infoTitle">Element: </span>${tempattribute}</p>
        <p><span class="infoTitle">Class: </span>${temprole}</p>
        <br>
        <p><span class="infoTitle">Skill:<br></span>${tempskill}</p>
        <p><span class="infoTitle">Skill Gauge: </span>${tempskillCost}</p>
        <br>
        <p><span class="infoTitle">Leader Ability:<br></span>${templeaderBuff}</p>
        <br>
        <br>
        <p><span class="infoTitle">Ability 1:<br></span>${tempability1}</p>
        <br>
        <p><span class="infoTitle">Ability 2:<br></span>${tempability2}</p>
        <br>
        <p><span class="infoTitle">Ability 3:<br></span>${tempability3}</p>
        <br>
        <p><span class="infoTitle">Ability 4:<br></span>${tempability4}</p>
        <br>
        <p><span class="infoTitle">Ability 5:<br></span>${tempability5}</p>
        <br>
        <p><span class="infoTitle">Ability 6:<br></span>${tempability6}</p>
        <br>
        <br>
        <p><span class="infoTitle">Stance: </span>${tempstance}</p>
        <p><span class="infoTitle">Race: </span>${temprace}</p>
        <p><span class="infoTitle">Gender: </span>${tempgender}</p>
        <p><span class="infoTitle">VA: </span></p>
        <p><span class="infoTitle">DevName: </span>${tempdevname}</p>
    </div>`
}


function showAssets() {
    document.getElementById("general").classList.remove('selected');
    document.getElementById("assets").classList.add('selected');
    document.getElementById("audio").classList.remove('selected');
    document.getElementById("story").classList.remove('selected');
    scroll[0].scrollTop = 0;
    document.getElementById("infoContainer").innerHTML = `
            <div id="special" class="special gifContainer"><p class="artName">Summon Animation</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/pixelart/animated/special.gif"></div>
            <div id="skill_ready" class="skill_ready gifContainer"><p class="artName">Skill Cast Animation</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/pixelart/animated/skill_ready.gif"></div>
            <div id="kachidoki" class="kachidoki gifContainer"><p class="artName">Idle</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/pixelart/animated/kachidoki.gif"></div>
            <div id="walk_front" class="walk_front gifContainer"><p class="artName">Walk Front</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/pixelart/animated/walk_front.gif"></div>
            <div id="walk_back" class="walk_back gifContainer"><p class="artName">Walk Back</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/pixelart/animated/walk_back.gif"></div>
            <div id="full_shot_0" class="art full_shot_0 fullartContainer"><p class="artName">Base Art</p><img class="fullArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/ui/full_shot_1440_1920_0.png"></div>
            <div id="full_shot_1" class="art full_shot_1 fullartContainer"><p class="artName">Awakened Art</p><img class="fullArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/ui/full_shot_1440_1920_1.png"></div>
            <div id="square_0" class="square_0 squareContainer"><p class="artName">Base Icon</p><img class="squareArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/ui/square_0.png"></div>
            <div id="square_1" class="square_1 squareContainer"><p class="artName">Awakened Icon</p><img class="squareArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/ui/square_1.png"></div>`
}


function showAudio() {
    document.getElementById("general").classList.remove('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("audio").classList.add('selected');
    document.getElementById("story").classList.remove('selected');
    scroll[0].scrollTop = 0;
    document.getElementById("infoContainer").innerHTML = `
    <div id="voiceContainer">
        <div class="artName voiceName">Battle</div>
        <audio id="battle_start_0" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/battle_start_0.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('battle_start_0').play();" class="voiceButton" >battle_start_0</button>
        <audio id="battle_start_1" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/battle_start_1.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('battle_start_1').play();" class="voiceButton" >battle_start_1</button>
        <audio id="outhole_0" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/outhole_0.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('outhole_0').play();" class="voiceButton" >outhole_0</button>
        <audio id="outhole_1" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/outhole_1.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('outhole_1').play();" class="voiceButton" >outhole_1</button>
        <audio id="power_flip_0" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/power_flip_0.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('power_flip_0').play();" class="voiceButton" >power_flip_0</button>
        <audio id="power_flip_1" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/power_flip_1.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('power_flip_1').play();" class="voiceButton" >power_flip_1</button>
        <audio id="skill_0" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/skill_0.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('skill_0').play();" class="voiceButton" >skill_0</button>
        <audio id="skill_1" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/skill_1.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('skill_1').play();" class="voiceButton" >skill_1</button>
        <audio id="win_0" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/win_0.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('win_0').play();" class="voiceButton" >win_0</button>
        <audio id="win_1" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/win_1.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('win_1').play();" class="voiceButton" >win_1</button>
        <audio id="skill_ready" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/battle/skill_ready.mp3" preload="auto"></audio>
        <button onclick="document.getElementById('skill_ready').play();" class="voiceButton" >skill_ready</button>
        <div class="artName voiceName">Home</div>
    `
    fetch("https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/"+tempdevname+"/voice/voiceLines.json")
    .then(res => res.json())
    .then(data => {
        Object.keys(data).forEach(key => {
            document.getElementById("infoContainer").insertAdjacentHTML('beforeend', `
            <audio id="${key}" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${tempdevname}/voice/${key}.mp3" preload="auto"></audio>
            <button onclick="document.getElementById('${key}').play();" class="voiceButton">${key.slice(5)}</button>`)
        });
        })
    document.getElementById("infoContainer").insertAdjacentHTML('beforeend', `</div>`)
}


function showStory() {
    document.getElementById("general").classList.remove('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("audio").classList.remove('selected');
    document.getElementById("story").classList.add('selected');
    scroll[0].scrollTop = 0;
    getenName()
    document.getElementById("infoContainer").innerHTML = `<p>${tempenName}</p>Story`
}


