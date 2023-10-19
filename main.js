// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev'); // This module is useful for development.

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration in the renderer process.
    },
  });

  // Load your React app's HTML file.
  const appUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'build', 'index.html')}`;
  
  console.log("[🚀 253eosam] |  file: main.js:21 |  createWindow |  appUrl:", appUrl)
  mainWindow.loadURL(appUrl);
  // mainWindow.loadFile('build/index.html');

  // Open the DevTools in development mode.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Close the Electron app when the main window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
