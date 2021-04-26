const exec = require('child_process').exec;
const ipc = require('electron').ipcRenderer;


function openMyGithub(){
    console.log("Clicked = true");
    window.open("https://github.com/hello-world-404")
}

function openProjectPage(){
    console.log("Click = true");
    window.open("https://github.com/hello-world-404/Helium")
}

function checkFastboot(){
    execute('fastboot devices', (output) => {
        console.log(output);
        updateOut(output);
    });
}

function checkAdb(){
    execute('adb devices', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function rebootSystem(){
    execute('adb reboot', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function rebootBootloader(){
    execute('adb reboot bootloader', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function rebootRecovery(){
    execute('adb reboot recovery', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function shutdown(){
    execute('adb shutdown', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function installApp(){
    //TODO: Do handler for this.
}

function uninstallApp(){
    //TODO: Do handler for this.
}

function activateShizuku(){
    //TODO: Solve the dialog problem.
}

function activateBlackRoom(){
    execute('adb shell dpm set-device-owner web1n.stopapp/.receiver.AdminReceiver', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function activatePermissionDog(){
    execute('adb shell sh/storage/emulated/0/Android/data/com.web1n.permissiondog/files/starter.sh', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function activateIcebox(){
    execute('adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh', (output) => {
        console.log(output);
        updateOut(output);
    })
}

function activateAirDog(){
    execute('adb shell dpm set-device-owner me.yourbay.airfrozen/.main.core.mgmt.MDeviceAdminReceiver', (output) => {
        console.log(output);
        updateOut(output);
    })
}


function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};

function updateOut(cont){
    document.getElementById('outputWindow').value += cont;
}