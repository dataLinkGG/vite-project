import { IconDefinition, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ConfigProvider, Modal } from "antd";
import { useState } from "react";

type CardProps = {
  title: string;
  description: React.ReactNode;
  icon: IconDefinition;
  modalTitle: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  modalTitle,
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.thumbnail}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children ? (
        <>
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
              type="primary"
              style={{ border: "var(--text-color) 1px solid" }}
              className={styles.centeredButton}
              onClick={() => setModalOpen(true)}
            >
              <div>
                <FontAwesomeIcon icon={faSearch} /> See More
              </div>
            </Button>
          </ConfigProvider>

          <Modal
            title={modalTitle}
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            okText="Ok"
            cancelText="Close"
            footer
          >
            <p style={{ color: "black" }}> {children}</p>
          </Modal>
        </>
      ) : undefined}
    </article>
  );
};

export default Card;
