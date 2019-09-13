module.exports = {
    apps: [{
        name:"api",
        script: "./src/app.js",
        instances: 2,
        interpreter: "babel-node",
        exec_mode: "cluster"
    }]
};