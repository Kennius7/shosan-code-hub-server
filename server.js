const express = require('express');
const cors = require('cors');



const PORT = 3030;
const app = express();
// const router = express.Router();
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'Hello, World!' });
});

app.get('/check', (req, res) => {
    res.status(200).json({ success: true, message: 'Checking the server' });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
