import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { TextField, Button } from "@mui/material";
import { docFieldsMap, docFieldFormatter } from "@/utils/dictionatyMaps";

export default function Intruction({ data }) {
  const instructionList = useMemo(() => {
    console.log(data);
    if (data?.testData) {
      return Object.keys(data.testData).map((key) => {
        return (
          <div key={key} className={styles.instructionLine}>
            <div className={styles.instructionHead}>{docFieldsMap[key]}</div>
            {docFieldFormatter?.[key](data.testData[key])}
          </div>
        );
      });
    }
    return;

    // if ("taskData" in data) {
    //   return data.taskData.map((item) => {
    //     return <div>{docFieldsMap[item.]}</div>;
    //   });
    // }
    // return;
  }, [data]);
  return (
    <div>
      <div className={styles.instructionForm}>
        {instructionList}
        {/* <div className={styles.instructionHead}>Название кейса</div>
      <div>Проверка формы регистрации пользователя</div> */}
        {/* <div className={styles.instructionHead}>header 2</div>
      <div>
        <TextField />
      </div> */}
      </div>
      {/* <div>
        <Button>test</Button>
        <Button>test</Button>
      </div> */}
    </div>
  );
}
