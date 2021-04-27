# HeliumE
HeliumE 是跨平台易于使用的ADB工具箱，前身是Helium

## Generate .exe and other files
Open terminal and ```electron-packager . --overwrite```,  DO NOT USE POWERSHELL.

## Generate installer
Open terminal and ```npm build.js```. Remeber to remove the original ```installer``` folder (if there is one)

## File structure
```main.js``` - Main handler of the program
```index.html``` - UI interface for the app
```icon.png & icon.ico``` - app icons
```package.json``` - Handles all the metadata things
```build.js``` - Controls the build instructions
```renderer.js``` - Houses all event controllers
```installer/``` - Where you get the installer package.
