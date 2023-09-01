import { getFaqs } from "../handleApi/documentApi";

export const faqList = [
  "Main",
  "Deposit",
  "Fiat Deposit",
  "Withdrawn",
  "Buy",
  "Sell",
  "Coin",
  "Wallet",
  "Trade",
  "P2P",
  "Gift Card",
];

export const getFaqsObject = async (setFaq) => {
  try {
    const { data } = await getFaqs();
    const faqObj = {};
    for (let index = 0; index < faqList.length; index++) {
      const filtered = data.data.filter((item) => item.type === faqList[index]);
      faqObj[faqList[index]] = filtered;
    }
    setFaq(faqObj);
  } catch (error) {
    console.log("An error occured ", error);
  }
};
