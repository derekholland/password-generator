const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/'
]

let randomPassword1 = ''
let randomPassword2 = ''
let password1 = document.getElementById('password1')
let password2 = document.getElementById('password2')

function randomCharacterGenerator() {
	let randomNumber = Math.floor(Math.random() * characters.length)
	return characters[randomNumber]
}

function passwordGenerator1() {
	for (let i = 1; i < 16; i++) {
		let randomChar = randomCharacterGenerator()
		randomPassword1 += randomChar
	}
	password1.textContent = randomPassword1
	randomPassword1 = ''
	let password = passwordGenerator2()
	password2.textContent = password
	randomPassword2 = ''
}

function passwordGenerator2() {
	for (let i = 1; i < 16; i++) {
		let randomChar = randomCharacterGenerator()
		randomPassword2 += randomChar
	}
	return randomPassword2
}
