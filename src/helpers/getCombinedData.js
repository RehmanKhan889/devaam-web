export const getCombinedData = (metrics, arg) => {
  let tempArr = [];
  metrics.map((brand) => {
    if (Object.keys(brand.brands).length > 0) {
      let brandKeys = Object.keys(brand.brands);
      Object.values(brand.brands).forEach((brnd, idx) => {
        let obj = tempArr.find(
          (br) => br.key.toString() == brandKeys[idx].toString()
        );
        if (arg == "Volume") {
          if (obj) {
            let temp = tempArr.indexOf(obj);

            tempArr[temp] = {
              ...tempArr[temp],
              key: brandKeys[idx],
              volume: Number(brnd.total_volume) + Number(obj.volume),
            };
          } else {
            tempArr.push({
              key: brandKeys[idx],
              volume: brnd.total_volume,
              brand: `Brand ${idx + 1}`,
            });
          }
        } else if (arg == "Transaction") {
          if (obj) {
            let temp = tempArr.indexOf(obj);

            tempArr[temp] = {
              ...tempArr[temp],
              key: brandKeys[idx],
              volume: Number(brnd.total_transactions) + Number(obj.volume),
            };
          } else {
            tempArr.push({
              key: brandKeys[idx],
              volume: brnd.total_transactions,
              brand: `Brand ${idx + 1}`,
            });
          }
        } else {
          if (obj) {
            let temp = tempArr.indexOf(obj);

            tempArr[temp] = {
              ...tempArr[temp],
              key: brandKeys[idx],
              volume: Number(brnd.total_revenue) + Number(obj.volume),
            };
          } else {
            tempArr.push({
              key: brandKeys[idx],
              volume: brnd.total_revenue,
              brand: `Brand ${idx + 1}`,
            });
          }
        }
      });
    }
    //
  });

  return tempArr;
};
