import * as crypto from "crypto";

const FakeMining = () => {
  const FakeNameCrypto = "Ethereum";
  console.log("⛏️  mining...");

  setInterval(function () {
    console.log(`Your new crypto:`);
    console.log(`Name: ${FakeNameCrypto}`);
    console.log(`Hash: "${crypto.randomBytes(64).toString("hex")}"`);
    console.log(`-------------------------------`);
  }, 5000);
};

FakeMining();
