import { YaciProvider } from "@meshsdk/core";

const blockchainProvider = new YaciProvider('http://localhost:8080/api/v1/');

async function test() {
    const tx = await blockchainProvider.fetchTxInfo("e32f2c402a1746f2035c99457ef058288ba4c24ecfd0282b20c4525af8855c0e")

    console.log(JSON.stringify(tx, null, 2))
}

test().catch(console.error);
