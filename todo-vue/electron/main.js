const { app, BrowserWindow } = require("electron")
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    minWidth: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  })

  win.loadFile("electron/dist/index.html")
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

process.on("unhandledRejection", (error) => {
  console.error(error)
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
