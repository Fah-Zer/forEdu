//Твоя задача дополнить фунцию eduFunction таким образом, она принимала три строки в аргументах
//Первая строка хранит игроков, вторая хранит считалочку, третья хранит выбранного игрока
//Данная функция должна выбрать одного игрока среди всех с помощью считалочки

function enableButton() {
    const
        button = document.querySelector('.button')
    button.addEventListener('mouseup', countingRhyme)
}

function countingRhyme() {
    let
        rhyme = document.querySelector('.inputs .rhyme').value,
        players = document.querySelector('.inputs .players').value,
        choosedPlayer = 0
    if (rhyme === '') {
        rhyme = 'Сидел петух на лавочке, Считал свои булавочки: Раз, два, три, это верно будешь ты!'
    }
    if (players === '') {
        players = 'Саша Паша Данис Никита Вадим Витя Миша Костя Даниил Данила'
    }
    eduFunction(players, rhyme, choosedPlayer)
}

function eduFunction(players, rhyme, choosedPlayer) {
    checkResult(players, rhyme, choosedPlayer)
}

function checkResult(players, rhyme, choosedPlayer) {
    let
        resultPlayers = document.querySelector('.result .players'),
        resultRhyme = document.querySelector('.result .rhyme'),
        result = document.querySelector('.result .player')
    if (choosedPlayer !== 0) {
        resultPlayers.innerHTML = 'Все игроки - ' + players
        resultRhyme.innerHTML = 'Считалочка - ' + rhyme
        result.innerHTML = 'Выбранный лошок - это ' + choosedPlayer
    } else {
        result.innerHTML = 'Выбранный лошок - это ты потому что выбранный игрок не может быть 0)))'
    }
}

enableButton()