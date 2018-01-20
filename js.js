const keyboard = {
    topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    middleRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    createLayout: function() {

        const top = document.querySelector(".topRow");
        const middle = document.querySelector(".middleRow");
        const bottom = document.querySelector(".bottomRow");

        keyboard.topRow.map((n, i) => top.innerHTML += `<button>${keyboard.topRow[i]}</button>`)
        keyboard.middleRow.map((n, i) => middle.innerHTML += `<button>${keyboard.middleRow[i]}</button>`)
        keyboard.bottomRow.map((n, i) => bottom.innerHTML += `<button>${keyboard.bottomRow[i]}</button>`)
    }
};


keyboard.createLayout();