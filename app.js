const dataChar = document.getElementById("charContainer");
var tempdevname = "";

fetch('./chars.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(chars => {
            dataChar.insertAdjacentHTML('beforeend', `<button type="button" onclick="getID(this)" class="charBtn" id="${chars.devNicknames}">
                <img style="color: transparent;" onload="this.style.color='red'" onerror="this.style.color="red" alt="${chars.enName} ${chars.jpName}" title="${chars.enName}\n${chars.jpName}" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${chars.devNicknames}/ui/square_132_132_0.png" class="units" draggable="false">
            </button>`)
            })
        })


function modalBtn() {
    document.getElementById("charModal").classList.remove('show');
    document.getElementById("general").classList.remove('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("story").classList.remove('selected');
}


function getID(unit) {
    let devname = unit.id;
    document.getElementById("charModal").classList.add('show');
    document.getElementById("charenName").innerHTML = `${devname}`
    showGeneral()
    return tempdevname = unit.id;
    /*document.getElementById("general").classList.add('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("story").classList.remove('selected');
    document.getElementById("infoContainer").innerHTML = `General Tab.`
    document.getElementById("kachidoki").innerHTML = `<p class="artName">Idle</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/kachidoki.gif">`
    document.getElementById("walk_front").innerHTML = `<p class="artName">Walk Front</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/walk_front.gif">`
    document.getElementById("walk_back").innerHTML = `<p class="artName">Walk Back</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/walk_back.gif">`
    document.getElementById("skill_ready").innerHTML = `<p class="artName">Skill Cast Animation</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/skill_ready.gif">`
    document.getElementById("special").innerHTML = `<p class="artName">Summon Animation</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/special.gif">`
    document.getElementById("full_shot_0").innerHTML = `<p class="artName">Base Art</p><img class="fullArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/full_shot_1440_1920_0.png">`
    document.getElementById("full_shot_1").innerHTML = `<p class="artName">Awakened Art</p><img class="fullArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/full_shot_1440_1920_1.png">`
    document.getElementById("square_0").innerHTML = `<p class="artName">Base Icon</p><img class="squareArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/square_0.png">`
    document.getElementById("square_1").innerHTML = `<p class="artName">Awakened Icon</p><img class="squareArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/square_1.png">`*/
}


function showGeneral() {
    document.getElementById("general").classList.add('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("story").classList.remove('selected');
    document.getElementById("infoContainer").innerHTML = `WIP General Tab`
}

function showAssets() {
    document.getElementById("general").classList.remove('selected');
    document.getElementById("assets").classList.add('selected');
    document.getElementById("story").classList.remove('selected');
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


function showStory() {
    document.getElementById("general").classList.remove('selected');
    document.getElementById("assets").classList.remove('selected');
    document.getElementById("story").classList.add('selected');
    document.getElementById("infoContainer").innerHTML = `WIP Story Tab` 
}


