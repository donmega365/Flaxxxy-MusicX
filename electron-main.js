const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:1200,height:800,backgroundColor:'#000000',icon:'www/logo.svg'});w.setMenu(null);w.loadFile('www/index.html')});
app.on('window-all-closed',()=>app.quit());
