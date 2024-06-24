import React from "react";
import type { DrawerProps } from "antd";
import { Drawer, List, Divider, Tooltip } from "antd";
import {
  MailOutlined,
  WhatsAppOutlined,
  DiscordFilled,
} from "@ant-design/icons";
import { DISCORD, WHATSAPP } from "../../constants";
import IconLink from "../IconLink/IconLink";
import AntButton from "../AntButton/AntButton";
import qr_code from "../../assets/qr_black_white_rounded.png";

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
        title="Contact Information"
        placement="right"
        open={open}
        width={375}
        loading={loading}
        onClose={onClose}
      >
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              title: "Email:",
              content: (
                <a href="href=mailto:“thomascionek97@gmail.com">
                  <MailOutlined />
                </a>
              ),
            },
            {
              title: "WhatsApp:",
              content: (
                <IconLink url={WHATSAPP} altText="WhatsApp">
                  <WhatsAppOutlined />
                </IconLink>
              ),
            },
            {
              title: "Discord:",
              content: (
                <IconLink url={DISCORD} altText="Discord">
                  <DiscordFilled />
                </IconLink>
              ),
            },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.title} />
              {item.content}
            </List.Item>
          )}
        />
        <Divider />
        <Tooltip title="📱 Scan me!">
          <div>
            <img className="qr-code" src={qr_code} alt="" />
          </div>
        </Tooltip>
      </Drawer>
    </>
  );
};

export default ContactInfo;
