require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain solid hover enter fog sun'; 
let testAccounts = [
"0x62d1a586d288246731b12d36a465f63fcf54beabea7db3076d4b1ae48d121a50",
"0x4f79d0fb16cfab7d0487da2ea0791219456a6701b1586a4b27de3f99b5f0893a",
"0xadcf429e12bdd16da7cf5546cce80be2fac1f30de4816ad67d8f2450aa6e9d05",
"0xa8eca8557d9dcd7bbf89b44207f7726bf2d86b375a8615bb452f8d3d32ebf20d",
"0x82168c517ffdd724236d4b28ea5072854cabc8c3013f2f48bdadcef89f1184d6",
"0x4c9c4dfbec177355fee044d6663757edc2b69facd7352405ee783642997769f7",
"0x322e0ce27f525ce2a59ea8c3eb6bdfdcf9b08d1ce69e57df83b91760927328e3",
"0xc1dcabde7a692376915bee43ec8f8658eb4754b79206e81a2fda5b0e5b3d96ea",
"0xe7f5f33ee2c98677a5445970ef756b9dcd4b209367704f257129341a483fe5ee",
"0x389f6f2f884b95dbc66b952dd980f3abf0da192df48f81af00be4656897bd21d"
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
            version: '^0.8.0'
        }
    }
};

