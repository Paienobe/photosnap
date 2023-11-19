import React from "react";
import { InviteButtonProps } from "./types";
import styles from "./InviteButton.module.scss";

const InviteButton = ({ color }: InviteButtonProps) => {
  return (
    <button className={styles.invite_button} style={{ color: color }}>
      <span>GET AN INVITE</span> <ButtonArrow color={color} />
    </button>
  );
};

export default InviteButton;

const ButtonArrow = ({ color }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
      <g fill={color} fillRule="evenodd" stroke={color}>
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </svg>
  );
};
