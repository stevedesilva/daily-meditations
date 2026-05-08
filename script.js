function getDayKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function hashString(value) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function getDailyQuote(quotes, dateKey, categoryKey) {
  const seed = hashString(`${dateKey}:${categoryKey}`);
  return quotes[seed % quotes.length];
}

function setText(id, value) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.textContent = value || "";
  element.hidden = !value;
}

function renderQuote(prefix, quote) {
  setText(`${prefix}-text`, `“${quote.text}”`);
  setText(`${prefix}-author`, quote.author);
  setText(`${prefix}-source`, quote.source || "");
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function init() {
  const quoteGroups = window.DAILY_QUOTES;

  if (!quoteGroups || !quoteGroups.stoic || !quoteGroups.motivational) {
    return;
  }

  const today = new Date();
  const dayKey = getDayKey(today);

  setText("today-date", formatDate(today));
  renderQuote("stoic", getDailyQuote(quoteGroups.stoic, dayKey, "stoic"));
  renderQuote(
    "motivation",
    getDailyQuote(quoteGroups.motivational, dayKey, "motivational")
  );
}

init();
