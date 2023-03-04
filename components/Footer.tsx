import { FC } from "react";

const Footer: FC = () => {
  return (
    // AFTER Wearablock 교체
    <footer className="text-xs md:text-sm md:px-8 mx-8 mt-8 md:mt-16 border-t-2 py-4 text-gray-600">
      상호명: 원앤온리블록체인메타버스 대표: 홍성현
      <br className="md:hidden" /> Email: h662hong@wearablock.com <br />
      사업자 번호 : 347-38-01196
      <br className="md:hidden" /> 주소: 경기도 부천시 역곡로 19번길 26 106-904
      <br /> Designed by, h662
    </footer>
  );
};

export default Footer;
