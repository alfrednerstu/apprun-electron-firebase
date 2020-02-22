/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

import app from 'apprun';

import home from './components/home';
import about from './components/about';
import todo from './components/todo';

import './store';

new home().start('main');
new about().mount('main');
new todo().mount('main');

/*
import './components/header';
import './components/signin';
import './components/register';
import './components/profile';
import './components/settings';
import './components/editor';
import './components/article';
*/

// Check if user exist, otherwize authenticate
// app.run('/get-user');

console.log('👋 This message is being logged by "renderer.js", included via webpack');
