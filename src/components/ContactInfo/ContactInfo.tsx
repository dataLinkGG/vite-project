import React from "react";
import type { DrawerProps } from "antd";
import { Drawer, List, Divider } from "antd";
import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { DISCORD, WHATSAPP } from "../../constants"; // Assuming PHONE_NUMBER is defined
import IconLink from "../IconLink/IconLink";
import { DiscordOutlined } from "@ant-design/icons";
import AntButton from "../AntButton/AntButton";

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
        width={375} // Adjusted width for better layout
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
                  <MailOutlined style={{ color: "black" }} />
                </a>
              ),
            },
            {
              title: "WhatsApp:",
              content: (
                <IconLink url={WHATSAPP} altText="WhatsApp">
                  <WhatsAppOutlined style={{ color: "black" }} />
                </IconLink>
              ),
            },
            {
              title: "Discord:",
              content: (
                <IconLink url={DISCORD} altText="Discord">
                  <DiscordOutlined style={{ color: "black" }} />
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
      </Drawer>
    </>
  );
};

export default ContactInfo;
