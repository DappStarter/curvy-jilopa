require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture stove cruise random unlock gentle light army giant'; 
let testAccounts = [
"0x266498b57696cac3621850c89c0af1dc0cd0821eeaca915f32efcfacb983995b",
"0xdb020770533784ae46f3f35195f890aa34cdc49639a0939421f694b89155e7bd",
"0xd660b93e3300558f420cdb8be27d1f44af675d772c5c170a869aa4a327463b4d",
"0x2ee4411a363e6573474818696abdf2bcf662d3d989ede87c8a1f7c7857029664",
"0x7fa67ea7f557bc63d7f72a3826645cd746e2d71ce9741f7770a36674660d1b30",
"0xba7dac84fa999ecaf124840b4d4ba56c61ed7ce1ffd076f29a1ae3bb546dd889",
"0x83d199d18d2aba775c3212636d2fa74f315ca55fda5fe2278a3e00696a8883bd",
"0xaa6ebff6f7c6bdf92cfdbadb019cbd5d8ffe553430403f7396d7ce63a69fa855",
"0x4145aabb863e118cd271afcd4c31dded56a2318764f311a9bc50f6b4958c9371",
"0xb48cf8e463e29f846433d212302e0a1c444e4883fa5d0abf078cebc41b532cea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
