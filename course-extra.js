// Дополнительные задания для английских курсов: больше разговоров и письма.
// Подключается после course.js и course-base.js и сам добавляет задания в уроки:
//   • пропуски и «составь сам» — перед финальным разговором урока;
//   • новые разговоры — в конец урока;
//   • «Разговорный практикум» — последним уроком каждого блока «Путешествий».
// Тип compose: {t:"compose", task:"ситуация по-русски", say:"пример ответа", re:"что должно быть в ответе", hint?, min?}
// re проверяется по тексту в нижнем регистре, без знаков препинания; сокращения раскрыты (I'm → i am, don't → do not).

(function () {

/* ======================= ПУТЕШЕСТВИЯ: в каждый урок ======================= */
const TRAVEL_EXTRA = {
  l1: [
    {t:"gap", ru:"Как дела? — Хорошо, спасибо.", text:"How [are] you? — I'm [fine|good|ok|okay|great], thanks."},
    {t:"gap", ru:"Большое спасибо! — Пожалуйста.", text:"Thank you very [much]! — You're [welcome]."},
    {t:"gap", ru:"Извините, это ваша сумка?", text:"[Excuse] [me], is this your bag?"},
    {t:"compose", task:"Утро в отеле: поздоровайся с администратором и спроси, как у него дела.", say:"Good morning! How are you?", re:"^(?=.*\\b(good morning|hello|hi|hey|morning)\\b)(?=.*how are you)", min:3},
    {t:"compose", task:"Ты случайно толкнул человека в метро. Извинись.", say:"Oh, sorry! I'm so sorry.", re:"sorry|apologi"},
    {t:"roleplay", title:"Кафе: официант приносит кофе.", lines:[
      {s:"them", en:"Here is your coffee.", ru:"Вот ваш кофе."},
      {s:"you", ru:"Поблагодари", say:"Thank you very much!", re:"thank"},
      {s:"them", en:"You're welcome. Anything else?", ru:"Пожалуйста. Что-нибудь ещё?"},
      {s:"you", ru:"Скажи: нет, спасибо", say:"No, thank you.", re:"^(?=.*\\bno\\b)(?=.*thank)"},
      {s:"them", en:"Have a nice day!", ru:"Хорошего дня!"},
      {s:"you", ru:"Пожелай того же и попрощайся", say:"You too! Goodbye!", re:"you too|bye|thank"}
    ]}
  ],
  l2: [
    {t:"gap", ru:"Меня зовут Анна.", text:"My [name] is Anna."},
    {t:"gap", ru:"Я из России. А ты откуда?", text:"I'm [from] Russia. Where are [you] from?"},
    {t:"gap", ru:"Я не очень хорошо говорю по-английски.", text:"I don't [speak] English very [well]."},
    {t:"compose", task:"Представься: скажи, как тебя зовут и откуда ты.", say:"Hi! My name is Ivan. I'm from Russia.", re:"^(?=.*(my name is|\\bi am (?!from)[a-z]+|call me))(?=.*\\bfrom [a-z]+)", min:5},
    {t:"compose", task:"Скажи, что плохо говоришь по-английски, и попроси говорить медленнее.", say:"I don't speak English well. Can you speak slowly, please?", re:"^(?=.*(not speak|my english is|english is not|speak a little|little english))(?=.*slow)", min:6},
    {t:"roleplay", title:"Попутчик в поезде.", lines:[
      {s:"them", en:"Hi! Are you a tourist?", ru:"Привет! Ты турист?"},
      {s:"you", ru:"Ответь: да, ты здесь в отпуске", say:"Yes, I'm here on holiday.", re:"yes|holiday|vacation|tourist"},
      {s:"them", en:"Where are you from?", ru:"Откуда ты?"},
      {s:"you", ru:"Скажи, откуда ты", say:"I'm from Russia.", re:"\\bfrom\\b|russia"},
      {s:"them", en:"Cool! How long are you here for?", ru:"Круто! Надолго приехал?"},
      {s:"you", ru:"Скажи: на неделю", say:"For a week.", re:"week|days|\\d|month"},
      {s:"them", en:"Enjoy your trip!", ru:"Хорошей поездки!"},
      {s:"you", ru:"Поблагодари", say:"Thank you!", re:"thank"}
    ]}
  ],
  l3: [
    {t:"gap", ru:"Сколько это стоит? — Десять евро.", text:"How [much] is it? — It's ten [euros]."},
    {t:"gap", ru:"Можно оплатить картой?", text:"Can I pay [by] [card]?"},
    {t:"gap", ru:"Слишком дорого. Есть что-нибудь подешевле?", text:"It's too [expensive]. Do you have something [cheaper]?"},
    {t:"compose", task:"Спроси, сколько стоят эти солнечные очки (sunglasses).", say:"How much are these sunglasses?", re:"how much", min:3},
    {t:"compose", task:"Скажи, что это слишком дорого, и спроси, можно ли оплатить картой.", say:"It's too expensive. Can I pay by card?", re:"^(?=.*expensive)(?=.*card)", min:5},
    {t:"roleplay", title:"Сувенирная лавка.", lines:[
      {s:"them", en:"Hello! Do you like this magnet?", ru:"Здравствуйте! Нравится этот магнит?"},
      {s:"you", ru:"Спроси, сколько он стоит", say:"Yes! How much is it?", re:"how much"},
      {s:"them", en:"It's five euros.", ru:"Пять евро."},
      {s:"you", ru:"Скажи, что возьмёшь два", say:"I'll take two, please.", re:"\\btwo\\b|\\b2\\b|take"},
      {s:"them", en:"That's ten euros. Cash or card?", ru:"С вас десять евро. Наличными или картой?"},
      {s:"you", ru:"Ответь: картой", say:"By card, please.", re:"card"},
      {s:"them", en:"Here's your receipt. Thank you!", ru:"Вот ваш чек. Спасибо!"},
      {s:"you", ru:"Поблагодари и попрощайся", say:"Thanks! Bye!", re:"thank|bye"}
    ]}
  ],
  l4: [
    {t:"gap", ru:"Вот мой паспорт и посадочный талон.", text:"Here is my [passport] and my boarding [pass]."},
    {t:"gap", ru:"Можно место у прохода?", text:"Can I have an [aisle] seat?"},
    {t:"gap", ru:"Я здесь в отпуске на неделю.", text:"I'm here [on] [holiday|vacation] for a [week]."},
    {t:"compose", task:"Паспортный контроль: скажи, что ты в отпуске на 10 дней.", say:"I'm here on holiday for ten days.", re:"^(?=.*(holiday|vacation|tourism|tourist|travel))(?=.*(days|\\d+|ten|week))", min:4},
    {t:"compose", task:"Спроси, где выдача багажа.", say:"Excuse me, where is the baggage claim?", re:"^(?=.*where)(?=.*(baggage|luggage|bags|suitcase))", min:3},
    {t:"roleplay", title:"Паспортный контроль.", lines:[
      {s:"them", en:"Good afternoon. Passport, please.", ru:"Добрый день. Паспорт, пожалуйста."},
      {s:"you", ru:"Дай паспорт: «Вот, пожалуйста»", say:"Here you are.", re:"here|sure|yes"},
      {s:"them", en:"What is the purpose of your visit?", ru:"Какова цель вашего визита?"},
      {s:"you", ru:"Скажи: отпуск, туризм", say:"Tourism. I'm on holiday.", re:"holiday|tourism|vacation|tourist|business|travel"},
      {s:"them", en:"Where are you staying?", ru:"Где вы остановитесь?"},
      {s:"you", ru:"Скажи: в отеле в центре города", say:"At a hotel in the city centre.", re:"hotel|hostel|apartment|friend|centre|center"},
      {s:"them", en:"How long are you staying?", ru:"Как долго пробудете?"},
      {s:"you", ru:"Ответь: две недели", say:"Two weeks.", re:"week|days|\\d|month"},
      {s:"them", en:"OK. Enjoy your stay.", ru:"Хорошо. Приятного пребывания."}
    ]}
  ],
  l5: [
    {t:"gap", ru:"Билет туда-обратно до Оксфорда, пожалуйста.", text:"A [return] ticket to Oxford, please."},
    {t:"gap", ru:"Этот автобус идёт в аэропорт?", text:"Does this bus [go] to the [airport]?"},
    {t:"gap", ru:"Сколько времени ехать?", text:"How [long] does it [take]?"},
    {t:"compose", task:"Спроси, когда следующий поезд в Лондон.", say:"When is the next train to London?", re:"^(?=.*(when|what time))(?=.*train)", min:4},
    {t:"compose", task:"В такси: попроси отвезти в аэропорт и спроси, сколько это будет стоить.", say:"To the airport, please. How much will it cost?", re:"^(?=.*airport)(?=.*how much)", min:5},
    {t:"roleplay", title:"Касса на вокзале.", lines:[
      {s:"them", en:"Next, please! Where are you going?", ru:"Следующий! Куда едете?"},
      {s:"you", ru:"Скажи: в Оксфорд", say:"To Oxford, please.", re:"oxford|\\bto [a-z]+"},
      {s:"them", en:"One way or return?", ru:"В одну сторону или туда-обратно?"},
      {s:"you", ru:"Ответь: туда-обратно", say:"Return, please.", re:"return|round trip|both ways"},
      {s:"them", en:"That's twenty-four pounds. The train leaves at ten fifteen from platform four.", ru:"24 фунта. Поезд в 10:15 с четвёртой платформы."},
      {s:"you", ru:"Переспроси, какая платформа", say:"Sorry, which platform?", re:"platform|which|sorry|repeat|again|pardon"},
      {s:"them", en:"Platform four.", ru:"Четвёртая платформа."},
      {s:"you", ru:"Поблагодари", say:"Thank you!", re:"thank"}
    ]}
  ],
  l6: [
    {t:"gap", ru:"Поверните налево у банка и идите прямо.", text:"Turn [left] at the bank and go [straight] on."},
    {t:"gap", ru:"Это далеко отсюда?", text:"Is it [far] from [here]?"},
    {t:"gap", ru:"Можете показать мне на карте?", text:"Could you [show] me on the [map]?"},
    {t:"compose", task:"Спроси прохожего, есть ли рядом банкомат (ATM).", say:"Excuse me, is there an ATM near here?", re:"^(?=.*(is there|where))(?=.*(atm|cash machine|cashpoint|bank))", min:4},
    {t:"compose", task:"Объясни туристу дорогу: иди прямо, потом поверни направо — это рядом.", say:"Go straight on, then turn right. It's near here.", re:"^(?=.*straight)(?=.*right)", min:5},
    {t:"roleplay", title:"Ты ищешь музей.", lines:[
      {s:"them", en:"Can I help you? You look lost.", ru:"Вам помочь? Вы, похоже, заблудились."},
      {s:"you", ru:"Спроси, как пройти к музею", say:"Yes, please. How do I get to the museum?", re:"museum"},
      {s:"them", en:"Go straight on for two blocks, then turn left.", ru:"Два квартала прямо, потом налево."},
      {s:"you", ru:"Спроси, далеко ли это", say:"Is it far?", re:"\\bfar\\b|how long|minutes"},
      {s:"them", en:"About ten minutes on foot.", ru:"Минут десять пешком."},
      {s:"you", ru:"Спроси, можно дойти пешком или лучше автобус", say:"Can I walk, or should I take a bus?", re:"walk|bus|taxi|metro|on foot"},
      {s:"them", en:"Walking is fine. It's a nice street!", ru:"Пешком нормально. Красивая улица!"},
      {s:"you", ru:"Поблагодари", say:"Great, thank you!", re:"thank"}
    ]}
  ],
  l7: [
    {t:"gap", ru:"У меня бронь на две ночи.", text:"I have a [reservation] for two [nights]."},
    {t:"gap", ru:"Во сколько выезд?", text:"What time is [check-out]?"},
    {t:"gap", ru:"Не работает кондиционер.", text:"The air conditioning [doesn't] [work]."},
    {t:"compose", task:"Позвони на ресепшен: скажи, что в номере не работает душ.", say:"Hello, the shower in my room doesn't work.", re:"^(?=.*shower)(?=.*(does not work|is not working|not working|broken|problem))", min:4},
    {t:"compose", task:"Спроси, можно ли оставить багаж после выезда.", say:"Can I leave my luggage here after check-out?", re:"^(?=.*(leave|keep|store))(?=.*(luggage|bag|bags|suitcase))", min:4},
    {t:"roleplay", title:"Звонок на ресепшен из номера.", lines:[
      {s:"them", en:"Reception, how can I help?", ru:"Ресепшен, чем могу помочь?"},
      {s:"you", ru:"Назови номер (305) и скажи, что не работает кондиционер", say:"Hi, this is room 305. The air conditioning doesn't work.", re:"air conditioning|aircon|\\bac\\b|not work|broken"},
      {s:"them", en:"I'm sorry about that. I'll send someone in ten minutes.", ru:"Извините. Пришлю мастера через десять минут."},
      {s:"you", ru:"Поблагодари и попроси ещё два полотенца", say:"Thank you. Can I also have two more towels?", re:"towel"},
      {s:"them", en:"Of course. Anything else?", ru:"Конечно. Что-нибудь ещё?"},
      {s:"you", ru:"Скажи: нет, это всё", say:"No, that's all. Thanks!", re:"\\bno\\b|that is all|thank|nothing"}
    ]}
  ],
  l8: [
    {t:"gap", ru:"Можно меню, пожалуйста?", text:"Can I [have] the [menu], please?"},
    {t:"gap", ru:"Я бы хотел стакан воды.", text:"I'd [like] a glass of [water]."},
    {t:"gap", ru:"Можно нам счёт, пожалуйста?", text:"Could we have the [bill|check], please?"},
    {t:"compose", task:"Закажи пасту и бокал белого вина.", say:"I'd like the pasta and a glass of white wine, please.", re:"^(?=.*pasta)(?=.*wine)", min:4},
    {t:"compose", task:"Скажи официанту, что у тебя аллергия на орехи, и спроси, есть ли они в блюде.", say:"I'm allergic to nuts. Are there nuts in this dish?", re:"^(?=.*allerg)(?=.*nut)", min:5},
    {t:"roleplay", title:"Кофейня.", lines:[
      {s:"them", en:"Hi! What can I get you?", ru:"Привет! Что вам?"},
      {s:"you", ru:"Закажи капучино", say:"A cappuccino, please.", re:"cappuccino|coffee|latte|tea|flat white"},
      {s:"them", en:"Small, medium or large?", ru:"Маленький, средний или большой?"},
      {s:"you", ru:"Скажи: средний", say:"Medium, please.", re:"medium|small|large|regular"},
      {s:"them", en:"Anything to eat?", ru:"Что-нибудь поесть?"},
      {s:"you", ru:"Закажи круассан", say:"Yes, a croissant, please.", re:"croissant|cake|sandwich|muffin|cookie|\\bno\\b"},
      {s:"them", en:"For here or to go?", ru:"Здесь или с собой?"},
      {s:"you", ru:"Скажи: с собой", say:"To go, please.", re:"to go|take away|takeaway|here"},
      {s:"them", en:"That's six fifty.", ru:"С вас шесть пятьдесят."}
    ]}
  ],
  l9: [
    {t:"gap", ru:"Есть такой размером поменьше?", text:"Do you have this in a [smaller] size?"},
    {t:"gap", ru:"Можно примерить?", text:"Can I [try] it [on]?"},
    {t:"gap", ru:"Он слишком большой.", text:"It's [too] [big]."},
    {t:"compose", task:"Спроси, есть ли эта куртка в чёрном цвете.", say:"Do you have this jacket in black?", re:"^(?=.*(do you have|is there|have you got|is it))(?=.*black)", min:4},
    {t:"compose", task:"Скажи, что футболка слишком маленькая, и попроси размер побольше.", say:"It's too small. Do you have a bigger size?", re:"^(?=.*small)(?=.*(bigger|larger|medium|large|size))", min:5},
    {t:"roleplay", title:"Возврат покупки.", lines:[
      {s:"them", en:"Hello! How can I help you?", ru:"Здравствуйте! Чем помочь?"},
      {s:"you", ru:"Скажи, что хочешь вернуть (return) эту рубашку", say:"I'd like to return this shirt.", re:"return|refund|exchange|change"},
      {s:"them", en:"What's the problem with it?", ru:"Что с ней не так?"},
      {s:"you", ru:"Скажи, что она слишком большая", say:"It's too big.", re:"too (big|large|small|long|short)|size"},
      {s:"them", en:"Do you have the receipt?", ru:"У вас есть чек?"},
      {s:"you", ru:"Ответь: да, вот он", say:"Yes, here it is.", re:"yes|here"},
      {s:"them", en:"Would you like a refund or a different size?", ru:"Вернуть деньги или поменять размер?"},
      {s:"you", ru:"Попроси другой размер", say:"A different size, please.", re:"size|smaller|exchange|refund|money"}
    ]}
  ],
  l10: [
    {t:"gap", ru:"Ты здесь впервые?", text:"Is this your [first] [time] here?"},
    {t:"gap", ru:"Чем ты занимаешься? — Я работаю в IT.", text:"What do you [do]? — I [work] in IT."},
    {t:"gap", ru:"Как тебе город?", text:"How do you [like] the [city]?"},
    {t:"compose", task:"Скажи, что тебе очень нравится город, и спроси собеседника, откуда он.", say:"I love this city! Where are you from?", re:"^(?=.*(love|like|great|beautiful|amazing|wonderful))(?=.*where are you from)", min:5},
    {t:"compose", task:"Расскажи, чем ты занимаешься и что любишь делать в свободное время.", say:"I work in sales. In my free time I like hiking.", re:"^(?=.*(work|job|study|student|\\bi am an? ))(?=.*(like|love|enjoy))", min:6},
    {t:"roleplay", title:"Экскурсия: болтаешь с туристом из группы.", lines:[
      {s:"them", en:"Is this your first time in Italy?", ru:"Ты в Италии впервые?"},
      {s:"you", ru:"Ответь (да / нет)", say:"Yes, it is!", re:"yes|\\bno\\b|first|time|been"},
      {s:"them", en:"What do you think of the food?", ru:"Как тебе еда?"},
      {s:"you", ru:"Скажи, что еда потрясающая", say:"It's amazing!", re:"delicious|amazing|great|love|good|tasty|fantastic"},
      {s:"them", en:"Me too! What's your favourite dish so far?", ru:"Мне тоже! Какое блюдо пока самое любимое?"},
      {s:"you", ru:"Назови любимое блюдо", say:"I love the pizza here!", re:"pizza|pasta|lasagn|risotto|gelato|ice cream|love|favourite|favorite"},
      {s:"them", en:"Nice choice! Enjoy the tour!", ru:"Хороший выбор! Приятной экскурсии!"},
      {s:"you", ru:"Ответь «тебе тоже»", say:"You too!", re:"you too|thank"}
    ]}
  ],
  l11: [
    {t:"gap", ru:"Вчера мы ходили на пляж.", text:"Yesterday we [went] to the beach."},
    {t:"gap", ru:"Было потрясающе! Мы отлично провели время.", text:"It [was] amazing! We [had] a great time."},
    {t:"gap", ru:"Завтра я собираюсь посетить замок.", text:"Tomorrow I'm [going] [to] visit the castle."},
    {t:"compose", task:"Расскажи, что ты делал вчера (одно-два предложения в прошедшем времени).", say:"Yesterday I visited the old town and ate pizza.", re:"\\b(went|visited|saw|ate|had|was|were|walked|bought|took|swam|watched|played|met)\\b", min:4},
    {t:"compose", task:"Расскажи, что собираешься делать завтра.", say:"Tomorrow I'm going to visit the museum.", re:"going to|\\bwill\\b|gonna|planning", min:4},
    {t:"roleplay", title:"Звонок другу из отпуска.", lines:[
      {s:"them", en:"Hi! How's your holiday?", ru:"Привет! Как отпуск?"},
      {s:"you", ru:"Скажи, что отлично", say:"It's great!", re:"great|good|amazing|fantastic|nice|fine|wonderful|perfect|cool"},
      {s:"them", en:"What did you do yesterday?", ru:"Что делал вчера?"},
      {s:"you", ru:"Расскажи одно-два дела в прошедшем", say:"I went to the beach and swam in the sea.", re:"\\b(went|visited|saw|ate|had|was|walked|bought|took|swam|watched|met)\\b"},
      {s:"them", en:"What's the weather like?", ru:"Какая погода?"},
      {s:"you", ru:"Скажи, что солнечно и жарко", say:"It's sunny and hot.", re:"sunny|hot|warm|rain|cold|cloudy|nice"},
      {s:"them", en:"Lucky you! What are you going to do tomorrow?", ru:"Везёт! А завтра что будешь делать?"},
      {s:"you", ru:"Расскажи план", say:"I'm going to visit the castle.", re:"going to|\\bwill\\b|gonna"},
      {s:"them", en:"Have fun! Send me photos!", ru:"Веселись! Присылай фото!"}
    ]}
  ],
  l12: [
    {t:"gap", ru:"Я потерял паспорт.", text:"I [lost] my [passport]."},
    {t:"gap", ru:"У меня болит голова и горло.", text:"I have a [headache] and a sore [throat]."},
    {t:"gap", ru:"Где ближайшая аптека?", text:"Where is the [nearest] [pharmacy]?"},
    {t:"compose", task:"Позвони в отель: скажи, что потерял ключ от номера, и попроси помочь.", say:"I lost my room key. Can you help me, please?", re:"^(?=.*(lost|lose|cannot find))(?=.*key)", min:5},
    {t:"compose", task:"В аптеке: скажи, что у тебя болит живот, и спроси, есть ли лекарство.", say:"I have a stomachache. Do you have something for it?", re:"^(?=.*(stomach|tummy|belly))(?=.*(something|medicine|tablet|pill|have))", min:5},
    {t:"roleplay", title:"Вечером ты заблудился в городе.", lines:[
      {s:"them", en:"Are you OK? Can I help?", ru:"Всё в порядке? Помочь?"},
      {s:"you", ru:"Скажи, что заблудился и не можешь найти отель", say:"I'm lost. I can't find my hotel.", re:"lost|cannot find|hotel"},
      {s:"them", en:"What's the name of your hotel?", ru:"Как называется ваш отель?"},
      {s:"you", ru:"Назови отель", say:"The Grand Hotel.", re:"hotel|hostel|[a-z]{3,}"},
      {s:"them", en:"Oh, it's close. Do you want me to call a taxi?", ru:"О, это рядом. Вызвать такси?"},
      {s:"you", ru:"Скажи: нет, спасибо — и спроси дорогу", say:"No, thanks. Can you tell me the way?", re:"way|walk|where|how|direction"},
      {s:"them", en:"Sure. Go straight, then take the second street on the right.", ru:"Конечно. Прямо, потом вторая улица направо."},
      {s:"you", ru:"Поблагодари", say:"Thank you so much!", re:"thank"}
    ]}
  ]
};

/* ======================= ПУТЕШЕСТВИЯ: «Разговорный практикум» в каждом блоке ======================= */
const SURVIVAL_TIP = {t:"tip", title:"Если не понял — это нормально", html:`<p>В живом разговоре никто не говорит идеально. Главное — не молчать. Эти фразы спасают в любой ситуации:</p><ul><li><b>Sorry?</b> / <b>Pardon?</b> — Простите? (не расслышал)</li><li><b>Could you say that again?</b> — Повторите, пожалуйста.</li><li><b>Could you speak more slowly?</b> — Помедленнее, пожалуйста.</li><li><b>What does … mean?</b> — Что значит …?</li><li><b>How do you say … in English?</b> — Как по-английски …?</li><li><b>Let me think.</b> — Дайте подумать.</li></ul>`};

const TRAVEL_PRACTICE = {
  b1: {
    id: "lp1", icon: "chat", title: "Практикум: первые разговоры",
    goals: ["Поддержать разговор, даже если что-то не понял", "Познакомиться и рассказать о себе", "Купить что-то и поторговаться"],
    summary: ["Sorry? / Could you say that again? — переспросить", "Could you speak more slowly?", "What does … mean? · How do you say … in English?", "Can you give me a discount? — Можно скидку?", "Nice to meet you! / Have a nice day!"],
    phrases: [["Sorry?","Простите? (не расслышал)"],["Could you say that again?","Повторите, пожалуйста."],["Could you speak more slowly?","Помедленнее, пожалуйста."],["What does it mean?","Что это значит?"],["How do you say it in English?","Как это по-английски?"],["Let me think.","Дайте подумать."],["Can you give me a discount?","Можно скидку?"],["Just a moment.","Минутку."]],
    steps: [
      SURVIVAL_TIP,
      {t:"gap", ru:"Повторите, пожалуйста.", text:"Could you [say] that [again], please?"},
      {t:"gap", ru:"Что значит это слово?", text:"What does this word [mean]?"},
      {t:"gap", ru:"Помедленнее, пожалуйста.", text:"Could you speak more [slowly], please?"},
      {t:"compose", task:"Ты не понял, что сказал продавец. Попроси повторить медленнее.", say:"Sorry, could you say that again more slowly?", re:"repeat|again|slow|pardon", min:3},
      {t:"compose", task:"Спроси, как по-английски «зонт».", say:"How do you say «зонт» in English?", re:"how do you say", min:4},
      {t:"compose", task:"Представься новому знакомому в двух-трёх предложениях: имя, откуда ты, чем занимаешься.", say:"Hi! I'm Ivan, I'm from Russia. I work as a designer.", re:"^(?=.*(my name is|\\bi am (?!from)[a-z]+|call me))(?=.*\\bfrom [a-z]+)(?=.*(work|job|student|study|i am an? ))", min:8},
      {t:"roleplay", title:"Ресепшен хостела: знакомство и оплата.", lines:[
        {s:"them", en:"Hi! Welcome to Sunny Hostel. What's your name?", ru:"Привет! Добро пожаловать в Sunny Hostel. Как тебя зовут?"},
        {s:"you", ru:"Назови имя", say:"Hi! My name is Ivan.", re:"my name is|\\bi am\\b|it is [a-z]|call me|[a-z]{3,}"},
        {s:"them", en:"Great. Three nights in a dorm, that's sixty euros.", ru:"Отлично. Три ночи в общем номере — шестьдесят евро."},
        {s:"you", ru:"Ты не расслышал сумму — переспроси", say:"Sorry, how much?", re:"sorry|how much|again|repeat|pardon"},
        {s:"them", en:"Sixty euros. Six zero.", ru:"Шестьдесят евро. Шесть-ноль."},
        {s:"you", ru:"Спроси, можно ли картой", say:"Can I pay by card?", re:"card"},
        {s:"them", en:"Sure. Here's your key. Breakfast is free!", ru:"Конечно. Вот ключ. Завтрак бесплатный!"},
        {s:"you", ru:"Поблагодари", say:"Great, thank you!", re:"thank|great"}
      ]},
      {t:"roleplay", title:"Пляж: с тобой заговорили.", lines:[
        {s:"them", en:"Hi! Is this place free?", ru:"Привет! Здесь свободно?"},
        {s:"you", ru:"Скажи: да, садитесь", say:"Yes, sure. Sit down.", re:"yes|sure|free|of course"},
        {s:"them", en:"Thanks! I'm Sarah, from Canada. And you?", ru:"Спасибо! Я Сара из Канады. А ты?"},
        {s:"you", ru:"Представься и скажи, откуда ты", say:"I'm Ivan, from Russia. Nice to meet you!", re:"\\bfrom\\b|russia|my name|\\bi am\\b"},
        {s:"them", en:"Nice to meet you too! What do you do?", ru:"Взаимно! Чем занимаешься?"},
        {s:"you", ru:"Скажи, кем работаешь (или что ты студент)", say:"I'm a teacher.", re:"\\bi am\\b|work|student|study|job"},
        {s:"them", en:"Cool! The water is great today.", ru:"Круто! Вода сегодня отличная."},
        {s:"you", ru:"Согласись", say:"Yes, it's perfect!", re:"yes|great|perfect|nice|agree|warm|beautiful"}
      ]},
      {t:"roleplay", title:"Рынок: продавец называет высокую цену.", lines:[
        {s:"them", en:"This bag? Forty euros. Very good quality!", ru:"Эта сумка? Сорок евро. Отличное качество!"},
        {s:"you", ru:"Скажи, что это слишком дорого", say:"Forty? That's too expensive.", re:"expensive|too much"},
        {s:"them", en:"OK, for you — thirty-five.", ru:"Ладно, для вас — тридцать пять."},
        {s:"you", ru:"Предложи двадцать пять", say:"Can you do twenty-five?", re:"twenty|\\b25\\b|\\b2\\d\\b|discount|cheaper"},
        {s:"them", en:"Thirty. Last price!", ru:"Тридцать. Последняя цена!"},
        {s:"you", ru:"Согласись и скажи, что берёшь", say:"OK, I'll take it.", re:"ok|okay|take|deal|fine|yes"},
        {s:"them", en:"Thank you! Have a nice day!", ru:"Спасибо! Хорошего дня!"},
        {s:"you", ru:"Пожелай того же", say:"You too!", re:"you too|thank|bye"}
      ]},
      {t:"roleplay", title:"Кофе на заправке: кассир говорит быстро.", lines:[
        {s:"them", en:"Hi-what-can-I-get-you-today?", ru:"(очень быстро) Привет-что-будете?"},
        {s:"you", ru:"Попроси говорить медленнее", say:"Sorry, could you speak more slowly?", re:"slow|sorry|again|repeat|pardon"},
        {s:"them", en:"Of course. What can I get you?", ru:"Конечно. Что вам?"},
        {s:"you", ru:"Закажи кофе и воду", say:"A coffee and a bottle of water, please.", re:"^(?=.*coffee)(?=.*water)"},
        {s:"them", en:"Anything else?", ru:"Что-нибудь ещё?"},
        {s:"you", ru:"Скажи, что больше ничего", say:"No, that's all.", re:"\\bno\\b|that is all|nothing"}
      ]}
    ]
  },
  b2: {
    id: "lp2", icon: "chat", title: "Практикум: в дороге",
    goals: ["Решить проблему с потерянным багажом", "Разобраться с билетами и пересадками", "Уточнить маршрут и переспросить"],
    summary: ["My suitcase didn't arrive. — Мой чемодан не прилетел.", "It's black, medium size. — Описание вещи", "Where do I change trains? — Где пересадка?", "Is this the right way to…? — Я правильно иду к…?", "Could you write it down, please? — Можете записать?"],
    phrases: [["My suitcase didn't arrive.","Мой чемодан не прилетел."],["It's a big black suitcase.","Это большой чёрный чемодан."],["Where do I change trains?","Где пересадка?"],["Which stop is it?","Какая остановка?"],["Is this the right way to the station?","Я правильно иду к вокзалу?"],["Could you write it down, please?","Можете записать?"],["I missed my train.","Я опоздал на поезд."],["When is the next one?","Когда следующий?"]],
    steps: [
      {t:"gap", ru:"Мой чемодан не прилетел.", text:"My suitcase [didn't] [arrive]."},
      {t:"gap", ru:"Где пересадка на синюю линию?", text:"Where do I [change] to the blue [line]?"},
      {t:"gap", ru:"Я опоздал на поезд. Когда следующий?", text:"I [missed] my train. When is the [next] one?"},
      {t:"compose", task:"Опиши свой потерянный чемодан: размер и цвет.", say:"It's a big black suitcase.", re:"^(?=.*(suitcase|bag|luggage|it is))(?=.*(black|red|blue|grey|gray|green|white|brown|big|small|medium|large))", min:4},
      {t:"compose", task:"Спроси, правильно ли ты идёшь к вокзалу.", say:"Excuse me, is this the right way to the station?", re:"^(?=.*(right way|is this the way|correct way|am i going))(?=.*station)", min:5},
      {t:"compose", task:"Попроси записать адрес на бумаге.", say:"Could you write down the address, please?", re:"write", min:4},
      {t:"roleplay", title:"Аэропорт: багаж не прилетел.", lines:[
        {s:"them", en:"Hello, this is lost luggage. How can I help?", ru:"Здравствуйте, это служба розыска багажа. Чем помочь?"},
        {s:"you", ru:"Скажи, что твой чемодан не прилетел", say:"My suitcase didn't arrive.", re:"suitcase|bag|luggage|did not arrive|lost|missing"},
        {s:"them", en:"I'm sorry. What does it look like?", ru:"Сожалею. Как он выглядит?"},
        {s:"you", ru:"Опиши: большой, красный", say:"It's big and red.", re:"black|red|blue|grey|gray|green|white|brown|big|small|large"},
        {s:"them", en:"OK. Where are you staying?", ru:"Хорошо. Где вы остановились?"},
        {s:"you", ru:"Назови отель", say:"At the Park Hotel.", re:"hotel|hostel|apartment|at the|[a-z]{3,}"},
        {s:"them", en:"We'll deliver it to your hotel tomorrow.", ru:"Завтра доставим в отель."},
        {s:"you", ru:"Попроси записать номер заявки", say:"Thank you. Could you write down the number, please?", re:"write|number|thank"}
      ]},
      {t:"roleplay", title:"Метро: покупаешь билет и спрашиваешь пересадку.", lines:[
        {s:"them", en:"Hi! Can I help you with the machine?", ru:"Привет! Помочь с автоматом?"},
        {s:"you", ru:"Скажи: да, нужен билет до центра", say:"Yes, please. I need a ticket to the city centre.", re:"ticket|centre|center|yes"},
        {s:"them", en:"Single or day ticket?", ru:"Разовый или на день?"},
        {s:"you", ru:"Спроси, что дешевле, если ездить много", say:"Which is cheaper if I travel a lot?", re:"cheaper|which|better|day"},
        {s:"them", en:"The day ticket. It's eight euros.", ru:"Дневной. Восемь евро."},
        {s:"you", ru:"Возьми дневной и спроси, где пересадка на красную линию", say:"OK, a day ticket. Where do I change to the red line?", re:"change|red line|transfer|where"},
        {s:"them", en:"At Central Station, two stops from here.", ru:"На Центральной, через две остановки."},
        {s:"you", ru:"Поблагодари", say:"Thanks a lot!", re:"thank"}
      ]},
      {t:"roleplay", title:"Опоздал на поезд.", lines:[
        {s:"them", en:"Good morning. Can I help you?", ru:"Доброе утро. Чем помочь?"},
        {s:"you", ru:"Скажи, что опоздал на поезд в Бат", say:"I missed my train to Bath.", re:"missed|late|train"},
        {s:"them", en:"Don't worry. The next one is at eleven twenty.", ru:"Не переживайте. Следующий в 11:20."},
        {s:"you", ru:"Спроси, действует ли твой билет", say:"Can I use my ticket?", re:"ticket|use|valid|ok"},
        {s:"them", en:"Yes, your ticket is valid for the whole day.", ru:"Да, билет действует весь день."},
        {s:"you", ru:"Уточни, с какой платформы", say:"Which platform?", re:"platform|which|where"},
        {s:"them", en:"Platform seven.", ru:"Седьмая платформа."}
      ]},
      {t:"roleplay", title:"Такси: водитель едет не туда.", lines:[
        {s:"them", en:"OK, we're almost there.", ru:"Так, почти приехали."},
        {s:"you", ru:"Скажи, что вам нужен отель у моря, а не в центре", say:"Sorry, I need the hotel by the sea, not in the centre.", re:"sea|beach|not|wrong|sorry"},
        {s:"them", en:"Oh, the Sea View Hotel? That's fifteen minutes more.", ru:"А, Sea View? Это ещё пятнадцать минут."},
        {s:"you", ru:"Спроси, сколько это будет стоить", say:"How much will it cost?", re:"how much|cost|price"},
        {s:"them", en:"About ten euros more.", ru:"Примерно на десять евро дороже."},
        {s:"you", ru:"Согласись", say:"OK, no problem.", re:"ok|okay|fine|no problem|yes|sure"}
      ]}
    ]
  },
  b3: {
    id: "lp3", icon: "chat", title: "Практикум: отель и еда",
    goals: ["Решить проблему при заселении", "Заказать еду с особыми пожеланиями", "Вежливо пожаловаться и купить подарок"],
    summary: ["I booked a room online. — Я бронировал онлайн.", "Could you check again, please? — Проверьте ещё раз", "I'm vegetarian. / Without onions, please.", "Excuse me, my soup is cold. — вежливая жалоба", "I'm looking for a gift for my mum. — ищу подарок"],
    phrases: [["I booked a room online.","Я бронировал номер онлайн."],["Could you check again, please?","Проверьте ещё раз, пожалуйста."],["Here is my confirmation.","Вот подтверждение брони."],["I'm vegetarian.","Я вегетарианец."],["Without onions, please.","Без лука, пожалуйста."],["Excuse me, my soup is cold.","Извините, мой суп холодный."],["I'm looking for a gift.","Я ищу подарок."],["What do you recommend under twenty euros?","Что посоветуете до двадцати евро?"]],
    steps: [
      {t:"gap", ru:"Я бронировал номер онлайн.", text:"I [booked] a room [online]."},
      {t:"gap", ru:"Я вегетарианец. Без мяса, пожалуйста.", text:"I'm [vegetarian]. [No|Without] meat, please."},
      {t:"gap", ru:"Извините, мой суп холодный.", text:"Excuse me, my soup is [cold]."},
      {t:"compose", task:"Администратор не находит бронь. Попроси проверить ещё раз и скажи, что бронировал онлайн.", say:"Could you check again, please? I booked online.", re:"^(?=.*(check|look))(?=.*(book|reserv))", min:6},
      {t:"compose", task:"Закажи бургер без лука.", say:"A burger without onions, please.", re:"^(?=.*burger)(?=.*(without|no) onion)", min:4},
      {t:"compose", task:"В магазине: скажи, что ищешь подарок для мамы.", say:"I'm looking for a gift for my mum.", re:"^(?=.*(gift|present|souvenir))(?=.*(mum|mom|mother))", min:5},
      {t:"roleplay", title:"Ресепшен: бронь не находится.", lines:[
        {s:"them", en:"Sorry, I can't find your reservation.", ru:"Извините, не могу найти вашу бронь."},
        {s:"you", ru:"Скажи, что бронировал онлайн, и попроси проверить ещё раз", say:"I booked online. Could you check again, please?", re:"^(?=.*(book|reserv))(?=.*(check|again|look))"},
        {s:"them", en:"Can I see your confirmation?", ru:"Можно ваше подтверждение?"},
        {s:"you", ru:"Скажи: вот оно, в телефоне", say:"Here it is, on my phone.", re:"here|phone|yes"},
        {s:"them", en:"Ah, I see. It's under a different name. Here's your key!", ru:"А, вижу. Бронь на другое имя. Вот ключ!"},
        {s:"you", ru:"Поблагодари и спроси, во сколько завтрак", say:"Thank you! What time is breakfast?", re:"breakfast"}
      ]},
      {t:"roleplay", title:"Ресторан: особый заказ.", lines:[
        {s:"them", en:"Are you ready to order?", ru:"Готовы заказать?"},
        {s:"you", ru:"Скажи, что ты вегетарианец, и спроси, что посоветуют", say:"Yes. I'm vegetarian. What do you recommend?", re:"^(?=.*vegetarian|.*vegan|.*no meat)(?=.*(recommend|suggest|what))"},
        {s:"them", en:"The mushroom risotto is very popular.", ru:"Ризотто с грибами очень популярно."},
        {s:"you", ru:"Закажи его, но без сыра", say:"OK, the risotto, but without cheese, please.", re:"^(?=.*risotto)(?=.*(without|no) cheese)"},
        {s:"them", en:"No problem. Something to drink?", ru:"Без проблем. Что будете пить?"},
        {s:"you", ru:"Закажи свежевыжатый апельсиновый сок", say:"A fresh orange juice, please.", re:"juice|water|lemonade|tea|coffee|wine"}
      ]},
      {t:"roleplay", title:"Ресторан: вежливая жалоба.", lines:[
        {s:"them", en:"Is everything OK?", ru:"Всё в порядке?"},
        {s:"you", ru:"Вежливо скажи, что суп холодный", say:"Sorry, but my soup is cold.", re:"cold"},
        {s:"them", en:"Oh, I'm so sorry! I'll bring you a new one.", ru:"Ой, простите! Принесу новый."},
        {s:"you", ru:"Поблагодари", say:"Thank you very much.", re:"thank"},
        {s:"them", en:"Here you are. And the dessert is free today.", ru:"Пожалуйста. А десерт сегодня за счёт заведения."},
        {s:"you", ru:"Обрадуйся и поблагодари", say:"Oh, that's very kind. Thank you!", re:"thank|kind|great|nice|wow"}
      ]},
      {t:"roleplay", title:"Сувенирный магазин: подарок маме.", lines:[
        {s:"them", en:"Hello! Can I help you?", ru:"Здравствуйте! Помочь?"},
        {s:"you", ru:"Скажи, что ищешь подарок для мамы", say:"Yes, I'm looking for a gift for my mum.", re:"gift|present|souvenir"},
        {s:"them", en:"How about this scarf or this tea set?", ru:"Как насчёт этого шарфа или чайного набора?"},
        {s:"you", ru:"Спроси, сколько стоит шарф", say:"How much is the scarf?", re:"how much"},
        {s:"them", en:"Twenty-five euros.", ru:"Двадцать пять евро."},
        {s:"you", ru:"Скажи, что берёшь, и попроси подарочную упаковку (gift-wrap)", say:"I'll take it. Can you gift-wrap it, please?", re:"wrap|take|buy"}
      ]}
    ]
  },
  b4: {
    id: "lp4", icon: "chat", title: "Практикум: общение",
    goals: ["Договориться о встрече", "Рассказать о поездке подробно", "Обменяться контактами и попрощаться"],
    summary: ["Are you free tomorrow? — Ты завтра свободен?", "Let's meet at seven. — Давай встретимся в семь", "What's your Instagram / number?", "It was nice to meet you! Keep in touch!", "Yesterday I… / Tomorrow I'm going to…"],
    phrases: [["Are you free tomorrow?","Ты завтра свободен?"],["Let's meet at seven.","Давай встретимся в семь."],["Where shall we meet?","Где встретимся?"],["What's your number?","Какой у тебя номер?"],["Let's keep in touch!","Давай не теряться!"],["It was nice to meet you.","Было приятно познакомиться."],["Have a safe trip!","Хорошей дороги!"],["See you!","Увидимся!"]],
    steps: [
      {t:"gap", ru:"Ты завтра свободен?", text:"Are you [free] [tomorrow]?"},
      {t:"gap", ru:"Давай встретимся в семь у фонтана.", text:"Let's [meet] at seven by the [fountain]."},
      {t:"gap", ru:"Было приятно познакомиться! Давай не теряться!", text:"It was nice to [meet] you! Let's keep in [touch]!"},
      {t:"compose", task:"Предложи новому знакомому завтра вместе пойти в музей.", say:"Would you like to go to the museum together tomorrow?", re:"^(?=.*museum)(?=.*(would you like|do you want|let s|let's|shall we|wanna|together))", min:5},
      {t:"compose", task:"Попроси номер телефона или Instagram, чтобы не теряться.", say:"What's your number? Let's keep in touch!", re:"number|instagram|phone|contact|whatsapp|telegram", min:3},
      {t:"compose", task:"Расскажи о поездке: где был вчера и что понравилось (2 предложения).", say:"Yesterday I went to the castle. It was amazing!", re:"^(?=.*\\b(went|visited|saw|was|were|ate|had)\\b)(?=.*(amazing|great|beautiful|loved|liked|nice|wonderful|fantastic|cool))", min:6},
      {t:"roleplay", title:"Договариваешься о встрече с новым другом.", lines:[
        {s:"them", en:"It was fun today! Are you free tomorrow?", ru:"Сегодня было весело! Ты завтра свободен?"},
        {s:"you", ru:"Скажи, что да, после обеда", say:"Yes, in the afternoon.", re:"yes|free|afternoon|morning|evening"},
        {s:"them", en:"Great! Let's go to the old town.", ru:"Отлично! Пойдём в старый город."},
        {s:"you", ru:"Согласись и спроси, где встретиться", say:"Good idea! Where shall we meet?", re:"where"},
        {s:"them", en:"By the fountain in the main square?", ru:"У фонтана на главной площади?"},
        {s:"you", ru:"Согласись и предложи время (в три)", say:"OK. Let's meet at three.", re:"\\bat\\b|three|\\d|o clock|o'clock"},
        {s:"them", en:"Perfect. What's your number, just in case?", ru:"Отлично. Какой у тебя номер, на всякий случай?"},
        {s:"you", ru:"Скажи, что пришлёшь ему сообщение", say:"I'll send you a message now.", re:"send|message|text|number|\\d"}
      ]},
      {t:"roleplay", title:"Рассказываешь о поездке за ужином.", lines:[
        {s:"them", en:"So, tell me about your trip!", ru:"Ну, рассказывай о поездке!"},
        {s:"you", ru:"Скажи, где ты был", say:"I was in Lisbon for a week.", re:"\\b(was|went|visited|spent)\\b"},
        {s:"them", en:"Wow! What did you like the most?", ru:"Ух ты! Что понравилось больше всего?"},
        {s:"you", ru:"Скажи, что больше всего понравилось", say:"I loved the old streets and the food.", re:"loved|liked|best|favourite|favorite|amazing|great"},
        {s:"them", en:"Was there anything bad?", ru:"А что-нибудь плохое было?"},
        {s:"you", ru:"Скажи, что было очень жарко", say:"It was very hot!", re:"was|hot|rain|expensive|crowded|nothing|no"},
        {s:"them", en:"Would you go there again?", ru:"Поехал бы снова?"},
        {s:"you", ru:"Ответь: да, конечно", say:"Yes, definitely!", re:"yes|definitely|of course|sure|would|no"}
      ]},
      {t:"roleplay", title:"Аптека: срочно нужна помощь.", lines:[
        {s:"them", en:"Hello. What can I do for you?", ru:"Здравствуйте. Чем помочь?"},
        {s:"you", ru:"Скажи, что у тебя высокая температура и болит горло", say:"I have a fever and a sore throat.", re:"fever|temperature|throat|sick|ill"},
        {s:"them", en:"Since when?", ru:"С какого времени?"},
        {s:"you", ru:"Ответь: со вчерашнего дня", say:"Since yesterday.", re:"yesterday|since|days|morning|night"},
        {s:"them", en:"Take these tablets three times a day. If it's not better in two days, see a doctor.", ru:"Пейте таблетки три раза в день. Если через два дня не станет лучше — к врачу."},
        {s:"you", ru:"Переспроси, сколько раз в день", say:"Sorry, how many times a day?", re:"how many|how often|times|again|sorry"},
        {s:"them", en:"Three times a day, after food.", ru:"Три раза в день, после еды."},
        {s:"you", ru:"Поблагодари", say:"Thank you very much.", re:"thank"}
      ]},
      {t:"roleplay", title:"Последний вечер: прощаешься с друзьями из хостела.", lines:[
        {s:"them", en:"So, you're leaving tomorrow?", ru:"Значит, завтра уезжаешь?"},
        {s:"you", ru:"Скажи: да, рано утром", say:"Yes, early in the morning.", re:"yes|morning|tomorrow|early"},
        {s:"them", en:"We'll miss you! It was so nice to meet you.", ru:"Будем скучать! Было так приятно познакомиться."},
        {s:"you", ru:"Скажи, что тебе тоже было приятно", say:"It was nice to meet you too!", re:"you too|nice|great|me too"},
        {s:"them", en:"Let's keep in touch! Come to visit us in Berlin.", ru:"Давай не теряться! Приезжай к нам в Берлин."},
        {s:"you", ru:"Пообещай приехать и пригласи их к себе", say:"I will! And you come to Moscow!", re:"\\bwill\\b|come|visit|sure|definitely"},
        {s:"them", en:"Deal! Have a safe trip!", ru:"Договорились! Хорошей дороги!"},
        {s:"you", ru:"Попрощайся", say:"Thanks! Bye, see you!", re:"bye|see you|thank"}
      ]}
    ]
  }
};

/* ======================= ОСНОВА: письмо в каждый урок ======================= */
const BASE_EXTRA = {
  b1: [
    {t:"gap", ru:"Большое спасибо.", text:"Thank you very [much]."},
    {t:"gap", ru:"Простите! (обратиться)", text:"Excuse [me]!"},
    {t:"gap", ru:"Да, пожалуйста.", text:"Yes, [please]."},
    {t:"compose", task:"Поблагодари человека, который придержал тебе дверь.", say:"Thank you very much!", re:"thank", min:2},
    {t:"compose", task:"Тебе предлагают кофе. Вежливо откажись.", say:"No, thank you.", re:"^(?=.*\\bno\\b)(?=.*(thank|please))", min:2}
  ],
  b2: [
    {t:"gap", ru:"Я студент, а мой брат врач.", text:"I [am] a student and my brother [is] a doctor."},
    {t:"gap", ru:"Ты устал? — Нет.", text:"[Are] you tired? — No, I'm [not]."},
    {t:"gap", ru:"Мы из Москвы.", text:"We [are] from Moscow."},
    {t:"compose", task:"Напиши, кто ты по профессии и откуда ты (используй I'm).", say:"I'm a designer from Moscow.", re:"^(?=.*\\bi am\\b)(?=.*\\bfrom\\b)", min:4},
    {t:"compose", task:"Спроси подругу, дома ли она.", say:"Are you at home?", re:"are you (at )?home", min:3}
  ],
  b3: [
    {t:"gap", ru:"У меня яблоко и банан.", text:"I have [an] apple and [a] banana."},
    {t:"gap", ru:"Вот это — мои ключи.", text:"[These] are my keys."},
    {t:"gap", ru:"Открой дверь, пожалуйста.", text:"Open [the] door, please."},
    {t:"compose", task:"Покажи на предмет рядом и скажи: «Это синяя ручка».", say:"This is a blue pen.", re:"^(?=.*\\b(this|that|it) is\\b)(?=.*\\b(a|an)\\b)", min:4},
    {t:"compose", task:"Спроси про предмет вдалеке: «Что это?»", say:"What is that?", re:"what is (that|this|it)", min:2}
  ],
  b4: [
    {t:"gap", ru:"У неё двое детей.", text:"She [has] two kids."},
    {t:"gap", ru:"У меня нет машины.", text:"I [don't] have a car."},
    {t:"gap", ru:"У тебя есть ручка?", text:"[Do] you have a pen?"},
    {t:"compose", task:"Напиши, кто есть в твоей семье (минимум два человека).", say:"I have a brother and a sister.", re:"\\b(have|has)\\b[\\s\\S]*(brother|sister|mother|father|mum|mom|dad|son|daughter|wife|husband|kid|children|parents|grandmother|grandfather)", min:4},
    {t:"compose", task:"Спроси коллегу, есть ли у него зарядка (charger).", say:"Do you have a charger?", re:"do you have[\\s\\S]*charger|have you got[\\s\\S]*charger", min:3}
  ],
  b5: [
    {t:"gap", ru:"Это мой телефон. Он мой.", text:"This is [my] phone. It's [mine]."},
    {t:"gap", ru:"Позвони мне завтра.", text:"Call [me] tomorrow."},
    {t:"gap", ru:"Их дом рядом с нашим офисом.", text:"[Their] house is near [our] office."},
    {t:"compose", task:"Скажи: «Это машина моего брата».", say:"It's my brother's car.", re:"brother.?s car|car of my brother", min:3},
    {t:"compose", task:"Спроси: «Чей это телефон?»", say:"Whose phone is this?", re:"whose phone", min:3}
  ],
  b6: [
    {t:"gap", ru:"Рядом с моим домом есть кафе.", text:"There [is] a café next [to] my house."},
    {t:"gap", ru:"В моём городе два парка.", text:"There [are] two parks [in] my town."},
    {t:"gap", ru:"Здесь рядом есть банк?", text:"Is [there] a bank near here?"},
    {t:"compose", task:"Напиши, что есть в твоей комнате (используй there is или there are).", say:"There is a bed and there are two chairs.", re:"there (is|are)", min:4},
    {t:"compose", task:"Скажи, где ключи: «Ключи на столе».", say:"The keys are on the table.", re:"keys are (on|in|under|next to|near)", min:4}
  ],
  b7: [
    {t:"gap", ru:"Она работает в банке.", text:"She [works] in a bank."},
    {t:"gap", ru:"Он ходит в спортзал каждый день.", text:"He [goes] to the gym every [day]."},
    {t:"gap", ru:"Я обычно пью чай утром.", text:"I [usually] drink tea in the morning."},
    {t:"compose", task:"Напиши, во сколько ты обычно встаёшь.", say:"I usually get up at seven.", re:"(get up|wake up|getting up)[\\s\\S]*\\bat\\b", min:4},
    {t:"compose", task:"Напиши, что твой друг или подруга делает каждый день (he / she + глагол с -s).", say:"My friend runs every morning.", re:"\\b(he|she|my [a-z]+) (always |usually |often |never |sometimes )?[a-z]+s\\b", min:4}
  ],
  b8: [
    {t:"gap", ru:"Где ты живёшь?", text:"[Where] do you live?"},
    {t:"gap", ru:"Она не любит кофе.", text:"She [doesn't] [like] coffee."},
    {t:"gap", ru:"Во сколько начинается фильм?", text:"[What] time [does] the film start?"},
    {t:"compose", task:"Спроси нового знакомого, где он работает.", say:"Where do you work?", re:"where do you work", min:3},
    {t:"compose", task:"Напиши, чего ты не любишь (с don't like).", say:"I don't like cold weather.", re:"do not like|hate|do not enjoy", min:3}
  ],
  b9: [
    {t:"gap", ru:"Я сейчас работаю.", text:"I'm [working] now."},
    {t:"gap", ru:"Смотри! Идёт дождь.", text:"Look! It's [raining]."},
    {t:"gap", ru:"Что ты делаешь?", text:"What [are] you [doing]?"},
    {t:"compose", task:"Напиши, что ты делаешь прямо сейчас.", say:"I'm sitting on the sofa and learning English.", re:"\\b(am|is|are) [a-z]+ing\\b", min:3},
    {t:"compose", task:"Спроси друга, что он сейчас смотрит.", say:"What are you watching?", re:"what are you watching", min:3}
  ],
  b10: [
    {t:"gap", ru:"Я умею плавать, но не умею водить.", text:"I [can] swim but I [can't] drive."},
    {t:"gap", ru:"Я бы хотел кофе, пожалуйста.", text:"I'd [like] a coffee, please."},
    {t:"gap", ru:"Она любит читать.", text:"She likes [reading]."},
    {t:"compose", task:"Напиши, что ты умеешь делать.", say:"I can cook and I can swim.", re:"\\bi can [a-z]+", min:3},
    {t:"compose", task:"Вежливо предложи гостю чай.", say:"Would you like some tea?", re:"would you like[\\s\\S]*tea", min:4}
  ],
  b11: [
    {t:"gap", ru:"Вчера я был дома.", text:"I [was] at home yesterday."},
    {t:"gap", ru:"На прошлой неделе они были в Париже.", text:"They [were] in Paris last [week]."},
    {t:"gap", ru:"Где ты был?", text:"Where [were] you?"},
    {t:"compose", task:"Напиши, где ты был вчера вечером.", say:"Last night I was at the cinema.", re:"\\bi was\\b|\\bwe were\\b", min:4},
    {t:"compose", task:"Спроси друга, был ли он вчера на работе.", say:"Were you at work yesterday?", re:"were you[\\s\\S]*work", min:4}
  ],
  b12: [
    {t:"gap", ru:"Мы ходили в кино.", text:"We [went] to the cinema."},
    {t:"gap", ru:"Я его не видел.", text:"I [didn't] [see] him."},
    {t:"gap", ru:"Ты ей позвонил?", text:"[Did] you call her?"},
    {t:"compose", task:"Напиши два предложения о том, что ты делал в выходные.", say:"On Saturday I visited my parents. We watched a film.", re:"\\b([a-z]{3,}ed|went|saw|had|bought|made|ate|took|met|slept|drank|read|did)\\b", min:6},
    {t:"compose", task:"Спроси друга, что он ел на ужин.", say:"What did you have for dinner?", re:"what did you (have|eat)", min:4}
  ],
  b13: [
    {t:"gap", ru:"Я собираюсь навестить родителей.", text:"I'm [going] [to] visit my parents."},
    {t:"gap", ru:"Я позвоню тебе позже.", text:"I [will] call you later."},
    {t:"gap", ru:"Завтра не будет дождя.", text:"It [won't] rain tomorrow."},
    {t:"compose", task:"Напиши свой план на выходные.", say:"This weekend I'm going to visit my friends.", re:"going to|\\bwill\\b", min:4},
    {t:"compose", task:"Пообещай другу помочь завтра.", say:"I'll help you tomorrow.", re:"\\bwill\\b[\\s\\S]*help", min:3}
  ],
  b14: [
    {t:"gap", ru:"Ты когда-нибудь был в Лондоне?", text:"Have you [ever] been to London?"},
    {t:"gap", ru:"Я никогда не пробовал суши.", text:"I have [never] [tried] sushi."},
    {t:"gap", ru:"Она только что ушла.", text:"She has [just] left."},
    {t:"compose", task:"Напиши, в какой стране ты никогда не был.", say:"I have never been to Japan.", re:"never been|have not been|has not been", min:4},
    {t:"compose", task:"Спроси друга, закончил ли он уже работу (yet).", say:"Have you finished your work yet?", re:"have you (finished|done)[\\s\\S]*yet", min:4}
  ],
  b15: [
    {t:"gap", ru:"Лондон больше Парижа.", text:"London is [bigger] [than] Paris."},
    {t:"gap", ru:"Это лучшее кафе в городе.", text:"It's [the] [best] café in town."},
    {t:"gap", ru:"Я с тобой согласен.", text:"I [agree] with you."},
    {t:"compose", task:"Сравни лето и зиму одним предложением.", say:"Summer is warmer than winter.", re:"[a-z]+er than|more [a-z]+ than|better than|worse than|less [a-z]+ than", min:4},
    {t:"compose", task:"Вырази мнение: «Я думаю, …, потому что …» (тема любая).", say:"I think cats are better than dogs because they are calm.", re:"^(?=.*(i think|in my opinion|i believe))(?=.*because)", min:6}
  ]
};

/* ======================= Применение ======================= */
function addToLessons(course, extra, practice) {
  if (!course) return;
  course.forEach(block => {
    block.lessons.forEach(lesson => {
      const add = extra[lesson.id];
      if (!add || lesson._extra) return;
      lesson._extra = true;
      const steps = lesson.steps;
      let at = steps.length;
      if (steps[at - 1] && steps[at - 1].t === "roleplay") at--;           // письмо — перед финальным разговором
      steps.splice(at, 0, ...add.filter(s => s.t !== "roleplay"));
      steps.push(...add.filter(s => s.t === "roleplay"));                   // новые разговоры — в конец
    });
    const p = practice && practice[block.id];
    if (p && !block.lessons.some(l => l.id === p.id)) block.lessons.push(p);
  });
}
addToLessons(window.COURSE, TRAVEL_EXTRA, TRAVEL_PRACTICE);
addToLessons(window.COURSE_BASE, BASE_EXTRA);
window.EXTRA_DATA = { TRAVEL_EXTRA, TRAVEL_PRACTICE, BASE_EXTRA };

})();
