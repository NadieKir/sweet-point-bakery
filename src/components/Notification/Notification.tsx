import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "animate.css";

import styles from "./Notification.module.scss";

const idleDuration = 3000;
const animationDuration = 1000;

type Props = {
  children: React.ReactNode;
  onFinish: () => void;
};

function Notification({ children, onFinish }: Props) {
  const [isStartAnimation, setIsStartAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsStartAnimation(false);
      setTimeout(() => onFinish(), animationDuration);
    }, idleDuration);
  });

  return (
    <div
      className={classNames(styles["notification-wrapper"], "animate__animated", {
        animate__backInRight: isStartAnimation,
        animate__backOutRight: !isStartAnimation,
      })}
    >
      {children}
    </div>
  );
}

export default Notification;
