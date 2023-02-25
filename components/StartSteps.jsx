import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} §111111111111111111111111111111111111111111111111111111111111
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      w-[0px] h-[0px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className="fnot-bold text-[20px] text-white"></p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px] first-letter:text-yellow-500 first-letter:font-extrabold first-letter:text-[2.33rem]">
      {text}
    </p>
  </div>
);

export default StartSteps;

