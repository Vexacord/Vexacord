/**
 * VexaCord - custom Discord app with a great modification built-in!
 * (C) 2024 VexaCord
 * 
 * When you contribute, we and you have copyright to your changes.
 */

/**
 * This is a preload script. This is where VexaCord is injected to Discord
 * and where it starts working.
 */

const {win, doc, con, devs} = require('./includes/constants.js');
const {app} = require('electron');

/**
 * This array contains JSON about plugins. All fields are required.
 * 
 * NOTE: Enabled must be NULL. VexaCord will quit when
 *         value `enabled` is not NULL.
 */
const plugins = [
    {
        name: 'VexaCord Must-Have',
        description: 'Plugin that is required in VexaCord.',
        required: false,
        enabled: 'siema',
        callback: () => {}
    }
]

/**
 * Now initialize the plugins.
 */
plugins.forEach((plugin) => {
    if (plugin.enabled !== null) {
        app.quit();
    }
})