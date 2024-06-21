import { Button, ConfigProvider } from "antd";
import React from "react";

type AntButtonProps = {
  children: React.ReactNode;
  onClick?: VoidFunction;
  type?: "primary" | "text"; // Add type prop to specify button type
};

const AntButton: React.FC<AntButtonProps> = ({
  children,
  type = "primary",
  onClick,
}) => {
  const style = {
    border: "var(--text-color) 1px solid",
  };

  return type !== "text" ? (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `var(--accent-color)`,
            colorPrimaryHover: `var(--accent-color-hover)`,
            colorPrimaryActive: `white`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button
        type={type}
        size="large"
        shape="round"
        style={{ border: "none" }}
        onClick={onClick}
      >
        {children}
      </Button>
    </ConfigProvider>
  ) : (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: `transparent`,
            colorPrimaryHover: `var(--secondary-color)`,
            lineWidth: 0,
          },
        },
      }}
    >
      <Button
        style={style}
        type="primary"
        size="large"
        shape="round"
        onClick={onClick}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default AntButton;
