const https = require('https');
const fs = require('fs');

//Файл
const UrlFile = 'https://github.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/blob/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt';
const fileName = 'text.txt';
const reversedFile = 'reversedFile.txt';

// Завантаження файлу з URL та збереження локально
https.get(UrlFile, (res) => {

  const writeStream = fs.createWriteStream(fileName);
  res.pipe(writeStream);

  res.on('end', () => {
    // Розрахунок кількості рядків у файлі
    const fileContents = fs.readFileSync(fileName, { encoding: 'utf-8' });
    const numLines = fileContents.split('\n').length;

    console.log(`Файл містить ${numLines} рядків.`);

    // Створення копії файлу з вмістом, який записаний з кінця до початку
    const reversedContents = fileContents.split('').reverse().join('');
    fs.writeFileSync(reversedFile, reversedContents);
  });
});
