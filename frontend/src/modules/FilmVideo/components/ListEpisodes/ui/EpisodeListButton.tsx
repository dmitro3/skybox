import { Button } from "@mui/material";
import { FC } from "react";
import { EpisodeListButtonProps } from "../model/EpisodeListButtonProps";
import { ReactComponent as LockSVG } from "@icons/Lock.svg";
import styles from "./styles.module.scss";
const EpisodeListButton: FC<EpisodeListButtonProps> = ({
  disabled,
  isActive,
  children,
}) => {
  return (
    <Button
      sx={{ minWidth: 0, width: 48, height: 48 }}
      className={`${styles.episodeListBtn} ${isActive && styles.active} ${
        disabled && styles.disabled
      }`}
      disabled={disabled}
    >
      {children}
      {disabled && <LockSVG className={styles.lockSVG} />}
    </Button>
  );
};

export default EpisodeListButton;
