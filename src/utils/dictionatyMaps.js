const selectInputFormatter = (value, setter, options) => (
  <select id="cars" value={value} onChange={(e) => setter(e.target.value)}>
    {options?.map((item) => (
      <option key={item.value} value={item.value}>
        {item.title}
      </option>
    ))}
  </select>
);

const dateInputFormatter = (value, setter) => (
  <input type="date" value={value} onChange={(e) => setter(e.target.value)} />
);

const textInputFormatter = (value, setter) => (
  <input type="text" value={value} onChange={(e) => setter(e.target.value)} />
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
  text: textFormatter,
  list: listFormatter,
  inputText: textInputFormatter,
  inputDate: dateInputFormatter,
  inputSelect: selectInputFormatter,
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
