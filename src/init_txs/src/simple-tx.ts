import { YaciProvider, MeshTxBuilder, UTxO, MeshWallet } from "@meshsdk/core";

const blockchainProvider = new YaciProvider('http://localhost:8080/api/v1/');

async function test() {

const ref_scripts_wallet = new MeshWallet({
            networkId: 0, // 0: testnet, 1: mainnet
            fetcher: blockchainProvider,
            submitter: blockchainProvider,
            key: {
                type: 'root',
                bech32: 'xprv1dzj7csxsq4umhlszd0u73ycnj3j0g0sy8uny77z9nathlw8tvpgqm67ge0jdpny9y9gkdl5kwshlv7rhr3ys25zq6gtsfqtvq82eugl23r5s0uvf6hj29rfeuaqrwqph894mt65y8r49un5py0yh8yuwt5hyk7kn',
            },
        });

  // console.log(JSON.stringify(wallet.getAddresses(), null, 2))

  // const utxos = await wallet.getUtxos();
  // console.log(JSON.stringify(utxos, null, 2))

  // const collateral: UTxO = (await wallet.getCollateral())[0]!;
  // const changeAddress = wallet.getChangeAddress();

  const txBuilder = new MeshTxBuilder(
    {
      fetcher: blockchainProvider,
      submitter: blockchainProvider,
      evaluator: blockchainProvider
    }
  );

  const unsignedTx = await txBuilder
    .txOut("addr_test1qq7juz5dlts9w0hadajyrh2gd7xztw37wmmegkm8m45wl3z944ejc3er0hsrp7305dchqz9uyd9nzskanm0m2g7mmg4qt7e79w", [{
      unit: "50fd98cedacc232ee8e586378922a44a5bc5ba584deb26f3af0ee6cc53696465636861696e41646d696e",
      quantity: '1'
    }])
    .changeAddress("addr_test1qq7juz5dlts9w0hadajyrh2gd7xztw37wmmegkm8m45wl3z944ejc3er0hsrp7305dchqz9uyd9nzskanm0m2g7mmg4qt7e79w")
    .txIn("78410b6073406645be4a790a359df2efa23763db26b1123335207cc2a0b2a885", 1)
    .txIn("78410b6073406645be4a790a359df2efa23763db26b1123335207cc2a0b2a885", 0)
    .complete();

  console.log(unsignedTx)

  const signedTx = await ref_scripts_wallet.signTx(unsignedTx)
  const txHash = await ref_scripts_wallet.submitTx(signedTx)

  console.log(txHash)

  await new Promise(resolve => setTimeout(resolve, 3000));

  const new_utxos = await ref_scripts_wallet.getUtxos();
  console.log(JSON.stringify(new_utxos, null, 2))
}

test().catch(console.error);