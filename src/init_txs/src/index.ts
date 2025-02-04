import { YaciProvider, MeshTxBuilder } from "@meshsdk/core";

const blockchainProvider = new YaciProvider('https://yaci-node.meshjs.dev/api/v1/');

// async function test() {

//     const utxos = await wallet.getUtxos();
//     const collateral: UTxO = (await wallet.getCollateral())[0]!;
//     const changeAddress = await wallet.getChangeAddress();

//     const policyId = resolveScriptHash(demoPlutusMintingScript, "V2");
//     const tokenName = 'mesh';
//     const tokenNameHex = stringToHex(tokenName);
//     const metadata = { [policyId]: { [tokenName]: { ...demoAssetMetadata } } };

//     const txBuilder = getTxBuilder();

//     const unsignedTx = await txBuilder
//         .mintPlutusScriptV2()
//         .mint("1", policyId, tokenNameHex)
//         .mintingScript(demoPlutusMintingScript)
//         .mintRedeemerValue(mConStr0(['mesh']))
//         .metadataValue(721, metadata)
//         .changeAddress(changeAddress)
//         .selectUtxosFrom(utxos)
//         .txInCollateral(
//             collateral.input.txHash,
//             collateral.input.outputIndex,
//             collateral.output.amount,
//             collateral.output.address,
//         )
//         .complete();

//     console.log(unsignedTx)

// }

// test().catch(console.error);