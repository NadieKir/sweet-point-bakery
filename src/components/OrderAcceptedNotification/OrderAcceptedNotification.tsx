import React from "react";

import Notification from "components/Notification/Notification";

import orderAccepted from "assets/images/check.svg";

import styles from "./OrderAcceptedNotification.module.scss";

type Props = {
  onFinish: () => void;
};

function OrderAcceptedNotification({ onFinish }: Props) {
  return (
    <Notification onFinish={onFinish}>
      <div className={styles.notification}>
        <img src={orderAccepted} alt="Order is accepted" width="40px" height="40px" />
        <h3 className={styles.heading}> Your order is accepted </h3>
      </div>
    </Notification>
  );
}

export default OrderAcceptedNotification;
