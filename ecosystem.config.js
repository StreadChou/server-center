const path = require("path");
module.exports = {
    apps: [
        {
            name: "server-center-app",
            cwd: path.join(__dirname, "backend"),
            script: "dist/main.js"
        }
    ]
}
