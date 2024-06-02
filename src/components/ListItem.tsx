import { FunctionComponent } from "react";
import styles from "./ListItem.module.css";

export type ListItemType = {
  className?: string;
  listItemIcon?: string;
  modernMachinery?: string;
  loremIpsumDolorSitAmetCon?: string;
};

const ListItem: FunctionComponent<ListItemType> = ({
  className = "",
  listItemIcon,
  modernMachinery,
  loremIpsumDolorSitAmetCon,
}) => {
  return (
    <div className={[styles.listItem, className].join(" ")}>
      <img
        className={styles.listItemIcon}
        loading="lazy"
        alt=""
        src={listItemIcon}
      />
      <b className={styles.modernMachinery}>{modernMachinery}</b>
      <div className={styles.loremIpsumDolor}>{loremIpsumDolorSitAmetCon}</div>
    </div>
  );
};

export default ListItem;
