const dataChar = document.getElementById("charContainer");

fetch('./chars.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(chars => {
            dataChar.insertAdjacentHTML('beforeend', `<button type="button" onclick="getId(this)" class="charBtn" id="${chars.devNicknames}">
                <img style="color: transparent;" onload="this.style.color='red'" onerror="this.style.color="red" alt="${chars.enName} ${chars.jpName}" title="${chars.enName}\n${chars.jpName}" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${chars.devNicknames}/ui/square_132_132_0.png" class="units" draggable="false">
            </button>`)
            })
        })



function modalBtn() {
        document.getElementById("charModal").classList.remove('show');
    }


function getId(unit) {
    document.getElementById("kachidoki").innerHTML = `<p class="artName">Idle</p>
    <img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/kachidoki.gif">`
    document.getElementById("walk_front").innerHTML = `<p class="artName">Walk Front</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/walk_front.gif">`
    document.getElementById("walk_back").innerHTML = `<p class="artName">Walk Back</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/walk_back.gif">`
    document.getElementById("skill_ready").innerHTML = `<p class="artName">Skill Cast Animation</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/skill_ready.gif">`
    document.getElementById("special").innerHTML = `<p class="artName">Summon Animation</p><img class="gifArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/pixelart/animated/special.gif">`
    document.getElementById("full_shot_0").innerHTML = `<p class="artName">Base Art</p><img class="fullArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/full_shot_1440_1920_0.png">`
    document.getElementById("full_shot_1").innerHTML = `<p class="artName">Awakened Art</p><img class="fullArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/full_shot_1440_1920_1.png">`
    document.getElementById("square_0").innerHTML = `<p class="artName">Base Icon</p><img class="squareArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/square_0.png">`
    document.getElementById("square_1").innerHTML = `<p class="artName">Awakened Icon</p><img class="squareArt" src="https://raw.githubusercontent.com/vivaldi1794/worldflipper-archive/main/assets/character/${unit.id}/ui/square_1.png">`
    document.getElementById("charModal").classList.add('show');  
}   


