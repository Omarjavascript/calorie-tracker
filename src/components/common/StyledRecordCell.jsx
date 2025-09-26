import styles from "./StyledRecordCell.module.css";

function StyledRecordCell(props) {
  return (
    <div>
      <div className={styles["styled-record-cell"]}>{props.children}</div>
    </div>
  );
}

export default StyledRecordCell;
