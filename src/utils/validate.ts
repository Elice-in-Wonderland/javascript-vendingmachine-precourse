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

export { isProductValid };
