export const exchangeDummyData = {
  id: "k30nndxd950uivgf",
  type: "fixed",
  timestamp: "2023-08-19T09:06:52.921Z",
  updated_at: "2023-08-19T09:07:03.434Z",
  currency_from: "btc",
  currency_to: "eth",
  amount_from: "0.05",
  expected_amount: "0.05",
  amount_to: "0.76498367",
  address_from: "3Mq7Zr2Gu8BzVctFNyZtV6wXKYwTxaSLMY",
  address_to: "0x1d0990cbA2Abcf95C0ddF558E0687db57F852598",
  extra_id_from: null,
  extra_id_to: null,
  user_refund_address: null,
  user_refund_extra_id: null,
  tx_from: null,
  tx_to: null,
  status: "waiting",
  redirect_url: null,
  currencies: {
    btc: {
      name: "Bitcoin",
      symbol: "btc",
      network: "",
      has_extra_id: false,
      extra_id: "",
      image: "https://static.simpleswap.io/images/currencies-logo/btc.svg",
      warnings_from: [],
      warnings_to: [],
      validation_address:
        "^[13][a-km-zA-HJ-NP-Z1-9]{25,80}$|^(bc1)[0-9A-Za-z]{25,80}$",
      validation_extra: null,
      address_explorer:
        "https://blockchair.com/bitcoin/address/{}?from=simpleswap",
      tx_explorer:
        "https://blockchair.com/bitcoin/transaction/{}?from=simpleswap",
      confirmations_from: "",
    },
    eth: {
      name: "Ethereum",
      symbol: "eth",
      network: "",
      has_extra_id: false,
      extra_id: "",
      image: "https://static.simpleswap.io/images/currencies-logo/eth.svg",
      warnings_from: [],
      warnings_to: [],
      validation_address: "^(0x)[0-9A-Fa-f]{40}$",
      validation_extra: null,
      address_explorer: "https://etherscan.io/address/{}",
      tx_explorer: "https://etherscan.io/tx/{}",
      confirmations_from: "",
    },
  },
};
