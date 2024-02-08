const BinaryNumbers = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-5xl font-semibold tracking-[.15em] text-main-blue">
        0111<span className="text-white">1</span>
        <span className="text-main-orange">110</span>
      </p>
      <p className="text-5xl font-semibold tracking-[.15em] text-main-blue">
        011011<span className="text-white">11</span>
      </p>
      <p className="text-5xl font-semibold tracking-[.15em] text-main-blue">
        01<span className="text-main-orange">1</span>01100
      </p>
      {/* <p className="text-5xl font-thin tracking-[.3em]">01100101</p> */}
    </div>
  );
};

export default BinaryNumbers;
