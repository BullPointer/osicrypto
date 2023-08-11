export const explorerAddress = (explorerAddr, addressFrom) => {
  return `${explorerAddr?.slice(0, explorerAddr.indexOf("{"))}${addressFrom}${
    explorerAddr?.slice(explorerAddr.indexOf("{")+ 2) 
  }`;
};
