const reader = require('./src/reader.js');

reader.readFile("input.txt");
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});