const fs = require("fs");

/* fs.writeFile("message.txt", "Hello From Aurelinho", (err) => {
    if (err) throw err;
    console.log("The file was saved");
}); */

fs.readFile("./message.txt","utf8" ,(err, data) => {
    if (err) throw err;
    console.log(data);
});