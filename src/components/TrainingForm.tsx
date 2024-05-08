import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./styles.module.css";

export default function TrainingForm() {
  return (
    <div className={styles.form}>
      <TextField
        label="Имя"
        variant="outlined"
        required
        error
        helperText="trust me"
      />
      <TextField label="Фамилия" variant="outlined" />
      <TextField label="Логин" variant="outlined" required />
      <TextField label="Пароль" variant="outlined" required />
      <TextField label="Повторите пароль" variant="outlined" required />
      <Button variant="contained">Регистрация</Button>
    </div>
  );
}
