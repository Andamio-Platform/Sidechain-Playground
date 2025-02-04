import { YaciProvider, MeshTxBuilder, MeshWallet } from "@meshsdk/core";

const blockchainProvider = new YaciProvider('http://localhost:8080/api/v1/');

async function test() {

    const wallet = new MeshWallet({
        networkId: 0, // 0: testnet, 1: mainnet
        fetcher: blockchainProvider,
        submitter: blockchainProvider,
        key: {
            type: 'root',
            bech32: 'xprv17pzm4l93vhfpatk3quujsu82yhqf8s26sus5qg5xsu6f9yjya4t3rulgr8zhcfuuxxxkc7ghtw7ajsmeq38n9yqmmxdjtw6l0ttnfypd8w2xtk0mndyxy4s8r4sx3u7yuq25eqrqhpa80xz7pc67vqqspvat45p6',
            // bech32: 'xprv1dzj7csxsq4umhlszd0u73ycnj3j0g0sy8uny77z9nathlw8tvpgqm67ge0jdpny9y9gkdl5kwshlv7rhr3ys25zq6gtsfqtvq82eugl23r5s0uvf6hj29rfeuaqrwqph894mt65y8r49un5py0yh8yuwt5hyk7kn'
        },
    });
    const account = await wallet.getUtxos()
    console.log((await wallet.getAddresses()).baseAddressBech32)

    console.log(JSON.stringify(account, null, 2))
}

test().catch(console.error);
