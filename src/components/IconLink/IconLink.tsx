import { ReactElement } from "react";

type IconLinkProps = {
  url: string;
  altText?: string;
  children?: ReactElement;
};

const IconLink: React.FC<IconLinkProps> = ({
  url,
  altText,
  children,
}) => {
  return (
    <a href={url} target="_blank">
      {children ? children : <img src="" alt={altText} />}
    </a>
  );
};

export default IconLink;
