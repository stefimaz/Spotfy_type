let fs = require("fs");
let axios = require("axios");

let songs = ["JTiger", "JTwinkle"];
let durations = ["00:15", "00:05"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
    ipfsArray.push({
        path: `metadata/${i}.json`,
        content: {
            image: `ipfs://QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/2`, //xxx = hash
            name: songs[i],
            animation_url: `ipfs://QmNsnqDMmRMKgWm2dQrZ4uFGQNUiZ7vmbfgptYyAgfKNVx/media/${i}`, //xxx = hash
            duration: durations[i],
            artist: "Snoop Jay",
            year: "!980"
        },
    });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
        "X-API-KEY":
            "VydYcI1KOGTEGqtYYG6K0EVAllO8MyHHwJUAezd2V3pWHb2STBYtrqnA5UbvHewN",
        "Content-Type": "application/json",
        accept: "application/json",
    },
})
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.log(error);
    });
