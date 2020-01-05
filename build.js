"use strict"

const path = require("path")
const fs = require("fs-extra")
const got = require("got")
const joinURL = require("url-join")

const files = [
    "trackers_all_http",
    "trackers_all_https",
    "trackers_all_ip",
    "trackers_all_udp",
    "trackers_all_ws",
    "trackers_all",
    "trackers_best_ip",
    "trackers_best",
    "blacklist",
]

module.exports = (async () => {
    files.forEach(async (name) => {
        const { body: contents } = await got(joinURL("https://raw.githubusercontent.com/ngosang/trackerslist/master", `${name}.txt`))
        await fs.writeJSON(`${name}.json`, contents.match(/.+/g))
        await fs.copyFile(path.join(__dirname, "templates", "trackers.d.ts"), `${name}.d.ts`)
    })
})()
