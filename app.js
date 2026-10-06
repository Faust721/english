"use strict";
/* ============ Ступени — английский для путешествий ============ */

const tg = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData ? window.Telegram.WebApp : null;
if (tg) { tg.ready(); tg.expand(); }
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const DAY = 864e5;
const today = () => new Date().toISOString().slice(0, 10);
const haptic = t => { try { tg && tg.HapticFeedback.notificationOccurred(t); } catch (e) {} };
function plural(n, one, few, many) { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 10 || b >= 20) ? few : many; }

/* ---------- Состояние ---------- */
const KEY = "stupeni.travel.v1";
const DEFAULT = {
  done: {}, tests: {}, audio: {},
  xp: 0, xpDay: { date: "", xp: 0 }, streak: { last: "", count: 0 },
  words: {},
  settings: { rate: 0.9, voice: "", unlockAll: false, autoSpeak: true, goal: 30, theme: "auto" }
};
function load() {
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s) return { ...DEFAULT, ...s, settings: { ...DEFAULT.settings, ...s.settings } }; } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT));
}
let S = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function addXP(n) {
  S.xp += n;
  if (S.xpDay.date !== today()) S.xpDay = { date: today(), xp: 0 };
  S.xpDay.xp += n;
  const y = new Date(Date.now() - DAY).toISOString().slice(0, 10);
  if (S.streak.last !== today()) S.streak.count = S.streak.last === y ? S.streak.count + 1 : 1;
  S.streak.last = today();
  save();
}
function streakNow() { const y = new Date(Date.now() - DAY).toISOString().slice(0, 10); return (S.streak.last === today() || S.streak.last === y) ? S.streak.count : 0; }
const xpToday = () => S.xpDay.date === today() ? S.xpDay.xp : 0;

function applyTheme() {
  const t = S.settings.theme !== "auto" ? S.settings.theme : (tg ? tg.colorScheme : null);
  if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
}
applyTheme();
if (tg) tg.onEvent("themeChanged", applyTheme);

/* ---------- Курс ---------- */
const PASS = 70;
const ITEMS = [];
let lessonNo = 0;
COURSE.forEach((b, bi) => {
  b.lessons.forEach((l, li) => ITEMS.push({ ...l, kind: "lesson", block: b, bi, li, no: ++lessonNo }));
  ITEMS.push({ ...b.test, kind: "test", block: b, bi });
});
const itemById = id => ITEMS.find(x => x.id === id);
const isDone = it => it.kind === "lesson" ? S.done[it.id] != null : (S.tests[it.id] || 0) >= PASS;
const isOpen = i => S.settings.unlockAll || i === 0 || isDone(ITEMS[i - 1]) || isDone(ITEMS[i]) || (ITEMS[i].kind === "test" && S.tests[ITEMS[i].id] != null);
const nextItem = () => ITEMS.find(it => !isDone(it)) || null;

/* ---------- Проверка ответов ---------- */
const CONTR = [
  [/\bi'm\b/g, "i am"], [/\b(you|we|they)'re\b/g, "$1 are"], [/\b(he|she|it|that|what|where|who|there|name|here)'s\b/g, "$1 is"],
  [/\bcan't\b/g, "cannot"], [/\bcan not\b/g, "cannot"], [/\bwon't\b/g, "will not"], [/\b(\w+)n't\b/g, "$1 not"],
  [/\b(\w+)'ll\b/g, "$1 will"], [/\b(i|you|we|they)'ve\b/g, "$1 have"], [/\b(i|you|he|she|we|they)'d\b/g, "$1 would"]
];
function norm(s) {
  s = String(s).toLowerCase().replace(/[’‘`´]/g, "'").trim();
  s = s.replace(/\b(do|does|did|is|are|was|were|has|have|ca|wo|should|could|would)nt\b/g, "$1n't").replace(/\bim\b/g, "i'm").replace(/\bill\b(?= (take|have|call|go|be))/g, "i'll");
  CONTR.forEach(([r, v]) => { s = s.replace(r, v); });
  return s.replace(/[.,!?;:"«»()—–\-…]/g, " ").replace(/\s+/g, " ").trim();
}
function lev(a, b) {
  const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 3;
  let p = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) { const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; }
  return p[n];
}
function checkText(input, answers) {
  const x = norm(input); if (!x) return { ok: false };
  for (const a of answers) { const y = norm(a); if (x === y || x.replace(/ /g, "") === y.replace(/ /g, "")) return { ok: true }; }
  const xw = x.split(" ");
  for (const a of answers) {
    const yw = norm(a).split(" ");
    if (yw.length !== xw.length) continue;
    const diff = yw.map((w, i) => [w, xw[i]]).filter(([w, v]) => w !== v);
    if (diff.length === 1 && diff[0][0].length >= 4 && lev(diff[0][0], diff[0][1]) === 1) return { ok: true, typo: true };
  }
  return { ok: false };
}
function speechScore(heard, target) { const t = norm(target).split(" "), h = new Set(norm(heard).split(" ")); return t.filter(w => h.has(w)).length / t.length; }
const gapAlts = g => g.split("|");

/* ---------- Озвучка ---------- */
const TTS = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
let voices = [];
function loadVoices() { if (TTS) voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang)); }
if (TTS) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function mainVoice() {
  if (!voices.length) loadVoices();
  return voices.find(v => v.name === S.settings.voice)
    || voices.find(v => /en[-_](US|GB)/i.test(v.lang) && /Google|Samantha|Natural|Aria|Jenny|Daniel|Karen/i.test(v.name))
    || voices.find(v => /en[-_](US|GB)/i.test(v.lang)) || voices[0] || null;
}
function secondVoice() {
  const m = mainVoice(); if (!m) return null;
  return voices.find(v => v !== m && /en[-_](GB|US|AU)/i.test(v.lang) && /Daniel|Google UK|Male|Arthur|Guy|Ryan|Alex|Fred/i.test(v.name))
    || voices.find(v => v !== m && /en[-_](GB|US|AU|IE)/i.test(v.lang)) || null;
}
function utter(text, who, rate) {
  const u = new SpeechSynthesisUtterance(text);
  let v = mainVoice();
  if (who === "B") { const v2 = secondVoice(); if (v2) v = v2; else u.pitch = 0.75; }
  if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "en-US";
  u.rate = rate || S.settings.rate;
  return u;
}
let playing = null;
function stopAudio() { if (playing) { playing.stopped = true; playing.onStop && playing.onStop(); } playing = null; if (TTS) speechSynthesis.cancel(); }
function speak(text, slow) { if (!TTS) return; stopAudio(); speechSynthesis.speak(utter(text, "A", slow ? 0.6 : S.settings.rate)); }
// Проиграть реплики по очереди. lines: [[who, en], ...]
function playLines(lines, opt = {}) {
  if (!TTS) return null;
  stopAudio();
  const ctl = { stopped: false, onStop: opt.onStop }; playing = ctl;
  let i = opt.from || 0;
  const step = () => {
    if (ctl.stopped) return;
    if (i >= lines.length || (opt.only && i > (opt.from || 0))) { playing = null; opt.onLine && opt.onLine(-1); opt.onDone && opt.onDone(); return; }
    const [who, en] = lines[i]; opt.onLine && opt.onLine(i);
    const u = utter(en, who, opt.rate); ctl.u = u;
    let fired = false;
    const end = () => { if (fired || ctl.stopped) return; fired = true; const wait = opt.repeat ? Math.max(1500, en.split(" ").length * 650) : 450; i++; setTimeout(step, wait); };
    u.onend = end; u.onerror = end;
    speechSynthesis.speak(u);
  };
  step();
  return ctl;
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function listenOnce(onPart, onEnd) {
  const r = new SR(); r.lang = "en-US"; r.interimResults = true; r.maxAlternatives = 3;
  let final = "";
  r.onresult = e => { let t = ""; for (const res of e.results) t += res[0].transcript; final = t; onPart(t); };
  r.onerror = e => onEnd(final, e.error);
  r.onend = () => onEnd(final, null);
  try { r.start(); } catch (e) { onEnd("", "start"); }
  return r;
}
document.addEventListener("click", e => { const b = e.target.closest("[data-say]"); if (b) { e.stopPropagation(); speak(b.dataset.say); } });
const sayBtn = (text, cls = "iconbtn") => TTS ? `<button class="${cls}" data-say="${esc(text)}" aria-label="Послушать" type="button">🔊</button>` : "";

/* ---------- ИИ (только если запущен свой сервер) ---------- */
let AI = null;
async function aiStatus() {
  if (AI !== null) return AI;
  try { const r = await fetch("api/status"); AI = r.ok && (await r.json()).ai === true; } catch (e) { AI = false; }
  return AI;
}
async function api(path, body) {
  const r = await fetch("api/" + path, { method: "POST", headers: { "Content-Type": "application/json", "X-Telegram-Init-Data": tg ? tg.initData : "" }, body: JSON.stringify(body) });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.error || "Сервер не ответил. Попробуйте ещё раз.");
  return data;
}

/* ---------- Общие элементы ---------- */
const app = $("#app");
function toast(t) { const d = document.createElement("div"); d.className = "toast"; d.textContent = t; document.body.append(d); setTimeout(() => d.remove(), 2400); }
function topbar() {
  return `<div class="top"><div class="brand">Ступени<span>.</span></div>
  <div class="stats"><span class="chip" title="Дней подряд">🔥 ${streakNow()}</span><span class="chip" title="Опыт">⚡ ${S.xp}</span></div></div>`;
}
function setNav(tab) { document.querySelectorAll(".nav a").forEach(a => a.classList.toggle("on", a.dataset.tab === tab)); }

/* ============ Курс ============ */
function viewCourse() {
  setNav("course"); stopAudio();
  const nx = nextItem();
  const g = Math.min(100, Math.round(xpToday() / S.settings.goal * 100));
  const heroLabel = !nx ? "Курс пройден" : nx.kind === "test" ? `Блок ${nx.bi + 1} · Контрольная` : `Блок ${nx.bi + 1} · Урок ${nx.no}`;
  let html = topbar() + `<div class="stack">
  <section class="hero">
    <span class="eyebrow">${heroLabel}</span>
    <h1>${nx ? esc(nx.kind === "test" ? nx.title : nx.title) : "Все уроки и контрольные сданы!"}</h1>
    <div class="small">${nx ? (nx.kind === "test" ? "Проверь, что запомнил за блок. Нужно 70%, чтобы открыть следующий." : esc(nx.goals.join(" · "))) : "Слушай аудио и повторяй фразы, чтобы не забыть."}</div>
    <div class="goal"><span>Цель дня</span><div class="goalbar"><i style="width:${g}%"></i></div><b>${xpToday()}/${S.settings.goal} XP</b></div>
    ${nx ? `<button class="btn light wide" data-go="${nx.id}">${Object.keys(S.done).length ? "Продолжить" : "Начать первый урок"}</button>` : `<a class="btn light wide" href="#/audio">К аудио</a>`}
  </section>`;
  const due = dueWords().length;
  if (due) html += `<a class="panel row between" href="#/phrases"><span><b>${due}</b> ${plural(due, "фраза ждёт", "фразы ждут", "фраз ждут")} повторения</span><span class="btn sm primary">Повторить</span></a>`;
  html += `<div id="ai-slot"></div>`;
  COURSE.forEach((b, bi) => {
    const its = ITEMS.filter(x => x.bi === bi);
    const doneN = its.filter(isDone).length;
    html += `<section class="unit"><div class="unit-head"><h2><span class="n">Блок ${bi + 1}</span>${esc(b.title)}</h2><span class="small muted">${doneN}/${its.length}</span></div><div class="small muted unit-note">${esc(b.note)}</div>`;
    its.forEach(it => {
      const i = ITEMS.indexOf(it), open = isOpen(i), done = isDone(it), cur = nx && nx.id === it.id;
      if (it.kind === "lesson") {
        html += `<button class="lesson ${done ? "done" : ""} ${cur ? "current" : ""} ${open ? "" : "locked"}" ${open ? `data-go="${it.id}"` : `data-locked="1"`}>
          <span class="dot">${done ? "✓" : open ? it.no : "🔒"}</span>
          <span><span class="lno">Урок ${it.no}</span><div class="ttl">${esc(it.title)}</div><div class="sub">${esc(it.goals[0])}</div></span>
          <span class="score">${done ? S.done[it.id] + "%" : ""}</span></button>`;
      } else {
        const sc = S.tests[it.id];
        html += `<button class="lesson test ${done ? "done" : ""} ${cur ? "current" : ""} ${open ? "" : "locked"}" ${open ? `data-go="${it.id}"` : `data-locked="1"`}>
          <span class="dot">${done ? "★" : open ? "✎" : "🔒"}</span>
          <span><span class="lno">Контрольная</span><div class="ttl">${esc(it.title.replace(/^Контрольная: /, ""))}</div><div class="sub">Перевод · предложения · аудирование · письмо</div></span>
          <span class="score">${sc != null ? sc + "%" : ""}</span></button>`;
      }
    });
    html += `</section>`;
  });
  app.innerHTML = html + `</div>`;
  app.querySelectorAll("[data-go]").forEach(b => b.onclick = () => startItem(b.dataset.go));
  app.querySelectorAll("[data-locked]").forEach(b => b.onclick = () => toast("Сначала пройди предыдущий урок или контрольную"));
  aiStatus().then(ok => { const s = $("#ai-slot"); if (ok && s) s.innerHTML = `<a class="panel row between" href="#/practice"><span><b>Практика с ИИ</b><br><span class="small muted">Свободный разговор и проверка текстов</span></span><span class="btn sm">Открыть</span></a>`; });
}

/* ============ Плеер урока и контрольной ============ */
const player = $("#player");
let L = null;

function startItem(id) {
  const it = itemById(id); if (!it) return;
  stopAudio();
  let steps = it.kind === "lesson" ? it.steps.map(s => ({ ...s })) : it.sections.flatMap(sec => sec.steps.map(s => ({ ...s, _sec: sec.title })));
  if (!TTS) steps = steps.filter(s => !(s.t === "dictation" || s.t === "listen" || (s.t === "pick" && s.audio)));
  const head = [{ t: "intro" }];
  if (it.kind === "lesson") head.push({ t: "phrases" });
  const queue = [...head, ...steps].map((s, i) => ({ ...s, _i: i }));
  L = { it, test: it.kind === "test", queue, pos: 0, graded: steps.filter(s => s.t !== "tip").length, firstTry: 0, retried: new Set(), xp: 0, sec: {} };
  player.hidden = false; document.body.style.overflow = "hidden";
  if (tg) { tg.BackButton.show(); tg.BackButton.onClick(askQuit); }
  renderStep();
}
function closePlayer() {
  player.hidden = true; document.body.style.overflow = ""; stopAudio();
  if (tg) { tg.BackButton.offClick(askQuit); tg.BackButton.hide(); }
  L = null; route();
}
function renderStep() {
  if (L.pos >= L.queue.length) return L.test ? finishTest() : finishLesson();
  const s = L.queue[L.pos];
  stopAudio();
  const pct = Math.round(L.pos / L.queue.length * 100);
  player.innerHTML = `<div class="p-top"><button class="iconbtn" id="pclose" aria-label="Закрыть" type="button">✕</button><div class="pbar"><i style="width:${pct}%"></i></div>${L.test && s._sec ? `<span class="chip sm">${esc(s._sec)}</span>` : ""}</div>
  <div class="p-body"><div class="p-in" id="pin"></div></div>
  <div class="p-foot" id="pfoot"><div class="p-foot-in" id="pfin"></div></div>`;
  $("#pclose").onclick = askQuit;
  RENDER[s.t](s, $("#pin"), $("#pfin"));
  $(".p-body").scrollTop = 0;
}
function askQuit() {
  if (!L) return;
  if (L.pos <= 1) return closePlayer();
  const pfin = $("#pfin"), foot = $("#pfoot"), prevHTML = pfin.innerHTML, prevCls = foot.className;
  foot.className = "p-foot";
  pfin.innerHTML = `<div class="verdict">Выйти?</div><div class="small muted">Прогресс этого ${L.test ? "теста" : "урока"} не сохранится.</div>
    <div class="row"><button class="btn bad" id="qy" type="button">Выйти</button><button class="btn" id="qn" type="button">Продолжить</button></div>`;
  $("#qy").onclick = closePlayer;
  $("#qn").onclick = () => { foot.className = prevCls; pfin.innerHTML = prevHTML; rebind(); };
  function rebind() { const n = $("#nxt"); if (n) n.onclick = next; else renderStep(); }
}
function footCheck(pfin, getResult, enabled = false) {
  pfin.innerHTML = `<button class="btn primary wide" id="chk" type="button" ${enabled ? "" : "disabled"}>Проверить</button>`;
  const chk = $("#chk");
  chk.onclick = () => { const r = getResult(); if (r) verdict(r); };
  return v => { chk.disabled = !v; };
}
function footNext(pfin, label = "Дальше") { pfin.innerHTML = `<button class="btn primary wide" id="got" type="button">${label}</button>`; $("#got").onclick = next; }
function verdict({ ok, typo, correct, why, noRequeue, extraHTML }) {
  const s = L.queue[L.pos];
  const foot = $("#pfoot"), pfin = $("#pfin");
  foot.classList.add(ok ? "ok" : "bad");
  haptic(ok ? "success" : "error");
  const first = !L.retried.has(s._i);
  if (first) {
    if (ok) { L.firstTry++; L.xp += 2; }
    if (s._sec) { const st = L.sec[s._sec] || (L.sec[s._sec] = { ok: 0, n: 0 }); st.n++; if (ok) st.ok++; }
  }
  const requeue = !ok && !noRequeue && !L.test && first;
  if (requeue) { L.retried.add(s._i); L.queue.push(s); }
  pfin.innerHTML = `<div class="verdict">${ok ? (typo ? "Верно, но есть опечатка" : pick(["Отлично!", "Верно!", "Так держать!", "Супер!"])) : "Не совсем"}</div>
    ${correct && (!ok || typo) ? `<div class="answer">Правильно: <b>${esc(correct)}</b></div>` : ""}
    ${why ? `<div class="small">${esc(why)}</div>` : ""}${extraHTML || ""}
    ${requeue ? `<div class="small muted">Это задание повторится в конце урока.</div>` : ""}
    <button class="btn ${ok ? "ok" : "bad"} wide" id="nxt" type="button">Дальше</button>`;
  $("#nxt").onclick = next; $("#nxt").focus();
  player.querySelectorAll("#pin input, #pin textarea, #pin .opt, #pin .tile, #pin .slot").forEach(el => el.disabled = true);
}
function next() { L.pos++; renderStep(); }
document.addEventListener("keydown", e => {
  if (!L || player.hidden || e.key !== "Enter" || e.shiftKey) return;
  if (document.activeElement && document.activeElement.dataset && document.activeElement.dataset.ownEnter) return;
  const n = $("#nxt"), c = $("#chk"), g = $("#got");
  if (n) { e.preventDefault(); n.click(); }
  else if (c && !c.disabled) { e.preventDefault(); c.click(); }
  else if (g && document.activeElement.tagName !== "BUTTON") { e.preventDefault(); g.click(); }
});

// Разбор "Can I [have] a [coffee|tea]?" → части текста и пропуски
function parseGaps(text) {
  const parts = text.split(/\[([^\]]+)\]/);
  return { texts: parts.filter((_, i) => i % 2 === 0), gaps: parts.filter((_, i) => i % 2 === 1) };
}
const fullSentence = text => text.replace(/\[([^\]|]+)[^\]]*\]/g, "$1");

const RENDER = {
  intro(s, pin, pfin) {
    const it = L.it;
    if (!L.test) {
      const n = it.steps.length;
      pin.innerHTML = `<div class="intro">
        <span class="eyebrow">Блок ${it.bi + 1} · Урок ${it.no}</span><h1 class="big-title">${esc(it.title)}</h1>
        <div class="panel"><h3>Цели урока</h3><ul class="goals">${it.goals.map(g => `<li>${esc(g)}</li>`).join("")}</ul></div>
        <div class="row small muted"><span>📖 ${it.phrases.length} ${plural(it.phrases.length, "фраза", "фразы", "фраз")}</span><span>✏️ ${n} ${plural(n, "задание", "задания", "заданий")}</span><span>⏱ ~${Math.max(5, Math.round(n * 0.7))} мин</span></div></div>`;
      footNext(pfin, "Начать урок");
    } else {
      const secs = it.sections.map(sec => `<li><b>${esc(sec.title)}</b> <span class="muted">— ${sec.steps.length} ${plural(sec.steps.length, "задание", "задания", "заданий")}</span></li>`).join("");
      pin.innerHTML = `<div class="intro">
        <span class="eyebrow">Блок ${it.bi + 1} · Контрольная</span><h1 class="big-title">${esc(it.title)}</h1>
        <div class="panel"><h3>Что будет</h3><ul class="goals">${secs}</ul></div>
        <div class="notice">Подсказок нет, ошибки не повторяются. Чтобы открыть следующий блок, нужно набрать <b>${PASS}%</b>. Пересдавать можно сколько угодно.</div></div>`;
      footNext(pfin, "Начать контрольную");
    }
  },
  phrases(s, pin, pfin) {
    const ph = L.it.phrases;
    pin.innerHTML = `<span class="qlabel">Фразы урока</span><h1>Послушай и повтори вслух</h1>
      ${TTS ? `<button class="btn" id="playall" type="button">▶ Прослушать все</button>` : ""}
      <div class="phrase-list">${ph.map(([en, ru], i) => `<div class="phrase" data-i="${i}"><div><div class="en">${esc(en)}</div><div class="ru">${esc(ru)}</div></div>${sayBtn(en)}</div>`).join("")}</div>`;
    if (TTS) {
      const pa = $("#playall");
      pa.onclick = () => {
        if (playing) { stopAudio(); return; }
        pa.textContent = "■ Остановить";
        playLines(ph.map(([en]) => ["A", en]), {
          repeat: true,
          onLine: i => pin.querySelectorAll(".phrase").forEach(p => p.classList.toggle("now", +p.dataset.i === i)),
          onDone: () => { pa.textContent = "▶ Прослушать все"; },
          onStop: () => { pa.textContent = "▶ Прослушать все"; pin.querySelectorAll(".phrase").forEach(p => p.classList.remove("now")); }
        });
      };
    }
    footNext(pfin, "К заданиям");
  },
  tip(s, pin, pfin) {
    const html = s.html.replace(/<table/g, '<div class="tablewrap"><table').replace(/<\/table>/g, "</table></div>");
    pin.innerHTML = `<span class="qlabel">Азы</span><h1>${esc(s.title)}</h1><div class="theory">${html}</div>`;
    footNext(pfin, "Понятно");
  },
  pick(s, pin, pfin) {
    const order = shuffle(s.options.map((o, i) => i));
    pin.innerHTML = `<span class="qlabel">${s.audio ? "Послушай" : "Выбери ответ"}</span>
      ${s.audio ? `<div class="listen-box"><button class="bigplay" id="pl" type="button" aria-label="Слушать">🔊</button><button class="slowplay" id="pls" type="button" aria-label="Медленно">🐢</button></div>` : ""}
      <div class="prompt">${esc(s.q)}</div><div class="options">${order.map(i => `<button class="opt" data-i="${i}" type="button">${esc(s.options[i])}</button>`).join("")}</div>`;
    if (s.audio) { $("#pl").onclick = () => speak(s.audio); $("#pls").onclick = () => speak(s.audio, true); setTimeout(() => speak(s.audio), 350); }
    let sel = null;
    const en = footCheck(pfin, () => {
      pin.querySelectorAll(".opt").forEach(b => { const i = +b.dataset.i; if (i === s.a) b.classList.add("right"); else if (i === sel) b.classList.add("wrong"); });
      return { ok: sel === s.a, correct: s.options[s.a], why: s.why || (s.audio ? `Звучало: «${s.audio}»` : "") };
    });
    pin.querySelectorAll(".opt").forEach(b => b.onclick = () => { sel = +b.dataset.i; pin.querySelectorAll(".opt").forEach(x => x.classList.toggle("sel", x === b)); en(true); });
  },
  bank(s, pin, pfin) {
    const { texts, gaps } = parseGaps(s.text);
    const pool = shuffle([...gaps.map(g => gapAlts(g)[0]), ...(s.words || [])].map((w, i) => ({ w, i })));
    const filled = gaps.map(() => null);
    pin.innerHTML = `<span class="qlabel">Вставь слова</span><div class="muted">${esc(s.ru)}</div><div class="prompt sentence" id="sent"></div><div class="tiles" id="pool"></div>`;
    const en = footCheck(pfin, () => {
      const ok = gaps.every((g, k) => filled[k] && gapAlts(g).some(a => norm(a) === norm(filled[k].w)));
      pin.querySelectorAll(".slot").forEach((sl, k) => sl.classList.add(filled[k] && gapAlts(gaps[k]).some(a => norm(a) === norm(filled[k].w)) ? "right" : "wrong"));
      return { ok, correct: fullSentence(s.text) };
    });
    function draw() {
      $("#sent").innerHTML = texts.map((t, k) => esc(t) + (k < gaps.length ? `<button class="slot ${filled[k] ? "full" : ""}" data-k="${k}" type="button">${filled[k] ? esc(filled[k].w) : "&nbsp;"}</button>` : "")).join("");
      $("#pool").innerHTML = pool.map(t => `<button class="tile ${filled.includes(t) ? "used" : ""}" data-i="${t.i}" type="button">${esc(t.w)}</button>`).join("");
      pin.querySelectorAll(".slot").forEach(b => b.onclick = () => { filled[+b.dataset.k] = null; draw(); });
      pin.querySelectorAll(".tile").forEach(b => b.onclick = () => {
        const t = pool.find(x => x.i == b.dataset.i); if (filled.includes(t)) return;
        const k = filled.indexOf(null); if (k < 0) return; filled[k] = t; draw();
      });
      en(filled.every(Boolean));
    }
    draw();
  },
  gap(s, pin, pfin) {
    const { texts, gaps } = parseGaps(s.text);
    pin.innerHTML = `<span class="qlabel">Впиши слово</span><div class="muted">${esc(s.ru)}</div>
      <div class="prompt sentence">${texts.map((t, k) => esc(t) + (k < gaps.length ? `<input class="inline-input" data-k="${k}" style="width:${Math.max(3, gapAlts(gaps[k])[0].length + 1)}ch" ${s.hint ? `placeholder="${esc(gapAlts(gaps[k])[0][0])}…"` : ""} autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Пропуск ${k + 1}">` : "")).join("")}</div>
      ${s.hint ? `<div class="small muted">Подсказка: первая буква уже в поле.</div>` : ""}`;
    const inputs = [...pin.querySelectorAll(".inline-input")];
    const en = footCheck(pfin, () => {
      let ok = true, typo = false;
      inputs.forEach((inp, k) => { const r = checkText(inp.value, gapAlts(gaps[k])); if (!r.ok) ok = false; if (r.typo) typo = true; inp.classList.add(r.ok ? "right" : "wrong"); });
      return { ok, typo, correct: fullSentence(s.text) };
    });
    inputs.forEach((inp, k) => {
      inp.oninput = () => en(inputs.every(x => x.value.trim()));
      inp.onkeydown = e => { if (e.key === "Enter" && k < inputs.length - 1 && !inputs[k + 1].value) { e.preventDefault(); e.stopPropagation(); inputs[k + 1].focus(); } };
    });
    setTimeout(() => inputs[0].focus(), 60);
  },
  order(s, pin, pfin) {
    const words = s.en.split(" ");
    const bank = shuffle([...words, ...(s.extra || [])].map((w, i) => ({ w, i })));
    const line = [];
    pin.innerHTML = `<span class="qlabel">Собери фразу</span><div class="prompt">${esc(s.ru)}</div>
      <div class="tiles answerline" id="aline" aria-label="Твой ответ"></div><div class="tiles" id="bank"></div>`;
    const en = footCheck(pfin, () => ({ ok: norm(line.map(t => t.w).join(" ")) === norm(s.en), correct: s.en }));
    function draw() {
      $("#bank").innerHTML = bank.map(t => `<button class="tile ${line.includes(t) ? "used" : ""}" data-i="${t.i}" type="button">${esc(t.w)}</button>`).join("");
      $("#aline").innerHTML = line.map(t => `<button class="tile" data-i="${t.i}" type="button">${esc(t.w)}</button>`).join("");
      $("#bank").querySelectorAll(".tile").forEach(b => b.onclick = () => { const t = bank.find(x => x.i == b.dataset.i); if (!line.includes(t)) { line.push(t); draw(); } });
      $("#aline").querySelectorAll(".tile").forEach(b => b.onclick = () => { line.splice(line.findIndex(x => x.i == b.dataset.i), 1); draw(); });
      en(line.length > 0);
    }
    draw();
  },
  translate(s, pin, pfin) {
    pin.innerHTML = `<span class="qlabel">Переведи на английский</span><div class="prompt">${esc(s.ru)}</div>
      <textarea class="field" id="ti" rows="3" placeholder="Напиши по-английски" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false"></textarea>`;
    const ti = $("#ti");
    const en = footCheck(pfin, () => ({ ...checkText(ti.value, s.a), correct: cap(s.a[0]) }));
    ti.oninput = () => en(ti.value.trim().length > 0);
    setTimeout(() => ti.focus(), 60);
  },
  dictation(s, pin, pfin) {
    pin.innerHTML = `<span class="qlabel">Послушай и запиши</span>
      <div class="listen-box"><button class="bigplay" id="pl" type="button" aria-label="Слушать">🔊</button><button class="slowplay" id="pls" type="button" aria-label="Медленно">🐢</button></div>
      <textarea class="field" id="li" rows="2" placeholder="Что ты услышал?" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></textarea>`;
    $("#pl").onclick = () => speak(s.en); $("#pls").onclick = () => speak(s.en, true);
    const li = $("#li");
    const en = footCheck(pfin, () => ({ ...checkText(li.value, s.a || [s.en]), correct: `${s.en} — ${s.ru}` }));
    li.oninput = () => en(li.value.trim().length > 0);
    setTimeout(() => speak(s.en), 350);
  },
  listen(s, pin, pfin) {
    const order = shuffle(s.options.map((o, i) => i));
    pin.innerHTML = `<span class="qlabel">Аудирование · ${s.lines.length} ${plural(s.lines.length, "реплика", "реплики", "реплик")}</span>
      <div class="listen-box"><button class="bigplay" id="pl" type="button" aria-label="Слушать">▶</button><button class="slowplay" id="pls" type="button" aria-label="Медленно">🐢</button></div>
      <div class="small muted center">Слушай сколько угодно раз. Текст появится после ответа.</div>
      <div class="transcript" id="tr" hidden>${s.lines.map(([w, en]) => `<div><b>${w === "A" ? "—" : "—"}</b> ${esc(en)}</div>`).join("")}</div>
      <div class="prompt">${esc(s.q)}</div>
      <div class="options">${order.map(i => `<button class="opt" data-i="${i}" type="button">${esc(s.options[i])}</button>`).join("")}</div>`;
    const pl = $("#pl");
    const play = slow => { if (playing) { stopAudio(); return; } pl.textContent = "■"; playLines(s.lines, { rate: slow ? 0.65 : undefined, onDone: () => pl.textContent = "▶", onStop: () => pl.textContent = "▶" }); };
    pl.onclick = () => play(false); $("#pls").onclick = () => play(true);
    setTimeout(() => play(false), 400);
    let sel = null;
    const en = footCheck(pfin, () => {
      stopAudio(); $("#tr").hidden = false;
      pin.querySelectorAll(".opt").forEach(b => { const i = +b.dataset.i; if (i === s.a) b.classList.add("right"); else if (i === sel) b.classList.add("wrong"); });
      return { ok: sel === s.a, correct: s.options[s.a] };
    });
    pin.querySelectorAll(".opt").forEach(b => b.onclick = () => { sel = +b.dataset.i; pin.querySelectorAll(".opt").forEach(x => x.classList.toggle("sel", x === b)); en(true); });
  },
  speak(s, pin, pfin) {
    pin.innerHTML = `<span class="qlabel">Скажи вслух</span><div class="muted center">${esc(s.ru)}</div>
      <div class="say">${esc(s.en)} ${sayBtn(s.en)}</div>
      ${SR ? `<button class="mic" id="mic" type="button" aria-label="Говорить">🎙</button><div class="heard" id="heard">Нажми на микрофон и произнеси фразу</div>`
           : `<div class="notice">Послушай и повтори фразу вслух 2–3 раза. Распознавание речи работает в Chrome, здесь проверь себя сам.</div>`}`;
    if (!SR) { pfin.innerHTML = `<button class="btn primary wide" id="got" type="button">Я произнёс</button>`; $("#got").onclick = () => { L.firstTry++; L.xp += 1; next(); }; return; }
    pfin.innerHTML = `<button class="btn ghost wide" id="skip" type="button">Не могу говорить сейчас</button>`;
    $("#skip").onclick = () => { L.graded--; next(); };
    let rec = null, tries = 0;
    const mic = $("#mic"), heard = $("#heard");
    mic.onclick = () => {
      if (rec) { rec.stop(); return; }
      stopAudio(); mic.classList.add("rec"); heard.textContent = "Слушаю…";
      rec = listenOnce(t => { heard.textContent = "«" + t + "»"; }, (final, err) => {
        mic.classList.remove("rec"); rec = null;
        if (err && err !== "no-speech" && err !== "aborted") { heard.textContent = err === "not-allowed" ? "Нет доступа к микрофону. Разреши его в настройках браузера." : "Не получилось распознать. Попробуй ещё раз."; return; }
        if (!final) { heard.textContent = "Ничего не слышно. Попробуй ещё раз."; return; }
        tries++;
        const sc = speechScore(final, s.en);
        if (sc >= 0.75) verdict({ ok: true, noRequeue: true });
        else if (tries >= 3) verdict({ ok: false, correct: s.en, why: "Ничего страшного: послушай ещё раз и повторяй за диктором.", noRequeue: true });
        else heard.textContent = `«${final}» — совпало на ${Math.round(sc * 100)}%. Попробуй ещё раз.`;
      });
    };
  },
  match(s, pin, pfin) {
    const left = shuffle(s.pairs.map((p, i) => ({ t: p[0], i }))), right = shuffle(s.pairs.map((p, i) => ({ t: p[1], i })));
    pin.innerHTML = `<span class="qlabel">Найди пары</span><div class="match"><div class="col" id="ml">${left.map(x => `<button class="mtile" data-i="${x.i}" type="button">${esc(x.t)}</button>`).join("")}</div>
      <div class="col" id="mr">${right.map(x => `<button class="mtile" data-i="${x.i}" type="button">${esc(x.t)}</button>`).join("")}</div></div>`;
    pfin.innerHTML = `<div class="small muted center">Нажми на слово слева, затем на перевод справа</div>`;
    let sel = null, errors = 0, left_n = s.pairs.length;
    pin.querySelectorAll("#ml .mtile").forEach(b => b.onclick = () => {
      if (b.disabled) return;
      pin.querySelectorAll("#ml .mtile").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = b;
      speak(b.textContent);
    });
    pin.querySelectorAll("#mr .mtile").forEach(b => b.onclick = () => {
      if (!sel || b.disabled) return;
      if (sel.dataset.i === b.dataset.i) {
        sel.classList.remove("sel"); sel.classList.add("gone"); b.classList.add("gone"); sel.disabled = b.disabled = true; sel = null;
        if (--left_n === 0) verdict({ ok: errors <= 1, noRequeue: true, why: errors ? `Ошибок: ${errors}` : "" });
      } else { errors++; haptic("error"); b.classList.add("wrong"); setTimeout(() => b.classList.remove("wrong"), 500); }
    });
  },
  roleplay(s, pin, pfin) {
    pin.innerHTML = `<span class="qlabel">Разговор</span><div class="prompt small-prompt">${esc(s.title)}</div>
      <div class="chat" id="rchat"></div><div id="rtask"></div>`;
    pfin.innerHTML = `<div class="small muted center">Отвечай по-английски: пиши${SR ? " или говори" : ""}. Подсказка — если застрял.</div>`;
    const chat = $("#rchat"), task = $("#rtask");
    let j = 0, tries = 0, fails = 0;
    const addBot = l => { chat.insertAdjacentHTML("beforeend", `<div class="msg bot"><div class="bubble">${esc(l.en)}</div><div class="tools">${sayBtn(l.en, "btn ghost sm")}<button class="btn ghost sm" type="button" data-tr>Перевод</button></div><div class="ru" hidden>${esc(l.ru)}</div></div>`); const m = chat.lastElementChild; m.querySelector("[data-tr]").onclick = e => { const r = m.querySelector(".ru"); r.hidden = !r.hidden; e.target.textContent = r.hidden ? "Перевод" : "Скрыть"; }; };
    const addMe = (t, fix) => chat.insertAdjacentHTML("beforeend", `<div class="msg me"><div class="bubble">${esc(t)}</div>${fix ? `<div class="fix">Можно сказать: <b>${esc(fix)}</b></div>` : ""}</div>`);
    const scrollEnd = () => { const b = $(".p-body"); if (b) b.scrollTop = b.scrollHeight; };
    function advance() {
      const bots = [];
      while (j < s.lines.length && s.lines[j].s === "them") { addBot(s.lines[j]); bots.push(["A", s.lines[j].en]); j++; }
      if (bots.length && S.settings.autoSpeak) playLines(bots);
      if (j >= s.lines.length) { task.innerHTML = ""; scrollEnd(); return verdict({ ok: fails <= 1, noRequeue: true, why: fails ? `Подсказка понадобилась ${fails} ${plural(fails, "раз", "раза", "раз")}. Пройди разговор ещё раз позже.` : "Ты справился с разговором!" }); }
      const line = s.lines[j];
      task.innerHTML = `<div class="taskcard"><div class="eyebrow">Твоя очередь</div><div class="todo">${esc(line.ru)}</div>
        <div class="composer-in">${SR ? `<button class="iconbtn" id="rmic" type="button" aria-label="Сказать голосом">🎙</button>` : ""}
        <textarea class="field" id="rin" rows="1" data-own-enter="1" placeholder="Ответь по-английски…" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false"></textarea>
        <button class="iconbtn send" id="rsend" type="button" aria-label="Ответить">➤</button></div>
        <div class="row between"><span class="small" id="rmsg"></span><button class="btn ghost sm" id="rhint" type="button">Подсказка</button></div></div>`;
      const rin = $("#rin"), rmsg = $("#rmsg");
      rin.onkeydown = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };
      $("#rsend").onclick = send;
      $("#rhint").onclick = () => { rmsg.innerHTML = `Например: <b>${esc(line.say)}</b> ${sayBtn(line.say, "btn ghost sm")}`; };
      if (SR) {
        let rec = null; const mic = $("#rmic");
        mic.onclick = () => {
          if (rec) { rec.stop(); return; }
          stopAudio(); mic.classList.add("recording");
          rec = listenOnce(t => { rin.value = t; }, (final, err) => { rec = null; mic.classList.remove("recording"); if (err === "not-allowed") toast("Нет доступа к микрофону"); if (final) { rin.value = final; send(); } });
        };
      }
      setTimeout(() => { rin.focus({ preventScroll: true }); scrollEnd(); }, 80);
      function send() {
        const t = rin.value.trim(); if (!t) return;
        const ok = new RegExp(line.re).test(norm(t));
        if (ok) { addMe(t); j++; tries = 0; advance(); scrollEnd(); return; }
        tries++;
        if (tries === 1) { rmsg.innerHTML = `Не совсем. Попробуй так: <b>${esc(line.say)}</b>`; haptic("error"); return; }
        addMe(t, line.say); fails++; j++; tries = 0; advance(); scrollEnd();
      }
    }
    advance();
  },
  write(s, pin, pfin) {
    pin.innerHTML = `<span class="qlabel">Напиши сам</span><div class="prompt small-prompt">${esc(s.task)}</div>
      <div class="small muted">Минимум ${s.min} ${plural(s.min, "слово", "слова", "слов")}. Что должно быть в тексте:</div>
      <ul class="checklist" id="cl">${s.need.map((n, i) => `<li data-i="${i}">${esc(n.label)}</li>`).join("")}</ul>
      <textarea class="field" id="wt" rows="6" placeholder="Пиши по-английски…" autocomplete="off" autocapitalize="sentences" autocorrect="off" spellcheck="false"></textarea>
      <div class="small muted" id="wc">0 слов</div><div id="wres"></div>`;
    const wt = $("#wt");
    const words = () => wt.value.trim() ? wt.value.trim().split(/\s+/).length : 0;
    const en = footCheck(pfin, () => {
      const x = norm(wt.value);
      const met = s.need.map(n => new RegExp(n.re).test(x));
      pin.querySelectorAll("#cl li").forEach((li, i) => li.classList.add(met[i] ? "met" : "miss"));
      const enough = words() >= s.min;
      const ok = enough && met.every(Boolean);
      const miss = s.need.filter((n, i) => !met[i]).map(n => n.label.toLowerCase());
      return { ok, noRequeue: true,
        why: ok ? "Все пункты на месте." : [!enough ? `Нужно хотя бы ${s.min} слов.` : "", miss.length ? `Не хватает: ${miss.join(", ")}.` : ""].filter(Boolean).join(" "),
        extraHTML: `<div class="small">Пример ответа: <i>${esc(s.sample)}</i> ${sayBtn(s.sample, "btn ghost sm")}</div>` };
    });
    wt.oninput = () => { const n = words(); $("#wc").textContent = n + " " + plural(n, "слово", "слова", "слов"); en(n >= 2); };
  }
};

function finishLesson() {
  const it = L.it;
  const pct = L.graded ? Math.round(L.firstTry / L.graded * 100) : 100;
  const xp = L.xp + 10, first = S.done[it.id] == null;
  S.done[it.id] = Math.max(S.done[it.id] || 0, pct);
  let added = 0;
  it.phrases.forEach(([en, ru]) => { if (!S.words[en]) { S.words[en] = { ru, box: 0, due: Date.now() + DAY, lesson: it.id }; added++; } });
  addXP(xp); haptic("success");
  const i = ITEMS.indexOf(it), nx = ITEMS[i + 1];
  player.innerHTML = `<div class="p-body"><div class="p-in result">
    <span class="eyebrow">Урок ${it.no} · ${first ? "пройден" : "повторён"}</span>
    <div class="big">${pct}%</div><h1>${esc(it.title)}</h1>
    <div class="muted">${pct >= 90 ? "Превосходно! Почти без ошибок." : pct >= 70 ? "Хороший результат. Ошибки повторили в конце — так они лучше запоминаются." : "Неплохо для начала. Пройди урок ещё раз завтра — станет легче."}</div>
    <div class="tiles3"><div class="t3"><b>+${xp}</b><span class="small muted">опыта</span></div><div class="t3"><b>${added}</b><span class="small muted">фраз в разговорник</span></div><div class="t3"><b>🔥 ${streakNow()}</b><span class="small muted">дней подряд</span></div></div>
    <div class="panel left"><h3>Итоги урока</h3><ul class="goals done-list">${it.summary.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
    <div class="stack wide-stack">
      ${nx ? `<button class="btn primary wide" id="rnext" type="button">${nx.kind === "test" ? "К контрольной блока" : "Следующий урок: " + esc(nx.title)}</button>` : ""}
      <button class="btn wide" id="rhome" type="button">К списку уроков</button>
    </div></div></div>`;
  $("#rhome").onclick = closePlayer;
  if (nx) $("#rnext").onclick = () => { closePlayer(); startItem(nx.id); };
}
function finishTest() {
  const it = L.it;
  const pct = L.graded ? Math.round(L.firstTry / L.graded * 100) : 0;
  const prev = S.tests[it.id];
  S.tests[it.id] = Math.max(prev || 0, pct);
  const passed = pct >= PASS;
  addXP(passed ? 30 : 5); haptic(passed ? "success" : "warning");
  const i = ITEMS.indexOf(it), nx = ITEMS[i + 1];
  const rows = it.sections.map(sec => { const st = L.sec[sec.title] || { ok: 0, n: 0 }; return `<div class="secrow"><span>${esc(sec.title)}</span><span class="bar"><i style="width:${st.n ? st.ok / st.n * 100 : 0}%"></i></span><b>${st.ok}/${st.n}</b></div>`; }).join("");
  player.innerHTML = `<div class="p-body"><div class="p-in result">
    <span class="eyebrow">Блок ${it.bi + 1} · Контрольная</span>
    <div class="big ${passed ? "" : "fail"}">${pct}%</div>
    <h1>${passed ? (nx ? `Блок ${it.bi + 1} пройден!` : "Курс пройден!") : "Пока не хватило"}</h1>
    <div class="muted">${passed ? (nx ? `Открыт блок ${it.bi + 2}: «${esc(nx.block.title)}».` : "Ты прошёл весь курс. Теперь — в путешествие!") : `Нужно ${PASS}%. Повтори уроки блока и попробуй снова — пересдавать можно сколько угодно.`}</div>
    <div class="panel left"><h3>По разделам</h3>${rows}</div>
    <div class="stack wide-stack">
      ${passed && nx ? `<button class="btn primary wide" id="rnext" type="button">Начать блок ${it.bi + 2}</button>` : ""}
      ${!passed ? `<button class="btn primary wide" id="retry" type="button">Пересдать</button>` : ""}
      <button class="btn wide" id="rhome" type="button">К списку уроков</button>
    </div></div></div>`;
  $("#rhome").onclick = closePlayer;
  if (passed && nx) $("#rnext").onclick = () => { closePlayer(); startItem(nx.id); };
  if (!passed) $("#retry").onclick = () => { closePlayer(); startItem(it.id); };
}

/* ============ Аудио ============ */
function viewAudio() {
  setNav("audio"); stopAudio();
  const lv = Object.keys(TRACK_LEVELS);
  const doneN = TRACKS.filter(t => S.audio[t.id]).length;
  let html = topbar() + `<div class="stack"><h1>Аудио</h1>
    <div class="muted">Слушай, как звучит живая речь. Начинай с коротких фраз и переходи к длинным историям. ${doneN}/${TRACKS.length} прослушано.</div>
    ${TTS ? "" : `<div class="notice warn">Этот браузер не умеет озвучивать текст. Открой приложение в Chrome или Safari.</div>`}`;
  lv.forEach(l => {
    const tr = TRACKS.filter(t => t.level == l);
    html += `<section class="unit"><div class="unit-head"><h2><span class="n">Уровень ${l}</span>${esc(TRACK_LEVELS[l])}</h2></div><div class="track-list">`;
    tr.forEach(t => {
      const words = t.lines.reduce((n, x) => n + x[1].split(" ").length, 0);
      const sec = Math.round(words / 2.3 + t.lines.length * 0.5);
      html += `<a class="track ${S.audio[t.id] ? "done" : ""}" href="#/audio/${t.id}"><span class="tdot">${S.audio[t.id] ? "✓" : "▶"}</span><span><b>${esc(t.title)}</b><span class="small muted">${t.lines.length} ${plural(t.lines.length, "фраза", "фразы", "фраз")} · ~${sec < 60 ? sec + " сек" : Math.round(sec / 60) + " мин"}</span></span></a>`;
    });
    html += `</div></section>`;
  });
  app.innerHTML = html + `</div>`;
}
const AV = { showText: true, showRu: false, repeat: false, rate: 1 };
function viewTrack(id) {
  setNav("audio"); stopAudio();
  const t = TRACKS.find(x => x.id === id); if (!t) return (location.hash = "#/audio");
  const idx = TRACKS.indexOf(t), nx = TRACKS[idx + 1];
  app.innerHTML = topbar() + `<div class="stack">
    <a class="btn ghost back" href="#/audio">← Аудио</a>
    <span class="eyebrow">Уровень ${t.level} · ${esc(TRACK_LEVELS[t.level])}</span><h1>${esc(t.title)}</h1>
    <div class="player-bar">
      <button class="bigplay" id="tp" type="button" aria-label="Слушать">▶</button>
      <div class="stack tight">
        <div class="seg" role="group" aria-label="Скорость">${[[0.7, "0.7×"], [0.85, "0.85×"], [1, "1×"]].map(([v, l]) => `<button type="button" data-rate="${v}" aria-pressed="${AV.rate === v}">${l}</button>`).join("")}</div>
        <div class="row tight">
          <button class="toggle" type="button" id="tg-text" aria-pressed="${AV.showText}">Текст</button>
          <button class="toggle" type="button" id="tg-ru" aria-pressed="${AV.showRu}">Перевод</button>
          <button class="toggle" type="button" id="tg-rep" aria-pressed="${AV.repeat}" title="Пауза после каждой фразы, чтобы повторить">Повторять</button>
        </div>
      </div>
    </div>
    <div class="small muted">Совет: сначала послушай без текста, потом с текстом, потом в режиме «Повторять» — проговаривай каждую фразу за диктором. Нажми на фразу, чтобы прослушать её отдельно.</div>
    <div class="lines ${AV.showText ? "" : "blur"}" id="lines">${t.lines.map(([w, en, ru], i) => `<button class="line" data-i="${i}" type="button">${t.level > 1 && w !== "N" ? `<span class="who ${w}">${w === "A" ? "А" : "Б"}</span>` : ""}<span><span class="en">${esc(en)}</span><span class="ru" ${AV.showRu ? "" : "hidden"}>${esc(ru)}</span></span></button>`).join("")}</div>
    ${nx ? `<a class="btn wide" href="#/audio/${nx.id}">Дальше: ${esc(nx.title)}</a>` : ""}
  </div>`;
  const tp = $("#tp"), lines = $("#lines");
  const hl = i => lines.querySelectorAll(".line").forEach(l => l.classList.toggle("now", +l.dataset.i === i));
  const reset = () => { tp.textContent = "▶"; hl(-1); };
  tp.onclick = () => {
    if (playing) { stopAudio(); return; }
    tp.textContent = "■";
    playLines(t.lines, { rate: AV.rate * S.settings.rate / 0.9, repeat: AV.repeat, onLine: i => { hl(i); const el = lines.querySelector(`[data-i="${i}"]`); if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" }); },
      onDone: () => { reset(); if (!S.audio[t.id]) { S.audio[t.id] = true; addXP(3); toast("Прослушано! +3 XP"); } }, onStop: reset });
  };
  lines.querySelectorAll(".line").forEach(l => l.onclick = () => { const i = +l.dataset.i; tp.textContent = "■"; playLines(t.lines, { from: i, only: true, rate: AV.rate * S.settings.rate / 0.9, onLine: hl, onDone: reset, onStop: reset }); });
  app.querySelectorAll("[data-rate]").forEach(b => b.onclick = () => { AV.rate = +b.dataset.rate; app.querySelectorAll("[data-rate]").forEach(x => x.setAttribute("aria-pressed", x === b)); });
  $("#tg-text").onclick = e => { AV.showText = !AV.showText; e.target.setAttribute("aria-pressed", AV.showText); lines.classList.toggle("blur", !AV.showText); };
  $("#tg-ru").onclick = e => { AV.showRu = !AV.showRu; e.target.setAttribute("aria-pressed", AV.showRu); lines.querySelectorAll(".ru").forEach(r => r.hidden = !AV.showRu); };
  $("#tg-rep").onclick = e => { AV.repeat = !AV.repeat; e.target.setAttribute("aria-pressed", AV.repeat); };
}

/* ============ Разговорник (интервальное повторение) ============ */
const BOX_DAYS = [0, 1, 3, 7, 16, 35];
function dueWords() { const now = Date.now(); return Object.entries(S.words).filter(([, w]) => w.due <= now); }
let reviewQ = null;
function viewPhrases() {
  setNav("phrases"); stopAudio();
  const all = Object.entries(S.words);
  if (!all.length) {
    app.innerHTML = topbar() + `<div class="stack"><h1>Разговорник</h1><div class="panel stack"><b>Пока пусто.</b><div class="muted">Фразы из каждого пройденного урока попадают сюда. Повторяй их по расписанию — так они остаются в памяти надолго.</div><a class="btn primary" href="#/">Пройти первый урок</a></div></div>`;
    return;
  }
  if (reviewQ && reviewQ.length) return viewReview();
  const due = dueWords();
  const learned = all.filter(([, w]) => w.box >= 4).length;
  const byLesson = {};
  all.forEach(([en, w]) => { (byLesson[w.lesson] = byLesson[w.lesson] || []).push([en, w]); });
  app.innerHTML = topbar() + `<div class="stack"><h1>Разговорник</h1>
    <div class="statgrid"><div class="stat"><b>${all.length}</b><span class="small muted">фраз</span></div><div class="stat"><b>${learned}</b><span class="small muted">выучено надёжно</span></div></div>
    <div class="panel row between"><span>${due.length ? `К повторению: <b>${due.length}</b>` : "На сегодня всё повторено"}</span><button class="btn ${due.length ? "primary" : ""} sm" id="rev" type="button">${due.length ? "Повторить" : "Повторить все"}</button></div>
    <input class="search" id="q" placeholder="Поиск по разговорнику" aria-label="Поиск">
    <div id="wl"></div></div>`;
  const draw = q => {
    q = q.trim().toLowerCase();
    $("#wl").innerHTML = ITEMS.filter(x => x.kind === "lesson" && byLesson[x.id]).map(l => {
      const rows = byLesson[l.id].filter(([en, w]) => !q || en.toLowerCase().includes(q) || w.ru.toLowerCase().includes(q));
      if (!rows.length) return "";
      return `<h3 class="wl-h">Урок ${l.no}. ${esc(l.title)}</h3><div class="wordlist">${rows.map(([en, w]) => `<div class="wl"><span class="en">${esc(en)}</span><span class="muted">${esc(w.ru)}</span><span class="row tight"><span class="boxes" title="Насколько хорошо запомнено">${[1, 2, 3, 4, 5].map(i => `<i class="${w.box >= i ? "on" : ""}"></i>`).join("")}</span>${sayBtn(en, "btn ghost sm")}</span></div>`).join("")}</div>`;
    }).join("") || `<div class="muted">Ничего не найдено</div>`;
  };
  draw(""); $("#q").oninput = e => draw(e.target.value);
  $("#rev").onclick = () => { reviewQ = shuffle((due.length ? due : all).map(([en]) => en)).slice(0, 15); reviewQ.stats = { ok: 0, n: reviewQ.length }; reviewQ.retry = new Set(); viewReview(); };
}
function viewReview() {
  const en = reviewQ[0], w = S.words[en];
  const mode = w.box >= 2 && Math.random() < 0.6 ? "ru" : "en";
  app.innerHTML = topbar() + `<div class="stack">
    <div class="row between"><h1>Повторение</h1><span class="chip">${reviewQ.stats.n - reviewQ.length + 1} / ${reviewQ.stats.n}</span></div>
    <div class="card" id="card" tabindex="0" role="button" aria-label="Показать ответ">
      <span class="eyebrow">${mode === "en" ? "Что это значит?" : "Скажи вслух по-английски"}</span>
      <div class="w">${esc(mode === "en" ? en : w.ru)}</div><div class="tr" id="back" hidden>${esc(mode === "en" ? w.ru : en)}</div>
      <span class="small muted" id="taphint">Нажми, чтобы увидеть ответ</span>
    </div>
    <div class="grade" id="grade" hidden><button class="btn bad" id="no" type="button">Не помню</button><button class="btn ok" id="yes" type="button">Помню</button></div>
    <button class="btn ghost" id="stop" type="button">Закончить</button></div>`;
  if (mode === "en") speak(en);
  const flip = () => { $("#back").hidden = false; $("#taphint").hidden = true; $("#grade").hidden = false; if (mode === "ru") speak(en); };
  $("#card").onclick = flip; $("#card").onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } };
  $("#yes").onclick = () => grade(true); $("#no").onclick = () => grade(false);
  $("#stop").onclick = () => { reviewQ = null; viewPhrases(); };
  function grade(ok) {
    if (ok) { w.box = Math.min(5, w.box + 1); w.due = Date.now() + BOX_DAYS[w.box] * DAY; reviewQ.stats.ok++; reviewQ.shift(); }
    else { w.box = 0; w.due = Date.now() + 10 * 60e3; reviewQ.shift(); if (!reviewQ.retry.has(en)) { reviewQ.retry.add(en); reviewQ.push(en); } }
    save();
    if (!reviewQ.length) { addXP(5); const st = reviewQ.stats; reviewQ = null; toast(`Готово! Вспомнил ${st.ok} из ${st.n}. +5 XP`); viewPhrases(); }
    else viewReview();
  }
}

/* ============ Практика с ИИ (только на своём сервере) ============ */
async function viewPractice() {
  setNav("course");
  const ok = await aiStatus();
  if (!ok) { app.innerHTML = topbar() + `<div class="stack"><a class="btn ghost back" href="#/">← Курс</a><h1>Практика с ИИ</h1><div class="notice">Этот раздел работает, когда приложение запущено на своём сервере с ключом ИИ. Всё остальное работает и без него.</div></div>`; return; }
  app.innerHTML = topbar() + `<div class="stack"><a class="btn ghost back" href="#/">← Курс</a><h1>Практика с ИИ</h1>
    <h2>Свободный разговор</h2><div class="tasklist">${DIALOGS.map(d => `<button class="task" data-d="${d.id}" type="button"><b>${esc(d.title)}</b><span>${esc(d.goal)}</span></button>`).join("")}</div>
    <h2>Письмо с проверкой</h2><div class="tasklist">${WRITING_TASKS.map(w => `<button class="task" data-w="${w.id}" type="button"><span class="lvl">${w.level}</span><b>${esc(w.title)}</b><span>${esc(w.task)}</span></button>`).join("")}</div></div>`;
  app.querySelectorAll("[data-d]").forEach(b => b.onclick = () => location.hash = "#/practice/dialog/" + b.dataset.d);
  app.querySelectorAll("[data-w]").forEach(b => b.onclick = () => location.hash = "#/practice/write/" + b.dataset.w);
}
function viewAIWriting(id) {
  setNav("course");
  const w = WRITING_TASKS.find(x => x.id === id); if (!w) return (location.hash = "#/practice");
  app.innerHTML = topbar() + `<div class="stack"><a class="btn ghost back" href="#/practice">← Практика</a>
    <span class="eyebrow">Письмо · ${w.level}</span><h1>${esc(w.title)}</h1><div>${esc(w.task)}</div><div class="small muted">Подсказка: <i>${esc(w.hint)}</i></div>
    <textarea class="field" id="wt" rows="7" placeholder="Пиши по-английски…" spellcheck="false"></textarea>
    <button class="btn primary" id="wgo" type="button">Проверить</button><div id="wres" class="stack"></div></div>`;
  $("#wgo").onclick = async () => {
    const text = $("#wt").value.trim(); if (text.split(/\s+/).length < 3) { toast("Напиши хотя бы одно предложение"); return; }
    $("#wgo").disabled = true; $("#wres").innerHTML = `<div class="typing">Проверяю…</div>`;
    try {
      const r = await api("write", { task: w.task, level: w.level, text });
      $("#wres").innerHTML = `<div class="panel stack"><div class="row between"><h2>Результат</h2><span class="scorebadge">${esc(r.score)}/10</span></div><div>${esc(r.comment || "")}</div>
        ${r.mistakes && r.mistakes.length ? r.mistakes.map(m => `<div class="mistake"><span class="w">${esc(m.wrong)}</span> → <span class="r">${esc(m.right)}</span><div class="small muted">${esc(m.explain)}</div></div>`).join("") : `<div class="notice">Ошибок нет!</div>`}
        <h3>Исправленный текст</h3><div class="prewrap">${esc(r.corrected || text)}</div></div>`;
      addXP(10);
    } catch (e) { $("#wres").innerHTML = `<div class="notice warn">${esc(e.message)}</div>`; }
    $("#wgo").disabled = false;
  };
}
let chat = null;
function viewAIDialog(id) {
  setNav("course");
  const d = DIALOGS.find(x => x.id === id); if (!d) return (location.hash = "#/practice");
  if (!chat || chat.id !== id) chat = { id, msgs: [{ role: "assistant", content: d.start }], busy: false };
  app.innerHTML = topbar() + `<div class="stack"><a class="btn ghost back" href="#/practice">← Практика</a><h1>${esc(d.title)}</h1><div class="small muted">${esc(d.goal)}</div>
    <div class="chat" id="chat"></div>
    <div class="composer"><textarea class="field" id="cin" rows="1" placeholder="Ответь по-английски…" spellcheck="false"></textarea><button class="iconbtn send" id="csend" type="button" aria-label="Отправить">➤</button></div></div>`;
  const box = $("#chat"), cin = $("#cin");
  const draw = () => { box.innerHTML = chat.msgs.map(m => m.role === "assistant" ? `<div class="msg bot"><div class="bubble">${esc(m.content)}</div>${m.ru ? `<div class="ru">${esc(m.ru)}</div>` : ""}</div>` : `<div class="msg me"><div class="bubble">${esc(m.content)}</div>${m.fix ? `<div class="fix">Лучше: <b>${esc(m.fix)}</b>${m.tip ? "<br>" + esc(m.tip) : ""}</div>` : ""}</div>`).join("") + (chat.busy ? `<div class="typing">Печатает…</div>` : ""); window.scrollTo({ top: document.body.scrollHeight }); };
  draw();
  async function send() {
    const t = cin.value.trim(); if (!t || chat.busy) return;
    cin.value = ""; chat.msgs.push({ role: "user", content: t }); chat.busy = true; draw();
    const um = chat.msgs[chat.msgs.length - 1];
    try { const r = await api("dialog", { scenario: d.id, messages: chat.msgs.slice(-16).map(m => ({ role: m.role, content: m.content })) }); if (r.fix) { um.fix = r.fix; um.tip = r.tip; } chat.msgs.push({ role: "assistant", content: r.reply, ru: r.reply_ru }); if (S.settings.autoSpeak) speak(r.reply); }
    catch (e) { toast(e.message); chat.msgs.pop(); cin.value = t; }
    chat.busy = false; draw();
  }
  $("#csend").onclick = send; cin.onkeydown = e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };
}

/* ============ Профиль ============ */
function viewProfile() {
  setNav("profile"); stopAudio();
  const lessons = ITEMS.filter(x => x.kind === "lesson"), tests = ITEMS.filter(x => x.kind === "test");
  const name = tg && tg.initDataUnsafe && tg.initDataUnsafe.user ? tg.initDataUnsafe.user.first_name : "";
  app.innerHTML = topbar() + `<div class="stack"><h1>${name ? esc(name) : "Профиль"}</h1>
    <div class="statgrid">
      <div class="stat"><b>${lessons.filter(isDone).length}/${lessons.length}</b><span class="small muted">уроков</span></div>
      <div class="stat"><b>${tests.filter(isDone).length}/${tests.length}</b><span class="small muted">контрольных сдано</span></div>
      <div class="stat"><b>${Object.keys(S.words).length}</b><span class="small muted">фраз в разговорнике</span></div>
      <div class="stat"><b>${TRACKS.filter(t => S.audio[t.id]).length}/${TRACKS.length}</b><span class="small muted">аудио прослушано</span></div>
    </div>
    ${tests.some(t => S.tests[t.id] != null) ? `<div class="panel"><h3>Контрольные</h3>${tests.map(t => `<div class="secrow"><span>Блок ${t.bi + 1}</span><span class="bar"><i style="width:${S.tests[t.id] || 0}%"></i></span><b>${S.tests[t.id] != null ? S.tests[t.id] + "%" : "—"}</b></div>`).join("")}</div>` : ""}
    <h2>Настройки</h2>
    <div class="panel settings">
      <div class="setting"><label for="s-goal">Цель на день</label><select id="s-goal">${[20, 30, 50, 80].map(v => `<option value="${v}" ${S.settings.goal == v ? "selected" : ""}>${v} XP</option>`).join("")}</select></div>
      ${TTS ? `<div class="setting"><label for="s-rate">Скорость речи</label><input type="range" id="s-rate" min="0.6" max="1.2" step="0.1" value="${S.settings.rate}"></div>
      <div class="setting"><label for="s-voice">Голос</label><select id="s-voice"><option value="">Автоматически</option>${voices.map(v => `<option ${S.settings.voice === v.name ? "selected" : ""}>${esc(v.name)}</option>`).join("")}</select></div>
      <div class="setting"><span>Озвучивать собеседника в разговорах</span><button class="switch" role="switch" type="button" id="s-auto" aria-checked="${S.settings.autoSpeak}" aria-label="Озвучивать собеседника"></button></div>` : `<div class="setting muted small">Озвучка недоступна в этом браузере.</div>`}
      <div class="setting"><span>Открыть все уроки</span><button class="switch" role="switch" type="button" id="s-unlock" aria-checked="${S.settings.unlockAll}" aria-label="Открыть все уроки"></button></div>
      <div class="setting"><label for="s-theme">Тема</label><select id="s-theme"><option value="auto">Как в системе</option><option value="light" ${S.settings.theme === "light" ? "selected" : ""}>Светлая</option><option value="dark" ${S.settings.theme === "dark" ? "selected" : ""}>Тёмная</option></select></div>
    </div>
    ${TTS ? `<button class="btn" type="button" data-say="Hello! This is how I sound. Let's practise English for your next trip.">🔊 Проверить голос</button>` : ""}
    <div class="panel stack"><b>Сбросить прогресс</b><div class="small muted">Удалит уроки, контрольные, опыт и разговорник на этом устройстве.</div><div class="row" id="reset-box"><button class="btn bad sm" id="reset" type="button">Сбросить</button></div></div>
    <div class="small muted">Прогресс хранится на этом устройстве.</div></div>`;
  $("#s-goal").onchange = e => { S.settings.goal = +e.target.value; save(); };
  if (TTS) {
    $("#s-rate").onchange = e => { S.settings.rate = +e.target.value; save(); speak("This is the new speed."); };
    $("#s-voice").onchange = e => { S.settings.voice = e.target.value; save(); speak("Hello, nice to meet you."); };
    $("#s-auto").onclick = e => { S.settings.autoSpeak = !S.settings.autoSpeak; e.target.setAttribute("aria-checked", S.settings.autoSpeak); save(); };
  }
  $("#s-unlock").onclick = e => { S.settings.unlockAll = !S.settings.unlockAll; e.target.setAttribute("aria-checked", S.settings.unlockAll); save(); };
  $("#s-theme").onchange = e => { S.settings.theme = e.target.value; save(); applyTheme(); };
  $("#reset").onclick = () => {
    $("#reset-box").innerHTML = `<span class="small">Точно сбросить всё?</span><button class="btn bad sm" id="ry" type="button">Да, сбросить</button><button class="btn sm" id="rn" type="button">Отмена</button>`;
    $("#ry").onclick = () => { const st = S.settings; S = JSON.parse(JSON.stringify(DEFAULT)); S.settings = st; save(); toast("Прогресс сброшен"); viewProfile(); };
    $("#rn").onclick = viewProfile;
  };
}

/* ============ Роутер ============ */
function route() {
  if (L) return;
  const h = location.hash.replace(/^#\/?/, "").split("/");
  window.scrollTo(0, 0);
  if (h[0] === "audio" && h[1]) viewTrack(h[1]);
  else if (h[0] === "audio") viewAudio();
  else if (h[0] === "phrases") viewPhrases();
  else if (h[0] === "profile") viewProfile();
  else if (h[0] === "practice" && h[1] === "write") viewAIWriting(h[2]);
  else if (h[0] === "practice" && h[1] === "dialog") viewAIDialog(h[2]);
  else if (h[0] === "practice") viewPractice();
  else viewCourse();
}
window.addEventListener("hashchange", route);
route();
