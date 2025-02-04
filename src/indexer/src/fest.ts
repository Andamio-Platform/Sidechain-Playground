import { YaciProvider, MeshTxBuilder, MeshWallet, UTxO } from "@meshsdk/core";

import { MaestroProvider } from "@meshsdk/core";

const blockchainProvider = new MaestroProvider({
    network: 'Mainnet', // Mainnet / Preprod / Preview
    apiKey: 'LDZOzAiT0AK48wHCT5wz5VG7UEKL7GlU', // Get key at https://docs.gomaestro.org/
    turboSubmit: false // Read about paid turbo transaction submission feature at https://docs.gomaestro.org
});

async function test() {


    console.log(JSON.stringify((await blockchainProvider.fetchTxInfo("1a1ef905cbe97da2b8a8a4ed4abb2c79d723dff1e3c1fece070a89bdabb9b306")), null ,2))

    // const addr = "addr1qyklrx2zzatqk97ruw7j9fn7ktyu2v39d2wxtphq4gw8y26h64d6cy4w7hskhmjdjklxz427k2sx04nnkxh8csfufn5srftla2"

    // const rewardAddress = "stake1u9ta2kavz2h0tcttaexet0np240t9gr86eemrtnugy7ye6g3ptukq"

    // const utxos = await blockchainProvider.fetchAddressUTxOs(addr);

    // console.log(JSON.stringify(utxos, null, 2))


    // const collateral: UTxO = (await blockchainProvider.fetchUTxOs("7a7f1c61bb57bfdfa311af566384d63c75b07e4dbb46ceecd74684c164087e19", 4))[0]!;
    // const changeAddress = addr;

    // const txBuilder = new MeshTxBuilder(
    //     {
    //         fetcher: blockchainProvider,
    //         submitter: blockchainProvider,
    //         evaluator: blockchainProvider
    //     }
    // );

    // const drep = "drep1taxuxp3f9yvw5txzssxx54n6qy73r9ecc40c5mx4wthuw3r3mj6"

    // const unsignedTx = await txBuilder
    //     .txOut('addr1zyzpenlg0vywj7zdh9dzdeggaer94zvckfncv9c3886c36yafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nqhcjd29', [{ unit: "lovelace", quantity: '150000000' }])
    //     .voteDelegationCertificate(
    //         {
    //             dRepId: drep,
    //         },
    //         rewardAddress,
    //     )
    //     .changeAddress(changeAddress)
    //     .selectUtxosFrom(utxos, "keepRelevant", "10000000")
    //     .txInCollateral(
    //         collateral.input.txHash,
    //         collateral.input.outputIndex,
    //         collateral.output.amount,
    //         collateral.output.address,
    //     )
    //     .complete();

    // console.log(unsignedTx)

}

test().catch(console.error);
