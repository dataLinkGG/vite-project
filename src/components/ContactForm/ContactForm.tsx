import React from "react";
import { Button, Form, Input } from "antd";

const layout = {
  labelCol: { span: 8 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const ContactForm: React.FC = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    validateMessages={validateMessages}
    style={{ minWidth: "100wh" }}
    layout="vertical"
  >
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[{ type: "email", required: true }]}
    >
      <Input />
    </Form.Item>
    <Form.Item name={["user", "message"]} label="Message">
      <Input.TextArea />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default ContactForm;
