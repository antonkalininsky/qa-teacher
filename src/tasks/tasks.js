const tasksList = [
  {
    id: 0,
    title: "Тест 1 - регистрация",
    description:
      "Проверка что пользователь может успешно зарегестрироваться использовуя указанную форму",
    testData: {
      title: "Проверка формы регистрации пользователя",
      prerequisites: "нет",
      procedure: [
        "Введите имя",
        "Введите фамилию",
        "Введите логин",
        "Введите пароль",
        "Введите пароль повторно",
        "Нажмите кнопку 'Регистрация'",
      ],
      testData: [
        "Имя: Иван",
        "Фамилия: Иванов",
        "Логин: user",
        "Пароль: password",
      ],
      expectedResult: "Сообщение об успешной регистрации пользователя",
      createdAt: "8.05.2024",
      createdBy: "Anton",
      lastCheckedAt: true,
      lastCheckedBy: true,
      lastCheckedStatus: true,
    },
    testDataFormatters: {
      title: "text",
      prerequisites: "text",
      procedure: "list",
      testData: "list",
      expectedResult: "text",
      createdAt: "text",
      createdBy: "text",
      lastCheckedAt: "inputDate",
      lastCheckedBy: "inputText",
      lastCheckedStatus: "inputSelect",
    },
    testAnswer: {
      name: "name",
      surname: "surname",
      login: "login",
      password: "password",
      submitted: true,
      validated: true,
    },
    docAnswer: {
      lastCheckedAt: true,
      lastCheckedBy: true,
      lastCheckedStatus: true,
    },
    testComponent: {
      component: "registerForm",
      varaiant: 1,
    },
  },
];

export default tasksList;
