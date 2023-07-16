const { request } = require('undici');

async function getStream(ytdmURL) {
    let url = String(ytdmURL);
    if (url.includes("https://www.youtube.com/channel/")) {
        url = `${url}/live`;
    }
    else if (url.includes("https://www.youtube.com/watch")) {
        url = `${url}`;
    }
    else if (url.includes("https://www.dailymotion.com/video/")) {
        const dailymotionXid = url.substring(url.indexOf("video/") + 6);
        url = `https://www.dailymotion.com/player/metadata/video/${dailymotionXid}`;
    }

    const { body } = await request(url);
    let stream;

    if (url.includes("dailymotion")) {
        let bodyJson = await body.json();
        stream = bodyJson.qualities.auto[0].url;
    }
    else if (url.includes("youtube")) {
        let bodyText = await body.text();
        stream = bodyText.match(/(?<=hlsManifestUrl":").*\.m3u8/g)[0];
    }
    else if(url.includes("hungama.com")) {
        let bodyText = await body.text();
        stream = bodyText.match(/(?<=stream_url:\s').*(?=')/g)[0];
    }

    if (stream) {
        // console.log(stream);
        return stream;
    }
    else {
        console.log("There is an issue with getting stream url. Please check the input url");
    }
}

exports.getStream = getStream("https://www.hungama.com/live-tv/kadak-hits/41239439/");