const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const page = path.join(__dirname, 'www', 'index.html');

function create() {
  const win = new BrowserWindow({ width: 1200, height: 800, backgroundColor: '#272b34' });
  Menu.setApplicationMenu(Menu.buildFromTemplate([{
    label: 'App',
    submenu: [
      { label: 'Change server', accelerator: 'CmdOrCtrl+L', click: () => win.loadFile(page, { hash: 'change' }) },
      { label: 'Back', accelerator: 'Alt+Left', click: () => win.webContents.goBack() },
      { label: 'Always on top', type: 'checkbox', click: (i) => win.setAlwaysOnTop(i.checked) },
      { role: 'reload' },
      { role: 'togglefullscreen' },
      { role: 'quit' }
    ]
  }]));
  win.loadFile(page);
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
