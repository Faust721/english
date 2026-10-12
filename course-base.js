// Курс «Основа» — английский с нуля (A0 → A2): грамматика + базовая разговорная речь.
// Формат заданий тот же, что в course.js. После «Основы» — ветки «Путешествия» и «IT».

window.COURSE_BASE = [
/* ======================= БЛОК 1 ======================= */
{
  id: "bb1", title: "Старт", note: "Звуки, to be, артикли",
  lessons: [
  {
    id: "b1", icon: "hand", title: "Звуки и первые фразы",
    goals: ["Узнать, как звучат английские звуки, которых нет в русском", "Здороваться, благодарить и извиняться", "Понимать самые частые слова"],
    summary: ["th — кончик языка между зубами: thank, this", "w — губы трубочкой: what, we", "Звонкие на конце не оглушаем: good, bag", "Hello · Thank you · Sorry · Excuse me", "Yes / No / Please"],
    phrases: [["hello","привет"],["yes","да"],["no","нет"],["please","пожалуйста (прошу)"],["thank you","спасибо"],["sorry","извините (виноват)"],["excuse me","простите (обратиться)"],["good","хороший"],["bad","плохой"],["goodbye","до свидания"]],
    steps: [
      {t:"tip", title:"Звуки, которых нет в русском", html:`<p>Английские слова часто читаются не так, как пишутся, поэтому <b>каждое новое слово сразу слушай</b> — кнопка 🔊.</p><ul><li><b>th</b> — кончик языка между зубами: <i>thank, this</i></li><li><b>w</b> — губы трубочкой, короткое «у»: <i>we, what</i></li><li><b>h</b> — лёгкий выдох, а не русское «х»: <i>hello</i></li><li><b>r</b> — язык не вибрирует, а загибается назад: <i>red</i></li></ul>`},
      {t:"tip", title:"Долгие гласные и звонкий конец", html:`<p>Долгота гласной меняет смысл: <b>ship</b> (корабль) и <b>sheep</b> (овца), <b>live</b> (жить) и <b>leave</b> (уходить).</p><p>Звонкие согласные на конце <b>не оглушаются</b>: <i>good</i> — «гуд», а не «гут»; <i>bag</i> — «бэг», а не «бэк».</p>`},
      {t:"dictation", en:"hello", ru:"привет"},
      {t:"match", pairs:[["yes","да"],["no","нет"],["please","пожалуйста"],["thank you","спасибо"]]},
      {t:"pick", q:"В каком слове звук th?", options:["thank","tank","sank"], a:0, why:"th — язык между зубами: thank."},
      {t:"pick", q:"Хочешь обратиться к незнакомому человеку:", options:["Excuse me…","Sorry…","Goodbye…"], a:0},
      {t:"pick", q:"Ты случайно наступил человеку на ногу:", options:["Sorry!","Excuse me?","Please!"], a:0},
      {t:"bank", ru:"Большое спасибо!", text:"[Thank] [you] very much!", words:["Please","me"]},
      {t:"listen", lines:[["A","Excuse me!"],["B","Yes?"],["A","Is this your bag?"],["B","Oh, yes! Thank you very much!"],["A","You're welcome."]], q:"Что случилось?", options:["Человеку вернули сумку","Человек спросил дорогу","Человек извинился"], a:0},
      {t:"gap", ru:"До свидания!", text:"Good[bye]!", hint:true},
      {t:"order", ru:"Да, пожалуйста.", en:"Yes, please."},
      {t:"translate", ru:"Нет, спасибо.", a:["No, thank you.","No, thanks."]},
      {t:"dictation", en:"good morning", ru:"доброе утро"},
      {t:"speak", en:"Thank you very much!", ru:"Большое спасибо!"},
      {t:"speak", en:"Excuse me, please.", ru:"Простите, пожалуйста."},
      {t:"write", task:"Напиши три коротких фразы: поздоровайся, поблагодари и попрощайся.", min:4,
       need:[{label:"Приветствие", re:"\\b(hello|hi|good (morning|afternoon|evening))\\b"},{label:"Благодарность", re:"thank"},{label:"Прощание", re:"\\b(goodbye|bye|see you)\\b"}],
       sample:"Hello! Thank you very much! Goodbye!"},
      {t:"roleplay", title:"Ты обронил телефон, и тебя догоняет прохожий.", lines:[
        {s:"them", en:"Excuse me! Is this your phone?", ru:"Простите! Это ваш телефон?"},
        {s:"you", ru:"Ответь «да» и поблагодари", say:"Yes! Thank you very much!", re:"yes|thank"},
        {s:"them", en:"You're welcome. Have a good day!", ru:"Пожалуйста. Хорошего дня!"},
        {s:"you", ru:"Попрощайся", say:"Thanks, you too. Goodbye!", re:"bye|you too|thank"}
      ]}
    ]
  },
  {
    id: "b2", icon: "passport", title: "Глагол to be",
    goals: ["Спрягать am / is / are", "Представиться и рассказать о себе", "Задавать вопросы и отрицать с to be"],
    summary: ["I am · he / she / it is · you / we / they are", "Сокращения: I'm, he's, she's, it's, we're, they're", "Отрицание: I'm not, isn't, aren't", "Вопрос: Are you…? Is she…?", "Ответ: Yes, I am. / No, I'm not."],
    phrases: [["My name is Anna.","Меня зовут Анна."],["I'm from Russia.","Я из России."],["I'm a student.","Я студент."],["I'm 25.","Мне 25 лет."],["Are you OK?","Ты в порядке?"],["He's my friend.","Он мой друг."],["We aren't busy.","Мы не заняты."],["Where are you from?","Откуда ты?"],["Nice to meet you.","Приятно познакомиться."]],
    steps: [
      {t:"tip", title:"Зачем нужен to be", html:`<p>По-русски можно сказать «Я студент» — без глагола. В английском так нельзя: в каждом предложении нужен глагол. Его роль играет <b>to be</b> — «быть, являться, находиться».</p><p><i>I <b>am</b> a student.</i> — Я (есть) студент.<br><i>She <b>is</b> at home.</i> — Она (находится) дома.</p>`},
      {t:"tip", title:"Три формы", html:`<table class="gtable"><tr><td>I</td><td><b>am</b></td><td>I'm</td></tr><tr><td>he / she / it</td><td><b>is</b></td><td>he's, she's, it's</td></tr><tr><td>you / we / they</td><td><b>are</b></td><td>you're, we're, they're</td></tr></table><p class="note"><b>am</b> — только с I, <b>is</b> — с одним человеком или предметом, <b>are</b> — со всеми остальными.</p>`},
      {t:"match", pairs:[["I","am"],["he","is"],["they","are"],["it's","it is"]]},
      {t:"pick", q:"She ___ a teacher.", options:["am","is","are"], a:1, why:"she — один человек → is."},
      {t:"pick", q:"We ___ friends.", options:["am","is","are"], a:2, why:"we — несколько → are."},
      {t:"gap", ru:"Я устал.", text:"I [am] tired.", hint:true},
      {t:"gap", ru:"Они дома.", text:"They [are] at home."},
      {t:"tip", title:"Отрицание и вопрос", html:`<p><b>Отрицание</b>: ставим <b>not</b> после глагола: <i>He is <b>not</b> at home.</i> → <i>He <b>isn't</b> at home.</i></p><p><b>Вопрос</b>: глагол переезжает <b>в начало</b>: <i>You are a doctor.</i> → <i><b>Are</b> you a doctor?</i></p><p>Короткий ответ: <b>Yes, I am.</b> / <b>No, I'm not.</b></p>`},
      {t:"order", ru:"Ты дома?", en:"Are you at home?"},
      {t:"order", ru:"Они не студенты.", en:"They are not students.", extra:["is"]},
      {t:"pick", q:"«Are you a student?» — Да.", options:["Yes, I am.","Yes, I is.","Yes, you are."], a:0},
      {t:"listen", lines:[["A","Hi! I'm Tom. What's your name?"],["B","Hi, Tom! I'm Olga. I'm from Russia."],["A","Nice to meet you, Olga. Are you a student?"],["B","No, I'm not. I'm a designer."]], q:"Кем работает Ольга?", options:["Дизайнером","Студенткой","Учителем"], a:0},
      {t:"translate", ru:"Он врач.", a:["He is a doctor.","He's a doctor."]},
      {t:"translate", ru:"Я не устал.", a:["I am not tired.","I'm not tired."]},
      {t:"dictation", en:"Where are you from?", ru:"Откуда ты?"},
      {t:"speak", en:"My name is Anna. I'm from Russia.", ru:"Меня зовут Анна. Я из России."},
      {t:"write", task:"Расскажи о себе: имя, откуда ты, кто ты по профессии, сколько лет — и одно предложение с отрицанием (I'm not…).", min:12,
       need:[{label:"I am / I'm", re:"\\bi am\\b"},{label:"Откуда (from…)", re:"\\bfrom [a-z]+"},{label:"Отрицание (I'm not / isn't / aren't)", re:"\\bnot\\b"}],
       sample:"My name is Ivan. I'm from Russia. I'm 25. I'm a manager. I'm not a student."},
      {t:"roleplay", title:"Знакомство на конференции.", lines:[
        {s:"them", en:"Hi! I'm Kate. What's your name?", ru:"Привет! Я Кейт. Как тебя зовут?"},
        {s:"you", ru:"Назови своё имя", say:"Hi, Kate! I'm Ivan.", re:"\\bi am\\b|my name is|call me"},
        {s:"them", en:"Nice to meet you! Where are you from?", ru:"Приятно познакомиться! Откуда ты?"},
        {s:"you", ru:"Скажи, откуда ты", say:"I'm from Russia.", re:"\\bfrom\\b|russia"},
        {s:"them", en:"Are you a student?", ru:"Ты студент?"},
        {s:"you", ru:"Ответь коротко: да или нет", say:"No, I'm not. I'm a manager.", re:"\\byes\\b|\\bno\\b|\\bi am\\b"}
      ]}
    ]
  },
  {
    id: "b3", icon: "book", title: "Артикли, множественное, this / that",
    goals: ["Ставить a / an / the", "Образовывать множественное число", "Показывать на вещи: this, that, these, those"],
    summary: ["a book, an apple — один, какой-то", "the — тот самый, о котором уже знаем", "books, boxes, cities; man → men, child → children", "this / these — рядом, that / those — далеко", "What is this? — It's a…"],
    phrases: [["a book","(какая-то) книга"],["an apple","яблоко"],["the window","(это) окно"],["two cats","две кошки"],["children","дети"],["This is my phone.","Это мой телефон."],["Those are my shoes.","Вон те — мои туфли."],["What is this?","Что это?"]],
    steps: [
      {t:"tip", title:"A и an — «один, какой-то»", html:`<p>Перед одним предметом, который можно посчитать, ставится <b>a</b> или <b>an</b>.</p><ul><li><b>a</b> — перед согласным звуком: <i>a book, a car</i></li><li><b>an</b> — перед гласным звуком: <i>an apple, an egg</i></li></ul><p class="note">Важен звук, а не буква: <i>an hour</i> (h не читается), но <i>a university</i> (звучит «ю»).</p>`},
      {t:"pick", q:"___ apple", options:["a","an"], a:1},
      {t:"pick", q:"___ university", options:["a","an"], a:0, why:"university начинается со звука «ю» — это согласный звук."},
      {t:"tip", title:"The — «тот самый»", html:`<p><b>the</b> — когда понятно, о каком именно предмете речь: он уже упоминался или он единственный.</p><p><i>I have <b>a</b> cat. <b>The</b> cat is black.</i> — У меня есть кошка. (Эта) кошка чёрная.</p><p><i>Open <b>the</b> door, please.</i> — Открой дверь (вот эту).</p>`},
      {t:"pick", q:"Open ___ window, please. (вот это окно)", options:["the","a","an"], a:0},
      {t:"tip", title:"Множественное число", html:`<p>Обычно <b>+s</b>: book → book<b>s</b>. После s, sh, ch, x — <b>+es</b>: box → box<b>es</b>. Согласная + y → <b>-ies</b>: city → cit<b>ies</b>.</p><p>Исключения: man → <b>men</b>, woman → <b>women</b>, child → <b>children</b>, person → <b>people</b>.</p><p class="note">Во множественном числе a/an не ставится: <i>two books</i>.</p>`},
      {t:"gap", ru:"один город — два города", text:"one city — two [cities]", hint:true},
      {t:"gap", ru:"один ребёнок — трое детей", text:"one child — three [children]"},
      {t:"match", pairs:[["box","boxes"],["man","men"],["person","people"],["woman","women"]]},
      {t:"tip", title:"This, that, these, those", html:`<table class="gtable"><tr><td></td><td>рядом</td><td>далеко</td></tr><tr><td>один</td><td><b>this</b></td><td><b>that</b></td></tr><tr><td>много</td><td><b>these</b></td><td><b>those</b></td></tr></table><p><i><b>This is</b> my cat.</i> — Это моя кошка.<br><i><b>Those are</b> my shoes.</i> — Вон те — мои туфли.</p>`},
      {t:"pick", q:"___ are my keys. (они у меня в руке)", options:["These","This","Those"], a:0},
      {t:"bank", ru:"Это мой телефон, а вон те — мои ключи.", text:"[This] is my phone and [those] are my keys.", words:["These","that"]},
      {t:"listen", lines:[["A","What is that?"],["B","It's a museum. It's very old."],["A","And what are those?"],["B","Those are shops."]], q:"Что вон там (that)?", options:["Музей","Магазины","Парк"], a:0},
      {t:"order", ru:"Что это (вон там)?", en:"What is that?", extra:["those"]},
      {t:"translate", ru:"Это моя книга.", a:["This is my book.","It is my book.","It's my book."]},
      {t:"translate", ru:"Два яблока.", a:["Two apples."]},
      {t:"speak", en:"This is my phone and these are my keys.", ru:"Это мой телефон, а это мои ключи."},
      {t:"write", task:"Опиши три вещи вокруг себя: используй a / an, the и this / that (This is a lamp. The lamp is old…).", min:10,
       need:[{label:"a / an", re:"\\b(a|an)\\b"},{label:"the", re:"\\bthe\\b"},{label:"this / that / these / those", re:"\\b(this|that|these|those)\\b"}],
       sample:"This is a lamp. The lamp is old. That is an orange chair. These are my books."},
      {t:"roleplay", title:"Подруга помогает собрать вещи.", lines:[
        {s:"them", en:"Is this your bag?", ru:"Это твоя сумка?"},
        {s:"you", ru:"Скажи: да, это моя сумка", say:"Yes, it is. It's my bag.", re:"yes|my bag|it is"},
        {s:"them", en:"And what are these?", ru:"А это что?"},
        {s:"you", ru:"Скажи, что это твои ключи", say:"These are my keys.", re:"keys|these are|they are"},
        {s:"them", en:"OK. Is that your umbrella?", ru:"Ладно. А вон тот зонт твой?"},
        {s:"you", ru:"Скажи: нет, не твой", say:"No, it isn't.", re:"\\bno\\b|not"}
      ]}
    ]
  }],
  test: {
    id: "bt1", title: "Контрольная: старт",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Я студент.", a:["I am a student.","I'm a student."]},
        {t:"translate", ru:"Она не дома.", a:["She is not at home.","She isn't at home.","She's not at home."]},
        {t:"translate", ru:"Это мои ключи.", a:["These are my keys.","Those are my keys."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"They ___ from Spain.", options:["are","is","am"], a:0},
        {t:"pick", q:"___ hour", options:["an","a"], a:0, why:"h не читается — слово начинается с гласного звука."},
        {t:"bank", ru:"Ты врач? — Да.", text:"[Are] you a doctor? — Yes, I [am].", words:["Is","is"]},
        {t:"gap", ru:"одна женщина — две женщины", text:"one woman — two [women]"},
        {t:"gap", ru:"Он мой друг.", text:"He [is] my friend."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Откуда ты?", en:"Where are you from?", extra:["is"]},
        {t:"order", ru:"Вон те туфли — мои.", en:"Those shoes are mine.", extra:["that"]}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Hello! Are you Mr Brown?"],["B","No, I'm not. I'm Mr Green."],["A","Oh, sorry! Is Mr Brown here?"],["B","Yes, he is. He's in room five."]], q:"Где мистер Браун?", options:["В комнате 5","Его нет","В комнате 9"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Hello! My name is Ivan. I'm from Russia.", ru:"Привет! Меня зовут Иван. Я из России."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Представь себя и друга: как вас зовут, откуда вы, кто вы. Используй am, is, are и одно отрицание.", min:15,
         need:[{label:"am / is / are", re:"\\b(am|is|are)\\b"},{label:"Друг (he / she / my friend)", re:"\\b(he|she|my friend)\\b"},{label:"Отрицание (not)", re:"\\bnot\\b"}],
         sample:"My name is Ivan. I'm from Russia. My friend is Anna. She is a designer. We are not students."}
      ]}
    ]
  }
},
/* ======================= БЛОК 2 ======================= */
{
  id: "bb2", title: "Мой мир", note: "have, местоимения, there is",
  lessons: [
  {
    id: "b4", icon: "home", title: "Have: семья и вещи",
    goals: ["Говорить, что у кого есть: I have, she has", "Отрицать и спрашивать: don't have, Do you have…?", "Рассказать о семье"],
    summary: ["I / you / we / they have · he / she / it has", "I don't have… · She doesn't have…", "Do you have…? — Yes, I do. / No, I don't.", "После does / doesn't — снова have", "mother, father, sister, brother, wife, husband, son, daughter"],
    phrases: [["I have a brother.","У меня есть брат."],["She has two kids.","У неё двое детей."],["I don't have a car.","У меня нет машины."],["Do you have a pen?","У тебя есть ручка?"],["Yes, I do.","Да (есть)."],["My mother is a teacher.","Моя мама — учительница."],["I have a question.","У меня вопрос."],["We don't have time.","У нас нет времени."]],
    steps: [
      {t:"tip", title:"«У меня есть» = I have", html:`<p>По-русски — «У меня есть брат». По-английски говорят «Я имею брата»: <b>I have a brother.</b></p><table class="gtable"><tr><td>I / you / we / they</td><td><b>have</b></td></tr><tr><td>he / she / it</td><td><b>has</b></td></tr></table>`},
      {t:"match", pairs:[["mother","мама"],["father","папа"],["sister","сестра"],["brother","брат"]]},
      {t:"pick", q:"She ___ a sister.", options:["have","has"], a:1},
      {t:"pick", q:"We ___ a question.", options:["have","has"], a:0},
      {t:"tip", title:"Нет и вопрос", html:`<p>Отрицание и вопрос строятся с помощником <b>do / does</b>:</p><p><i>I <b>don't have</b> time.</i> — У меня нет времени.<br><i>He <b>doesn't have</b> a car.</i> — У него нет машины.<br><i><b>Do</b> you <b>have</b> a pen?</i> — У тебя есть ручка?</p><p class="note">После does / doesn't — снова <b>have</b>, а не has: окончание уже «забрал» does.</p>`},
      {t:"gap", ru:"У него нет денег.", text:"He doesn't [have] money.", hint:true},
      {t:"bank", ru:"У тебя есть дети? — Да.", text:"[Do] you have kids? — Yes, I [do].", words:["Does","have"]},
      {t:"order", ru:"У тебя есть идея?", en:"Do you have an idea?", extra:["has"]},
      {t:"match", pairs:[["son","сын"],["daughter","дочь"],["wife","жена"],["husband","муж"]]},
      {t:"listen", lines:[["A","Do you have brothers or sisters?"],["B","I have one sister. She's twenty."],["A","Does she have kids?"],["B","No, she doesn't. But she has a dog!"]], q:"Что есть у сестры?", options:["Собака","Двое детей","Кошка"], a:0},
      {t:"translate", ru:"У меня нет машины.", a:["I don't have a car.","I do not have a car.","I have no car."]},
      {t:"translate", ru:"У неё двое детей.", a:["She has two kids.","She has two children."]},
      {t:"dictation", en:"Do you have a pen?", ru:"У тебя есть ручка?"},
      {t:"speak", en:"I have a sister and a brother.", ru:"У меня есть сестра и брат."},
      {t:"write", task:"Расскажи о своей семье: кто у тебя есть, что у них есть и чего нет (минимум одно has и одно don't / doesn't have).", min:15,
       need:[{label:"have", re:"\\bhave\\b"},{label:"has", re:"\\bhas\\b"},{label:"Отрицание (don't / doesn't have)", re:"(do|does) not have|have no|has no"}],
       sample:"I have a big family. I have a brother and a sister. My brother has a son. My sister doesn't have kids, but she has a cat."},
      {t:"roleplay", title:"Коллега расспрашивает о семье.", lines:[
        {s:"them", en:"Do you have a big family?", ru:"У тебя большая семья?"},
        {s:"you", ru:"Скажи, кто у тебя есть", say:"Not very big. I have a sister.", re:"\\bhave\\b|sister|brother|family"},
        {s:"them", en:"Does she have kids?", ru:"У неё есть дети?"},
        {s:"you", ru:"Ответь: да, один сын", say:"Yes, she does. She has a son.", re:"yes|no|does|has"},
        {s:"them", en:"Nice! And do you have pets?", ru:"Здорово! А у тебя есть питомцы?"},
        {s:"you", ru:"Ответь, есть ли у тебя питомцы", say:"Yes, I have a cat.", re:"\\byes\\b|\\bno\\b|\\bhave\\b|cat|dog"}
      ]}
    ]
  },
  {
    id: "b5", icon: "chat", title: "Местоимения: I, me, my",
    goals: ["Различать I, me, my, mine", "Говорить, чьё это: Anna's phone", "Спрашивать: Whose…?"],
    summary: ["I → me → my → mine: я → меня → мой → мой (без слова)", "he / him / his · she / her / her", "we / us / our · they / them / their", "Anna's phone — телефон Анны", "Whose bag is this? — It's mine."],
    phrases: [["This is my phone.","Это мой телефон."],["Call me, please.","Позвони мне, пожалуйста."],["It's mine.","Это моё."],["Her name is Kate.","Её зовут Кейт."],["I know him.","Я его знаю."],["Their house is big.","Их дом большой."],["Whose bag is this?","Чья это сумка?"],["It's Anna's car.","Это машина Анны."]],
    steps: [
      {t:"tip", title:"Четыре формы местоимений", html:`<table class="gtable"><tr><td>кто</td><td>кого / кому</td><td>чей (+слово)</td><td>чей (без слова)</td></tr><tr><td>I</td><td>me</td><td>my</td><td>mine</td></tr><tr><td>you</td><td>you</td><td>your</td><td>yours</td></tr><tr><td>he</td><td>him</td><td>his</td><td>his</td></tr><tr><td>she</td><td>her</td><td>her</td><td>hers</td></tr><tr><td>we</td><td>us</td><td>our</td><td>ours</td></tr><tr><td>they</td><td>them</td><td>their</td><td>theirs</td></tr></table><p><i><b>I</b> love <b>my</b> cat. The cat loves <b>me</b>. The cat is <b>mine</b>.</i></p>`},
      {t:"pick", q:"Call ___, please. (мне)", options:["me","I","my"], a:0},
      {t:"pick", q:"This is ___ sister. (его)", options:["his","him","he"], a:0},
      {t:"pick", q:"— Whose phone is this? — It's ___. (мой)", options:["mine","my","me"], a:0},
      {t:"match", pairs:[["she","her"],["we","our"],["they","their"],["he","his"]]},
      {t:"gap", ru:"Я их знаю.", text:"I know [them].", hint:true},
      {t:"gap", ru:"Наш офис маленький.", text:"[Our] office is small."},
      {t:"tip", title:"Чей? — 's", html:`<p>Чтобы сказать «чей», добавь <b>'s</b> к имени: <i>Anna<b>'s</b> phone</i> — телефон Анны, <i>my brother<b>'s</b> car</i> — машина моего брата.</p><p>Вопрос: <b>Whose</b> … is this? — Чей это …?</p>`},
      {t:"bank", ru:"Это машина Тома, а не моя.", text:"It's [Tom's] car, not [mine].", words:["Tom","my"]},
      {t:"listen", lines:[["A","Whose keys are these?"],["B","I think they're Mark's."],["A","No, his keys are in his bag."],["B","Oh! Then they're mine. Sorry!"]], q:"Чьи это ключи?", options:["Того, кто говорит вторым","Марка","Ничьи"], a:0},
      {t:"order", ru:"Чья это сумка?", en:"Whose bag is this?", extra:["who"]},
      {t:"translate", ru:"Её зовут Кейт.", a:["Her name is Kate.","Her name's Kate."]},
      {t:"translate", ru:"Это моё.", a:["It's mine.","It is mine.","This is mine."]},
      {t:"dictation", en:"Their house is big.", ru:"Их дом большой."},
      {t:"speak", en:"This is my sister. Her name is Kate.", ru:"Это моя сестра. Её зовут Кейт."},
      {t:"write", task:"Опиши фото с друзьями или семьёй: кто это, как их зовут, что у них есть (his, her, their, 's).", min:15,
       need:[{label:"his / her", re:"\\b(his|her)\\b"},{label:"their / our", re:"\\b(their|our)\\b"},{label:"'s (Anna's…)", re:"[a-z]'s\\b(?! (a|an|the|my|not)\\b)"}],
       sample:"This is my friend Tom and his wife Kate. Her job is interesting. Their house is in London. Tom's car is red."},
      {t:"roleplay", title:"На вечеринке нашлась чужая куртка.", lines:[
        {s:"them", en:"Whose jacket is this?", ru:"Чья это куртка?"},
        {s:"you", ru:"Скажи, что не твоя", say:"It isn't mine.", re:"not mine|isn t mine|is not mine|no"},
        {s:"them", en:"Maybe it's Anna's?", ru:"Может, Анны?"},
        {s:"you", ru:"Скажи: нет, её куртка красная", say:"No, her jacket is red.", re:"\\bher\\b|\\bno\\b"},
        {s:"them", en:"Then it's Tom's. I'll call him.", ru:"Значит, Тома. Я ему позвоню."},
        {s:"you", ru:"Согласись: «Да, позвони ему»", say:"Yes, call him.", re:"\\bhim\\b|yes|ok|okay"}
      ]}
    ]
  },
  {
    id: "b6", icon: "map", title: "There is / there are",
    goals: ["Говорить, что где есть: there is, there are", "Использовать some / any", "Предлоги места: in, on, under, next to, between"],
    summary: ["There is a bank. There are two banks.", "Is there…? Are there…? — Yes, there is / are.", "some — в утверждении, any — в вопросе и отрицании", "in, on, under, next to, between, opposite", "There isn't any milk."],
    phrases: [["There is a park near my house.","Рядом с моим домом есть парк."],["There are two windows.","Здесь два окна."],["Is there a toilet here?","Здесь есть туалет?"],["There isn't any milk.","Молока нет."],["The keys are on the table.","Ключи на столе."],["The cat is under the bed.","Кошка под кроватью."],["The bank is next to the shop.","Банк рядом с магазином."],["between the school and the park","между школой и парком"]],
    steps: [
      {t:"tip", title:"There is / there are — «есть, находится»", html:`<p>Когда сообщаем, что что-то где-то <b>есть</b>:</p><p><i><b>There is</b> a park near my house.</i> — Рядом с моим домом есть парк.<br><i><b>There are</b> two windows.</i> — Здесь (есть) два окна.</p><p>Вопрос: <i><b>Is there</b> a toilet?</i> Отрицание: <i>There <b>isn't</b> a bank.</i></p>`},
      {t:"pick", q:"___ three rooms in my flat.", options:["There are","There is","It is"], a:0},
      {t:"pick", q:"___ a café near here? — Yes, there is.", options:["Is there","Are there","There is"], a:0},
      {t:"tip", title:"Some и any", html:`<p><b>some</b> — «немного, несколько» в утверждении: <i>There are <b>some</b> apples.</i></p><p><b>any</b> — в вопросах и отрицаниях: <i>Are there <b>any</b> apples? There aren't <b>any</b> apples.</i></p>`},
      {t:"bank", ru:"В холодильнике нет молока, но есть сок.", text:"There isn't [any] milk, but there is [some] juice.", words:["a","many"]},
      {t:"tip", title:"Где? Предлоги места", html:`<p><b>in</b> — в, <b>on</b> — на, <b>under</b> — под, <b>next to</b> — рядом с, <b>between</b> — между, <b>opposite</b> — напротив, <b>behind</b> — за, <b>in front of</b> — перед.</p>`},
      {t:"match", pairs:[["under","под"],["between","между"],["next to","рядом с"],["opposite","напротив"]]},
      {t:"gap", ru:"Ключи на столе.", text:"The keys are [on] the table.", hint:true},
      {t:"gap", ru:"Кошка под кроватью.", text:"The cat is [under] the bed."},
      {t:"listen", lines:[["A","Is there a pharmacy near here?"],["B","Yes, there is. It's next to the bank."],["A","Are there any good cafés?"],["B","There are two cafés opposite the park."]], q:"Где аптека?", options:["Рядом с банком","Напротив парка","За кафе"], a:0},
      {t:"order", ru:"Рядом с моим домом есть парк.", en:"There is a park near my house."},
      {t:"translate", ru:"Здесь есть туалет?", a:["Is there a toilet here?","Is there a toilet?"]},
      {t:"translate", ru:"В комнате два окна.", a:["There are two windows in the room.","The room has two windows."]},
      {t:"dictation", en:"There isn't any milk.", ru:"Молока нет."},
      {t:"speak", en:"There is a park next to my house.", ru:"Рядом с моим домом есть парк."},
      {t:"write", task:"Опиши свою комнату или район: что там есть и где оно находится (there is / there are + предлоги).", min:15,
       need:[{label:"there is", re:"there is|there s\\b|is there"},{label:"there are", re:"there are|are there"},{label:"Предлог места", re:"\\b(in|on|under|next to|between|opposite|behind|in front of|near)\\b"}],
       sample:"There is a big window in my room. There are two chairs next to the table. My cat is under the bed."},
      {t:"roleplay", title:"Новый сосед спрашивает про район.", lines:[
        {s:"them", en:"Hi! Is there a supermarket near here?", ru:"Привет! Рядом есть супермаркет?"},
        {s:"you", ru:"Скажи: да, есть — рядом с банком", say:"Yes, there is. It's next to the bank.", re:"there is|yes|next to|near"},
        {s:"them", en:"Great. Are there any good cafés?", ru:"Отлично. А хорошие кафе есть?"},
        {s:"you", ru:"Скажи, что есть два кафе напротив парка", say:"There are two cafés opposite the park.", re:"there are|cafe|opposite|two"},
        {s:"them", en:"Thanks a lot!", ru:"Большое спасибо!"},
        {s:"you", ru:"Ответь «пожалуйста»", say:"You're welcome!", re:"welcome|no problem|sure"}
      ]}
    ]
  }],
  test: {
    id: "bt2", title: "Контрольная: мой мир",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"У меня есть сестра.", a:["I have a sister.","I've got a sister."]},
        {t:"translate", ru:"Это машина моего брата.", a:["It's my brother's car.","It is my brother's car.","This is my brother's car."]},
        {t:"translate", ru:"Рядом есть банк?", a:["Is there a bank near here?","Is there a bank nearby?","Is there a bank near?"]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"My brother ___ a new job.", options:["has","have","is"], a:0},
        {t:"pick", q:"Can you help ___? (нам)", options:["us","we","our"], a:0},
        {t:"bank", ru:"В комнате нет стульев, но есть стол.", text:"There aren't [any] chairs, but there [is] a table.", words:["some","are"]},
        {t:"gap", ru:"У неё нет машины.", text:"She doesn't [have] a car."},
        {t:"gap", ru:"Их офис рядом с парком.", text:"[Their] office is next to the park."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Чья это сумка?", en:"Whose bag is this?", extra:["who"]},
        {t:"order", ru:"Ключи под книгой.", en:"The keys are under the book.", extra:["is"]}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","This is my flat. There are two rooms."],["B","It's nice! Is there a balcony?"],["A","Yes, there is. It's next to the kitchen."],["B","Whose bike is that?"],["A","It's my sister's. She has two bikes!"]], q:"Где балкон?", options:["Рядом с кухней","В спальне","Его нет"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"I have a brother. His name is Max.", ru:"У меня есть брат. Его зовут Макс."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Опиши свою квартиру и семью: что есть в квартире (there is / are), кто с тобой живёт и что у них есть (have / has, his / her).", min:20,
         need:[{label:"there is / there are", re:"there (is|are)"},{label:"have / has", re:"\\b(have|has)\\b"},{label:"his / her / their / our", re:"\\b(his|her|their|our)\\b"}],
         sample:"There are three rooms in my flat. There is a big kitchen. I live with my wife. She has a cat. Her cat is very lazy."}
      ]}
    ]
  }
},
/* ======================= БЛОК 3 ======================= */
{
  id: "bb3", title: "Каждый день", note: "Present Simple и Continuous",
  lessons: [
  {
    id: "b7", icon: "clock", title: "Present Simple: привычки",
    goals: ["Рассказывать, что делаешь обычно", "Ставить -s после he / she / it", "Использовать always, usually, often, never"],
    summary: ["I work · she works (+s после he / she / it)", "watch → watches, go → goes, study → studies", "always · usually · often · sometimes · never", "Слова частоты стоят перед глаголом, но после am / is / are", "Время: at 7 o'clock, in the morning, on Monday"],
    phrases: [["I get up at seven.","Я встаю в семь."],["She works from home.","Она работает из дома."],["I usually drink coffee.","Я обычно пью кофе."],["He never eats breakfast.","Он никогда не завтракает."],["We often watch films.","Мы часто смотрим фильмы."],["on Monday","в понедельник"],["in the evening","вечером"],["every day","каждый день"]],
    steps: [
      {t:"tip", title:"Когда нужен Present Simple", html:`<p>Для того, что происходит <b>регулярно</b> или <b>всегда правда</b>:</p><p><i>I <b>drink</b> coffee every day.</i> — Я пью кофе каждый день.<br><i>They <b>live</b> in Moscow.</i> — Они живут в Москве.</p>`},
      {t:"tip", title:"Главное правило: -s", html:`<p>С <b>he, she, it</b> к глаголу добавляется <b>-s</b>:</p><table class="gtable"><tr><td>I / you / we / they</td><td>work</td></tr><tr><td>he / she / it</td><td>work<b>s</b></td></tr></table><p>Особые случаи: watch → watch<b>es</b>, go → go<b>es</b>, study → stud<b>ies</b>, have → <b>has</b>.</p>`},
      {t:"pick", q:"She ___ in London.", options:["lives","live","living"], a:0},
      {t:"pick", q:"They ___ tea.", options:["like","likes"], a:0},
      {t:"gap", ru:"Мой брат работает каждый день.", text:"My brother [works] every day.", hint:true},
      {t:"gap", ru:"Он ходит в спортзал.", text:"He [goes] to the gym."},
      {t:"gap", ru:"Она учит английский.", text:"She [studies] English."},
      {t:"tip", title:"Как часто?", html:`<p><b>always</b> — всегда, <b>usually</b> — обычно, <b>often</b> — часто, <b>sometimes</b> — иногда, <b>never</b> — никогда.</p><p>Стоят <b>перед</b> глаголом: <i>I <b>usually</b> drink tea.</i><br>Но <b>после</b> am / is / are: <i>She <b>is often</b> tired.</i></p>`},
      {t:"order", ru:"Я никогда не пью кофе.", en:"I never drink coffee.", extra:["don't"]},
      {t:"order", ru:"Она часто устаёт.", en:"She is often tired.", extra:["often"]},
      {t:"listen", lines:[["A","What time do you get up?"],["B","I usually get up at seven. Then I have breakfast."],["A","And your husband?"],["B","He gets up at six. He goes to the gym every morning."]], q:"Что муж делает каждое утро?", options:["Ходит в спортзал","Спит до семи","Готовит завтрак"], a:0},
      {t:"translate", ru:"Она работает из дома.", a:["She works from home."]},
      {t:"translate", ru:"Мы живём в Москве.", a:["We live in Moscow."]},
      {t:"dictation", en:"He never eats breakfast.", ru:"Он никогда не завтракает."},
      {t:"speak", en:"I usually get up at seven and drink coffee.", ru:"Я обычно встаю в семь и пью кофе."},
      {t:"write", task:"Опиши свой обычный день (5–6 предложений) и день знакомого человека (2 предложения с he / she + -s). Используй слова частоты.", min:25,
       need:[{label:"Слово частоты (usually, often…)", re:"\\b(always|usually|often|sometimes|never)\\b"},{label:"he / she + глагол на -s", re:"\\b(he|she|my [a-z]+) (always |usually |often |sometimes |never )?[a-z]+s\\b"},{label:"Время (at 7, in the morning…)", re:"\\bat \\d|\\bat (six|seven|eight|nine|ten|eleven|twelve|one|two|three|four|five)\\b|in the (morning|evening|afternoon)|every day"}],
       sample:"I usually get up at seven. I have coffee and go to work. I work from nine to six. In the evening I often read. I never go to bed early. My wife gets up at eight. She works from home."},
      {t:"roleplay", title:"Коллега расспрашивает о твоём дне.", lines:[
        {s:"them", en:"What time do you usually get up?", ru:"Во сколько ты обычно встаёшь?"},
        {s:"you", ru:"Скажи, во сколько встаёшь", say:"I usually get up at seven.", re:"get up|wake up|\\bat\\b|\\d|seven|eight|six"},
        {s:"them", en:"Do you have breakfast?", ru:"Ты завтракаешь?"},
        {s:"you", ru:"Ответь, что обычно ешь или пьёшь", say:"Yes, I usually have eggs and coffee.", re:"yes|no|have|eat|drink|coffee|tea|never|usually"},
        {s:"them", en:"How often do you go to the gym?", ru:"Как часто ходишь в спортзал?"},
        {s:"you", ru:"Ответь, используя often / sometimes / never", say:"I sometimes go on Saturdays.", re:"often|sometimes|never|always|usually|twice|once|every"}
      ]}
    ]
  },
  {
    id: "b8", icon: "chat", title: "Вопросы и отрицания",
    goals: ["Строить отрицания: don't, doesn't", "Задавать вопросы с do / does", "Использовать what, where, when, why, how, who"],
    summary: ["I don't like… · She doesn't like…", "Do you…? — Yes, I do. · Does she…? — No, she doesn't.", "После does / doesn't — глагол без -s", "Вопрос: слово + do/does + кто + глагол", "what · where · when · why · how · who"],
    phrases: [["I don't understand.","Я не понимаю."],["She doesn't speak English.","Она не говорит по-английски."],["Do you speak English?","Ты говоришь по-английски?"],["Where do you live?","Где ты живёшь?"],["What do you do?","Чем ты занимаешься?"],["Why do you ask?","Почему ты спрашиваешь?"],["How do you say it in English?","Как это сказать по-английски?"],["Who knows?","Кто знает?"]],
    steps: [
      {t:"tip", title:"Помощники do и does", html:`<table class="gtable"><tr><td>I / you / we / they</td><td><b>do</b> / <b>don't</b></td></tr><tr><td>he / she / it</td><td><b>does</b> / <b>doesn't</b></td></tr></table><p><i>I <b>don't</b> understand.</i> — Я не понимаю.<br><i>She <b>doesn't</b> speak English.</i> — Она не говорит по-английски.</p><p class="note">Если есть does — окончание -s у глагола пропадает: <i>She doesn't speak</i> (не speaks).</p>`},
      {t:"pick", q:"He ___ know.", options:["doesn't","don't","isn't"], a:0},
      {t:"gap", ru:"Я не хочу кофе.", text:"I [don't] want coffee.", hint:true},
      {t:"pick", q:"She doesn't ___ meat.", options:["eat","eats","eating"], a:0},
      {t:"tip", title:"Как строить вопрос", html:`<p>Схема: <b>(вопросительное слово) + do / does + кто + глагол</b></p><p><i><b>Do</b> you speak English?</i><br><i><b>Where do</b> you live?</i><br><i><b>Why does</b> she work at night?</i></p><p>Вопросительные слова: <b>what</b> — что, <b>where</b> — где, <b>when</b> — когда, <b>why</b> — почему, <b>how</b> — как, <b>who</b> — кто.</p>`},
      {t:"match", pairs:[["where","где"],["when","когда"],["why","почему"],["how","как"]]},
      {t:"order", ru:"Где ты работаешь?", en:"Where do you work?", extra:["does"]},
      {t:"order", ru:"Она понимает?", en:"Does she understand?"},
      {t:"pick", q:"«Does he like tea?» — Нет.", options:["No, he doesn't.","No, he don't.","No, he isn't."], a:0},
      {t:"bank", ru:"Когда начинается фильм?", text:"[When] [does] the film start?", words:["Where","do"]},
      {t:"listen", lines:[["A","Excuse me, do you speak English?"],["B","Yes, a little."],["A","Where does this bus go?"],["B","To the city centre. Why?"],["A","I need the museum."],["B","Then take this bus!"]], q:"Куда идёт автобус?", options:["В центр города","В аэропорт","В музей"], a:0},
      {t:"translate", ru:"Я не понимаю.", a:["I don't understand.","I do not understand."]},
      {t:"translate", ru:"Что ты делаешь по выходным?", a:["What do you do at the weekend?","What do you do on weekends?","What do you do at weekends?","What do you do on the weekend?"]},
      {t:"dictation", en:"How do you say it in English?", ru:"Как это сказать по-английски?"},
      {t:"speak", en:"Sorry, I don't understand. Can you repeat?", ru:"Извините, я не понимаю. Можете повторить?"},
      {t:"write", task:"Напиши 5 вопросов новому знакомому (где живёт, чем занимается, что любит…) и 2 предложения о том, чего ты не делаешь.", min:20,
       need:[{label:"Вопрос с do / does", re:"\\b(do|does) (you|he|she|they|we)\\b"},{label:"Вопросительное слово", re:"\\b(what|where|when|why|how|who)\\b"},{label:"Отрицание (don't / doesn't)", re:"(do|does) not"}],
       sample:"Where do you live? What do you do? Do you like music? When do you get up? Why do you learn English? I don't like football. I don't drink coffee."},
      {t:"roleplay", title:"Ты знакомишься с новым коллегой и задаёшь вопросы сам.", lines:[
        {s:"them", en:"Hi, I'm new here. I'm Leo.", ru:"Привет, я тут новенький. Я Лео."},
        {s:"you", ru:"Спроси, где он живёт", say:"Hi, Leo! Where do you live?", re:"where do you live|where are you from|where do you"},
        {s:"them", en:"In the city centre. And you?", ru:"В центре. А ты?"},
        {s:"you", ru:"Ответь и спроси, любит ли он кофе", say:"Near the park. Do you like coffee?", re:"do you like|do you want|coffee"},
        {s:"them", en:"No, I don't. I drink tea.", ru:"Нет. Я пью чай."},
        {s:"you", ru:"Скажи, что ты тоже не пьёшь кофе", say:"I don't drink coffee too.", re:"\\bdo not\\b|either|neither|me too|too"}
      ]}
    ]
  },
  {
    id: "b9", icon: "star", title: "Present Continuous: сейчас",
    goals: ["Говорить о том, что происходит прямо сейчас", "Отличать «обычно» от «сейчас»", "Писать -ing правильно"],
    summary: ["am / is / are + глагол-ing", "I'm working now. — Я сейчас работаю.", "I work every day vs I'm working now", "write → writing, sit → sitting", "now · right now · at the moment · Look!"],
    phrases: [["I'm working now.","Я сейчас работаю."],["What are you doing?","Что ты делаешь?"],["She's talking on the phone.","Она говорит по телефону."],["It's raining.","Идёт дождь."],["We're waiting for you.","Мы тебя ждём."],["I'm not sleeping.","Я не сплю."],["Are you listening?","Ты слушаешь?"],["at the moment","в данный момент"]],
    steps: [
      {t:"tip", title:"Сейчас, в процессе", html:`<p>Когда действие идёт <b>прямо сейчас</b>: <b>am / is / are + глагол-ing</b>.</p><p><i>I <b>am reading</b>.</i> — Я читаю (сейчас).<br><i>She <b>is cooking</b>.</i> — Она готовит.<br><i>It <b>is raining</b>.</i> — Идёт дождь.</p>`},
      {t:"tip", title:"Обычно или сейчас?", html:`<p><i>I <b>work</b> in a bank.</i> — Я работаю в банке (вообще).<br><i>I <b>am working</b> now.</i> — Я сейчас работаю (занят в эту минуту).</p><p>Правописание: write → wri<b>ting</b> (немая e уходит), sit → si<b>tting</b> (согласная удваивается).</p>`},
      {t:"pick", q:"Look! It ___.", options:["is raining","rains","rain"], a:0},
      {t:"pick", q:"She usually ___ tea, but now she ___ coffee.", options:["drinks / is drinking","is drinking / drinks","drink / drinking"], a:0},
      {t:"gap", ru:"Они нас ждут.", text:"They [are] waiting for us.", hint:true},
      {t:"gap", ru:"Я пишу письмо.", text:"I am [writing] a letter."},
      {t:"gap", ru:"Он сидит у окна.", text:"He is [sitting] by the window."},
      {t:"bank", ru:"Ты меня слушаешь? — Да.", text:"[Are] you [listening] to me? — Yes.", words:["Do","listen"]},
      {t:"order", ru:"Что ты делаешь?", en:"What are you doing?", extra:["do"]},
      {t:"listen", lines:[["A","Hi! Can you talk?"],["B","Not really. I'm driving."],["A","Oh, sorry! Where are you going?"],["B","I'm going to the office. Call me in an hour."]], q:"Что сейчас делает второй человек?", options:["Ведёт машину","Работает в офисе","Спит"], a:0},
      {t:"translate", ru:"Я сейчас работаю.", a:["I'm working now.","I am working now.","I'm working right now."]},
      {t:"translate", ru:"Он не спит.", a:["He isn't sleeping.","He is not sleeping.","He's not sleeping."]},
      {t:"dictation", en:"We're waiting for you.", ru:"Мы тебя ждём."},
      {t:"speak", en:"Sorry, I'm busy. I'm working right now.", ru:"Извини, я занят. Я сейчас работаю."},
      {t:"write", task:"Опиши, что происходит вокруг тебя прямо сейчас (4–5 предложений), и одно предложение о том, что ты делаешь обычно.", min:18,
       need:[{label:"am / is / are + -ing", re:"\\b(am|is|are) (not )?[a-z]+ing\\b"},{label:"Ещё одно -ing", re:"([a-z]+ing\\b[\\s\\S]*){2}"},{label:"Обычно (Present Simple с usually / every…)", re:"usually|every|often|always|normally"}],
       sample:"I'm sitting at home. I'm writing in English. My cat is sleeping on the sofa. It's raining outside. I usually work in the evening, but now I'm learning."},
      {t:"roleplay", title:"Звонок друга в неудобный момент.", lines:[
        {s:"them", en:"Hi! What are you doing?", ru:"Привет! Что делаешь?"},
        {s:"you", ru:"Скажи, что готовишь ужин", say:"I'm cooking dinner.", re:"\\b(am|is|are) [a-z]+ing\\b|cooking"},
        {s:"them", en:"Oh, nice! Are you watching the match tonight?", ru:"О, круто! Будешь смотреть матч вечером?"},
        {s:"you", ru:"Ответь: да или нет", say:"No, I'm not. I'm working tonight.", re:"\\byes\\b|\\bno\\b|\\bam\\b"},
        {s:"them", en:"OK, talk later!", ru:"Ладно, поговорим позже!"},
        {s:"you", ru:"Попрощайся", say:"Bye! Talk later.", re:"bye|later|see you"}
      ]}
    ]
  }],
  test: {
    id: "bt3", title: "Контрольная: каждый день",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Она работает в банке.", a:["She works in a bank.","She works at a bank."]},
        {t:"translate", ru:"Где ты живёшь?", a:["Where do you live?"]},
        {t:"translate", ru:"Что ты сейчас делаешь?", a:["What are you doing now?","What are you doing right now?","What are you doing?"]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"My sister ___ coffee.", options:["doesn't drink","don't drink","doesn't drinks"], a:0},
        {t:"pick", q:"Shh! The baby ___.", options:["is sleeping","sleeps","sleep"], a:0},
        {t:"bank", ru:"Я обычно хожу пешком, но сегодня еду на автобусе.", text:"I usually [walk], but today I'm [taking] the bus.", words:["walking","take"]},
        {t:"gap", ru:"Он часто опаздывает.", text:"He is [often] late."},
        {t:"gap", ru:"Во сколько она встаёт?", text:"What time [does] she get up?"}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Почему ты учишь английский?", en:"Why do you learn English?", extra:["does"]},
        {t:"order", ru:"Мы не смотрим телевизор.", en:"We don't watch TV.", extra:["doesn't"]}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Hi, Sam! Where are you?"],["B","I'm at the café. I'm having lunch."],["A","Do you usually have lunch so late?"],["B","No, I usually eat at one. But today I'm very busy."],["A","OK. I'm waiting for you at the office."]], q:"Почему Сэм обедает поздно?", options:["Сегодня он очень занят","Он всегда ест поздно","Он забыл"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"I usually work at home, but today I'm working in the office.", ru:"Обычно я работаю дома, но сегодня работаю в офисе."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Напиши другу сообщение: что ты обычно делаешь по субботам, что делаешь прямо сейчас, и задай ему 2 вопроса.", min:25,
         need:[{label:"Present Simple (usually, every…)", re:"usually|every|often|always|sometimes|never"},{label:"Present Continuous (am / is / are + -ing)", re:"\\b(am|is|are) [a-z]+ing\\b"},{label:"Вопрос (do you / are you…?)", re:"\\b(do|does|are|is) you\\b"}],
         sample:"Hi! On Saturdays I usually go to the gym and meet friends. Right now I'm sitting in a café and I'm reading a book. What are you doing? Do you want to meet tomorrow?"}
      ]}
    ]
  }
},
/* ======================= БЛОК 4 ======================= */
{
  id: "bb4", title: "Умею и было", note: "can, like, Past Simple",
  lessons: [
  {
    id: "b10", icon: "star", title: "Can, want, like",
    goals: ["Говорить, что умеешь и можешь: can / can't", "Говорить о желаниях: want to, would like", "Говорить, что любишь делать: like + -ing"],
    summary: ["I can swim. · She can't drive. · Can you help me?", "I want to learn English.", "I'd like a coffee. — вежливое «я бы хотел»", "I like reading. · I don't like cooking.", "После can — глагол без to"],
    phrases: [["I can swim.","Я умею плавать."],["I can't drive.","Я не умею водить."],["Can you help me?","Можешь помочь?"],["I want to learn English.","Я хочу выучить английский."],["I'd like a coffee.","Я бы хотел кофе."],["I like reading.","Я люблю читать."],["I don't like cooking.","Я не люблю готовить."],["Would you like some tea?","Хочешь чаю?"]],
    steps: [
      {t:"tip", title:"Can — могу, умею", html:`<p><b>can</b> не меняется: <i>I can, she can, they can</i> — без -s.</p><p>После can — глагол без to: <i>She <b>can swim</b>.</i></p><p>Отрицание: <b>can't</b>. Вопрос: <b>Can</b> you drive?</p>`},
      {t:"pick", q:"He ___ speak French.", options:["can","cans","can to"], a:0},
      {t:"gap", ru:"Я не умею плавать.", text:"I [can't] swim.", hint:true},
      {t:"tip", title:"Want, would like, like", html:`<p><b>want to</b> + глагол — хочу: <i>I <b>want to</b> sleep.</i></p><p><b>would like</b> (I'd like) — вежливое «хотел бы»: <i><b>I'd like</b> a tea, please.</i> <i><b>Would you like</b> some cake?</i></p><p><b>like</b> + глагол-ing — люблю делать: <i>I <b>like reading</b>. She <b>likes cooking</b>.</i></p>`},
      {t:"pick", q:"I want ___ a new job.", options:["to find","find","finding"], a:0},
      {t:"pick", q:"She likes ___.", options:["dancing","dance","to dancing"], a:0},
      {t:"pick", q:"Как вежливо попросить чай?", options:["I'd like a tea, please.","I want tea.","Give me tea."], a:0},
      {t:"bank", ru:"Я хочу научиться водить, но пока не умею.", text:"I [want] to learn to drive, but I [can't] yet.", words:["like","don't"]},
      {t:"match", pairs:[["swim","плавать"],["drive","водить"],["cook","готовить"],["dance","танцевать"]]},
      {t:"listen", lines:[["A","Can you cook?"],["B","Yes, I can. I like cooking Italian food."],["A","Can you make pizza?"],["B","Of course! Would you like to try it on Saturday?"],["A","I'd love to!"]], q:"Что предлагает второй человек?", options:["Попробовать его пиццу в субботу","Сходить в ресторан","Научиться готовить"], a:0},
      {t:"order", ru:"Можешь мне помочь?", en:"Can you help me?", extra:["to"]},
      {t:"translate", ru:"Я люблю читать.", a:["I like reading.","I like to read.","I love reading."]},
      {t:"translate", ru:"Хочешь чаю?", a:["Would you like some tea?","Would you like tea?","Do you want some tea?","Do you want tea?"]},
      {t:"dictation", en:"I can't drive.", ru:"Я не умею водить."},
      {t:"speak", en:"I can swim, but I can't drive.", ru:"Я умею плавать, но не умею водить."},
      {t:"write", task:"Напиши о себе: что ты умеешь и не умеешь (can / can't), что любишь делать (like + -ing) и что хочешь научиться делать (want to).", min:20,
       need:[{label:"can / can't", re:"\\b(can|cannot)\\b"},{label:"like + -ing", re:"\\b(like|likes|love|loves|enjoy) [a-z]+ing\\b"},{label:"want to", re:"want to|would like to"}],
       sample:"I can swim and I can cook. I can't drive. I like reading and I love travelling. I want to learn English and I want to visit London."},
      {t:"roleplay", title:"Друг зовёт на выходные.", lines:[
        {s:"them", en:"Would you like to go to the lake on Sunday?", ru:"Хочешь поехать на озеро в воскресенье?"},
        {s:"you", ru:"Согласись", say:"Yes, I'd love to!", re:"yes|would love|like to|sure|ok|okay|great"},
        {s:"them", en:"Can you swim?", ru:"Ты умеешь плавать?"},
        {s:"you", ru:"Ответь, умеешь ли", say:"Yes, I can. I like swimming.", re:"\\bcan\\b|\\bcannot\\b|yes|no"},
        {s:"them", en:"Great! Can you bring some food?", ru:"Отлично! Можешь взять еду?"},
        {s:"you", ru:"Скажи, что да, и что хочешь сделать сэндвичи", say:"Sure! I want to make sandwiches.", re:"sure|yes|ok|okay|want to|sandwich|can"}
      ]}
    ]
  },
  {
    id: "b11", icon: "compass", title: "Was / were",
    goals: ["Говорить, где и каким был: was / were", "Использовать yesterday, last week, ago", "Спрашивать о прошлом: Were you…?"],
    summary: ["I / he / she / it was · you / we / they were", "wasn't · weren't", "Were you at home? — Yes, I was.", "yesterday · last night · last week · two days ago", "I was born in 1995."],
    phrases: [["I was at home yesterday.","Вчера я был дома."],["It was a great day.","Это был отличный день."],["They were busy.","Они были заняты."],["Where were you?","Где ты был?"],["I wasn't tired.","Я не устал."],["two days ago","два дня назад"],["last week","на прошлой неделе"],["I was born in 1995.","Я родился в 1995 году."]],
    steps: [
      {t:"tip", title:"Прошлое от to be", html:`<table class="gtable"><tr><td>I / he / she / it</td><td><b>was</b></td></tr><tr><td>you / we / they</td><td><b>were</b></td></tr></table><p><i>I <b>was</b> at home yesterday.</i> — Вчера я был дома.<br><i>They <b>were</b> busy.</i> — Они были заняты.</p><p>Отрицание: <b>wasn't / weren't</b>. Вопрос: <b>Were</b> you happy?</p>`},
      {t:"pick", q:"We ___ in Paris last week.", options:["were","was"], a:0},
      {t:"pick", q:"She ___ tired yesterday.", options:["was","were"], a:0},
      {t:"gap", ru:"Ты вчера был на работе?", text:"[Were] you at work yesterday?", hint:true},
      {t:"tip", title:"Слова-маркеры прошлого", html:`<p><b>yesterday</b> — вчера, <b>last night</b> — вчера вечером, <b>last week / month / year</b> — на прошлой неделе / в прошлом месяце / году, <b>… ago</b> — … назад: <i>two days ago</i>.</p><p class="note">«Я родился» — <b>I was born</b>: <i>I was born in 1995.</i></p>`},
      {t:"match", pairs:[["yesterday","вчера"],["last week","на прошлой неделе"],["ago","назад"],["last night","вчера вечером"]]},
      {t:"bank", ru:"Где ты был вчера вечером? — Я был в кино.", text:"Where [were] you last night? — I [was] at the cinema.", words:["is","are"]},
      {t:"listen", lines:[["A","Where were you on Saturday?"],["B","I was at my parents' house."],["A","Was it fun?"],["B","Yes, it was. My sister and her kids were there too."]], q:"Где был человек в субботу?", options:["У родителей","В кино","На работе"], a:0},
      {t:"order", ru:"Где ты был на выходных?", en:"Where were you at the weekend?", extra:["was"]},
      {t:"translate", ru:"Я был занят.", a:["I was busy."]},
      {t:"translate", ru:"Они не были дома.", a:["They weren't at home.","They were not at home.","They weren't home.","They were not home."]},
      {t:"translate", ru:"Я родился в 1995 году.", a:["I was born in 1995."]},
      {t:"dictation", en:"It was a great day.", ru:"Это был отличный день."},
      {t:"speak", en:"Yesterday I was at home. It was a quiet day.", ru:"Вчера я был дома. Это был спокойный день."},
      {t:"write", task:"Где ты был вчера, на прошлой неделе и год назад? Каким был день (great, boring…)? Одно предложение с wasn't / weren't.", min:18,
       need:[{label:"was", re:"\\bwas\\b"},{label:"Маркер прошлого (yesterday, last…, ago)", re:"yesterday|last (week|night|year|month|weekend)|\\bago\\b"},{label:"wasn't / weren't", re:"was not|were not"}],
       sample:"Yesterday I was at work. It was a long day. Last week I was in Kazan with my friends. It wasn't cold. A year ago I was a student."},
      {t:"roleplay", title:"Понедельник, утро в офисе.", lines:[
        {s:"them", en:"Hi! How was your weekend?", ru:"Привет! Как выходные?"},
        {s:"you", ru:"Скажи, что было отлично", say:"It was great!", re:"\\bwas\\b|great|good|nice|fine|ok"},
        {s:"them", en:"Where were you?", ru:"Где был?"},
        {s:"you", ru:"Скажи, где ты был", say:"I was at the lake with my friends.", re:"\\bwas\\b|were"},
        {s:"them", en:"Was the weather good?", ru:"Погода была хорошая?"},
        {s:"you", ru:"Ответь коротко", say:"Yes, it was. It was sunny.", re:"yes|no|was|wasn t|sunny|cold|warm"}
      ]}
    ]
  },
  {
    id: "b12", icon: "camera", title: "Past Simple",
    goals: ["Рассказывать, что сделал: worked, went", "Знать самые частые неправильные глаголы", "Задавать вопросы и отрицать с did"],
    summary: ["Правильные: + ed — worked, watched, lived, studied", "Неправильные: go → went, see → saw, have → had, buy → bought", "I didn't see him. — после didn't глагол без изменений", "Did you call her? — Yes, I did. / No, I didn't.", "What did you do yesterday?"],
    phrases: [["I worked late yesterday.","Вчера я работал допоздна."],["We went to the cinema.","Мы ходили в кино."],["I saw a great film.","Я посмотрел отличный фильм."],["She bought a new phone.","Она купила новый телефон."],["I didn't sleep well.","Я плохо спал."],["Did you call her?","Ты ей позвонил?"],["What did you do?","Что ты делал?"],["We had a good time.","Мы хорошо провели время."]],
    steps: [
      {t:"tip", title:"Правильные глаголы: -ed", html:`<p>Большинство глаголов в прошлом получают <b>-ed</b>, и форма одна для всех:</p><p>work → work<b>ed</b>, watch → watch<b>ed</b>, live → live<b>d</b>, study → stud<b>ied</b>, stop → sto<b>pped</b>.</p>`},
      {t:"gap", ru:"Вчера я навестил маму.", text:"Yesterday I [visited] my mother.", hint:true},
      {t:"gap", ru:"Она училась в Лондоне.", text:"She [studied] in London."},
      {t:"tip", title:"Неправильные глаголы", html:`<p>Самые частые глаголы меняются целиком — их учат наизусть:</p><table class="gtable"><tr><td>go → <b>went</b></td><td>see → <b>saw</b></td></tr><tr><td>have → <b>had</b></td><td>buy → <b>bought</b></td></tr><tr><td>make → <b>made</b></td><td>do → <b>did</b></td></tr><tr><td>get → <b>got</b></td><td>come → <b>came</b></td></tr><tr><td>eat → <b>ate</b></td><td>take → <b>took</b></td></tr></table>`},
      {t:"match", pairs:[["go","went"],["see","saw"],["buy","bought"],["make","made"]]},
      {t:"match", pairs:[["eat","ate"],["take","took"],["come","came"],["get","got"]]},
      {t:"pick", q:"We ___ to the cinema last night.", options:["went","goed","go"], a:0},
      {t:"tip", title:"Вопрос и отрицание через did", html:`<p>Помощник <b>did</b> — для всех лиц:</p><p><i>I <b>didn't</b> see him.</i> — Я его не видел.<br><i><b>Did</b> you buy milk?</i> — Ты купил молоко?</p><p class="note">После did глагол возвращается в начальную форму: <i>Did you <b>go</b>?</i> (не went).</p>`},
      {t:"pick", q:"Did she ___ the film?", options:["watch","watched","watches"], a:0},
      {t:"bank", ru:"Ты позвонил ей? — Нет.", text:"[Did] you call her? — No, I [didn't].", words:["Do","don't"]},
      {t:"order", ru:"Что ты делал вчера?", en:"What did you do yesterday?", extra:["was"]},
      {t:"listen", lines:[["A","What did you do at the weekend?"],["B","On Saturday I went to my friend's birthday party."],["A","Did you have fun?"],["B","Yes! We ate pizza and danced. But I didn't sleep much."]], q:"Что было на вечеринке?", options:["Ели пиццу и танцевали","Смотрели кино","Играли в игры"], a:0},
      {t:"translate", ru:"Я купил новый телефон.", a:["I bought a new phone."]},
      {t:"translate", ru:"Мы не видели его.", a:["We didn't see him.","We did not see him."]},
      {t:"dictation", en:"We had a good time.", ru:"Мы хорошо провели время."},
      {t:"speak", en:"Yesterday I worked late and didn't sleep well.", ru:"Вчера я работал допоздна и плохо спал."},
      {t:"write", task:"Расскажи о прошлых выходных: что ты делал (минимум 4 глагола в прошедшем, хотя бы 2 неправильных) и чего не делал.", min:25,
       need:[{label:"Правильный глагол (-ed)", re:"\\b[a-z]{3,}ed\\b"},{label:"Неправильный глагол (went, saw, had…)", re:"\\b(went|saw|had|bought|made|did|got|came|ate|took|met|slept|drank|read|wrote|spent)\\b"},{label:"didn't", re:"did not"}],
       sample:"Last weekend I visited my parents. We had dinner together and watched a film. On Sunday I went to the park and met my friend. I didn't work."},
      {t:"roleplay", title:"Подруга расспрашивает о вчерашнем вечере.", lines:[
        {s:"them", en:"What did you do last night?", ru:"Что делал вчера вечером?"},
        {s:"you", ru:"Скажи, что ходил в кино", say:"I went to the cinema.", re:"\\b(went|watched|saw)\\b|cinema"},
        {s:"them", en:"Did you like the film?", ru:"Фильм понравился?"},
        {s:"you", ru:"Ответь коротко (Yes, I did / No, I didn't)", say:"Yes, I did. It was great.", re:"\\bdid\\b|yes|no|liked|loved"},
        {s:"them", en:"Who did you go with?", ru:"С кем ходил?"},
        {s:"you", ru:"Скажи, с кем", say:"I went with my brother.", re:"with|went|alone|friend|brother|sister"}
      ]}
    ]
  }],
  test: {
    id: "bt4", title: "Контрольная: умею и было",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Я не умею водить.", a:["I can't drive.","I cannot drive.","I can not drive."]},
        {t:"translate", ru:"Вчера я был дома.", a:["I was at home yesterday.","Yesterday I was at home.","I was home yesterday."]},
        {t:"translate", ru:"Мы ходили в кино.", a:["We went to the cinema.","We went to the movies."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"She likes ___ books.", options:["reading","read","to reading"], a:0},
        {t:"pick", q:"___ you at the party last night?", options:["Were","Was","Did"], a:0},
        {t:"bank", ru:"Я не видел его вчера, но видел сегодня.", text:"I [didn't] see him yesterday, but I [saw] him today.", words:["don't","see"]},
        {t:"gap", ru:"Она купила платье.", text:"She [bought] a dress."},
        {t:"gap", ru:"Я хочу выучить английский.", text:"I want [to] learn English."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Что ты делал на выходных?", en:"What did you do at the weekend?", extra:["were"]},
        {t:"order", ru:"Хочешь кофе?", en:"Would you like a coffee?", extra:["want"]}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","How was your holiday?"],["B","It was amazing! We were in Italy for ten days."],["A","What did you do there?"],["B","We visited Rome and Florence. We ate a lot of pasta!"],["A","Can you speak Italian?"],["B","No, I can't. But people there were very friendly."]], q:"Сколько дней они были в Италии?", options:["10","7","14"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"Last week I was in Kazan. I visited my friends.", ru:"На прошлой неделе я был в Казани. Я навестил друзей."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Расскажи о своём лучшем дне в прошлом месяце: где ты был, что делал, что понравилось — и что ты умеешь / хочешь делать в будущем.", min:30,
         need:[{label:"was / were", re:"\\b(was|were)\\b"},{label:"Глагол в Past Simple", re:"\\b([a-z]{3,}ed|went|saw|had|bought|made|ate|took|met)\\b"},{label:"can / want to / like + -ing", re:"\\bcan\\b|want to|would like|like [a-z]+ing|love [a-z]+ing"}],
         sample:"My best day last month was on Saturday. I was in the mountains with my friends. We walked a lot and had a picnic. It was sunny and warm. I like hiking, and I want to go there again."}
      ]}
    ]
  }
},
/* ======================= БЛОК 5 ======================= */
{
  id: "bb5", title: "Будущее и опыт", note: "will, going to, Present Perfect, сравнения",
  lessons: [
  {
    id: "b13", icon: "plane", title: "Будущее: will и going to",
    goals: ["Говорить о планах: going to", "Обещать и решать на ходу: will", "Говорить о будущем: tomorrow, next week"],
    summary: ["I'm going to visit my parents. — план уже есть", "I'll call you. — решение сейчас, обещание", "It will rain. — прогноз", "won't = will not", "tomorrow · next week · next year · soon · in two days"],
    phrases: [["I'm going to learn English.","Я собираюсь выучить английский."],["What are you going to do?","Что ты собираешься делать?"],["I'll call you tomorrow.","Я позвоню тебе завтра."],["I'll help you.","Я тебе помогу."],["It will be OK.","Всё будет хорошо."],["I won't be late.","Я не опоздаю."],["next week","на следующей неделе"],["in two days","через два дня"]],
    steps: [
      {t:"tip", title:"Going to — план", html:`<p>Когда решение <b>уже принято</b>: <b>am / is / are going to</b> + глагол.</p><p><i>I <b>am going to</b> learn English.</i> — Я собираюсь учить английский.<br><i>She <b>is going to</b> move next year.</i></p>`},
      {t:"tip", title:"Will — решение сейчас и прогноз", html:`<p><b>will + глагол</b> — для решений в момент речи, обещаний и предположений:</p><p><i>The phone is ringing. — <b>I'll</b> answer!</i> — Я отвечу!<br><i>Don't worry, it <b>will</b> be OK.</i> — Всё будет хорошо.</p><p>Отрицание: <b>won't</b> (will not).</p>`},
      {t:"pick", q:"Я уже купил билеты: I ___ visit Rome.", options:["am going to","will"], a:0, why:"План уже есть → going to."},
      {t:"pick", q:"— Тут холодно. — Я закрою окно!", options:["I'll close the window.","I'm going to close the window."], a:0, why:"Решение в момент речи → will."},
      {t:"gap", ru:"Я позвоню тебе завтра. (обещаю)", text:"I [will] call you tomorrow.", hint:true},
      {t:"gap", ru:"Я не опоздаю.", text:"I [won't] be late."},
      {t:"bank", ru:"Что ты собираешься делать на следующей неделе?", text:"What are you [going] to do [next] week?", words:["will","last"]},
      {t:"order", ru:"Что ты собираешься делать?", en:"What are you going to do?", extra:["will"]},
      {t:"listen", lines:[["A","What are you going to do this summer?"],["B","I'm going to visit my sister in Spain."],["A","Nice! How long are you going to stay?"],["B","Two weeks. I'll send you some photos!"]], q:"Что пообещал второй человек?", options:["Прислать фото","Привезти подарок","Позвонить"], a:0},
      {t:"translate", ru:"Я тебе помогу.", a:["I'll help you.","I will help you."]},
      {t:"translate", ru:"Она собирается учить английский.", a:["She is going to learn English.","She's going to learn English.","She is going to study English.","She's going to study English."]},
      {t:"dictation", en:"It will be OK.", ru:"Всё будет хорошо."},
      {t:"speak", en:"Next year I'm going to travel to London.", ru:"В следующем году я собираюсь поехать в Лондон."},
      {t:"write", task:"Напиши свои планы на следующий месяц (going to) и 2 обещания себе (I will…).", min:20,
       need:[{label:"going to", re:"going to"},{label:"will / won't", re:"\\bwill\\b"},{label:"Маркер будущего (next, tomorrow…)", re:"next|tomorrow|soon|this (summer|winter|weekend|month|year)|\\bin (two|three|\\d)"}],
       sample:"Next month I'm going to start a new course. I'm going to visit my parents. I will read every day. I won't eat fast food."},
      {t:"roleplay", title:"Коллега спрашивает о планах.", lines:[
        {s:"them", en:"What are you going to do this weekend?", ru:"Что собираешься делать на выходных?"},
        {s:"you", ru:"Расскажи план (going to…)", say:"I'm going to visit my parents.", re:"going to|gonna|will"},
        {s:"them", en:"Sounds nice. Can you send me the report before you go?", ru:"Звучит здорово. Пришлёшь мне отчёт до отъезда?"},
        {s:"you", ru:"Пообещай прислать сегодня", say:"Sure, I'll send it today.", re:"\\bwill\\b|sure|ok|okay|yes"},
        {s:"them", en:"Thanks! Have a great weekend!", ru:"Спасибо! Хороших выходных!"}
      ]}
    ]
  },
  {
    id: "b14", icon: "check", title: "Present Perfect: опыт",
    goals: ["Говорить об опыте: Have you ever…?", "Использовать already, yet, just", "Понимать разницу с Past Simple"],
    summary: ["have / has + 3-я форма: I have seen, she has done", "Have you ever been to…? — Yes, I have. / No, never.", "already — уже · yet — ещё (в вопросах и отрицаниях) · just — только что", "Past Simple — когда (yesterday, in 2020); Present Perfect — сам факт", "been, seen, done, eaten, written, gone"],
    phrases: [["Have you ever been to London?","Ты когда-нибудь был в Лондоне?"],["I have never tried sushi.","Я никогда не пробовал суши."],["I've already done it.","Я уже это сделал."],["Have you finished yet?","Ты уже закончил?"],["Not yet.","Ещё нет."],["She has just left.","Она только что ушла."],["I've lost my keys.","Я потерял ключи."],["We have known each other for years.","Мы знакомы много лет."]],
    steps: [
      {t:"tip", title:"Как образуется", html:`<p><b>have / has</b> + третья форма глагола:</p><p>правильные — та же форма на -ed: <i>worked, visited</i><br>неправильные — третья форма: <i>go → <b>gone / been</b>, see → <b>seen</b>, do → <b>done</b>, eat → <b>eaten</b>, write → <b>written</b></i></p><p><i>I <b>have seen</b> this film.</i> — Я видел этот фильм.<br><i>She <b>has done</b> it.</i> — Она это сделала.</p>`},
      {t:"match", pairs:[["see","seen"],["do","done"],["eat","eaten"],["write","written"]]},
      {t:"pick", q:"She ___ visited Paris.", options:["has","have","is"], a:0},
      {t:"tip", title:"Опыт: ever и never", html:`<p><b>Have you ever…?</b> — Ты когда-нибудь…?</p><p><i>Have you ever <b>been</b> to London? — Yes, I have. / No, I haven't. / No, never.</i></p><p><i>I have <b>never</b> tried sushi.</i> — Я никогда не пробовал суши.</p><p class="note">«Был где-то» — <b>been</b>: <i>I've been to Spain.</i></p>`},
      {t:"gap", ru:"Ты когда-нибудь был в Лондоне?", text:"Have you [ever] been to London?", hint:true},
      {t:"gap", ru:"Я никогда не видел снег.", text:"I have [never] seen snow."},
      {t:"tip", title:"Already, yet, just", html:`<p><b>already</b> — уже: <i>I've <b>already</b> done it.</i><br><b>yet</b> — уже / ещё в вопросах и отрицаниях: <i>Have you finished <b>yet</b>? — Not <b>yet</b>.</i><br><b>just</b> — только что: <i>She has <b>just</b> left.</i></p><p class="note">Если есть точное время в прошлом (yesterday, in 2020) — нужен Past Simple: <i>I <b>saw</b> it yesterday.</i></p>`},
      {t:"pick", q:"— Have you done your homework? — Ещё нет.", options:["Not yet.","Already.","Never."], a:0},
      {t:"pick", q:"I ___ this film yesterday.", options:["saw","have seen"], a:0, why:"Есть yesterday → Past Simple."},
      {t:"bank", ru:"Я уже поел, а ты ещё нет?", text:"I've [already] eaten. Have you eaten [yet]?", words:["just","ever"]},
      {t:"listen", lines:[["A","Have you ever been to Japan?"],["B","No, never. But I've been to China."],["A","When did you go there?"],["B","Two years ago. It was amazing."]], q:"Где был второй человек?", options:["В Китае","В Японии","Нигде"], a:0},
      {t:"order", ru:"Ты когда-нибудь пробовал суши?", en:"Have you ever tried sushi?", extra:["did"]},
      {t:"translate", ru:"Я потерял ключи.", a:["I have lost my keys.","I've lost my keys.","I lost my keys."]},
      {t:"translate", ru:"Она только что ушла.", a:["She has just left.","She's just left.","She just left."]},
      {t:"dictation", en:"Have you finished yet?", ru:"Ты уже закончил?"},
      {t:"speak", en:"I have never been to London, but I want to go.", ru:"Я никогда не был в Лондоне, но хочу поехать."},
      {t:"write", task:"Напиши о своём опыте: где ты был и где никогда не был, что уже сделал в этом году и что ещё нет (already / yet).", min:20,
       need:[{label:"have / has + 3-я форма", re:"\\b(have|has) (already |just |never |ever )?[a-z]+(ed|en|ne|wn|ght|ung|ade|one|een|ept|lt|ld|ad|ut|id|eard|ought|aught)\\b"},{label:"never / ever", re:"\\b(never|ever)\\b"},{label:"already / yet / just", re:"\\b(already|yet|just)\\b"}],
       sample:"I have been to Turkey and Egypt. I have never been to America. This year I have already read five books. I haven't learned to swim yet."},
      {t:"roleplay", title:"Знакомство с путешественником.", lines:[
        {s:"them", en:"Have you ever been abroad?", ru:"Ты когда-нибудь был за границей?"},
        {s:"you", ru:"Ответь и назови страну", say:"Yes, I have. I've been to Turkey.", re:"yes|\\bno\\b|have|been|never"},
        {s:"them", en:"Have you ever tried Thai food?", ru:"А тайскую еду пробовал?"},
        {s:"you", ru:"Скажи, что никогда не пробовал", say:"No, I've never tried it.", re:"never|\\bno\\b|have not|not yet"},
        {s:"them", en:"You should! I've just found a great place.", ru:"Стоит попробовать! Я только что нашёл отличное место."},
        {s:"you", ru:"Предложи сходить вместе", say:"Great! Let's go together.", re:"let s|together|go|great|cool|sure|ok"}
      ]}
    ]
  },
  {
    id: "b15", icon: "heart", title: "Сравнения и мнение",
    goals: ["Сравнивать: bigger than, more interesting than", "Говорить «самый»: the best, the most…", "Высказывать мнение: I think, because, I agree"],
    summary: ["Короткие: big → bigger → the biggest", "Длинные: interesting → more interesting → the most interesting", "good → better → the best · bad → worse → the worst", "as big as — такой же большой, как", "I think… because… · I agree / I don't agree"],
    phrases: [["London is bigger than Paris.","Лондон больше Парижа."],["This book is more interesting.","Эта книга интереснее."],["It's the best café in town.","Это лучшее кафе в городе."],["It's not as cold as yesterday.","Не так холодно, как вчера."],["I think it's a good idea.","Я думаю, это хорошая идея."],["because it's cheaper","потому что это дешевле"],["I agree with you.","Я с тобой согласен."],["I don't think so.","Я так не думаю."]],
    steps: [
      {t:"tip", title:"Сравнения: -er и more", html:`<p>Короткие слова — <b>-er … than</b>: <i>big → bigg<b>er than</b>, cheap → cheap<b>er than</b>, easy → eas<b>ier than</b></i>.</p><p>Длинные слова — <b>more … than</b>: <i><b>more</b> interesting <b>than</b>, <b>more</b> expensive <b>than</b></i>.</p><p class="note">Особые: good → <b>better</b>, bad → <b>worse</b>.</p>`},
      {t:"pick", q:"Moscow is ___ than Kazan.", options:["bigger","more big","biggest"], a:0},
      {t:"pick", q:"This film is ___ than the book.", options:["more interesting","interestinger","most interesting"], a:0},
      {t:"pick", q:"Today is ___ than yesterday. (лучше)", options:["better","gooder","more good"], a:0},
      {t:"tip", title:"Самый: the -est / the most", html:`<p><b>the -est</b>: <i>the biggest, the cheapest, the easiest</i>.</p><p><b>the most</b> + длинное слово: <i>the most beautiful, the most expensive</i>.</p><p>good → <b>the best</b>, bad → <b>the worst</b>.</p><p><b>as … as</b> — такой же, как: <i>not <b>as</b> cold <b>as</b> yesterday</i>.</p>`},
      {t:"gap", ru:"Это лучшее кафе в городе.", text:"It's [the] [best] café in town.", hint:true},
      {t:"gap", ru:"самый дорогой отель", text:"the [most] expensive hotel"},
      {t:"bank", ru:"Чай дешевле кофе, но кофе вкуснее.", text:"Tea is [cheaper] than coffee, but coffee is [tastier].", words:["more cheap","tastiest"]},
      {t:"tip", title:"Как высказать мнение", html:`<p><b>I think</b> … — я думаю…<br><b>In my opinion</b> … — по-моему…<br><b>because</b> … — потому что…</p><p><b>I agree</b> (with you). — Согласен. <b>I don't agree.</b> / <b>I don't think so.</b> — Не согласен / Я так не думаю.</p>`},
      {t:"match", pairs:[["I think","я думаю"],["because","потому что"],["I agree","согласен"],["I don't think so","я так не думаю"]]},
      {t:"listen", lines:[["A","Which is better: the train or the plane?"],["B","I think the train is better. It's cheaper and more comfortable."],["A","But the plane is faster!"],["B","That's true, but I don't like airports."]], q:"Почему второй человек выбирает поезд?", options:["Дешевле и удобнее","Быстрее","Интереснее"], a:0},
      {t:"order", ru:"Я думаю, это хорошая идея.", en:"I think it's a good idea."},
      {t:"translate", ru:"Лондон больше Парижа.", a:["London is bigger than Paris."]},
      {t:"translate", ru:"Я с тобой согласен.", a:["I agree with you.","I agree."]},
      {t:"dictation", en:"It's not as cold as yesterday.", ru:"Не так холодно, как вчера."},
      {t:"speak", en:"I think summer is better than winter because it's warmer.", ru:"Я думаю, лето лучше зимы, потому что теплее."},
      {t:"write", task:"Сравни два города, где ты был (или два времени года): 3 сравнения, одно «самый» и твоё мнение с because.", min:25,
       need:[{label:"-er than / more … than", re:"[a-z]+er than|more [a-z]+ than|better than|worse than"},{label:"the -est / the most / the best", re:"the [a-z]+est\\b|the most|the best|the worst"},{label:"Мнение (I think… because…)", re:"(i think|in my opinion)[\\s\\S]*because|because[\\s\\S]*(i think|in my opinion)"}],
       sample:"Moscow is bigger than Kazan. Kazan is cheaper and quieter than Moscow. But Moscow is more interesting. I think Kazan is the best city for a weekend because it's beautiful and calm."},
      {t:"roleplay", title:"Выбираете с другом, куда поехать.", lines:[
        {s:"them", en:"Where should we go: the sea or the mountains?", ru:"Куда поедем: на море или в горы?"},
        {s:"you", ru:"Выскажи мнение с I think", say:"I think the sea is better.", re:"i think|in my opinion|better|prefer"},
        {s:"them", en:"Why?", ru:"Почему?"},
        {s:"you", ru:"Объясни с because и сравнением", say:"Because it's warmer and more relaxing.", re:"because|[a-z]+er than|more|better|cheaper|warmer|faster|nicer|quieter"},
        {s:"them", en:"OK, I agree. The sea it is!", ru:"Ладно, согласен. Значит, море!"}
      ]}
    ]
  }],
  test: {
    id: "bt5", title: "Итоговая контрольная «Основы»",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Я собираюсь поехать в Лондон.", a:["I'm going to go to London.","I am going to go to London.","I'm going to travel to London.","I'm going to visit London.","I am going to visit London."]},
        {t:"translate", ru:"Ты когда-нибудь был в Испании?", a:["Have you ever been to Spain?"]},
        {t:"translate", ru:"Это лучший день в моей жизни.", a:["It's the best day of my life.","This is the best day of my life.","It is the best day of my life.","It's the best day in my life."]}
      ]},
      {title:"Грамматика", steps:[
        {t:"pick", q:"I ___ to Paris in 2019.", options:["went","have been","go"], a:0, why:"Есть точное время в прошлом → Past Simple."},
        {t:"pick", q:"This hotel is ___ than that one.", options:["more expensive","expensiver","most expensive"], a:0},
        {t:"bank", ru:"Я уже сделал это, а ты ещё нет?", text:"I've [already] done it. Have you done it [yet]?", words:["just","ever"]},
        {t:"gap", ru:"Я позвоню тебе позже.", text:"I'll [call] you later."},
        {t:"gap", ru:"Она никогда не была в Японии.", text:"She has [never] been to Japan."}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Что ты собираешься делать завтра?", en:"What are you going to do tomorrow?", extra:["will"]},
        {t:"order", ru:"Я думаю, поезд лучше самолёта.", en:"I think the train is better than the plane.", extra:["more"]}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Have you ever been to Scotland?"],["B","Yes, I went there last year. It was the most beautiful trip of my life."],["A","Was it colder than here?"],["B","No, not really. But it rained every day!"],["A","I'm going to go there next summer."],["B","Great! I'll give you some tips."]], q:"Что было в Шотландии каждый день?", options:["Дождь","Снег","Солнце"], a:0}
      ]},
      {title:"Устно", steps:[
        {t:"speak", en:"I have never been to Scotland, but I'm going to go there next year.", ru:"Я никогда не был в Шотландии, но собираюсь поехать в следующем году."}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Напиши мини-эссе «Мой английский»: что ты уже выучил (Present Perfect), что было трудным (Past Simple), что собираешься делать дальше (going to / will) и что, по-твоему, самое важное (I think… because…).", min:40,
         need:[{label:"Present Perfect (have + 3-я форма)", re:"\\b(have|has) (already |just |never )?[a-z]+(ed|en|ne|wn|ght|ade|one|een|ept|ld|ad|id|ought|aught)\\b"},{label:"Past Simple", re:"\\b([a-z]{3,}ed|was|were|went|had|made|took)\\b"},{label:"Будущее (going to / will)", re:"going to|\\bwill\\b"},{label:"Мнение (I think… because…)", re:"(i think|in my opinion)[\\s\\S]*because|because[\\s\\S]*(i think|in my opinion)"}],
         sample:"I have learned a lot of English this year. I have finished the basic course. At first it was difficult, and I made many mistakes. Now I'm going to start the IT course. I will practise every day. I think speaking is the most important because it helps you use the language."}
      ]}
    ]
  }
}
];

/* ================= АУДИО «Основы» ================= */
window.TRACKS_BASE = [
  {level:1, id:"ba1", title:"Первые слова", lines:[["N","Hello!","Привет!"],["N","Thank you very much.","Большое спасибо."],["N","Excuse me.","Простите."],["N","I'm sorry.","Извините."],["N","Yes, please.","Да, пожалуйста."],["N","No, thank you.","Нет, спасибо."],["N","Goodbye!","До свидания!"]]},
  {level:1, id:"ba2", title:"Про себя", lines:[["N","My name is Anna.","Меня зовут Анна."],["N","I'm from Russia.","Я из России."],["N","I'm twenty-five.","Мне двадцать пять."],["N","I have a brother.","У меня есть брат."],["N","I live in Moscow.","Я живу в Москве."],["N","I like music.","Я люблю музыку."]]},
  {level:1, id:"ba3", title:"Вопросы", lines:[["N","What's your name?","Как тебя зовут?"],["N","Where are you from?","Откуда ты?"],["N","What do you do?","Чем занимаешься?"],["N","Do you speak English?","Ты говоришь по-английски?"],["N","Can you help me?","Можешь помочь?"],["N","What time is it?","Который час?"]]},
  {level:2, id:"ba4", title:"Знакомство", lines:[["A","Hi! I'm Tom.","Привет! Я Том."],["B","Hi, Tom! I'm Olga. Nice to meet you.","Привет, Том! Я Ольга. Приятно познакомиться."],["A","Nice to meet you too. Where are you from?","Мне тоже. Откуда ты?"],["B","I'm from Russia. And you?","Из России. А ты?"],["A","I'm from Canada. What do you do?","Из Канады. Чем занимаешься?"],["B","I'm a designer.","Я дизайнер."]]},
  {level:2, id:"ba5", title:"Ты сейчас занят?", lines:[["A","Hi! Are you busy?","Привет! Ты занят?"],["B","A little. I'm cooking dinner.","Немного. Готовлю ужин."],["A","What are you cooking?","Что готовишь?"],["B","Pasta. Do you want to come?","Пасту. Хочешь зайти?"],["A","Yes, I'd love to!","Да, с удовольствием!"],["B","Great! See you in an hour.","Отлично! Увидимся через час."]]},
  {level:2, id:"ba6", title:"Как прошли выходные?", lines:[["A","How was your weekend?","Как выходные?"],["B","It was great. I went to the mountains.","Отлично. Я ездил в горы."],["A","Who did you go with?","С кем ездил?"],["B","With my friends. We had a picnic.","С друзьями. Устроили пикник."],["A","Sounds fun!","Звучит здорово!"]]},
  {level:3, id:"ba7", title:"Новая квартира", lines:[
    ["A","So, this is my new flat!","Ну вот моя новая квартира!"],
    ["B","Wow, it's bigger than your old one.","Ого, она больше старой."],
    ["A","Yes, there are three rooms. This is the living room.","Да, тут три комнаты. Это гостиная."],
    ["B","It's very light. Is there a balcony?","Очень светлая. А балкон есть?"],
    ["A","Yes, there is. It's next to the kitchen.","Есть. Рядом с кухней."],
    ["B","Whose books are these?","А чьи это книги?"],
    ["A","They're my husband's. He reads a lot.","Мужа. Он много читает."],
    ["B","How long have you lived here?","Сколько вы тут уже живёте?"],
    ["A","Only two weeks. We're still unpacking.","Всего две недели. Ещё разбираем вещи."],
    ["B","It's lovely. I think you'll be very happy here.","Здесь прекрасно. Думаю, вам тут будет очень хорошо."]]},
  {level:3, id:"ba8", title:"Планы на лето", lines:[
    ["A","What are you going to do this summer?","Что будешь делать летом?"],
    ["B","I'm going to visit my sister in Spain.","Собираюсь навестить сестру в Испании."],
    ["A","Have you ever been there before?","Ты там уже был?"],
    ["B","Yes, I went there two years ago. It was amazing.","Да, ездил два года назад. Было потрясающе."],
    ["A","Can you speak Spanish?","Ты говоришь по-испански?"],
    ["B","Only a little. But my sister speaks it very well.","Совсем немного. Зато сестра говорит отлично."],
    ["A","How long are you going to stay?","Надолго едешь?"],
    ["B","Three weeks. I'll send you some photos!","На три недели. Пришлю тебе фото!"]]},
  {level:4, id:"ba9", title:"Мой обычный день", lines:[
    ["N","My name is Max, and I'm a programmer.","Меня зовут Макс, я программист."],
    ["N","I usually get up at seven thirty.","Обычно я встаю в полвосьмого."],
    ["N","I have coffee and check my messages.","Пью кофе и проверяю сообщения."],
    ["N","I work from home three days a week.","Три дня в неделю я работаю из дома."],
    ["N","On the other days I go to the office by metro.","В остальные дни езжу в офис на метро."],
    ["N","At lunchtime I often walk in the park near my house.","В обед часто гуляю в парке у дома."],
    ["N","In the evening I go to the gym or read a book.","Вечером хожу в спортзал или читаю."],
    ["N","Right now I'm learning English, because I want to work for an international company.","Сейчас я учу английский, потому что хочу работать в международной компании."],
    ["N","I never go to bed before midnight. It's a bad habit!","Я никогда не ложусь раньше полуночи. Плохая привычка!"]]},
  {level:4, id:"ba10", title:"Год назад и сейчас", lines:[
    ["N","A year ago my life was very different.","Год назад моя жизнь была совсем другой."],
    ["N","I lived in a small town and worked in a shop.","Я жила в маленьком городе и работала в магазине."],
    ["N","I didn't speak English at all.","Я совсем не говорила по-английски."],
    ["N","Then I decided to change something.","Потом я решила что-то изменить."],
    ["N","I moved to a big city and started a new course.","Я переехала в большой город и начала новый курс."],
    ["N","It was difficult, but I learned a lot.","Было трудно, но я многому научилась."],
    ["N","Now I have a new job and many new friends.","Теперь у меня новая работа и много новых друзей."],
    ["N","I have already read two books in English.","Я уже прочитала две книги на английском."],
    ["N","Next year I'm going to travel to England.","В следующем году я собираюсь поехать в Англию."],
    ["N","I think it will be the best trip of my life.","Думаю, это будет лучшая поездка в моей жизни."]]}
];
window.TRACK_LEVELS_BASE = {1:"Короткие фразы", 2:"Короткие диалоги", 3:"Длинные диалоги", 4:"Истории"};
