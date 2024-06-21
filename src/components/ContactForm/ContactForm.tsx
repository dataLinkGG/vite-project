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
const onFinish = (values: unknown) => {
  console.log(values);
};

const ContactForm: React.FC = () => (
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
      label={<label style={{ color: "var(--text-color)" }}>Message</label>} // Set label color to blue      rules={[{ type: "email", required: true }]}
    >
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
