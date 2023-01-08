const path = require("path");
module.exports = {
    apps: [
        {
            name: "event-center-app",
            cwd: path.join(__dirname, "backend"),
            script: "dist/main.js",
            env: {
                "APP_PORT": 3000,
                "NODE_ENV": "development",
            },
            env_production: {
                "APP_PORT": 30100,
                "NODE_ENV": "production",
            }
        }
    ]
}
