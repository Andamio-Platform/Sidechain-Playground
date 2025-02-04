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

  const datumJson = {"constructor":0,"fields":[]}

  const unsignedTx = await txBuilder
    .txOut("addr_test1wpmmpvme77jerrcgwwfreq59l9jw6fnw9f3xxgfll7vastq4x3r3c", [{
      unit: "lovelace",
      quantity: '90000000'
    }, {unit:"c43464ed1ea241c6e105b7551e696883f7ca2f7158d66808d515e12c5447696d62616c73", quantity:"1000"}])
    .txOutInlineDatumValue(datumJson, "JSON")
    .changeAddress("addr_test1qq7juz5dlts9w0hadajyrh2gd7xztw37wmmegkm8m45wl3z944ejc3er0hsrp7305dchqz9uyd9nzskanm0m2g7mmg4qt7e79w")
    .txIn("833858ec57f6ea5db5047e1408a91c9a49c77c44dcf528854f49b541b09713be", 0)
    .txIn("c5431b66b60edf3e156226e11f5339a125cda5abc342ba29f0ef68bf8a865826", 0)
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