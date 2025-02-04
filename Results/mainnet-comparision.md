## Summary
The experimentation on the purpose sidechain revealed no significant deviations in transaction execution, smart contract behavior, or overall functionality when compared to the mainnet. All tested Andamio contracts performed as expected, and the interactions without notable discrepancies.

One key distinction observed was the significantly faster settlement times on the sidechain. Transactions were confirmed and finalized more rapidly compared to mainnet, improving overall efficiency and responsiveness. Additionally, while fees were generally lower, they remained within an expected range and did not introduce any unexpected behavior.

Overall, the sidechain successfully replicated mainnet contract execution while benefiting from improved transaction speed and efficiency.

## Sidechain Transaction Details
Refer to [Report](Report.md)

## Mainnet Transaction Details
The following are the respective transactions as tested in the Sidechain. It is a history of transactions taken from the Gimbalabs Prototype Instance of Andamio Contracts running on mainnet.

## 1. Minting Admin Token:

Tx Hash (Mainnet): `1a1ef905cbe97da2b8a8a4ed4abb2c79d723dff1e3c1fece070a89bdabb9b306`

```json
{
  "data": {
    "tx_hash": "1a1ef905cbe97da2b8a8a4ed4abb2c79d723dff1e3c1fece070a89bdabb9b306",
    "block_hash": "7e63bf70ceacfc977312eee9f27a85d780e62df1d57b9bf36f27990e50d90820",
    "block_tx_index": 1,
    "block_height": 9941965,
    "block_timestamp": 1708123166,
    "block_absolute_slot": 116556875,
    "block_epoch": 467,
    "inputs": [
      {
        "tx_hash": "8816c94b811366e0e212de610c1879050cc4ae93153c23e9b60e69fbe880e342",
        "index": 2,
        "assets": [{ "unit": "lovelace", "amount": 1902186348 }],
        "address": "addr1qygsn6p33aq936phlrx6usd7mguqnnfea9s9ruwuhqcvlhsdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsjcfewq",
        "datum": null,
        "reference_script": null
      }
    ],
    "outputs": [
      {
        "tx_hash": "1a1ef905cbe97da2b8a8a4ed4abb2c79d723dff1e3c1fece070a89bdabb9b306",
        "index": 0,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3031",
            "amount": 1
          }
        ],
        "address": "addr1qx2h42hnke3hf8n05m2hzdaamup6edfqvvs2snqhmufv0eryqhtfq6cfwktmrdw79n2smpdd8n244z8x9f3267g8cz6shnc9au",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "1a1ef905cbe97da2b8a8a4ed4abb2c79d723dff1e3c1fece070a89bdabb9b306",
        "index": 1,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3032",
            "amount": 1
          }
        ],
        "address": "addr1qx2h42hnke3hf8n05m2hzdaamup6edfqvvs2snqhmufv0eryqhtfq6cfwktmrdw79n2smpdd8n244z8x9f3267g8cz6shnc9au",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "1a1ef905cbe97da2b8a8a4ed4abb2c79d723dff1e3c1fece070a89bdabb9b306",
        "index": 2,
        "assets": [{ "unit": "lovelace", "amount": 1897969499 }],
        "address": "addr1qygsn6p33aq936phlrx6usd7mguqnnfea9s9ruwuhqcvlhsdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsjcfewq",
        "datum": null,
        "reference_script": null
      }
    ],
    "reference_inputs": [],
    "collateral_inputs": [],
    "collateral_return": null,
    "mint": [
      {
        "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3031",
        "amount": 1
      },
      {
        "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3032",
        "amount": 1
      }
    ],
    "invalid_before": null,
    "invalid_hereafter": null,
    "fee": 216849,
    "deposit": 0,
    "certificates": {
      "stake_registrations": [],
      "stake_deregistrations": [],
      "stake_delegations": [],
      "pool_registrations": [],
      "pool_retirements": [],
      "reg_certs": [],
      "unreg_certs": [],
      "vote_delegations": [],
      "stake_vote_delegations": [],
      "stake_reg_delegations": [],
      "vote_reg_delegations": [],
      "stake_vote_reg_delegations": [],
      "auth_committee_hot_certs": [],
      "resign_committee_cold_certs": [],
      "reg_drep_certs": [],
      "unreg_drep_certs": [],
      "update_drep_certs": [],
      "mir_transfers": []
    },
    "withdrawals": [],
    "additional_signers": [],
    "scripts_executed": [
      {
        "hash": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa",
        "type": "native",
        "bytes": "8202828200581c1109e8318f4058e837f8cdae41beda3809cd39e96051f1dcb830cfde8200581cfb02310203e3a9d0a5ca486989d3db266be1414dd0eb442317d7bf2a",
        "json": {
          "type": "any",
          "scripts": [
            {
              "keyHash": "1109e8318f4058e837f8cdae41beda3809cd39e96051f1dcb830cfde",
              "type": "sig"
            },
            {
              "keyHash": "fb02310203e3a9d0a5ca486989d3db266be1414dd0eb442317d7bf2a",
              "type": "sig"
            }
          ]
        }
      }
    ],
    "scripts_successful": true,
    "redeemers": {
      "spends": [],
      "mints": [],
      "withdrawals": [],
      "certificates": [],
      "votes": [],
      "proposals": []
    },
    "metadata": {
      "721": {
        "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa": {
          "gl-admin-t1-01": {
            "description": [
              "This token is used to approve projects in",
              "the Gimbalabs Treasury. Enabled by Andamio."
            ],
            "files": [
              {
                "mediaType": "image/png",
                "src": [
                  "ipfs://bafybeihj3sulcpm7c3bi3ogtxra5jpxhlxbgjboqic7mzi7o",
                  "dxinyzt7ku"
                ]
              }
            ],
            "image": [
              "ipfs://bafybeihj3sulcpm7c3bi3ogtxra5jpxhlxbgjboqic7mzi7o",
              "dxinyzt7ku"
            ],
            "mediaType": "image/png",
            "name": "Gimbalabs Treasury Admin t1.01"
          },
          "gl-admin-t1-02": {
            "description": [
              "This token is used to approve projects in",
              "the Gimbalabs Treasury. Enabled by Andamio."
            ],
            "files": [
              {
                "mediaType": "image/png",
                "src": [
                  "ipfs://bafybeihj3sulcpm7c3bi3ogtxra5jpxhlxbgjboqic7mzi7o",
                  "dxinyzt7ku"
                ]
              }
            ],
            "image": [
              "ipfs://bafybeihj3sulcpm7c3bi3ogtxra5jpxhlxbgjboqic7mzi7o",
              "dxinyzt7ku"
            ],
            "mediaType": "image/png",
            "name": "Gimbalabs Treasury Admin t1.02"
          }
        }
      }
    },
    "size": 1394
  },
  "last_updated": {
    "timestamp": "2025-02-04 15:13:34",
    "block_hash": "3669840b5aa6b8a407d81da9c48a205e040208b1971892881955b814e74d1788",
    "block_slot": 147115723
  }
}
```

## 2. Minting Decider Token:

Tx Hash (Mainnet): `2a6928928a69a81342b078b1944fc7fe5dcfdc8e25ec2c4d59c323c008bdd643`

```json
{
  "data": {
    "tx_hash": "2a6928928a69a81342b078b1944fc7fe5dcfdc8e25ec2c4d59c323c008bdd643",
    "block_hash": "80e8186c92ce63fbf724d169acd8d013e1e9f3182d60fc4ec412fdcdbcd5f60e",
    "block_tx_index": 1,
    "block_height": 9942011,
    "block_timestamp": 1708124024,
    "block_absolute_slot": 116557733,
    "block_epoch": 467,
    "inputs": [
      {
        "tx_hash": "e76da14de866411d747317b365e43ac2bc4d3842488be7541919a0d3731be8fa",
        "index": 2,
        "assets": [{ "unit": "lovelace", "amount": 1889536241 }],
        "address": "addr1qygsn6p33aq936phlrx6usd7mguqnnfea9s9ruwuhqcvlhsdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsjcfewq",
        "datum": null,
        "reference_script": null
      }
    ],
    "outputs": [
      {
        "tx_hash": "2a6928928a69a81342b078b1944fc7fe5dcfdc8e25ec2c4d59c323c008bdd643",
        "index": 0,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "ad1dc82a4ed48c9817e72f9027bb70c3b0f1bcdcb4bdaff99410788d676c2d72657669657765722d74312d65312d303031",
            "amount": 1
          }
        ],
        "address": "addr1qx2h42hnke3hf8n05m2hzdaamup6edfqvvs2snqhmufv0eryqhtfq6cfwktmrdw79n2smpdd8n244z8x9f3267g8cz6shnc9au",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "2a6928928a69a81342b078b1944fc7fe5dcfdc8e25ec2c4d59c323c008bdd643",
        "index": 1,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "ad1dc82a4ed48c9817e72f9027bb70c3b0f1bcdcb4bdaff99410788d676c2d72657669657765722d74312d65312d303032",
            "amount": 1
          }
        ],
        "address": "addr1qx2h42hnke3hf8n05m2hzdaamup6edfqvvs2snqhmufv0eryqhtfq6cfwktmrdw79n2smpdd8n244z8x9f3267g8cz6shnc9au",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "2a6928928a69a81342b078b1944fc7fe5dcfdc8e25ec2c4d59c323c008bdd643",
        "index": 2,
        "assets": [{ "unit": "lovelace", "amount": 1885319392 }],
        "address": "addr1qygsn6p33aq936phlrx6usd7mguqnnfea9s9ruwuhqcvlhsdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsjcfewq",
        "datum": null,
        "reference_script": null
      }
    ],
    "reference_inputs": [],
    "collateral_inputs": [],
    "collateral_return": null,
    "mint": [
      {
        "unit": "ad1dc82a4ed48c9817e72f9027bb70c3b0f1bcdcb4bdaff99410788d676c2d72657669657765722d74312d65312d303031",
        "amount": 1
      },
      {
        "unit": "ad1dc82a4ed48c9817e72f9027bb70c3b0f1bcdcb4bdaff99410788d676c2d72657669657765722d74312d65312d303032",
        "amount": 1
      }
    ],
    "invalid_before": null,
    "invalid_hereafter": null,
    "fee": 216849,
    "deposit": 0,
    "certificates": {
      "stake_registrations": [],
      "stake_deregistrations": [],
      "stake_delegations": [],
      "pool_registrations": [],
      "pool_retirements": [],
      "reg_certs": [],
      "unreg_certs": [],
      "vote_delegations": [],
      "stake_vote_delegations": [],
      "stake_reg_delegations": [],
      "vote_reg_delegations": [],
      "stake_vote_reg_delegations": [],
      "auth_committee_hot_certs": [],
      "resign_committee_cold_certs": [],
      "reg_drep_certs": [],
      "unreg_drep_certs": [],
      "update_drep_certs": [],
      "mir_transfers": []
    },
    "withdrawals": [],
    "additional_signers": [],
    "scripts_executed": [
      {
        "hash": "ad1dc82a4ed48c9817e72f9027bb70c3b0f1bcdcb4bdaff99410788d",
        "type": "native",
        "bytes": "8202818200581c1109e8318f4058e837f8cdae41beda3809cd39e96051f1dcb830cfde",
        "json": {
          "type": "any",
          "scripts": [
            {
              "keyHash": "1109e8318f4058e837f8cdae41beda3809cd39e96051f1dcb830cfde",
              "type": "sig"
            }
          ]
        }
      }
    ],
    "scripts_successful": true,
    "redeemers": {
      "spends": [],
      "mints": [],
      "withdrawals": [],
      "certificates": [],
      "votes": [],
      "proposals": []
    },
    "metadata": {
      "721": {
        "ad1dc82a4ed48c9817e72f9027bb70c3b0f1bcdcb4bdaff99410788d": {
          "gl-reviewer-t1-e1-001": {
            "description": [
              "This token is used to review project submissions",
              "at Gimbalabs. Powered by Andamio."
            ],
            "files": [
              {
                "mediaType": "image/png",
                "src": [
                  "ipfs://bafybeicauout3gcqj6sslizetgoahpgycwriupgtvietzrnl",
                  "oynicm74v4"
                ]
              }
            ],
            "image": [
              "ipfs://bafybeicauout3gcqj6sslizetgoahpgycwriupgtvietzrnl",
              "oynicm74v4"
            ],
            "mediaType": "image/png",
            "name": "Gimbalabs Reviewer t1.e1.001"
          },
          "gl-reviewer-t1-e1-002": {
            "description": [
              "This token is used to review project submissions",
              "at Gimbalabs. Powered by Andamio."
            ],
            "files": [
              {
                "mediaType": "image/png",
                "src": [
                  "ipfs://bafybeicauout3gcqj6sslizetgoahpgycwriupgtvietzrnl",
                  "oynicm74v4"
                ]
              }
            ],
            "image": [
              "ipfs://bafybeicauout3gcqj6sslizetgoahpgycwriupgtvietzrnl",
              "oynicm74v4"
            ],
            "mediaType": "image/png",
            "name": "Gimbalabs Reviewer t1.e1.002"
          }
        }
      }
    },
    "size": 1394
  },
  "last_updated": {
    "timestamp": "2025-02-04 15:16:02",
    "block_hash": "44570e137a5aba9ffb7f8578e59b429c36d33e4a5de626643a8ada67c5187a06",
    "block_slot": 147115871
  }
}
```

## 3. Minting Contract Token (Publishing Task):

Tx Hash (Mainnet): `0329e8f5ee0c1422aea11a1593d15691a3b64621f2d228714fcb425ef34653b4`

```json
{
  "data": {
    "tx_hash": "0329e8f5ee0c1422aea11a1593d15691a3b64621f2d228714fcb425ef34653b4",
    "block_hash": "c2692ce045d9a6f59a92b6f8cdb3abd432d6f35d48777c17b2de4ecb695ddd80",
    "block_tx_index": 0,
    "block_height": 10140351,
    "block_timestamp": 1712176146,
    "block_absolute_slot": 120609855,
    "block_epoch": 476,
    "inputs": [
      {
        "tx_hash": "24ef1f603e4c9e9610f017c4e4ee5384255d1e1f8af0bb1fc9b3526dd9e585a0",
        "index": 0,
        "assets": [{ "unit": "lovelace", "amount": 4800000000 }],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "4a18cd7c55d8e588ae51e74f98fa547d7d24ac9f882180af4a4ed7bc3c85a160",
        "index": 0,
        "assets": [
          { "unit": "lovelace", "amount": 1060260 },
          {
            "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3032",
            "amount": 1
          }
        ],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      }
    ],
    "outputs": [
      {
        "tx_hash": "0329e8f5ee0c1422aea11a1593d15691a3b64621f2d228714fcb425ef34653b4",
        "index": 0,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3032",
            "amount": 1
          }
        ],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "0329e8f5ee0c1422aea11a1593d15691a3b64621f2d228714fcb425ef34653b4",
        "index": 1,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe0eb36d7ac9586671f459af58f140903c72ecc8ba402d5ca408c03b61",
            "amount": 1
          }
        ],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "0329e8f5ee0c1422aea11a1593d15691a3b64621f2d228714fcb425ef34653b4",
        "index": 2,
        "assets": [{ "unit": "lovelace", "amount": 4796719786 }],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      }
    ],
    "reference_inputs": [],
    "collateral_inputs": [
      {
        "tx_hash": "24ef1f603e4c9e9610f017c4e4ee5384255d1e1f8af0bb1fc9b3526dd9e585a0",
        "index": 0,
        "assets": [{ "unit": "lovelace", "amount": 4800000000 }],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      }
    ],
    "collateral_return": {
      "tx_hash": "0329e8f5ee0c1422aea11a1593d15691a3b64621f2d228714fcb425ef34653b4",
      "index": 3,
      "assets": [{ "unit": "lovelace", "amount": 4799489289 }],
      "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
      "datum": null,
      "reference_script": null
    },
    "mint": [
      {
        "unit": "6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe0eb36d7ac9586671f459af58f140903c72ecc8ba402d5ca408c03b61",
        "amount": 1
      }
    ],
    "invalid_before": null,
    "invalid_hereafter": null,
    "fee": 340474,
    "deposit": 0,
    "certificates": {
      "stake_registrations": [],
      "stake_deregistrations": [],
      "stake_delegations": [],
      "pool_registrations": [],
      "pool_retirements": [],
      "reg_certs": [],
      "unreg_certs": [],
      "vote_delegations": [],
      "stake_vote_delegations": [],
      "stake_reg_delegations": [],
      "vote_reg_delegations": [],
      "stake_vote_reg_delegations": [],
      "auth_committee_hot_certs": [],
      "resign_committee_cold_certs": [],
      "reg_drep_certs": [],
      "unreg_drep_certs": [],
      "update_drep_certs": [],
      "mir_transfers": []
    },
    "withdrawals": [],
    "additional_signers": [],
    "scripts_executed": [
      {
        "hash": "6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe",
        "type": "plutusv2",
        "bytes": "5907f20100003232323232323232323232323232323232323232323232323232323232323232323232323232323232223232323232323253355335333553026027300e00d2333553027028300f00e30114891c467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa0033553303322112253350010282213302930040023355300602e00400102823500102a353500102a20233500222222222222200c1533500413335734605a66014604c04e666aa604a04e44a66a6a004444a666ae68cdc780198088040999ab9a3370e90008008148128120998120010008800812280081201010a999ab9a302e3300b3027028333553026028225335350022225333573466e3c00cc04802454cd4cc0580080184ccd5cd18198008150130128128998128010008800812a8010999ab9a302e3300b3027028500202502102001f1120011533573892103505435001613330312225335001100222135002223300733330382222533500110022213500222533357346074002266601000e00c006266601000e660602466600201000600400c00600400c0020060466a0024444444444440106a00204ca666ae68c0a4c0b80104c8c8c848cc00400c008c060d5d09aba2302f006533357346054605e002264646464646464646464646464646464646464646464642466666666666600203002c02802402001c01801200e00a00600460646ae84d5d10011998153ae2001357420026ae88008ccc0a00a88004d5d08009aba20023302775c6ae84004d5d1001a999ab9a3039303e0011323232321233001004002533357346078608200226464246600200600460446ae84d5d11820801198113ad3574260800020746ea8d5d09aba2303f003533357346074607e00226464246600200600460406ae84d5d1181f801198103ad35742607c0020706ea8d5d0981e80081b9baa357420026ae88008ccc084095d69aba100135744004660400446ae84004d5d100119980ebae01c357420026ae88008ccc06dd700d1aba1001357440046603402c6ae84004d5d10011980c0099aba100135744605e0046602c0226ae84c0b80040a0dd51aba1302d00402753335734605200203e2a666ae68c0a00044c8488c00400cdd71aba1302c002026302c00137540066ea800488cccd54008cc01c88ccd4014088004008d400c08488cdc0000a400400290001980211118019801000900091a800911999a8008111000811011091980091299a80100c880080a11980111199a80180e8010009a80080e11091980080180111199ab9a3371e00400202c024464a666ae68c07800405054ccd5cd180e80080800d98109baa001223232533357346040002224440022a666ae68c07c0044c84888c00c010c010d5d098110010a999ab9a301e0011122200201c30220013754002464a666ae68c06cc0800044c8c848cc00400c008c010d5d09aba23020002300c35742603e0020326ea80048c94ccd5cd180d180f800899191919191919191909199980080480380180119805bae357426ae880114ccd5cd1811800899091118010021aba130250021533357346044002264244460020086eb8d5d098128010a999ab9a30210011122200301f302500137546ae84004d5d10011998043ae007357420026ae88c08000d4ccd5cd180d9810000899190919800801801198028059aba135744604000460166ae84c07c004064dd51aba1301e0010183754002446464a666ae68c06c0044c8488c00800cc010d5d0980f8010a999ab9a301c00100e019301f001375400266002eb9d69111980f111999aab9f0012013232323233014123300100300230063574400a600e6042004600e60420026ae84008054dd5800911980e111999aab9f001201123300f30053574200460066ae8800804cdd6000919192999ab9a301900113212222300400530043574260340042a666ae68c0600044c848888c008014c014d5d0980d0010a999ab9a301700113212222300100530073574260340042a666ae68c0580044c848888c00c014dd71aba1301a002014301a001375400246464a666ae68cdc3a401800222444401c2a666ae68cdc3a40140022244444440082a666ae68cdc3a40100022646424444444660020120106eb4d5d09aba2301a003375c6ae84c06400854ccd5cd180c0008991909111111198010048041bae357426ae88c06800cdd71aba13019002153335734602e00226464244444446600c0120106eb8d5d09aba2301a00330043574260320042a666ae68c0580044c848888888c01c020c010d5d0980c8010a999ab9a3015001132122222223005008300435742603200402660320026ea80048c8c94ccd5cd180a8008991919190911998008030020019bad357426ae88008dd69aba10013574460320066eb4d5d0980c0010a999ab9a30140011321223002003300435742603000402460300026ea80048c8c94ccd5cd180a00089909118008019bae35742602e0042a666ae68c04c0044c8488c00800cdd71aba1301700201130170013754002464a666ae68c044c0580044c8c848cc00400c008dd69aba135744602c00460066ae84c05400403cdd50009192999ab9a301030150011375c6ae84c050004038dd50008800880491100191091198008020018800880218069108911299a800880111099802801199aa980380480280200098061108911299a80089a801804110999a8028049802001199aa98038040028020008900091001110008a99ab9c4901035054310016253357389201024c680016370e90001b8748008dc3a40086e1d20065573caae748c8c00400488cc00cc008008005",
        "json": null
      }
    ],
    "scripts_successful": true,
    "redeemers": {
      "spends": [],
      "mints": [
        {
          "policy": "6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe",
          "data": {
            "json": {
              "constructor": 0,
              "fields": [
                {
                  "bytes": "0eb36d7ac9586671f459af58f140903c72ecc8ba402d5ca408c03b61"
                }
              ]
            },
            "bytes": "d8799f581c0eb36d7ac9586671f459af58f140903c72ecc8ba402d5ca408c03b61ff"
          },
          "ex_units": [721050, 222793628]
        }
      ],
      "withdrawals": [],
      "certificates": [],
      "votes": [],
      "proposals": []
    },
    "metadata": null,
    "size": 2695
  },
  "last_updated": {
    "timestamp": "2025-02-04 15:17:33",
    "block_hash": "b269c8710806abf5823d11b66eb4cf3725d1c4236105670b138ca1c7cf37c177",
    "block_slot": 147115962
  }
}
```

## 4. Minting Contributor Token:

Tx Hash (Mainnet): `c709c6230b0a7c29d91a5fb9ea9f213c946666808342f535c901a34cd05fc55d`

```json
{
  "data": {
    "tx_hash": "c709c6230b0a7c29d91a5fb9ea9f213c946666808342f535c901a34cd05fc55d",
    "block_hash": "18827b600e8e61cdc059c263c24a8e7efbb80241d74b79ae494362515162d3c9",
    "block_tx_index": 11,
    "block_height": 10319838,
    "block_timestamp": 1715807023,
    "block_absolute_slot": 124240732,
    "block_epoch": 485,
    "inputs": [
      {
        "tx_hash": "e18595d8a2ad2cc8b0353dffff53a5a48bac255025a3710bc41118d0ad772b7e",
        "index": 0,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3032",
            "amount": 1
          }
        ],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "e18595d8a2ad2cc8b0353dffff53a5a48bac255025a3710bc41118d0ad772b7e",
        "index": 3,
        "assets": [{ "unit": "lovelace", "amount": 4986950671 }],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      }
    ],
    "outputs": [
      {
        "tx_hash": "c709c6230b0a7c29d91a5fb9ea9f213c946666808342f535c901a34cd05fc55d",
        "index": 0,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa676c2d61646d696e2d74312d3032",
            "amount": 1
          }
        ],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "c709c6230b0a7c29d91a5fb9ea9f213c946666808342f535c901a34cd05fc55d",
        "index": 1,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a3130307061626f6e",
            "amount": 1
          }
        ],
        "address": "addr1zxlzwsrqzkflxpy6pa2axh7c3n4uk8hxjx6dsz8f5wkc88qdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsvp40pg",
        "datum": {
          "type": "inline",
          "hash": "2791abe3b8fadc4e10a3ee6a8d7ea8b26e78bb858a44a472a16ff08b19ead0c5",
          "bytes": "d8799fd8799fd8799f581c32c44890120645f4aa5ca81bcd979db15a2e2d6bce35667a5b643c4dffd8799fd8799fd8799f581c79d149613a79dc6226a3f3b447bd4d41fd4ced11fdc5896cbd867cfcffffffff50436f6e7472696275746f7220496e666f00581ced99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174aff",
          "json": {
            "constructor": 0,
            "fields": [
              {
                "constructor": 0,
                "fields": [
                  {
                    "constructor": 0,
                    "fields": [
                      {
                        "bytes": "32c44890120645f4aa5ca81bcd979db15a2e2d6bce35667a5b643c4d"
                      }
                    ]
                  },
                  {
                    "constructor": 0,
                    "fields": [
                      {
                        "constructor": 0,
                        "fields": [
                          {
                            "constructor": 0,
                            "fields": [
                              {
                                "bytes": "79d149613a79dc6226a3f3b447bd4d41fd4ced11fdc5896cbd867cfc"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { "bytes": "436f6e7472696275746f7220496e666f" },
              { "int": 0 },
              {
                "bytes": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a"
              }
            ]
          }
        },
        "reference_script": null
      },
      {
        "tx_hash": "c709c6230b0a7c29d91a5fb9ea9f213c946666808342f535c901a34cd05fc55d",
        "index": 2,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a3232327061626f6e",
            "amount": 1
          }
        ],
        "address": "addr1qyevgjyszgryta92tj5phnvhnkc45t3dd08r2en6tdjrcnte69ykzwnem33zdglnk3rm6n2pl4xw6y0ackyke0vx0n7qkqj9js",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "c709c6230b0a7c29d91a5fb9ea9f213c946666808342f535c901a34cd05fc55d",
        "index": 3,
        "assets": [{ "unit": "lovelace", "amount": 4982601775 }],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      }
    ],
    "reference_inputs": [
      {
        "tx_hash": "0c5366f0924cc95fbd9ca3ee98b3a28e156c7ac6b56a21bee7a3fb1bcfac981c",
        "index": 1,
        "assets": [{ "unit": "lovelace", "amount": 13511850 }],
        "address": "addr1q9t44xsq6uyr0ds5vv23x92q7zzgph4kny3q758zndgt7c9a4nqn5t5w9e36hps534yv9uejam2snhgkup5rvqm74xjsx46smn",
        "datum": null,
        "reference_script": {
          "hash": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a",
          "type": "plutusv2",
          "bytes": "590b4c01000032323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323222323232323232325335350032235002222223222222223350132333553041042302502623300a0014800400494ccd5cd19b8733022304104233304f22253350011002221350022233007333305622225335001100222135002225333573460ac002266601000e00c006266601000e6609e66608600e00400200c00600400c00200607e01466e08cc088c1041080052004153353335530410423025023302148811c467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa003355303d0422350010443501022222222222233355304d04e3303f223355304b05023500122330440023355304e0532350012233047002333500137009000380233700002900000099aa982582811a8009119822001199a800919aa982782a11a8009119824001181a0008009119981881a001000919aa982782a11a8009119824001181a80080099981601780100082591a800911a80090210060999aa9820821181281311a8009191911299a999aa982382418158149299a9980c1a800901d28028a99aa999a9a800911100102010999ab9a3375e00260a666ae80d400c88c154cd5d0181200119aba0533500121305633574066a002460ae66ae80c098004dd8814111182d19aba0375000666ae80dd400119aba037500026ec40a8dd88138982b1bb1026376204c66ae80dd480219aba04c10100003357406ea54068dd881202382110208998121a80091110021981d0911800a4411cbe2740601593f3049a0f55d35fd88cebcb1ee691b4d808e9a3ad839c0030223022302248811c0de79fa8718d6f7b1125e5a5d3244cc9c9a26e3b8b3eeb385c92d9930004004001215335333553047048302b029253353301835001203a5004133024350012222004002040012153353300f5004480084cc03d400d200203f03f03f1337149110332323200002133714911033130300000100103903922333573466e1cccc08000d402c0080040e00cc4480045888ccd5cd181c99980c001280180081801589a800911999a80081b100081b01b2999ab9a3034303b00413232321233001003002301d357426ae88c0f00194ccd5cd181a981e000899191919191919191919191919191919191919191919190919999999999980080c00b00a009008007006004803802801801181a9aba135744004666060eb88004d5d08009aba200233302e02f2001357420026ae88008cc0e9d71aba100135744006a666ae68c110c12c0044c8c8c8c848cc0040100094ccd5cd1823982700089919091980080180118149aba135744609c00466052eb4d5d098268008229baa357426ae88c13000d4ccd5cd1822982600089919091980080180118139aba13574460980046604eeb4d5d098258008219baa3574260940020846ea8d5d08009aba200233302703075a6ae84004d5d1001198198139aba100135744004666046eb8088d5d08009aba200233302175c0406ae84004d5d10011981680e9aba100135744004660560346ae84004d5d1181e0011981480c1aba1303b00103337546ae84c0e80100c94ccd5cd181a000899091180100199813bae3574260720042a666ae68c0cc0044c8488c00400ccc09c8c94ccd5cd181a981e0008991998119bae3574260780046eb8d5d080098121aba1357440026ae88c0ec0040ccdd50009aba13039002031303900137540066ea80048cd40048c0cccd5d01ba900137620084606866ae80dd48009bb10042122300200349888d400888d400c88c8cd40148cd401094ccd5cd19b8f00200100302520262335004202625333573466e3c00800400c09454cd400c854cd400884cd40088cd40088cd40088cd40088cc04000800480a48cd400880a48cc0400080048880a4888cd401080a48894ccd5cd19b8700600315333573466e1c0140084ccd5cd19b8700400103002b02a02a02315335001202302722233355302102702533553022027235001223301b0023007001333553021027223500222533533355302a02b300e00c235001223300a002005006100313302900400302400133553022027235001223301b002330372253350011300a003221350022253353300c002008112223300200a0041300600300400221222300300421222300100422333573466e3c00800408006c88cccd54008cc04c88ccd4018094004008d401009088cdc0000a40040029000091980091299a80100f080080c1980791118019801000900091980791199a8018108010009a800810091980091299a801080080b00d111198159119a800a4000446a00444a666ae68cdc78010040998189119a800a4000446a00444a666ae68cdc7801006880089803001800898030018019192999ab9a3022001018153335734604200202603e604e6ea800488c8c94ccd5cd1812000889110008a999ab9a30230011321222300300430043574260500042a666ae68c08800444888008080c0a0004dd50009192999ab9a301f30260011323212330010030023004357426ae88c098008c020d5d0981280080e9baa00123253335734603c604a0022646464646464646424666600201200e0060046602ceb8d5d09aba200453335734604c002264244460040086ae84c0a800854ccd5cd1812800899091118008021bae3574260540042a666ae68c0900044488800c088c0a8004dd51aba10013574400466600ceb8014d5d08009aba23025002300c3574260480020386ea8004cc005d73ad222330252233335573e0024030464660346601a600e6050002600c604e00260086ae8800cd5d080100d1bab0012323253335734603e00226424444600800a60086ae84c08800854ccd5cd180f00089909111180100298059aba13022002153335734603a00226424444600200a600a6ae84c08800854ccd5cd180e0008990911118018029bae35742604400403460440026ea80048c8c94ccd5cd19b874803000444888802854ccd5cd19b874802800444888888801054ccd5cd19b87480200044c8c848888888cc004024020dd69aba13574460440066eb8d5d098108010a999ab9a301e001132321222222233002009008375c6ae84d5d118110019bae3574260420042a666ae68c0740044c8c848888888cc018024020dd71aba135744604400660146ae84c08400854ccd5cd180e00089909111111180380418051aba13021002153335734603600226424444444600a01060146ae84c084008064c084004dd50009192999ab9a30193020001132321233001003002375a6ae84d5d1181000118019aba1301f0010173754002464a666ae68c060c07c0044dd71aba1301e001016375400244400644246600200600444424666002008006004464a666ae68c050c06c0044c8c848cc00400c008cc018010d5d09aba2301b00230043574260340020246ea80048c8c94ccd5cd180a8008991919190911998008030020019bad357426ae88008dd69aba10013574460360066eb4d5d0980d0010a999ab9a30140011321223002003300435742603400402460340026ea80048c8c94ccd5cd180a00089909118008019bae3574260320042a666ae68c04c0044c8488c00800cdd71aba1301900201130190013754002446464a666ae68c04c0044c8488c00800cc010d5d0980c8010a999ab9a30140010050113019001375400220022014446602c446666aae7c00480248cc028c014d5d080118019aba200200b375800260264422444a66a00220044426600a004666aa600e01a00a0080026024442244a66a00200a44266012600800466aa600c016008002200220084424466002008006601c4422444a66a00226a006010442666a00a0126008004666aa600e01000a0080022400244004440022a66ae712401035054310016253357389201024c680016370e90001b8748008dc3a40086e1d2006374a90001ba54800955cf2ab9d23230010012233003300200200101",
          "json": null
        }
      }
    ],
    "collateral_inputs": [
      {
        "tx_hash": "e18595d8a2ad2cc8b0353dffff53a5a48bac255025a3710bc41118d0ad772b7e",
        "index": 3,
        "assets": [{ "unit": "lovelace", "amount": 4986950671 }],
        "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
        "datum": null,
        "reference_script": null
      }
    ],
    "collateral_return": {
      "tx_hash": "c709c6230b0a7c29d91a5fb9ea9f213c946666808342f535c901a34cd05fc55d",
      "index": 4,
      "assets": [{ "unit": "lovelace", "amount": 4986427327 }],
      "address": "addr1v9y3khg8w37p0pz8x9y0l82d3mzxr8zqssu5358z8hjsjfcn7lprq",
      "datum": null,
      "reference_script": null
    },
    "mint": [
      {
        "unit": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a3130307061626f6e",
        "amount": 1
      },
      {
        "unit": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a3232327061626f6e",
        "amount": 1
      }
    ],
    "invalid_before": null,
    "invalid_hereafter": null,
    "fee": 348896,
    "deposit": 0,
    "certificates": {
      "stake_registrations": [],
      "stake_deregistrations": [],
      "stake_delegations": [],
      "pool_registrations": [],
      "pool_retirements": [],
      "reg_certs": [],
      "unreg_certs": [],
      "vote_delegations": [],
      "stake_vote_delegations": [],
      "stake_reg_delegations": [],
      "vote_reg_delegations": [],
      "stake_vote_reg_delegations": [],
      "auth_committee_hot_certs": [],
      "resign_committee_cold_certs": [],
      "reg_drep_certs": [],
      "unreg_drep_certs": [],
      "update_drep_certs": [],
      "mir_transfers": []
    },
    "withdrawals": [],
    "additional_signers": [],
    "scripts_executed": [
      {
        "hash": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a",
        "type": "plutusv2",
        "bytes": "590b4c01000032323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323222323232323232325335350032235002222223222222223350132333553041042302502623300a0014800400494ccd5cd19b8733022304104233304f22253350011002221350022233007333305622225335001100222135002225333573460ac002266601000e00c006266601000e6609e66608600e00400200c00600400c00200607e01466e08cc088c1041080052004153353335530410423025023302148811c467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa003355303d0422350010443501022222222222233355304d04e3303f223355304b05023500122330440023355304e0532350012233047002333500137009000380233700002900000099aa982582811a8009119822001199a800919aa982782a11a8009119824001181a0008009119981881a001000919aa982782a11a8009119824001181a80080099981601780100082591a800911a80090210060999aa9820821181281311a8009191911299a999aa982382418158149299a9980c1a800901d28028a99aa999a9a800911100102010999ab9a3375e00260a666ae80d400c88c154cd5d0181200119aba0533500121305633574066a002460ae66ae80c098004dd8814111182d19aba0375000666ae80dd400119aba037500026ec40a8dd88138982b1bb1026376204c66ae80dd480219aba04c10100003357406ea54068dd881202382110208998121a80091110021981d0911800a4411cbe2740601593f3049a0f55d35fd88cebcb1ee691b4d808e9a3ad839c0030223022302248811c0de79fa8718d6f7b1125e5a5d3244cc9c9a26e3b8b3eeb385c92d9930004004001215335333553047048302b029253353301835001203a5004133024350012222004002040012153353300f5004480084cc03d400d200203f03f03f1337149110332323200002133714911033130300000100103903922333573466e1cccc08000d402c0080040e00cc4480045888ccd5cd181c99980c001280180081801589a800911999a80081b100081b01b2999ab9a3034303b00413232321233001003002301d357426ae88c0f00194ccd5cd181a981e000899191919191919191919191919191919191919191919190919999999999980080c00b00a009008007006004803802801801181a9aba135744004666060eb88004d5d08009aba200233302e02f2001357420026ae88008cc0e9d71aba100135744006a666ae68c110c12c0044c8c8c8c848cc0040100094ccd5cd1823982700089919091980080180118149aba135744609c00466052eb4d5d098268008229baa357426ae88c13000d4ccd5cd1822982600089919091980080180118139aba13574460980046604eeb4d5d098258008219baa3574260940020846ea8d5d08009aba200233302703075a6ae84004d5d1001198198139aba100135744004666046eb8088d5d08009aba200233302175c0406ae84004d5d10011981680e9aba100135744004660560346ae84004d5d1181e0011981480c1aba1303b00103337546ae84c0e80100c94ccd5cd181a000899091180100199813bae3574260720042a666ae68c0cc0044c8488c00400ccc09c8c94ccd5cd181a981e0008991998119bae3574260780046eb8d5d080098121aba1357440026ae88c0ec0040ccdd50009aba13039002031303900137540066ea80048cd40048c0cccd5d01ba900137620084606866ae80dd48009bb10042122300200349888d400888d400c88c8cd40148cd401094ccd5cd19b8f00200100302520262335004202625333573466e3c00800400c09454cd400c854cd400884cd40088cd40088cd40088cd40088cc04000800480a48cd400880a48cc0400080048880a4888cd401080a48894ccd5cd19b8700600315333573466e1c0140084ccd5cd19b8700400103002b02a02a02315335001202302722233355302102702533553022027235001223301b0023007001333553021027223500222533533355302a02b300e00c235001223300a002005006100313302900400302400133553022027235001223301b002330372253350011300a003221350022253353300c002008112223300200a0041300600300400221222300300421222300100422333573466e3c00800408006c88cccd54008cc04c88ccd4018094004008d401009088cdc0000a40040029000091980091299a80100f080080c1980791118019801000900091980791199a8018108010009a800810091980091299a801080080b00d111198159119a800a4000446a00444a666ae68cdc78010040998189119a800a4000446a00444a666ae68cdc7801006880089803001800898030018019192999ab9a3022001018153335734604200202603e604e6ea800488c8c94ccd5cd1812000889110008a999ab9a30230011321222300300430043574260500042a666ae68c08800444888008080c0a0004dd50009192999ab9a301f30260011323212330010030023004357426ae88c098008c020d5d0981280080e9baa00123253335734603c604a0022646464646464646424666600201200e0060046602ceb8d5d09aba200453335734604c002264244460040086ae84c0a800854ccd5cd1812800899091118008021bae3574260540042a666ae68c0900044488800c088c0a8004dd51aba10013574400466600ceb8014d5d08009aba23025002300c3574260480020386ea8004cc005d73ad222330252233335573e0024030464660346601a600e6050002600c604e00260086ae8800cd5d080100d1bab0012323253335734603e00226424444600800a60086ae84c08800854ccd5cd180f00089909111180100298059aba13022002153335734603a00226424444600200a600a6ae84c08800854ccd5cd180e0008990911118018029bae35742604400403460440026ea80048c8c94ccd5cd19b874803000444888802854ccd5cd19b874802800444888888801054ccd5cd19b87480200044c8c848888888cc004024020dd69aba13574460440066eb8d5d098108010a999ab9a301e001132321222222233002009008375c6ae84d5d118110019bae3574260420042a666ae68c0740044c8c848888888cc018024020dd71aba135744604400660146ae84c08400854ccd5cd180e00089909111111180380418051aba13021002153335734603600226424444444600a01060146ae84c084008064c084004dd50009192999ab9a30193020001132321233001003002375a6ae84d5d1181000118019aba1301f0010173754002464a666ae68c060c07c0044dd71aba1301e001016375400244400644246600200600444424666002008006004464a666ae68c050c06c0044c8c848cc00400c008cc018010d5d09aba2301b00230043574260340020246ea80048c8c94ccd5cd180a8008991919190911998008030020019bad357426ae88008dd69aba10013574460360066eb4d5d0980d0010a999ab9a30140011321223002003300435742603400402460340026ea80048c8c94ccd5cd180a00089909118008019bae3574260320042a666ae68c04c0044c8488c00800cdd71aba1301900201130190013754002446464a666ae68c04c0044c8488c00800cc010d5d0980c8010a999ab9a30140010050113019001375400220022014446602c446666aae7c00480248cc028c014d5d080118019aba200200b375800260264422444a66a00220044426600a004666aa600e01a00a0080026024442244a66a00200a44266012600800466aa600c016008002200220084424466002008006601c4422444a66a00226a006010442666a00a0126008004666aa600e01000a0080022400244004440022a66ae712401035054310016253357389201024c680016370e90001b8748008dc3a40086e1d2006374a90001ba54800955cf2ab9d23230010012233003300200200101",
        "json": null
      }
    ],
    "scripts_successful": true,
    "redeemers": {
      "spends": [],
      "mints": [
        {
          "policy": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a",
          "data": {
            "json": {
              "constructor": 0,
              "fields": [
                {
                  "list": [
                    {
                      "constructor": 0,
                      "fields": [
                        { "bytes": "7061626f6e" },
                        { "bytes": "436f6e7472696275746f7220496e666f" },
                        {
                          "constructor": 0,
                          "fields": [
                            {
                              "constructor": 0,
                              "fields": [
                                {
                                  "bytes": "32c44890120645f4aa5ca81bcd979db15a2e2d6bce35667a5b643c4d"
                                }
                              ]
                            },
                            {
                              "constructor": 0,
                              "fields": [
                                {
                                  "constructor": 0,
                                  "fields": [
                                    {
                                      "constructor": 0,
                                      "fields": [
                                        {
                                          "bytes": "79d149613a79dc6226a3f3b447bd4d41fd4ced11fdc5896cbd867cfc"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "bytes": "d8799f9fd8799f457061626f6e50436f6e7472696275746f7220496e666fd8799fd8799f581c32c44890120645f4aa5ca81bcd979db15a2e2d6bce35667a5b643c4dffd8799fd8799fd8799f581c79d149613a79dc6226a3f3b447bd4d41fd4ced11fdc5896cbd867cfcffffffffffffff"
          },
          "ex_units": [1530046, 448305334]
        }
      ],
      "withdrawals": [],
      "certificates": [],
      "votes": [],
      "proposals": []
    },
    "metadata": {
      "721": {
        "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a": {
          "222pabon": {
            "description": [
              "This token is used to commit to projects in",
              "the Gimbalabs Treasury. Enabled by Andamio."
            ],
            "files": [
              {
                "mediaType": "image/png",
                "src": [
                  "ipfs://bafybeih6iumse4lcuinw75jlimz6jdzqqwrbujdeyzmc6uh3",
                  "j2ycetiiay"
                ]
              }
            ],
            "image": [
              "ipfs://bafybeih6iumse4lcuinw75jlimz6jdzqqwrbujdeyzmc6uh3",
              "j2ycetiiay"
            ],
            "mediaType": "image/png",
            "name": "Gimbalabs Contributor"
          }
        }
      }
    },
    "size": 1456
  },
  "last_updated": {
    "timestamp": "2025-02-04 15:18:55",
    "block_hash": "23fcd92c4a38bb423e4f762832c75a82e140596db2e072e32048969b93bfbd07",
    "block_slot": 147116044
  }
}
```

## 5. Funding Treasury:

Tx Hash (Mainnet): `59dcee7f994c3c2ac8aca5f00ffaf93a38485c828e8bcf79c852cd78d24ac123`

```json
{
  "data": {
    "tx_hash": "59dcee7f994c3c2ac8aca5f00ffaf93a38485c828e8bcf79c852cd78d24ac123",
    "block_hash": "41d4e589aa1bd0041e7e4fce0f69f1562c4bf4995a7c186ef31a5a9e0fce579d",
    "block_tx_index": 1,
    "block_height": 10864090,
    "block_timestamp": 1726927865,
    "block_absolute_slot": 135361574,
    "block_epoch": 510,
    "inputs": [
      {
        "tx_hash": "078fa73717409634fe9dc06c0a685701746160ca8e0dfd186f72c99a1270fc34",
        "index": 3,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a32323267696d62616c6162732d636f6e747269622d3030312d63333031",
            "amount": 1
          }
        ],
        "address": "addr1q8s2ftaka8a6mcasatlzgq3h3n5ztawfl4rup3wh987sk2u9q2wuwvypxg56t6wrt67kwym9qvcte5qgsajjmk2u2hqsnacspa",
        "datum": null,
        "reference_script": null
      },
      {
        "tx_hash": "355a0ce862dc5b99ad49967fc6a507b497febb6cdc3669f1ce56805a90e2a779",
        "index": 1,
        "assets": [
          { "unit": "lovelace", "amount": 5000000 },
          {
            "unit": "6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe2a36ecd8833466f5b9c09af45c4a274a43f3255d4d5f720a98204650",
            "amount": 1
          }
        ],
        "address": "addr1z9563wuln5hwr8yrspwx0lz030k9g6gryd8c2077qmv9tacdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsd24ahd",
        "datum": {
          "type": "inline",
          "hash": "e5bb6c3871c98f9909232dea7707f7e53a8d5b87c2778aa02881d87f4ba3aba8",
          "bytes": "d87a9fd8799f9fd8799f581b6e6f74696f6e2d737562736372697074696f6e2d51322d323032341b000001922a1c51c01a46edf5801a01312d00ffff9f581ced99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174affffff",
          "json": {
            "constructor": 1,
            "fields": [
              {
                "constructor": 0,
                "fields": [
                  {
                    "list": [
                      {
                        "constructor": 0,
                        "fields": [
                          {
                            "bytes": "6e6f74696f6e2d737562736372697074696f6e2d51322d32303234"
                          },
                          { "int": 1727283352000 },
                          { "int": 1190000000 },
                          { "int": 20000000 }
                        ]
                      }
                    ]
                  },
                  {
                    "list": [
                      {
                        "bytes": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        "reference_script": null
      },
      {
        "tx_hash": "355a0ce862dc5b99ad49967fc6a507b497febb6cdc3669f1ce56805a90e2a779",
        "index": 2,
        "assets": [
          { "unit": "lovelace", "amount": 52085000000 },
          {
            "unit": "2b0a04a7b60132b1805b296c7fcb3b217ff14413991bf76f72663c3067696d62616c",
            "amount": 24772500000
          }
        ],
        "address": "addr1z9563wuln5hwr8yrspwx0lz030k9g6gryd8c2077qmv9tacdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsd24ahd",
        "datum": {
          "type": "inline",
          "hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
          "bytes": "d87980",
          "json": { "constructor": 0, "fields": [] }
        },
        "reference_script": null
      },
      {
        "tx_hash": "603d77878701864b4520fabe27081e6ec9531375fe70db25db953ea1dc1f6b81",
        "index": 3,
        "assets": [{ "unit": "lovelace", "amount": 19775914 }],
        "address": "addr1q8s2ftaka8a6mcasatlzgq3h3n5ztawfl4rup3wh987sk2u9q2wuwvypxg56t6wrt67kwym9qvcte5qgsajjmk2u2hqsnacspa",
        "datum": null,
        "reference_script": null
      }
    ],
    "outputs": [
      {
        "tx_hash": "59dcee7f994c3c2ac8aca5f00ffaf93a38485c828e8bcf79c852cd78d24ac123",
        "index": 0,
        "assets": [
          { "unit": "lovelace", "amount": 1190000000 },
          {
            "unit": "2b0a04a7b60132b1805b296c7fcb3b217ff14413991bf76f72663c3067696d62616c",
            "amount": 20000000
          },
          {
            "unit": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a32323267696d62616c6162732d636f6e747269622d3030312d63333031",
            "amount": 1
          }
        ],
        "address": "addr1zy4rdmxcsv6xdadeczd0ghz2ya9y8ue9t4x47us2nqsyv5qdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsac0eeu",
        "datum": {
          "type": "inline",
          "hash": "e5c9feabe28a52dae5728edb8ef562f29ad1474a92cc8f711db18b6e8e01b5bc",
          "bytes": "d8799f581b6e6f74696f6e2d737562736372697074696f6e2d51322d323032341b000001922a1c51c0d8799fd87a9f581c69a8bb9f9d2ee19c83805c67fc4f8bec546903234f853fde06d855f7ffd8799fd8799fd8799f581c0de79fa8718d6f7b1125e5a5d3244cc9c9a26e3b8b3eeb385c92d993ffffffffd87980d8799fd8799f581ce0a4afb6e9fbade3b0eafe2402378ce825f5c9fd47c0c5d729fd0b2bffd8799fd8799fd8799f581c85029dc730813229a5e9c35ebd6713650330bcd00887652dd95c55c1ffffffffff",
          "json": {
            "constructor": 0,
            "fields": [
              {
                "bytes": "6e6f74696f6e2d737562736372697074696f6e2d51322d32303234"
              },
              { "int": 1727283352000 },
              {
                "constructor": 0,
                "fields": [
                  {
                    "constructor": 1,
                    "fields": [
                      {
                        "bytes": "69a8bb9f9d2ee19c83805c67fc4f8bec546903234f853fde06d855f7"
                      }
                    ]
                  },
                  {
                    "constructor": 0,
                    "fields": [
                      {
                        "constructor": 0,
                        "fields": [
                          {
                            "constructor": 0,
                            "fields": [
                              {
                                "bytes": "0de79fa8718d6f7b1125e5a5d3244cc9c9a26e3b8b3eeb385c92d993"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { "constructor": 0, "fields": [] },
              {
                "constructor": 0,
                "fields": [
                  {
                    "constructor": 0,
                    "fields": [
                      {
                        "bytes": "e0a4afb6e9fbade3b0eafe2402378ce825f5c9fd47c0c5d729fd0b2b"
                      }
                    ]
                  },
                  {
                    "constructor": 0,
                    "fields": [
                      {
                        "constructor": 0,
                        "fields": [
                          {
                            "constructor": 0,
                            "fields": [
                              {
                                "bytes": "85029dc730813229a5e9c35ebd6713650330bcd00887652dd95c55c1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        "reference_script": null
      },
      {
        "tx_hash": "59dcee7f994c3c2ac8aca5f00ffaf93a38485c828e8bcf79c852cd78d24ac123",
        "index": 1,
        "assets": [
          { "unit": "lovelace", "amount": 5000000 },
          {
            "unit": "6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe2a36ecd8833466f5b9c09af45c4a274a43f3255d4d5f720a98204650",
            "amount": 1
          }
        ],
        "address": "addr1z9563wuln5hwr8yrspwx0lz030k9g6gryd8c2077qmv9tacdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsd24ahd",
        "datum": {
          "type": "inline",
          "hash": "3e4d85b5fdd0afb387b821e2d7a2d7fe1eee29f7b337132a4ea339e1ebbee4b8",
          "bytes": "d87a9fd8799f809f581ced99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174affffff",
          "json": {
            "constructor": 1,
            "fields": [
              {
                "constructor": 0,
                "fields": [
                  { "list": [] },
                  {
                    "list": [
                      {
                        "bytes": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        "reference_script": null
      },
      {
        "tx_hash": "59dcee7f994c3c2ac8aca5f00ffaf93a38485c828e8bcf79c852cd78d24ac123",
        "index": 2,
        "assets": [
          { "unit": "lovelace", "amount": 50895000000 },
          {
            "unit": "2b0a04a7b60132b1805b296c7fcb3b217ff14413991bf76f72663c3067696d62616c",
            "amount": 24752500000
          }
        ],
        "address": "addr1z9563wuln5hwr8yrspwx0lz030k9g6gryd8c2077qmv9tacdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsd24ahd",
        "datum": {
          "type": "inline",
          "hash": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
          "bytes": "d87980",
          "json": { "constructor": 0, "fields": [] }
        },
        "reference_script": null
      },
      {
        "tx_hash": "59dcee7f994c3c2ac8aca5f00ffaf93a38485c828e8bcf79c852cd78d24ac123",
        "index": 3,
        "assets": [{ "unit": "lovelace", "amount": 21054580 }],
        "address": "addr1q8s2ftaka8a6mcasatlzgq3h3n5ztawfl4rup3wh987sk2u9q2wuwvypxg56t6wrt67kwym9qvcte5qgsajjmk2u2hqsnacspa",
        "datum": null,
        "reference_script": null
      }
    ],
    "reference_inputs": [
      {
        "tx_hash": "078fa73717409634fe9dc06c0a685701746160ca8e0dfd186f72c99a1270fc34",
        "index": 1,
        "assets": [
          { "unit": "lovelace", "amount": 2000000 },
          {
            "unit": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a31303067696d62616c6162732d636f6e747269622d3030312d63333031",
            "amount": 1
          }
        ],
        "address": "addr1zxlzwsrqzkflxpy6pa2axh7c3n4uk8hxjx6dsz8f5wkc88qdu706suvddaa3zf095hfjgnxfex3xuwut8m4nshyjmxfsvp40pg",
        "datum": {
          "type": "inline",
          "hash": "6b45df5b8051560bf779bc90ab0292a3c2d962f4fe4b578dca0d115ad10df5de",
          "bytes": "d8799fd8799fd8799f581ce0a4afb6e9fbade3b0eafe2402378ce825f5c9fd47c0c5d729fd0b2bffd8799fd8799fd8799f581c85029dc730813229a5e9c35ebd6713650330bcd00887652dd95c55c1ffffffff50436f6e7472696275746f7220496e666f17581ced99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174aff",
          "json": {
            "constructor": 0,
            "fields": [
              {
                "constructor": 0,
                "fields": [
                  {
                    "constructor": 0,
                    "fields": [
                      {
                        "bytes": "e0a4afb6e9fbade3b0eafe2402378ce825f5c9fd47c0c5d729fd0b2b"
                      }
                    ]
                  },
                  {
                    "constructor": 0,
                    "fields": [
                      {
                        "constructor": 0,
                        "fields": [
                          {
                            "constructor": 0,
                            "fields": [
                              {
                                "bytes": "85029dc730813229a5e9c35ebd6713650330bcd00887652dd95c55c1"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { "bytes": "436f6e7472696275746f7220496e666f" },
              { "int": 23 },
              {
                "bytes": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a"
              }
            ]
          }
        },
        "reference_script": null
      },
      {
        "tx_hash": "e20226fda48a48c153b03b0d8d6fdce0095218b93136695b964fa90c078b28a2",
        "index": 0,
        "assets": [{ "unit": "lovelace", "amount": 20843160 }],
        "address": "addr1q9t44xsq6uyr0ds5vv23x92q7zzgph4kny3q758zndgt7c9a4nqn5t5w9e36hps534yv9uejam2snhgkup5rvqm74xjsx46smn",
        "datum": null,
        "reference_script": {
          "hash": "69a8bb9f9d2ee19c83805c67fc4f8bec546903234f853fde06d855f7",
          "type": "plutusv2",
          "bytes": "5911f1010000323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323222232323232323232325335350012323223500423232322232222222222333350162533550131533533302d355010204a0320011333573466e1d200133302e009032001059051050050235001222533501d20651533533306d222533500205622135002223500122225335533533048004501d133303b00304000905e06613300b0070090140011325333573466e1ccdc098151816a80900218150008999ab9a3370e66e04c0a0c0b5404800cc0a0004174154150ccc1b48894cd400854cd400419c88400c884d400888894cd54cd54ccd400817084cc0f8004c0f0178817454cd4ccd54c19c1a0c110114c1200f8c0fc00c1701901704cc024014cc19801801c4cc02401401d403817014c8d4004888894cd407c8c854cd4ccc0d0d5405c81440e401854cd4cccc1c488894cd400c1b0884d400888894cd54cd4ccd54c1b01b4c1240e08d400488ccd54c1bc1c0c1300ec8d400488ccd40048cc155200000105423305500148000004cc11400c02054ccd400818484cc10c004c10402081881841a44ccc02801402001d4048d5405c8144c164d400888cc170ccd4cc1cc8848894cd40041988854cd4cc01401000840044cc1a8008ccd4c01c1b001401000419488d40088888d401488894ccd5cd19b8f00800415333573466e1c01c00c54ccd5cd19b8700600213305000500106306306350033500406600115335333553062063303f04030430053500206515335333553062063303f02e235001232253353307522533500105d22135002225335333350022333350092533333335002215333333350022133050002001220662065064064220662206622153333333500320662215335330520040021330530030010672066065065220672206721533333335002206522066213305000200106406422066220661533333335001206422065206406b06322065220651533333335001206422065206406306b220652206522153333333500320662206720660650652215333573466e3c0100084cc14c00c00419c8819c8854ccccccd400c81988819c81981941948819c8854ccd5cd19b8f004002133054003001067206420642064233335009206423304f002001206420642333350092064206423304e0020012064233335009206420642064233051002001130630011300600300f213303d001307333574060e466ae80dd41aa803101c99aba037506aa00c406466ae80dd48059bb103c37620780b660a6002a02a264a66a6666666660e4444444444a66a0102a66a00e0e4442666ae68c1d8cccd54c1b81bccc19888ccd40e01c8004008d40d81c488cdc0000a400401290000360321109a8011111299aa99a9a8021119a801103591982b0008070a99aa999a801033909982480080690340a999ab9a3370e66608a0069110048810000a15333573466e1cccc11400c1041080244ccc11000c02001c19c19c19c19c4cccccccc03c014cc1c401803403002c02802402001c4cccccccc03c01403403002c02802402001c050184c1b8cd5d01ba90083357406ea0d540088148cd5d01814a80b99aba0303705933574060520086ec40e001cd5400880d4d5400880b801800454cd4cccc1c888894cd400c1b4884d400888d400488894cd4ccc10400c0280241b04ccc03001c028024054018cdc524503313030000051333035501c00600105805833714911033232320000405705705705713500122333072222533500206c22135002222253353304d0070041006133009005007002008066235001222533501d215335333031355014204e036002153355017133355305f060303c03d2533553335350012032055213303700130353058330590060052056133303235001204f037003055500f054054064133305f222533500215335001059221003221350022222533533038004500d1330090053305800600713300900500700104e133305c22253350021533500105622100322135002223500122225335533533037004500c153353335530580593035036303902f303000304d05504d13300b0073305700800913300b00700900304b1355001222200413500622333350010520520523305c2225335002056221350022253353303700200510011330070030050031333553048049302502630294891c467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa00302050011350012222222222223335530530543304b2233553051056235001223305000233553054059235001223305300233350013700900038023370000290000009981700100082891a800911a80090228060890008b2999ab9a304c3053007132323212330010030023031357426ae88c1500254ccd5cd1826982a000899191919191919191919191919191919191919191919190919999999999980080c00b00a00900800700600480380280180118249aba135744004666088eb88004d5d08009aba20023330420432001357420026ae88008cc145d71aba100135744006a666ae68c170c18c0044c8c8c8c848cc0040100094ccd5cd182f9833000899190919800801801181e9aba13574460cc0046607aeb4d5d0983280082e1baa357426ae88c19000d4ccd5cd182e9832000899190919800801801181d9aba13574460c800466076eb4d5d0983180082d1baa3574260c40020b26ea8d5d08009aba200233303b04475a6ae84004d5d10011982501d9aba10013574400466606eeb80d8d5d08009aba200233303575c0686ae84004d5d1001198220189aba1001357440046608405c6ae84004d5d1182a001198200161aba1305300104a37546ae84c14801c1254ccd5cd18270008990911118020029bae3574260a20042a666ae68c1340044c848888c004014cccc0d0c0f80f4c0f9d73ae3574260a20042a666ae68c1300044c848888c00c014cccc0d1d6bad75c6ae84c14400854ccd5cd182580089919091111801002a999ab9a304c3053001132323232323232321233333001009007005003002303d357426ae88008dd71aba1001357440046eb8d5d08009aba2002375c6ae84004d5d118298011bae3574260a40020926ea8d5d0982880102418288009baa0065333573460920022646072a666ae68c124c1400044cc0e8cc0f00ecd5d098278009981e3ae357426ae88c13c004118dd51aba1304e002153335734609000206c08a609c0026ea8010dd500091a80091182419aba03004002335740a66a00242609266ae80cd40048c128cd5d018030009bb1014222304d3357406ea000ccd5d01ba80023357406ea0004dd880b1bb10131304937620246ec40488cd40048c118cd5d01ba900137620204608e66ae80dd48009bb10103303022230033002001200123335530380393015005200133553034039233300c35001202800800900122200123335530360373013003200133553032037233300a3500120264881004881000011233001225335002100102c0333302b7009000119aa981781a11a80081b800a451c2b0a04a7b60132b1805b296c7fcb3b217ff14413991bf76f72663c300048810667696d62616c002220022223335734607266600800600400205e04e4446607e4466a0029000111a801112999ab9a3371e00401026608a4466a0029000111a801112999ab9a3371e00401a20022600c0060022600c0060064a66a00242607466ae80d400488c0eccd5d01ba73303f2253350011376200e44266ae80d40088888c10ccd5d01ba90043357406ea000ccd5d01ba80023357406ea0004dd8806980200080119aba0374e6607e44a66a00226ec401c884cd5d01ba90023004001001376200a6ec400c4c0e0dd880124c44666ae68cdd78010008150112451c6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe0023355302502a23500102c001223355302502a2350012233024002333500123355302902e2350012233028002300b0010012233300800f00200123355302902e2350012233028002300c00100133300300a00200122233355302402a0283355302502a2350012233024002300700133355302402a223500222533533355302d02e300a00b235001223300a002005006100313302c0040030270013355302502a23500122330240023303b2253350011300a003221350022253353300c002008112223300200a0041300600300400221222300300421222300100423301c223335003028002001350010273301a2253350020211001018223500222350032232335005233500425333573466e3c00800400c07c80808cd4010808094ccd5cd19b8f00200100301f15335003215335002213300900200101d15335001201d02422335002233500223350022335002233007002001201c2335002201c23300700200122201c222335004201c2225333573466e1c01800c54ccd5cd19b8700500213300a00400101d01d22333573466e3c00800407c05c88ccd5cd19b8700200101e016225333573466e3cd4008084d40040844ccd5cd19b87350020223500102201d01501423253335734604c0020362a666ae68c09400404c088c0acdd50009119192999ab9a302800111222001153335734604e0022642444600600860086ae84c0b000854ccd5cd18130008891100101198160009baa001232533357346046605400226464246600200600460086ae84d5d1181500118041aba130290010203754002464a666ae68c088c0a40044c8c8c8c8c8c8c8c848cccc00402401c00c008cc059d71aba135744008a666ae68c0a80044c84888c008010d5d098170010a999ab9a302900113212223001004375c6ae84c0b800854ccd5cd18140008891100181298170009baa357420026ae88008ccc019d70029aba100135744605200460186ae84c0a000407cdd500099800bae75a44466052446666aae7c004806c8c8cc074cc058c01cc0b0004c018c0ac004c010d5d10019aba100201d375600246464a666ae68c08c0044c848888c010014c010d5d098130010a999ab9a3022001132122223002005300b35742604c0042a666ae68c0840044c020c014d5d098130010a999ab9a3020001132122223003005375c6ae84c098008074c098004dd5000919192999ab9a3370e90060008891110050a999ab9a3370e90050008891111110020a999ab9a3370e90040008991909111111198008048041bad357426ae88c09800cdd71aba1302500215333573460440022646424444444660040120106eb8d5d09aba23026003375c6ae84c09400854ccd5cd18108008991909111111198030048041bae357426ae88c09800cc028d5d098128010a999ab9a3020001132122222223007008300a35742604a0042a666ae68c07c0044c848888888c014020c028d5d0981280100e18128009baa00123253335734603a60480022646424660020060046eb4d5d09aba2302400230033574260460020346ea80048c94ccd5cd180e181180089bae3574260440020326ea800488800c848888c0040148888c94ccd5cd180e18118008991919190919980080200180118031aba135744006600c6ae84008c018d5d098118011aba230220010193754002464a666ae68c060c07c0044c8c848cc00400c008cc018010d5d09aba2301f002300435742603c00202a6ea80048c8c94ccd5cd180c8008991919190911998008030020019bad357426ae88008dd69aba100135744603e0066eb4d5d0980f0010a999ab9a30180011321223002003300435742603c00402a603c0026ea80048c8c94ccd5cd180c00089909118008019bae35742603a0042a666ae68c05c0044c8488c00800cdd71aba1301d002014301d0013754002446464a666ae68c05c0044c01cc010d5d0980e8010a999ab9a3018001005014301d00137540022002201a42446004006442466002006004464a666ae68c040c05c0044c8c8c8c8c8c848cccc00401c01400c008dd69aba1357440046eb4d5d08009aba2002375a6ae84004d5d1180b8011bae35742602c00201a6ea800488cc05c88cccd55cf800900491980518029aba10023003357440040166eb0004c05088448894cd40044008884cc014008ccd54c01c034014010004c04c8844894cd4004014884cc024c010008cd54c01802c0100044004401088488cc00401000cc03c88448894cd40044d400c020884ccd4014024c010008ccd54c01c02001401000448004880088800454cd5ce24903505431001625002153357389210016370e90001b8748008dc3a40086e1d2006374a90001ba54800955cf2ab9d23230010012233003300200200101",
          "json": null
        }
      }
    ],
    "collateral_inputs": [
      {
        "tx_hash": "603d77878701864b4520fabe27081e6ec9531375fe70db25db953ea1dc1f6b81",
        "index": 5,
        "assets": [{ "unit": "lovelace", "amount": 5000000 }],
        "address": "addr1q8s2ftaka8a6mcasatlzgq3h3n5ztawfl4rup3wh987sk2u9q2wuwvypxg56t6wrt67kwym9qvcte5qgsajjmk2u2hqsnacspa",
        "datum": null,
        "reference_script": null
      }
    ],
    "collateral_return": null,
    "mint": [],
    "invalid_before": null,
    "invalid_hereafter": null,
    "fee": 721334,
    "deposit": 0,
    "certificates": {
      "stake_registrations": [],
      "stake_deregistrations": [],
      "stake_delegations": [],
      "pool_registrations": [],
      "pool_retirements": [],
      "reg_certs": [],
      "unreg_certs": [],
      "vote_delegations": [],
      "stake_vote_delegations": [],
      "stake_reg_delegations": [],
      "vote_reg_delegations": [],
      "stake_vote_reg_delegations": [],
      "auth_committee_hot_certs": [],
      "resign_committee_cold_certs": [],
      "reg_drep_certs": [],
      "unreg_drep_certs": [],
      "update_drep_certs": [],
      "mir_transfers": []
    },
    "withdrawals": [],
    "additional_signers": [],
    "scripts_executed": [
      {
        "hash": "69a8bb9f9d2ee19c83805c67fc4f8bec546903234f853fde06d855f7",
        "type": "plutusv2",
        "bytes": "5911f1010000323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323222232323232323232325335350012323223500423232322232222222222333350162533550131533533302d355010204a0320011333573466e1d200133302e009032001059051050050235001222533501d20651533533306d222533500205622135002223500122225335533533048004501d133303b00304000905e06613300b0070090140011325333573466e1ccdc098151816a80900218150008999ab9a3370e66e04c0a0c0b5404800cc0a0004174154150ccc1b48894cd400854cd400419c88400c884d400888894cd54cd54ccd400817084cc0f8004c0f0178817454cd4ccd54c19c1a0c110114c1200f8c0fc00c1701901704cc024014cc19801801c4cc02401401d403817014c8d4004888894cd407c8c854cd4ccc0d0d5405c81440e401854cd4cccc1c488894cd400c1b0884d400888894cd54cd4ccd54c1b01b4c1240e08d400488ccd54c1bc1c0c1300ec8d400488ccd40048cc155200000105423305500148000004cc11400c02054ccd400818484cc10c004c10402081881841a44ccc02801402001d4048d5405c8144c164d400888cc170ccd4cc1cc8848894cd40041988854cd4cc01401000840044cc1a8008ccd4c01c1b001401000419488d40088888d401488894ccd5cd19b8f00800415333573466e1c01c00c54ccd5cd19b8700600213305000500106306306350033500406600115335333553062063303f04030430053500206515335333553062063303f02e235001232253353307522533500105d22135002225335333350022333350092533333335002215333333350022133050002001220662065064064220662206622153333333500320662215335330520040021330530030010672066065065220672206721533333335002206522066213305000200106406422066220661533333335001206422065206406b06322065220651533333335001206422065206406306b220652206522153333333500320662206720660650652215333573466e3c0100084cc14c00c00419c8819c8854ccccccd400c81988819c81981941948819c8854ccd5cd19b8f004002133054003001067206420642064233335009206423304f002001206420642333350092064206423304e0020012064233335009206420642064233051002001130630011300600300f213303d001307333574060e466ae80dd41aa803101c99aba037506aa00c406466ae80dd48059bb103c37620780b660a6002a02a264a66a6666666660e4444444444a66a0102a66a00e0e4442666ae68c1d8cccd54c1b81bccc19888ccd40e01c8004008d40d81c488cdc0000a400401290000360321109a8011111299aa99a9a8021119a801103591982b0008070a99aa999a801033909982480080690340a999ab9a3370e66608a0069110048810000a15333573466e1cccc11400c1041080244ccc11000c02001c19c19c19c19c4cccccccc03c014cc1c401803403002c02802402001c4cccccccc03c01403403002c02802402001c050184c1b8cd5d01ba90083357406ea0d540088148cd5d01814a80b99aba0303705933574060520086ec40e001cd5400880d4d5400880b801800454cd4cccc1c888894cd400c1b4884d400888d400488894cd4ccc10400c0280241b04ccc03001c028024054018cdc524503313030000051333035501c00600105805833714911033232320000405705705705713500122333072222533500206c22135002222253353304d0070041006133009005007002008066235001222533501d215335333031355014204e036002153355017133355305f060303c03d2533553335350012032055213303700130353058330590060052056133303235001204f037003055500f054054064133305f222533500215335001059221003221350022222533533038004500d1330090053305800600713300900500700104e133305c22253350021533500105622100322135002223500122225335533533037004500c153353335530580593035036303902f303000304d05504d13300b0073305700800913300b00700900304b1355001222200413500622333350010520520523305c2225335002056221350022253353303700200510011330070030050031333553048049302502630294891c467f295621e8d6a12838376a8fbca08c15ec6a95d245075809d03faa00302050011350012222222222223335530530543304b2233553051056235001223305000233553054059235001223305300233350013700900038023370000290000009981700100082891a800911a80090228060890008b2999ab9a304c3053007132323212330010030023031357426ae88c1500254ccd5cd1826982a000899191919191919191919191919191919191919191919190919999999999980080c00b00a00900800700600480380280180118249aba135744004666088eb88004d5d08009aba20023330420432001357420026ae88008cc145d71aba100135744006a666ae68c170c18c0044c8c8c8c848cc0040100094ccd5cd182f9833000899190919800801801181e9aba13574460cc0046607aeb4d5d0983280082e1baa357426ae88c19000d4ccd5cd182e9832000899190919800801801181d9aba13574460c800466076eb4d5d0983180082d1baa3574260c40020b26ea8d5d08009aba200233303b04475a6ae84004d5d10011982501d9aba10013574400466606eeb80d8d5d08009aba200233303575c0686ae84004d5d1001198220189aba1001357440046608405c6ae84004d5d1182a001198200161aba1305300104a37546ae84c14801c1254ccd5cd18270008990911118020029bae3574260a20042a666ae68c1340044c848888c004014cccc0d0c0f80f4c0f9d73ae3574260a20042a666ae68c1300044c848888c00c014cccc0d1d6bad75c6ae84c14400854ccd5cd182580089919091111801002a999ab9a304c3053001132323232323232321233333001009007005003002303d357426ae88008dd71aba1001357440046eb8d5d08009aba2002375c6ae84004d5d118298011bae3574260a40020926ea8d5d0982880102418288009baa0065333573460920022646072a666ae68c124c1400044cc0e8cc0f00ecd5d098278009981e3ae357426ae88c13c004118dd51aba1304e002153335734609000206c08a609c0026ea8010dd500091a80091182419aba03004002335740a66a00242609266ae80cd40048c128cd5d018030009bb1014222304d3357406ea000ccd5d01ba80023357406ea0004dd880b1bb10131304937620246ec40488cd40048c118cd5d01ba900137620204608e66ae80dd48009bb10103303022230033002001200123335530380393015005200133553034039233300c35001202800800900122200123335530360373013003200133553032037233300a3500120264881004881000011233001225335002100102c0333302b7009000119aa981781a11a80081b800a451c2b0a04a7b60132b1805b296c7fcb3b217ff14413991bf76f72663c300048810667696d62616c002220022223335734607266600800600400205e04e4446607e4466a0029000111a801112999ab9a3371e00401026608a4466a0029000111a801112999ab9a3371e00401a20022600c0060022600c0060064a66a00242607466ae80d400488c0eccd5d01ba73303f2253350011376200e44266ae80d40088888c10ccd5d01ba90043357406ea000ccd5d01ba80023357406ea0004dd8806980200080119aba0374e6607e44a66a00226ec401c884cd5d01ba90023004001001376200a6ec400c4c0e0dd880124c44666ae68cdd78010008150112451c6ff723d104cfb99b44cc8254c04ac525d43916c4562797ea3b8c86fe0023355302502a23500102c001223355302502a2350012233024002333500123355302902e2350012233028002300b0010012233300800f00200123355302902e2350012233028002300c00100133300300a00200122233355302402a0283355302502a2350012233024002300700133355302402a223500222533533355302d02e300a00b235001223300a002005006100313302c0040030270013355302502a23500122330240023303b2253350011300a003221350022253353300c002008112223300200a0041300600300400221222300300421222300100423301c223335003028002001350010273301a2253350020211001018223500222350032232335005233500425333573466e3c00800400c07c80808cd4010808094ccd5cd19b8f00200100301f15335003215335002213300900200101d15335001201d02422335002233500223350022335002233007002001201c2335002201c23300700200122201c222335004201c2225333573466e1c01800c54ccd5cd19b8700500213300a00400101d01d22333573466e3c00800407c05c88ccd5cd19b8700200101e016225333573466e3cd4008084d40040844ccd5cd19b87350020223500102201d01501423253335734604c0020362a666ae68c09400404c088c0acdd50009119192999ab9a302800111222001153335734604e0022642444600600860086ae84c0b000854ccd5cd18130008891100101198160009baa001232533357346046605400226464246600200600460086ae84d5d1181500118041aba130290010203754002464a666ae68c088c0a40044c8c8c8c8c8c8c8c848cccc00402401c00c008cc059d71aba135744008a666ae68c0a80044c84888c008010d5d098170010a999ab9a302900113212223001004375c6ae84c0b800854ccd5cd18140008891100181298170009baa357420026ae88008ccc019d70029aba100135744605200460186ae84c0a000407cdd500099800bae75a44466052446666aae7c004806c8c8cc074cc058c01cc0b0004c018c0ac004c010d5d10019aba100201d375600246464a666ae68c08c0044c848888c010014c010d5d098130010a999ab9a3022001132122223002005300b35742604c0042a666ae68c0840044c020c014d5d098130010a999ab9a3020001132122223003005375c6ae84c098008074c098004dd5000919192999ab9a3370e90060008891110050a999ab9a3370e90050008891111110020a999ab9a3370e90040008991909111111198008048041bad357426ae88c09800cdd71aba1302500215333573460440022646424444444660040120106eb8d5d09aba23026003375c6ae84c09400854ccd5cd18108008991909111111198030048041bae357426ae88c09800cc028d5d098128010a999ab9a3020001132122222223007008300a35742604a0042a666ae68c07c0044c848888888c014020c028d5d0981280100e18128009baa00123253335734603a60480022646424660020060046eb4d5d09aba2302400230033574260460020346ea80048c94ccd5cd180e181180089bae3574260440020326ea800488800c848888c0040148888c94ccd5cd180e18118008991919190919980080200180118031aba135744006600c6ae84008c018d5d098118011aba230220010193754002464a666ae68c060c07c0044c8c848cc00400c008cc018010d5d09aba2301f002300435742603c00202a6ea80048c8c94ccd5cd180c8008991919190911998008030020019bad357426ae88008dd69aba100135744603e0066eb4d5d0980f0010a999ab9a30180011321223002003300435742603c00402a603c0026ea80048c8c94ccd5cd180c00089909118008019bae35742603a0042a666ae68c05c0044c8488c00800cdd71aba1301d002014301d0013754002446464a666ae68c05c0044c01cc010d5d0980e8010a999ab9a3018001005014301d00137540022002201a42446004006442466002006004464a666ae68c040c05c0044c8c8c8c8c8c848cccc00401c01400c008dd69aba1357440046eb4d5d08009aba2002375a6ae84004d5d1180b8011bae35742602c00201a6ea800488cc05c88cccd55cf800900491980518029aba10023003357440040166eb0004c05088448894cd40044008884cc014008ccd54c01c034014010004c04c8844894cd4004014884cc024c010008cd54c01802c0100044004401088488cc00401000cc03c88448894cd40044d400c020884ccd4014024c010008ccd54c01c02001401000448004880088800454cd5ce24903505431001625002153357389210016370e90001b8748008dc3a40086e1d2006374a90001ba54800955cf2ab9d23230010012233003300200200101",
        "json": null
      }
    ],
    "scripts_successful": true,
    "redeemers": {
      "spends": [
        {
          "script_hash": "69a8bb9f9d2ee19c83805c67fc4f8bec546903234f853fde06d855f7",
          "input": {
            "tx_hash": "355a0ce862dc5b99ad49967fc6a507b497febb6cdc3669f1ce56805a90e2a779",
            "index": 1
          },
          "input_index": 1,
          "data": {
            "json": {
              "constructor": 0,
              "fields": [
                {
                  "constructor": 0,
                  "fields": [
                    {
                      "bytes": "6e6f74696f6e2d737562736372697074696f6e2d51322d32303234"
                    },
                    {
                      "bytes": "2a36ecd8833466f5b9c09af45c4a274a43f3255d4d5f720a98204650"
                    },
                    {
                      "bytes": "ed99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a"
                    },
                    {
                      "bytes": "67696d62616c6162732d636f6e747269622d3030312d63333031"
                    },
                    {
                      "constructor": 0,
                      "fields": [
                        {
                          "constructor": 0,
                          "fields": [
                            {
                              "bytes": "e0a4afb6e9fbade3b0eafe2402378ce825f5c9fd47c0c5d729fd0b2b"
                            }
                          ]
                        },
                        {
                          "constructor": 0,
                          "fields": [
                            {
                              "constructor": 0,
                              "fields": [
                                {
                                  "constructor": 0,
                                  "fields": [
                                    {
                                      "bytes": "85029dc730813229a5e9c35ebd6713650330bcd00887652dd95c55c1"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "bytes": "d8799fd8799f581b6e6f74696f6e2d737562736372697074696f6e2d51322d32303234581c2a36ecd8833466f5b9c09af45c4a274a43f3255d4d5f720a98204650581ced99c4ef2d46d44be81254424b5bc2ad19056d9e70b22c4c6bbc174a581a67696d62616c6162732d636f6e747269622d3030312d63333031d8799fd8799f581ce0a4afb6e9fbade3b0eafe2402378ce825f5c9fd47c0c5d729fd0b2bffd8799fd8799fd8799f581c85029dc730813229a5e9c35ebd6713650330bcd00887652dd95c55c1ffffffffffff"
          },
          "ex_units": [3708100, 738369447]
        },
        {
          "script_hash": "69a8bb9f9d2ee19c83805c67fc4f8bec546903234f853fde06d855f7",
          "input": {
            "tx_hash": "355a0ce862dc5b99ad49967fc6a507b497febb6cdc3669f1ce56805a90e2a779",
            "index": 2
          },
          "input_index": 2,
          "data": {
            "json": {
              "constructor": 1,
              "fields": [
                {
                  "constructor": 0,
                  "fields": [
                    { "int": 1190000000 },
                    { "int": 20000000 },
                    {
                      "bytes": "2a36ecd8833466f5b9c09af45c4a274a43f3255d4d5f720a98204650"
                    }
                  ]
                }
              ]
            },
            "bytes": "d87a9fd8799f1a46edf5801a01312d00581c2a36ecd8833466f5b9c09af45c4a274a43f3255d4d5f720a98204650ffff"
          },
          "ex_units": [2260074, 489849116]
        }
      ],
      "mints": [],
      "withdrawals": [],
      "certificates": [],
      "votes": [],
      "proposals": []
    },
    "metadata": null,
    "size": 1452
  },
  "last_updated": {
    "timestamp": "2025-02-04 15:19:37",
    "block_hash": "9c3010fc082fc1cc6e64527b126e51669062ba287f2f1db3a55cb1d7a6a1021a",
    "block_slot": 147116086
  }
}
```
