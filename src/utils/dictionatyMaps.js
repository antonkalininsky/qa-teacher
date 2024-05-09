import { TextField } from "@mui/material";

const textInputFormatter = (value, setter) => (
  <TextField value={value} onChange={(e) => setter(e.target.value)} />
);

const textFormatter = (value) => <div>{value}</div>;

const listFormatter = (value) => (
  <ul>
    {value.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const docFieldFormatter = {
  title: textFormatter,
  prerequisites: textFormatter,
  procedure: listFormatter,
  testData: listFormatter,
  expectedResult: textFormatter,
  createdAt: textFormatter,
  createdBy: textFormatter,
  notes: textFormatter,
  lastCheckedAt: textFormatter,
  lastCheckedBy: textInputFormatter,
  lastCheckedStatus: textFormatter,
};

const docFieldsMap = {
  title: "Название теста",
  prerequisites: "Предварительные условия",
  procedure: "Алгоритм",
  testData: "Тестовые данные",
  expectedResult: "Ожидаемый результат",
  createdAt: "Когда создан",
  createdBy: "Кем создан",
  lastCheckedAt: "Дата последней проверки",
  lastCheckedBy: "Проверяющий",
  lastCheckedStatus: "Результат проверки",
  notes: "Заметки",
};

export { docFieldsMap, docFieldFormatter };
