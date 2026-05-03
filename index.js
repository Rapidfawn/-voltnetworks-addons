<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VoltNetworks Add-ons Store</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="topbar">
    <a class="brand" href="#">
      <span class="brand-icon">⚡</span>
      <span>
        <strong>VoltNetworks</strong>
        <small>Add-ons Store</small>
      </span>
    </a>

    <nav>
      <a href="#addons">Add-ons</a>
      <a href="#how">How It Works</a>
      <a href="admin/index.html">Admin</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">Minecraft Bedrock Add-ons</p>
      <h1>VoltNetworks Add-ons</h1>
      <p class="hero-text">Premium tools, systems and add-ons for realms, servers and creators.</p>
      <div class="hero-actions">
        <a href="#addons" class="primary-btn">Browse Add-ons</a>
        <a href="#how" class="secondary-btn">How Payment Works</a>
      </div>
    </div>
  </section>

  <main>
    <section id="how" class="info-panel">
      <p class="eyebrow">Secure Delivery</p>
      <h2>How purchases work</h2>
      <div class="steps">
        <div><span>1</span><h3>Choose an add-on</h3><p>Select the add-on you want from the store.</p></div>
        <div><span>2</span><h3>Pay with PayPal</h3><p>Complete your payment using the PayPal button.</p></div>
        <div><span>3</span><h3>Open a Discord ticket</h3><p>Send proof of payment and we will provide your download privately.</p></div>
      </div>
      <p class="warning">Downloads are not public on this website. Paid files are delivered privately after payment verification.</p>
    </section>

    <section id="addons">
      <div class="section-head">
        <div>
          <p class="eyebrow">All Products</p>
          <h2>Available Add-ons</h2>
        </div>
        <p class="hint">Edit products in <code>addons.json</code></p>
      </div>

      <div id="addonGrid" class="addon-grid"></div>
    </section>

    <section class="payment-panel">
      <div>
        <p class="eyebrow">Manual Payments</p>
        <h2>Bank Transfer</h2>
        <p>Use this for customers who do not want to pay through PayPal.</p>
      </div>

      <div class="bank-box">
        <p><strong>Bank:</strong> C ELLIS</p>
        <p><strong>Sort Code:</strong> 20-26-86</p>
        <p><strong>Account Number:</strong> 80775193</p>
        <p><strong>Reference:</strong> Add-on name + customer name</p>
      </div>

      <p class="warning">After bank transfer, customers must open a Discord ticket with proof of payment.</p>
    </section>
  </main>

  <footer>
    <p>© 2026 VoltNetworks Add-ons — Created by rapidfawn2489</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
