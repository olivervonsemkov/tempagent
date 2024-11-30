const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: "Agent Stage LLM Service" });
});

app.post('/predict', (req, res) => {
    const { text } = req.body;
    res.json({
        input: text,
        prediction: `Processed: ${text}`
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
}); 