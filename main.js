const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
	const win = new BrowserWindow({
		minWidth: 500,
		maxWidth: 500,
		width: 500,
		minHeight: 400,
		maxHeight: 280,
		height: 400,
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(app.getAppPath(), 'preload.js')
		}
	})

	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if(BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') app.quit()
})
