import { ReactElement } from "react";
import styles from "./IconLink.module.css";

type IconLinkProps = {
  url: string;
  altText?: string;
  children?: ReactElement;
};

const IconLink: React.FC<IconLinkProps> = ({ url, altText, children }) => {
  return (
    <a href={url} target="_blank" className={styles.iconLink}>
      {children ? children : <img src="" alt={altText} />}
    </a>
  );
};

export default IconLink;
