import { ReactElement } from "react";

type IconLinkProps = {
  url: string;
  altText?: string;
  className?: string;
  children?: ReactElement;
};

const IconLink: React.FC<IconLinkProps> = ({
  url,
  altText,
  className,
  children,
}) => {
  return (
    <a href={url} target="_blank">
      {children ? children : <img src="" alt={altText} className={className} />}
    </a>
  );
};

export default IconLink;
