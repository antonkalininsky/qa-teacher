import React, { useMemo, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { docFieldsMap, docFieldFormatter } from "@/utils/dictionatyMaps";

export default function Intruction({ data }) {
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    if (data?.testDataFormatters) {
      Object.keys(data.testDataFormatters).forEach((key) => {});
    } else {
      setInputs({});
    }
  }, [data]);

  const instructionList = useMemo(() => {
    console.log(data);
    if (data?.testDataFormatters) {
      const result = [];
      return Object.keys(data.testDataFormatters).map((key) => {
        let field;
        const localKey = data.testDataFormatters[key];
        const args = [];
        if (localKey === "inputText") {
          setInputs({ ...inputs, [key]: "" });
        }
        field = docFieldFormatter[localKey](data.testData[key], ...args);

        return (
          <div key={key} className={styles.instructionLine}>
            <div className={styles.instructionHead}>{docFieldsMap[key]}</div>
            {field}
          </div>
        );
      });
    }
    return;
  }, [data, ...Object.values(inputs)]);
  return (
    <div>
      <div className={styles.instructionForm}>{instructionList}</div>
      {/* <div>
        <Button>test</Button>
        <Button>test</Button>
      </div> */}
    </div>
  );
}
