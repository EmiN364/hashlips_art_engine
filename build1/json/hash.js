const crypto = require('crypto');
const fs = require('fs');

/* type BAYCData = {
    provenance: string;
    collection: Metadata[];
}

type Metadata = {
    tokenId: number;
    image: string;
    imageHash: string;
    attributes: object;
}

const BAYC_PROVENANCE = 'cc354b3fcacee8844dcc9861004da081f71df9567775b3f3a43412752752c0bf'
const BAYC_METADATA_URL = 'https://ipfs.io/ipfs/Qme57kZ2VuVzcj5sC3tVHFgyyEgBTmAnyTK45YVNxKf6hi'

async function main() {
    const fetchImage = (url: string): Promise<string> => new Promise(async (resolve) => {
        const image = await axios.get(url, { responseType: 'arraybuffer' })
        const hashedImage = crypto.createHash('sha256').update(image.data).digest('hex')
        resolve(hashedImage)
    })

    // Read jsons files in folder

    fs.readdir(".", (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });

    const response = await axios.get(BAYC_METADATA_URL)
    const data = await response.data as BAYCData
    const hashes: string[] = []

    // get every individual image hash
    for (let index = 0; index < data.collection.length; index++) {
        const hash = await fetchImage(data.collection[index].image)
        hashes.push(hash)
    }

    // make one big string and hash it
    const concatenatedHashString = hashes.join('')
    const result = crypto.createHash('sha256').update(concatenatedHashString).digest('hex')

    // check for a match
    console.log(result === BAYC_PROVENANCE ? 'SUCCESS' : 'FAILURE')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    }) */


// Read all json files in a directory
const dir = '.';
var HashArray = []
var ConcatHashes = ""
fs.readdir(dir, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Ignore this file
        if (file == "hash.js" || file == "_metadata.json") {
            return;
        }
        // Do whatever you want to do with the file
        console.log(file);
        // Hash file
        const fileContent = fs.readFileSync(file, 'utf8');
        const hash = crypto.createHash('sha256').update(fileContent).digest('hex');
        HashArray.push(hash);
        ConcatHashes += hash;
    });
    console.log(HashArray);
    console.log("\n===============\n\n=============\n");

    console.log(ConcatHashes);
    console.log("\n===============\n\n=============\n");

    const result = crypto.createHash('sha256').update(ConcatHashes).digest('hex')
    console.log("PROVENANCE");
    console.log(result);
});
console.log("\n===============\n\n=============\n");
console.log("11404666002093471778816138897535804823905664251173417006141475351006502997886"%60)