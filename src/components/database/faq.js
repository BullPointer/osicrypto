import { about1, about2, about3 } from "./faqData/about";
import {
  cryptocurrencyExchangeProcess1,
  cryptocurrencyExchangeProcess2,
  cryptocurrencyExchangeProcess3,
  cryptocurrencyExchangeProcess4,
  cryptocurrencyExchangeProcess5,
  cryptocurrencyExchangeProcess6,
  cryptocurrencyExchangeProcess7,
  cryptocurrencyExchangeProcess8,
  cryptocurrencyExchangeProcess9,
  cryptocurrencyExchangeProcess10,
} from "./faqData/cryptoExPro";
import {
  buyCryptoWithFiat1,
  buyCryptoWithFiat2,
  buyCryptoWithFiat3,
  buyCryptoWithFiat4,
  buyCryptoWithFiat5,
  buyCryptoWithFiat6,
  buyCryptoWithFiat7,
} from "./faqData/buyCrypto";
import { kycaml1, kycaml2, kycaml3, kycaml4, kycaml5 } from "./faqData/KYCAML";

export const faqData = {
  about: [
    {
      _id: 0,
      label: "What is Swapmute?",
      content: about1(),
    },
    {
      _id: 1,
      label: "How does Swapmute work?",
      content: about2(),
    },
    {
      _id: 2,
      label: "Why trust us?",
      content: about3(),
    },
  ],
  cryptocurrencyExchangeProcess: [
    {
      _id: 0,
      label: "How fast will my transaction be processed?",
      content: cryptocurrencyExchangeProcess1(),
    },
    {
      _id: 1,
      label: "What is cryptocurrency wallet address?",
      content: cryptocurrencyExchangeProcess2(),
    },
    {
      _id: 2,
      label: "How do I get my cryptocurrency wallet address?",
      content: cryptocurrencyExchangeProcess3(),
    },
    {
      _id: 3,
      label: "What is a recipient wallet address?",
      content: cryptocurrencyExchangeProcess4(),
    },
    {
      _id: 4,
      label: "What is a transaction hash?",
      content: cryptocurrencyExchangeProcess5(),
    },
    {
      _id: 5,
      label: "How can I cancel a transaction?",
      content: cryptocurrencyExchangeProcess6(),
    },
    {
      _id: 6,
      label:
        "Why is the final amount of funds different from the initial amount?",
      content: cryptocurrencyExchangeProcess7(),
    },
    {
      _id: 7,
      label: "What fees are there during an exchange?",
      content: cryptocurrencyExchangeProcess8,
    },
    {
      _id: 8,
      label: "How long does it take for a transaction to be finished?",
      content: cryptocurrencyExchangeProcess9(),
    },
    {
      _id: 9,
      label: "What is the minimal exchange amount on ChangeNOW?",
      content: cryptocurrencyExchangeProcess10(),
    },
  ],
  buyCryptoWithFiat: [
    {
      _id: 0,
      label: "Can I buy cryptocurrency with fiat through ChangeNOW?",
      content: buyCryptoWithFiat1(),
    },
    {
      _id: 1,
      label:
        "What fees are there for purchasing crypto with USD/EUR card on ChangeNOW?",
      content: buyCryptoWithFiat2(),
    },
    {
      _id: 2,
      label:
        "Why does the minimum amount for purchasing crypto with a bank card amount to $50?",
      content: buyCryptoWithFiat3(),
    },
    {
      _id: 3,
      label:
        "Are there any upper limits when purchasing crypto with a bank card on ChangeNOW?",
      content: buyCryptoWithFiat4(),
    },
    {
      _id: 4,
      label:
        "Why do I have to buy BTC during the process of purchasing crypto on ChangeNOW?",
      content: buyCryptoWithFiat5(),
    },
    {
      _id: 5,
      label: "What card can I use to buy crypto on ChangeNOW?",
      content: buyCryptoWithFiat6(),
    },
    {
      _id: 6,
      label: "Can I use pre-paid cards to buy crypto on ChangeNOW?",
      content: buyCryptoWithFiat7(),
    },
  ],
  KycOrAml: [
    {
      _id: 0,
      label: "KYC/AML explained",
      content: kycaml1(),
    },
    {
      _id: 1,
      label: "KYC/AML procedure",
      content: kycaml2(),
    },
    {
      _id: 2,
      label: "When we may ask for your email?",
      content: kycaml3(),
    },
    {
      _id: 3,
      label: "How are my documents stored after the KYC/AML procedure?",
      content: kycaml4(),
    },
    {
      _id: 4,
      label: "Law Enforcement",
      content: kycaml5(),
    },
  ],
};
