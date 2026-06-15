# Desktop App Workshop
### Created resource for IEEE University of Westminster student branch workshop

resource for workshop on creating a simple desktop app  
based off of nashallery's [tutorial](https://www.youtube.com/watch?v=btxGSJ3Dh8E)  

This repo is designed to demonstrate the basics of app developing with Electron.

---
### What you'll learn

Introduction to:  
- Electron
- React
- HTML
- Javascript
- CSS

This project can be taken and configured to be a timer for something else, or to be used as an aid to structure an app with a different purpose.

---
### Project Structure

```text
steak-timer
├── node_modules        # Installed packages and libraries
├── index.html          # Structure of the app window
├── main.js             # Starts up Electron and creates app window
├── package-lock.json   # Exact versions of installed packages
├── package.json        # Project settings, scripts and dependencies
├── script.js           # App functionality and user interactions
└── styles.css          # App appearance and aesthetics 
```

### Where you change what
**`index.html`**
Here you specify what you want on the app window.
eg. text, buttons

**`styles.css`**
Here you define how you want things to look.
eg. button color, text font

**`script.js`**
Here you write the functions of the app.
eg. display timer when option selected, alert when half way

---
### Software needed

To use this project, you will need to have **Node.js** and a code editor (VS Code).

Check if you have a Package Manager (eg Homebrew for MacOS, Chocolatey for Windows) then install Node.js here: (https://nodejs.org/en)

---
### Extras

To change the sound, you can visit [Google's Sound Library](https://developers.google.com/assistant/tools/sound-library) where links for the sounds are provided and can be directly copied and pasted.

To change colors, this is done in the ```styles.css``` file. Hover your cursor over the color square and a window with the color picker should pop up. Here you can manually select a different color. There is also the option to enter color values. To change from HEX/RGB/HSL etc, click on the top of the window where the format is shown.

To change emojis in the ```index.html``` and ```script.js``` files, you can do this by simply inserting the emoji. A full list of emojis can be found here (https://unicode.org/emoji/charts/full-emoji-list.html). This also includes the Unicode for each emoji, which is another method to add them in. This project uses **HTML UTF-8** where you can add characters, not just the English Alphabet. More info on how to use UTF-8 characters (text and emojis) can be found here (https://www.w3schools.com/charsets/default.asp)
