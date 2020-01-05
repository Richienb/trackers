# Trackers [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/trackers/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/trackers)

Arrays of public BitTorrent trackers, extracted from https://github.com/ngosang/trackerslist and updated weekly.

[![NPM Badge](https://nodei.co/npm/trackers.png)](https://npmjs.com/package/trackers)

## Install

```sh
npm install trackers
```

## Usage

```js
const trackers = require("trackers");

trackers;
//=> ['udp://tracker.coppersurfer.tk:6969/announce','udp://tracker.leechers-paradise.org:6969/announce', ...]
```

## API

The following files are importable (eg. `require("trackers/trackers_all"`)

- `trackers_all` (default import)
- `trackers_all_http`
- `trackers_all_https`
- `trackers_all_ip`
- `trackers_all_udp`
- `trackers_all_ws`
- `trackers_best_ip`
- `trackers_best`
- `blacklist`
