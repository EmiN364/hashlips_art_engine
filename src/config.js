const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "H8ers Club";
const description = "Undefined Membership club";
const baseUri = "ipfs://QmQFRGjD72EX8Tn8ShMaZ2U72MErozbqgL8kyv1HELVNY4";

const solanaMetadata = {
  symbol: "UNDF",
  seller_fee_basis_points: 1500, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://h8ers.club",
  creators: [
    {
      address: "0xD26f4302f036C4Db0D9BC9442704AA9c9E079afa",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 6,
    layersOrder: [
      { name: "Background",
        options: {
          bypassDNA: false
        }
      },
      { name: "Ninja",
        options: {
          bypassDNA: false
        }
      },
      { name: "Neck"},
      { name: "Glasses" },
      { name: "Headwear" },
      // { name: "Shine", options: { blend: MODE.screen, opacity: 0.6 } }
    ],
  }
];
/* const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background",
        options: {
          bypassDNA: false
        }
      },
      { name: "Eyeball" },
      {
        name: "Eye color",
        options: {
          // blend: MODE.destinationIn,
          // opacity: 0.2,
          displayName: "Awesome Eye Color",
        },
      },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
      { name: "Glare", options: { blend: MODE.screen, opacity: 0.6 } }
    ],
  }
]; */

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2160,
  height: 2160,/* 
  width: 512,
  height: 512, */
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 300,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
