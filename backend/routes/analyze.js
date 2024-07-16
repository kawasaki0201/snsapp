const { spawn } = require("child_process");
const express = require("express");
const router = express.Router();

function analyzeMessages(messages) {
    return new Promise((resolve, reject) => {
        const process = spawn("python3", ["bunseki.py"]);

        let output = "";
        process.stdout.on("data", (data) => {
            output += data.toString();
        });

        process.stderr.on("data", (data) => {
            console.error("Error:", data.toString());
        });

        process.on("close", (code) => {
            if (code !== 0) {
                reject(`Process exited with code: ${code}`);
            } else {
                try {
                    const analysisResults = JSON.parse(output);
                    resolve(analysisResults);
                } catch (error) {
                    reject(`Error parsing JSON: ${error.message}`);
                }
            }
        });

        process.stdin.write(JSON.stringify(messages));
        process.stdin.end();
    });
}

router.post("/analyze", async (req, res) => {
    const { messages } = req.body;
    try {
        const analysisResults = await analyzeMessages(messages);
        res.json(analysisResults);
    } catch (error) {
        console.error("Error analyzing messages:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
