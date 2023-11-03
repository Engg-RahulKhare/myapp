const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');
const cors = require('cors');
const express = require('express');

const appExpress = express();
const port = 3001;

appExpress.use(cors());

appExpress.get('/launchNotepad', (req, res) => {
  // Launch Notepad
  require('child_process').exec('notepad');
  res.status(200).send('Notepad launched successfully');
});

appExpress.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    // Development environment - Load React app URL
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools(); // Open DevTools in development
  } else {
    // Production environment - Load build folder
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'build', 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

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
