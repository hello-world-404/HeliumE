const electron = require('electron')
const Menu = electron.Menu
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ipc = require('electron').ipcMain;
const dialog = require('electron').dialog;

Menu.setApplicationMenu(null)

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 1000,
    webPreferences: {

      preload: path.join(__dirname, 'renderer.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  win.webContents.openDevTools()
  
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})