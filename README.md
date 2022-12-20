# yt-dm-stream-url
>  Node project to get the live m3u8 streaming links from youtube & dailymotion

## Installation
[Node.js](https://nodejs.org/en/) required
```bash
npm install yt-dm-stream-url


## Usage

Require YouTube channel-id.

Example: 

```https://www.youtube.com/channel/UCiLfeVOBJoAPUbiKxrHBcuw```

```UCiLfeVOBJoAPUbiKxrHBcuw``` is the channel-id string from the above url

```js
const yt = require('yt-live-url');

// returns .m3u8 link for the live stream 
yt.getStream("UCiLfeVOBJoAPUbiKxrHBcuw")
    .then(data => console.log(data))
```
Example output:
```js
[
    'https://manifest.googlevideo.com/api/manifest/hls_variant/expire/1671561211/ei/m6uhY42gMteA4-EPlYu0kAM/ip/223.178.21.214/id/2yj5oU6ZfNM.1/source/yt_live_broadcast/requiressl/yes/hfr/1/playlist_duration/30/manifest_duration/30/maudio/1/vprv/1/go/1/pacing/0/nvgoi/1/keepalive/yes/fexp/24001373,24007246/dover/11/itag/0/playlist_type/DVR/sparams/expire,ei,ip,id,source,requiressl,hfr,playlist_duration,manifest_duration,maudio,vprv,go,itag,playlist_type/sig/AOq0QJ8wRQIhAI4HISSkAiN76lFG62EP0h6nN9rob9jUz2_fz3ADyzNfAiAbi-JOQNbbKVpa8dXiu11lpAM_UadQIsrQv2XVMcUi4Q==/file/index.m3u8'
]
```

## Contribute
Did you find a bug? Do you have an idea or a feature request? [Open an issue!](https://github.com/arapurayil/yt-live-url/issues)

## License
[ISC](https://github.com/bhanuagarwal73/yt-dm-stream-url/blob/master/LICENSE)