let language = prompt("Какой язык планируешь изучить?");

switch (language) {
    case "английский":
        console.log("Hello!");
        break;
    case "испанский":
        console.log("Hola!");
        break;
    case "немецкий":
        console.log("Guten Tag!");
        break;
    default:
        console.log("Извините, я не знаю этот язык.");
}