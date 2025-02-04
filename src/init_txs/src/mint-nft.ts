import { YaciProvider, MeshTxBuilder, UTxO, MeshWallet } from "@meshsdk/core";

const blockchainProvider = new YaciProvider('http://localhost:8080/api/v1/');

async function test() {

  const wallet = new MeshWallet({
    networkId: 0, // 0: testnet, 1: mainnet
    fetcher: blockchainProvider,
    submitter: blockchainProvider,
    key: {
      type: 'root',
      bech32: 'xprv17pzm4l93vhfpatk3quujsu82yhqf8s26sus5qg5xsu6f9yjya4t3rulgr8zhcfuuxxxkc7ghtw7ajsmeq38n9yqmmxdjtw6l0ttnfypd8w2xtk0mndyxy4s8r4sx3u7yuq25eqrqhpa80xz7pc67vqqspvat45p6',
    },
  });

  console.log(JSON.stringify(wallet.getAddresses(), null, 2))

  const utxos = await wallet.getUtxos();
  console.log(JSON.stringify(utxos, null, 2))

  const collateral: UTxO = (await wallet.getCollateral())[0]!;
  const changeAddress = wallet.getChangeAddress();

  const txBuilder = new MeshTxBuilder(
    {
      fetcher: blockchainProvider,
      submitter: blockchainProvider,
      evaluator: blockchainProvider
    }
  );

  const unsignedTx = await txBuilder
    .txOut(wallet.getAddresses().baseAddressBech32!, [{ unit: "lovelace", quantity: '5000000' }])
    .changeAddress(changeAddress)
    .selectUtxosFrom(utxos)
    .txInCollateral(
      collateral.input.txHash,
      collateral.input.outputIndex,
      collateral.output.amount,
      collateral.output.address,
    )
    .complete();

  console.log(unsignedTx)

  const signedTx = await wallet.signTx(unsignedTx)
  const txHash = await wallet.submitTx(signedTx)

  console.log(txHash)

  await new Promise(resolve => setTimeout(resolve, 3000));

  const new_utxos = await wallet.getUtxos();
  console.log(JSON.stringify(new_utxos, null, 2))
}

test().catch(console.error);