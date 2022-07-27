const isProductValid = (
  productName: string,
  productPrice: number,
  productCount: number,
) => {
  if (productName === '' || productPrice === '' || productCount === '') {
    alert('빈칸을 입력하세요');
    return false;
  }
  return true;
};

const isCoinValid = (coin: number) => {
  if (coin % 10 !== 0) {
    alert('투입할 금액이 10원 단위로 나누에 떨어지게 입력하세요');
    return false;
  }
  return true;
};

export { isProductValid, isCoinValid };
