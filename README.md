# Tableau
Simple, flexible and lightweight new tab replacement for Google Chrome.

<img src="./cover.jpg" />

## Installation
To be honest, I haven’t put much time/efforts in this, so installation is a bit cumbersome and (somewhat) automated only for MacOS users.

> Give me a hint how to simplify it by submitting [issue](https://github.com/alexfedoseev/tableau/issues) or [PR](https://github.com/alexfedoseev/tableau/pulls)!

#### #1 Get extension
Clone repo:

```bash
git clone git@github.com:alexfedoseev/tableau.git
```

> Or [download it](https://github.com/alexfedoseev/tableau/archive/master.zip) if you are not familiar with terminal.

#### #2 Add images
Drop images you like in the `tableau/backgrounds` folder.

#### #3 Build images index
Next, we need to build an index of images for the extension. I do it via `Automator` (sorry, Windows users, I don’t have automated solution for you, but see below **What it actually does**).

1. Find `Build.app` file in the root of repository and open it in `Automator` (DO NOT double-click it, but open `Automator` and then open `Build.app` in it).
1. Switch to **Variables panel**: `View > Variables`
1. Double click `backgrounds` variable and choose `tableau/backgrounds` folder.
1. Save and close.

> See blog post with video instructions: [alexfedoseev.com/2017/tableau](https://alexfedoseev.com/2017/tableau)

Now, you can double-click `Build.app` and it will create `images.js` file for you.

> FYI It will replace all spaces in image filenames with underscores.

**What it actually does**<br>
This workflow reads a content of the `tableau/backgrounds` folder and writes images index to the `tableau/images.js` file:

```js
window.IMAGES = [
  'bells.jpg',
  'whistles.png',
  …
];
```

So, how you create and update this file is totally up to you. I.e. you can convert `Build.app` to folder watcher to automatically perform rebuilds or, if you’re Windows user and you have no idea how to write scripts, then you can create it manually and it will work.

#### #4 Load extension
Go to a Chrome’s Extensions list:

1. Enable **Developer Mode** (check checkbox in an upper-right corner)
1. Click “Load unpacked extension…” and choose folder with extension.

> See blog post with video instructions: [alexfedoseev.com/2017/tableau](https://alexfedoseev.com/2017/tableau)

Open a new tab and enjoy the view!

## Adding new images
Every time you add new images to the `/backgrounds` folder, you should run `Build.app`, then `Reload` extension in Chrome’s Extensions list (there’s a link right under the extension name).

## Customization
The extension doesn’t have any special configuration UI, but you can change just about everything by editing `index.html`, `index.css` & `index.js` files. The source code is dumb simple and it’s around 100 LOC incl. HTML & CSS.

The most common thing you probably will want to change is a font-face. You can do it by editing line #2 in the index.css.

That’s pretty much all. Enjoy!
