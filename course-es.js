// Курс «Pasitos» — испанский почти с нуля (A0 → A2) для студентки.
// Формат заданий тот же, что в course.js (см. описание там).
// В ответах (a, say, sample) — правильная орфография с ударениями.
// В регулярных выражениях (re) — без ударений и без ñ (n), строчными: проверка их не учитывает.

window.COURSE_ES = [
/* ======================= БЛОК 1 ======================= */
{
  id: "sb1", title: "Primeros pasos", note: "Звуки, ser, род и артикли",
  lessons: [
  {
    id: "s1", icon: "hand", title: "¡Hola! Звуки и приветствия",
    goals: ["Читать испанские буквы и звуки", "Здороваться и прощаться", "Спросить «как дела?» и ответить"],
    summary: ["H не читается: hola = «ола»", "ll и y ≈ «й», ñ = «нь», j = «х»", "¡Hola! · Buenos días · Buenas tardes · Buenas noches", "¿Qué tal? — Bien, gracias. ¿Y tú?", "Adiós · Hasta luego · Hasta mañana"],
    phrases: [["¡Hola!","Привет!"],["Buenos días.","Доброе утро / добрый день."],["Buenas tardes.","Добрый день (после обеда)."],["Buenas noches.","Добрый вечер / спокойной ночи."],["¿Qué tal?","Как дела?"],["Muy bien, gracias.","Очень хорошо, спасибо."],["¿Y tú?","А ты?"],["Más o menos.","Так себе."],["Adiós.","До свидания."],["Hasta luego.","Пока, до встречи."],["Hasta mañana.","До завтра."]],
    steps: [
      {t:"tip", title:"Как читать по-испански", html:`<p>Хорошая новость: испанский читается почти так же, как пишется.</p><ul><li><b>h</b> — не читается: <i>hola</i> [óла]</li><li><b>ll</b> и <b>y</b> — как «й»: <i>llamo</i> [йáмо], <i>yo</i> [йо]</li><li><b>ñ</b> — «нь»: <i>mañana</i> [маньяна]</li><li><b>j</b>, а также <b>g</b> перед e/i — «х»: <i>jamón, gente</i></li><li><b>qu</b> — «к»: <i>qué</i> [ке]</li><li><b>c</b> перед e/i и <b>z</b> — межзубный звук, как английское th (в Латинской Америке — «с»): <i>gracias</i></li><li><b>r</b> в начале слова и <b>rr</b> — раскатистое «р»: <i>perro</i></li></ul>`},
      {t:"match", pairs:[["hola","привет"],["gracias","спасибо"],["adiós","до свидания"],["mañana","завтра"]]},
      {t:"pick", audio:"hola", q:"Послушай: как звучит «hola»?", options:["ола","хола","гола"], a:0, why:"Буква h в испанском не читается."},
      {t:"pick", q:"Какая буква читается как «нь»?", options:["ñ","ll","j"], a:0},
      {t:"tip", title:"Ударение и знаки ¿ ¡", html:`<p>Если слово кончается на <b>гласную, n или s</b>, ударение падает на предпоследний слог: <i>ho-la, ma-ña-na</i>.</p><p>Если на <b>другую согласную</b> — на последний: <i>es-pa-ñol, ha-blar</i>.</p><p>Знак <b>´</b> показывает исключение: <i>ca-fé, tam-bién, a-diós</i>.</p><p class="note">Вопрос и восклицание открываются перевёрнутым знаком: <b>¿</b>Qué tal? <b>¡</b>Hola!</p>`},
      {t:"pick", q:"Поздно вечером, около 22:00, ты здороваешься:", options:["Buenas noches.","Buenos días.","Buenas tardes."], a:0},
      {t:"bank", ru:"Доброе утро!", text:"¡[Buenos] [días]!", words:["Buenas","noches"]},
      {t:"bank", ru:"Очень хорошо, спасибо. А ты?", text:"Muy [bien], [gracias]. ¿Y [tú]?", words:["bueno","yo"]},
      {t:"listen", lines:[["A","¡Hola, Marta! ¿Qué tal?"],["B","Muy bien, gracias. ¿Y tú?"],["A","Más o menos. Estoy un poco cansado."]], q:"Как дела у первого человека?", options:["Так себе","Отлично","Очень плохо"], a:0},
      {t:"dictation", en:"Hasta mañana.", ru:"До завтра."},
      {t:"gap", ru:"До встречи!", text:"¡Hasta [luego]!", hint:true},
      {t:"order", ru:"Привет! Как дела?", en:"¡Hola! ¿Qué tal?"},
      {t:"translate", ru:"Хорошо, спасибо.", a:["Bien, gracias.","Muy bien, gracias.","Gracias, bien."]},
      {t:"speak", en:"¡Hola! ¿Qué tal?", ru:"Привет! Как дела?"},
      {t:"speak", en:"Muy bien, gracias. ¿Y tú?", ru:"Очень хорошо, спасибо. А ты?"},
      {t:"write", task:"Напиши короткий диалог: поздоровайся, спроси, как дела, ответь и попрощайся.", min:6,
       need:[{label:"Приветствие", re:"\\bhola\\b|buenos dias|buenas (tardes|noches)"},{label:"Вопрос «как дела?»", re:"que tal|como estas|como esta"},{label:"Прощание", re:"adios|hasta (luego|manana|pronto)|\\bchao\\b|\\bchau\\b"}],
       sample:"¡Hola! ¿Qué tal? — Muy bien, gracias. ¿Y tú? — Bien. ¡Hasta luego!"},
      {t:"roleplay", title:"Утро в университете. Встречаешь одногруппника Пабло.", lines:[
        {s:"them", en:"¡Hola! ¿Qué tal?", ru:"Привет! Как дела?"},
        {s:"you", ru:"Скажи, что хорошо, и спроси в ответ", say:"Muy bien, gracias. ¿Y tú?", re:"bien|genial|mal|regular|mas o menos"},
        {s:"them", en:"Bien, bien. Un poco cansado.", ru:"Хорошо. Немного устал."},
        {s:"you", ru:"Попрощайся до завтра", say:"¡Hasta mañana!", re:"hasta|adios|chao|chau"}
      ]}
    ]
  },
  {
    id: "s2", icon: "cat", title: "Ser: кто я",
    goals: ["Спрягать глагол ser", "Представиться: имя, страна, учёба", "Говорить о национальности в мужском и женском роде"],
    summary: ["soy · eres · es · somos · sois · son", "Me llamo… — меня зовут…", "Soy de Rusia. Soy rusa (девушка) / ruso (парень).", "Soy estudiante de segundo año.", "Encantado говорит парень, encantada — девушка"],
    phrases: [["¿Cómo te llamas?","Как тебя зовут?"],["Me llamo Anna.","Меня зовут Анна."],["¿De dónde eres?","Откуда ты?"],["Soy de Rusia.","Я из России."],["Soy rusa.","Я русская."],["Soy estudiante.","Я студентка."],["Estudio en la universidad.","Я учусь в университете."],["Encantada.","Приятно познакомиться (говорит девушка)."],["Mucho gusto.","Очень приятно."]],
    steps: [
      {t:"tip", title:"Глагол ser — «быть»", html:`<table class="gtable"><tr><td>yo</td><td><b>soy</b></td><td>я</td></tr><tr><td>tú</td><td><b>eres</b></td><td>ты</td></tr><tr><td>él / ella / usted</td><td><b>es</b></td><td>он / она / Вы</td></tr><tr><td>nosotros / nosotras</td><td><b>somos</b></td><td>мы</td></tr><tr><td>vosotros / vosotras</td><td><b>sois</b></td><td>вы (все)</td></tr><tr><td>ellos / ellas / ustedes</td><td><b>son</b></td><td>они / Вы (все)</td></tr></table><p class="note">Местоимения обычно опускают: <b>Soy Anna</b>, а не <i>Yo soy Anna</i> — окончание глагола уже показывает, кто.</p>`},
      {t:"match", pairs:[["yo","soy"],["tú","eres"],["nosotros","somos"],["ellos","son"]]},
      {t:"pick", q:"Ella ___ de España.", options:["es","eres","son"], a:0},
      {t:"pick", q:"Nosotras ___ estudiantes.", options:["somos","sois","son"], a:0},
      {t:"bank", ru:"Я из России.", text:"[Soy] [de] Rusia.", words:["Es","en"]},
      {t:"tip", title:"Мужской и женский род", html:`<p>Национальности и многие слова меняются по роду:</p><p><i>ruso → <b>rusa</b></i>, <i>español → <b>española</b></i>, <i>alemán → <b>alemana</b></i>.</p><p><i>estudiante</i> — одинаково для обоих.</p><p class="note">Девушка говорит <b>encantada</b>, парень — <b>encantado</b>.</p>`},
      {t:"pick", q:"Девушка из России скажет:", options:["Soy rusa.","Soy ruso.","Es rusa."], a:0},
      {t:"gap", ru:"Она испанка.", text:"Ella es [española].", hint:true},
      {t:"gap", ru:"Вы (все) из Мадрида.", text:"Vosotros [sois] de Madrid."},
      {t:"listen", lines:[["A","¡Hola! Me llamo Lucía. ¿Y tú?"],["B","Me llamo Iván. Encantado."],["A","Encantada. ¿De dónde eres?"],["B","Soy de Rusia, de Kazán. ¿Y tú?"],["A","Soy de Sevilla."]], q:"Откуда Лусия?", options:["Из Севильи","Из Казани","Из Мадрида"], a:0},
      {t:"order", ru:"Откуда ты?", en:"¿De dónde eres?", extra:["es"]},
      {t:"order", ru:"Я студентка второго курса.", en:"Soy estudiante de segundo año."},
      {t:"tip", title:"Usted — вежливое «Вы»", html:`<p>К преподавателю и незнакомым взрослым обращаются на <b>usted</b>. Глагол — как с «он/она»:</p><p><i>¿<b>Usted es</b> profesora?</i> — Вы преподаватель?<br><i>¿Cómo <b>se</b> llama <b>usted</b>?</i> — Как Вас зовут?</p>`},
      {t:"translate", ru:"Меня зовут Анна.", a:["Me llamo Anna.","Soy Anna.","Mi nombre es Anna."]},
      {t:"translate", ru:"Мы из России.", a:["Somos de Rusia.","Nosotros somos de Rusia.","Nosotras somos de Rusia."]},
      {t:"dictation", en:"¿Cómo te llamas?", ru:"Как тебя зовут?"},
      {t:"speak", en:"Me llamo Anna. Soy de Rusia.", ru:"Меня зовут Анна. Я из России."},
      {t:"write", task:"Представься: имя, откуда ты, кто ты (студентка, где учишься).", min:8,
       need:[{label:"Имя (Me llamo… / Soy…)", re:"me llamo|mi nombre es|\\bsoy [a-z]+"},{label:"Откуда (Soy de…)", re:"soy de|\\brusa\\b|\\bruso\\b"},{label:"Учёба", re:"estudiante|estudio|universidad"}],
       sample:"¡Hola! Me llamo Anna. Soy de Rusia, de Moscú. Soy estudiante de segundo año."},
      {t:"roleplay", title:"Первый день в языковом клубе.", lines:[
        {s:"them", en:"¡Hola! Soy Carmen. ¿Cómo te llamas?", ru:"Привет! Я Кармен. Как тебя зовут?"},
        {s:"you", ru:"Назови своё имя", say:"Me llamo Anna. Encantada.", re:"me llamo|\\bsoy [a-z]+|mi nombre"},
        {s:"them", en:"Encantada. ¿De dónde eres?", ru:"Приятно познакомиться. Откуда ты?"},
        {s:"you", ru:"Скажи, что ты из России", say:"Soy de Rusia.", re:"rusia|\\brusa\\b|\\bruso\\b|soy de"},
        {s:"them", en:"¡Qué bien! ¿Eres estudiante?", ru:"Как здорово! Ты студентка?"},
        {s:"you", ru:"Ответь, что да, студентка второго курса", say:"Sí, soy estudiante de segundo año.", re:"\\bsi\\b|estudiante|estudio"},
        {s:"them", en:"¡Yo también! Mucho gusto.", ru:"Я тоже! Очень приятно."},
        {s:"you", ru:"Скажи «очень приятно»", say:"Mucho gusto.", re:"gusto|encantad"}
      ]}
    ]
  },
  {
    id: "s3", icon: "book", title: "Род, артикли, множественное",
    goals: ["Определять род существительных", "Ставить артикли el, la, un, una", "Образовывать множественное число и согласовывать прилагательные"],
    summary: ["el gato, la casa — определённый артикль", "un libro, una mesa — неопределённый", "-o обычно мужской, -a / -dad / -ción — женский", "Множественное: + s / + es: gatos, ciudades", "Прилагательное стоит после слова и согласуется: gatas blancas"],
    phrases: [["el gato","кот"],["la gata","кошка"],["el libro","книга"],["la casa","дом"],["la ciudad","город"],["el amigo / la amiga","друг / подруга"],["un café","(один) кофе"],["una pregunta","вопрос"],["Es un gato blanco.","Это белый кот."],["Las gatas son bonitas.","Кошки красивые."]],
    steps: [
      {t:"tip", title:"Род существительных", html:`<p>В испанском только два рода — мужской и женский.</p><ul><li>на <b>-o</b> — обычно мужской: <i>el libro</i></li><li>на <b>-a</b> — обычно женский: <i>la mesa</i></li><li>на <b>-dad, -ción</b> — женский: <i>la ciudad, la canción</i></li></ul><p>Исключения: <i>el día, el mapa, la mano</i>.</p><p class="note">Учи слово сразу с артиклем — так род запомнится сам.</p>`},
      {t:"pick", q:"___ ciudad", options:["la","el"], a:0, why:"-dad — женский род."},
      {t:"pick", q:"___ día", options:["el","la"], a:0, why:"Исключение: el día."},
      {t:"match", pairs:[["el gato","кот"],["la casa","дом"],["el libro","книга"],["la ciudad","город"]]},
      {t:"tip", title:"Артикли", html:`<table class="gtable"><tr><td></td><td>муж.</td><td>жен.</td></tr><tr><td>этот, конкретный</td><td><b>el</b> / <b>los</b></td><td><b>la</b> / <b>las</b></td></tr><tr><td>какой-то, один</td><td><b>un</b> / <b>unos</b></td><td><b>una</b> / <b>unas</b></td></tr></table><p><i>Es <b>un</b> gato.</i> — Это (какой-то) кот. <i><b>El</b> gato es blanco.</i> — (Этот) кот белый.</p>`},
      {t:"bank", ru:"Это книга, а это стол.", text:"Esto es [un] libro y esto es [una] mesa.", words:["la","el"]},
      {t:"gap", ru:"Кошки красивые.", text:"[Las] gatas son bonitas.", hint:true},
      {t:"tip", title:"Множественное число и прилагательные", html:`<p>На гласную — <b>+s</b>: <i>gato → gatos</i>. На согласную — <b>+es</b>: <i>ciudad → ciudades</i>.</p><p>Прилагательное стоит <b>после</b> слова и повторяет его род и число:</p><p><i>un gato negr<b>o</b> → dos gatos negr<b>os</b></i><br><i>una casa bonit<b>a</b> → unas casas bonit<b>as</b></i></p><p class="note"><i>grande, interesante, verde</i> — одинаковы для обоих родов.</p>`},
      {t:"gap", ru:"одна страна — две страны", text:"un país — dos [países]", hint:true},
      {t:"gap", ru:"белые коты", text:"los gatos [blancos]"},
      {t:"pick", q:"una casa ___", options:["bonita","bonito","bonitas"], a:0},
      {t:"pick", q:"Los libros son ___.", options:["interesantes","interesante","interesantos"], a:0},
      {t:"listen", lines:[["A","¿Tienes gato?"],["B","Sí, tengo dos gatas. Son blancas y muy bonitas."],["A","¿Cómo se llaman?"],["B","Luna y Nube."]], q:"Какого цвета кошки?", options:["Белые","Чёрные","Рыжие"], a:0},
      {t:"order", ru:"Кошка белая.", en:"La gata es blanca.", extra:["blanco"]},
      {t:"translate", ru:"Город очень красивый.", a:["La ciudad es muy bonita.","La ciudad es muy bella.","La ciudad es muy linda."]},
      {t:"translate", ru:"Два кота.", a:["Dos gatos."]},
      {t:"dictation", en:"unas casas bonitas", ru:"красивые дома"},
      {t:"speak", en:"Las gatas son bonitas.", ru:"Кошки красивые."},
      {t:"write", task:"Опиши 3 предмета или животных рядом с тобой. Используй артикли и прилагательные: un gato blanco, la mesa es grande…", min:9,
       need:[{label:"Неопределённый артикль (un / una)", re:"\\b(un|una|unos|unas)\\b"},{label:"Определённый артикль (el / la / los / las)", re:"\\b(el|la|los|las)\\b"},{label:"Прилагательное", re:"blanc|negr|grande|pequen|bonit|nuev|viej|roj|azul|verde|interesante|buen|gord|alt|baj|ros"}],
       sample:"Tengo un gato blanco. La mesa es grande. Las flores son bonitas."},
      {t:"roleplay", title:"Подруга показывает фото своего кота.", lines:[
        {s:"them", en:"Mira, es mi gato.", ru:"Смотри, это мой кот."},
        {s:"you", ru:"Скажи, что он очень красивый", say:"¡Qué bonito! Es muy bonito.", re:"bonit|guap|lindo|precios|mono|bello"},
        {s:"them", en:"Se llama Tom. ¿Tú tienes gato?", ru:"Его зовут Том. А у тебя есть кот?"},
        {s:"you", ru:"Скажи: да, у тебя есть кошка", say:"Sí, tengo una gata.", re:"gat|\\bsi\\b"},
        {s:"them", en:"¡Qué bien! ¿De qué color es?", ru:"Здорово! Какого она цвета?"},
        {s:"you", ru:"Скажи, что она белая", say:"Es blanca.", re:"blanc|negr|gris|naranja|marron|roj"}
      ]}
    ]
  }],
  test: {
    id: "st1", title: "Контрольная: Primeros pasos",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Привет! Как дела?", a:["¡Hola! ¿Qué tal?","Hola, ¿cómo estás?"]},
        {t:"translate", ru:"Я из России, я студентка.", a:["Soy de Rusia, soy estudiante.","Soy de Rusia y soy estudiante."]},
        {t:"translate", ru:"Красивые кошки.", a:["Gatas bonitas.","Las gatas bonitas.","Unas gatas bonitas.","Las gatas son bonitas."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"Vosotros ___ de Madrid.", options:["sois","son","somos"], a:0},
        {t:"bank", ru:"Книги интересные.", text:"[Los] libros son [interesantes].", words:["Las","interesantos"]},
        {t:"gap", ru:"Она русская.", text:"Ella es [rusa]."},
        {t:"gap", ru:"город — города", text:"la ciudad — las [ciudades]"}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Откуда ты?", en:"¿De dónde eres?", extra:["es"]},
        {t:"order", ru:"Меня зовут Анна, и я из России.", en:"Me llamo Anna y soy de Rusia."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Buenas tardes. ¿Cómo se llama usted?"],["B","Me llamo Elena Petrova."],["A","¿Es usted de Rusia?"],["B","Sí, soy rusa. Soy estudiante."],["A","¡Mucho gusto!"]], q:"Кто такая Елена?", options:["Русская студентка","Испанская преподавательница","Русская преподавательница"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Me llamo Anna. Soy de Rusia. Soy estudiante.", ru:"Меня зовут Анна. Я из России. Я студентка."}
      ]},
      {title:"Напиши сама", steps:[
        {t:"write", task:"Напиши о себе и подруге 4–5 предложений: как вас зовут, откуда вы, кто вы.", min:15,
         need:[{label:"Глагол ser (soy / es / somos)", re:"\\b(soy|es|somos|son|eres)\\b"},{label:"Откуда (de…)", re:"\\bde [a-z]+"},{label:"Подруга (mi amiga / ella)", re:"amig|\\bella\\b|se llama"}],
         sample:"Me llamo Anna. Soy de Rusia. Mi amiga se llama Olga. Ella es de Kazán. Somos estudiantes de segundo año."}
      ]}
    ]
  }
},
/* ======================= БЛОК 2 ======================= */
{
  id: "sb2", title: "Mi mundo", note: "Estar, tener, hay, глаголы в настоящем",
  lessons: [
  {
    id: "s4", icon: "home", title: "Estar: как дела и где",
    goals: ["Спрягать estar", "Говорить о самочувствии и настроении", "Говорить, где что находится, и различать ser / estar"],
    summary: ["estoy · estás · está · estamos · estáis · están", "¿Cómo estás? — Estoy cansada / contenta.", "¿Dónde está…? — Está en…", "ser — кто / какой (постоянное), estar — как / где (состояние, место)", "Soy de Madrid, pero ahora estoy en Moscú."],
    phrases: [["¿Cómo estás?","Как ты?"],["Estoy bien.","Я в порядке."],["Estoy cansada.","Я устала."],["Estoy contenta.","Я довольна."],["Estoy nerviosa.","Я нервничаю."],["¿Dónde está la biblioteca?","Где библиотека?"],["Está aquí. / Está allí.","Здесь. / Там."],["Estoy en casa.","Я дома."],["Estamos en clase.","Мы на занятии."]],
    steps: [
      {t:"tip", title:"Глагол estar — «находиться, быть (в состоянии)»", html:`<table class="gtable"><tr><td>yo</td><td><b>estoy</b></td></tr><tr><td>tú</td><td><b>estás</b></td></tr><tr><td>él / ella / usted</td><td><b>está</b></td></tr><tr><td>nosotros</td><td><b>estamos</b></td></tr><tr><td>vosotros</td><td><b>estáis</b></td></tr><tr><td>ellos / ustedes</td><td><b>están</b></td></tr></table><p class="note">Прилагательное после estar тоже согласуется: она — <b>cansada</b>, он — <b>cansado</b>.</p>`},
      {t:"match", pairs:[["yo","estoy"],["tú","estás"],["ella","está"],["nosotros","estamos"]]},
      {t:"pick", q:"¿Cómo ___ (tú)?", options:["estás","eres","está"], a:0},
      {t:"bank", ru:"Я устала, а ты?", text:"[Estoy] cansada, ¿y [tú]?", words:["Soy","te"]},
      {t:"gap", ru:"Мы дома.", text:"[Estamos] en casa.", hint:true},
      {t:"tip", title:"Ser или estar?", html:`<p><b>SER</b> — кто ты, откуда, профессия, характер, внешность.<br><b>ESTAR</b> — где ты и как себя чувствуешь сейчас.</p><p><i>Mi profesora <b>es</b> simpática.</i> — Она милая (характер).<br><i>Hoy <b>está</b> cansada.</i> — Сегодня она устала (сейчас).</p><p><i><b>Soy</b> de Madrid.</i> — Я из Мадрида. <i><b>Estoy</b> en Madrid.</i> — Я в Мадриде.</p><p class="note">Подсказка: на вопросы «как?» и «где?» почти всегда отвечает <b>estar</b>.</p>`},
      {t:"pick", q:"Madrid ___ en España.", options:["está","es"], a:0, why:"Местоположение → estar."},
      {t:"pick", q:"Mi profesora ___ muy simpática.", options:["es","está"], a:0, why:"Характер → ser."},
      {t:"pick", q:"Hoy ___ muy cansada.", options:["estoy","soy"], a:0, why:"Состояние сейчас → estar."},
      {t:"gap", ru:"Я из Москвы, но сейчас я в Мадриде.", text:"[Soy] de Moscú, pero ahora [estoy] en Madrid."},
      {t:"listen", lines:[["A","¡Hola, Sara! ¿Cómo estás?"],["B","Uf, estoy muy cansada. Tengo examen mañana."],["A","¿Dónde estás ahora?"],["B","Estoy en la biblioteca de la universidad."]], q:"Где сейчас Сара?", options:["В библиотеке","Дома","На паре"], a:0},
      {t:"order", ru:"Где библиотека?", en:"¿Dónde está la biblioteca?", extra:["es"]},
      {t:"translate", ru:"Я рада (довольна).", a:["Estoy contenta.","Estoy contento.","Estoy feliz."]},
      {t:"translate", ru:"Она дома.", a:["Ella está en casa.","Está en casa."]},
      {t:"dictation", en:"Estamos en clase.", ru:"Мы на занятии."},
      {t:"speak", en:"Hoy estoy cansada, pero estoy contenta.", ru:"Сегодня я устала, но я довольна."},
      {t:"write", task:"Напиши, как ты сегодня, где ты сейчас и где находятся два места в твоём городе (университет, твой дом…).", min:12,
       need:[{label:"Самочувствие (estoy + …)", re:"estoy (muy |un poco |bastante )?(bien|mal|cansad|content|nervios|feliz|trist|regular|enferm|ocupad|aburrid|tranquil)"},{label:"Где ты (estoy en…)", re:"estoy en|estoy aqui"},{label:"Где что-то (está en / está cerca…)", re:"esta (en|cerca|lejos|al lado|enfrente)|estan (en|cerca|lejos)"}],
       sample:"Hoy estoy un poco cansada. Ahora estoy en casa. Mi universidad está en el centro. La biblioteca está cerca de mi casa."},
      {t:"roleplay", title:"Звонок подруги днём.", lines:[
        {s:"them", en:"¡Hola! ¿Cómo estás?", ru:"Привет! Как ты?"},
        {s:"you", ru:"Скажи, что немного устала", say:"Estoy un poco cansada.", re:"cansad|bien|mal|regular|estoy"},
        {s:"them", en:"Vaya. ¿Dónde estás ahora?", ru:"Ох. А где ты сейчас?"},
        {s:"you", ru:"Скажи, что ты в университете", say:"Estoy en la universidad.", re:"universidad|clase|facultad|uni\\b"},
        {s:"them", en:"¿Y dónde está la cafetería?", ru:"А где там кафетерий?"},
        {s:"you", ru:"Скажи: там, рядом с библиотекой (al lado de la biblioteca)", say:"Está allí, al lado de la biblioteca.", re:"esta|alli|alla|al lado|biblioteca|cerca"}
      ]}
    ]
  },
  {
    id: "s5", icon: "star", title: "Tener, hay и числа",
    goals: ["Спрягать tener", "Говорить «есть / имеется» через hay", "Считать до 100 и называть возраст"],
    summary: ["tengo · tienes · tiene · tenemos · tenéis · tienen", "¿Cuántos años tienes? — Tengo 19 años.", "Hay — есть, имеется: Hay un café aquí.", "Hay un café / El café está…", "dieciséis, veinte, veintiuno, treinta y uno, cien"],
    phrases: [["¿Cuántos años tienes?","Сколько тебе лет?"],["Tengo diecinueve años.","Мне девятнадцать лет."],["Tengo un hermano.","У меня есть брат."],["Tengo clase.","У меня пара."],["Hay un café cerca.","Рядом есть кафе."],["¿Hay wifi aquí?","Здесь есть Wi‑Fi?"],["No hay problema.","Нет проблем."],["Tengo hambre.","Я голодна."],["Tengo sueño.","Я хочу спать."]],
    steps: [
      {t:"tip", title:"Глагол tener — «иметь»", html:`<table class="gtable"><tr><td>yo</td><td><b>tengo</b></td></tr><tr><td>tú</td><td><b>tienes</b></td></tr><tr><td>él / ella / usted</td><td><b>tiene</b></td></tr><tr><td>nosotros</td><td><b>tenemos</b></td></tr><tr><td>vosotros</td><td><b>tenéis</b></td></tr><tr><td>ellos / ustedes</td><td><b>tienen</b></td></tr></table><p>Возраст говорят через tener: <b>Tengo 19 años</b> — буквально «имею 19 лет».</p><p class="note">Ещё: <i>tener hambre</i> — хотеть есть, <i>tener sueño</i> — хотеть спать, <i>tener frío</i> — мёрзнуть.</p>`},
      {t:"match", pairs:[["yo","tengo"],["tú","tienes"],["ella","tiene"],["nosotros","tenemos"]]},
      {t:"pick", q:"¿Cuántos años ___ tu hermana?", options:["tiene","tienes","es"], a:0},
      {t:"pick", q:"Мне 19 лет:", options:["Tengo 19 años.","Soy 19 años.","Estoy 19 años."], a:0},
      {t:"tip", title:"Числа", html:`<p>1–15: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince.</p><p>16–29 пишутся слитно: <b>dieciséis, veinte, veintidós</b>.</p><p>С 31 — через <b>y</b>: <i>treinta y uno, cuarenta y cinco</i>.</p><p>Десятки: treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, <b>cien</b>.</p>`},
      {t:"match", pairs:[["quince","15"],["veinte","20"],["treinta y dos","32"],["cincuenta","50"]]},
      {t:"pick", audio:"cuarenta y siete", q:"Послушай и выбери число", options:["47","74","57"], a:0},
      {t:"dictation", en:"veintiuno", ru:"21", a:["veintiuno","21"]},
      {t:"tip", title:"Hay — «есть, имеется»", html:`<p><b>Hay</b> — одна форма для всего: <i>Hay un gato. Hay dos gatos.</i></p><p>Отрицание: <i>No hay problema.</i> Вопрос: <i>¿Hay wifi?</i></p><p class="note">Если предмет уже известен (с el / la) — используй estar: <i>Hay una biblioteca.</i> → <i>La biblioteca <b>está</b> aquí.</i></p>`},
      {t:"pick", q:"___ un café cerca de la universidad.", options:["Hay","Está","Es"], a:0},
      {t:"pick", q:"El café ___ cerca de la universidad.", options:["está","hay"], a:0},
      {t:"bank", ru:"Здесь есть Wi‑Fi?", text:"¿[Hay] wifi [aquí]?", words:["Es","tengo"]},
      {t:"gap", ru:"У меня есть брат и сестра.", text:"[Tengo] un hermano y una hermana."},
      {t:"listen", lines:[["A","Oye, ¿cuántos años tienes?"],["B","Tengo veinte. ¿Y tú?"],["A","Diecinueve. ¿Tienes hermanos?"],["B","Sí, tengo una hermana. Tiene quince años."]], q:"Сколько лет сестре?", options:["15","20","19"], a:0},
      {t:"order", ru:"Сколько тебе лет?", en:"¿Cuántos años tienes?", extra:["eres"]},
      {t:"translate", ru:"Я голодна.", a:["Tengo hambre."]},
      {t:"translate", ru:"Рядом нет кафе.", a:["No hay café cerca.","No hay un café cerca.","Cerca no hay café."]},
      {t:"speak", en:"Tengo diecinueve años y tengo una hermana.", ru:"Мне 19 лет, у меня есть сестра."},
      {t:"write", task:"Расскажи о себе: сколько тебе лет, есть ли братья, сёстры или питомцы, что есть в твоём районе (hay…).", min:12,
       need:[{label:"Возраст (tengo … años)", re:"tengo [a-z0-9 ]+ anos"},{label:"Семья или питомец (tengo…)", re:"tengo (un|una|dos|tres|\\d)|herman|gat|perr"},{label:"Что есть рядом (hay…)", re:"\\bhay\\b"}],
       sample:"Tengo diecinueve años. Tengo un hermano y una gata. En mi barrio hay un parque y hay muchas cafeterías."},
      {t:"roleplay", title:"Знакомство на вечеринке.", lines:[
        {s:"them", en:"¿Cuántos años tienes?", ru:"Сколько тебе лет?"},
        {s:"you", ru:"Назови свой возраст", say:"Tengo diecinueve años.", re:"tengo|anos|\\d+|diecinueve|veinte|dieciocho"},
        {s:"them", en:"¿Tienes hermanos?", ru:"У тебя есть братья или сёстры?"},
        {s:"you", ru:"Ответь (да / нет, кто)", say:"Sí, tengo un hermano.", re:"\\bsi\\b|\\bno\\b|tengo|herman"},
        {s:"them", en:"¿Hay una cafetería en tu universidad?", ru:"В твоём университете есть кафе?"},
        {s:"you", ru:"Скажи, что да, есть большое", say:"Sí, hay una cafetería grande.", re:"\\bhay\\b|\\bsi\\b"}
      ]}
    ]
  },
  {
    id: "s6", icon: "pencil", title: "Настоящее время: -ar, -er, -ir",
    goals: ["Спрягать правильные глаголы на -ar, -er, -ir", "Рассказывать об учёбе и занятиях", "Отрицать и задавать вопросы"],
    summary: ["hablar: hablo, hablas, habla, hablamos, habláis, hablan", "comer: como, comes, come, comemos, coméis, comen", "vivir: vivo, vives, vive, vivimos, vivís, viven", "Отрицание: No hablo alemán.", "¿Qué estudias? ¿Dónde vives?"],
    phrases: [["¿Qué estudias?","Что ты изучаешь?"],["Estudio filología.","Я изучаю филологию."],["Hablo ruso e inglés.","Я говорю по-русски и по-английски."],["Aprendo español.","Я учу испанский."],["¿Dónde vives?","Где ты живёшь?"],["Vivo en una residencia.","Я живу в общежитии."],["Trabajo los fines de semana.","Я работаю по выходным."],["Leo mucho.","Я много читаю."],["Escribo un ensayo.","Я пишу эссе."]],
    steps: [
      {t:"tip", title:"Глаголы на -ar", html:`<p>Отбрасываем -ar и добавляем окончание:</p><table class="gtable"><tr><td>yo</td><td>habl<b>o</b></td></tr><tr><td>tú</td><td>habl<b>as</b></td></tr><tr><td>él / ella</td><td>habl<b>a</b></td></tr><tr><td>nosotros</td><td>habl<b>amos</b></td></tr><tr><td>vosotros</td><td>habl<b>áis</b></td></tr><tr><td>ellos</td><td>habl<b>an</b></td></tr></table><p>Так же: <i>estudiar, trabajar, escuchar, bailar, cocinar</i>.</p>`},
      {t:"match", pairs:[["yo","hablo"],["tú","hablas"],["nosotros","hablamos"],["ellos","hablan"]]},
      {t:"pick", q:"Ella ___ en una tienda.", options:["trabaja","trabajo","trabajas"], a:0},
      {t:"gap", ru:"Мы изучаем испанский.", text:"Nosotros [estudiamos] español.", hint:true},
      {t:"tip", title:"Глаголы на -er и -ir", html:`<table class="gtable"><tr><td></td><td>comer</td><td>vivir</td></tr><tr><td>yo</td><td>com<b>o</b></td><td>viv<b>o</b></td></tr><tr><td>tú</td><td>com<b>es</b></td><td>viv<b>es</b></td></tr><tr><td>él / ella</td><td>com<b>e</b></td><td>viv<b>e</b></td></tr><tr><td>nosotros</td><td>com<b>emos</b></td><td>viv<b>imos</b></td></tr><tr><td>vosotros</td><td>com<b>éis</b></td><td>viv<b>ís</b></td></tr><tr><td>ellos</td><td>com<b>en</b></td><td>viv<b>en</b></td></tr></table><p class="note">-er и -ir отличаются только в «мы» и «вы»: <i>comemos — vivimos</i>.</p>`},
      {t:"pick", q:"¿Dónde ___ vosotros?", options:["vivís","vivéis","viven"], a:0},
      {t:"pick", q:"Yo ___ mucho. (leer)", options:["leo","lee","leemos"], a:0},
      {t:"bank", ru:"Мы живём в Москве и едим в столовой.", text:"[Vivimos] en Moscú y [comemos] en el comedor.", words:["Vivemos","comen"]},
      {t:"gap", ru:"Они пишут эссе.", text:"Ellos [escriben] un ensayo."},
      {t:"tip", title:"Отрицание и вопросы", html:`<p><b>No</b> ставится прямо перед глаголом: <i><b>No</b> hablo alemán.</i></p><p>Вопрос — та же фраза с интонацией: <i>¿Hablas inglés?</i></p><p>Вопросительные слова (всегда с ударением): <b>qué</b> — что, <b>dónde</b> — где, <b>cuándo</b> — когда, <b>cómo</b> — как, <b>por qué</b> — почему.</p>`},
      {t:"pick", q:"Я не говорю по-немецки.", options:["No hablo alemán.","Hablo no alemán.","No hablas alemán."], a:0},
      {t:"listen", lines:[["A","¿Qué estudias, Daniela?"],["B","Estudio periodismo. ¿Y tú?"],["A","Yo estudio medicina. ¿Trabajas también?"],["B","Sí, trabajo en una cafetería los sábados."]], q:"Где работает Даниэла?", options:["В кафе по субботам","В газете","В больнице"], a:0},
      {t:"order", ru:"Что ты изучаешь?", en:"¿Qué estudias?", extra:["estudio"]},
      {t:"order", ru:"Я живу в общежитии.", en:"Vivo en una residencia."},
      {t:"translate", ru:"Я учу испанский.", a:["Aprendo español.","Estudio español.","Yo aprendo español.","Yo estudio español."]},
      {t:"translate", ru:"Где ты живёшь?", a:["¿Dónde vives?","¿Dónde vives tú?"]},
      {t:"dictation", en:"Hablo ruso e inglés.", ru:"Я говорю по-русски и по-английски."},
      {t:"speak", en:"Estudio filología y vivo en Moscú.", ru:"Я изучаю филологию и живу в Москве."},
      {t:"write", task:"Расскажи о своей учёбе и жизни: что изучаешь, где живёшь, что делаешь в свободное время и чего не делаешь (4–5 предложений).", min:15,
       need:[{label:"Глагол на -ar (estudio, hablo, trabajo…)", re:"\\b(estudio|hablo|trabajo|escucho|bailo|camino|cocino|practico|miro|tomo|canto|paseo|nado)\\b"},{label:"Глагол на -er / -ir (vivo, como, leo, escribo…)", re:"\\b(vivo|como|leo|escribo|aprendo|bebo|corro|comprendo|asisto|veo)\\b"},{label:"Отрицание (no + глагол)", re:"\\bno [a-z]+(o|as|a|amos|an|es|e|emos|en)\\b"}],
       sample:"Estudio filología en Moscú. Vivo en una residencia con dos chicas. Leo mucho y escribo ensayos. No trabajo, pero aprendo español todos los días."},
      {t:"roleplay", title:"Знакомство с иностранным студентом по обмену.", lines:[
        {s:"them", en:"¡Hola! ¿Qué estudias?", ru:"Привет! Что ты изучаешь?"},
        {s:"you", ru:"Скажи, что изучаешь", say:"Estudio filología.", re:"estudi"},
        {s:"them", en:"¡Qué interesante! ¿Dónde vives?", ru:"Как интересно! Где ты живёшь?"},
        {s:"you", ru:"Скажи, где живёшь", say:"Vivo en Moscú, en una residencia.", re:"\\bvivo\\b"},
        {s:"them", en:"¿Hablas inglés?", ru:"Ты говоришь по-английски?"},
        {s:"you", ru:"Ответь: да, и ещё по-русски", say:"Sí, hablo inglés y ruso.", re:"hablo|\\bsi\\b|\\bno\\b"},
        {s:"them", en:"¡Genial! Yo hablo un poco de ruso.", ru:"Супер! А я немного говорю по-русски."},
        {s:"you", ru:"Скажи «как здорово!»", say:"¡Qué guay!", re:"que (guay|bien|bueno|genial|interesante|chulo)|genial|guay|increible|wow"}
      ]}
    ]
  }],
  test: {
    id: "st2", title: "Контрольная: Mi mundo",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Я устала.", a:["Estoy cansada.","Estoy cansado."]},
        {t:"translate", ru:"Мне двадцать лет.", a:["Tengo veinte años.","Tengo 20 años."]},
        {t:"translate", ru:"Мы живём в Москве.", a:["Vivimos en Moscú.","Nosotros vivimos en Moscú.","Nosotras vivimos en Moscú."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"Madrid ___ la capital de España.", options:["es","está"], a:0, why:"Что это такое → ser."},
        {t:"pick", q:"¿Dónde ___ mis libros?", options:["están","hay","son"], a:0},
        {t:"bank", ru:"В классе двадцать студентов, а преподавательница там.", text:"En la clase [hay] veinte estudiantes y la profesora [está] allí.", words:["es","son"]},
        {t:"gap", ru:"Они не едят мясо.", text:"Ellos no [comen] carne."},
        {t:"gap", ru:"Сколько тебе лет?", text:"¿Cuántos años [tienes]?"}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Где библиотека?", en:"¿Dónde está la biblioteca?", extra:["es"]},
        {t:"order", ru:"Я не говорю по-немецки, но говорю по-английски.", en:"No hablo alemán, pero hablo inglés."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Hola, me llamo Pedro. Tengo veintiún años."],["B","¿Qué estudias, Pedro?"],["A","Estudio arquitectura. Vivo con dos amigos cerca de la universidad."],["B","¿Trabajas?"],["A","No, no trabajo. No tengo tiempo."]], q:"Что верно про Педро?", options:["Ему 21, он учится на архитектора и не работает","Ему 20, он работает в кафе","Он живёт один и изучает медицину"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Estoy bien. Vivo en Moscú y estudio filología.", ru:"У меня всё хорошо. Я живу в Москве и изучаю филологию."},
        {t:"roleplay", title:"Мини-интервью.", lines:[
          {s:"them", en:"¿Cómo estás hoy?", ru:"Как ты сегодня?"},
          {s:"you", ru:"Ответь, как ты", say:"Estoy bien, gracias.", re:"estoy|bien|mal|regular|cansad"},
          {s:"them", en:"¿Qué estudias?", ru:"Что изучаешь?"},
          {s:"you", ru:"Скажи, что изучаешь", say:"Estudio filología.", re:"estudi"},
          {s:"them", en:"¿Cuántos años tienes?", ru:"Сколько тебе лет?"},
          {s:"you", ru:"Назови возраст", say:"Tengo diecinueve años.", re:"tengo|anos|\\d"}
        ]}
      ]},
      {title:"Напиши сама", steps:[
        {t:"write", task:"Напиши письмо подруге по переписке из Испании: как ты, сколько тебе лет, что изучаешь, где живёшь, что есть в твоём городе (5–6 предложений).", min:25,
         need:[{label:"Самочувствие (estoy…)", re:"\\bestoy\\b"},{label:"Возраст (tengo … años)", re:"tengo [a-z0-9 ]+ anos"},{label:"Учёба и жизнь (estudio, vivo…)", re:"\\b(estudio|vivo|trabajo|hablo|leo|aprendo)\\b"},{label:"Что есть в городе (hay…)", re:"\\bhay\\b"}],
         sample:"¡Hola, Lucía! ¿Qué tal? Yo estoy muy bien. Me llamo Anna y tengo diecinueve años. Estudio filología en Moscú y vivo en una residencia. En mi ciudad hay muchos parques y museos. ¡Escríbeme pronto!"}
      ]}
    ]
  }
},
/* ======================= БЛОК 3 ======================= */
{
  id: "sb3", title: "Día a día", note: "Неправильные глаголы, распорядок, gustar",
  lessons: [
  {
    id: "s7", icon: "paw", title: "Неправильные глаголы",
    goals: ["Спрягать ir, hacer, querer, poder", "Понять смену корня e→ie и o→ue", "Говорить, куда идёшь и что хочешь / можешь"],
    summary: ["ir: voy, vas, va, vamos, vais, van", "hacer: hago, haces, hace…", "querer (e→ie): quiero, quieres, queremos", "poder (o→ue): puedo, puedes, podemos", "¿Quieres ir al cine? — ¡Sí, vamos!"],
    phrases: [["¿Adónde vas?","Куда ты идёшь?"],["Voy a la universidad.","Я иду в университет."],["Vamos al cine.","Пойдём в кино."],["¿Qué haces?","Что делаешь?"],["Hago los deberes.","Делаю домашку."],["Quiero un café.","Я хочу кофе."],["¿Puedes ayudarme?","Можешь мне помочь?"],["No puedo, lo siento.","Не могу, извини."],["¿Quieres venir?","Хочешь прийти?"]],
    steps: [
      {t:"tip", title:"Глагол ir — «идти, ехать»", html:`<table class="gtable"><tr><td>yo</td><td><b>voy</b></td></tr><tr><td>tú</td><td><b>vas</b></td></tr><tr><td>él / ella</td><td><b>va</b></td></tr><tr><td>nosotros</td><td><b>vamos</b></td></tr><tr><td>vosotros</td><td><b>vais</b></td></tr><tr><td>ellos</td><td><b>van</b></td></tr></table><p>Куда — через <b>a</b>: <i>Voy a la universidad.</i></p><p class="note"><b>a + el = al</b>: <i>Voy <b>al</b> cine</i> (не «a el»).</p>`},
      {t:"match", pairs:[["yo","voy"],["tú","vas"],["nosotros","vamos"],["ellos","van"]]},
      {t:"pick", q:"Mañana (nosotros) ___ al museo.", options:["vamos","van","vais"], a:0},
      {t:"gap", ru:"Я иду в кино.", text:"Voy [al] cine.", hint:true},
      {t:"tip", title:"Hacer — «делать»", html:`<p>Неправильная только форма «я»: <b>hago</b>. Дальше как обычно: <i>haces, hace, hacemos, hacéis, hacen</i>.</p><p>Так же: <i>salir → <b>salgo</b>, poner → <b>pongo</b></i>.</p><p><i>¿Qué <b>haces</b>?</i> — Что делаешь? <i><b>Hago</b> deporte.</i> — Занимаюсь спортом.</p>`},
      {t:"pick", q:"¿Qué ___ los fines de semana? — Hago deporte.", options:["haces","hago","hace"], a:0},
      {t:"tip", title:"Querer и poder: меняется корень", html:`<table class="gtable"><tr><td></td><td>querer (e→ie)</td><td>poder (o→ue)</td></tr><tr><td>yo</td><td>qu<b>ie</b>ro</td><td>p<b>ue</b>do</td></tr><tr><td>tú</td><td>qu<b>ie</b>res</td><td>p<b>ue</b>des</td></tr><tr><td>él / ella</td><td>qu<b>ie</b>re</td><td>p<b>ue</b>de</td></tr><tr><td>nosotros</td><td>queremos</td><td>podemos</td></tr><tr><td>vosotros</td><td>queréis</td><td>podéis</td></tr><tr><td>ellos</td><td>qu<b>ie</b>ren</td><td>p<b>ue</b>den</td></tr></table><p class="note">В «мы» и «вы» корень не меняется. После querer и poder — инфинитив: <i>Quiero dormir. Puedo ir.</i></p>`},
      {t:"pick", q:"Nosotros ___ ir a la fiesta.", options:["queremos","quieremos","queramos"], a:0},
      {t:"pick", q:"¿___ ayudarme? (tú)", options:["Puedes","Podes","Pueden"], a:0},
      {t:"bank", ru:"Я хочу пойти, но не могу.", text:"[Quiero] ir, pero no [puedo].", words:["Quero","podo"]},
      {t:"gap", ru:"Они хотят кофе.", text:"Ellos [quieren] un café."},
      {t:"listen", lines:[["A","Oye, ¿qué haces esta tarde?"],["B","Nada especial. ¿Por qué?"],["A","Vamos al cine. ¿Quieres venir?"],["B","Quiero, pero no puedo. Tengo un examen mañana."]], q:"Почему подруга не идёт в кино?", options:["У неё завтра экзамен","Она не любит кино","Она работает"], a:0},
      {t:"order", ru:"Куда ты идёшь?", en:"¿Adónde vas?", extra:["va"]},
      {t:"translate", ru:"Можешь мне помочь?", a:["¿Puedes ayudarme?","¿Me puedes ayudar?","¿Me ayudas?"]},
      {t:"translate", ru:"Мы идём в университет.", a:["Vamos a la universidad.","Nosotros vamos a la universidad.","Nosotras vamos a la universidad."]},
      {t:"dictation", en:"No puedo, lo siento.", ru:"Не могу, извини."},
      {t:"speak", en:"¿Quieres ir al cine conmigo?", ru:"Хочешь пойти со мной в кино?"},
      {t:"write", task:"Напиши подруге сообщение: предложи куда-то сходить (ir), спроси, хочет ли она (querer), и скажи, когда ты можешь (poder).", min:12,
       need:[{label:"Глагол ir (vamos, voy…)", re:"\\b(voy|vas|va|vamos|vais|van)\\b"},{label:"Глагол querer (quieres, quiero…)", re:"\\bquier|queremos"},{label:"Глагол poder (puedo, puedes…)", re:"\\bpued|podemos"}],
       sample:"¡Hola, Marta! ¿Quieres ir al cine el sábado? Yo puedo por la tarde. Vamos a las seis, ¿vale?"},
      {t:"roleplay", title:"Подруга зовёт гулять.", lines:[
        {s:"them", en:"¡Hola! ¿Qué haces?", ru:"Привет! Что делаешь?"},
        {s:"you", ru:"Скажи, что делаешь домашку", say:"Hago los deberes.", re:"hago|estudio|deberes|tarea"},
        {s:"them", en:"Vamos al parque. ¿Quieres venir?", ru:"Пойдём в парк. Хочешь?"},
        {s:"you", ru:"Скажи, что хочешь, но сейчас не можешь", say:"Quiero, pero ahora no puedo.", re:"no puedo|quiero"},
        {s:"them", en:"¿Y mañana? ¿Puedes?", ru:"А завтра? Можешь?"},
        {s:"you", ru:"Скажи, что завтра можешь", say:"Sí, mañana puedo.", re:"puedo|\\bsi\\b|vale|claro"},
        {s:"them", en:"¡Genial! Hasta mañana.", ru:"Супер! До завтра."}
      ]}
    ]
  },
  {
    id: "s8", icon: "clock", title: "Мой день и время",
    goals: ["Спрягать возвратные глаголы", "Называть время", "Рассказывать о своём дне по порядку"],
    summary: ["levantarse: me levanto, te levantas, se levanta…", "¿Qué hora es? — Es la una. Son las tres y media.", "¿A qué hora…? — A las ocho.", "primero · después · luego · por la tarde · por la noche", "siempre · a veces · nunca"],
    phrases: [["¿Qué hora es?","Который час?"],["Son las ocho.","Восемь часов."],["Es la una y media.","Половина второго."],["Me levanto a las siete.","Я встаю в семь."],["Me ducho.","Я принимаю душ."],["Desayuno café con tostadas.","Завтракаю кофе с тостами."],["Me acuesto tarde.","Я ложусь поздно."],["Por la mañana / por la tarde / por la noche","Утром / днём / вечером"],["Siempre / a veces / nunca","Всегда / иногда / никогда"]],
    steps: [
      {t:"tip", title:"Возвратные глаголы", html:`<p>Глаголы с <b>-se</b> (как русское «-ся»): <i>levantarse</i> — вставать, <i>ducharse</i> — принимать душ, <i>acostarse</i> — ложиться.</p><table class="gtable"><tr><td>yo</td><td><b>me</b> levanto</td></tr><tr><td>tú</td><td><b>te</b> levantas</td></tr><tr><td>él / ella</td><td><b>se</b> levanta</td></tr><tr><td>nosotros</td><td><b>nos</b> levantamos</td></tr><tr><td>vosotros</td><td><b>os</b> levantáis</td></tr><tr><td>ellos</td><td><b>se</b> levantan</td></tr></table><p class="note">Частица стоит перед глаголом. С инфинитивом — в конце: <i>Quiero levantar<b>me</b> tarde.</i></p>`},
      {t:"match", pairs:[["yo","me levanto"],["tú","te levantas"],["ella","se levanta"],["nosotros","nos levantamos"]]},
      {t:"pick", q:"¿A qué hora ___ acuestas?", options:["te","me","se"], a:0},
      {t:"gap", ru:"Я принимаю душ утром.", text:"[Me] ducho por la mañana.", hint:true},
      {t:"gap", ru:"Мы встаём рано.", text:"Nos [levantamos] temprano."},
      {t:"tip", title:"Который час?", html:`<p><b>¿Qué hora es?</b></p><p>1:00 — <b>Es la una.</b> 2:00 — <b>Son las dos.</b></p><p>2:15 — <i>Son las dos <b>y cuarto</b>.</i><br>2:30 — <i>Son las dos <b>y media</b>.</i><br>2:45 — <i>Son las tres <b>menos cuarto</b>.</i></p><p>Во сколько? — <b>a las</b> + час: <i>Tengo clase a las diez.</i></p><p class="note"><i>Es la</i> — только для часа (una). Для остальных — <i>son las</i>.</p>`},
      {t:"pick", q:"1:30", options:["Es la una y media.","Son las una y media.","Es la uno y media."], a:0},
      {t:"pick", audio:"Son las cinco menos cuarto.", q:"Послушай: который час?", options:["4:45","5:15","5:45"], a:0},
      {t:"bank", ru:"У меня пара в десять.", text:"Tengo clase [a] [las] diez.", words:["en","los"]},
      {t:"tip", title:"Порядок и частота", html:`<p>Порядок: <b>primero</b> — сначала, <b>después / luego</b> — потом, <b>más tarde</b> — позже.</p><p>Часть дня: <b>por la mañana</b>, <b>por la tarde</b>, <b>por la noche</b>.</p><p>Как часто: <b>siempre</b> — всегда, <b>normalmente</b> — обычно, <b>a veces</b> — иногда, <b>nunca</b> — никогда.</p>`},
      {t:"listen", lines:[["A","¿A qué hora te levantas normalmente?"],["B","Entre semana, a las siete. Me ducho, desayuno y voy a la universidad."],["A","¿Y los fines de semana?"],["B","¡Me levanto a las once!"]], q:"Во сколько она встаёт в выходные?", options:["В 11","В 7","В 10"], a:0},
      {t:"order", ru:"Во сколько ты встаёшь?", en:"¿A qué hora te levantas?", extra:["se"]},
      {t:"translate", ru:"Сейчас три часа.", a:["Son las tres.","Ahora son las tres."]},
      {t:"translate", ru:"Я ложусь спать поздно.", a:["Me acuesto tarde.","Yo me acuesto tarde."]},
      {t:"dictation", en:"Me levanto a las siete.", ru:"Я встаю в семь."},
      {t:"speak", en:"Primero me ducho y después desayuno.", ru:"Сначала я принимаю душ, потом завтракаю."},
      {t:"write", task:"Опиши свой обычный учебный день: во сколько встаёшь, что делаешь по порядку, когда ложишься (5–6 предложений).", min:20,
       need:[{label:"Возвратный глагол (me levanto, me ducho…)", re:"\\bme (levanto|ducho|acuesto|visto|despierto|maquillo|lavo|peino|quedo)\\b"},{label:"Время (a las…)", re:"a las? (una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|\\d+)"},{label:"Порядок (primero, después, luego…)", re:"primero|despues|luego|mas tarde|por la (manana|tarde|noche)"}],
       sample:"Me levanto a las siete. Primero me ducho y después desayuno. A las nueve voy a la universidad. Por la tarde estudio en la biblioteca. Me acuesto a las doce."},
      {t:"roleplay", title:"Соседка по комнате в общежитии.", lines:[
        {s:"them", en:"¿A qué hora te levantas mañana?", ru:"Во сколько ты завтра встаёшь?"},
        {s:"you", ru:"Скажи, что в семь", say:"Me levanto a las siete.", re:"siete|\\b7\\b|me levanto"},
        {s:"them", en:"¿Tan temprano? ¿Por qué?", ru:"Так рано? Почему?"},
        {s:"you", ru:"Объясни: у тебя пара в 8:30", say:"Porque tengo clase a las ocho y media.", re:"clase|porque|ocho|examen"},
        {s:"them", en:"Vale. ¿Y a qué hora vuelves a casa?", ru:"Ясно. А во сколько вернёшься?"},
        {s:"you", ru:"Скажи, что в пять (vuelvo a las cinco)", say:"Vuelvo a las cinco.", re:"cinco|\\b5\\b|vuelvo|a las"}
      ]}
    ]
  },
  {
    id: "s9", icon: "heart", title: "Gustar: что мне нравится",
    goals: ["Говорить, что нравится и не нравится", "Различать gusta и gustan", "Соглашаться и спорить: a mí también / tampoco"],
    summary: ["Me gusta + одно / действие: Me gusta el café. Me gusta bailar.", "Me gustan + много: Me gustan los gatos.", "me · te · le · nos · os · les + gusta", "A mí también / A mí tampoco / A mí sí / A mí no", "Me encanta — обожаю"],
    phrases: [["Me gusta leer.","Я люблю читать."],["Me gustan los gatos.","Мне нравятся кошки."],["No me gusta el fútbol.","Я не люблю футбол."],["¿Te gusta bailar?","Ты любишь танцевать?"],["Me encanta la música.","Обожаю музыку."],["A mí también.","Мне тоже."],["A mí tampoco.","Мне тоже нет."],["A mí sí. / A mí no.","А мне да. / А мне нет."],["¿Qué te gusta hacer?","Что ты любишь делать?"]],
    steps: [
      {t:"tip", title:"Gustar работает как «мне нравится»", html:`<p>Как в русском: не «я люблю», а «<b>мне</b> нравится».</p><p><i><b>Me gusta</b> el chocolate.</i> — Мне нравится шоколад (одно).<br><i><b>Me gustan</b> los gatos.</i> — Мне нравятся кошки (много).<br><i><b>Me gusta</b> bailar.</i> — Мне нравится танцевать (действие — всегда gusta).</p><table class="gtable"><tr><td>мне</td><td><b>me</b> gusta</td></tr><tr><td>тебе</td><td><b>te</b> gusta</td></tr><tr><td>ему / ей</td><td><b>le</b> gusta</td></tr><tr><td>нам</td><td><b>nos</b> gusta</td></tr><tr><td>вам</td><td><b>os</b> gusta</td></tr><tr><td>им</td><td><b>les</b> gusta</td></tr></table>`},
      {t:"pick", q:"Me ___ los gatos.", options:["gustan","gusta"], a:0},
      {t:"pick", q:"Me ___ bailar.", options:["gusta","gustan"], a:0},
      {t:"pick", q:"¿A ti te ___ el café?", options:["gusta","gustas","gustan"], a:0},
      {t:"match", pairs:[["me encanta","обожаю"],["no me gusta","не нравится"],["a mí también","мне тоже"],["a mí tampoco","мне тоже нет"]]},
      {t:"bank", ru:"Нам нравится музыка.", text:"[Nos] [gusta] la música.", words:["Nosotros","gustamos"]},
      {t:"gap", ru:"Ей нравятся фильмы.", text:"[Le] gustan las películas.", hint:true},
      {t:"tip", title:"Соглашаемся и спорим", html:`<p>— Me gusta el café. — <b>A mí también.</b> (мне тоже)<br>— Me gusta el café. — <b>A mí no.</b> (а мне нет)</p><p>— No me gusta madrugar. — <b>A mí tampoco.</b> (мне тоже нет)<br>— No me gusta madrugar. — <b>A mí sí.</b> (а мне да)</p>`},
      {t:"pick", q:"— Me gusta el chocolate. — Мне тоже!", options:["A mí también.","A mí tampoco.","Yo gusto también."], a:0},
      {t:"pick", q:"— No me gusta madrugar. — Мне тоже нет.", options:["A mí tampoco.","A mí también.","A mí sí."], a:0},
      {t:"listen", lines:[["A","¿Qué te gusta hacer los fines de semana?"],["B","Me encanta leer y me gusta mucho ir al cine. ¿Y a ti?"],["A","A mí también me gusta el cine. Pero no me gusta leer."],["B","¿No? ¡Qué pena!"]], q:"Что НЕ нравится первому человеку?", options:["Читать","Ходить в кино","Гулять"], a:0},
      {t:"order", ru:"Что ты любишь делать?", en:"¿Qué te gusta hacer?", extra:["gustas"]},
      {t:"translate", ru:"Я обожаю кошек.", a:["Me encantan los gatos.","Me encantan las gatas."]},
      {t:"translate", ru:"Мне не нравится футбол.", a:["No me gusta el fútbol."]},
      {t:"dictation", en:"A mí también.", ru:"Мне тоже."},
      {t:"speak", en:"Me encanta la música y me gustan los gatos.", ru:"Обожаю музыку, и мне нравятся кошки."},
      {t:"write", task:"Напиши, что ты любишь и не любишь делать: минимум два «нравится», одно «не нравится» и одно «обожаю».", min:15,
       need:[{label:"Me gusta + …", re:"me gusta\\b"},{label:"Me gustan / me encantan + много", re:"me gustan|me encantan"},{label:"Не нравится (no me gusta)", re:"no me gusta"}],
       sample:"Me gusta leer y me gusta mucho bailar. Me encantan los gatos y las películas francesas. No me gusta madrugar."},
      {t:"roleplay", title:"Знакомство в кафе.", lines:[
        {s:"them", en:"¿Qué te gusta hacer en tu tiempo libre?", ru:"Что ты любишь делать в свободное время?"},
        {s:"you", ru:"Скажи, что любишь читать и гулять (pasear)", say:"Me gusta leer y pasear.", re:"me gusta|me encanta"},
        {s:"them", en:"¡A mí también me gusta leer! ¿Te gustan los gatos?", ru:"Я тоже люблю читать! Тебе нравятся кошки?"},
        {s:"you", ru:"Скажи, что обожаешь кошек", say:"¡Me encantan los gatos!", re:"encantan|gustan|\\bsi\\b"},
        {s:"them", en:"No me gusta el fútbol. ¿Y a ti?", ru:"Я не люблю футбол. А ты?"},
        {s:"you", ru:"Согласись: тебе тоже нет", say:"A mí tampoco.", re:"tampoco|a mi no|no me gusta"}
      ]}
    ]
  }],
  test: {
    id: "st3", title: "Контрольная: Día a día",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Куда ты идёшь?", a:["¿Adónde vas?","¿A dónde vas?","¿Dónde vas?"]},
        {t:"translate", ru:"Я встаю в восемь.", a:["Me levanto a las ocho."]},
        {t:"translate", ru:"Мне нравятся кошки.", a:["Me gustan los gatos.","Me gustan las gatas."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"Nosotros no ___ venir hoy.", options:["podemos","puedemos","pueden"], a:0},
        {t:"pick", q:"3:30 — Son las tres y ___.", options:["media","cuarto","menos"], a:0},
        {t:"bank", ru:"Марте нравятся книги, и она любит читать.", text:"A Marta le [gustan] los libros y le [gusta] leer.", words:["gustas","gustamos"]},
        {t:"gap", ru:"Я делаю домашку днём.", text:"Yo [hago] los deberes por la tarde."},
        {t:"gap", ru:"Во сколько ты встаёшь?", text:"¿A qué hora te [levantas]?"}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Хочешь пойти со мной в кино?", en:"¿Quieres ir al cine conmigo?", extra:["a el"]},
        {t:"order", ru:"Я встаю в семь и принимаю душ.", en:"Me levanto a las siete y me ducho."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","¿Qué haces los sábados, Laura?"],["B","Me levanto tarde, a las diez. Luego voy al gimnasio."],["A","¿Te gusta el deporte?"],["B","Sí, me encanta. Por la tarde quedo con amigas. Vamos al cine o a un café."],["A","¡Qué bien! Yo los sábados trabajo."]], q:"Во сколько Лаура встаёт по субботам?", options:["В 10","В 8","В 12"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Me levanto a las ocho y voy a la universidad.", ru:"Я встаю в восемь и иду в университет."},
        {t:"roleplay", title:"Планы на пятницу.", lines:[
          {s:"them", en:"¿Qué te gusta hacer?", ru:"Что ты любишь делать?"},
          {s:"you", ru:"Скажи, что любишь танцевать", say:"Me gusta bailar.", re:"me gusta|me encanta"},
          {s:"them", en:"¿Quieres ir a bailar el viernes?", ru:"Хочешь пойти потанцевать в пятницу?"},
          {s:"you", ru:"Согласись", say:"¡Sí, quiero!", re:"\\bsi\\b|quiero|vale|claro|vamos"},
          {s:"them", en:"¿A qué hora puedes?", ru:"Во сколько ты можешь?"},
          {s:"you", ru:"Скажи, что можешь в восемь", say:"Puedo a las ocho.", re:"puedo|a las|\\d|ocho"}
        ]}
      ]},
      {title:"Напиши сама", steps:[
        {t:"write", task:"Опиши свою субботу: во сколько встаёшь, что делаешь, куда ходишь, что тебе нравится (5–6 предложений).", min:25,
         need:[{label:"Возвратный глагол (me levanto…)", re:"\\bme (levanto|ducho|acuesto|visto|despierto|quedo)\\b"},{label:"Неправильный глагол (voy, hago, quiero, puedo…)", re:"\\b(voy|vamos|hago|quiero|puedo|tengo|salgo)\\b"},{label:"Gustar (me gusta / me encanta)", re:"me (gusta|encanta)"},{label:"Время (a las…)", re:"a las? [a-z0-9]+"}],
         sample:"Los sábados me levanto a las diez. Primero desayuno y luego voy al parque con mi amiga. Me encanta pasear. Por la noche quiero ver una película, pero a veces hago los deberes."}
      ]}
    ]
  }
},
/* ======================= БЛОК 4 ======================= */
{
  id: "sb4", title: "En la ciudad", note: "Кафе, планы и дорога, покупки",
  lessons: [
  {
    id: "s10", icon: "cup", title: "В кафе",
    goals: ["Заказать еду и напитки", "Вежливо попросить: quería, ¿me pone…?", "Спросить, сколько стоит, и попросить счёт"],
    summary: ["Para mí, un café con leche. — Мне кофе с молоком.", "Quería… — я хотела бы (вежливее, чем quiero)", "¿Me pone un agua? — Дайте мне воды", "¿Cuánto es? — Сколько с меня?", "La cuenta, por favor. — Счёт, пожалуйста."],
    phrases: [["Una mesa para dos, por favor.","Столик на двоих, пожалуйста."],["¿Qué desea?","Что желаете?"],["Para mí, un café con leche.","Мне кофе с молоком."],["Quería una tortilla.","Я бы хотела тортилью."],["¿Me pone un agua sin gas?","Дайте мне воды без газа."],["¿Qué me recomienda?","Что посоветуете?"],["Está muy rico.","Очень вкусно."],["¿Cuánto es?","Сколько с меня?"],["La cuenta, por favor.","Счёт, пожалуйста."]],
    steps: [
      {t:"tip", title:"Как заказывать вежливо", html:`<p><b>Para mí…</b> — «мне…»: <i>Para mí, un té.</i></p><p><b>Quería…</b> — «я хотела бы…» — вежливее, чем <i>quiero</i>.</p><p><b>¿Me pone…?</b> — «Дайте мне…?» — так часто говорят в Испании.</p><p class="note"><i>agua</i> — женского рода, но говорят <b>el / un agua</b>, потому что слово начинается с ударного «а».</p>`},
      {t:"match", pairs:[["el agua","вода"],["la cuenta","счёт"],["el postre","десерт"],["la carne","мясо"]]},
      {t:"pick", q:"Официант: ¿Qué desea?", options:["Para mí, un café, por favor.","La cuenta.","Muy bien, gracias."], a:0},
      {t:"bank", ru:"Мне чай без сахара.", text:"Para [mí], un té [sin] azúcar.", words:["mi","con"]},
      {t:"bank", ru:"Я бы хотела тортилью.", text:"[Quería] una [tortilla].", words:["Quiera","paella"]},
      {t:"tip", title:"Menú del día", html:`<p>В Испании днём многие кафе предлагают <b>menú del día</b> — комплексный обед за фиксированную цену:</p><p><b>de primero</b> — первое (суп, салат)<br><b>de segundo</b> — второе (мясо, рыба)<br><b>de postre</b> — десерт<br><b>para beber</b> — напиток</p>`},
      {t:"pick", q:"Как спросить «сколько с меня?»", options:["¿Cuánto es?","¿Cuántos años?","¿Qué es?"], a:0},
      {t:"gap", ru:"Счёт, пожалуйста.", text:"La [cuenta], por favor.", hint:true},
      {t:"gap", ru:"Что вы посоветуете?", text:"¿Qué me [recomienda]?"},
      {t:"listen", lines:[["A","Buenas tardes. ¿Qué va a tomar?"],["B","Para mí, el menú del día. De primero, sopa, y de segundo, pollo."],["A","¿Y para beber?"],["B","Un agua sin gas, por favor."],["A","Muy bien. ¿Y de postre?"],["B","Flan, por favor."]], q:"Что она заказала на второе?", options:["Курицу","Рыбу","Суп"], a:0},
      {t:"order", ru:"Столик на двоих, пожалуйста.", en:"Una mesa para dos, por favor."},
      {t:"translate", ru:"Очень вкусно!", a:["¡Está muy rico!","¡Está muy bueno!","¡Está riquísimo!","¡Muy rico!"]},
      {t:"translate", ru:"Счёт, пожалуйста.", a:["La cuenta, por favor."]},
      {t:"dictation", en:"¿Me pone un café con leche?", ru:"Дайте мне кофе с молоком."},
      {t:"speak", en:"Para mí, un café con leche, por favor.", ru:"Мне кофе с молоком, пожалуйста."},
      {t:"write", task:"Напиши, что ты закажешь в испанском кафе: первое, второе, напиток и десерт, а в конце попроси счёт.", min:15,
       need:[{label:"Вежливый заказ (para mí / quería / ¿me pone…?)", re:"para mi|queria|me pone|quiero|me trae|me pones"},{label:"Напиток", re:"cafe|agua|\\bte\\b|zumo|cerveza|vino|refresco|leche|limonada|cola"},{label:"Счёт", re:"la cuenta|cuanto es"}],
       sample:"Para mí, de primero, una ensalada y de segundo, pescado. Para beber, un agua sin gas. De postre quería un flan. La cuenta, por favor."},
      {t:"roleplay", title:"Кафе в Мадриде.", lines:[
        {s:"them", en:"¡Hola! ¿Qué le pongo?", ru:"Здравствуйте! Что вам?"},
        {s:"you", ru:"Закажи кофе с молоком", say:"Un café con leche, por favor.", re:"cafe|\\bte\\b|agua|zumo"},
        {s:"them", en:"¿Algo para comer?", ru:"Что-нибудь поесть?"},
        {s:"you", ru:"Спроси, что посоветуют", say:"¿Qué me recomienda?", re:"recomienda|recomiendas|que hay|que tiene|que tienen"},
        {s:"them", en:"La tortilla está buenísima.", ru:"Тортилья очень вкусная."},
        {s:"you", ru:"Закажи тортилью", say:"Pues una tortilla, por favor.", re:"tortilla"},
        {s:"them", en:"Aquí tiene. ¡Que aproveche!", ru:"Пожалуйста. Приятного аппетита!"},
        {s:"you", ru:"Поблагодари и спроси, сколько с тебя", say:"Gracias. ¿Cuánto es?", re:"cuanto|la cuenta"}
      ]}
    ]
  },
  {
    id: "s11", icon: "map", title: "Планы и дорога",
    goals: ["Говорить о планах: ir a + инфинитив", "Спрашивать и объяснять дорогу", "Предлоги места: cerca, lejos, al lado, enfrente"],
    summary: ["Voy a estudiar. — Я собираюсь заниматься.", "¿Qué vas a hacer mañana?", "¿Dónde está el metro? — Está cerca / lejos.", "Gira a la derecha / izquierda. Sigue todo recto.", "al lado de · enfrente de · entre · detrás de · delante de"],
    phrases: [["¿Qué vas a hacer el fin de semana?","Что будешь делать на выходных?"],["Voy a visitar a mi abuela.","Собираюсь навестить бабушку."],["Vamos a ver una película.","Мы посмотрим фильм."],["Perdona, ¿dónde está el metro?","Извини, где метро?"],["Está cerca.","Это рядом."],["Gira a la izquierda.","Поверни налево."],["Sigue todo recto.","Иди прямо."],["Está al lado del banco.","Рядом с банком."],["Está enfrente de la farmacia.","Напротив аптеки."]],
    steps: [
      {t:"tip", title:"Ir a + инфинитив — ближайшее будущее", html:`<p>Самый простой способ сказать о планах: <b>ir</b> (voy, vas, va…) + <b>a</b> + инфинитив.</p><p><i><b>Voy a</b> dormir.</i> — Я буду спать / собираюсь спать.<br><i><b>Vamos a</b> comer.</i> — Мы будем есть.</p><p>Слова-помощники: <i>mañana, esta tarde, el sábado, la semana que viene</i>.</p>`},
      {t:"pick", q:"Mañana ___ estudiar.", options:["voy a","voy","vamos"], a:0},
      {t:"bank", ru:"Что ты будешь делать вечером?", text:"¿Qué [vas] [a] hacer esta tarde?", words:["va","de"]},
      {t:"gap", ru:"Мы посмотрим фильм.", text:"Vamos [a] ver una película.", hint:true},
      {t:"gap", ru:"Они поедут в Барселону.", text:"Ellos [van] a viajar a Barcelona."},
      {t:"tip", title:"Где это? Предлоги места", html:`<p><b>cerca de</b> — рядом с, <b>lejos de</b> — далеко от<br><b>al lado de</b> — около, <b>enfrente de</b> — напротив<br><b>entre … y …</b> — между, <b>detrás de</b> — за, <b>delante de</b> — перед</p><p>Дорога: <b>a la derecha</b> — направо, <b>a la izquierda</b> — налево, <b>todo recto</b> — прямо.</p><p class="note"><b>de + el = del</b>: <i>al lado <b>del</b> banco</i>.</p>`},
      {t:"match", pairs:[["cerca","близко"],["lejos","далеко"],["a la derecha","направо"],["todo recto","прямо"]]},
      {t:"pick", q:"Аптека рядом с банком:", options:["La farmacia está al lado del banco.","La farmacia está al lado de el banco.","La farmacia es al lado del banco."], a:0},
      {t:"pick", audio:"Gira a la izquierda y sigue todo recto.", q:"Послушай: куда идти?", options:["Налево, потом прямо","Направо, потом прямо","Прямо, потом налево"], a:0},
      {t:"listen", lines:[["A","Perdona, ¿hay una farmacia por aquí?"],["B","Sí, mira. Sigue todo recto y gira a la derecha."],["A","¿Está lejos?"],["B","No, está muy cerca, enfrente del supermercado."]], q:"Где аптека?", options:["Напротив супермаркета","Рядом с банком","За метро"], a:0},
      {t:"order", ru:"Извини, где метро?", en:"Perdona, ¿dónde está el metro?", extra:["es"]},
      {t:"translate", ru:"Я собираюсь навестить бабушку.", a:["Voy a visitar a mi abuela.","Voy a ver a mi abuela."]},
      {t:"translate", ru:"Это далеко?", a:["¿Está lejos?"]},
      {t:"dictation", en:"Está enfrente de la farmacia.", ru:"Это напротив аптеки."},
      {t:"speak", en:"El sábado voy a visitar a mi abuela.", ru:"В субботу я навещу бабушку."},
      {t:"write", task:"Напиши свои планы на выходные (минимум два «voy a…») и объясни подруге, где вы встретитесь (cerca de, al lado de, enfrente de…).", min:20,
       need:[{label:"ir a + инфинитив", re:"\\b(voy|vas|va|vamos|van) a [a-z]+(ar|er|ir)\\b"},{label:"Ещё один план", re:"(\\b(voy|vas|va|vamos|van) a [a-z]+(ar|er|ir)\\b[\\s\\S]*){2}"},{label:"Место (cerca, al lado, enfrente…)", re:"cerca|lejos|al lado|enfrente|delante|detras|entre"}],
       sample:"El sábado voy a dormir mucho. Por la tarde vamos a ir al centro. El domingo voy a estudiar. Quedamos enfrente del metro, al lado del café."},
      {t:"roleplay", title:"Туристка спрашивает у тебя дорогу.", lines:[
        {s:"them", en:"Perdona, ¿dónde está la plaza Mayor?", ru:"Извини, где площадь Майор?"},
        {s:"you", ru:"Объясни: иди прямо, потом налево", say:"Sigue todo recto y gira a la izquierda.", re:"recto|derecha|izquierda|gira"},
        {s:"them", en:"¿Está lejos?", ru:"Это далеко?"},
        {s:"you", ru:"Скажи, что близко, пять минут", say:"No, está cerca, a cinco minutos.", re:"cerca|lejos|minutos"},
        {s:"them", en:"¡Muchas gracias!", ru:"Большое спасибо!"},
        {s:"you", ru:"Ответь «не за что»", say:"De nada.", re:"de nada|\\bnada\\b|no hay de que"}
      ]}
    ]
  },
  {
    id: "s12", icon: "bag", title: "Покупки и сравнения",
    goals: ["Сравнивать: más… que, menos… que, tan… como", "Указывать: este, ese, aquel", "Покупать одежду: размер, цвет, цена"],
    summary: ["más caro que — дороже, чем", "menos bonito que — менее красивый, чем", "tan grande como — такой же большой, как", "este (рядом) · ese (там) · aquel (далеко)", "¿Me lo puedo probar? ¿Cuánto cuesta? Me lo llevo."],
    phrases: [["¿Cuánto cuesta este vestido?","Сколько стоит это платье?"],["Es muy caro.","Очень дорого."],["¿Tiene una talla más pequeña?","Есть размер поменьше?"],["¿Me lo puedo probar?","Можно его примерить?"],["Este es más bonito que ese.","Это красивее, чем то."],["Me queda bien.","Мне идёт / подходит."],["Me lo llevo.","Я беру."],["Solo estoy mirando.","Я просто смотрю."]],
    steps: [
      {t:"tip", title:"Сравнения", html:`<p><b>más</b> + признак + <b>que</b> — «более…, чем»: <i>La falda es más cara que el vestido.</i></p><p><b>menos</b> + признак + <b>que</b> — «менее…, чем».</p><p><b>tan</b> + признак + <b>como</b> — «такой же…, как».</p><p class="note">Особые формы: bueno → <b>mejor</b>, malo → <b>peor</b>, о возрасте: <b>mayor</b> (старше), <b>menor</b> (младше).</p>`},
      {t:"pick", q:"La falda es ___ cara ___ el vestido. (дороже)", options:["más / que","más / como","tan / que"], a:0},
      {t:"pick", q:"Mi gata es ___ bonita ___ tu gata. (такая же)", options:["tan / como","más / como","tan / que"], a:0},
      {t:"pick", q:"Este café es ___ que ese. (лучше)", options:["mejor","más bueno","bueno"], a:0},
      {t:"bank", ru:"Это платье дешевле, чем то.", text:"Este vestido es [más] barato [que] ese.", words:["como","tan"]},
      {t:"tip", title:"Этот, тот", html:`<table class="gtable"><tr><td></td><td>муж.</td><td>жен.</td></tr><tr><td>этот (рядом)</td><td><b>este / estos</b></td><td><b>esta / estas</b></td></tr><tr><td>тот (там)</td><td><b>ese / esos</b></td><td><b>esa / esas</b></td></tr><tr><td>вон тот (далеко)</td><td><b>aquel / aquellos</b></td><td><b>aquella / aquellas</b></td></tr></table>`},
      {t:"pick", q:"___ zapatos (рядом с тобой)", options:["Estos","Este","Estas"], a:0},
      {t:"gap", ru:"Сколько стоит эта юбка?", text:"¿Cuánto cuesta [esta] falda?", hint:true},
      {t:"match", pairs:[["la falda","юбка"],["el vestido","платье"],["los zapatos","туфли"],["la camiseta","футболка"]]},
      {t:"tip", title:"Цвета", html:`<p>Цвета — тоже прилагательные и согласуются: <i>un vestido roj<b>o</b> — una falda roj<b>a</b></i>.</p><p><i>blanco, negro, rojo, amarillo</i> — меняются.<br><i>verde, azul, gris, rosa, naranja</i> — не меняются по роду.</p>`},
      {t:"gap", ru:"красная юбка", text:"una falda [roja]"},
      {t:"listen", lines:[["A","Hola, ¿puedo ayudarte?"],["B","Sí, ¿cuánto cuesta este vestido verde?"],["A","Treinta y cinco euros. ¿Qué talla tienes?"],["B","La M. ¿Me lo puedo probar?"],["A","Claro, los probadores están al fondo."],["B","Me queda un poco grande. ¿Tiene una talla más pequeña?"]], q:"Какая проблема с платьем?", options:["Оно немного велико","Оно слишком дорогое","Не нравится цвет"], a:0},
      {t:"order", ru:"Можно его примерить?", en:"¿Me lo puedo probar?", extra:["la"]},
      {t:"translate", ru:"Сколько стоит это платье?", a:["¿Cuánto cuesta este vestido?","¿Cuánto vale este vestido?","¿Cuánto es este vestido?"]},
      {t:"translate", ru:"Я беру.", a:["Me lo llevo.","Me la llevo.","Lo compro."]},
      {t:"dictation", en:"Solo estoy mirando, gracias.", ru:"Я просто смотрю, спасибо."},
      {t:"speak", en:"Este vestido es más bonito que ese.", ru:"Это платье красивее, чем то."},
      {t:"write", task:"Сравни двух людей, два города или двух животных: минимум три сравнения (más… que, menos… que, tan… como).", min:15,
       need:[{label:"más … que / mejor que", re:"mas [a-z]+ que|mejor que|peor que|mayor que|menor que"},{label:"menos … que", re:"menos [a-z]+ que"},{label:"tan … como", re:"tan [a-z]+ como"}],
       sample:"Moscú es más grande que Madrid. Madrid es menos fría que Moscú. Mi gata es tan bonita como la gata de mi amiga."},
      {t:"roleplay", title:"Магазин одежды в Барселоне.", lines:[
        {s:"them", en:"¡Hola! ¿Te puedo ayudar?", ru:"Привет! Помочь?"},
        {s:"you", ru:"Скажи, что просто смотришь", say:"Solo estoy mirando, gracias.", re:"mirando|solo"},
        {s:"them", en:"Vale. Si necesitas algo, dímelo.", ru:"Хорошо. Если что-то нужно — скажи."},
        {s:"you", ru:"Спроси, сколько стоит эта футболка", say:"Perdona, ¿cuánto cuesta esta camiseta?", re:"cuanto"},
        {s:"them", en:"Doce euros. Es más barata que las otras.", ru:"Двенадцать евро. Она дешевле, чем другие."},
        {s:"you", ru:"Спроси, можно ли примерить", say:"¿Me la puedo probar?", re:"probar|probador"},
        {s:"them", en:"Claro. … ¿Qué tal te queda?", ru:"Конечно. … Ну как, подходит?"},
        {s:"you", ru:"Скажи, что идёт, и ты берёшь", say:"Me queda bien. Me la llevo.", re:"llevo|compro|queda bien"}
      ]}
    ]
  }],
  test: {
    id: "st4", title: "Контрольная: En la ciudad",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Мне кофе с молоком, пожалуйста.", a:["Para mí, un café con leche, por favor.","Un café con leche, por favor.","¿Me pone un café con leche, por favor?"]},
        {t:"translate", ru:"Я собираюсь заниматься вечером.", a:["Voy a estudiar esta tarde.","Voy a estudiar por la tarde.","Voy a estudiar por la noche.","Voy a estudiar esta noche."]},
        {t:"translate", ru:"Это платье дороже, чем то.", a:["Este vestido es más caro que ese.","Este vestido es más caro que aquel."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"El metro está al lado ___ banco.", options:["del","de el","al"], a:0},
        {t:"bank", ru:"— Что ты будешь делать? — Я буду спать.", text:"¿Qué [vas] a hacer? — [Voy] a dormir.", words:["va","vais"]},
        {t:"pick", q:"Mi hermana es ___ que yo. (старше)", options:["mayor","más vieja","más grande"], a:0, why:"О возрасте людей говорят mayor."},
        {t:"gap", ru:"Сколько стоит эта юбка?", text:"¿Cuánto [cuesta] esta falda?"},
        {t:"gap", ru:"Мой дом далеко от университета.", text:"Mi casa está [lejos] de la universidad."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Иди прямо и поверни направо.", en:"Sigue todo recto y gira a la derecha.", extra:["izquierda"]},
        {t:"order", ru:"Дайте мне воды без газа?", en:"¿Me pone un agua sin gas?"}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Hola, Marta. ¿Qué vas a hacer el sábado?"],["B","Voy a ir de compras. Necesito un vestido para la fiesta de Ana."],["A","¿Dónde vas a comprarlo?"],["B","En una tienda nueva. Está en el centro, al lado del cine. Es más barata que las otras."],["A","¿Puedo ir contigo?"],["B","¡Claro! Quedamos a las once enfrente del cine."]], q:"Где и когда встречаются девушки?", options:["Напротив кинотеатра в 11","Рядом с магазином в 12","У Аны дома в 11"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Voy a ir al centro. La tienda está al lado del cine.", ru:"Я поеду в центр. Магазин рядом с кинотеатром."},
        {t:"roleplay", title:"Заказ в кафе.", lines:[
          {s:"them", en:"Hola, ¿qué desea?", ru:"Здравствуйте, что желаете?"},
          {s:"you", ru:"Вежливо закажи что-нибудь", say:"Para mí, un café con leche, por favor.", re:"para mi|queria|quiero|me pone|por favor"},
          {s:"them", en:"¿Algo más?", ru:"Что-нибудь ещё?"},
          {s:"you", ru:"Скажи, что больше ничего, и спроси, сколько с тебя", say:"No, gracias. ¿Cuánto es?", re:"cuanto|la cuenta"},
          {s:"them", en:"Dos euros con cincuenta.", ru:"Два евро пятьдесят."}
        ]}
      ]},
      {title:"Напиши сама", steps:[
        {t:"write", task:"Напиши подруге: что ты собираешься делать в субботу (ir a…), где вы встретитесь (al lado de, enfrente de…) и почему это место лучше / дешевле другого.", min:25,
         need:[{label:"Планы (ir a + инфинитив)", re:"\\b(voy|vas|va|vamos|van) a [a-z]+(ar|er|ir)\\b"},{label:"Место встречи (al lado, enfrente…)", re:"al lado|enfrente|cerca|delante|detras|entre"},{label:"Сравнение (más / menos … que, mejor…)", re:"mas [a-z]+ que|menos [a-z]+ que|\\bmejor\\b|\\bpeor\\b|tan [a-z]+ como"}],
         sample:"¡Hola, Olga! El sábado vamos a ir de compras. Primero vamos a comer en un café nuevo. Es más barato que el café de la universidad. Quedamos a las doce enfrente del metro. ¡Hasta el sábado!"}
      ]}
    ]
  }
},
/* ======================= БЛОК 5 ======================= */
{
  id: "sb5", title: "El pasado", note: "Pretérito perfecto и indefinido",
  lessons: [
  {
    id: "s13", icon: "sun", title: "Pretérito perfecto: что я сделала",
    goals: ["Образовывать pretérito perfecto: he + причастие", "Говорить о том, что сделала сегодня / на этой неделе", "Использовать ya, todavía no, nunca"],
    summary: ["he · has · ha · hemos · habéis · han + причастие", "-ar → -ado (hablado); -er/-ir → -ido (comido, vivido)", "hecho, visto, escrito, dicho, vuelto, puesto", "hoy · esta mañana · esta semana · este año", "¿Ya has comido? — Sí, ya he comido. / Todavía no."],
    phrases: [["Hoy he estudiado mucho.","Сегодня я много занималась."],["¿Has comido ya?","Ты уже поела?"],["Todavía no.","Ещё нет."],["Esta semana he visto dos películas.","На этой неделе я посмотрела два фильма."],["¿Has estado en España?","Ты была в Испании?"],["Nunca he estado en México.","Я никогда не была в Мексике."],["He hecho los deberes.","Я сделала домашку."],["¿Qué has hecho hoy?","Что ты сегодня делала?"]],
    steps: [
      {t:"tip", title:"Как образуется perfecto", html:`<p><b>haber</b> + причастие:</p><table class="gtable"><tr><td>yo</td><td><b>he</b> hablado</td></tr><tr><td>tú</td><td><b>has</b> comido</td></tr><tr><td>él / ella</td><td><b>ha</b> vivido</td></tr><tr><td>nosotros</td><td><b>hemos</b> hablado</td></tr><tr><td>vosotros</td><td><b>habéis</b> comido</td></tr><tr><td>ellos</td><td><b>han</b> vivido</td></tr></table><p>Причастие: <b>-ar → -ado</b>, <b>-er / -ir → -ido</b>.</p><p class="note">Причастие не меняется по роду: и она, и он — <i>he estudiado</i>.</p>`},
      {t:"match", pairs:[["yo","he"],["tú","has"],["ella","ha"],["nosotros","hemos"]]},
      {t:"pick", q:"Hoy (yo) ___ estudiado mucho.", options:["he","ha","has"], a:0},
      {t:"gap", ru:"Мы поели.", text:"Hemos [comido].", hint:true},
      {t:"gap", ru:"Они жили в Мадриде.", text:"Han [vivido] en Madrid."},
      {t:"tip", title:"Неправильные причастия", html:`<p>Их немного, и они очень частые:</p><p>hacer → <b>hecho</b>, ver → <b>visto</b>, escribir → <b>escrito</b>, decir → <b>dicho</b>, volver → <b>vuelto</b>, poner → <b>puesto</b>, abrir → <b>abierto</b>, romper → <b>roto</b>.</p>`},
      {t:"match", pairs:[["hacer","hecho"],["ver","visto"],["escribir","escrito"],["decir","dicho"]]},
      {t:"pick", q:"¿Has ___ la película? (ver)", options:["visto","veído","vido"], a:0},
      {t:"bank", ru:"Я уже сделала домашку.", text:"[Ya] he [hecho] los deberes.", words:["Todavía","hacido"]},
      {t:"tip", title:"Когда нужен perfecto", html:`<p>Когда период <b>ещё не закончился</b>: <i>hoy, esta mañana, esta semana, este año</i>.</p><p>И для опыта «когда-либо»: <i>¿<b>Has estado</b> alguna vez en España?</i> — <i>Nunca <b>he estado</b>.</i></p><p><b>ya</b> — уже, <b>todavía no</b> — ещё нет.</p>`},
      {t:"pick", q:"— ¿Has terminado el ensayo? — Ещё нет.", options:["Todavía no.","Ya no.","Nunca."], a:0},
      {t:"listen", lines:[["A","¿Qué tal tu día?"],["B","Muy largo. Esta mañana he tenido dos exámenes."],["A","¿Y qué tal te han salido?"],["B","Creo que bien. Y por la tarde he trabajado en la cafetería."],["A","¿Has comido algo?"],["B","Todavía no. ¡Tengo mucha hambre!"]], q:"Что она ещё НЕ сделала сегодня?", options:["Не поела","Не сдала экзамены","Не работала"], a:0},
      {t:"order", ru:"Что ты сегодня делала?", en:"¿Qué has hecho hoy?", extra:["hacido"]},
      {t:"translate", ru:"Я никогда не была в Мексике.", a:["Nunca he estado en México.","No he estado nunca en México."]},
      {t:"translate", ru:"Ты уже поела?", a:["¿Ya has comido?","¿Has comido ya?","¿Ya comiste?"]},
      {t:"dictation", en:"Esta semana he visto dos películas.", ru:"На этой неделе я посмотрела два фильма."},
      {t:"speak", en:"Hoy he estudiado mucho y he hecho los deberes.", ru:"Сегодня я много занималась и сделала домашку."},
      {t:"write", task:"Расскажи, что ты сделала сегодня или на этой неделе (минимум четыре действия в perfecto), и чего ещё не сделала (todavía no…).", min:20,
       need:[{label:"he / has / ha + причастие", re:"\\b(he|has|ha|hemos|han) [a-z]+(ado|ido|cho|to|sto)\\b"},{label:"Слово времени (hoy, esta semana…)", re:"\\bhoy\\b|esta (manana|semana|tarde)|este (ano|mes)"},{label:"ya / todavía no", re:"todavia no|\\bya\\b"}],
       sample:"Hoy me he levantado a las siete. Esta mañana he ido a clase y he escrito un ensayo. Por la tarde he visto a mis amigas. Todavía no he hecho los deberes de español."},
      {t:"roleplay", title:"Вечерний созвон с подругой.", lines:[
        {s:"them", en:"¡Hola! ¿Qué tal el día?", ru:"Привет! Как день?"},
        {s:"you", ru:"Скажи, что хорошо, но было много дел (muchas cosas)", say:"Bien, pero he hecho muchas cosas.", re:"bien|cosas|largo|\\bhe [a-z]+(ado|ido|cho|to)"},
        {s:"them", en:"¿Qué has hecho?", ru:"А что делала?"},
        {s:"you", ru:"Назови одно-два дела в perfecto", say:"He estudiado y he trabajado.", re:"\\b(he|hemos) [a-z]+(ado|ido|cho|to|sto)\\b"},
        {s:"them", en:"¿Y ya has cenado?", ru:"А ты уже поужинала?"},
        {s:"you", ru:"Скажи «ещё нет»", say:"Todavía no.", re:"todavia|\\bno\\b|\\bya\\b|\\bsi\\b"}
      ]}
    ]
  },
  {
    id: "s14", icon: "camera", title: "Indefinido: вчера и в прошлом году",
    goals: ["Образовывать indefinido правильных глаголов", "Рассказывать о законченных событиях: ayer, el año pasado", "Различать perfecto и indefinido"],
    summary: ["-ar: hablé, hablaste, habló, hablamos, hablasteis, hablaron", "-er/-ir: comí, comiste, comió, comimos, comisteis, comieron", "ayer · anoche · la semana pasada · el año pasado · en 2023", "Hoy he comido… / Ayer comí…", "Ударение меняет смысл: hablo (я говорю) — habló (он сказал)"],
    phrases: [["Ayer estudié toda la tarde.","Вчера я занималась весь день."],["Anoche cené con mis amigas.","Вчера вечером я ужинала с подругами."],["¿Qué hiciste el fin de semana?","Что ты делала на выходных?"],["El año pasado viajé a Italia.","В прошлом году я ездила в Италию."],["Compré un libro.","Я купила книгу."],["Conocí a un chico simpático.","Я познакомилась с милым парнем."],["Volví a casa tarde.","Я вернулась домой поздно."],["Me gustó mucho.","Мне очень понравилось."]],
    steps: [
      {t:"tip", title:"Indefinido: глаголы на -ar", html:`<table class="gtable"><tr><td>yo</td><td>habl<b>é</b></td></tr><tr><td>tú</td><td>habl<b>aste</b></td></tr><tr><td>él / ella</td><td>habl<b>ó</b></td></tr><tr><td>nosotros</td><td>habl<b>amos</b></td></tr><tr><td>vosotros</td><td>habl<b>asteis</b></td></tr><tr><td>ellos</td><td>habl<b>aron</b></td></tr></table><p class="note">Ударение решает всё: <i>hablo</i> — я говорю, <i>habló</i> — он сказал.</p>`},
      {t:"match", pairs:[["yo","hablé"],["tú","hablaste"],["ella","habló"],["ellos","hablaron"]]},
      {t:"pick", q:"Ayer (yo) ___ mucho.", options:["trabajé","trabajo","trabajó"], a:0},
      {t:"gap", ru:"Вчера она купила платье.", text:"Ayer ella [compró] un vestido.", hint:true},
      {t:"tip", title:"Indefinido: глаголы на -er и -ir", html:`<table class="gtable"><tr><td>yo</td><td>com<b>í</b></td><td>viv<b>í</b></td></tr><tr><td>tú</td><td>com<b>iste</b></td><td>viv<b>iste</b></td></tr><tr><td>él / ella</td><td>com<b>ió</b></td><td>viv<b>ió</b></td></tr><tr><td>nosotros</td><td>com<b>imos</b></td><td>viv<b>imos</b></td></tr><tr><td>vosotros</td><td>com<b>isteis</b></td><td>viv<b>isteis</b></td></tr><tr><td>ellos</td><td>com<b>ieron</b></td><td>viv<b>ieron</b></td></tr></table><p class="note">У -er и -ir окончания одинаковые.</p>`},
      {t:"pick", q:"Anoche (nosotros) ___ en un restaurante.", options:["comimos","comemos","comieron"], a:0},
      {t:"gap", ru:"Они вернулись поздно.", text:"[Volvieron] tarde."},
      {t:"bank", ru:"В прошлом году я жила в Барселоне.", text:"El año [pasado] [viví] en Barcelona.", words:["próximo","vivo"]},
      {t:"tip", title:"Perfecto или indefinido?", html:`<p><b>Perfecto</b> — период ещё идёт: <i>hoy, esta semana, este año, ya, nunca</i>.<br><i>Hoy <b>he comido</b> pasta.</i></p><p><b>Indefinido</b> — период закончился: <i>ayer, anoche, el lunes pasado, en 2023</i>.<br><i>Ayer <b>comí</b> pasta.</i></p><p class="note">В Латинской Америке indefinido часто говорят и вместо perfecto: <i>¿Ya comiste?</i></p>`},
      {t:"pick", q:"Hoy ___ mucho.", options:["he estudiado","estudié"], a:0, why:"Hoy — период ещё не закончился → perfecto (так говорят в Испании)."},
      {t:"pick", q:"Ayer ___ a mi abuela. (visitar)", options:["visité","he visitado"], a:0, why:"Ayer — день уже закончился → indefinido."},
      {t:"pick", q:"Él ___ a las diez. (volver — вернулся)", options:["volvió","volvío","vuelve"], a:0},
      {t:"listen", lines:[["A","¿Qué tal el fin de semana?"],["B","¡Genial! El sábado celebré mi cumpleaños."],["A","¡Felicidades! ¿Qué hiciste?"],["B","Cené con mis amigas en un restaurante italiano y después bailamos toda la noche."],["A","¿Y el domingo?"],["B","El domingo no salí. Dormí hasta las dos."]], q:"Что она делала в воскресенье?", options:["Спала до двух","Танцевала","Ужинала с подругами"], a:0},
      {t:"order", ru:"Вчера вечером я ужинала с подругами.", en:"Anoche cené con mis amigas.", extra:["ceno"]},
      {t:"translate", ru:"Вчера я занималась весь день.", a:["Ayer estudié toda la tarde.","Ayer estudié todo el día."]},
      {t:"translate", ru:"Мне очень понравилось.", a:["Me gustó mucho.","Me encantó."]},
      {t:"dictation", en:"El año pasado viajé a Italia.", ru:"В прошлом году я ездила в Италию."},
      {t:"speak", en:"Ayer estudié mucho y volví a casa tarde.", ru:"Вчера я много занималась и вернулась домой поздно."},
      {t:"write", task:"Расскажи, что ты делала вчера: минимум четыре глагола в indefinido (estudié, comí, volví…).", min:20,
       need:[{label:"Глагол на -é (estudié, cené, trabajé…)", re:"\\b(estudie|cene|trabaje|compre|llegue|visite|hable|camine|viaje|desayune|escuche|mire|tome|cocine|pase|baile|termine|quede|limpie|jugue|levante|duche|acoste|empece|almorce|practique|busque)\\b"},{label:"Глагол на -í (comí, viví, salí…)", re:"\\b(comi|vivi|sali|volvi|bebi|escribi|lei|corri|aprendi|recibi|conoci|dormi|abri|subi|decidi|vi|entendi)\\b"},{label:"Слово времени (ayer, anoche…)", re:"\\bayer\\b|anoche|pasad"}],
       sample:"Ayer me levanté a las ocho. Desayuné y estudié en la biblioteca. Por la tarde comí con mi amiga y anoche volví a casa tarde."},
      {t:"roleplay", title:"Утро понедельника, болтаешь с одногруппницей.", lines:[
        {s:"them", en:"¿Qué hiciste ayer?", ru:"Что ты делала вчера?"},
        {s:"you", ru:"Скажи, что весь день занималась", say:"Estudié todo el día.", re:"estudie|trabaje|lei|escribi|descanse|sali|limpie|estudiamos"},
        {s:"them", en:"¿Y por la noche?", ru:"А вечером?"},
        {s:"you", ru:"Скажи, что ужинала с подругами", say:"Cené con mis amigas.", re:"cene|cenamos|amig|comi|sali|vi"},
        {s:"them", en:"¿Te gustó el restaurante?", ru:"Тебе понравился ресторан?"},
        {s:"you", ru:"Скажи, что очень понравилось", say:"Sí, me gustó mucho.", re:"gusto|encanto|\\bsi\\b"}
      ]}
    ]
  },
  {
    id: "s15", icon: "plane", title: "Рассказ о поездке",
    goals: ["Спрягать ser / ir, tener, estar, hacer в indefinido", "Рассказывать историю: primero, luego, al final", "Рассказать о поездке или выходных"],
    summary: ["ser / ir: fui, fuiste, fue, fuimos, fuisteis, fueron", "tener → tuve, estar → estuve, hacer → hice / hizo", "poder → pude, querer → quise, venir → vine", "Fui a Madrid en verano. Fue increíble.", "Primero… luego… después… al final…"],
    phrases: [["El verano pasado fui a España.","Прошлым летом я ездила в Испанию."],["Fue increíble.","Было невероятно."],["Estuve dos semanas en Madrid.","Я была две недели в Мадриде."],["Tuve un problema con la maleta.","У меня была проблема с чемоданом."],["Hizo mucho calor.","Было очень жарко."],["¿Qué tal el viaje?","Как поездка?"],["Primero visitamos el Museo del Prado.","Сначала мы сходили в Прадо."],["Al final volvimos a casa muy cansadas.","В конце мы вернулись домой очень уставшие."]],
    steps: [
      {t:"tip", title:"Ser и ir в прошлом совпадают", html:`<table class="gtable"><tr><td>yo</td><td><b>fui</b></td></tr><tr><td>tú</td><td><b>fuiste</b></td></tr><tr><td>él / ella</td><td><b>fue</b></td></tr><tr><td>nosotros</td><td><b>fuimos</b></td></tr><tr><td>vosotros</td><td><b>fuisteis</b></td></tr><tr><td>ellos</td><td><b>fueron</b></td></tr></table><p><i><b>Fui</b> a Madrid.</i> — Я ездила в Мадрид (ir).<br><i><b>Fue</b> increíble.</i> — Было невероятно (ser).</p>`},
      {t:"match", pairs:[["yo","fui"],["tú","fuiste"],["ella","fue"],["nosotros","fuimos"]]},
      {t:"pick", q:"El verano pasado (yo) ___ a Italia.", options:["fui","fue","voy"], a:0},
      {t:"pick", q:"El concierto ___ increíble.", options:["fue","fui","fuimos"], a:0},
      {t:"tip", title:"Неправильные основы", html:`<p>У частых глаголов меняется основа, а окончания общие: <b>-e, -iste, -o, -imos, -isteis, -ieron</b>.</p><p>tener → <b>tuv</b>-: tuve, tuviste, tuvo…<br>estar → <b>estuv</b>-: estuve…<br>poder → <b>pud</b>-: pude…<br>querer → <b>quis</b>-: quise…<br>venir → <b>vin</b>-: vine…<br>hacer → <b>hic</b>-: hice, hiciste, <b>hizo</b>…</p><p class="note">Здесь ударений нет: <i>tuve, estuvo</i>. Погода: <i><b>hizo</b> calor / frío / sol</i>.</p>`},
      {t:"match", pairs:[["tener","tuve"],["estar","estuve"],["hacer","hice"],["poder","pude"]]},
      {t:"gap", ru:"Мы были в Мадриде неделю.", text:"[Estuvimos] una semana en Madrid.", hint:true},
      {t:"gap", ru:"Вчера было холодно.", text:"Ayer [hizo] frío."},
      {t:"bank", ru:"У меня была проблема, и я не смогла прийти.", text:"[Tuve] un problema y no [pude] venir.", words:["Tengo","podí"]},
      {t:"tip", title:"Как рассказать историю", html:`<p><b>primero</b> — сначала, <b>luego / después</b> — потом, <b>más tarde</b> — позже, <b>entonces</b> — тогда, <b>al final</b> — в конце.</p><p>Впечатления: <i>Fue increíble / precioso / horrible. Me encantó. Lo pasé muy bien.</i></p>`},
      {t:"pick", q:"«Сначала…, потом…»", options:["Primero…, luego…","Al final…, primero…","Después…, primero…"], a:0},
      {t:"listen", lines:[["A","¡Hola, Clara! ¿Qué tal el viaje a Sevilla?"],["B","¡Fue increíble! Estuve allí cinco días con mi hermana."],["A","¿Qué hicisteis?"],["B","Primero visitamos la catedral. Luego paseamos por el barrio de Santa Cruz. Hizo mucho calor, ¡cuarenta grados!"],["A","¿Y tuvisteis algún problema?"],["B","Sí, el último día perdí el móvil. Pero al final lo encontré en el hotel."]], q:"Какая проблема случилась в поездке?", options:["Потеряла телефон, но нашла","Опоздала на поезд","Заболела сестра"], a:0},
      {t:"order", ru:"Прошлым летом я ездила в Испанию.", en:"El verano pasado fui a España.", extra:["fue"]},
      {t:"translate", ru:"Было невероятно!", a:["¡Fue increíble!","¡Estuvo increíble!"]},
      {t:"translate", ru:"Было очень жарко.", a:["Hizo mucho calor."]},
      {t:"dictation", en:"Estuve dos semanas en Madrid.", ru:"Я была две недели в Мадриде."},
      {t:"speak", en:"El verano pasado fui a España y fue increíble.", ru:"Прошлым летом я ездила в Испанию, и это было невероятно."},
      {t:"write", task:"Расскажи о поездке или незабываемых выходных: куда ездила, сколько была, что делала по порядку, какая была погода и как тебе (6–8 предложений).", min:35,
       need:[{label:"fui / fue / fuimos", re:"\\b(fui|fue|fuimos|fueron|fuiste)\\b"},{label:"Неправильный глагол (estuve, tuve, hice, hizo…)", re:"\\b(estuve|estuvimos|estuvo|tuve|tuvimos|tuvo|hice|hizo|hicimos|pude|quise|vine)\\b"},{label:"Связки (primero, luego, al final…)", re:"primero|luego|despues|al final|mas tarde|entonces"},{label:"Впечатление (me gustó, fue increíble…)", re:"me gusto|me encanto|fue (increible|genial|bonito|precioso|maravillos|fantastic|horrible|estupend)|lo pase"}],
       sample:"El verano pasado fui a Barcelona con mi amiga. Estuvimos allí una semana. Primero visitamos la Sagrada Familia. Luego fuimos a la playa. Hizo mucho calor y comimos mucha paella. Al final volvimos a casa muy cansadas. ¡Me encantó el viaje!"},
      {t:"roleplay", title:"Одногруппница спрашивает про каникулы.", lines:[
        {s:"them", en:"¡Hola! ¿Qué tal las vacaciones?", ru:"Привет! Как каникулы?"},
        {s:"you", ru:"Скажи, что было отлично", say:"¡Fueron geniales!", re:"fue|fueron|genial|increible|bien|estupend|muy bien"},
        {s:"them", en:"¿Adónde fuiste?", ru:"Куда ездила?"},
        {s:"you", ru:"Скажи, куда ездила", say:"Fui a Sochi con mi familia.", re:"\\bfui\\b|fuimos|estuve|visite|viaje"},
        {s:"them", en:"¿Y qué hiciste allí?", ru:"А что там делала?"},
        {s:"you", ru:"Назови одно-два дела", say:"Fui a la playa y visité el centro.", re:"\\b(fui|visite|nade|comi|pasee|estuve|hice|tome|vi|conoci|camine|baile|fuimos|visitamos)\\b|playa"},
        {s:"them", en:"¡Qué envidia! ¿Hizo buen tiempo?", ru:"Завидую! Погода была хорошая?"},
        {s:"you", ru:"Скажи, что было жарко и солнечно", say:"Sí, hizo mucho calor y sol.", re:"hizo|calor|\\bsol\\b|buen tiempo"}
      ]}
    ]
  }],
  test: {
    id: "st5", title: "Итоговая контрольная",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Сегодня я много занималась.", a:["Hoy he estudiado mucho."]},
        {t:"translate", ru:"Вчера я купила книгу.", a:["Ayer compré un libro."]},
        {t:"translate", ru:"Прошлым летом я ездила в Испанию.", a:["El verano pasado fui a España.","El verano pasado viajé a España."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"Ayer ___ un café con Marta.", options:["tomé","he tomado","tomo"], a:0},
        {t:"pick", q:"El año pasado (nosotros) ___ en Roma.", options:["estuvimos","estamos","estuvieron"], a:0},
        {t:"bank", ru:"— Ты смотрела фильм? — Нет, ещё нет.", text:"¿[Has] visto la película? — No, [todavía] no.", words:["Ha","ya"]},
        {t:"gap", ru:"Вчера было очень холодно.", text:"Ayer [hizo] mucho frío."},
        {t:"gap", ru:"Мои родители ездили в Италию в мае.", text:"Mis padres [fueron] a Italia en mayo."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Что ты делала на выходных?", en:"¿Qué hiciste el fin de semana?", extra:["hacías"]},
        {t:"order", ru:"Сначала мы пошли в музей, а потом поели.", en:"Primero fuimos al museo y luego comimos."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Bueno, Irina, ¿qué tal tu primer año en Madrid?"],["B","Muy bien. Al principio fue difícil, pero aprendí mucho."],["A","¿Qué es lo que más te gustó?"],["B","Me encantó la gente. Y también viajé mucho: fui a Granada, a Valencia y a Bilbao."],["A","¿Y qué ciudad te gustó más?"],["B","Granada. Visité la Alhambra y fue increíble. Este año todavía no he viajado, pero en verano voy a ir a Portugal."]], q:"Куда Ирина собирается летом?", options:["В Португалию","В Гранаду","В Бильбао"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"El año pasado fui a Barcelona y me gustó mucho.", ru:"В прошлом году я ездила в Барселону, и мне очень понравилось."},
        {t:"roleplay", title:"Сегодня, вчера и завтра.", lines:[
          {s:"them", en:"¿Qué has hecho hoy?", ru:"Что ты сегодня делала?"},
          {s:"you", ru:"Ответь в perfecto", say:"He estudiado en la biblioteca.", re:"\\b(he|hemos) [a-z]+(ado|ido|cho|to|sto)\\b"},
          {s:"them", en:"¿Y ayer qué hiciste?", ru:"А вчера что делала?"},
          {s:"you", ru:"Ответь в indefinido", say:"Ayer fui al cine con mis amigas.", re:"\\b(fui|estuve|hice|vi|comi|cene|estudie|trabaje|sali|visite|vimos|fuimos|lei|compre)\\b"},
          {s:"them", en:"¿Qué vas a hacer mañana?", ru:"А что будешь делать завтра?"},
          {s:"you", ru:"Расскажи план (voy a…)", say:"Mañana voy a trabajar.", re:"\\b(voy|vamos) a\\b"}
        ]}
      ]},
      {title:"Напиши сама", steps:[
        {t:"write", task:"Напиши рассказ «Мой семестр»: что ты сделала в этом семестре (perfecto), что интересного было в прошлом месяце (indefinido) и что собираешься делать на каникулах (ir a…). 7–9 предложений.", min:40,
         need:[{label:"Pretérito perfecto (he + …)", re:"\\b(he|hemos|ha|han) [a-z]+(ado|ido|cho|to|sto)\\b"},{label:"Indefinido (fui, estudié, comí…)", re:"\\b(fui|fue|fuimos|estuve|tuve|hice|hizo|vi|conoci|viaje|visite|visitamos|estudie|compre|comi|sali|volvi|pude)\\b"},{label:"Планы (voy a…)", re:"\\b(voy|vamos) a [a-z]+(ar|er|ir)\\b"},{label:"Связки (primero, luego, pero…)", re:"primero|luego|despues|al final|tambien|\\bpero\\b"}],
         sample:"Este semestre he estudiado mucho y he aprendido muchas cosas. He leído tres libros en español. El mes pasado fui a San Petersburgo con mis amigas. Primero visitamos el Hermitage y luego paseamos por el centro. Hizo frío, pero fue precioso. En las vacaciones voy a descansar y voy a ver series en español."}
      ]}
    ]
  }
}
];

/* ================= АУДИО ================= */
window.TRACKS_ES = [
  {level:1, id:"es1", title:"Saludos", lines:[["N","¡Hola!","Привет!"],["N","Buenos días.","Доброе утро."],["N","¿Qué tal?","Как дела?"],["N","Muy bien, gracias.","Очень хорошо, спасибо."],["N","¿Y tú?","А ты?"],["N","Hasta luego.","Пока."],["N","Hasta mañana.","До завтра."],["N","Adiós.","До свидания."]]},
  {level:1, id:"es2", title:"Números", lines:[["N","Uno, dos, tres.","Один, два, три."],["N","Tengo diecinueve años.","Мне девятнадцать лет."],["N","Son las ocho.","Восемь часов."],["N","Cuesta quince euros.","Стоит пятнадцать евро."],["N","Veinticinco.","Двадцать пять."],["N","Cuarenta y siete.","Сорок семь."],["N","Cien.","Сто."]]},
  {level:1, id:"es3", title:"En clase", lines:[["N","¿Puede repetir, por favor?","Можете повторить, пожалуйста?"],["N","No entiendo.","Я не понимаю."],["N","¿Cómo se dice esto en español?","Как это сказать по-испански?"],["N","¿Qué significa esta palabra?","Что значит это слово?"],["N","Más despacio, por favor.","Помедленнее, пожалуйста."],["N","Tengo una pregunta.","У меня вопрос."]]},

  {level:2, id:"es4", title:"En la cafetería", lines:[["A","¡Hola! ¿Qué te pongo?","Привет! Что тебе?"],["B","Un café con leche, por favor.","Кофе с молоком, пожалуйста."],["A","¿Algo más?","Что-нибудь ещё?"],["B","Sí, un cruasán.","Да, круассан."],["A","Son dos euros con cincuenta.","С тебя два евро пятьдесят."],["B","Aquí tienes. ¡Gracias!","Вот, держи. Спасибо!"]]},
  {level:2, id:"es5", title:"Nueva compañera", lines:[["A","Hola, ¿eres nueva?","Привет, ты новенькая?"],["B","Sí, me llamo Sofía. Soy de Valencia.","Да, меня зовут София. Я из Валенсии."],["A","Encantada. Yo soy Anna, de Rusia.","Приятно познакомиться. Я Анна из России."],["B","¡Qué guay! ¿Qué estudias?","Как круто! Что изучаешь?"],["A","Filología. ¿Y tú?","Филологию. А ты?"],["B","¡Yo también!","Я тоже!"]]},
  {level:2, id:"es6", title:"¿Quedamos?", lines:[["A","¿Quieres ir al cine el viernes?","Хочешь в кино в пятницу?"],["B","Vale. ¿A qué hora?","Давай. Во сколько?"],["A","A las siete.","В семь."],["B","Perfecto. ¿Dónde quedamos?","Отлично. Где встречаемся?"],["A","Enfrente del cine.","Напротив кинотеатра."],["B","¡Hasta el viernes!","До пятницы!"]]},

  {level:3, id:"es7", title:"Mi gata Luna", lines:[
    ["A","¿Tienes mascotas?","У тебя есть питомцы?"],
    ["B","Sí, tengo una gata. Se llama Luna.","Да, у меня кошка. Её зовут Луна."],
    ["A","¡Qué nombre tan bonito! ¿Cómo es?","Какое красивое имя! Какая она?"],
    ["B","Es blanca y tiene los ojos verdes. Es muy tranquila.","Белая, с зелёными глазами. Очень спокойная."],
    ["A","¿Cuántos años tiene?","Сколько ей лет?"],
    ["B","Tiene tres años. La adopté el año pasado.","Три года. Я взяла её в прошлом году."],
    ["A","¿Y qué le gusta hacer?","А что она любит делать?"],
    ["B","Le encanta dormir en mi cama y jugar con una pelota. ¡Y le gusta mucho el pescado!","Обожает спать на моей кровати и играть с мячиком. И очень любит рыбу!"],
    ["A","Me gustan mucho los gatos, pero vivo en una residencia y no puedo tener mascotas.","Я очень люблю кошек, но живу в общежитии, и питомцев держать нельзя."],
    ["B","¡Pues ven a mi casa y juegas con Luna!","Тогда приходи ко мне и поиграешь с Луной!"],
    ["A","¡Vale, me encantaría!","Давай, с удовольствием!"]]},
  {level:3, id:"es8", title:"En la tienda de ropa", lines:[
    ["A","¡Hola! ¿Te puedo ayudar?","Привет! Помочь?"],
    ["B","Sí, busco un vestido para una fiesta.","Да, ищу платье для вечеринки."],
    ["A","¿Qué talla tienes?","Какой у тебя размер?"],
    ["B","La S, creo.","Кажется, S."],
    ["A","Mira, este rosa es nuevo. Y aquel verde también es muy bonito.","Смотри, вот это розовое — новое. И вон то зелёное тоже очень красивое."],
    ["B","¿Cuánto cuesta el rosa?","Сколько стоит розовое?"],
    ["A","Cuarenta euros. El verde es más barato: treinta.","Сорок евро. Зелёное дешевле — тридцать."],
    ["B","¿Me puedo probar los dos?","Можно примерить оба?"],
    ["A","Claro, los probadores están allí.","Конечно, примерочные вон там."],
    ["B","El verde me queda mejor. Me lo llevo.","Зелёное сидит лучше. Беру его."],
    ["A","¡Muy bien! ¿Pagas con tarjeta?","Отлично! Картой платишь?"],
    ["B","Sí, con tarjeta.","Да, картой."]]},
  {level:3, id:"es9", title:"¿Por dónde se va?", lines:[
    ["A","Perdona, ¿sabes dónde está la biblioteca central?","Извини, не знаешь, где центральная библиотека?"],
    ["B","Sí, no está lejos. ¿Vas andando?","Знаю, недалеко. Пешком идёшь?"],
    ["A","Sí.","Да."],
    ["B","Pues sigue todo recto hasta la plaza. Allí gira a la izquierda.","Тогда иди прямо до площади. Там поверни налево."],
    ["A","¿A la izquierda en la plaza?","Налево на площади?"],
    ["B","Eso es. Luego la segunda calle a la derecha. La biblioteca está enfrente de un parque.","Именно. Потом вторая улица направо. Библиотека напротив парка."],
    ["A","¿Cuánto tiempo se tarda?","Сколько идти?"],
    ["B","Unos diez minutos.","Минут десять."],
    ["A","¡Muchas gracias!","Большое спасибо!"],
    ["B","De nada. ¡Buen día!","Не за что. Хорошего дня!"]]},

  {level:4, id:"es10", title:"Un día de Anna", lines:[
    ["N","Me llamo Anna y soy estudiante de segundo año.","Меня зовут Анна, я студентка второго курса."],
    ["N","Entre semana me levanto a las siete.","В будни я встаю в семь."],
    ["N","Primero me ducho y luego desayuno café con tostadas.","Сначала принимаю душ, потом завтракаю кофе с тостами."],
    ["N","A las ocho y media salgo de casa y voy a la universidad en metro.","В полдевятого выхожу из дома и еду в университет на метро."],
    ["N","Tengo clases hasta las tres.","Пары у меня до трёх."],
    ["N","Mi asignatura favorita es el español, porque la profesora es muy simpática.","Мой любимый предмет — испанский, потому что преподавательница очень милая."],
    ["N","Normalmente como en la cafetería con mis amigas.","Обычно я обедаю в кафетерии с подругами."],
    ["N","Por la tarde estudio en la biblioteca o hago los deberes en casa.","Днём занимаюсь в библиотеке или делаю домашку дома."],
    ["N","Dos veces por semana voy a clase de baile.","Два раза в неделю хожу на танцы."],
    ["N","Por la noche ceno con mi familia y juego con mi gata.","Вечером ужинаю с семьёй и играю с кошкой."],
    ["N","Antes de dormir leo un poco o veo una serie en español.","Перед сном немного читаю или смотрю сериал на испанском."],
    ["N","Normalmente me acuesto a las doce.","Обычно ложусь в двенадцать."]]},
  {level:4, id:"es11", title:"Mi fin de semana", lines:[
    ["N","El fin de semana pasado fue muy especial.","Прошлые выходные были особенными."],
    ["N","El sábado celebré mi cumpleaños.","В субботу я отмечала день рождения."],
    ["N","Por la mañana mi madre preparó un desayuno enorme.","Утром мама приготовила огромный завтрак."],
    ["N","Después mis amigas me llamaron y me invitaron a comer.","Потом позвонили подруги и пригласили меня пообедать."],
    ["N","Comimos en un restaurante mexicano en el centro.","Мы поели в мексиканском ресторане в центре."],
    ["N","Me regalaron un libro y una taza con un gato. ¡Me encantó!","Мне подарили книгу и кружку с котиком. Я в восторге!"],
    ["N","Por la noche fuimos a un concierto.","Вечером мы пошли на концерт."],
    ["N","Bailamos y cantamos mucho.","Мы много танцевали и пели."],
    ["N","Volví a casa a las dos de la mañana, muy cansada pero muy feliz.","Я вернулась домой в два часа ночи — очень уставшая, но очень счастливая."],
    ["N","El domingo no hice nada: dormí, leí y vi películas.","В воскресенье я ничего не делала: спала, читала и смотрела фильмы."],
    ["N","Fue un fin de semana perfecto.","Это были идеальные выходные."]]},
  {level:4, id:"es12", title:"Erasmus en Salamanca", lines:[
    ["N","El año pasado estudié un semestre en Salamanca.","В прошлом году я семестр училась в Саламанке."],
    ["N","Al principio fue difícil, porque la gente habla muy rápido.","Сначала было трудно, потому что люди говорят очень быстро."],
    ["N","Viví en un piso con dos chicas: una italiana y una española.","Я жила в квартире с двумя девушками: итальянкой и испанкой."],
    ["N","Todas las mañanas tuve clases en la universidad.","Каждое утро у меня были пары в университете."],
    ["N","Por las tardes paseamos por la Plaza Mayor, que es preciosa.","Днём мы гуляли по площади Майор — она прекрасна."],
    ["N","Probé muchos platos nuevos, pero mi favorito fue el jamón.","Я попробовала много новых блюд, но любимым стал хамон."],
    ["N","En diciembre hizo mucho frío, ¡casi como en Moscú!","В декабре было очень холодно — почти как в Москве!"],
    ["N","Hice muchos amigos de todo el mundo.","Я подружилась с людьми со всего мира."],
    ["N","Ahora hablo español mucho mejor.","Теперь я говорю по-испански гораздо лучше."],
    ["N","Este año todavía no he vuelto a España, pero en verano voy a visitar a mis amigas.","В этом году я ещё не возвращалась в Испанию, но летом собираюсь навестить подруг."]]}
];
window.TRACK_LEVELS_ES = {1:"Короткие фразы", 2:"Короткие диалоги", 3:"Длинные диалоги", 4:"Истории"};
