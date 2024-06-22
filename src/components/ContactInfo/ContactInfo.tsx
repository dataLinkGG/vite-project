import React from "react";
import type { DrawerProps } from "antd";
import { Drawer } from "antd";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { DISCORD, WHATSAPP } from "../../constants";
import IconLink from "../IconLink/IconLink";
import { DiscordOutlined } from "@ant-design/icons";
import AntButton from "../AntButton/AntButton";
import Slot from "../Slot/Slot";

const ContactInfo: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState<DrawerProps["loading"]>(true);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const showDrawer = () => {
    setOpen(true);
    setLoading(true);
    timerRef.current = setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  React.useEffect(() => clearTimer, []);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AntButton onClick={showDrawer}>Let's Talk</AntButton>
      <Drawer
        destroyOnClose
        title="Contact Information "
        placement="right"
        open={open}
        width={500}
        loading={loading}
        onClose={onClose}
        style={{
          backgroundColor: "var(--background-color)",
          color: "white",
        }}
      >
        <Slot>
          <a href="href=mailto:“thomascionek97@gmail.com">
            <MailOutlined className="largeIcon" />
          </a>
          <IconLink url={WHATSAPP} altText="My Github profile">
            <WhatsAppOutlined className="largeIcon" />
          </IconLink>
          <IconLink url={DISCORD} altText="My Discord profile">
            <DiscordOutlined className="largeIcon" />
          </IconLink>
        </Slot>
      </Drawer>
    </>
  );
};

export default ContactInfo;
