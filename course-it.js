// Ветка «IT» — английский для начинающих программистов (A1 → A2+).
// Рекомендуется после первых двух блоков «Основы». Формат заданий как в course.js.

window.COURSE_IT = [
/* ======================= SPRINT 1 ======================= */
{
  id: "ib1", title: "Hello, World", note: "Слова, ключевые слова кода, символы",
  lessons: [
  {
    id: "i1", icon: "terminal", title: "Базовые IT-слова",
    goals: ["Знать 20 главных слов про компьютер и код", "Понимать команды интерфейса: open, save, run", "Описывать простые действия: I write code, I fix bugs"],
    summary: ["file · folder · code · bug · app · server · database", "open · save · run · install · delete · update", "Повелительное наклонение = просто глагол: Save the file.", "I write code. I fix bugs. I test the app.", "developer, tester, designer, team lead"],
    phrases: [["file","файл"],["folder","папка"],["code","код"],["bug","баг, ошибка в программе"],["to fix a bug","исправить баг"],["to run the app","запустить приложение"],["to install","установить"],["to update","обновить"],["server","сервер"],["database","база данных"],["developer","разработчик"]],
    steps: [
      {t:"tip", title:"Английский — язык кода", html:`<p>Почти всё в программировании называется по-английски: команды, ошибки, документация, интерфейсы. Хорошая новость: многие слова ты уже знаешь — <b>file, server, bug, update</b>.</p><p>В этой ветке учим английский, который реально встречается в работе разработчика.</p>`},
      {t:"match", pairs:[["file","файл"],["folder","папка"],["bug","ошибка в программе"],["database","база данных"]]},
      {t:"match", pairs:[["open","открыть"],["save","сохранить"],["delete","удалить"],["run","запустить"]]},
      {t:"tip", title:"Команды = голый глагол", html:`<p>В кнопках, меню и инструкциях используется повелительное наклонение — просто глагол без «you»:</p><p><i><b>Save</b> the file.</i> — Сохрани файл.<br><i><b>Run</b> the tests.</i> — Запусти тесты.<br><i><b>Don't delete</b> this folder.</i> — Не удаляй эту папку.</p>`},
      {t:"pick", q:"Кнопка «Сохранить изменения»:", options:["Save changes","Saving changes","Saved changes"], a:0},
      {t:"pick", q:"«Install the app» значит:", options:["Установи приложение","Обнови приложение","Удали приложение"], a:0},
      {t:"bank", ru:"Открой папку и запусти приложение.", text:"[Open] the folder and [run] the app.", words:["Opens","running"]},
      {t:"tip", title:"Что ты делаешь на работе", html:`<p>Present Simple — о том, что делаешь регулярно:</p><p><i>I <b>write</b> code.</i> — Я пишу код.<br><i>I <b>fix</b> bugs.</i> — Я исправляю баги.<br><i>She <b>tests</b> the app.</i> — Она тестирует приложение.</p><p>Профессии: <b>developer</b> — разработчик, <b>tester / QA engineer</b> — тестировщик, <b>designer</b> — дизайнер, <b>team lead</b> — тимлид.</p>`},
      {t:"gap", ru:"Я исправляю баги.", text:"I [fix] bugs.", hint:true},
      {t:"gap", ru:"Она пишет код на Python.", text:"She [writes] code in Python."},
      {t:"listen", lines:[["A","Hi! What do you do?"],["B","I'm a junior developer. I write code for a mobile app."],["A","Cool! Do you test it too?"],["B","No, we have a QA engineer. She tests the app and finds bugs."]], q:"Кто ищет баги в их команде?", options:["Тестировщица (QA)","Сам разработчик","Дизайнер"], a:0},
      {t:"order", ru:"Не удаляй эту папку.", en:"Don't delete this folder.", extra:["deletes"]},
      {t:"translate", ru:"Сохрани файл.", a:["Save the file.","Save the file, please."]},
      {t:"translate", ru:"Я разработчик.", a:["I'm a developer.","I am a developer."]},
      {t:"dictation", en:"Update the app.", ru:"Обнови приложение."},
      {t:"speak", en:"I'm a junior developer. I write code and fix bugs.", ru:"Я джуниор-разработчик. Я пишу код и исправляю баги."},
      {t:"write", task:"Опиши, кем ты работаешь или хочешь работать в IT и что делаешь (I write…, I test…). Используй минимум 4 IT-слова.", min:15,
       need:[{label:"Профессия (developer, tester…)", re:"developer|programmer|tester|qa|designer|engineer|team lead|analyst"},{label:"Действие (write, fix, test, build…)", re:"\\b(write|writes|fix|fixes|test|tests|build|builds|create|creates|develop|develops|design|designs|learn|learning)\\b"},{label:"IT-слово (code, bug, app, server…)", re:"\\b(code|bug|bugs|app|apps|server|database|website|file|program|project)\\b"}],
       sample:"I want to be a web developer. I'm learning JavaScript. I write code every day. I build small apps and fix bugs in my projects."},
      {t:"roleplay", title:"Знакомство на митапе разработчиков.", lines:[
        {s:"them", en:"Hi! I'm Alex. What do you do?", ru:"Привет! Я Алекс. Чем занимаешься?"},
        {s:"you", ru:"Скажи, что ты джуниор-разработчик (или учишься на него)", say:"I'm a junior developer.", re:"developer|programmer|engineer|student|learning|tester|designer"},
        {s:"them", en:"Nice! What do you work on?", ru:"Круто! Над чем работаешь?"},
        {s:"you", ru:"Скажи, что пишешь код для веб-приложения", say:"I write code for a web app.", re:"write|code|app|website|project|work"},
        {s:"them", en:"Cool. Do you like it?", ru:"Круто. Тебе нравится?"},
        {s:"you", ru:"Ответь, что да, но баги — это сложно", say:"Yes, I love it, but bugs are hard!", re:"yes|love|like|bug"}
      ]}
    ]
  },
  {
    id: "i2", icon: "code", title: "Код — это английский",
    goals: ["Понимать ключевые слова в коде", "Читать условия и циклы как английские фразы", "Называть типы данных"],
    summary: ["if — если · else — иначе · for / while — для / пока", "return — вернуть · function — функция · class — класс", "true / false — истина / ложь · null — пусто", "string, number, boolean, array, object", "if (user.isAdmin) → «если пользователь — админ»"],
    phrases: [["if","если"],["else","иначе"],["while","пока"],["return","вернуть"],["true / false","истина / ложь"],["null","пустое значение"],["string","строка"],["array","массив"],["function","функция"],["variable","переменная"]],
    steps: [
      {t:"tip", title:"Ключевые слова — обычные английские слова", html:`<p>Код специально сделан похожим на английский:</p><p><code>if</code> — если, <code>else</code> — иначе<br><code>for</code> — для (каждого), <code>while</code> — пока<br><code>return</code> — вернуть, <code>break</code> — прервать, <code>continue</code> — продолжить<br><code>import</code> — импортировать, <code>new</code> — новый</p>`},
      {t:"match", pairs:[["if","если"],["else","иначе"],["while","пока"],["return","вернуть"]]},
      {t:"pick", q:"<code>while (isLoading)</code> читается как:", options:["пока идёт загрузка","если загрузка","после загрузки"], a:0},
      {t:"pick", q:"<code>if (!user)</code> — «если ___ пользователя»", options:["нет","есть","новый"], a:0, why:"! — это «not», «не»."},
      {t:"tip", title:"Читаем код вслух", html:`<p><code>if (user.isAdmin)</code> — «if the user is an admin» — если пользователь — админ.</p><p><code>for (item of cart)</code> — «for each item in the cart» — для каждого товара в корзине.</p><p><code>return total</code> — «return the total» — вернуть сумму.</p><p class="note">Хорошие имена в коде тоже английские: <code>isVisible</code>, <code>getUser</code>, <code>maxSize</code>.</p>`},
      {t:"pick", q:"Функция <code>getUserName()</code> скорее всего:", options:["возвращает имя пользователя","удаляет пользователя","создаёт пользователя"], a:0, why:"get — получить."},
      {t:"pick", q:"<code>isEmpty</code> — переменная, которая отвечает на вопрос:", options:["Пусто ли?","Сколько элементов?","Как называется?"], a:0},
      {t:"tip", title:"Типы данных", html:`<p><b>string</b> — строка (текст), <b>number</b> / <b>integer</b> — число / целое число, <b>boolean</b> — логическое (true / false), <b>array</b> / <b>list</b> — массив / список, <b>object</b> — объект, <b>null</b> / <b>undefined</b> — пусто / не определено.</p>`},
      {t:"match", pairs:[["string","текст"],["integer","целое число"],["boolean","true / false"],["array","массив"]]},
      {t:"bank", ru:"Если пользователь вошёл, покажи меню, иначе покажи форму входа.", text:"[If] the user is logged in, show the menu, [else] show the login form.", words:["While","return"]},
      {t:"gap", ru:"Функция возвращает строку.", text:"The function [returns] a string.", hint:true},
      {t:"listen", lines:[["A","What does this function do?"],["B","It checks the password. If the password is correct, it returns true."],["A","And if not?"],["B","Then it returns false and shows an error."]], q:"Что вернёт функция при неверном пароле?", options:["false","true","null"], a:0},
      {t:"order", ru:"Эта переменная хранит имя пользователя.", en:"This variable stores the user name.", extra:["store"]},
      {t:"translate", ru:"Функция возвращает число.", a:["The function returns a number.","This function returns a number.","It returns a number."]},
      {t:"dictation", en:"If the value is null, return false.", ru:"Если значение пустое, вернуть false."},
      {t:"speak", en:"If the user is an admin, show the settings.", ru:"Если пользователь — админ, показать настройки."},
      {t:"write", task:"Опиши словами, что делает простая программа (например, проверка пароля или корзина магазина). Используй if, else, return и хотя бы один тип данных.", min:20,
       need:[{label:"if … / else …", re:"\\bif\\b[\\s\\S]*\\b(else|otherwise)\\b"},{label:"return(s)", re:"\\breturns?\\b"},{label:"Тип данных (string, number, array…)", re:"\\b(string|number|integer|boolean|array|list|object|true|false|null)\\b"}],
       sample:"The function checks the password. If the password is correct, it returns true. Else it returns false. The password is a string."},
      {t:"roleplay", title:"Тимлид спрашивает про твой код.", lines:[
        {s:"them", en:"What does your function do?", ru:"Что делает твоя функция?"},
        {s:"you", ru:"Скажи, что она проверяет email", say:"It checks the email.", re:"check|validate|test|email"},
        {s:"them", en:"What does it return?", ru:"Что она возвращает?"},
        {s:"you", ru:"Скажи: true, если email правильный, иначе false", say:"It returns true if the email is correct, else false.", re:"true|false|return"},
        {s:"them", en:"Great, that's clear.", ru:"Отлично, понятно."}
      ]}
    ]
  },
  {
    id: "i3", icon: "keyboard", title: "Символы и как их произносить",
    goals: ["Называть символы на клавиатуре по-английски", "Читать вслух имена файлов и адреса", "Диктовать код и пароли"],
    summary: [". dot · , comma · : colon · ; semicolon", "( ) parentheses / brackets · [ ] square brackets · { } curly braces", "/ slash · \\ backslash · _ underscore · - dash / hyphen", "@ at · # hash · = equals · \" quotes", "index.html → «index dot H-T-M-L»"],
    phrases: [["dot","точка"],["comma","запятая"],["colon","двоеточие"],["semicolon","точка с запятой"],["slash","слеш /"],["backslash","обратный слеш \\"],["underscore","нижнее подчёркивание _"],["dash / hyphen","дефис -"],["at","собака @"],["hash","решётка #"],["curly braces","фигурные скобки { }"],["quotes","кавычки"]],
    steps: [
      {t:"tip", title:"Знаки препинания", html:`<table class="gtable"><tr><td><code>.</code></td><td><b>dot</b> (в коде и адресах) / period (в тексте)</td></tr><tr><td><code>,</code></td><td><b>comma</b></td></tr><tr><td><code>:</code></td><td><b>colon</b></td></tr><tr><td><code>;</code></td><td><b>semicolon</b></td></tr><tr><td><code>!</code></td><td><b>exclamation mark</b> (в коде — «not» или «bang»)</td></tr><tr><td><code>?</code></td><td><b>question mark</b></td></tr></table>`},
      {t:"match", pairs:[[".","dot"],[",","comma"],[":","colon"],[";","semicolon"]]},
      {t:"tip", title:"Скобки и слеши", html:`<table class="gtable"><tr><td><code>( )</code></td><td><b>parentheses</b> (или brackets)</td></tr><tr><td><code>[ ]</code></td><td><b>square brackets</b></td></tr><tr><td><code>{ }</code></td><td><b>curly braces</b></td></tr><tr><td><code>&lt; &gt;</code></td><td><b>angle brackets</b></td></tr><tr><td><code>/</code></td><td><b>slash</b></td></tr><tr><td><code>\\</code></td><td><b>backslash</b></td></tr></table>`},
      {t:"match", pairs:[["{ }","curly braces"],["[ ]","square brackets"],["/","slash"],["\\","backslash"]]},
      {t:"tip", title:"Остальное", html:`<table class="gtable"><tr><td><code>_</code></td><td><b>underscore</b></td></tr><tr><td><code>-</code></td><td><b>dash</b> / hyphen / minus</td></tr><tr><td><code>@</code></td><td><b>at</b></td></tr><tr><td><code>#</code></td><td><b>hash</b> (в США часто pound)</td></tr><tr><td><code>=</code></td><td><b>equals</b></td></tr><tr><td><code>"</code></td><td><b>quotes</b> / double quotes</td></tr><tr><td><code>*</code></td><td><b>asterisk</b> / star</td></tr></table><p class="note"><i>anna_dev@mail.com</i> → «anna underscore dev at mail dot com».</p>`},
      {t:"pick", q:"Как сказать <code>my_file</code>?", options:["my underscore file","my dash file","my dot file"], a:0},
      {t:"pick", q:"Как сказать <code>@</code> в email?", options:["at","dog","about"], a:0},
      {t:"pick", audio:"index dot H T M L", q:"Послушай: какой файл назвали?", options:["index.html","index-html","index_html"], a:0},
      {t:"pick", audio:"Open curly braces", q:"Послушай: что открыть?", options:["{","(","["], a:0},
      {t:"bank", ru:"В конце строки поставь точку с запятой.", text:"Put a [semicolon] at the end of the [line].", words:["colon","string"]},
      {t:"gap", ru:"Адрес: «test точка com»", text:"test [dot] com", hint:true},
      {t:"listen", lines:[["A","What's your email?"],["B","It's max underscore dev at gmail dot com."],["A","Max dash dev?"],["B","No, underscore. The low line."]], q:"Какой email у Макса?", options:["max_dev@gmail.com","max-dev@gmail.com","maxdev@gmail.com"], a:0},
      {t:"order", ru:"Это двоеточие, а не точка с запятой.", en:"It's a colon, not a semicolon."},
      {t:"translate", ru:"Открой фигурные скобки.", a:["Open curly braces.","Open the curly braces.","Open curly brackets."]},
      {t:"dictation", en:"slash, backslash, underscore", ru:"/ \\ _"},
      {t:"speak", en:"My email is anna underscore dev at mail dot com.", ru:"Мой email: anna_dev@mail.com"},
      {t:"write", task:"Продиктуй словами по-английски: свой email (можно выдуманный), адрес сайта и имя файла с подчёркиванием, например: «main underscore test dot py».", min:12,
       need:[{label:"at (@)", re:"\\bat\\b"},{label:"dot (.)", re:"\\bdot\\b"},{label:"underscore / dash / slash", re:"underscore|dash|hyphen|slash"}],
       sample:"My email is ivan dot petrov at gmail dot com. The website is my dash shop dot com. The file is main underscore test dot py."},
      {t:"roleplay", title:"Коллега по созвону просит продиктовать адрес.", lines:[
        {s:"them", en:"Can you spell the file name for me?", ru:"Продиктуешь имя файла?"},
        {s:"you", ru:"Продиктуй: user_service.py", say:"User underscore service dot py.", re:"underscore[\\s\\S]*dot|dot[\\s\\S]*underscore"},
        {s:"them", en:"And what's the server address?", ru:"А какой адрес сервера?"},
        {s:"you", ru:"Продиктуй: api.myapp.com", say:"A P I dot my app dot com.", re:"dot[\\s\\S]*dot"},
        {s:"them", en:"Got it, thanks!", ru:"Понял, спасибо!"}
      ]}
    ]
  }],
  test: {
    id: "it1", title: "Code review #1: Hello, World",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Запусти приложение.", a:["Run the app.","Run the application.","Start the app."]},
        {t:"translate", ru:"Я исправляю баги.", a:["I fix bugs.","I'm fixing bugs."]},
        {t:"translate", ru:"Функция возвращает строку.", a:["The function returns a string.","This function returns a string.","It returns a string."]}
      ]},
      {title:"Словарь и код", steps:[
        {t:"pick", q:"<code>;</code> — это", options:["semicolon","colon","comma"], a:0},
        {t:"pick", q:"<code>isValid</code> — переменная типа", options:["boolean","string","array"], a:0},
        {t:"bank", ru:"Если файл не найден, верни null.", text:"[If] the file is not found, [return] null.", words:["While","returns"]},
        {t:"gap", ru:"Установи пакет.", text:"[Install] the package."},
        {t:"gap", ru:"{ } — фигурные скобки", text:"curly [braces]"}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Не удаляй базу данных!", en:"Don't delete the database!", extra:["deletes"]},
        {t:"order", ru:"Она тестирует приложение.", en:"She tests the app.", extra:["test"]}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Can you send me the config file?"],["B","Sure. It's in the src folder. The name is app underscore config dot json."],["A","Thanks. Do I need to restart the server?"],["B","Yes, restart it after you save the file."]], q:"Как называется файл?", options:["app_config.json","app-config.json","appconfig.js"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Open the file, save the changes and run the tests.", ru:"Открой файл, сохрани изменения и запусти тесты."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Напиши инструкцию для нового разработчика из 4–5 шагов: что открыть, что установить, что запустить, чего не делать.", min:20,
         need:[{label:"Повелительный глагол (open, install, run…)", re:"\\b(open|install|run|save|update|clone|create|start|check|click)\\b"},{label:"Запрет (don't …)", re:"do not|never"},{label:"IT-слово (file, folder, server, app…)", re:"\\b(file|folder|server|app|database|project|code|tests?|package)\\b"}],
         sample:"First, open the project folder. Then install the packages. Run the app and check the server. Don't delete the database file."}
      ]}
    ]
  }
},
/* ======================= SPRINT 2 ======================= */
{
  id: "ib2", title: "Errors & Docs", note: "Ошибки, документация, интерфейсы",
  lessons: [
  {
    id: "i4", icon: "alert", title: "Сообщения об ошибках",
    goals: ["Понимать частые сообщения об ошибках", "Знать слова: not found, denied, failed, invalid", "Объяснить, что пошло не так"],
    summary: ["File not found — файл не найден", "Permission denied — доступ запрещён", "… is not defined — … не определено", "Connection timed out — время ожидания истекло", "invalid · unexpected · missing · deprecated · failed"],
    phrases: [["File not found.","Файл не найден."],["Permission denied.","Доступ запрещён."],["Invalid password.","Неверный пароль."],["Unexpected token.","Неожиданный символ."],["is not defined","не определено"],["Connection timed out.","Время ожидания соединения истекло."],["Build failed.","Сборка не удалась."],["deprecated","устаревший"],["missing","отсутствующий"],["warning","предупреждение"]],
    steps: [
      {t:"tip", title:"Ошибки пишутся сокращённо", html:`<p>Сообщения об ошибках — это короткие фразы без лишних слов. Часто пропущены <i>is / was</i>:</p><p><i>File <b>not found</b>.</i> = The file was not found.<br><i>Permission <b>denied</b>.</i> = Permission is denied.<br><i>Build <b>failed</b>.</i> = The build failed.</p>`},
      {t:"match", pairs:[["not found","не найден"],["denied","запрещён"],["failed","не удалось"],["invalid","неверный"]]},
      {t:"match", pairs:[["missing","отсутствует"],["unexpected","неожиданный"],["deprecated","устаревший"],["warning","предупреждение"]]},
      {t:"pick", q:"<code>Error: Permission denied</code>", options:["У тебя нет прав доступа","Файл не найден","Неверный пароль"], a:0},
      {t:"pick", q:"<code>ReferenceError: x is not defined</code>", options:["Переменная x не объявлена","x равен нулю","x — неверный тип"], a:0},
      {t:"pick", q:"<code>Warning: this method is deprecated</code>", options:["Метод устарел, его лучше не использовать","Метод сломан","Метод удалён"], a:0},
      {t:"tip", title:"Несколько частых шаблонов", html:`<p><i>Cannot read property 'name' of undefined</i> — нельзя прочитать свойство name у undefined (объекта нет).</p><p><i>Missing semicolon</i> — не хватает точки с запятой.</p><p><i>Unexpected token '}'</i> — неожиданный символ «}».</p><p><i>Connection timed out</i> — сервер не ответил вовремя.</p><p><i>Too many requests</i> — слишком много запросов.</p>`},
      {t:"bank", ru:"Сборка не удалась: не хватает файла.", text:"Build [failed]: file is [missing].", words:["fail","miss"]},
      {t:"gap", ru:"Неверный email.", text:"[Invalid] email.", hint:true},
      {t:"gap", ru:"Страница не найдена (404).", text:"Page not [found]."},
      {t:"listen", lines:[["A","The app doesn't work. I get an error."],["B","What does it say?"],["A","Connection timed out."],["B","OK, so the server didn't answer. Maybe it's down. Let me check."]], q:"В чём, скорее всего, проблема?", options:["Сервер не отвечает","Неверный пароль","Не хватает файла"], a:0},
      {t:"order", ru:"Я получаю ошибку, когда запускаю тесты.", en:"I get an error when I run the tests."},
      {t:"translate", ru:"Файл не найден.", a:["File not found.","The file was not found.","The file is not found."]},
      {t:"translate", ru:"Сборка не удалась.", a:["Build failed.","The build failed."]},
      {t:"dictation", en:"Permission denied.", ru:"Доступ запрещён."},
      {t:"speak", en:"I get an error: file not found.", ru:"У меня ошибка: файл не найден."},
      {t:"write", task:"Опиши две ошибки, которые ты видел (или придумай): какое сообщение, когда появилось и что, по-твоему, оно значит.", min:20,
       need:[{label:"Слово-ошибка (not found, denied, failed, invalid…)", re:"not found|denied|failed|invalid|undefined|not defined|timed out|missing|unexpected|error"},{label:"Когда (when I…)", re:"\\bwhen (i|we|you|the)\\b"},{label:"Объяснение (it means / maybe / I think)", re:"it means|maybe|i think|because|probably"}],
       sample:"I get an error when I run the app: file not found. I think it means the config file is missing. Another error is permission denied. Maybe I need admin rights."},
      {t:"roleplay", title:"Коллега видит, что у тебя что-то сломалось.", lines:[
        {s:"them", en:"Hey, is everything OK?", ru:"Эй, всё нормально?"},
        {s:"you", ru:"Скажи, что получаешь ошибку при запуске приложения", say:"Not really. I get an error when I run the app.", re:"error|bug|problem|doesn t work|does not work|crash"},
        {s:"them", en:"What does it say?", ru:"Что там написано?"},
        {s:"you", ru:"Скажи: «Permission denied»", say:"It says: permission denied.", re:"permission|denied|says"},
        {s:"them", en:"Ah, you need admin rights. Try sudo.", ru:"А, нужны права админа. Попробуй sudo."},
        {s:"you", ru:"Поблагодари", say:"Thanks! It works now.", re:"thank|works|great"}
      ]}
    ]
  },
  {
    id: "i5", icon: "doc", title: "Читаем документацию",
    goals: ["Понимать структуру документации: Parameters, Returns, Example", "Знать слова: required, optional, default", "Понимать инструкции: Run the following command"],
    summary: ["Parameters — параметры · Returns — возвращает", "required — обязательный · optional — необязательный · default — по умолчанию", "should — следует · must — обязательно", "Run the following command — выполни команду ниже", "Note: · Example: · See also:"],
    phrases: [["Parameters","параметры"],["Returns","возвращает"],["required","обязательный"],["optional","необязательный"],["default value","значение по умолчанию"],["Run the following command.","Выполни следующую команду."],["Note:","Примечание:"],["for example","например"],["You must…","Ты обязан…"],["You should…","Тебе следует…"]],
    steps: [
      {t:"tip", title:"Как устроена документация функции", html:`<p><b>Description</b> — что делает.<br><b>Parameters</b> — что принимает.<br><b>Returns</b> — что возвращает.<br><b>Throws</b> — какие ошибки бросает.<br><b>Example</b> — пример использования.</p><p>У параметров пишут: <b>required</b> — обязательный, <b>optional</b> — необязательный, <b>default</b> — значение по умолчанию.</p>`},
      {t:"match", pairs:[["required","обязательный"],["optional","необязательный"],["default","по умолчанию"],["returns","возвращает"]]},
      {t:"pick", q:"<code>timeout (optional, default: 30)</code>", options:["Можно не указывать, тогда будет 30","Обязательно указать 30","Максимум — 30"], a:0},
      {t:"pick", q:"<code>Returns: a list of users</code>", options:["Функция возвращает список пользователей","Функция принимает список пользователей","Функция удаляет пользователей"], a:0},
      {t:"tip", title:"Must, should, may", html:`<p><b>must</b> — обязательно: <i>The name <b>must</b> be unique.</i></p><p><b>should</b> — рекомендуется: <i>You <b>should</b> use the latest version.</i></p><p><b>may / can</b> — можно: <i>This <b>may</b> take a few minutes.</i></p>`},
      {t:"pick", q:"<code>The password must contain 8 characters.</code>", options:["Пароль обязан содержать 8 символов","Пароль может содержать 8 символов","Пароль обычно 8 символов"], a:0},
      {t:"pick", q:"<code>This may take a few minutes.</code>", options:["Это может занять несколько минут","Это займёт ровно минуту","Это нужно сделать за минуту"], a:0},
      {t:"tip", title:"Инструкции в README", html:`<p><i><b>Run the following command</b>:</i> — Выполни следующую команду:<br><i><b>Make sure</b> you have Node.js installed.</i> — Убедись, что установлен Node.js.<br><i><b>Clone</b> the repository.</i> — Склонируй репозиторий.<br><i><b>Note:</b> …</i> — Примечание: …</p>`},
      {t:"bank", ru:"Убедись, что установлен Python.", text:"[Make] [sure] you have Python installed.", words:["Do","safe"]},
      {t:"gap", ru:"Выполни следующую команду.", text:"Run the [following] command.", hint:true},
      {t:"gap", ru:"Этот параметр обязательный.", text:"This parameter is [required]."},
      {t:"listen", lines:[["A","How do I install this library?"],["B","Read the README. It says: run the following command, npm install."],["A","Do I need to set the port?"],["B","No, it's optional. The default port is three thousand."]], q:"Какой порт по умолчанию?", options:["3000","300","8080"], a:0},
      {t:"order", ru:"Этот параметр необязательный.", en:"This parameter is optional.", extra:["optionally"]},
      {t:"translate", ru:"Функция возвращает список.", a:["The function returns a list.","It returns a list.","This function returns a list."]},
      {t:"translate", ru:"Тебе следует обновить версию.", a:["You should update the version.","You should update your version."]},
      {t:"dictation", en:"The name must be unique.", ru:"Имя должно быть уникальным."},
      {t:"speak", en:"Make sure you have Node.js installed, then run the following command.", ru:"Убедись, что установлен Node.js, затем выполни команду."},
      {t:"write", task:"Напиши короткий README для своего (выдуманного) проекта: что делает, как установить, какой параметр обязательный, а какой нет.", min:25,
       need:[{label:"Инструкция (run, install, clone…)", re:"\\b(run|install|clone|open|start|download)\\b"},{label:"required / optional / default", re:"required|optional|default"},{label:"must / should", re:"\\b(must|should)\\b"}],
       sample:"This app shows the weather. First, clone the repository. Then run npm install. The API key is required. The city is optional, the default value is London. You should use Node 18."},
      {t:"roleplay", title:"Новичок в команде спрашивает тебя, как запустить проект.", lines:[
        {s:"them", en:"Hi! How do I run the project?", ru:"Привет! Как запустить проект?"},
        {s:"you", ru:"Скажи: сначала установи пакеты (npm install)", say:"First, install the packages with npm install.", re:"install|npm|first"},
        {s:"them", en:"OK. Do I need a config file?", ru:"Ок. Нужен конфиг-файл?"},
        {s:"you", ru:"Скажи, что он необязательный", say:"No, it's optional.", re:"optional|no|not required|don t need|do not need"},
        {s:"them", en:"And then?", ru:"А потом?"},
        {s:"you", ru:"Скажи: выполни npm start", say:"Then run npm start.", re:"run|start"}
      ]}
    ]
  },
  {
    id: "i6", icon: "gear", title: "Интерфейсы и настройки",
    goals: ["Понимать кнопки и меню на английском", "Знать слова: settings, sign in, upload, enable", "Описывать действия в интерфейсе"],
    summary: ["Sign up — зарегистрироваться · Sign in / Log in — войти · Log out — выйти", "Settings · Preferences · Profile · Account", "Upload — загрузить на сервер · Download — скачать", "Enable / Disable — включить / выключить", "Click the button. Select an option. Go to Settings."],
    phrases: [["Sign up","зарегистрироваться"],["Sign in / Log in","войти"],["Log out","выйти"],["Settings","настройки"],["Upload","загрузить"],["Download","скачать"],["Enable","включить"],["Disable","выключить"],["Submit","отправить (форму)"],["Cancel","отмена"],["Apply","применить"]],
    steps: [
      {t:"tip", title:"Вход и аккаунт", html:`<p><b>Sign up</b> / <b>Register</b> — зарегистрироваться (впервые).<br><b>Sign in</b> / <b>Log in</b> — войти.<br><b>Log out</b> / <b>Sign out</b> — выйти.<br><b>Forgot password?</b> — Забыли пароль?</p>`},
      {t:"pick", q:"У тебя ещё нет аккаунта. Нажимаешь:", options:["Sign up","Sign in","Log out"], a:0},
      {t:"match", pairs:[["Sign in","войти"],["Sign up","зарегистрироваться"],["Log out","выйти"],["Forgot password?","забыли пароль?"]]},
      {t:"tip", title:"Кнопки и действия", html:`<p><b>Submit</b> — отправить, <b>Cancel</b> — отмена, <b>Apply</b> — применить, <b>Confirm</b> — подтвердить, <b>Save changes</b> — сохранить изменения.</p><p><b>Upload</b> — загрузить (с компьютера на сервер), <b>Download</b> — скачать (с сервера к себе).</p><p><b>Enable</b> — включить, <b>Disable</b> — выключить, <b>Reset</b> — сбросить.</p>`},
      {t:"match", pairs:[["Upload","загрузить на сервер"],["Download","скачать"],["Enable","включить"],["Disable","выключить"]]},
      {t:"pick", q:"Хочешь выключить уведомления:", options:["Disable notifications","Enable notifications","Submit notifications"], a:0},
      {t:"pick", q:"<code>Are you sure? This action cannot be undone.</code>", options:["Действие нельзя будет отменить","Действие займёт время","Действие не удалось"], a:0},
      {t:"tip", title:"Как описать действия", html:`<p><i><b>Go to</b> Settings.</i> — Зайди в настройки.<br><i><b>Click</b> the blue button.</i> — Нажми синюю кнопку.<br><i><b>Select</b> «Dark mode».</i> — Выбери тёмную тему.<br><i><b>Scroll down</b>.</i> — Прокрути вниз.<br><i><b>Check</b> the box.</i> — Поставь галочку.</p>`},
      {t:"bank", ru:"Зайди в настройки и включи тёмную тему.", text:"[Go] to Settings and [enable] dark mode.", words:["Goes","disable"]},
      {t:"gap", ru:"Нажми «Сохранить изменения».", text:"Click «Save [changes]».", hint:true},
      {t:"gap", ru:"Прокрути вниз.", text:"Scroll [down]."},
      {t:"listen", lines:[["A","How do I change my password?"],["B","Go to Settings, then Account."],["A","OK, I see it."],["B","Click Change password, type the new one and click Save."]], q:"Где менять пароль?", options:["Settings → Account","Profile → Help","Login → Forgot"], a:0},
      {t:"order", ru:"Загрузи файл и нажми «Отправить».", en:"Upload the file and click Submit.", extra:["download"]},
      {t:"translate", ru:"Выйди из аккаунта.", a:["Log out.","Sign out.","Log out of your account.","Log out of the account."]},
      {t:"translate", ru:"Скачай приложение.", a:["Download the app.","Download the application."]},
      {t:"dictation", en:"Click the button and select an option.", ru:"Нажми кнопку и выбери вариант."},
      {t:"speak", en:"Go to Settings and disable notifications.", ru:"Зайди в настройки и выключи уведомления."},
      {t:"write", task:"Объясни другу по шагам, как в каком-нибудь приложении поменять пароль или включить тёмную тему (4–5 шагов).", min:12,
       need:[{label:"go to / open", re:"go to|open"},{label:"click / select / tap", re:"\\b(click|select|tap|press|choose)\\b"},{label:"Слово интерфейса (settings, save, enable…)", re:"settings|save|enable|disable|account|profile|submit|apply|button"}],
       sample:"Open the app. Go to Settings. Select Appearance. Enable dark mode. Click Save changes."},
      {t:"roleplay", title:"Мама просит помочь с приложением на английском.", lines:[
        {s:"them", en:"I can't find where to log out.", ru:"Не могу найти, где выйти."},
        {s:"you", ru:"Скажи: зайди в профиль", say:"Go to your profile.", re:"go to|open|profile|account|settings"},
        {s:"them", en:"OK. Now what?", ru:"Ок. А теперь?"},
        {s:"you", ru:"Скажи: прокрути вниз и нажми Log out", say:"Scroll down and click Log out.", re:"scroll|click|tap|press|log out|sign out"},
        {s:"them", en:"It says: Are you sure?", ru:"Пишет: «Вы уверены?»"},
        {s:"you", ru:"Скажи: нажми Confirm", say:"Click Confirm.", re:"confirm|yes|ok|click"}
      ]}
    ]
  }],
  test: {
    id: "it2", title: "Code review #2: Errors & Docs",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Доступ запрещён.", a:["Permission denied.","Access denied."]},
        {t:"translate", ru:"Этот параметр необязательный.", a:["This parameter is optional.","The parameter is optional."]},
        {t:"translate", ru:"Зайди в настройки.", a:["Go to Settings.","Open Settings.","Open the settings.","Go to the settings."]}
      ]},
      {title:"Словарь", steps:[
        {t:"pick", q:"<code>deprecated</code>", options:["устаревший","удалённый","запрещённый"], a:0},
        {t:"pick", q:"Скачать файл к себе на компьютер:", options:["Download","Upload","Submit"], a:0},
        {t:"bank", ru:"Имя обязательно, а возраст — нет.", text:"The name is [required] and the age is [optional].", words:["default","denied"]},
        {t:"gap", ru:"Неверный пароль.", text:"[Invalid] password."},
        {t:"gap", ru:"Выполни следующую команду.", text:"Run the [following] command."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Я получаю ошибку, когда загружаю файл.", en:"I get an error when I upload the file.", extra:["download"]},
        {t:"order", ru:"Убедись, что установлен Node.js.", en:"Make sure you have Node.js installed."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","I can't sign in. It says invalid password."],["B","Did you change your password last week?"],["A","Yes, I did."],["B","Then click Forgot password and check your email. You'll get a link."],["A","Got it. Thanks!"]], q:"Что посоветовали сделать?", options:["Нажать Forgot password и проверить почту","Зарегистрироваться заново","Скачать приложение"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"The build failed because a file is missing.", ru:"Сборка упала, потому что не хватает файла."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Коллега прислал скрин ошибки «Connection timed out». Напиши ему, что значит ошибка и какие 2–3 шага он должен сделать (check, restart, make sure…).", min:25,
         need:[{label:"Что значит ошибка (it means…)", re:"it means|means that|the server|didn t answer|did not answer|not respond"},{label:"Шаги (check, restart, try…)", re:"\\b(check|restart|try|make sure|open|run|wait)\\b"},{label:"should / must", re:"\\b(should|must|need to)\\b"}],
         sample:"It means the server didn't answer in time. First, check your internet connection. Then make sure the server is running. You should restart it and try again."}
      ]}
    ]
  }
},
/* ======================= SPRINT 3 ======================= */
{
  id: "ib3", title: "Team Work", note: "Стендап, баг-репорт, git",
  lessons: [
  {
    id: "i7", icon: "users", title: "Daily stand-up",
    goals: ["Рассказать на стендапе, что сделал вчера", "Сказать, над чем работаешь сегодня", "Сообщить о проблеме: I'm blocked by…"],
    summary: ["Yesterday I fixed… / finished… — Past Simple", "Today I'm working on… — Present Continuous", "I'm going to… — планы", "I'm blocked by… / I need help with…", "No blockers. — Проблем нет."],
    phrases: [["Yesterday I fixed the login bug.","Вчера я исправил баг со входом."],["Today I'm working on the payment page.","Сегодня работаю над страницей оплаты."],["I'm going to write tests.","Я собираюсь написать тесты."],["I'm blocked by the API.","Меня блокирует API."],["I need help with this task.","Мне нужна помощь с этой задачей."],["No blockers.","Блокеров нет."],["It's almost done.","Почти готово."],["I'll finish it today.","Закончу сегодня."]],
    steps: [
      {t:"tip", title:"Что такое стендап", html:`<p><b>Daily stand-up</b> — короткая ежедневная встреча команды. Каждый отвечает на три вопроса:</p><p>1. <b>What did you do yesterday?</b> — Что сделал вчера?<br>2. <b>What are you working on today?</b> — Над чем работаешь сегодня?<br>3. <b>Any blockers?</b> — Есть ли проблемы, которые мешают?</p>`},
      {t:"tip", title:"Три времени для стендапа", html:`<p><b>Past Simple</b> — вчера: <i>Yesterday I <b>fixed</b> the bug. I <b>finished</b> the form.</i></p><p><b>Present Continuous</b> — сейчас: <i>Today I<b>'m working on</b> the payment page.</i></p><p><b>Going to / will</b> — планы: <i>I<b>'m going to</b> write tests. I<b>'ll</b> finish it today.</i></p>`},
      {t:"pick", q:"Вчера я исправил баг:", options:["Yesterday I fixed the bug.","Yesterday I fix the bug.","Yesterday I'm fixing the bug."], a:0},
      {t:"pick", q:"Сегодня я работаю над поиском:", options:["Today I'm working on the search.","Today I worked on the search.","Today I work the search."], a:0},
      {t:"gap", ru:"Вчера я закончил форму входа.", text:"Yesterday I [finished] the login form.", hint:true},
      {t:"gap", ru:"Сегодня я пишу тесты.", text:"Today I'm [writing] tests."},
      {t:"tip", title:"Блокеры", html:`<p><i>I'm <b>blocked by</b> the backend team.</i> — Я жду бэкенд-команду.<br><i>I <b>need help with</b> the database.</i> — Мне нужна помощь с базой.<br><i>I'm <b>waiting for</b> the design.</i> — Жду дизайн.<br><i><b>No blockers.</b></i> — Всё ок, ничего не мешает.</p>`},
      {t:"match", pairs:[["blocked by","заблокирован (из-за)"],["waiting for","жду"],["almost done","почти готово"],["no blockers","проблем нет"]]},
      {t:"bank", ru:"Я жду дизайн, поэтому начну с тестов.", text:"I'm [waiting] for the design, so I'll [start] with tests.", words:["wait","started"]},
      {t:"listen", lines:[["A","OK, let's start. Anna?"],["B","Yesterday I finished the profile page. Today I'm working on the settings. No blockers."],["A","Great. Max?"],["C","Yesterday I tried to fix the payment bug, but I'm blocked by the API. I need help from the backend team."]], q:"Почему Макс не может закончить задачу?", options:["Его блокирует API","Он заболел","У него нет дизайна"], a:0},
      {t:"order", ru:"Сегодня я работаю над страницей оплаты.", en:"Today I'm working on the payment page.", extra:["worked"]},
      {t:"translate", ru:"Мне нужна помощь с этой задачей.", a:["I need help with this task.","I need some help with this task."]},
      {t:"translate", ru:"Почти готово.", a:["It's almost done.","It is almost done.","Almost done."]},
      {t:"dictation", en:"I'm blocked by the API.", ru:"Меня блокирует API."},
      {t:"speak", en:"Yesterday I fixed the login bug. Today I'm writing tests. No blockers.", ru:"Вчера я исправил баг со входом. Сегодня пишу тесты. Проблем нет."},
      {t:"write", task:"Напиши свой апдейт для стендапа: что сделал вчера, над чем работаешь сегодня, есть ли блокеры.", min:20,
       need:[{label:"Вчера (Past Simple)", re:"yesterday[\\s\\S]*\\b([a-z]{3,}ed|did|made|wrote|built|found|had)\\b"},{label:"Сегодня (I'm working on / -ing)", re:"\\b(am|i m|i'm) [a-z]+ing\\b|working on"},{label:"Блокеры", re:"blocker|blocked|waiting for|need help|no problems"}],
       sample:"Yesterday I fixed two bugs in the login form and reviewed Max's code. Today I'm working on the profile page. I'm waiting for the new design, but it's not a blocker."},
      {t:"roleplay", title:"Утренний стендап. Тимлид обращается к тебе.", lines:[
        {s:"them", en:"Good morning! What did you do yesterday?", ru:"Доброе утро! Что делал вчера?"},
        {s:"you", ru:"Скажи, что исправил баг в форме входа", say:"Yesterday I fixed the bug in the login form.", re:"\\b[a-z]{3,}ed\\b|did|wrote|made|built"},
        {s:"them", en:"Nice. And today?", ru:"Отлично. А сегодня?"},
        {s:"you", ru:"Скажи, что работаешь над страницей профиля", say:"Today I'm working on the profile page.", re:"working on|\\b[a-z]+ing\\b|going to|will"},
        {s:"them", en:"Any blockers?", ru:"Что-нибудь мешает?"},
        {s:"you", ru:"Скажи, что ждёшь дизайн от дизайнера", say:"I'm waiting for the design.", re:"waiting|blocked|no blockers|need|nothing"}
      ]}
    ]
  },
  {
    id: "i8", icon: "bug", title: "Баг-репорт",
    goals: ["Написать понятный баг-репорт", "Описать шаги: Steps to reproduce", "Сравнить: Expected result и Actual result"],
    summary: ["Title — коротко, что сломалось", "Steps to reproduce: 1. Open… 2. Click…", "Expected result — что должно быть", "Actual result — что происходит на самом деле", "When I click…, the app crashes."],
    phrases: [["Steps to reproduce","шаги воспроизведения"],["Expected result","ожидаемый результат"],["Actual result","фактический результат"],["The app crashes.","Приложение падает."],["The button doesn't work.","Кнопка не работает."],["The page is blank.","Страница пустая."],["It happens every time.","Происходит каждый раз."],["It works on Android, but not on iOS.","На Android работает, на iOS — нет."]],
    steps: [
      {t:"tip", title:"Структура баг-репорта", html:`<p><b>Title</b>: <i>Login button doesn't work on iOS</i></p><p><b>Steps to reproduce</b>:<br>1. Open the app.<br>2. Enter email and password.<br>3. Tap «Log in».</p><p><b>Expected result</b>: the user sees the main page.<br><b>Actual result</b>: nothing happens.</p><p><b>Environment</b>: iPhone 13, iOS 17.</p>`},
      {t:"match", pairs:[["crash","падение (аварийное)"],["freeze","зависнуть"],["blank page","пустая страница"],["reproduce","воспроизвести"]]},
      {t:"pick", q:"«Что должно было произойти» — это:", options:["Expected result","Actual result","Steps to reproduce"], a:0},
      {t:"pick", q:"Лучший заголовок баг-репорта:", options:["Search returns no results for Cyrillic text","Nothing works!!!","Bug"], a:0, why:"Заголовок должен коротко и точно говорить, что сломалось."},
      {t:"tip", title:"Полезные фразы", html:`<p><i><b>When I</b> click «Pay», the app <b>crashes</b>.</i> — Когда я нажимаю «Оплатить», приложение падает.<br><i>The page <b>freezes</b>.</i> — Страница зависает.<br><i>It <b>happens every time</b> / <b>sometimes</b>.</i> — Происходит всегда / иногда.<br><i>It <b>works on</b> Chrome, <b>but not on</b> Safari.</i></p>`},
      {t:"bank", ru:"Когда я нажимаю «Отправить», страница зависает.", text:"[When] I click Submit, the page [freezes].", words:["If","freeze"]},
      {t:"gap", ru:"Приложение падает каждый раз.", text:"The app [crashes] every time.", hint:true},
      {t:"gap", ru:"Кнопка не работает.", text:"The button [doesn't] work."},
      {t:"listen", lines:[["A","I found a bug in the cart."],["B","What happens?"],["A","When I add more than ten items, the total price is wrong."],["B","Does it happen every time?"],["A","Yes, every time. On mobile and on desktop."]], q:"Когда возникает баг?", options:["Когда в корзине больше 10 товаров","При оплате картой","Только на телефоне"], a:0},
      {t:"order", ru:"На Chrome работает, а на Safari — нет.", en:"It works on Chrome, but not on Safari."},
      {t:"order", ru:"Ожидаемый результат: пользователь видит главную страницу.", en:"Expected result: the user sees the main page."},
      {t:"translate", ru:"Страница пустая.", a:["The page is blank.","The page is empty."]},
      {t:"translate", ru:"Приложение падает.", a:["The app crashes.","The application crashes."]},
      {t:"dictation", en:"Steps to reproduce", ru:"Шаги воспроизведения"},
      {t:"speak", en:"When I click the Pay button, the app crashes.", ru:"Когда я нажимаю кнопку «Оплатить», приложение падает."},
      {t:"write", task:"Напиши баг-репорт: заголовок, шаги (минимум 3), ожидаемый и фактический результат.", min:30,
       need:[{label:"Steps to reproduce / шаги", re:"steps|1 [a-z]|first|then"},{label:"Expected result", re:"expected"},{label:"Actual result", re:"actual"}],
       sample:"Title: Search doesn't work with Russian words. Steps to reproduce: 1. Open the main page. 2. Type «кот» in the search. 3. Press Enter. Expected result: the user sees a list of products. Actual result: the page is blank."},
      {t:"roleplay", title:"Тестировщица звонит тебе с багом.", lines:[
        {s:"them", en:"Hi! I found a bug in your feature.", ru:"Привет! Нашла баг в твоей фиче."},
        {s:"you", ru:"Спроси, что происходит", say:"Oh no. What happens?", re:"what happens|what s wrong|what is wrong|what is the problem|what"},
        {s:"them", en:"When I upload a big photo, the app crashes.", ru:"Когда загружаю большое фото, приложение падает."},
        {s:"you", ru:"Спроси, происходит ли это каждый раз", say:"Does it happen every time?", re:"every time|always|happen"},
        {s:"them", en:"Yes, every time. Only on iOS.", ru:"Да, каждый раз. Только на iOS."},
        {s:"you", ru:"Попроси её прислать шаги воспроизведения", say:"Can you send me the steps to reproduce?", re:"steps|send|reproduce|ticket|report"}
      ]}
    ]
  },
  {
    id: "i9", icon: "branch", title: "Git и коммиты",
    goals: ["Знать глаголы git: clone, pull, push, merge", "Писать сообщения коммитов в повелительном наклонении", "Описать pull request"],
    summary: ["clone · pull · push · commit · branch · merge · revert", "Коммит — повелительный глагол: Add login page, Fix typo", "Не «Added», не «Fixes» — а «Add», «Fix»", "Pull request: What, Why, How to test", "merge conflict — конфликт слияния"],
    phrases: [["clone the repo","склонировать репозиторий"],["pull the latest changes","подтянуть последние изменения"],["push to the main branch","запушить в главную ветку"],["create a new branch","создать новую ветку"],["merge conflict","конфликт слияния"],["Fix typo in README","Исправить опечатку в README"],["Add login page","Добавить страницу входа"],["Remove unused code","Удалить неиспользуемый код"]],
    steps: [
      {t:"tip", title:"Глаголы git", html:`<p><b>clone</b> — склонировать, <b>pull</b> — подтянуть изменения, <b>push</b> — отправить, <b>commit</b> — зафиксировать, <b>branch</b> — ветка, <b>merge</b> — слить, <b>revert</b> — откатить, <b>rebase</b> — перебазировать.</p><p><i>Pull the latest changes before you push.</i> — Подтяни свежие изменения перед пушем.</p>`},
      {t:"match", pairs:[["pull","подтянуть"],["push","отправить"],["merge","слить"],["revert","откатить"]]},
      {t:"pick", q:"Сначала нужно получить копию репозитория:", options:["clone","merge","push"], a:0},
      {t:"tip", title:"Как писать сообщение коммита", html:`<p>Принято писать <b>повелительным глаголом</b> с большой буквы, коротко, без точки:</p><p>✓ <i>Add login page</i><br>✓ <i>Fix crash on photo upload</i><br>✓ <i>Remove unused imports</i><br>✓ <i>Update README</i></p><p>✗ <i>Added login page</i> · ✗ <i>fixes</i> · ✗ <i>some changes</i></p><p class="note">Проверка: фраза должна продолжать «If applied, this commit will…».</p>`},
      {t:"pick", q:"Лучшее сообщение коммита:", options:["Fix typo in README","Fixed typo in readme.","fixing stuff"], a:0},
      {t:"pick", q:"Лучшее сообщение коммита:", options:["Add dark mode to settings","Added dark mode","Dark mode"], a:0},
      {t:"match", pairs:[["Add","добавить"],["Fix","исправить"],["Remove","удалить"],["Update","обновить"]]},
      {t:"bank", ru:"Создай новую ветку и запушь в неё.", text:"Create a new [branch] and [push] to it.", words:["brunch","pull"]},
      {t:"gap", ru:"Подтяни последние изменения.", text:"[Pull] the latest changes.", hint:true},
      {t:"gap", ru:"Коммит: «Удалить неиспользуемый код»", text:"[Remove] unused code"},
      {t:"tip", title:"Описание pull request", html:`<p><b>What</b> — что сделано: <i>This PR adds a dark mode.</i><br><b>Why</b> — зачем: <i>Users asked for it.</i><br><b>How to test</b> — как проверить: <i>Go to Settings and enable dark mode.</i></p><p class="note">PR пишут в Present Simple: <i>This PR <b>adds</b>… / <b>fixes</b>…</i></p>`},
      {t:"listen", lines:[["A","I can't push my changes. There's an error."],["B","Did you pull first?"],["A","No, I didn't."],["B","Pull the latest changes, fix the merge conflict and then push again."]], q:"Что нужно сделать перед пушем?", options:["Подтянуть изменения и решить конфликт","Удалить ветку","Создать новый репозиторий"], a:0},
      {t:"order", ru:"Этот PR исправляет баг со входом.", en:"This PR fixes the login bug.", extra:["fix"]},
      {t:"translate", ru:"Склонируй репозиторий.", a:["Clone the repository.","Clone the repo."]},
      {t:"translate", ru:"У меня конфликт слияния.", a:["I have a merge conflict.","I've got a merge conflict.","I have merge conflict."]},
      {t:"dictation", en:"Pull the latest changes before you push.", ru:"Подтяни свежие изменения перед пушем."},
      {t:"speak", en:"I created a new branch and pushed my changes.", ru:"Я создал новую ветку и запушил свои изменения."},
      {t:"write", task:"Напиши 3 сообщения коммитов (повелительный глагол) и короткое описание pull request: что, зачем и как проверить.", min:25,
       need:[{label:"Коммит с Add / Fix / Remove / Update", re:"\\b(add|fix|remove|update|refactor|rename|create|delete)\\b"},{label:"This PR + глагол на -s", re:"this (pr|pull request) [a-z]+s\\b"},{label:"How to test / to test", re:"to test|how to test|test it|testing"}],
       sample:"Commits: Add search page. Fix crash on empty input. Update README. This PR adds a search page. Users need to find products faster. How to test: open the main page and type a product name."},
      {t:"roleplay", title:"Коллега помогает разобраться с git.", lines:[
        {s:"them", en:"Did you push your changes?", ru:"Ты запушил изменения?"},
        {s:"you", ru:"Скажи, что не можешь — ошибка", say:"No, I can't. I get an error.", re:"can t|cannot|error|no"},
        {s:"them", en:"Did you pull first?", ru:"А ты сначала сделал pull?"},
        {s:"you", ru:"Скажи, что сделал, но теперь у тебя конфликт слияния", say:"Yes, I did. Now I have a merge conflict.", re:"conflict|merge|yes|did"},
        {s:"them", en:"OK, let's fix it together.", ru:"Ок, давай решим вместе."},
        {s:"you", ru:"Поблагодари", say:"Thanks a lot!", re:"thank|great|cool"}
      ]}
    ]
  }],
  test: {
    id: "it3", title: "Code review #3: Team Work",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Вчера я исправил баг.", a:["Yesterday I fixed a bug.","Yesterday I fixed the bug.","I fixed a bug yesterday.","I fixed the bug yesterday."]},
        {t:"translate", ru:"Сегодня я работаю над тестами.", a:["Today I'm working on tests.","Today I am working on tests.","Today I'm working on the tests."]},
        {t:"translate", ru:"Приложение падает.", a:["The app crashes.","The application crashes."]}
      ]},
      {title:"Грамматика и стиль", steps:[
        {t:"pick", q:"Лучшее сообщение коммита:", options:["Remove unused imports","Removed some imports.","removing"], a:0},
        {t:"pick", q:"«Что должно было произойти» в баг-репорте:", options:["Expected result","Actual result","Title"], a:0},
        {t:"bank", ru:"Я жду API, поэтому сегодня пишу тесты.", text:"I'm [waiting] for the API, so today I'm [writing] tests.", words:["wait","wrote"]},
        {t:"gap", ru:"Подтяни последние изменения.", text:"[Pull] the latest changes."},
        {t:"gap", ru:"Когда я нажимаю кнопку, страница зависает.", text:"When I click the button, the page [freezes]."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Этот PR добавляет тёмную тему.", en:"This PR adds a dark mode.", extra:["add"]},
        {t:"order", ru:"Меня блокирует бэкенд-команда.", en:"I'm blocked by the backend team."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Kate, your update?"],["B","Yesterday I reviewed two pull requests and fixed a small bug in the cart."],["A","And today?"],["B","Today I'm going to write the bug report for the payment issue. It happens only on Safari."],["A","Any blockers?"],["B","No blockers."]], q:"Где возникает проблема с оплатой?", options:["Только в Safari","Только на Android","Везде"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Yesterday I finished the search page. Today I'm writing tests. No blockers.", ru:"Вчера я закончил страницу поиска. Сегодня пишу тесты. Блокеров нет."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Напиши баг-репорт для бага: «Если ввести пустой email и нажать Sign up, приложение падает». Заголовок, шаги, Expected, Actual.", min:30,
         need:[{label:"Шаги (1. … 2. … / first, then)", re:"steps|1 [a-z]|first|then"},{label:"Expected result", re:"expected"},{label:"Actual result", re:"actual"},{label:"crash(es)", re:"crash"}],
         sample:"Title: App crashes on sign up with empty email. Steps to reproduce: 1. Open the app. 2. Leave the email field empty. 3. Tap Sign up. Expected result: the user sees an error message. Actual result: the app crashes."}
      ]}
    ]
  }
},
/* ======================= SPRINT 4 ======================= */
{
  id: "ib4", title: "Code Review & Career", note: "Ревью, просьбы о помощи, собеседование",
  lessons: [
  {
    id: "i10", icon: "chat", title: "Код-ревью",
    goals: ["Вежливо оставлять комментарии: Could you…? I suggest…", "Понимать сокращения: LGTM, nit, WIP", "Отвечать на замечания"],
    summary: ["Could you rename this variable? — Можешь переименовать…?", "I suggest using… / Consider using…", "Why do we need this? — Зачем это нужно?", "LGTM = looks good to me · nit = мелочь · WIP = в работе", "Good catch! Fixed. / Done."],
    phrases: [["Could you add a test?","Можешь добавить тест?"],["I suggest using a constant.","Предлагаю использовать константу."],["Consider splitting this function.","Подумай о том, чтобы разделить функцию."],["Why do we need this?","Зачем это нужно?"],["LGTM!","Выглядит хорошо!"],["nit: extra space","мелочь: лишний пробел"],["Good catch!","Хорошо заметил!"],["Fixed, thanks!","Исправил, спасибо!"]],
    steps: [
      {t:"tip", title:"Вежливые замечания", html:`<p>В ревью не приказывают, а предлагают:</p><p><i><b>Could you</b> rename this variable?</i> — Можешь переименовать переменную?<br><i><b>I suggest</b> using a constant here.</i> — Предлагаю использовать константу.<br><i><b>Consider</b> splitting this function.</i> — Подумай о том, чтобы разделить функцию.<br><i><b>What do you think about</b>…?</i> — Что думаешь насчёт…?</p><p class="note">После suggest и consider — глагол с <b>-ing</b>.</p>`},
      {t:"pick", q:"Самый вежливый комментарий:", options:["Could you add a test for this case?","Add test.","Your code is wrong."], a:0},
      {t:"pick", q:"I suggest ___ a map instead of a loop.", options:["using","use","to using"], a:0},
      {t:"tip", title:"Сокращения в ревью", html:`<p><b>LGTM</b> — looks good to me — всё отлично, можно сливать.<br><b>nit</b> — nitpick — мелкое замечание, необязательное.<br><b>WIP</b> — work in progress — ещё в работе.<br><b>PTAL</b> — please take a look — посмотри, пожалуйста.<br><b>IMO</b> — in my opinion — по-моему.</p>`},
      {t:"match", pairs:[["LGTM","всё хорошо, можно сливать"],["nit","мелочь"],["WIP","ещё в работе"],["IMO","по-моему"]]},
      {t:"pick", q:"Ревьюер написал «nit: missing space». Это:", options:["Мелкое необязательное замечание","Критическая ошибка","Похвала"], a:0},
      {t:"tip", title:"Как отвечать на замечания", html:`<p><i><b>Good catch!</b> Fixed.</i> — Хорошо заметил! Исправил.<br><i><b>Done.</b></i> — Сделано.<br><i><b>Good point</b>, I'll change it.</i> — Хорошее замечание, поменяю.<br><i>I <b>kept</b> it <b>because</b>…</i> — Я оставил так, потому что…</p>`},
      {t:"bank", ru:"Хорошо заметил! Исправил, спасибо.", text:"Good [catch]! [Fixed], thanks.", words:["cache","Fix"]},
      {t:"gap", ru:"Можешь переименовать эту функцию?", text:"[Could] you rename this function?", hint:true},
      {t:"gap", ru:"Подумай о том, чтобы использовать константу.", text:"Consider [using] a constant."},
      {t:"listen", lines:[["A","I left some comments on your PR."],["B","Thanks! Anything serious?"],["A","No, mostly nits. But could you add a test for the empty list?"],["B","Good point. I'll add it today."],["A","Great. After that, LGTM."]], q:"Что попросили добавить?", options:["Тест для пустого списка","Документацию","Новую функцию"], a:0},
      {t:"order", ru:"Зачем нам это нужно?", en:"Why do we need this?", extra:["does"]},
      {t:"translate", ru:"Можешь добавить тест?", a:["Could you add a test?","Can you add a test?"]},
      {t:"translate", ru:"Выглядит хорошо!", a:["Looks good to me!","LGTM!","Looks good!"]},
      {t:"dictation", en:"I suggest using a constant here.", ru:"Предлагаю использовать здесь константу."},
      {t:"speak", en:"Good catch! I'll fix it today.", ru:"Хорошо заметил! Исправлю сегодня."},
      {t:"write", task:"Оставь 3 комментария к чужому коду (вежливо: could you, I suggest, consider) и ответь на 1 замечание к своему коду.", min:25,
       need:[{label:"Could you / Can you", re:"could you|can you"},{label:"I suggest / consider + -ing", re:"(suggest|consider) [a-z]+ing"},{label:"Ответ (fixed, done, good catch…)", re:"fixed|done|good catch|good point|i will|i ll|changed"}],
       sample:"Could you rename this variable? It's not clear. I suggest using a constant for the timeout. Consider splitting this function into two. Answer: Good catch! Fixed, thanks."},
      {t:"roleplay", title:"Ревьюер обсуждает с тобой твой pull request.", lines:[
        {s:"them", en:"I think this function is too long.", ru:"По-моему, функция слишком длинная."},
        {s:"you", ru:"Согласись и скажи, что разделишь её", say:"Good point. I'll split it into two functions.", re:"good point|agree|split|will|i ll|ok"},
        {s:"them", en:"Also, why do we need this variable?", ru:"И зачем нам эта переменная?"},
        {s:"you", ru:"Скажи: хорошо заметил, она не нужна — удалишь", say:"Good catch! We don't need it. I'll remove it.", re:"catch|remove|delete|don t need|do not need|not needed"},
        {s:"them", en:"Great. After that, LGTM.", ru:"Отлично. После этого — всё ок."},
        {s:"you", ru:"Поблагодари", say:"Thanks for the review!", re:"thank"}
      ]}
    ]
  },
  {
    id: "i11", icon: "search", title: "Как просить о помощи",
    goals: ["Сформулировать вопрос для чата или Stack Overflow", "Описать: что пытаешься сделать, что ожидаешь, что получаешь", "Рассказать, что уже попробовал"],
    summary: ["I'm trying to… — я пытаюсь…", "I expected… but I got… — ожидал…, а получил…", "I've tried… — я уже пробовал… (Present Perfect)", "Here is my code: · Any ideas?", "Thanks in advance! — Заранее спасибо!"],
    phrases: [["I'm trying to connect to the database.","Я пытаюсь подключиться к базе."],["I expected a list, but I got null.","Ожидал список, а получил null."],["I've tried restarting the server.","Я уже пробовал перезапустить сервер."],["Here is my code:","Вот мой код:"],["Any ideas?","Есть идеи?"],["Thanks in advance!","Заранее спасибо!"],["Does anyone know how to…?","Кто-нибудь знает, как…?"],["It still doesn't work.","Всё ещё не работает."]],
    steps: [
      {t:"tip", title:"Хороший вопрос = 4 части", html:`<p>1. <b>Цель</b>: <i>I'm trying to upload a file to S3.</i><br>2. <b>Ожидание и реальность</b>: <i>I expected a 200 response, but I got 403.</i><br>3. <b>Что пробовал</b>: <i>I've tried changing the key.</i><br>4. <b>Код и вопрос</b>: <i>Here is my code: … Any ideas?</i></p>`},
      {t:"pick", q:"Как начать вопрос о том, что пытаешься сделать?", options:["I'm trying to…","I tried to try…","I want that…"], a:0},
      {t:"gap", ru:"Я пытаюсь подключиться к API.", text:"I'm [trying] to connect to the API.", hint:true},
      {t:"tip", title:"Expected vs got", html:`<p><i>I <b>expected</b> a list of users, <b>but I got</b> an empty array.</i><br><i>It <b>should</b> return true, <b>but it returns</b> false.</i></p>`},
      {t:"bank", ru:"Я ожидал 200, а получил 404.", text:"I [expected] 200, but I [got] 404.", words:["expect","get"]},
      {t:"tip", title:"Что уже пробовал: Present Perfect", html:`<p><i>I<b>'ve tried</b> restarting the server.</i> — Я пробовал перезапустить сервер.<br><i>I<b>'ve checked</b> the logs.</i> — Я проверил логи.<br><i>I<b>'ve read</b> the docs, but…</i> — Я прочитал документацию, но…</p><p class="note">После try в этом значении — глагол с <b>-ing</b>: <i>tried restarting</i>.</p>`},
      {t:"pick", q:"Я уже проверил логи:", options:["I've checked the logs.","I checked the logs tomorrow.","I'm check the logs."], a:0},
      {t:"gap", ru:"Я пробовал перезапустить сервер.", text:"I've tried [restarting] the server."},
      {t:"match", pairs:[["Any ideas?","Есть идеи?"],["Thanks in advance!","Заранее спасибо!"],["It still doesn't work.","Всё ещё не работает."],["Here is my code:","Вот мой код:"]]},
      {t:"listen", lines:[["A","Hey, do you have a minute?"],["B","Sure, what's up?"],["A","I'm trying to send an email from the app, but I get an error. I've checked the password and the port."],["B","Which port do you use?"],["A","Twenty-five."],["B","Try five eight seven. Port twenty-five is often blocked."]], q:"Что посоветовали?", options:["Поменять порт на 587","Поменять пароль","Перезапустить сервер"], a:0},
      {t:"order", ru:"Кто-нибудь знает, как это исправить?", en:"Does anyone know how to fix this?", extra:["do"]},
      {t:"translate", ru:"Есть идеи?", a:["Any ideas?","Do you have any ideas?"]},
      {t:"translate", ru:"Всё ещё не работает.", a:["It still doesn't work.","It still does not work.","Still doesn't work."]},
      {t:"dictation", en:"Thanks in advance!", ru:"Заранее спасибо!"},
      {t:"speak", en:"I'm trying to connect to the database, but I get an error.", ru:"Я пытаюсь подключиться к базе, но получаю ошибку."},
      {t:"write", task:"Напиши вопрос в рабочий чат или на Stack Overflow о своей (выдуманной) проблеме: цель, что ожидал, что получил, что уже пробовал.", min:30,
       need:[{label:"I'm trying to…", re:"trying to"},{label:"expected … but …", re:"expect[\\s\\S]*but|should[\\s\\S]*but"},{label:"I've tried / I've checked…", re:"\\b(i have|i ve) (already )?(tried|checked|read|restarted|changed|updated|reinstalled)\\b"}],
       sample:"Hi! I'm trying to load users from the API. I expected a list of users, but I got an empty array. I've tried restarting the server and I've checked the URL. Here is my code. Any ideas? Thanks in advance!"},
      {t:"roleplay", title:"Пишешь сеньору в чат за помощью.", lines:[
        {s:"them", en:"Hi! What's the problem?", ru:"Привет! В чём проблема?"},
        {s:"you", ru:"Скажи, что пытаешься загрузить файл, но получаешь ошибку", say:"I'm trying to upload a file, but I get an error.", re:"trying|error|upload|doesn t work|does not work"},
        {s:"them", en:"What have you tried?", ru:"Что уже пробовал?"},
        {s:"you", ru:"Скажи, что проверил права доступа", say:"I've checked the permissions.", re:"\\b(have|ve) (tried|checked|restarted|read|changed)|tried|checked"},
        {s:"them", en:"Can you send me your code?", ru:"Пришлёшь код?"},
        {s:"you", ru:"Скажи: конечно, вот он", say:"Sure, here is my code.", re:"sure|here|yes|ok"}
      ]}
    ]
  },
  {
    id: "i12", icon: "briefcase", title: "Собеседование: о себе",
    goals: ["Рассказать о себе на собеседовании", "Говорить об опыте: I've worked with…", "Отвечать на частые вопросы"],
    summary: ["Tell me about yourself. — Расскажите о себе.", "I've worked with React for two years.", "I'm familiar with… — Я знаком с…", "My strengths are… — Мои сильные стороны…", "I'm looking for… — Я ищу…"],
    phrases: [["Tell me about yourself.","Расскажите о себе."],["I'm a junior frontend developer.","Я джуниор фронтенд-разработчик."],["I've worked with React for a year.","Я работаю с React год."],["I'm familiar with Docker.","Я знаком с Docker."],["My strengths are…","Мои сильные стороны…"],["I'm a fast learner.","Я быстро учусь."],["I'm looking for a team where I can grow.","Ищу команду, где смогу расти."],["Do you have any questions for us?","У вас есть вопросы к нам?"]],
    steps: [
      {t:"tip", title:"Tell me about yourself", html:`<p>Простая структура на 4–5 предложений:</p><p>1. <b>Кто ты</b>: <i>I'm a junior backend developer.</i><br>2. <b>Опыт</b>: <i>I've worked with Python for two years.</i><br>3. <b>Проект</b>: <i>Recently I built an API for a delivery app.</i><br>4. <b>Чего хочешь</b>: <i>Now I'm looking for a team where I can grow.</i></p>`},
      {t:"tip", title:"Опыт: Present Perfect + for / since", html:`<p><i>I<b>'ve worked with</b> React <b>for</b> two years.</i> — Я работаю с React два года (и сейчас тоже).<br><i>I<b>'ve been</b> a developer <b>since</b> 2023.</i> — Я разработчик с 2023 года.</p><p><b>for</b> — сколько времени, <b>since</b> — с какого момента.</p><p class="note">Если опыт небольшой: <i>I'm <b>familiar with</b> Docker.</i> — Я знаком с Docker. <i>I have <b>basic knowledge of</b> SQL.</i></p>`},
      {t:"pick", q:"I've worked with Python ___ two years.", options:["for","since","from"], a:0},
      {t:"pick", q:"I've been a developer ___ 2023.", options:["since","for","during"], a:0},
      {t:"gap", ru:"Я знаком с Docker.", text:"I'm [familiar] with Docker.", hint:true},
      {t:"match", pairs:[["strengths","сильные стороны"],["weaknesses","слабые стороны"],["experience","опыт"],["salary","зарплата"]]},
      {t:"tip", title:"Частые вопросы", html:`<p><i>What are your strengths?</i> — <i>I'm a fast learner and a good team player.</i><br><i>Why do you want to work here?</i> — <i>I like your product and I want to grow.</i><br><i>Where do you see yourself in 3 years?</i> — <i>I want to become a middle developer.</i><br><i>Do you have any questions for us?</i> — <i>Yes. What does a typical day look like?</i></p>`},
      {t:"bank", ru:"Я быстро учусь и хорошо работаю в команде.", text:"I'm a fast [learner] and a good team [player].", words:["learn","play"]},
      {t:"pick", q:"«Do you have any questions for us?» Лучший ответ:", options:["Yes. What does a typical day look like in your team?","No.","What is the salary? Only this."], a:0},
      {t:"listen", lines:[["A","So, tell me about yourself."],["B","I'm a junior frontend developer. I've worked with React for one year."],["A","What projects have you done?"],["B","I built an online shop for a local bakery. I did the frontend and the tests."],["A","Why do you want to join us?"],["B","I like your product, and I'm looking for a team where I can learn from senior developers."]], q:"Что кандидат сделал для пекарни?", options:["Интернет-магазин","Мобильную игру","Сайт-визитку без кода"], a:0},
      {t:"order", ru:"Я работаю с JavaScript два года.", en:"I've worked with JavaScript for two years.", extra:["since"]},
      {t:"translate", ru:"Расскажите о себе.", a:["Tell me about yourself.","Tell us about yourself.","Can you tell me about yourself?"]},
      {t:"translate", ru:"Я ищу команду, где смогу расти.", a:["I'm looking for a team where I can grow.","I am looking for a team where I can grow."]},
      {t:"dictation", en:"My strengths are attention to detail and teamwork.", ru:"Мои сильные стороны — внимание к деталям и командная работа."},
      {t:"speak", en:"I'm a junior developer. I've worked with Python for one year, and I'm a fast learner.", ru:"Я джуниор-разработчик. Работаю с Python год и быстро учусь."},
      {t:"write", task:"Напиши свой ответ на «Tell me about yourself» (5–6 предложений): кто ты, опыт (I've worked with… for…), проект, сильные стороны, что ищешь.", min:35,
       need:[{label:"Кто ты (I'm a … developer / student)", re:"\\bi am an? [a-z ]*(developer|engineer|programmer|student|tester|designer|analyst)"},{label:"Опыт (I've worked / I've been … for / since)", re:"\\b(i have|i ve) (worked|been|used|built|studied|learned|learnt)\\b"},{label:"Сильные стороны / что ищешь", re:"strength|fast learner|team player|looking for|want to grow|i want to"}],
       sample:"I'm a junior frontend developer from Moscow. I've worked with JavaScript and React for one year. Recently I built an online shop for a small bakery. My strengths are attention to detail and teamwork. Now I'm looking for a team where I can grow."},
      {t:"roleplay", title:"Собеседование в международную компанию.", lines:[
        {s:"them", en:"Hi! Thanks for coming. Tell me about yourself.", ru:"Здравствуйте! Спасибо, что пришли. Расскажите о себе."},
        {s:"you", ru:"Скажи, кто ты (например, джуниор-разработчик)", say:"I'm a junior backend developer.", re:"\\bi am\\b|developer|engineer|student|programmer"},
        {s:"them", en:"How long have you worked with Python?", ru:"Как долго вы работаете с Python?"},
        {s:"you", ru:"Ответь с for (например, год)", say:"I've worked with Python for one year.", re:"\\bfor\\b|since|year|month"},
        {s:"them", en:"What are your strengths?", ru:"Какие у вас сильные стороны?"},
        {s:"you", ru:"Назови 1–2 сильные стороны", say:"I'm a fast learner and a good team player.", re:"learner|team|detail|responsible|curious|strength|hard[ -]?working|i am"},
        {s:"them", en:"Great. Do you have any questions for us?", ru:"Отлично. У вас есть вопросы к нам?"},
        {s:"you", ru:"Спроси, как выглядит обычный день в команде", say:"Yes. What does a typical day look like in your team?", re:"\\?|what|how|typical|team|day"}
      ]}
    ]
  }],
  test: {
    id: "it4", title: "Code review #4: Final",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Можешь добавить тест?", a:["Could you add a test?","Can you add a test?"]},
        {t:"translate", ru:"Я пробовал перезапустить сервер.", a:["I've tried restarting the server.","I have tried restarting the server.","I tried to restart the server.","I've tried to restart the server.","I tried restarting the server."]},
        {t:"translate", ru:"Я работаю с React два года.", a:["I've worked with React for two years.","I have worked with React for two years.","I've been working with React for two years."]}
      ]},
      {title:"Грамматика и стиль", steps:[
        {t:"pick", q:"Consider ___ this function.", options:["splitting","split","to splitting"], a:0},
        {t:"pick", q:"«LGTM» значит:", options:["всё хорошо, можно сливать","нужно переделать","в работе"], a:0},
        {t:"bank", ru:"Я ожидал true, а получил false.", text:"I [expected] true, but I [got] false.", words:["expect","get"]},
        {t:"gap", ru:"Я знаком с SQL.", text:"I'm [familiar] with SQL."},
        {t:"gap", ru:"Я разработчик с 2024 года.", text:"I've been a developer [since] 2024."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Хорошо заметил! Исправил.", en:"Good catch! Fixed.", extra:["Fix"]},
        {t:"order", ru:"Я пытаюсь подключиться к базе данных.", en:"I'm trying to connect to the database."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Thanks for the review, Tom."],["B","No problem. The code looks good. Just one nit: the variable name data is not clear."],["A","Good point. What do you suggest?"],["B","Maybe userList? And could you add a test for the empty case?"],["A","Sure. I'll do it today and ping you."],["B","Great, then LGTM."]], q:"Какое имя предложили для переменной?", options:["userList","data","users_data"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"I'm a junior developer. I've worked with JavaScript for one year.", ru:"Я джуниор-разработчик. Работаю с JavaScript год."},
        {t:"roleplay", title:"Короткое ревью голосом.", lines:[
          {s:"them", en:"Could you add comments to this function?", ru:"Можешь добавить комментарии к функции?"},
          {s:"you", ru:"Согласись", say:"Sure, I'll add them.", re:"sure|yes|ok|will|i ll|no problem"},
          {s:"them", en:"And why do we need this loop?", ru:"А зачем нам этот цикл?"},
          {s:"you", ru:"Скажи: хорошо заметил, удалишь его", say:"Good catch! I'll remove it.", re:"catch|remove|delete|point"}
        ]}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Напиши сопроводительное письмо (cover letter) на позицию Junior Developer: кто ты, опыт, проект, сильные стороны, почему эта компания.", min:40,
         need:[{label:"Кто ты (I'm a … )", re:"\\bi am an? [a-z ]*(developer|engineer|programmer|student|tester|designer|analyst)"},{label:"Опыт (I've worked / built …)", re:"\\b(i have|i ve) (worked|been|built|used|created|developed|studied|learned)\\b"},{label:"Почему компания (I want / I like your…)", re:"i want to|i like your|i would like|i d like|interested in"},{label:"Сильные стороны", re:"strength|fast learner|team player|detail|responsible|motivated"}],
         sample:"Dear hiring team, I'm a junior frontend developer from Moscow. I've worked with JavaScript and React for one year. I've built an online shop for a local bakery. My strengths are attention to detail and teamwork, and I'm a fast learner. I like your product and I would like to grow with your team. Thank you for your time!"}
      ]}
    ]
  }
}
];

/* ================= АУДИО IT ================= */
window.TRACKS_IT = [
  {level:1, id:"ia1", title:"Команды", lines:[["N","Open the file.","Открой файл."],["N","Save your changes.","Сохрани изменения."],["N","Run the tests.","Запусти тесты."],["N","Restart the server.","Перезапусти сервер."],["N","Install the package.","Установи пакет."],["N","Don't delete the database.","Не удаляй базу данных."]]},
  {level:1, id:"ia2", title:"Символы вслух", lines:[["N","index dot H T M L","index.html"],["N","user underscore name","user_name"],["N","open curly braces","открой фигурные скобки"],["N","slash api slash users","/api/users"],["N","anna at gmail dot com","anna@gmail.com"],["N","semicolon at the end of the line","точка с запятой в конце строки"]]},
  {level:1, id:"ia3", title:"Ошибки", lines:[["N","File not found.","Файл не найден."],["N","Permission denied.","Доступ запрещён."],["N","Connection timed out.","Время соединения истекло."],["N","Build failed.","Сборка не удалась."],["N","Invalid password.","Неверный пароль."],["N","This method is deprecated.","Этот метод устарел."]]},
  {level:2, id:"ia4", title:"Стендап", lines:[["A","OK, quick stand-up. Lisa?","Так, быстрый стендап. Лиза?"],["B","Yesterday I fixed the login bug. Today I'm working on the profile page.","Вчера исправила баг со входом. Сегодня работаю над профилем."],["A","Any blockers?","Что-нибудь мешает?"],["B","No blockers.","Нет."],["A","Great. Max?","Отлично. Макс?"],["C","I'm still blocked by the API. I need help from the backend team.","Меня всё ещё блокирует API. Нужна помощь бэкенда."]]},
  {level:2, id:"ia5", title:"Не могу запушить", lines:[["A","I can't push my changes.","Не могу запушить изменения."],["B","Did you pull first?","А pull сделал?"],["A","No, I didn't.","Нет."],["B","Pull the latest changes and try again.","Подтяни изменения и попробуй снова."],["A","Now I have a merge conflict!","Теперь конфликт слияния!"],["B","Don't worry. Let's fix it together.","Не волнуйся. Давай решим вместе."]]},
  {level:2, id:"ia6", title:"Где настройки?", lines:[["A","How do I change the language?","Как поменять язык?"],["B","Go to Settings.","Зайди в настройки."],["A","OK. And then?","Ок. А потом?"],["B","Select Language and choose English.","Выбери Language и English."],["A","Done. Do I need to restart?","Готово. Нужно перезапустить?"],["B","No, just click Apply.","Нет, просто нажми Apply."]]},
  {level:3, id:"ia7", title:"Баг в корзине", lines:[
    ["A","Hi, Dan. I think I found a bug in the cart.","Привет, Дэн. Кажется, я нашла баг в корзине."],
    ["B","Oh no. What happens?","Ой. Что происходит?"],
    ["A","When I add more than ten items, the total price is wrong.","Когда добавляю больше десяти товаров, итоговая сумма неверная."],
    ["B","Does it happen every time?","Каждый раз?"],
    ["A","Yes, every time. On mobile and on desktop.","Да, каждый раз. И на телефоне, и на компьютере."],
    ["B","What did you expect to see?","Что ты ожидала увидеть?"],
    ["A","I expected one hundred and twenty euros, but I got twelve hundred.","Ожидала сто двадцать евро, а получила тысячу двести."],
    ["B","Ah, I see. Probably a problem with the decimal point.","А, понятно. Наверное, проблема с десятичной точкой."],
    ["A","Can you fix it today?","Сможешь исправить сегодня?"],
    ["B","Sure. Please create a ticket with the steps to reproduce.","Конечно. Создай, пожалуйста, тикет с шагами воспроизведения."]]},
  {level:3, id:"ia8", title:"Код-ревью по созвону", lines:[
    ["A","Thanks for the pull request. I have a few comments.","Спасибо за PR. У меня пара комментариев."],
    ["B","Sure, go ahead.","Конечно, давай."],
    ["A","First, this function is too long. Consider splitting it into two.","Во-первых, функция слишком длинная. Подумай о том, чтобы разделить её на две."],
    ["B","Good point. I'll do that.","Хорошее замечание. Сделаю."],
    ["A","Second, the variable name data is not very clear.","Во-вторых, имя переменной data не очень понятное."],
    ["B","What do you suggest?","Что предлагаешь?"],
    ["A","Maybe orders? It's a list of orders, right?","Может, orders? Это же список заказов?"],
    ["B","Yes. Good catch.","Да. Хорошо заметил."],
    ["A","And one nit: there's an extra empty line at the end.","И мелочь: лишняя пустая строка в конце."],
    ["B","I'll fix everything and ping you.","Я всё исправлю и напишу тебе."],
    ["A","Perfect. After that, LGTM.","Отлично. После этого — можно сливать."]]},
  {level:3, id:"ia9", title:"Онбординг", lines:[
    ["A","Welcome to the team! Let me help you set up the project.","Добро пожаловать в команду! Давай помогу настроить проект."],
    ["B","Thanks! What should I do first?","Спасибо! Что делать сначала?"],
    ["A","First, clone the repository. The link is in the README.","Сначала склонируй репозиторий. Ссылка в README."],
    ["B","Done. Then npm install?","Готово. Потом npm install?"],
    ["A","Yes. Make sure you have Node eighteen or newer.","Да. Убедись, что у тебя Node 18 или новее."],
    ["B","I have Node twenty. Is that OK?","У меня Node 20. Нормально?"],
    ["A","Perfect. Then copy the env example file and add your API key.","Отлично. Потом скопируй файл env.example и добавь свой API-ключ."],
    ["B","Is the API key required?","API-ключ обязателен?"],
    ["A","Yes, it's required. Without it the app won't start.","Да, обязателен. Без него приложение не запустится."],
    ["B","Got it. And how do I run the tests?","Понял. А как запускать тесты?"],
    ["A","Just run npm test. If something fails, ask me in the chat.","Просто npm test. Если что-то упадёт — спроси меня в чате."]]},
  {level:4, id:"ia10", title:"Мой первый день джуниором", lines:[
    ["N","My first day as a junior developer was exciting and a little scary.","Мой первый день джуниором был волнующим и немного страшным."],
    ["N","I arrived at the office at nine and met my team lead, Sarah.","Я пришёл в офис в девять и познакомился с тимлидом Сарой."],
    ["N","She gave me a laptop and helped me set up the project.","Она выдала мне ноутбук и помогла настроить проект."],
    ["N","At ten we had a stand-up meeting. Everybody spoke very fast!","В десять был стендап. Все говорили очень быстро!"],
    ["N","When it was my turn, I said: Hi, I'm new. Today I'm setting up my environment.","Когда пришла моя очередь, я сказал: «Привет, я новенький. Сегодня настраиваю окружение»."],
    ["N","After lunch I got my first task: fix a typo on the login page.","После обеда я получил первую задачу: исправить опечатку на странице входа."],
    ["N","It was a small task, but I was very nervous.","Задача была маленькой, но я очень нервничал."],
    ["N","I created a new branch, fixed the typo and wrote the commit message: Fix typo on login page.","Я создал ветку, исправил опечатку и написал коммит: «Fix typo on login page»."],
    ["N","Then I opened my first pull request.","Потом открыл свой первый pull request."],
    ["N","Sarah left one comment: LGTM, welcome to the team!","Сара оставила один комментарий: «LGTM, добро пожаловать в команду!»"],
    ["N","It was the best comment of my life.","Это был лучший комментарий в моей жизни."]]},
  {level:4, id:"ia11", title:"Баг, который мы искали три дня", lines:[
    ["N","Last month our app started to crash every evening.","В прошлом месяце наше приложение начало падать каждый вечер."],
    ["N","It never happened in the morning, only after six p.m.","Утром такого не было — только после шести вечера."],
    ["N","First, we checked the logs, but we didn't find anything strange.","Сначала мы проверили логи, но ничего странного не нашли."],
    ["N","Then we thought it was a problem with the database.","Потом решили, что проблема в базе данных."],
    ["N","We restarted the server, but the app crashed again the next evening.","Мы перезапустили сервер, но следующим вечером приложение снова упало."],
    ["N","On the third day, my colleague Mike had an idea.","На третий день у моего коллеги Майка появилась идея."],
    ["N","He said: What happens in the evening? More users come online!","Он сказал: «Что происходит вечером? Пользователей становится больше!»"],
    ["N","He was right. When there were too many users, the server ran out of memory.","Он был прав. Когда пользователей было слишком много, у сервера заканчивалась память."],
    ["N","We fixed a memory leak and added more servers.","Мы исправили утечку памяти и добавили серверов."],
    ["N","Since then, the app hasn't crashed once.","С тех пор приложение ни разу не упало."],
    ["N","I learned an important lesson: always ask what is different when the bug happens.","Я усвоил важный урок: всегда спрашивай, что меняется, когда появляется баг."]]}
];
window.TRACK_LEVELS_IT = {1:"Короткие фразы", 2:"Короткие диалоги", 3:"Длинные диалоги", 4:"Истории"};
