import { IconDefinition, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import { useState } from "react";

type CardProps = {
  title: string;
  description: string;
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
        <FontAwesomeIcon className="icon" icon={icon} />
      </div>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children ? (
        <>
          <Button
            className={styles.centeredButton}
            onClick={() => setModalOpen(true)}
          >
            <div>
              <FontAwesomeIcon icon={faSearch} /> See More
            </div>
          </Button>

          <Modal
            title={modalTitle}
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            okText="Ok"
            cancelText="Close"
            footer
          >
            {children}
          </Modal>
        </>
      ) : undefined}
    </article>
  );
};

export default Card;
