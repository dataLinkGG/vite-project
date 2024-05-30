import styles from "./Slot.module.css";

type SlotProps = {
  children: React.ReactNode;
};

const Slot: React.FC<SlotProps> = ({ children }) => {
  return <article className={styles.slot}>{children}</article>;
};

export default Slot;
