const coinConvert = (dollares) => {
    const soles = dollares * 3.25;
    const pesosM = dollares * 18;
    const pesosC = dollares * 660;
  
    return [soles, pesosM, pesosC];
  };
  
  module.exports = coinConvert;