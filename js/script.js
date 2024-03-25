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
//===================== Eventos =====================
 
generatePasswordButton.addEventListener("click", () => {
   console.log( getSYmbol());
});
