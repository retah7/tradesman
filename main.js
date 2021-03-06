const {app, BrowserWindow, ipcMain} = require("electron");
const { autoUpdater } = require("electron-updater");
const url = require("url");
const path = require("path");
const logger = require('electron-log');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  });

  console.log(mainWindow.webContents);
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
    }),
  );
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });

  mainWindow.webContents.on('did-fail-load', () => {
    console.log('did-fail-load');
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '/dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
// REDIRECT TO FIRST WEBPAGE AGAIN
  });

}

app.on("ready", async () => {
  //try to update!
  try {
    const info = await autoUpdater.checkForUpdatesAndNotify();
    logger.info('checkForUpdatesAndNotify');
    logger.info(JSON.stringify(info));

    autoUpdater.on('update-downloaded', info => {
      const quitAndInstalled = autoUpdater.quitAndInstall();
      logger.info('quitAndInstalled');
      logger.info(quitAndInstalled);
    });

    autoUpdater.on('update-available', arg => {
      logger.info('update-available');
      logger.info(arg);
    });

    autoUpdater.on('update-not-available', arg => {
      logger.info('update-not-available');
      logger.info(arg);
    });

    autoUpdater.on('download-progress', arg => {
      logger.info('download-progress');
      logger.info(arg);
    });

    autoUpdater.on('error', error => {
      logger.info('error');
      logger.info(error.message);
      logger.info(error.stack);
    });
  }
  catch (error) {
    logger.info('autoupdate failed');
  }

  createWindow();
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

ipcMain.on("app_version", (event) => {
  event.sender.send("app_version", { version: app.getVersion() });
});

autoUpdater.on("update-available", () => {
  mainWindow.webContents.send("update_available");
});

autoUpdater.on("update-downloaded", () => {
  mainWindow.webContents.send("update_downloaded");
});

ipcMain.on("restart_app", () => {
  autoUpdater.quitAndInstall();
});
