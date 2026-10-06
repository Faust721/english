// Курс «Английский для путешествий» — с нуля.
// Блок = 3 урока + контрольная. Урок: цели → фразы → задания → итоги.
//
// Типы заданий:
//  tip        азы (коротко):            {t, title, html}
//  pick       выбор ответа:             {t, q, options[], a, why?, audio?}   audio — фраза, которую надо послушать
//  bank       вставить готовые слова:   {t, ru, text:"Can I [have] a [coffee]?", words:[лишние слова]}
//  gap        вписать с клавиатуры:     {t, ru, text:"How [much] is it?", hint?: показать первую букву}
//                                        в скобках можно дать варианты: [great|good|nice]
//  order      собрать фразу:            {t, ru, en, extra?:[лишние слова]}
//  translate  перевести с русского:     {t, ru, a:[варианты]}
//  dictation  послушать и записать:     {t, en, ru, a?:[варианты]}
//  listen     послушать диалог и ответить: {t, lines:[[A|B, en]], q, options[], a}
//  speak      сказать вслух:            {t, en, ru}
//  match      пары:                     {t, pairs:[[en, ru]]}
//  roleplay   разговор:                 {t, title, lines:[{s:"them", en, ru} | {s:"you", ru, say, re}]}
//             re — регулярное выражение, которому должен соответствовать ответ (в нижнем регистре, без знаков)
//  write      написать самому:          {t, task, min, need:[{label, re}], sample}

window.COURSE = [
/* ======================= БЛОК 1 ======================= */
{
  id: "b1", title: "Первые шаги", note: "Вежливость, знакомство, деньги",
  lessons: [
  {
    id: "l1", title: "Привет и спасибо",
    goals: ["Здороваться и прощаться", "Говорить «спасибо», «пожалуйста», «извините»", "Отвечать на «How are you?»"],
    summary: ["Hello! / Good morning! — привет / доброе утро", "Thank you! — You're welcome. — спасибо / пожалуйста", "Excuse me — чтобы обратиться, Sorry — чтобы извиниться", "How are you? — I'm fine, thanks.", "Goodbye! / See you! — пока / увидимся"],
    phrases: [["Hello!","Привет! Здравствуйте!"],["Good morning!","Доброе утро!"],["Good evening!","Добрый вечер!"],["How are you?","Как дела?"],["I'm fine, thanks.","Хорошо, спасибо."],["Thank you very much!","Большое спасибо!"],["You're welcome.","Пожалуйста (в ответ на спасибо)."],["Please.","Пожалуйста (когда просишь)."],["Excuse me.","Извините (чтобы обратиться)."],["Sorry!","Простите! (виноват)"],["Goodbye!","До свидания!"],["See you!","Увидимся!"]],
    steps: [
      {t:"tip", title:"Два «пожалуйста» и два «извините»", html:`<p><b>Please</b> — когда просишь: <i>Water, please.</i><br><b>You're welcome</b> — в ответ на «спасибо».</p><p><b>Excuse me</b> — чтобы обратиться к человеку: <i>Excuse me, where is…?</i><br><b>Sorry</b> — если толкнул, опоздал, ошибся.</p>`},
      {t:"match", pairs:[["Hello","Привет"],["Thank you","Спасибо"],["Goodbye","До свидания"],["Good morning","Доброе утро"]]},
      {t:"pick", q:"Тебе сказали «Thank you!». Что ответить?", options:["You're welcome.","Please.","Sorry."], a:0},
      {t:"pick", q:"Ты случайно толкнул человека:", options:["Sorry!","Excuse me?","Hello!"], a:0},
      {t:"pick", q:"Хочешь обратиться к прохожему:", options:["Excuse me…","You're welcome…","See you…"], a:0},
      {t:"bank", ru:"Доброе утро!", text:"[Good] [morning]!", words:["Bad","night"]},
      {t:"bank", ru:"Большое спасибо!", text:"[Thank] [you] very much!", words:["Please","me"]},
      {t:"dictation", en:"Thank you", ru:"Спасибо"},
      {t:"listen", lines:[["A","Good morning!"],["B","Good morning! How are you?"],["A","I'm fine, thank you."]], q:"Как дела у первого человека?", options:["Хорошо","Плохо","Он устал"], a:0},
      {t:"gap", ru:"Увидимся!", text:"See [you]!", hint:true},
      {t:"order", ru:"Большое спасибо!", en:"Thank you very much!"},
      {t:"speak", en:"Thank you very much!", ru:"Большое спасибо!"},
      {t:"roleplay", title:"Утро в отеле. Тебя встречает администратор.", lines:[
        {s:"them", en:"Good morning!", ru:"Доброе утро!"},
        {s:"you", ru:"Поздоровайся в ответ", say:"Good morning!", re:"good morning|hello|\\bhi\\b|morning"},
        {s:"them", en:"How are you today?", ru:"Как вы сегодня?"},
        {s:"you", ru:"Скажи, что всё хорошо, спасибо", say:"I'm fine, thank you.", re:"fine|good|great|ok|okay|well"},
        {s:"them", en:"Have a nice day!", ru:"Хорошего дня!"},
        {s:"you", ru:"Поблагодари", say:"Thank you! You too.", re:"thank|you too"}
      ]}
    ]
  },
  {
    id: "l2", title: "Кто я и откуда",
    goals: ["Назвать своё имя и страну", "Спросить, откуда собеседник", "Сказать, что ты турист и плохо говоришь по-английски"],
    summary: ["My name is… / I'm… — меня зовут…", "I'm from Russia. — я из России", "Where are you from? — откуда ты?", "Nice to meet you. — приятно познакомиться", "I don't speak English well. — я плохо говорю по-английски"],
    phrases: [["My name is Ivan.","Меня зовут Иван."],["What's your name?","Как тебя зовут?"],["I'm from Russia.","Я из России."],["Where are you from?","Откуда ты?"],["Nice to meet you.","Приятно познакомиться."],["I'm a tourist.","Я турист."],["I'm here on holiday.","Я здесь в отпуске."],["I don't speak English well.","Я плохо говорю по-английски."],["Can you speak slowly?","Можете говорить медленнее?"]],
    steps: [
      {t:"tip", title:"Азы: I am = I'm", html:`<p>По-русски «я турист», а по-английски нужен глагол-связка: <b>I am</b> a tourist. В разговоре сокращают: <b>I'm</b>.</p><p><i>I'm Ivan. I'm from Russia. I'm a tourist.</i></p><p class="note">Больше ничего учить не нужно — просто ставь <b>I'm</b> перед словом.</p>`},
      {t:"match", pairs:[["Russia","Россия"],["Spain","Испания"],["Germany","Германия"],["Italy","Италия"]]},
      {t:"bank", ru:"Я из России.", text:"[I'm] [from] Russia.", words:["is","to"]},
      {t:"bank", ru:"Откуда ты?", text:"[Where] are you [from]?", words:["What","to"]},
      {t:"pick", q:"Тебя спросили: What's your name?", options:["My name is Anna.","I'm from Spain.","I'm fine."], a:0},
      {t:"pick", q:"Как попросить говорить медленнее?", options:["Can you speak slowly?","Can you speak English?","Can you speak fast?"], a:0},
      {t:"listen", lines:[["A","Hi! I'm Tom. What's your name?"],["B","Hi, Tom! I'm Olga."],["A","Nice to meet you, Olga. Where are you from?"],["B","I'm from Russia."]], q:"Откуда Ольга?", options:["Из России","Из Англии","Из Испании"], a:0},
      {t:"gap", ru:"Приятно познакомиться.", text:"Nice to [meet] you.", hint:true},
      {t:"order", ru:"Я здесь в отпуске.", en:"I'm here on holiday.", extra:["at"]},
      {t:"dictation", en:"Where are you from?", ru:"Откуда ты?"},
      {t:"translate", ru:"Я турист.", a:["i'm a tourist","i am a tourist"]},
      {t:"speak", en:"I don't speak English well.", ru:"Я плохо говорю по-английски."},
      {t:"roleplay", title:"Пляжный бар. С тобой заговорил парень.", lines:[
        {s:"them", en:"Hi! I'm Mark. What's your name?", ru:"Привет! Я Марк. Как тебя зовут?"},
        {s:"you", ru:"Назови своё имя", say:"Hi! My name is Ivan.", re:"my name is|\\bi am\\b|call me|it is [a-z]"},
        {s:"them", en:"Nice to meet you! Where are you from?", ru:"Приятно познакомиться! Откуда ты?"},
        {s:"you", ru:"Скажи, откуда ты", say:"I'm from Russia.", re:"\\bfrom [a-z]+|russia"},
        {s:"them", en:"Cool! Are you here on holiday?", ru:"Круто! Ты здесь в отпуске?"},
        {s:"you", ru:"Ответь: да, ты в отпуске", say:"Yes, I'm here on holiday.", re:"yes|yeah|holiday|vacation|tourist"},
        {s:"them", en:"Great! Have fun!", ru:"Отлично! Хорошо отдохнуть!"},
        {s:"you", ru:"Поблагодари", say:"Thank you!", re:"thank"}
      ]}
    ]
  },
  {
    id: "l3", title: "Числа и цены",
    goals: ["Понимать числа на слух", "Спросить, сколько стоит", "Оплатить картой или наличными"],
    summary: ["How much is it? — сколько стоит?", "It's ten euros. — это стоит десять евро", "Can I pay by card? — можно картой?", "Cash only. — только наличные", "thirteen (13) и thirty (30) — ударение в разных местах"],
    phrases: [["How much is it?","Сколько это стоит?"],["It's ten euros.","Это стоит десять евро."],["Can I pay by card?","Можно оплатить картой?"],["Cash only.","Только наличные."],["Here you are.","Вот, держите."],["Keep the change.","Сдачи не надо."],["It's too expensive.","Это слишком дорого."],["Two coffees, please.","Два кофе, пожалуйста."]],
    steps: [
      {t:"tip", title:"Числа без зубрёжки", html:`<p>1–10: one, two, three, four, five, six, seven, eight, nine, ten.</p><p>13–19 заканчиваются на <b>-teen</b>: thirteen, fifteen. Десятки — на <b>-ty</b>: thirty, fifty.</p><p class="note">На слух: thir<b>TEEN</b> (13) — ударение в конце, <b>THIR</b>ty (30) — в начале.</p>`},
      {t:"match", pairs:[["three","3"],["seven","7"],["twelve","12"],["twenty","20"]]},
      {t:"pick", audio:"fifty", q:"Послушай и выбери число", options:["15","50","5"], a:1},
      {t:"pick", audio:"thirteen", q:"Послушай и выбери число", options:["13","30","3"], a:0},
      {t:"bank", ru:"Сколько это стоит?", text:"[How] [much] is it?", words:["many","What"]},
      {t:"bank", ru:"Можно оплатить картой?", text:"Can I pay [by] [card]?", words:["with","cash"]},
      {t:"listen", lines:[["A","Excuse me, how much is this T-shirt?"],["B","It's twelve euros."],["A","Can I pay by card?"],["B","Sorry, cash only."]], q:"Как можно заплатить?", options:["Только наличными","Только картой","Как угодно"], a:0},
      {t:"dictation", en:"fifteen", ru:"15", a:["fifteen","15"]},
      {t:"gap", ru:"Это слишком дорого.", text:"It's too [expensive].", hint:true},
      {t:"order", ru:"Сдачи не надо, спасибо.", en:"Keep the change, thank you."},
      {t:"translate", ru:"Сколько это стоит?", a:["how much is it","how much is this","how much does it cost","how much is that"]},
      {t:"speak", en:"How much is it?", ru:"Сколько это стоит?"},
      {t:"roleplay", title:"Фруктовый рынок.", lines:[
        {s:"them", en:"Hello! Fresh oranges, very good!", ru:"Здравствуйте! Свежие апельсины, очень хорошие!"},
        {s:"you", ru:"Спроси, сколько стоят", say:"How much are they?", re:"how much"},
        {s:"them", en:"Three euros a kilo.", ru:"Три евро за килограмм."},
        {s:"you", ru:"Попроси один килограмм", say:"One kilo, please.", re:"(one|1|a) kilo"},
        {s:"them", en:"Here you are. Three euros, please.", ru:"Вот, держите. Три евро, пожалуйста."},
        {s:"you", ru:"Спроси, можно ли картой", say:"Can I pay by card?", re:"card"},
        {s:"them", en:"Sorry, cash only.", ru:"Извините, только наличные."},
        {s:"you", ru:"Дай деньги: «Вот, держите»", say:"OK. Here you are.", re:"here|ok|okay"}
      ]}
    ]
  }],
  test: {
    id: "t1", title: "Контрольная: первые шаги",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Привет! Как дела?", a:["hello how are you","hi how are you"]},
        {t:"translate", ru:"Я из России.", a:["i'm from russia","i am from russia"]},
        {t:"translate", ru:"Сколько это стоит?", a:["how much is it","how much is this","how much does it cost","how much is that"]}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Откуда ты?", en:"Where are you from?", extra:["what"]},
        {t:"order", ru:"Можно оплатить картой?", en:"Can I pay by card?", extra:["with"]}
      ]},
      {title:"Вставь слова", steps:[
        {t:"bank", ru:"Приятно познакомиться.", text:"Nice to [meet] [you].", words:["see","me"]},
        {t:"gap", ru:"— Спасибо! — Пожалуйста.", text:"Thank you! — You're [welcome]."},
        {t:"gap", ru:"Это слишком дорого.", text:"It's [too] expensive."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Hello! How can I help you?"],["B","Hi! How much is this bag?"],["A","It's thirty euros."],["B","Can I pay by card?"],["A","Yes, of course."]], q:"Сколько стоит сумка?", options:["13 евро","30 евро","3 евро"], a:1}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Представься новому знакомому: поздоровайся, назови имя и скажи, откуда ты.", min:6,
         need:[{label:"Приветствие", re:"\\b(hello|hi|hey|good (morning|afternoon|evening))\\b"},{label:"Имя", re:"my name is|\\bi am (?!from)[a-z]+|call me"},{label:"Откуда ты", re:"\\bfrom [a-z]+"}],
         sample:"Hello! My name is Ivan. I'm from Russia. Nice to meet you!"}
      ]}
    ]
  }
},
/* ======================= БЛОК 2 ======================= */
{
  id: "b2", title: "В дороге", note: "Аэропорт, транспорт, как пройти",
  lessons: [
  {
    id: "l4", title: "Аэропорт",
    goals: ["Пройти регистрацию на рейс", "Ответить на вопросы на паспортном контроле", "Найти выход на посадку и багаж"],
    summary: ["Here is my passport. — вот мой паспорт", "I'm here for a week. — я здесь на неделю", "Can I have a window seat? — можно место у окна?", "Where is gate 12? — где выход 12?", "My flight is delayed. — мой рейс задерживается"],
    phrases: [["Here is my passport.","Вот мой паспорт."],["I'm here for a week.","Я здесь на неделю."],["One bag to check in.","Одна сумка в багаж."],["Can I have a window seat?","Можно место у окна?"],["Where is gate twelve?","Где выход 12?"],["My flight is delayed.","Мой рейс задерживается."],["Where is the baggage claim?","Где выдача багажа?"],["Nothing to declare.","Нечего декларировать."]],
    steps: [
      {t:"tip", title:"Азы: Can I…? — универсальная просьба", html:`<p><b>Can I</b> + действие = «Можно мне…?»</p><p><i>Can I have a window seat?</i> — Можно место у окна?<br><i>Can I pay by card?</i> — Можно картой?<br><i>Can I sit here?</i> — Можно здесь сесть?</p><p class="note">Добавь <b>please</b> в конце — и звучит вежливо в любой ситуации.</p>`},
      {t:"match", pairs:[["passport","паспорт"],["flight","рейс"],["gate","выход на посадку"],["luggage","багаж"]]},
      {t:"bank", ru:"Вот мой паспорт.", text:"Here [is] my [passport].", words:["are","ticket"]},
      {t:"bank", ru:"Можно место у окна?", text:"Can I have a [window] [seat]?", words:["door","chair"]},
      {t:"pick", q:"Офицер спрашивает: «What is the purpose of your visit?»", options:["Holiday.","Five days.","Russia."], a:0, why:"purpose — цель поездки."},
      {t:"pick", q:"«How long are you staying?»", options:["Ten days.","By plane.","At the hotel."], a:0, why:"How long — как долго."},
      {t:"listen", lines:[["A","Good morning. Passport, please."],["B","Here you are."],["A","What is the purpose of your visit?"],["B","Holiday."],["A","How long are you staying?"],["B","One week."]], q:"На сколько приехал турист?", options:["На неделю","На день","На месяц"], a:0},
      {t:"gap", ru:"Мой рейс задерживается.", text:"My flight is [delayed].", hint:true},
      {t:"order", ru:"Где выдача багажа?", en:"Where is the baggage claim?"},
      {t:"dictation", en:"Where is gate twelve?", ru:"Где выход 12?", a:["where is gate twelve","where is gate 12"]},
      {t:"translate", ru:"Я здесь на неделю.", a:["i'm here for a week","i am here for a week","i'm here for one week","i am here for one week"]},
      {t:"speak", en:"Can I have a window seat, please?", ru:"Можно место у окна?"},
      {t:"roleplay", title:"Стойка регистрации в аэропорту.", lines:[
        {s:"them", en:"Good morning! Where are you flying today?", ru:"Доброе утро! Куда летите?"},
        {s:"you", ru:"Скажи, что летишь в Лондон", say:"To London.", re:"london"},
        {s:"them", en:"Can I see your passport, please?", ru:"Можно ваш паспорт?"},
        {s:"you", ru:"Дай паспорт: «Вот, пожалуйста»", say:"Here you are.", re:"here|sure|yes"},
        {s:"them", en:"Thank you. Any bags to check in?", ru:"Спасибо. Будете сдавать багаж?"},
        {s:"you", ru:"Скажи: одна сумка", say:"One bag.", re:"(one|1|a) (bag|suitcase)"},
        {s:"them", en:"Window or aisle seat?", ru:"Место у окна или у прохода?"},
        {s:"you", ru:"Попроси место у окна", say:"Window, please.", re:"window"},
        {s:"them", en:"Here is your boarding pass. Gate twelve.", ru:"Вот ваш посадочный. Выход 12."},
        {s:"you", ru:"Поблагодари", say:"Thank you!", re:"thank"}
      ]}
    ]
  },
  {
    id: "l5", title: "Транспорт",
    goals: ["Купить билет на поезд или автобус", "Узнать, куда идёт автобус", "Взять такси и назвать адрес"],
    summary: ["A ticket to…, please. — билет до…", "One way or return? — в одну сторону или туда-обратно?", "Does this bus go to…? — этот автобус идёт до…?", "When is the next train? — когда следующий поезд?", "Stop here, please. — остановите здесь"],
    phrases: [["A ticket to the city centre, please.","Билет до центра, пожалуйста."],["One way or return?","В одну сторону или туда-обратно?"],["Does this bus go to the airport?","Этот автобус идёт в аэропорт?"],["Where is the bus stop?","Где остановка?"],["When is the next train?","Когда следующий поезд?"],["Which platform?","Какая платформа?"],["Take me to this address, please.","Отвезите меня по этому адресу."],["Stop here, please.","Остановите здесь, пожалуйста."]],
    steps: [
      {t:"tip", title:"Азы: вопрос с Does", html:`<p>Хочешь спросить про автобус, поезд, человека — начни с <b>Does</b>:</p><p><i><b>Does</b> this bus go to the airport?</i> — Этот автобус идёт в аэропорт?<br><i><b>Does</b> it stop here?</i> — Он здесь останавливается?</p><p class="note">Ответ: <b>Yes, it does.</b> / <b>No, it doesn't.</b></p>`},
      {t:"match", pairs:[["bus","автобус"],["train","поезд"],["ticket","билет"],["stop","остановка"]]},
      {t:"bank", ru:"Билет до аэропорта, пожалуйста.", text:"A [ticket] to the airport, [please].", words:["thanks","bag"]},
      {t:"bank", ru:"Этот автобус идёт в центр?", text:"[Does] this bus [go] to the centre?", words:["Is","goes"]},
      {t:"pick", q:"«One way or return?» Тебе нужно туда и обратно:", options:["Return, please.","One way, please.","Stop here, please."], a:0},
      {t:"listen", lines:[["A","Hi! When is the next train to Oxford?"],["B","At ten fifteen."],["A","Which platform?"],["B","Platform four."],["A","Thank you!"]], q:"С какой платформы поезд?", options:["4","14","10"], a:0},
      {t:"gap", ru:"Когда следующий поезд?", text:"When is the [next] train?", hint:true},
      {t:"gap", ru:"Остановите здесь, пожалуйста.", text:"Stop [here], please."},
      {t:"order", ru:"Отвезите меня по этому адресу, пожалуйста.", en:"Take me to this address, please."},
      {t:"dictation", en:"Where is the bus stop?", ru:"Где остановка?"},
      {t:"translate", ru:"Билет в одну сторону, пожалуйста.", a:["one way ticket please","a one way ticket please","one way please","a ticket one way please"]},
      {t:"speak", en:"Does this bus go to the airport?", ru:"Этот автобус идёт в аэропорт?"},
      {t:"roleplay", title:"Ты садишься в такси.", lines:[
        {s:"them", en:"Hi! Where to?", ru:"Привет! Куда едем?"},
        {s:"you", ru:"Попроси отвезти по этому адресу", say:"Take me to this address, please.", re:"address|take me|to the"},
        {s:"them", en:"OK. It's about twenty minutes.", ru:"Хорошо. Минут двадцать."},
        {s:"you", ru:"Спроси, сколько будет стоить", say:"How much is it?", re:"how much"},
        {s:"them", en:"About twenty-five euros.", ru:"Около 25 евро."},
        {s:"you", ru:"Спроси, можно ли картой", say:"Can I pay by card?", re:"card"},
        {s:"them", en:"Yes, no problem.", ru:"Да, без проблем."},
        {s:"them", en:"Here we are!", ru:"Приехали!"},
        {s:"you", ru:"Поблагодари", say:"Thank you very much!", re:"thank"}
      ]}
    ]
  },
  {
    id: "l6", title: "Как пройти",
    goals: ["Спросить дорогу", "Понять ответ: налево, направо, прямо", "Переспросить, если не понял"],
    summary: ["Excuse me, where is…? — извините, где…?", "Turn left / right — поверните налево / направо", "Go straight on — идите прямо", "Is it far? — это далеко?", "Could you repeat, please? — повторите, пожалуйста"],
    phrases: [["Excuse me, where is the station?","Извините, где вокзал?"],["Turn left.","Поверните налево."],["Turn right.","Поверните направо."],["Go straight on.","Идите прямо."],["It's near here.","Это рядом."],["Is it far?","Это далеко?"],["Is there a pharmacy near here?","Есть здесь рядом аптека?"],["Could you repeat, please?","Повторите, пожалуйста."],["Can you show me on the map?","Покажете на карте?"]],
    steps: [
      {t:"tip", title:"Азы: Is there…? — «есть ли тут…?»", html:`<p><b>Is there</b> a pharmacy near here? — Есть здесь рядом аптека?<br><b>Is there</b> a toilet? — Здесь есть туалет?</p><p>Ответ: <i>Yes, <b>there is</b>. It's on the left.</i></p>`},
      {t:"match", pairs:[["left","налево"],["right","направо"],["straight","прямо"],["far","далеко"]]},
      {t:"bank", ru:"Поверните налево у банка.", text:"[Turn] [left] at the bank.", words:["Take","right"]},
      {t:"bank", ru:"Есть здесь рядом аптека?", text:"Is [there] a pharmacy [near] here?", words:["it","far"]},
      {t:"pick", audio:"Turn right at the corner.", q:"Послушай: куда повернуть?", options:["Направо","Налево","Идти прямо"], a:0},
      {t:"listen", lines:[["A","Excuse me, where is the museum?"],["B","Go straight on, then turn left. It's next to the park."],["A","Is it far?"],["B","No, about five minutes."]], q:"Куда повернуть после того, как пройдёшь прямо?", options:["Налево","Направо","Никуда"], a:0},
      {t:"gap", ru:"Повторите, пожалуйста.", text:"Could you [repeat], please?", hint:true},
      {t:"gap", ru:"Идите прямо.", text:"Go [straight] on."},
      {t:"order", ru:"Покажете мне на карте?", en:"Can you show me on the map?"},
      {t:"dictation", en:"It's near here.", ru:"Это рядом.", a:["it's near here","it is near here"]},
      {t:"translate", ru:"Извините, где вокзал?", a:["excuse me where is the station","excuse me where is the train station","excuse me where is the railway station"]},
      {t:"speak", en:"Excuse me, is it far?", ru:"Извините, это далеко?"},
      {t:"roleplay", title:"Ты ищешь аптеку на улице.", lines:[
        {s:"them", en:"Hi! Can I help you?", ru:"Привет! Помочь?"},
        {s:"you", ru:"Спроси, есть ли рядом аптека", say:"Yes, is there a pharmacy near here?", re:"pharmacy|chemist|drugstore"},
        {s:"them", en:"Go straight on and turn right at the bank.", ru:"Идите прямо и поверните направо у банка."},
        {s:"you", ru:"Попроси повторить", say:"Sorry, could you repeat, please?", re:"repeat|again|sorry|pardon"},
        {s:"them", en:"Sure. Straight on, then right at the bank.", ru:"Конечно. Прямо, потом направо у банка."},
        {s:"you", ru:"Спроси, далеко ли это", say:"Is it far?", re:"\\bfar\\b|how long|minutes"},
        {s:"them", en:"No, it's only two minutes.", ru:"Нет, всего две минуты."},
        {s:"you", ru:"Поблагодари", say:"Thank you very much!", re:"thank"}
      ]}
    ]
  }],
  test: {
    id: "t2", title: "Контрольная: в дороге",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Где выход 12?", a:["where is gate twelve","where is gate 12"]},
        {t:"translate", ru:"Билет до аэропорта, пожалуйста.", a:["a ticket to the airport please","ticket to the airport please","one ticket to the airport please"]},
        {t:"translate", ru:"Это далеко?", a:["is it far","is it far from here"]}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Как долго вы здесь пробудете?", en:"How long are you staying?", extra:["much"]},
        {t:"order", ru:"Поверните направо у банка.", en:"Turn right at the bank.", extra:["left"]}
      ]},
      {title:"Вставь слова", steps:[
        {t:"bank", ru:"Этот автобус идёт в аэропорт?", text:"Does this bus [go] to the [airport]?", words:["goes","station"]},
        {t:"gap", ru:"Мой рейс задерживается.", text:"My flight is [delayed]."},
        {t:"gap", ru:"Когда следующий поезд?", text:"When is the [next] [train]?"}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Excuse me, does this bus go to the beach?"],["B","No, it doesn't. Take bus number nine."],["A","Where is the bus stop?"],["B","Across the street, next to the café."],["A","Thanks a lot!"]], q:"Какой автобус нужен, чтобы доехать до пляжа?", options:["№ 9","№ 5","№ 19"], a:0}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Ты не знаешь, где твой отель. Напиши, как спросишь дорогу у прохожего: обратись к нему, спроси, где отель, и далеко ли это.", min:6,
         need:[{label:"Обратиться (Excuse me…)", re:"excuse me|sorry|hello|\\bhi\\b"},{label:"Спросить, где отель", re:"where is|how (do|can) i (get|go)|is there|the way"},{label:"Спросить, далеко ли", re:"\\bfar\\b|how long"}],
         sample:"Excuse me! Where is the Park Hotel? Is it far from here? Thank you!"}
      ]}
    ]
  }
},
/* ======================= БЛОК 3 ======================= */
{
  id: "b3", title: "Отель и еда", note: "Заселение, кафе, покупки",
  lessons: [
  {
    id: "l7", title: "Отель",
    goals: ["Заселиться по брони", "Узнать про завтрак, Wi‑Fi и выезд", "Попросить помощи, если что-то не работает"],
    summary: ["I have a reservation. — у меня бронь", "What time is breakfast? — во сколько завтрак?", "What's the Wi‑Fi password? — какой пароль от Wi‑Fi?", "The shower doesn't work. — не работает душ", "Can I have another towel? — можно ещё полотенце?"],
    phrases: [["I have a reservation.","У меня бронь."],["For three nights.","На три ночи."],["What time is breakfast?","Во сколько завтрак?"],["What's the Wi-Fi password?","Какой пароль от Wi‑Fi?"],["The air conditioning doesn't work.","Не работает кондиционер."],["Can I have another towel?","Можно ещё одно полотенце?"],["What time is check-out?","Во сколько выезд?"],["Can I leave my bag here?","Можно оставить здесь сумку?"]],
    steps: [
      {t:"tip", title:"Азы: doesn't work — «не работает»", html:`<p>Подставь любой предмет:</p><p><i>The shower <b>doesn't work</b>.</i> — Не работает душ.<br><i>The TV <b>doesn't work</b>.</i> — Не работает телевизор.<br><i>The key <b>doesn't work</b>.</i> — Ключ не подходит.</p>`},
      {t:"match", pairs:[["towel","полотенце"],["key","ключ"],["room","номер"],["breakfast","завтрак"]]},
      {t:"bank", ru:"У меня бронь.", text:"I [have] a [reservation].", words:["am","room"]},
      {t:"bank", ru:"Во сколько завтрак?", text:"What [time] is [breakfast]?", words:["hour","lunch"]},
      {t:"pick", audio:"Breakfast is from seven to ten.", q:"Послушай: когда завтрак?", options:["С 7 до 10","С 7 до 11","С 10 до 12"], a:0},
      {t:"listen", lines:[["A","Good evening! Welcome to the Sea View Hotel."],["B","Hi! I have a reservation. My name is Petrov."],["A","Yes, Mr Petrov. A double room for three nights?"],["B","That's right."],["A","Your room is three oh five. Breakfast is from seven to ten."]], q:"Какой номер комнаты?", options:["305","350","503"], a:0},
      {t:"gap", ru:"Не работает душ.", text:"The shower doesn't [work].", hint:true},
      {t:"gap", ru:"Можно ещё одно полотенце?", text:"Can I have another [towel]?", hint:true},
      {t:"order", ru:"Какой пароль от Wi‑Fi?", en:"What's the Wi-Fi password?"},
      {t:"dictation", en:"What time is check-out?", ru:"Во сколько выезд?"},
      {t:"translate", ru:"У меня бронь.", a:["i have a reservation","i've got a reservation","i have a booking","i've got a booking"]},
      {t:"speak", en:"Can I leave my bag here?", ru:"Можно оставить здесь сумку?"},
      {t:"roleplay", title:"Ресепшен отеля, вечер.", lines:[
        {s:"them", en:"Hello! How can I help you?", ru:"Здравствуйте! Чем могу помочь?"},
        {s:"you", ru:"Скажи, что у тебя бронь", say:"Hi! I have a reservation.", re:"reservation|booking|booked"},
        {s:"them", en:"What's your name, please?", ru:"Как вас зовут?"},
        {s:"you", ru:"Назови фамилию", say:"Petrov.", re:"[a-z]{2,}"},
        {s:"them", en:"Great, two nights. Here is your key.", ru:"Отлично, две ночи. Вот ваш ключ."},
        {s:"you", ru:"Спроси, во сколько завтрак", say:"What time is breakfast?", re:"breakfast"},
        {s:"them", en:"From seven to ten, on the first floor.", ru:"С семи до десяти, на втором этаже."},
        {s:"you", ru:"Спроси пароль от Wi‑Fi", say:"What's the Wi-Fi password?", re:"wi ?fi|password|internet"},
        {s:"them", en:"It's on the card with your key.", ru:"Он на карточке с ключом."},
        {s:"you", ru:"Поблагодари", say:"Thank you!", re:"thank"}
      ]}
    ]
  },
  {
    id: "l8", title: "Кафе и ресторан",
    goals: ["Попросить столик и меню", "Заказать еду и напитки", "Попросить счёт"],
    summary: ["A table for two, please. — столик на двоих", "I'd like… — я бы хотел…", "What do you recommend? — что посоветуете?", "I'm allergic to… — у меня аллергия на…", "The bill, please. — счёт, пожалуйста"],
    phrases: [["A table for two, please.","Столик на двоих, пожалуйста."],["Can I see the menu?","Можно меню?"],["I'd like a coffee.","Я бы хотел кофе."],["What do you recommend?","Что посоветуете?"],["Without sugar, please.","Без сахара, пожалуйста."],["I'm allergic to nuts.","У меня аллергия на орехи."],["The bill, please.","Счёт, пожалуйста."],["It was delicious!","Было очень вкусно!"]],
    steps: [
      {t:"tip", title:"Азы: I'd like — вежливое «я бы хотел»", html:`<p><b>I'd like</b> = I would like. Звучит вежливее, чем <i>I want</i>.</p><p><i><b>I'd like</b> the fish, please.</i><br><i><b>I'd like</b> a glass of water.</i></p><p class="note">Ещё проще: название блюда + <b>please</b>. «Pizza, please» — тоже нормально.</p>`},
      {t:"match", pairs:[["water","вода"],["bill","счёт"],["chicken","курица"],["fish","рыба"]]},
      {t:"bank", ru:"Столик на двоих, пожалуйста.", text:"A [table] for [two], please.", words:["desk","too"]},
      {t:"bank", ru:"Я бы хотел кофе без сахара.", text:"I'd [like] a coffee [without] sugar.", words:["want","with"]},
      {t:"pick", q:"Официант: «Are you ready to order?»", options:["Yes, I'd like the fish, please.","Yes, the bill.","A table for two."], a:0},
      {t:"pick", q:"Как попросить счёт?", options:["The bill, please.","The check-in, please.","The money, please."], a:0},
      {t:"listen", lines:[["A","Hi! Are you ready to order?"],["B","Yes. I'd like the chicken salad, please."],["A","Anything to drink?"],["B","A glass of orange juice."],["A","Great. Anything else?"],["B","No, thank you."]], q:"Что гость заказал попить?", options:["Апельсиновый сок","Воду","Кофе"], a:0},
      {t:"gap", ru:"Что посоветуете?", text:"What do you [recommend]?", hint:true},
      {t:"gap", ru:"У меня аллергия на орехи.", text:"I'm [allergic] to nuts."},
      {t:"order", ru:"Можно посмотреть меню?", en:"Can I see the menu, please?"},
      {t:"dictation", en:"The bill, please.", ru:"Счёт, пожалуйста."},
      {t:"translate", ru:"Я бы хотел кофе.", a:["i'd like a coffee","i would like a coffee","i'd like coffee","i would like coffee","can i have a coffee"]},
      {t:"speak", en:"What do you recommend?", ru:"Что посоветуете?"},
      {t:"roleplay", title:"Ресторан у моря.", lines:[
        {s:"them", en:"Good evening! How many people?", ru:"Добрый вечер! Сколько вас?"},
        {s:"you", ru:"Попроси столик на двоих", say:"A table for two, please.", re:"\\b(two|2)\\b"},
        {s:"them", en:"This way, please. Something to drink?", ru:"Сюда, пожалуйста. Что будете пить?"},
        {s:"you", ru:"Закажи воду", say:"Water, please.", re:"water"},
        {s:"them", en:"And to eat?", ru:"А из еды?"},
        {s:"you", ru:"Спроси, что посоветуют", say:"What do you recommend?", re:"recommend|suggest|good|best"},
        {s:"them", en:"The fish is very good today.", ru:"Рыба сегодня очень хорошая."},
        {s:"you", ru:"Закажи рыбу", say:"OK, I'd like the fish, please.", re:"fish"},
        {s:"them", en:"How was everything?", ru:"Всё понравилось?"},
        {s:"you", ru:"Скажи, что было вкусно, и попроси счёт", say:"It was delicious! The bill, please.", re:"\\bbill\\b|\\bcheck\\b"}
      ]}
    ]
  },
  {
    id: "l9", title: "Магазин",
    goals: ["Сказать, что просто смотришь", "Спросить нужный размер и цвет", "Примерить и купить"],
    summary: ["I'm just looking, thanks. — я просто смотрю", "Do you have this in medium? — есть размер M?", "Can I try it on? — можно примерить?", "It's too big / small. — слишком большой / маленький", "I'll take it. — я возьму"],
    phrases: [["I'm just looking, thanks.","Я просто смотрю, спасибо."],["Do you have this in medium?","Есть такой в размере M?"],["Do you have it in black?","Есть такой в чёрном цвете?"],["Can I try it on?","Можно примерить?"],["Where are the fitting rooms?","Где примерочные?"],["It's too big.","Слишком большой."],["It's too small.","Слишком маленький."],["I'll take it.","Я возьму это."]],
    steps: [
      {t:"tip", title:"Азы: too — «слишком»", html:`<p><b>too</b> + признак = слишком:</p><p><i>too big</i> — слишком большой, <i>too small</i> — слишком маленький, <i>too expensive</i> — слишком дорого, <i>too long</i> — слишком длинный.</p>`},
      {t:"match", pairs:[["black","чёрный"],["white","белый"],["red","красный"],["blue","синий"]]},
      {t:"bank", ru:"Я просто смотрю, спасибо.", text:"I'm just [looking], [thanks].", words:["seeing","please"]},
      {t:"bank", ru:"Можно примерить?", text:"Can I [try] it [on]?", words:["test","in"]},
      {t:"pick", q:"Продавец: «Can I help you?» А ты просто смотришь:", options:["I'm just looking, thanks.","I'll take it.","It's too small."], a:0},
      {t:"pick", audio:"It's too big.", q:"Послушай: что не так?", options:["Слишком большой","Слишком дорогой","Слишком маленький"], a:0},
      {t:"listen", lines:[["A","Hi! Can I help you?"],["B","Yes. Do you have this jacket in medium?"],["A","Let me check. Yes, here you are. In black or blue?"],["B","Black, please. Can I try it on?"],["A","Sure, the fitting rooms are over there."]], q:"Какой цвет выбрал покупатель?", options:["Чёрный","Синий","Белый"], a:0},
      {t:"gap", ru:"Он слишком маленький.", text:"It's too [small]."},
      {t:"gap", ru:"Есть такой в чёрном цвете?", text:"Do you have it in [black]?"},
      {t:"order", ru:"Где примерочные?", en:"Where are the fitting rooms?"},
      {t:"dictation", en:"I'll take it.", ru:"Я возьму это.", a:["i'll take it","i will take it"]},
      {t:"translate", ru:"Можно примерить?", a:["can i try it on","could i try it on","may i try it on","can i try this on","can i try on"]},
      {t:"speak", en:"Do you have this in medium?", ru:"Есть такой в размере M?"},
      {t:"roleplay", title:"Магазин одежды.", lines:[
        {s:"them", en:"Hello! Looking for anything special?", ru:"Здравствуйте! Ищете что-то конкретное?"},
        {s:"you", ru:"Скажи, что ищешь футболку", say:"Yes, I'm looking for a T-shirt.", re:"t ?shirt|tshirt"},
        {s:"them", en:"These are new. What size?", ru:"Вот новые. Какой размер?"},
        {s:"you", ru:"Скажи: размер M (medium)", say:"Medium, please.", re:"medium|\\bm\\b"},
        {s:"them", en:"Here you are.", ru:"Пожалуйста."},
        {s:"you", ru:"Спроси, можно ли примерить", say:"Can I try it on?", re:"\\btry\\b"},
        {s:"them", en:"Of course. … So, how is it?", ru:"Конечно. … Ну как?"},
        {s:"you", ru:"Скажи, что подходит и ты берёшь", say:"It's perfect. I'll take it.", re:"take it|buy it|\\bi will take|perfect|good"},
        {s:"them", en:"Great! That's fifteen euros.", ru:"Отлично! С вас 15 евро."},
        {s:"you", ru:"Спроси, можно ли картой", say:"Can I pay by card?", re:"card"}
      ]}
    ]
  }],
  test: {
    id: "t3", title: "Контрольная: отель и еда",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Во сколько завтрак?", a:["what time is breakfast","when is breakfast"]},
        {t:"translate", ru:"Счёт, пожалуйста.", a:["the bill please","can i have the bill please","the check please","bill please","can i have the bill","could i have the bill please"]},
        {t:"translate", ru:"Можно примерить?", a:["can i try it on","could i try it on","may i try it on","can i try this on","can i try on"]}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Я бы хотел столик на двоих.", en:"I'd like a table for two.", extra:["too"]},
        {t:"order", ru:"Не работает кондиционер.", en:"The air conditioning doesn't work.", extra:["not"]}
      ]},
      {title:"Вставь слова", steps:[
        {t:"bank", ru:"Можно ещё одно полотенце, пожалуйста?", text:"Can I [have] another [towel], [please]?", words:["has","key","thanks"]},
        {t:"gap", ru:"Это слишком дорого.", text:"It's too [expensive]."},
        {t:"gap", ru:"Я просто смотрю.", text:"I'm just [looking]."}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Good afternoon. Can I help you?"],["B","Hi. We'd like a table for four, please."],["A","Inside or outside?"],["B","Outside, please. It's a beautiful day."],["A","Of course. Follow me. Here are your menus."],["B","Thank you. Can we have some water?"]], q:"Где хотят сесть гости?", options:["На улице","Внутри","У окна"], a:0}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Ты в кафе. Напиши, что скажешь официанту: закажи еду и напиток, а в конце попроси счёт.", min:8,
         need:[{label:"Заказ (I'd like… / Can I have…)", re:"i would like|can i have|could i have|i will have|i want|please"},{label:"Напиток", re:"coffee|tea|water|juice|beer|wine|cola|coke|lemonade|milk|cappuccino|latte"},{label:"Попросить счёт", re:"\\bbill\\b|\\bcheck\\b"}],
         sample:"Hello! I'd like a pizza and a glass of orange juice, please. … It was delicious! Can I have the bill, please?"}
      ]}
    ]
  }
},
/* ======================= БЛОК 4 ======================= */
{
  id: "b4", title: "Общение", note: "Разговоры, впечатления, помощь",
  lessons: [
  {
    id: "l10", title: "Лёгкий разговор",
    goals: ["Поддержать разговор с новым знакомым", "Спросить о впечатлениях и работе", "Сказать, что тебе нравится"],
    summary: ["How do you like the city? — как тебе город?", "I love it here! — мне тут очень нравится", "Is this your first time here? — ты здесь впервые?", "What do you do? — чем занимаешься?", "Me too! — я тоже!"],
    phrases: [["How do you like the city?","Как тебе город?"],["I love it here!","Мне тут очень нравится!"],["The weather is great today.","Сегодня отличная погода."],["Is this your first time here?","Ты здесь впервые?"],["What do you do?","Чем ты занимаешься? (работа)"],["I work in IT.","Я работаю в IT."],["Do you like football?","Ты любишь футбол?"],["Me too!","Я тоже!"],["Nice talking to you!","Приятно было поболтать!"]],
    steps: [
      {t:"tip", title:"Азы: вопросы с Do", html:`<p>Поставь <b>Do</b> в начало — и фраза стала вопросом:</p><p><i>You like football.</i> → <i><b>Do</b> you like football?</i><br><i>You live here.</i> → <i><b>Do</b> you live here?</i></p><p class="note">Ответ: <b>Yes, I do.</b> / <b>No, I don't.</b></p>`},
      {t:"match", pairs:[["weather","погода"],["beautiful","красивый"],["friendly","дружелюбный"],["delicious","вкусный"]]},
      {t:"bank", ru:"Как тебе город?", text:"How do you [like] the [city]?", words:["want","road"]},
      {t:"bank", ru:"Ты здесь впервые?", text:"[Is] this your [first] time here?", words:["Are","one"]},
      {t:"pick", q:"«Do you like the food here?»", options:["Yes, it's delicious!","Yes, I am.","I work in IT."], a:0},
      {t:"pick", q:"«What do you do?»", options:["I'm a teacher.","I'm fine.","I like pizza."], a:0, why:"What do you do? — вопрос про работу."},
      {t:"listen", lines:[["A","Hi! Is this your first time in Barcelona?"],["B","Yes, it is. I love it here!"],["A","Where are you from?"],["B","I'm from Moscow. And you?"],["A","I'm from Canada. I'm here for work."],["B","Oh, nice! What do you do?"],["A","I'm a photographer."]], q:"Кем работает собеседник?", options:["Фотографом","Учителем","Программистом"], a:0},
      {t:"gap", ru:"Мне тут очень нравится!", text:"I [love] it here!"},
      {t:"gap", ru:"Сегодня отличная погода.", text:"The weather is [great|good|nice|beautiful|amazing|lovely|fantastic] today."},
      {t:"order", ru:"Я здесь с семьёй на неделю.", en:"I'm here with my family for a week.", extra:["on"]},
      {t:"dictation", en:"Is this your first time here?", ru:"Ты здесь впервые?"},
      {t:"translate", ru:"Мне тут очень нравится!", a:["i love it here","i really like it here","i like it here very much","i really love it here","i like it here a lot"]},
      {t:"speak", en:"How do you like the city?", ru:"Как тебе город?"},
      {t:"roleplay", title:"Кухня хостела. Знакомство.", lines:[
        {s:"them", en:"Hi! I'm Lucy. Where are you from?", ru:"Привет! Я Люси. Ты откуда?"},
        {s:"you", ru:"Скажи, откуда ты", say:"Hi, Lucy! I'm from Russia.", re:"\\bfrom [a-z]+|russia"},
        {s:"them", en:"Cool! How do you like the city?", ru:"Круто! Как тебе город?"},
        {s:"you", ru:"Скажи, что тебе очень нравится", say:"I love it here!", re:"love|like|great|amazing|beautiful|nice|cool|wonderful"},
        {s:"them", en:"Me too. What do you do?", ru:"Мне тоже. Чем занимаешься?"},
        {s:"you", ru:"Расскажи, кем работаешь", say:"I'm a manager.", re:"\\bi am\\b|\\bi work\\b|student|work"},
        {s:"them", en:"Interesting! Do you like football?", ru:"Интересно! Любишь футбол?"},
        {s:"you", ru:"Ответь да или нет", say:"Yes, I do!", re:"\\byes\\b|\\bno\\b|\\bnot\\b|\\bi do\\b|like|love"},
        {s:"them", en:"Nice talking to you!", ru:"Приятно было поболтать!"},
        {s:"you", ru:"Ответь, что тебе тоже", say:"You too!", re:"you too|nice|thank"}
      ]}
    ]
  },
  {
    id: "l11", title: "Впечатления и планы",
    goals: ["Рассказать, где был и что видел", "Сказать, как всё прошло", "Рассказать о планах на завтра"],
    summary: ["I was in Rome. — я был в Риме", "I went to the beach. — я ходил на пляж", "It was amazing! — было потрясающе", "I'm going to visit… — я собираюсь сходить в…", "What are you going to do tomorrow? — что будешь делать завтра?"],
    phrases: [["Yesterday I was in Rome.","Вчера я был в Риме."],["I went to the beach.","Я ходил на пляж."],["I saw the old town.","Я видел старый город."],["It was amazing!","Было потрясающе!"],["We had a great time.","Мы отлично провели время."],["How was your day?","Как прошёл день?"],["I'm going to visit the museum.","Я собираюсь сходить в музей."],["What are you going to do tomorrow?","Что будешь делать завтра?"]],
    steps: [
      {t:"tip", title:"Азы: 5 слов для прошлого и одно для будущего", html:`<p>Для рассказа о поездке хватит пяти слов:</p><p><b>was</b> — был, <b>went</b> — ходил/ездил, <b>saw</b> — видел, <b>had</b> — было/провёл, <b>ate</b> — ел.</p><p>Планы: <b>I'm going to</b> + действие.<br><i>I'm going to visit the museum.</i> — Я собираюсь сходить в музей.</p>`},
      {t:"match", pairs:[["went","ходил, ездил"],["saw","видел"],["was","был"],["ate","ел"]]},
      {t:"bank", ru:"Вчера я ходил на пляж.", text:"Yesterday I [went] to the [beach].", words:["go","beaches"]},
      {t:"bank", ru:"Было потрясающе!", text:"It [was] [amazing]!", words:["is","bored"]},
      {t:"bank", ru:"Я собираюсь сходить в музей.", text:"I'm [going] [to] visit the museum.", words:["go","for"]},
      {t:"pick", q:"«How was your trip?»", options:["It was great!","It is great tomorrow.","I'm going to Rome."], a:0},
      {t:"listen", lines:[["A","Hi Anna! How was your weekend?"],["B","It was great! On Saturday I went to the old town."],["A","Did you like it?"],["B","Yes, it was beautiful. I saw the cathedral and ate paella."],["A","Nice! What are you going to do tomorrow?"],["B","I'm going to visit the Picasso Museum."]], q:"Что Анна собирается делать завтра?", options:["Сходить в музей Пикассо","Пойти на пляж","Улететь домой"], a:0},
      {t:"gap", ru:"Мы отлично провели время.", text:"We [had] a great time."},
      {t:"gap", ru:"Я видел старый город.", text:"I [saw] the old town."},
      {t:"order", ru:"Что ты будешь делать завтра?", en:"What are you going to do tomorrow?", extra:["will"]},
      {t:"dictation", en:"It was amazing!", ru:"Было потрясающе!"},
      {t:"translate", ru:"Вчера я был в Риме.", a:["yesterday i was in rome","i was in rome yesterday"]},
      {t:"speak", en:"Tomorrow I'm going to visit the museum.", ru:"Завтра я собираюсь сходить в музей."},
      {t:"roleplay", title:"Вечером встретил знакомого из хостела.", lines:[
        {s:"them", en:"Hey! How was your day?", ru:"Привет! Как прошёл день?"},
        {s:"you", ru:"Скажи, что было отлично", say:"It was great!", re:"great|good|amazing|nice|fantastic|wonderful|cool|perfect|excellent"},
        {s:"them", en:"What did you do?", ru:"Что делал?"},
        {s:"you", ru:"Расскажи, куда ходил или что видел", say:"I went to the old town and saw the castle.", re:"\\b(went|was|visited|saw|ate|had)\\b"},
        {s:"them", en:"Sounds fun! What are you going to do tomorrow?", ru:"Звучит здорово! А завтра что будешь делать?"},
        {s:"you", ru:"Расскажи план на завтра (I'm going to…)", say:"I'm going to go to the beach.", re:"going to|\\bwill\\b|gonna"},
        {s:"them", en:"Have a great day tomorrow!", ru:"Хорошего завтрашнего дня!"},
        {s:"you", ru:"Поблагодари", say:"Thanks, you too!", re:"thank|you too"}
      ]}
    ]
  },
  {
    id: "l12", title: "Помощь и аптека",
    goals: ["Попросить о помощи", "Объяснить в аптеке, что болит", "Сказать, что потерял вещь"],
    summary: ["Can you help me, please? — можете помочь?", "I lost my phone. — я потерял телефон", "I have a headache. — у меня болит голова", "Do you have something for a cold? — есть что-нибудь от простуды?", "Экстренный номер в Европе — 112"],
    phrases: [["Can you help me, please?","Можете мне помочь?"],["I lost my phone.","Я потерял телефон."],["I need a doctor.","Мне нужен врач."],["I have a headache.","У меня болит голова."],["I have a sore throat.","У меня болит горло."],["Where is the nearest pharmacy?","Где ближайшая аптека?"],["Do you have something for a cold?","Есть что-нибудь от простуды?"],["Call the police!","Вызовите полицию!"],["It's an emergency.","Это срочно."]],
    steps: [
      {t:"tip", title:"Азы: I have a… — «у меня болит»", html:`<p><b>I have a</b> + что болит:</p><p><i>headache</i> — голова, <i>stomachache</i> — живот, <i>toothache</i> — зуб, <i>sore throat</i> — горло, <i>fever</i> — температура.</p><p class="note">Экстренный номер в Европе — <b>112</b>, в США — <b>911</b>.</p>`},
      {t:"match", pairs:[["headache","головная боль"],["pharmacy","аптека"],["police","полиция"],["doctor","врач"]]},
      {t:"bank", ru:"Можете мне помочь?", text:"Can you [help] me, [please]?", words:["helps","thanks"]},
      {t:"bank", ru:"Я потерял телефон.", text:"I [lost] my [phone].", words:["lose","phones"]},
      {t:"bank", ru:"Есть что-нибудь от простуды?", text:"Do you have [something] [for] a cold?", words:["some","from"]},
      {t:"pick", q:"Фармацевт: «What are your symptoms?»", options:["I have a sore throat.","I lost my bag.","Call the police!"], a:0},
      {t:"listen", lines:[["A","Hello. How can I help you?"],["B","Hi. I have a bad headache and a sore throat."],["A","Do you have a fever?"],["B","No, I don't think so."],["A","OK. Take these tablets twice a day, after food."],["B","Thank you. How much are they?"],["A","Six euros fifty."]], q:"Как принимать таблетки?", options:["Два раза в день после еды","Раз в день до еды","Три раза в день"], a:0},
      {t:"gap", ru:"Мне нужен врач.", text:"I [need] a doctor."},
      {t:"gap", ru:"Где ближайшая аптека?", text:"Where is the [nearest] pharmacy?"},
      {t:"order", ru:"Извините, я потерял паспорт. Можете мне помочь?", en:"Excuse me, I lost my passport. Can you help me?"},
      {t:"dictation", en:"It's an emergency.", ru:"Это срочно."},
      {t:"translate", ru:"У меня болит голова.", a:["i have a headache","i've got a headache","my head hurts","i have got a headache"]},
      {t:"speak", en:"Can you help me, please? I lost my bag.", ru:"Можете помочь? Я потерял сумку."},
      {t:"roleplay", title:"Ты потерял сумку и пришёл в полицию.", lines:[
        {s:"them", en:"Hello, what's the problem?", ru:"Здравствуйте, что случилось?"},
        {s:"you", ru:"Скажи, что потерял сумку", say:"I lost my bag.", re:"\\blost\\b|\\blose\\b"},
        {s:"them", en:"Where did you lose it?", ru:"Где вы её потеряли?"},
        {s:"you", ru:"Скажи, что, кажется, в автобусе", say:"I think on the bus.", re:"\\bbus\\b"},
        {s:"them", en:"What's in the bag?", ru:"Что было в сумке?"},
        {s:"you", ru:"Скажи: паспорт и телефон", say:"My passport and my phone.", re:"passport.*phone|phone.*passport"},
        {s:"them", en:"OK. Please fill in this form. We'll call you.", ru:"Хорошо. Заполните эту форму. Мы вам позвоним."},
        {s:"you", ru:"Поблагодари", say:"Thank you very much.", re:"thank"}
      ]}
    ]
  }],
  test: {
    id: "t4", title: "Итоговая контрольная",
    sections: [
      {title:"Перевод", steps:[
        {t:"translate", ru:"Мне здесь очень нравится!", a:["i love it here","i really like it here","i like it here very much","i really love it here","i like it here a lot"]},
        {t:"translate", ru:"Мне нужен врач.", a:["i need a doctor"]},
        {t:"translate", ru:"Вчера я ходил на пляж.", a:["yesterday i went to the beach","i went to the beach yesterday"]}
      ]},
      {title:"Составь предложение", steps:[
        {t:"order", ru:"Ты в Лондоне впервые?", en:"Is this your first time in London?", extra:["are"]},
        {t:"order", ru:"Есть что-нибудь от головной боли?", en:"Do you have something for a headache?", extra:["from"]}
      ]},
      {title:"Вставь слова", steps:[
        {t:"bank", ru:"Было потрясающе! Мы отлично провели время.", text:"It [was] [amazing]! We [had] a great time.", words:["is","have","boring"]},
        {t:"gap", ru:"Я потерял телефон.", text:"I [lost] my phone."},
        {t:"gap", ru:"Что ты будешь делать завтра?", text:"What are you [going] to do tomorrow?"}
      ]},
      {title:"Аудирование", steps:[
        {t:"listen", lines:[["A","Hi! Are you from here?"],["B","No, I'm a tourist. I'm from Russia."],["A","Me too! I mean, I'm a tourist too. I'm from Poland. How long are you staying?"],["B","Ten days. Yesterday I went to the castle. It was amazing."],["A","Oh, I'm going to see it tomorrow! Is it far?"],["B","No, take bus number twelve. It's about fifteen minutes."]], q:"Как доехать до замка?", options:["Автобус № 12, около 15 минут","Автобус № 15, около 12 минут","Пешком 10 минут"], a:0}
      ]},
      {title:"Напиши сам", steps:[
        {t:"write", task:"Напиши новому знакомому сообщение о своей поездке: где ты был, что понравилось и что собираешься делать завтра (3–5 предложений).", min:15,
         need:[{label:"Где был (was / went / saw)", re:"\\b(was|went|visited|saw|ate)\\b"},{label:"Что понравилось", re:"\\b(like|liked|love|loved|amazing|great|beautiful|nice|wonderful|delicious|fantastic)\\b"},{label:"Планы на завтра (going to / will)", re:"going to|\\bwill\\b|tomorrow"}],
         sample:"Hi! Yesterday I went to the old town. I saw the cathedral and ate paella. It was amazing! Tomorrow I'm going to visit the beach."}
      ]}
    ]
  }
}
];

/* ================= АУДИО: от коротких к длинным ================= */
// lines: [говорящий, английский, перевод]. A и B — разные голоса, N — рассказчик.
window.TRACKS = [
  {level:1, id:"a1", title:"Вежливые слова", lines:[["N","Hello!","Привет!"],["N","Good morning!","Доброе утро!"],["N","Thank you very much.","Большое спасибо."],["N","You're welcome.","Пожалуйста."],["N","Excuse me.","Извините."],["N","I'm sorry.","Простите."],["N","Goodbye!","До свидания!"],["N","See you later!","До встречи!"]]},
  {level:1, id:"a2", title:"Числа и цены", lines:[["N","It's five euros.","Это стоит пять евро."],["N","That's twelve dollars.","С вас двенадцать долларов."],["N","Thirteen, please.","Тринадцать, пожалуйста."],["N","Thirty euros.","Тридцать евро."],["N","It's fifty pounds.","Это пятьдесят фунтов."],["N","Two coffees, please.","Два кофе, пожалуйста."],["N","One hundred and twenty.","Сто двадцать."]]},
  {level:1, id:"a3", title:"Вопросы туриста", lines:[["N","Where is the toilet?","Где туалет?"],["N","How much is it?","Сколько стоит?"],["N","Can I pay by card?","Можно картой?"],["N","What time is it?","Который час?"],["N","Is it far?","Это далеко?"],["N","Do you speak English?","Вы говорите по-английски?"]]},

  {level:2, id:"a4", title:"Кофе с собой", lines:[["A","Hi! What can I get you?","Привет! Что вам?"],["B","A cappuccino, please.","Капучино, пожалуйста."],["A","Small or large?","Маленький или большой?"],["B","Small, to take away.","Маленький, с собой."],["A","That's three fifty.","С вас три пятьдесят."],["B","Here you are. Thanks!","Вот, держите. Спасибо!"]]},
  {level:2, id:"a5", title:"Где туалет?", lines:[["A","Excuse me, where is the toilet?","Извините, где туалет?"],["B","It's downstairs, on the left.","Внизу, слева."],["A","Thank you!","Спасибо!"],["B","You're welcome.","Пожалуйста."]]},
  {level:2, id:"a6", title:"Такси", lines:[["A","Hello! Where to?","Здравствуйте! Куда едем?"],["B","To the Grand Hotel, please.","В отель «Гранд», пожалуйста."],["A","Sure. Is this your first time in Lisbon?","Конечно. Вы в Лиссабоне впервые?"],["B","Yes, it is. It's beautiful!","Да. Тут красиво!"],["A","Welcome! We're here. That's fifteen euros.","Добро пожаловать! Приехали. Пятнадцать евро."],["B","Here you are. Keep the change.","Вот, держите. Сдачи не надо."]]},

  {level:3, id:"a7", title:"На ресепшене", lines:[
    ["A","Good evening! Welcome to the Blue Sea Hotel.","Добрый вечер! Добро пожаловать в отель «Синее море»."],
    ["B","Hi! I have a reservation. My name is Sokolov.","Здравствуйте! У меня бронь. Фамилия Соколов."],
    ["A","Let me see. Yes, a double room for four nights.","Сейчас посмотрю. Да, двухместный номер на четыре ночи."],
    ["B","That's right.","Всё верно."],
    ["A","Can I see your passport, please?","Можно ваш паспорт?"],
    ["B","Here you are. What time is breakfast?","Вот, пожалуйста. Во сколько завтрак?"],
    ["A","From seven to ten thirty, in the restaurant on the ground floor.","С семи до половины одиннадцатого, в ресторане на первом этаже."],
    ["B","Great. And what's the Wi-Fi password?","Отлично. А какой пароль от Wi‑Fi?"],
    ["A","It's on this card. Your room is four twelve. The lift is on the right.","Он на этой карточке. Ваш номер 412. Лифт справа."],
    ["B","Thank you very much!","Большое спасибо!"],
    ["A","Enjoy your stay!","Приятного отдыха!"]]},
  {level:3, id:"a8", title:"В ресторане", lines:[
    ["A","Good evening! A table for two?","Добрый вечер! Столик на двоих?"],
    ["B","Yes, please. Outside, if possible.","Да, пожалуйста. На улице, если можно."],
    ["A","Of course. Here are the menus. Something to drink?","Конечно. Вот меню. Что будете пить?"],
    ["B","A bottle of water and two glasses of white wine.","Бутылку воды и два бокала белого вина."],
    ["A","Perfect. Are you ready to order?","Отлично. Готовы заказать?"],
    ["B","What do you recommend?","Что посоветуете?"],
    ["A","The grilled fish is very fresh today. And the seafood pasta is popular.","Рыба на гриле сегодня очень свежая. И паста с морепродуктами популярна."],
    ["B","OK, one fish and one pasta, please. I'm allergic to nuts. Is that a problem?","Хорошо, одну рыбу и одну пасту. У меня аллергия на орехи. Это проблема?"],
    ["A","No problem, there are no nuts in these dishes.","Не проблема, в этих блюдах нет орехов."],
    ["B","Great, thank you.","Отлично, спасибо."],
    ["A","How was everything?","Как вам всё?"],
    ["B","It was delicious! Can we have the bill, please?","Было очень вкусно! Можно счёт?"]]},
  {level:3, id:"a9", title:"Билеты в музей", lines:[
    ["A","Hello! Two tickets, please.","Здравствуйте! Два билета, пожалуйста."],
    ["B","Adults?","Взрослые?"],
    ["A","Yes. How much is it?","Да. Сколько стоит?"],
    ["B","Fourteen euros each. Twenty-eight euros, please.","По четырнадцать евро. Двадцать восемь, пожалуйста."],
    ["A","Can I pay by card?","Можно картой?"],
    ["B","Of course. Would you like an audio guide? It's three euros.","Конечно. Хотите аудиогид? Он стоит три евро."],
    ["A","Is it in Russian?","Он есть на русском?"],
    ["B","Sorry, only English, Spanish and French.","Извините, только английский, испанский и французский."],
    ["A","OK, no, thank you. What time do you close?","Ясно, тогда не надо, спасибо. Во сколько вы закрываетесь?"],
    ["B","At six. The café is on the second floor.","В шесть. Кафе на третьем этаже."]]},

  {level:4, id:"a10", title:"Первый день в Лондоне", lines:[
    ["N","My name is Dima, and this is my first trip to London.","Меня зовут Дима, и это моя первая поездка в Лондон."],
    ["N","I arrived at Heathrow Airport in the morning.","Я прилетел в аэропорт Хитроу утром."],
    ["N","At passport control, the officer asked me about my visit.","На паспортном контроле офицер спросил меня о цели поездки."],
    ["N","I said, I'm here on holiday for one week.","Я сказал: я здесь в отпуске на одну неделю."],
    ["N","Then I took the train to the city centre.","Потом я сел на поезд до центра."],
    ["N","My hotel was small, but very clean and friendly.","Мой отель был маленький, но очень чистый и уютный."],
    ["N","In the afternoon, I walked along the river.","Днём я гулял вдоль реки."],
    ["N","I saw Big Ben and the London Eye.","Я видел Биг-Бен и колесо обозрения «Лондонский глаз»."],
    ["N","It started to rain, so I went into a small café.","Начался дождь, и я зашёл в маленькое кафе."],
    ["N","I ordered a cup of tea and a piece of cake.","Я заказал чашку чая и кусок торта."],
    ["N","The waitress was very kind and asked where I was from.","Официантка была очень приветливой и спросила, откуда я."],
    ["N","We talked for ten minutes. My English was not perfect, but she understood me!","Мы поговорили минут десять. Мой английский был не идеален, но она меня поняла!"],
    ["N","Tomorrow I'm going to visit the British Museum.","Завтра я собираюсь пойти в Британский музей."]]},
  {level:4, id:"a11", title:"Потерянный чемодан", lines:[
    ["N","Last summer, I flew to Barcelona with my sister.","Прошлым летом я летала в Барселону с сестрой."],
    ["N","We waited at the baggage claim for a long time.","Мы долго ждали у выдачи багажа."],
    ["N","My sister's bag arrived, but my suitcase didn't.","Сумка сестры приехала, а мой чемодан — нет."],
    ["N","I went to the lost luggage desk and said: Excuse me, my suitcase is missing.","Я пошла на стойку потерянного багажа и сказала: извините, мой чемодан пропал."],
    ["N","The woman asked me: What colour is it?","Женщина спросила: какого он цвета?"],
    ["N","I said: It's big and red, with a black label.","Я ответила: большой, красный, с чёрной биркой."],
    ["N","She gave me a form, and I wrote my hotel address and phone number.","Она дала мне бланк, и я написала адрес отеля и номер телефона."],
    ["N","That evening, I had no clothes, so I bought a T-shirt and a toothbrush.","Вечером у меня не было одежды, и я купила футболку и зубную щётку."],
    ["N","The next morning, the hotel receptionist called my room.","На следующее утро администратор позвонил мне в номер."],
    ["N","Good news! Your suitcase is here.","Хорошие новости! Ваш чемодан здесь."],
    ["N","I was so happy. Now I always take extra clothes in my hand luggage.","Я была так рада. Теперь я всегда беру запасную одежду в ручную кладь."]]},
  {level:4, id:"a12", title:"Ужин у моря", lines:[
    ["N","On our last evening in Greece, we wanted a special dinner.","В последний вечер в Греции мы хотели особенный ужин."],
    ["N","We asked the hotel receptionist: What restaurant do you recommend?","Мы спросили администратора: какой ресторан вы посоветуете?"],
    ["N","She said: There is a great fish restaurant near the beach. It's a ten-minute walk.","Она сказала: рядом с пляжем есть отличный рыбный ресторан. Десять минут пешком."],
    ["N","We went there at sunset. The waiter gave us a table by the sea.","Мы пришли туда на закате. Официант дал нам столик у моря."],
    ["N","The menu was only in Greek, so we asked: Do you have an English menu?","Меню было только на греческом, и мы спросили: у вас есть меню на английском?"],
    ["N","He smiled and said: No, but I can help you.","Он улыбнулся и сказал: нет, но я могу помочь."],
    ["N","He explained every dish, and we ordered grilled fish, a Greek salad and fresh bread.","Он объяснил каждое блюдо, и мы заказали рыбу на гриле, греческий салат и свежий хлеб."],
    ["N","Everything was delicious.","Всё было очень вкусно."],
    ["N","At the end, the waiter brought us free dessert and said: Come back next year!","В конце официант принёс нам десерт за счёт заведения и сказал: приезжайте в следующем году!"],
    ["N","We left a good tip and said: Thank you, it was wonderful.","Мы оставили хорошие чаевые и сказали: спасибо, было чудесно."],
    ["N","It was the best evening of our holiday.","Это был лучший вечер нашего отпуска."]]}
];
window.TRACK_LEVELS = {1:"Короткие фразы", 2:"Короткие диалоги", 3:"Длинные диалоги", 4:"Истории"};

/* ================= Для версии с ИИ (на своём сервере) ================= */
window.WRITING_TASKS = [
  {id:"w1", level:"A0", title:"О себе", task:"Напиши 3–5 предложений о себе: имя, откуда ты, куда хочешь поехать.", hint:"My name is… I'm from… I want to visit…"},
  {id:"w2", level:"A1", title:"Письмо в отель", task:"Напиши короткое письмо в отель: у тебя бронь, ты приедешь поздно вечером, нужен трансфер из аэропорта.", hint:"Hello! I have a reservation…"},
  {id:"w3", level:"A1", title:"Отзыв о кафе", task:"Напиши короткий отзыв о кафе: что заказал, что понравилось, что нет.", hint:"I had… It was…"},
  {id:"w4", level:"A2", title:"Открытка другу", task:"Напиши открытку другу из поездки: где ты, что видел, какие планы.", hint:"Hi! I'm in… Yesterday I…"}
];
window.DIALOGS = [
  {id:"d1", title:"Знакомство", role:"a friendly traveller in a hostel", start:"Hi! I'm Emma. Where are you from?", goal:"Познакомься и расспроси собеседника о поездке"},
  {id:"d2", title:"В кафе", role:"a barista in a coffee shop", start:"Hello! What can I get you today?", goal:"Закажи напиток и что-нибудь поесть, спроси цену"},
  {id:"d3", title:"В отеле", role:"a hotel receptionist", start:"Good evening! Welcome to the Park Hotel. Do you have a reservation?", goal:"Заселись и спроси про завтрак"},
  {id:"d4", title:"Спросить дорогу", role:"a local person on the street", start:"Hi, you look a bit lost. Can I help you?", goal:"Узнай, как пройти к вокзалу"},
  {id:"d5", title:"Свободная беседа", role:"a friendly local who chats with tourists", start:"Hey! How do you like our city?", goal:"Просто поболтай о поездке"}
];
