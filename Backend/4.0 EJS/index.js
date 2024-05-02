import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("April 28, 2024 11:00:00");
    const day = today.getDay();
    
    let type = "Weekday"
    let adv = "Another day of work";
    if(day === 0 || day === 6) {
        type = "Weekend";
        adv = "Relaxabitm8";
    }
    res.render("index.ejs", {
        dayType: type, 
        advice: adv
    });
});

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
});