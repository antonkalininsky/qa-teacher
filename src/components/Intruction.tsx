import React, { useMemo } from "react";
import styles from "./styles.module.css";
import { TextField } from "@mui/material";

export default function Intruction({ data }) {
  const instructionList = useMemo(() => {
    if ("taskData" in data) {
      return data.taskData.map((taskItem) => {
        if ("list" in taskItem) {
          return <div key={taskItem.title}>{taskItem.title}</div>;
        } else {
          return <div key={taskItem.title}>{taskItem.title}</div>;
        }
      });
    }
    return;
  }, [data]);
  return (
    <div className={styles.instructionForm}>
      {instructionList}
      {/* <div className={styles.instructionHead}>Название кейса</div>
      <div>Проверка формы регистрации пользователя</div> */}
      {/* <div className={styles.instructionHead}>header 2</div>
      <div>
        <TextField />
      </div> */}
    </div>
  );
}
