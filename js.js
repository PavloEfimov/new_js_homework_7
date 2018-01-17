const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

let currentLang = -1;

while (currentLang > 0 || currentLang < 0 || currentLang !== null) {

    currentLang = prompt('en-0', 'введите цифру 0');
    if (currentLang == null) alert('Игра окончена')
    else {
        currentLang = +currentLang;


        if (currentLang > 0 || currentLang < 0) alert('был выбран не доступный язык!')

        else {
            if (currentLang == 0) keyboard.currentLang = '0 это en'

            let arr = [];

            function addKeyboardLayout(alphabet) {

                let arr1 = arr2 = arr3 = '';
                let x = Math.floor(alphabet.length / 3)
                for (var i = 0; i < x; i++) {
                    arr1 += alphabet[i];
                }
                for (var i = x; i < 2 * x; i++) {
                    arr2 += alphabet[i];
                }
                for (var i = 2 * x; i < alphabet.length; i++) {
                    arr3 += alphabet[i];
                }
                arr.push(arr1, arr2, arr3);

            }


            addKeyboardLayout(prompt('введите массив', ''));

            if (currentLang == 0) {
                keyboard.layouts.en.topRow = arr[0];
                keyboard.layouts.en.middleRow = arr[1];
                keyboard.layouts.en.bottomRow = arr[2];
            } else if (currentLang == 1) {
                keyboard.layouts.ru.topRow = arr[0];
                keyboard.layouts.ru.middleRow = arr[1];
                keyboard.layouts.ru.bottomRow = arr[2];
            } else {
                keyboard.layouts.ua.topRow = arr[0];
                keyboard.layouts.ua.middleRow = arr[1];
                keyboard.layouts.ua.bottomRow = arr[2];
            }
        }
    }
}

function createLayout() {
    let topRow = keyboard.layouts.en.topRow;

    let middleRow = keyboard.layouts.en.middleRow;

    let bottomRow = keyboard.layouts.en.bottomRow;

    const top = document.querySelector(".topRow");
    const middle = document.querySelector(".middleRow");
    const bottom = document.querySelector(".bottomRow");
    for (var i = 0; i < topRow.length; i++) {
        top.innerHTML += `<button>${topRow[i]}</button>`
    }

    for (var i = 0; i < middleRow.length; i++) {
        middle.innerHTML += `<button>${middleRow[i]}</button>`
    }
    for (var i = 0; i < bottomRow.length; i++) {
        bottom.innerHTML += `<button>${bottomRow[i]}</button>`
    }
}

createLayout();