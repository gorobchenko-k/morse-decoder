const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const morse_symbol = {
        '10': '.',
        '11': '-'
    }

    let str = '';
    for (let index = 0; index < expr.length; index += 10) {
        const char = expr.slice(index, index + 10);
        if (char === '**********') {
            str += ' ';
            continue;
        }
        
        let letter = '';
        for (let j = char.length - 1; j > 0; j -= 2) {
            if (morse_symbol[char[j - 1] + char[j]]) letter = morse_symbol[char[j - 1] + char[j]] + letter;
        }
        str += MORSE_TABLE[letter];
    }
    return str;
}

module.exports = {
    decode
}