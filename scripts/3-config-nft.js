import { readFileSync } from "fs";
import sdk from "./1-initialize-sdk.js";

const editionDrop = sdk.getEditionDrop("0x314cda303a2f5FBA972d829D3865D914B48E1953");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Tavern Coin",
        description: "This NFT will give you access to BabaDAO. Welcome to the tavern !", 
        image: readFileSync("scripts/assets/coin.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();