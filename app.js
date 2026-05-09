const lessons = [
  {
    title: "اختيار طريقة التكامل",
    tag: "Roadmap",
    intro: "أول مهارة في Mathematics II إنك تعرف تختار الطريقة بسرعة بدل ما تجرب عشوائي.",
    formula: "\\int f(x)\\,dx \\rightarrow \\text{look for pattern first}",
    blocks: [
      ["لو فيه ضرب", ["جرب Integration by Parts خصوصاً polynomial مع exp/trig/log.", "اختار u من LIPET: Log, Inverse trig, Polynomial, Exponential, Trig."]],
      ["لو فيه تركيب", ["جرب substitution لما تلاقي دالة ومشتقتها موجودة.", "مثال: 2x مع x^2 + 1."]],
      ["لو Rational", ["لو P(x)/Q(x) ودرجات كثيرات حدود، جرب partial fractions بعد factoring.", "لو الدرجة فوق أكبر أو تساوي تحت، اعمل long division الأول."]],
      ["لو Radical", ["sqrt(a^2 - x^2), sqrt(a^2 + x^2), sqrt(x^2 - a^2) غالباً trig substitution."]]
    ]
  },
  {
    title: "Integration by Parts",
    tag: "By Parts",
    intro: "الفكرة جاية من product rule. نختار جزء يتفاضل بسهولة وجزء يتكامل بسهولة.",
    formula: "\\int u\\,dv = uv - \\int v\\,du",
    blocks: [
      ["اختيار u و dv", ["u هو الجزء الذي نفضله للتفاضل.", "dv هو الجزء السهل تكامله.", "في الغالب: ln x أو x أو x^2 يكونوا u."]],
      ["أمثلة نمطية", ["\\int x cos x dx: خذ u=x و dv=cos x dx.", "\\int ln x dx: خذ u=ln x و dv=dx.", "\\int x^2 e^x dx: نكرر by parts أو نستخدم tabular."]],
      ["Tabular", ["مفيد لما polynomial يتضرب في e^x أو sin/cos.", "نشتق polynomial حتى صفر ونكامل العامل الثاني عدة مرات.", "الإشارات تتبادل + ثم - ثم +."]]
    ]
  },
  {
    title: "Substitution",
    tag: "u-sub",
    intro: "Substitution تعكس chain rule. نستخدمها لما نرى inside function ومشتقتها موجودة تقريباً.",
    formula: "u=g(x),\\quad du=g'(x)dx",
    blocks: [
      ["الخطوات", ["اختار u للجزء الداخلي.", "احسب du.", "حول كل x و dx إلى u و du.", "بعد التكامل رجع u إلى x."]],
      ["متى تنفع؟", ["\\int 2x(x^2+1)^5 dx.", "\\int cos(3x) dx.", "\\int \\frac{x}{x^2+4} dx."]],
      ["ملاحظة", ["لو التكامل محدد، إما تغير الحدود إلى u أو ترجع x ثم تعوض الحدود الأصلية."]]
    ]
  },
  {
    title: "Trigonometric Substitution",
    tag: "Trig Sub",
    intro: "نستخدمها لإزالة الجذر عندما يظهر شكل من الأشكال القياسية الثلاثة.",
    formula: "\\sqrt{a^2-x^2}:x=a\\sin\\theta\\quad \\sqrt{a^2+x^2}:x=a\\tan\\theta\\quad \\sqrt{x^2-a^2}:x=a\\sec\\theta",
    blocks: [
      ["الأشكال", ["a^2 - x^2: استخدم x = a sin(theta).", "a^2 + x^2: استخدم x = a tan(theta).", "x^2 - a^2: استخدم x = a sec(theta)."]],
      ["ليه؟", ["لأن 1 - sin^2(theta) = cos^2(theta).", "لأن 1 + tan^2(theta) = sec^2(theta).", "لأن sec^2(theta) - 1 = tan^2(theta)."]],
      ["بعد الحل", ["ارسم triangle أو استخدم العلاقات للعودة إلى x.", "لا تنس dx بعد التعويض."]]
    ]
  },
  {
    title: "Partial Fractions",
    tag: "P.F.",
    intro: "تستخدم لتكامل rational functions بعد تحليل المقام لعوامل أبسط.",
    formula: "\\frac{P(x)}{Q(x)}=\\frac{A}{x-a}+\\frac{B}{x-b}+\\cdots",
    blocks: [
      ["قبل البداية", ["تأكد أن degree(P) < degree(Q).", "حلل Q(x) إلى عوامل.", "اكتب decomposition حسب نوع العوامل."]],
      ["Distinct linear factors", ["(x-a)(x-b): اكتب A/(x-a)+B/(x-b).", "يمكن استخدام cover-up لإيجاد الثوابت بسرعة."]],
      ["Repeated linear factors", ["(x-a)^2: اكتب A/(x-a)+B/(x-a)^2.", "لـ (x-a)^3 نضيف حتى C/(x-a)^3."]],
      ["بعد التحليل", ["كل جزء غالباً يتحول إلى ln|linear factor| أو power rule."]]
    ]
  },
  {
    title: "Trigonometric Integrals",
    tag: "Trig Int",
    intro: "محاضرة القوى المثلثية تعتمد على هل قوة sin أو cos فردية أم زوجية، ونفس الفكرة مع tan/sec.",
    formula: "\\int \\sin^m x\\cos^n x\\,dx",
    blocks: [
      ["sin/cos", ["إذا cos قوة فردية: احتفظ بـ cos x dx وحول باقي cos^2 إلى 1 - sin^2.", "إذا sin قوة فردية: احتفظ بـ sin x dx وحول باقي sin^2 إلى 1 - cos^2.", "إذا الاتنين زوجي: استخدم half-angle identities."]],
      ["tan/sec", ["إذا sec قوة زوجية: احتفظ بـ sec^2 x dx وحول sec^2 إلى 1+tan^2.", "إذا tan قوة فردية: احتفظ بـ sec x tan x dx وحول tan^2 إلى sec^2 - 1."]],
      ["قوانين مهمة", ["\\int tan x dx = ln|sec x| + C.", "\\int sec x dx = ln|sec x + tan x| + C."]]
    ]
  },
  {
    title: "Rational sin and cos",
    tag: "tan half-angle",
    intro: "لو التكامل rational function من sin x و cos x نستخدم تعويض u = tan(x/2).",
    formula: "u=\\tan\\frac{x}{2},\\quad \\sin x=\\frac{2u}{1+u^2},\\quad \\cos x=\\frac{1-u^2}{1+u^2},\\quad dx=\\frac{2}{1+u^2}du",
    blocks: [
      ["الفكرة", ["نحول sin و cos إلى rational function في u.", "بعدها نستخدم algebra و partial fractions إن احتجنا."]],
      ["ينفع متى؟", ["عندما يكون التكامل فيه كسر أو تركيب من sin و cos.", "خصوصاً إذا الطرق العادية مش واضحة."]],
      ["انتبه", ["التعويض يطول المسألة، فاستخدمه عندما يكون مطلوب أو واضح من المحاضرة."]]
    ]
  },
  {
    title: "Area and Arc Length",
    tag: "Applications",
    intro: "Applications 1 ركزت على المساحة بين منحنيين وطول القوس.",
    formula: "A=\\int_a^b (\\text{top}-\\text{bottom})\\,dx\\quad L=\\int_a^b\\sqrt{1+(f'(x))^2}\\,dx",
    blocks: [
      ["Area between curves", ["ساوي المعادلتين لإيجاد حدود التقاطع.", "حدد الدالة الأعلى والدالة الأسفل.", "احسب integral من top - bottom."]],
      ["مثال من المحاضرة", ["بين y=x^2 و y=x+6 التقاطعات x=-2 و x=3.", "المساحة = \\int_{-2}^{3}(x+6-x^2)dx = 125/6."]],
      ["Arc length", ["اشتق y=f(x).", "ضع f'(x) داخل الجذر.", "انتبه للحدود المعطاة."]]
    ]
  },
  {
    title: "Separable Differential Equations",
    tag: "Applications",
    intro: "Applications 2 فيها separating variables ونماذج growth/decay مثل التحلل الإشعاعي.",
    formula: "\\frac{dy}{dx}=g(x)h(y)\\Rightarrow \\frac{1}{h(y)}dy=g(x)dx",
    blocks: [
      ["الخطوات", ["انقل كل y مع dy وكل x مع dx.", "كامل الطرفين.", "استخدم initial condition لو موجودة لإيجاد C."]],
      ["Growth/Decay", ["إذا rate proportional to amount: dy/dt = ky.", "الحل y = Ce^{kt}.", "في decay يكون k سالب."]],
      ["Half-life", ["نستخدم y(t)=y0 e^{kt}.", "عند half-life: y/y0 = 1/2 لإيجاد k."]]
    ]
  }
];

const examples = [
  {
    title: "By parts: ∫ x cos x dx",
    desc: "نختار u=x لأن مشتقته أبسط، و dv=cos x dx.",
    steps: ["u=x, du=dx", "dv=cos x dx, v=sin x", "∫u dv = uv - ∫v du", "x sin x - ∫sin x dx", "x sin x + cos x + C"]
  },
  {
    title: "By parts: ∫ ln x dx",
    desc: "لما ln x لوحدها نعتبر dv=dx.",
    steps: ["u=ln x, du=1/x dx", "dv=dx, v=x", "x ln x - ∫x(1/x)dx", "x ln x - x + C"]
  },
  {
    title: "Partial fractions: 4/(x²-4)",
    desc: "المقام يتحلل إلى (x-2)(x+2).",
    steps: ["4/((x-2)(x+2)) = A/(x-2)+B/(x+2)", "Cover-up: A=4/(2+2)=1", "B=4/(-2-2)=-1", "∫ = ln|x-2| - ln|x+2| + C"]
  },
  {
    title: "Area: y=x² and y=x+6",
    desc: "نساوي المنحنيين ثم نكامل الأعلى ناقص الأسفل.",
    steps: ["x² = x + 6", "x² - x - 6 = 0", "x=-2, x=3", "A=∫[-2,3] (x+6-x²) dx", "A=125/6"]
  },
  {
    title: "Trig substitution pattern",
    desc: "اختيار التعويض من شكل الجذر.",
    steps: ["√(4-x²): x=2sinθ", "√(x²+25): x=5tanθ", "√(x²-9): x=3secθ", "استخدم triangle للرجوع إلى x"]
  },
  {
    title: "Separable decay",
    desc: "معدل التحلل يتناسب مع الكمية الموجودة.",
    steps: ["dy/dt = ky", "dy/y = k dt", "ln|y| = kt + C", "y = Ce^(kt)", "decay: k < 0"]
  }
];

const quiz = [
  ["By Parts", "What is the integration by parts formula?", ["∫u dv = uv - ∫v du", "∫u dv = u+v+C", "∫u dv = du/dv", "∫u dv = uv + ∫v du"], 0, "القانون الأساسي هو ∫u dv = uv - ∫v du."],
  ["By Parts", "For ∫ ln x dx, which is a good choice?", ["u=x", "u=ln x, dv=dx", "u=dx", "dv=ln x"], 1, "ln x نختارها u حسب LIPET، و dx تكون dv."],
  ["Substitution", "u-substitution is mainly based on reversing which rule?", ["Product rule", "Quotient rule", "Chain rule", "Power rule only"], 2, "Substitution تعكس chain rule."],
  ["Trig Sub", "For √(a² - x²), use:", ["x=a tanθ", "x=a sinθ", "x=a secθ", "x=a cotθ"], 1, "لأن 1 - sin²θ = cos²θ."],
  ["Trig Sub", "For √(x² - a²), use:", ["x=a secθ", "x=a sinθ", "x=a tanθ", "x=a cosθ"], 0, "لأن sec²θ - 1 = tan²θ."],
  ["Partial Fractions", "Before partial fractions, if degree numerator ≥ degree denominator, you should:", ["Use half-angle", "Do polynomial division", "Differentiate denominator", "Ignore it"], 1, "لازم يكون الكسر proper rational، لذلك نعمل division أولاً."],
  ["Partial Fractions", "For repeated factor (x-a)², the decomposition includes:", ["A/(x-a) only", "A/(x-a)+B/(x-a)²", "A/(x-a²)", "Ax+B"], 1, "العامل المتكرر يحتاج كل القوى حتى القوة الموجودة."],
  ["Trig Integrals", "If power of sine is odd in ∫sin^m x cos^n x dx, save:", ["one sin x", "one cos x", "one tan x", "no factor"], 0, "نحتفظ بـ sin x ونحول باقي sin² إلى 1-cos²."],
  ["Trig Integrals", "If powers of both sin and cos are even, use:", ["Cover-up", "Half-angle identities", "Long division", "Separation"], 1, "الحالة الزوجية غالباً تحتاج half-angle."],
  ["tan half-angle", "With u=tan(x/2), sin x equals:", ["2u/(1+u²)", "(1-u²)/(1+u²)", "u²+1", "1/u"], 0, "تعويض نصف الزاوية: sin x = 2u/(1+u²)."],
  ["Applications", "Area between two curves is generally:", ["∫bottom-top", "∫top-bottom", "f'(x)", "arc length only"], 1, "المساحة = تكامل الأعلى ناقص الأسفل."],
  ["Applications", "For y=x² and y=x+6, intersections are:", ["-2 and 3", "2 and 3", "-3 and 2", "0 and 6"], 0, "x²=x+6 → (x-3)(x+2)=0."],
  ["Arc Length", "Arc length formula for y=f(x) is:", ["∫f(x)dx", "∫√(1+(f'(x))²)dx", "∫top-bottom", "∫dy/dx"], 1, "طول القوس يستخدم مشتقة الدالة داخل الجذر."],
  ["Differential Eq.", "A separable equation allows you to:", ["Put y terms with dy and x terms with dx", "Never integrate", "Use only partial fractions", "Remove constants"], 0, "الفكرة هي فصل المتغيرات ثم تكامل الطرفين."],
  ["Decay", "For radioactive decay dy/dt = ky, k is usually:", ["positive", "zero", "negative", "not a constant"], 2, "في التحلل الكمية تقل، لذلك k سالب."]
].map(([topic, question, answers, correct, explanation]) => ({ topic, question, answers, correct, explanation }));

const sheetItems = [
  ["اختيار الطريقة", ["Product: by parts.", "Inside function + derivative: substitution.", "Rational polynomial: partial fractions.", "Radical standard: trig substitution."]],
  ["By Parts", ["∫u dv = uv - ∫v du.", "LIPET يساعد في اختيار u.", "Tabular مفيد مع polynomial × exp/trig."]],
  ["Trig Substitution", ["√(a²-x²): x=a sinθ.", "√(a²+x²): x=a tanθ.", "√(x²-a²): x=a secθ."]],
  ["Partial Fractions", ["Proper fraction أولاً.", "حلل المقام.", "Distinct linear: A/(x-a).", "Repeated: A/(x-a)+B/(x-a)²."]],
  ["Trig Integrals", ["sin odd: save sin.", "cos odd: save cos.", "both even: half-angle.", "sec even: save sec².", "tan odd: save sec tan."]],
  ["Applications", ["Area = ∫(top-bottom)dx.", "Find intersections first.", "Arc length = ∫√(1+(f')²)dx.", "Separable: move y with dy and x with dx."]]
];

let activeLesson = 0;
let completed = new Set(JSON.parse(localStorage.getItem("mathCompletedLessons") || "[]"));
let currentQuestion = 0;
let answersState = Array(quiz.length).fill(null);

const $ = (selector) => document.querySelector(selector);

function typeset() {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

function renderStats() {
  $("#lessonCount").textContent = lessons.length;
  $("#questionCount").textContent = quiz.length;
  $("#exampleCount").textContent = examples.length;
}

function renderLessons() {
  $("#lessonList").innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-tab ${index === activeLesson ? "active" : ""} ${completed.has(index) ? "done" : ""}" data-lesson="${index}">
      ${lesson.title}
      <small>${lesson.tag}</small>
    </button>
  `).join("");

  const lesson = lessons[activeLesson];
  $("#lessonBadge").textContent = `درس ${activeLesson + 1}`;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonIntro").textContent = lesson.intro;
  $("#lessonContent").innerHTML = `
    <div class="formula-box">\\(${lesson.formula}\\)</div>
    ${lesson.blocks.map(([title, items]) => `
      <div class="concept-box">
        <strong>${title}</strong>
        <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    `).join("")}
  `;
  $("#markDone").textContent = completed.has(activeLesson) ? "تمت بالفعل" : "تمت المراجعة";
  updateProgress();
  typeset();
}

function updateProgress() {
  $("#progressText").textContent = `${completed.size} من ${lessons.length}`;
  $("#progressBar").style.width = `${(completed.size / lessons.length) * 100}%`;
  localStorage.setItem("mathCompletedLessons", JSON.stringify([...completed]));
}

function renderExamples() {
  $("#exampleGrid").innerHTML = examples.map((example) => `
    <article class="example-card">
      <h3>${example.title}</h3>
      <p>${example.desc}</p>
      <div class="steps">${example.steps.map((step) => `<span>${step}</span>`).join("")}</div>
    </article>
  `).join("");
  typeset();
}

function renderQuiz() {
  const q = quiz[currentQuestion];
  $("#questionNumber").textContent = `سؤال ${currentQuestion + 1} من ${quiz.length}`;
  $("#quizTopic").textContent = q.topic;
  $("#questionText").textContent = q.question;
  $("#answers").innerHTML = q.answers.map((answer, index) => {
    const selected = answersState[currentQuestion];
    const cls = selected === null ? "" : index === q.correct ? "correct" : selected === index ? "wrong" : "";
    return `<button class="answer-btn ${cls}" data-answer="${index}">${String.fromCharCode(97 + index)}) ${answer}</button>`;
  }).join("");

  const feedback = $("#feedback");
  if (answersState[currentQuestion] === null) {
    feedback.classList.add("hidden");
  } else {
    feedback.classList.remove("hidden");
    feedback.textContent = q.explanation;
  }

  const solved = answersState.filter((answer) => answer !== null);
  const correct = solved.filter((answer, index) => answer === quiz[index].correct).length;
  $("#scoreText").textContent = `${correct} / ${solved.length}`;
  typeset();
}

function renderSheet() {
  $("#sheetGrid").innerHTML = sheetItems.map(([title, items]) => `
    <article class="sheet-card">
      <h3>${title}</h3>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest(".nav-item");
  if (nav) {
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    nav.classList.add("active");
    document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
    $(`#${nav.dataset.view}`).classList.add("active");
    typeset();
  }

  const lessonButton = event.target.closest(".lesson-tab");
  if (lessonButton) {
    activeLesson = Number(lessonButton.dataset.lesson);
    renderLessons();
  }

  if (event.target.id === "markDone") {
    completed.add(activeLesson);
    renderLessons();
  }

  const answer = event.target.closest(".answer-btn");
  if (answer) {
    answersState[currentQuestion] = Number(answer.dataset.answer);
    renderQuiz();
  }

  if (event.target.id === "nextQuestion") {
    currentQuestion = Math.min(quiz.length - 1, currentQuestion + 1);
    renderQuiz();
  }

  if (event.target.id === "prevQuestion") {
    currentQuestion = Math.max(0, currentQuestion - 1);
    renderQuiz();
  }
});

renderStats();
renderLessons();
renderExamples();
renderQuiz();
renderSheet();
