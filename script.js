async function loadAddons() {
  const grid = document.getElementById("addonGrid");

  try {
    const res = await fetch("addons.json");
    const addons = await res.json();

    grid.innerHTML = addons.map(addon => `
      <article class="addon-card">
        <div class="card-banner ${addon.accent || "green"}">
          <span>${escapeHtml(addon.tag || "ADD-ON")}</span>
        </div>
        <div class="card-body">
          <h3>${escapeHtml(addon.name)}</h3>
          <p>${escapeHtml(addon.description)}</p>
          <ul>
            ${(addon.features || []).map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}
          </ul>
          <div class="price">£${escapeHtml(addon.price)}</div>
          <div class="card-actions">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_xclick">
              <input type="hidden" name="business" value="${escapeAttr(addon.paypalEmail)}">
              <input type="hidden" name="item_name" value="${escapeAttr(addon.name)}">
              <input type="hidden" name="amount" value="${escapeAttr(addon.price)}">
              <input type="hidden" name="currency_code" value="${escapeAttr(addon.currency || "GBP")}">
              <button type="submit">PayPal</button>
            </form>
            <a href="${escapeAttr(addon.download)}" download>Download</a>
          </div>
        </div>
      </article>
    `).join("");
  } catch (error) {
    grid.innerHTML = `<p>Could not load add-ons. Check that addons.json exists.</p>`;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

loadAddons();
