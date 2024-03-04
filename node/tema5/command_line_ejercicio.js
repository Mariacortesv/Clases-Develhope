const figlet = require('figlet');

const textToArt = 'Hello, Maria!';


figlet(textToArt, function(err, data) {
    if (err) {
        console.log('Error:', err);
        return;
    }

    console.log(data);
});
