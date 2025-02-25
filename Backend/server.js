const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend berjalan dengan baik!');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Halo, ini data dari backend!' });
});