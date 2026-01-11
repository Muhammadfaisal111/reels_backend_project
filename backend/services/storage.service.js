// SDK initialization

let ImageKit = require("imagekit");

let imagekit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: IMAGE_KIT_URL_ENDPOINT,
});
