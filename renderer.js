const exec = require('child_process').exec;
const ipc = require('electron').ipcRenderer;


function openMyGithub(){
    console.log("Clicked = true");
    window.open("https://github.com/hello-world-404")
}

function openProjectPage(){
    console.log("Click = true");
    window.open("https://github.com/hello-world-404/HeliumE")
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
    })
    updateOut("已执行动作: 重启 请检查手机 ");
}

function rebootBootloader(){
    execute('adb reboot bootloader', (output) => {
        console.log(output);
    })

    updateOut("已执行动作: 重启至Bootloader 请检查手机 ");
}

function rebootRecovery(){
    execute('adb reboot recovery', (output) => {
        console.log(output);
        updateOut(output);
    })

    updateOut("已执行动作: 重启至Recovery 请检查手机 ");
}

function shutdown(){
    execute('adb shutdown', (output) => {
        console.log(output);
        updateOut(output);
    })

    updateOut("已执行动作: 关机 请检查手机 ");
}

function runCustCommand(){
    var custCmd = document.getElementById('customCmd').value;

    updateOut("已执行命令: " + custCmd + " 请检查输出框 ");

    execute(custCmd, (output) => {
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
        updateOut("已执行动作: 激活小黑屋 请检查输出框 ");
        updateOut(output);
    })
}

function activatePermissionDog(){
    execute('adb shell sh/storage/emulated/0/Android/data/com.web1n.permissiondog/files/starter.sh', (output) => {
        console.log(output);
        updateOut("已执行动作: 激活权限狗 请检查输出框 ");
        updateOut(output);
    })
}

function activateIcebox(){
    execute('adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh', (output) => {
        console.log(output);
        updateOut("已执行动作: 激活冰箱 请检查输出框 ");
        updateOut(output);
    })
}

function activateAirDog(){
    execute('adb shell dpm set-device-owner me.yourbay.airfrozen/.main.core.mgmt.MDeviceAdminReceiver', (output) => {
        console.log(output);
        updateOut("已执行动作: 激活空调狗 请检查输出框 ");
        updateOut(output);
    })
}


function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};

function getPhoneInfo(){

    //Get phone model
    execute('adb shell getprop ro.product.model', (output) => {
        console.log(output);
        document.getElementById("phoneModel").innerHTML = "手机型号：" + output;
    })

    //Get system version
    execute('adb shell getprop ro.build.version.release', (output) => {
        console.log(output);
        document.getElementById("sysVersion").innerHTML = "系统版本：" + output;
    })

    //Get phone make
    execute('adb shell getprop ro.product.brand', (output) => {
        console.log(output);
        document.getElementById("phoneMake").innerHTML = "系统版本：" + output;
    })

    updateOut("手机信息获取成功")
}

function updateOut(cont){
    document.getElementById('outputWindow').value += cont + "\n";
}