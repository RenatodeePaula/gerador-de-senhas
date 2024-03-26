//===================== Seleção de Elementos =====================
const generatePasswordButton = document.querySelector('#generate-password');
const generatePasswordElement = document.querySelector('#generated-password');

//===================== Funções =====================
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSYmbol = () => {
    const sylbols = "(){}[]=<>/,.!@#$%&*+-";
    return sylbols[Math.floor(Math.random() * sylbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSYmbol) => {
    let password = "";

    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase, 
        getNumber,
        getSYmbol
    ];

    for (let i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    };
        password = password = password.slice(0, passwordLength);
        generatePasswordElement.style.display = "block";
        generatePasswordElement.querySelector("h4").innerText = password;
};
//===================== Eventos ===================== 
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase, 
        getNumber,
        getSYmbol
    );    
});
