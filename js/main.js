const allNames = ['Margot', 'Jeanne', 'Jasper', 'Oli', 'Kyra', 'Max', 'Jos', 'Judith', 'Roos', 'Rose', 'Fem', 'Emma', 'Mendi', 'Bel'];

const santas = {
    'Margot': {
        santaFor: 'Jeanne'
    },
    'Jeanne': {
        santaFor: 'Margot'
    },
    'Jasper': {
        santaFor: 'Oli'
    },
    'Oli': {
        santaFor: 'Jasper'
    },
    'Kyra': {
        santaFor: 'Max'
    },
    'Max': {
        santaFor: 'Kyra'
    },
    'Jos': {
        santaFor: 'Judith'
    },
    'Judith': {
        santaFor: 'Jos'
    },
    'Roos': {
        santaFor: 'Rose'
    },
    'Rose': {
        santaFor: 'Roos'
    },
    'Fem': {
        santaFor: 'Emma'
    },
    'Emma': {
        santaFor: 'Fem'
    },
    'Mendi': {
        santaFor: 'Bel'
    },
    'Bel': {
        santaFor: 'Mendi'
    }
}

const namesOutputContainer = document.getElementById('namesOutputContainer');

allNames.sort();
allNames.forEach(name => {
    const btn = document.createElement('button');
    btn.innerHTML = name;
    btn.setAttribute('class', 'nameBtn');
    btn.setAttribute('onclick', `getSanta("${name}")`);
    namesOutputContainer.appendChild(btn);
});

function getSanta(name) {
    var popupWindow = window.open('', `Secret santa`, 'width=350, height=50');
    popupWindow.document.write(`<p style="font-size: 18px; letter-spacing: 1px;">${name} you are secret santa for <b>${santas[name].santaFor}</b></p>`);
    window.setTimeout(function() {
        popupWindow.close()
    }, 5000);
}