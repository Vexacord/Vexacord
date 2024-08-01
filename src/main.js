/**
 * VexaCord - custom Discord app with a great modification built-in!
 * (C) 2024 VexaCord
 * 
 * When you contribute, we and you have copyright to your changes.
 */

const {app, BrowserWindow} = require('electron');
const path = require('path');

/**
 * A function that runs VexaCord
 */
function runVexaCord() {
    let bw = new BrowserWindow({
        minHeight: 800,
        minWidth: 1000,

        webPreferences: {
            nodeIntegration: false,
            nodeIntegrationInSubFrames: false,
            nodeIntegrationInWorker: false,
            contextIsolation: true,

            /**
             * Give access to the devtools to execute JavaScript not authorized by VexaCord and Discord
             */
            devTools: true,

            preload: path.join(__dirname, 'mod.js')
        }
    });

    bw.loadURL('https://canary.discord.com/app', {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.3'
    });
}

app.whenReady().then(runVexaCord);
app.on('activate', runVexaCord);

app.on('window-all-closed', () => {
    app.quit();
})