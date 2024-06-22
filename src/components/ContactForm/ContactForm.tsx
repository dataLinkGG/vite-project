import React, { useMemo } from "react";
import { notification } from "antd";

import { Button, Form, Input } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";

const layout = {
  labelCol: { span: 8 },
};

const Context = React.createContext({ name: "Default" });

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */
const onFinish = (values: unknown) => {
  console.log(values);
};

const ContactForm: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.success({
      message: "Message sent!",
      description: "Thanks for contacting me.",
      placement,
    });
  };

  const sendForm = () => {
    openNotification("topLeft");
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        layout="vertical"
      >
        <Form.Item
          name={["name"]}
          label={<label style={{ color: "var(--text-color)" }}>Name</label>}
          rules={[{ required: true }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name={["email"]}
          label={<label style={{ color: "var(--text-color)" }}>Email</label>}
          rules={[{ required: true }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name={["message"]}
          label={<label style={{ color: "var(--text-color)" }}>Message</label>}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button onClick={sendForm} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Context.Provider>
  );
};

export default ContactForm;
