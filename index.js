//basic express server

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


//Create a signup endpoint

    


app.post('/signup', (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;
    // Validate user input
    if (!username) {
        res.status(400).send({ message: 'Username cannot be empty' });  
        return;
    }

    if (!email) {
        res.status(400).send({ message: 'Email cannot be empty' });
        return;
    }
    
    if (password==='password.length<8') {
        res.status(400).send({ message: 'Password length should be greater than 8 or less than or equal to 16' });
        return;
    }

    if (password==='password.length>16') {
        res.status(400).send({ message: 'Password length should be greater than 8 or less than or equal to 16' });
        return;
    }
    // Create a new user
    const user = { username, email, password, dateOfBirth };
    console.log('New user created:', user);
    res.send({ message: 'User created successfully' });
});









// app.post('/signup', (req, res) => {
//     const { username, email, password, dateOfBirth } = req.body;
//     // Validate user input
//     if (!username || !email || !password || !dateOfBirth) {
//         res.status(400).send({ message: 'Please provide all required field' });
//         return;
//     }
//     // Create a new user
//     const user = new User({ username, email, password, dateOfBirth });
//     // Save the user to the database
//     user.save((err) => {
//         if (err) {
//             res.status(500).send({ message: 'Error creating user' });
//         } else {
//             res.send({ message: 'User created successfully' });
//         }
//     });
// });
