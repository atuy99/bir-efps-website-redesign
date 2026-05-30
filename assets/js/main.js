(function injectNav() {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  const page = location.pathname.split('/').pop() || 'index.html';
  const inPagesFolder = location.pathname.includes('/pages/');
  
  const assetPath = inPagesFolder ? '../assets/' : 'assets/';
  const pagePath  = inPagesFolder ? '' : 'pages/';
  const rootPath  = inPagesFolder ? '../' : '';

  const navHTML = `
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="topbar" role="banner">
    <div class="topbar-inner">
      <span>Official Portal of the Bureau of Internal Revenue — Republic of the Philippines</span>
      <span>Helpdesk: <a href="tel:+63287595400">+63 2 8759-5400</a></span>
    </div>
  </div>
  <nav class="nav-wrapper" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="https://www.bir.gov.ph/home" class="brand" aria-label="BIR Main Website" target="_blank" rel="noopener noreferrer">
        <img src="${assetPath}img/Logo_of_the_Bureau_of_Internal_Revenue.webp" alt="BIR Seal" class="brand-seal">
        <div class="brand-text">
          <span class="agency">BIR Philippines</span>
          <span class="portal">eFPS Portal</span>
        </div>
      </a>

      <ul class="nav-links" role="list">
        <li><a href="${pagePath}efps-home.html" class="${page === 'efps-home.html' ? 'active' : ''}">eFPS Home</a></li>
        <li><a href="${pagePath}issuances.html" class="${page === 'issuances.html' ? 'active' : ''}">Issuances &amp; Rulings</a></li>
        <li><a href="${pagePath}faqs.html"      class="${page === 'faqs.html'      ? 'active' : ''}">FAQs</a></li>
        <li><a href="${pagePath}job-aids.html"  class="${page === 'job-aids.html'  ? 'active' : ''}">Job Aids</a></li>
        <li><a href="${pagePath}downloads.html" class="${page === 'downloads.html' ? 'active' : ''}">Downloads</a></li>
        <li><a href="${rootPath}index.html"     class="nav-cta ${page === 'index.html' ? 'active' : ''}">Login / Register</a></li>
      </ul>

      <button class="hamburger" id="hamburger-btn" aria-expanded="false" aria-controls="mobile-nav" aria-label="Toggle mobile menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-nav" id="mobile-nav" role="list">
      <a href="${pagePath}efps-home.html" class="${page === 'efps-home.html' ? 'active' : ''}">eFPS Home</a>
      <a href="${pagePath}issuances.html" class="${page === 'issuances.html' ? 'active' : ''}">Issuances &amp; Rulings</a>
      <a href="${pagePath}faqs.html"      class="${page === 'faqs.html'      ? 'active' : ''}">FAQs</a>
      <a href="${pagePath}job-aids.html"  class="${page === 'job-aids.html'  ? 'active' : ''}">Job Aids</a>
      <a href="${pagePath}downloads.html" class="${page === 'downloads.html' ? 'active' : ''}">Downloads</a>
      <a href="${rootPath}index.html"     class="nav-cta ${page === 'index.html' ? 'active' : ''}">Login / Register</a>
    </div>
  </nav>`;

  placeholder.innerHTML = navHTML;

  const btn    = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (btn && mobileNav) {
    btn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }
})();

(function injectFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  const inPagesFolder = location.pathname.includes('/pages/');
  const assetPath = inPagesFolder ? '../assets/' : 'assets/';
  const pagePath  = inPagesFolder ? '' : 'pages/';

  const year = new Date().getFullYear();

  placeholder.innerHTML = `
  <footer role="contentinfo">
    <div class="footer-top">
      <div class="footer-about footer-col">
        <img src="${assetPath}img/Logo_of_the_Bureau_of_Internal_Revenue.webp" alt="BIR Seal" class="footer-brand-seal">
        <strong style="color:#fff; font-family:var(--font-display); font-size:1.05rem;">Bureau of Internal Revenue</strong>
        <p>The eFPS (Electronic Filing and Payment System) is the official online platform for filing tax returns and paying taxes in the Philippines.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${pagePath}efps-home.html">eFPS Home</a></li>
          <li><a href="${pagePath}issuances.html">Issuances &amp; Rulings</a></li>
          <li><a href="${pagePath}faqs.html">FAQs</a></li>
          <li><a href="${pagePath}job-aids.html">Job Aids</a></li>
          <li><a href="${pagePath}downloads.html">Downloads</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="https://www.bir.gov.ph/home" target="_blank" rel="noopener">BIR Main Website</a></li>
          <li><a href="#">eTIN Application</a></li>
          <li><a href="#">eRegistration</a></li>
          <li><a href="#">Tax Calendar</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+63287595400">+63 2 8759-5400</a></li>
          <li><a href="mailto:contact_us@bir.gov.ph">contact_us@bir.gov.ph</a></li>
          <li style="color:rgba(255,255,255,.5); font-style:italic; font-size:.8rem;">BIR National Office, Diliman, Quezon City</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${year} Bureau of Internal Revenue — Republic of the Philippines. All rights reserved.</p>
      <p style="margin-top:.3rem;">
        <a href="#" style="color:rgba(255,255,255,.4)">Privacy Policy</a> &nbsp;|&nbsp;
        <a href="#" style="color:rgba(255,255,255,.4)">Terms of Use</a> &nbsp;|&nbsp;
        <a href="#" style="color:rgba(255,255,255,.4)">Accessibility</a>
      </p>
    </div>
  </footer>`;
})();

function initAccordions(containerSelector = '.accordion') {
  document.querySelectorAll(containerSelector).forEach(acc => {
    acc.querySelectorAll('.accordion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item    = btn.closest('.accordion-item');
        const isOpen  = item.classList.contains('open');
        const group   = item.closest('.accordion');
        const allowMultiple = group && group.dataset.multi === 'true';

        if (!allowMultiple && group) {
          group.querySelectorAll('.accordion-item.open').forEach(o => {
            if (o !== item) {
              o.classList.remove('open');
              o.querySelector('.accordion-btn').setAttribute('aria-expanded', 'false');
            }
          });
        }

        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  });
}

function initTabs(containerSelector = '.tabs') {
  document.querySelectorAll(containerSelector).forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const panels  = tabGroup.querySelectorAll('.tab-panel');

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        panels.forEach(p  => p.classList.remove('active'));
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        panels[i] && panels[i].classList.add('active');
      });
    });
  });
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

function initFormValidation() {
  const $ = id => document.getElementById(id);

  function showError(inputId, msg) {
    const input = $(inputId);
    const err   = document.getElementById(inputId + '-err');
    if (!input) return;
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
    if (err) { err.textContent = msg; err.classList.add('visible'); }
  }

  function clearError(inputId) {
    const input = $(inputId);
    const err   = document.getElementById(inputId + '-err');
    if (!input) return;
    input.classList.remove('error');
    input.removeAttribute('aria-invalid');
    if (err) { err.classList.remove('visible'); }
  }

  function showAlert(id, msg) {
    const el = $(id);
    if (!el) return;
    el.querySelector('.alert-msg') && (el.querySelector('.alert-msg').textContent = msg);
    el.classList.add('visible');
  }

  function hideAlert(id) {
    const el = $(id);
    if (el) el.classList.remove('visible');
  }

  const isEmail   = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isTin     = v => /^\d{3}-\d{3}-\d{3}-\d{0,5}$/.test(v) || /^\d{9,12}$/.test(v.replace(/-/g, ''));
  const minLen    = (v, n) => v.trim().length >= n;

  const loginForm = $('login-form');
  if (loginForm) {
    const pwToggle = loginForm.querySelector('.toggle-pw');
    const pwInput  = $('login-password');

    if (pwToggle && pwInput) {
      pwToggle.addEventListener('click', () => {
        const isText = pwInput.type === 'text';
        pwInput.type = isText ? 'password' : 'text';
        pwToggle.textContent = isText ? '👁' : '🙈';
        pwToggle.setAttribute('aria-label', isText ? 'Show password' : 'Hide password');
      });
    }

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      hideAlert('login-alert');

      const tin = $('login-tin').value.trim();
      const pw  = $('login-password').value;

      clearError('login-tin');
      clearError('login-password');

      if (!tin) {
        showError('login-tin', 'TIN/Username is required.'); valid = false;
      } else if (!isTin(tin) && tin.length < 5) {
        showError('login-tin', 'Enter a valid TIN (e.g. 123-456-789) or username.'); valid = false;
      }

      if (!pw) {
        showError('login-password', 'Password is required.'); valid = false;
      } else if (!minLen(pw, 8)) {
        showError('login-password', 'Password must be at least 8 characters.'); valid = false;
      }

      if (!valid) {
        showAlert('login-alert', 'Please correct the highlighted fields.');
        return;
      }

      const btn = loginForm.querySelector('[type="submit"]');
      btn.textContent = 'Signing in…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Sign In';
        btn.disabled = false;
        showAlert('login-success', 'Login successful! Redirecting…');
        loginForm.reset();
      }, 1800);
    });

    loginForm.querySelectorAll('.form-input').forEach(inp => {
      inp.addEventListener('input', () => clearError(inp.id));
    });
  }

  const regForm = $('register-form');
  if (regForm) {
    const pwToggle  = regForm.querySelector('.toggle-pw');
    const pwInput   = $('reg-password');
    const pw2Input  = $('reg-password2');

    if (pwToggle && pwInput) {
      pwToggle.addEventListener('click', () => {
        const isText = pwInput.type === 'text';
        pwInput.type = pw2Input.type = isText ? 'password' : 'text';
        pwToggle.textContent = isText ? '👁' : '🙈';
      });
    }

    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      hideAlert('reg-alert');

      const fields = ['reg-tin','reg-firstname','reg-lastname','reg-email','reg-password','reg-password2'];
      fields.forEach(f => clearError(f));

      const tin      = $('reg-tin').value.trim();
      const fname    = $('reg-firstname').value.trim();
      const lname    = $('reg-lastname').value.trim();
      const email    = $('reg-email').value.trim();
      const pw       = $('reg-password').value;
      const pw2      = $('reg-password2').value;
      const terms    = $('reg-terms').checked;

      if (!tin || !isTin(tin)) {
        showError('reg-tin', 'Enter a valid TIN (e.g. 123-456-789-000).'); valid = false;
      }
      if (!fname || !minLen(fname, 2)) {
        showError('reg-firstname', 'First name is required (min 2 characters).'); valid = false;
      }
      if (!lname || !minLen(lname, 2)) {
        showError('reg-lastname', 'Last name is required (min 2 characters).'); valid = false;
      }
      if (!email || !isEmail(email)) {
        showError('reg-email', 'A valid email address is required.'); valid = false;
      }
      if (!pw || !minLen(pw, 8)) {
        showError('reg-password', 'Password must be at least 8 characters.'); valid = false;
      }
      if (pw !== pw2) {
        showError('reg-password2', 'Passwords do not match.'); valid = false;
      }
      if (!terms) {
        showAlert('reg-alert', 'You must agree to the Terms and Conditions to register.');
        valid = false;
      }

      if (!valid) {
        if (terms) showAlert('reg-alert', 'Please correct the highlighted fields.');
        return;
      }

      const btn = regForm.querySelector('[type="submit"]');
      btn.textContent = 'Submitting…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Register';
        btn.disabled = false;
        $('reg-success') && ($('reg-success').classList.add('visible'));
        regForm.reset();
      }, 2000);
    });

    regForm.querySelectorAll('.form-input').forEach(inp => {
      inp.addEventListener('input', () => clearError(inp.id));
    });
  }
}

function initPasswordStrength() {
  const pw = document.getElementById('reg-password');
  const bar = document.getElementById('pw-strength-bar');
  const txt = document.getElementById('pw-strength-text');
  if (!pw || !bar) return;

  pw.addEventListener('input', () => {
    const v = pw.value;
    let score = 0;
    if (v.length >= 8)  score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;

    const labels  = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors  = ['', '#c0392b', '#e67e22', '#2980b9', '#1a7a4a'];
    const widths  = ['0%', '25%', '50%', '75%', '100%'];

    bar.style.width = widths[score] || '0%';
    bar.style.background = colors[score] || 'transparent';
    if (txt) txt.textContent = v.length ? labels[score] : '';
  });
}

function initDownloadFilter() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const items       = document.querySelectorAll('[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      items.forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.category === cat) ? '' : 'none';
      });
    });
  });
}

function initSearch(inputId, targetSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll(targetSelector).forEach(el => {
      el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initTabs();
  initReveal();
  initFormValidation();
  initPasswordStrength();
  initDownloadFilter();
  initSearch('faq-search', '.accordion-item');
  initSearch('downloads-search', '.download-item');
});

/* ── FAQ: Sidebar category switching ── */
const catBtns     = document.querySelectorAll('.faq-cat-btn');
const faqSections = document.querySelectorAll('.faq-section');

function switchCategory(cat) {
  catBtns.forEach(b => b.classList.remove('active'));
  faqSections.forEach(s => s.classList.remove('active'));
  const matchBtn = document.querySelector(`.faq-cat-btn[data-faq-cat="${cat}"]`);
  const matchSec = document.getElementById('faq-' + cat);
  if (matchBtn) matchBtn.classList.add('active');
  if (matchSec) matchSec.classList.add('active');
}

catBtns.forEach(btn => {
  btn.addEventListener('click', () => switchCategory(btn.dataset.faqCat));
});

/* ── FAQ: Hero quick-topic chips ── */
document.querySelectorAll('.hero-chip[data-faq-chip]').forEach(chip => {
  chip.addEventListener('click', () => {
    switchCategory(chip.dataset.faqChip);
    document.querySelector('.faq-layout').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── Issuances: Tab switching ── */
function initIssuanceTabs() {
  const tabBtns  = document.querySelectorAll('.issuances-tab-btn');
  const tabPanels = document.querySelectorAll('.issuances-panel');

  function switchTab(index) {
    tabBtns.forEach((b, i) => {
      b.classList.toggle('active', i === index);
      b.setAttribute('aria-selected', String(i === index));
    });
    tabPanels.forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  }

  tabBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => switchTab(i));
  });

  /* Activate first tab on load */
  switchTab(0);
}

/* ── Issuances: Search across visible rows ── */
function initIssuancesSearch() {
  const input = document.getElementById('issuances-search');
  if (!input) return;

  function runFilter() {
    const q = input.value.toLowerCase().trim();
    /* Only filter rows inside the currently active panel */
    const activePanel = document.querySelector('.issuances-panel.active');
    if (!activePanel) return;
    activePanel.querySelectorAll('.issuance-row').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  }

  input.addEventListener('input', runFilter);

  /* Wire up the Search button */
  const searchBtn = document.getElementById('issuances-search-btn');
  if (searchBtn) searchBtn.addEventListener('click', runFilter);
}

/* ── Issuances: Hero type chips → jump to tab ── */
function initIssuanceChips() {
  document.querySelectorAll('.issuance-chip[data-tab]').forEach(chip => {
    chip.addEventListener('click', () => {
      const targetIndex = parseInt(chip.dataset.tab, 10);
      const tabBtns = document.querySelectorAll('.issuances-tab-btn');
      const tabPanels = document.querySelectorAll('.issuances-panel');

      tabBtns.forEach((b, i) => {
        b.classList.toggle('active', i === targetIndex);
        b.setAttribute('aria-selected', String(i === targetIndex));
      });
      tabPanels.forEach((p, i) => {
        p.classList.toggle('active', i === targetIndex);
      });

      document.querySelector('.issuances-tabs-section')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initIssuanceTabs();
  initIssuancesSearch();
  initIssuanceChips();
});

function filterByCategory(cat) {
  /* Sync with the existing filter-chip buttons */
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.filter === cat);
  });
  /* Show/hide download items */
  document.querySelectorAll('.download-item').forEach(item => {
    item.style.display = item.dataset.category === cat ? '' : 'none';
  });
  /* Scroll to the content */
  document.querySelector('.filter-bar')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ══════════════════════════════════════════
   job-aids.js
   Handles all interactivity for job-aids.html
   ══════════════════════════════════════════ */

/* ── BIR Forms sub-tabs (inside the "BIR Forms & Guides" tab) ── */
function initFormSubTabs() {
  const subBtns   = document.querySelectorAll('.forms-sub-btn');
  const subPanels = document.querySelectorAll('.forms-sub-panel');
  if (!subBtns.length) return;

  function switchSub(index) {
    subBtns.forEach((b, i) => {
      b.classList.toggle('active', i === index);
      b.setAttribute('aria-selected', String(i === index));
    });
    subPanels.forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
  }

  subBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => switchSub(i));
  });

  switchSub(0); /* show first sub-panel on load */
}

/* ── Sample PDF download (uses a real public PDF so the download attr works) ── */
const SAMPLE_PDF = 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1.pdf';

function initPdfDownloads() {
  document.querySelectorAll('a[data-pdf-download]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const filename = link.dataset.pdfDownload || 'BIR-Form.pdf';
      const a = document.createElement('a');
      a.href = SAMPLE_PDF;
      a.download = filename;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
}

/* ── Search inside the forms tab ── */
function initFormsSearch() {
  const input = document.getElementById('forms-search');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    /* Search across ALL sub-panels so results show regardless of active panel */
    let anyVisible = false;
    document.querySelectorAll('.form-aid-row').forEach(row => {
      const match = !q || row.textContent.toLowerCase().includes(q);
      row.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    /* Show/hide section headers based on whether they have visible rows */
    document.querySelectorAll('.forms-section').forEach(sec => {
      const hasVisible = [...sec.querySelectorAll('.form-aid-row')]
        .some(r => r.style.display !== 'none');
      sec.style.display = hasVisible ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFormSubTabs();
  initPdfDownloads();
  initFormsSearch();
});

(function initLocationDropdowns() {
  const PH = {
    "NCR": {
      "Metro Manila": [
        "Caloocan","Las Piñas","Makati","Malabon","Mandaluyong",
        "Manila","Marikina","Muntinlupa","Navotas","Parañaque",
        "Pasay","Pasig","Pateros","Quezon City","San Juan",
        "Taguig","Valenzuela"
      ]
    },
    "Region I": {
      "Ilocos Norte": ["Laoag City","Batac City","Adams","Bacarra","Badoc","Bangui","Banna","Burgos","Carasi","Currimao","Dingras","Dumalneg","Marcos","Nueva Era","Pagudpud","Paoay","Pasuquin","Piddig","Pinili","San Nicolas","Sarrat","Solsona","Vintar"],
      "Ilocos Sur": ["Vigan City","Candon City","Alilem","Banayoyo","Bantay","Burgos","Cabugao","Caoayan","Cervantes","Galimuyod","Gregorio del Pilar","Lidlidda","Magsingal","Nagbukel","Narvacan","Quirino","Salcedo","San Emilio","San Esteban","San Ildefonso","San Juan","San Vicente","Santa","Santa Catalina","Santa Cruz","Santa Lucia","Santa Maria","Santiago","Santo Domingo","Sigay","Sinait","Sugpon","Suyo","Tagudin"],
      "La Union": ["San Fernando City","Agoo","Aringay","Bacnotan","Bagulin","Balaoan","Bangar","Bauang","Burgos","Caba","Luna","Naguilian","Pugo","Rosario","San Gabriel","San Juan","Santo Tomas","Santol","Sudipen","Tubao"],
      "Pangasinan": ["Dagupan City","San Carlos City","Urdaneta City","Alaminos City","Agno","Aguilar","Alcala","Anda","Asingan","Balungao","Bani","Basista","Bautista","Bayambang","Binalonan","Binmaley","Bolinao","Bugallon","Burgos","Calasiao","Dasol","Infanta","Labrador","Laoac","Lingayen","Mabini","Malasiqui","Manaoag","Mangaldan","Mangatarem","Mapandan","Natividad","Numinanga","Pozzorubio","Rosales","San Fabian","San Jacinto","San Manuel","San Nicolas","San Quintin","Santa Barbara","Santa Maria","Santo Tomas","Sison","Sual","Tayug","Umingan","Urbiztondo","Villasis"]
    },
    "Region II": {
      "Batanes": ["Basco","Itbayat","Ivana","Mahatao","Sabtang","Uyugan"],
      "Cagayan": ["Tuguegarao City","Abulug","Alcala","Allacapan","Amulung","Aparri","Baggao","Ballesteros","Buguey","Calayan","Camalaniugan","Claveria","Enrile","Gattaran","Gonzaga","Iguig","Lal-lo","Lasam","Pamplona","Peñablanca","Piat","Rizal","Sanchez-Mira","Santa Ana","Santa Praxedes","Santa Teresita","Santo Niño","Solana","Tuao"],
      "Isabela": ["Ilagan City","Cauayan City","Santiago City","Alicia","Angadanan","Aurora","Benito Soliven","Burgos","Cabagan","Cabatuan","Cordon","Delfin Albano","Dinapigue","Divilacan","Echague","Gamu","Jones","Luna","Maconacon","Mallig","Naguilian","Palanan","Quezon","Quirino","Ramon","Reina Mercedes","Roxas","San Agustin","San Guillermo","San Isidro","San Manuel","San Mariano","San Mateo","San Pablo","Santa Maria","Santo Tomas","Tumauini"],
      "Nueva Vizcaya": ["Bayombong","Bagabag","Alfonso Castañeda","Ambaguio","Aritao","Bambang","Diadi","Dupax del Norte","Dupax del Sur","Kayapa","Kasibu","Quezon","Santa Fe","Solano","Villaverde"],
      "Quirino": ["Cabarroguis","Aglipay","Diffun","Maddela","Nagtipunan","Saguday"]
    },
    "Region III": {
      "Aurora": ["Baler","Casiguran","Dilasag","Dinalungan","Dingalan","Dipaculao","Maria Aurora","San Luis"],
      "Bataan": ["Balanga City","Abucay","Bagac","Dinalupihan","Hermosa","Limay","Mariveles","Morong","Orani","Orion","Pilar","Samal"],
      "Bulacan": ["Malolos City","San Jose del Monte City","Meycauayan City","Angat","Balagtas","Baliuag","Bocaue","Bulakan","Bustos","Calumpit","Doña Remedios Trinidad","Guiguinto","Hagonoy","Marilao","Norzagaray","Obando","Pandi","Paombong","Plaridel","Pulilan","San Ildefonso","San Miguel","San Rafael","Santa Maria"],
      "Nueva Ecija": ["Cabanatuan City","Gapan City","Palayan City","San Jose City","Muñoz City","Aliaga","Bongabon","Cabiao","Carranglan","Cuyapo","Gabaldon","General Mamerto Natividad","General Tinio","Guimba","Jaen","Laur","Licab","Llanera","Lupao","Nampicuan","Pantabangan","Peñaranda","Quezon","Rizal","San Antonio","San Isidro","San Leonardo","Santa Rosa","Santo Domingo","Talavera","Talugtug","Zaragoza"],
      "Pampanga": ["Angeles City","San Fernando City","Mabalacat City","Apalit","Arayat","Bacolor","Candaba","Floridablanca","Guagua","Lubao","Macabebe","Magalang","Masantol","Mexico","Minalin","Porac","San Luis","San Simon","Santa Ana","Santa Rita","Santo Tomas","Sasmuan"],
      "Tarlac": ["Tarlac City","Anao","Bamban","Camiling","Capas","Concepcion","Gerona","La Paz","Mayantoc","Moncada","Paniqui","Pura","Ramos","San Clemente","San Jose","San Manuel","Santa Ignacia","Victoria"],
      "Zambales": ["Olongapo City","Botolan","Cabangan","Candelaria","Castillejos","Iba","Masinloc","Olongapo","Palauig","San Antonio","San Felipe","San Marcelino","San Narciso","Santa Cruz","Subic"]
    },
    "Region IV-A": {
      "Batangas": ["Batangas City","Lipa City","Tanauan City","Agoncillo","Alitagtag","Balayan","Balete","Bauan","Calaca","Calatagan","Cuenca","Ibaan","Laurel","Lemery","Lian","Lobo","Mabini","Malvar","Mataasnakahoy","Nasugbu","Padre Garcia","Rosario","San Jose","San Juan","San Luis","San Nicolas","San Pascual","Santa Teresita","Santo Tomas","Taysan","Tingloy","Tuy"],
      "Cavite": ["Cavite City","Tagaytay City","Trece Martires City","Dasmariñas City","Bacoor City","Imus City","General Trias City","Alfonso","Amadeo","Carmona","General Mariano Alvarez","Indang","Kawit","Magallanes","Maragondon","Mendez","Naic","Noveleta","Rosario","Silang","Tanza","Ternate"],
      "Laguna": ["San Pablo City","Santa Rosa City","Biñan City","Calamba City","Cabuyao City","Alaminos","Bay","Calauan","Cavinti","Famy","Kalayaan","Liliw","Los Baños","Luisiana","Lumban","Mabitac","Magdalena","Majayjay","Nagcarlan","Paete","Pagsanjan","Pakil","Pangil","Pila","Rizal","San Pedro","Santa Cruz","Santa Maria","Siniloan","Victoria"],
      "Quezon": ["Lucena City","Tayabas City","Agdangan","Alabat","Atimonan","Buenavista","Burdeos","Calauag","Candelaria","Catanauan","Dolores","General Luna","General Nakar","Guinayangan","Gumaca","Infanta","Jomalig","Lopez","Lucban","Macalelon","Mauban","Mulanay","Padre Burgos","Pagbilao","Panukulan","Patnanungan","Perez","Pitogo","Plaridel","Polillo","Quezon","Real","Sampaloc","San Andres","San Antonio","San Francisco","San Narciso","Sariaya","Tagkawayan","Tiaong","Unisan"],
      "Rizal": ["Antipolo City","Angono","Baras","Binangonan","Cainta","Cardona","Jala-Jala","Morong","Pililla","Rodriguez","San Mateo","Tanay","Taytay","Teresa"]
    },
    "Region IV-B": {
      "Marinduque": ["Boac","Buenavista","Gasan","Mogpog","Santa Cruz","Torrijos"],
      "Occidental Mindoro": ["Mamburao","Abra de Ilog","Calintaan","Looc","Lubang","Magsaysay","Paluan","Rizal","Sablayan","San Jose","Santa Cruz"],
      "Oriental Mindoro": ["Calapan City","Baco","Bansud","Bongabong","Bulalacao","Gloria","Mansalay","Naujan","Pinamalayan","Pola","Puerto Galera","Roxas","San Teodoro","Socorro","Victoria"],
      "Palawan": ["Puerto Princesa City","Aborlan","Agutaya","Araceli","Balabac","Bataraza","Brooke's Point","Busuanga","Cagayancillo","Coron","Culion","Cuyo","Dumaran","El Nido","Kalayaan","Linapacan","Magsaysay","Narra","Quezon","Rizal","Roxas","San Vicente","Sofronio Española","Taytay"],
      "Romblon": ["Romblon","Alcantara","Banton","Cajidiocan","Calatrava","Concepcion","Corcuera","Ferrol","Looc","Magdiwang","Odiongan","San Agustin","San Andres","San Fernando","San Jose","Santa Fe","Santa Maria"]
    },
    "Region V": {
      "Albay": ["Legazpi City","Ligao City","Tabaco City","Bacacay","Camalig","Daraga","Guinobatan","Jovellar","Libon","Malilipot","Malinao","Manito","Oas","Pio Duran","Polangui","Rapu-Rapu","Santo Domingo","Tiwi"],
      "Camarines Norte": ["Daet","Basud","Capalonga","Jose Panganiban","Labo","Mercedes","Paracale","San Lorenzo Ruiz","San Vicente","Santa Elena","Talisay","Vinzons"],
      "Camarines Sur": ["Naga City","Iriga City","Baao","Balatan","Bato","Bombon","Buhi","Bula","Cabusao","Calabanga","Camaligan","Canaman","Caramoan","Del Gallego","Gainza","Garchitorena","Goa","Lagonoy","Libmanan","Lupi","Magarao","Milaor","Minalabac","Nabua","Ocampo","Pamplona","Pasacao","Pili","Presentacion","Ragay","Sagñay","San Fernando","San Jose","Sipocot","Siruma","Tigaon","Tinambac"],
      "Catanduanes": ["Virac","Bagamanoc","Baras","Bato","Caramoran","Gigmoto","Pandan","Panganiban","San Andres","San Miguel","Viga"],
      "Masbate": ["Masbate City","Aroroy","Baleno","Balud","Batuan","Cataingan","Cawayan","Claveria","Dimasalang","Esperanza","Mandaon","Milagros","Mobo","Monreal","Palanas","Pio V. Corpuz","Placer","San Fernando","San Jacinto","San Pascual","Uson"],
      "Sorsogon": ["Sorsogon City","Barcelona","Bulan","Bulusan","Casiguran","Castilla","Donsol","Gubat","Irosin","Juban","Magallanes","Matnog","Pilar","Prieto Diaz","Santa Magdalena","Sta. Magdalena"]
    },
    "Region VI": {
      "Aklan": ["Kalibo","Altavas","Balete","Banga","Batan","Buruanga","Ibajay","Lezo","Libacao","Madalag","Malay","Malinao","Nabas","New Washington","Numancia","Tangalan"],
      "Antique": ["San Jose de Buenavista","Anini-y","Barbaza","Belison","Bugasong","Caluya","Culasi","Hamtic","Laua-an","Libertad","Pandan","Patnongon","San Remigio","Sebaste","Sibalom","Tibiao","Tobias Fornier","Valderrama"],
      "Capiz": ["Roxas City","Cuartero","Dao","Dumalag","Dumarao","Ibajay","Ivisan","Jamindan","Ma-ayon","Mambusao","Panay","Panitan","Pilar","Pontevedra","President Roxas","Sapi-an","Sigma","Tapaz"],
      "Guimaras": ["Jordan","Buenavista","Nueva Valencia","San Lorenzo","Sibunag"],
      "Iloilo": ["Iloilo City","Passi City","Ajuy","Alimodian","Anilao","Badiangan","Balasan","Banate","Barotac Nuevo","Barotac Viejo","Batad","Bingawan","Cabatuan","Calinog","Carles","Concepcion","Dingle","Dueñas","Dumangas","Estancia","Guimbal","Igbaras","Janiuay","Lambunao","Leganes","Lemery","Leon","Maasin","Miagao","Mina","New Lucena","Oton","Pavia","Pototan","San Dionisio","San Enrique","San Joaquin","San Miguel","San Rafael","Santa Barbara","Sara","Tigbauan","Tubungan","Zarraga"],
      "Negros Occidental": ["Bacolod City","Bago City","Cadiz City","Escalante City","Himamaylan City","Kabankalan City","La Carlota City","Sagay City","San Carlos City","Silay City","Sipalay City","Talisay City","Victorias City","Binalbagan","Calatrava","Candoni","Cauayan","Enrique B. Magalona","Hinigaran","Hinoba-an","Ilog","Isabela","La Castellana","Manapla","Moises Padilla","Murcia","Pontevedra","Pulupandan","Salvador Benedicto","San Enrique","Toboso","Valladolid"]
    },
    "Region VII": {
      "Bohol": ["Tagbilaran City","Alburquerque","Alicia","Anda","Antequera","Baclayon","Balilihan","Batuan","Bien Unido","Bilar","Buenavista","Calape","Candijay","Carmen","Catigbian","Clarin","Corella","Cortes","Dagohoy","Danao","Dauis","Dimiao","Duero","Garcia Hernandez","Guindulman","Inabanga","Jagna","Jetafe","Lila","Loay","Loboc","Loon","Mabini","Maribojoc","Panglao","Pilar","President Carlos P. Garcia","Sagbayan","San Isidro","San Miguel","Sevilla","Sierra Bullones","Sikatuna","Talibon","Trinidad","Tubigon","Ubay","Valencia"],
      "Cebu": ["Cebu City","Mandaue City","Lapu-Lapu City","Toledo City","Danao City","Carcar City","Bogo City","Naga City","Talisay City","Alcantara","Alcoy","Alegria","Aloguinsan","Argao","Asturias","Badian","Balamban","Bantayan","Barili","Boljoon","Borbon","Carmen","Catmon","Compostela","Consolacion","Cordova","Daanbantayan","Dalaguete","Dumanjug","Ginatilan","Liloan","Madridejos","Malabuyoc","Medellin","Minglanilla","Moalboal","Oslob","Pilar","Pinamungajan","Poro","Ronda","Samboan","San Fernando","San Francisco","San Remigio","Santa Fe","Santander","Sibonga","Sogod","Tabogon","Tabuelan","Tuburan","Tudela"],
      "Negros Oriental": ["Dumaguete City","Bais City","Bayawan City","Canlaon City","Guihulngan City","Tanjay City","Amlan","Ayungon","Bacong","Basay","Bindoy","Dauin","Jimalalud","La Libertad","Mabinay","Manjuyod","Pamplona","San Jose","Santa Catalina","Siaton","Sibulan","Tayasan","Valencia","Vallehermoso","Zamboanguita"],
      "Siquijor": ["Siquijor","Enrique Villanueva","Larena","Lazi","Maria","San Juan"]
    },
    "Region VIII": {
      "Biliran": ["Naval","Almeria","Biliran","Cabucgayan","Caibiran","Culaba","Kawayan","Maripipi"],
      "Eastern Samar": ["Borongan City","Arteche","Balangiga","Balangkayan","Can-avid","Dolores","General MacArthur","Giporlos","Guiuan","Hernani","Jipapad","Lawaan","Llorente","Maslog","Maydolong","Mercedes","Oras","Quinapondan","Salcedo","San Julian","San Policarpo","Sulat","Taft"],
      "Leyte": ["Tacloban City","Ormoc City","Baybay City","Abuyog","Alangalang","Albuera","Babatngon","Barugo","Bato","Baybay","Burauen","Calubian","Capoocan","Carigara","Dagami","Dulag","Hilongos","Hindang","Inopacan","Isabel","Jaro","Javier","Julita","Kananga","La Paz","Leyte","MacArthur","Mahaplag","Matag-ob","Matalom","Mayorga","Merida","Palo","Palompon","Pastrana","San Isidro","San Miguel","Santa Fe","Tabango","Tabontabon","Tanauan","Tolosa","Tunga","Villaba"],
      "Northern Samar": ["Catarman","Allen","Biri","Bobon","Capul","Catubig","Gamay","Laoang","Lapinig","Las Navas","Lavezares","Lope de Vega","Mapanas","Mondragon","Palapag","Pambujan","Rosario","San Antonio","San Isidro","San Jose","San Roque","San Vicente","Silvino Lobos","Victoria"],
      "Samar": ["Calbayog City","Catbalogan City","Almagro","Basey","Calbiga","Daram","Gandara","Hinabangan","Jiabong","Marabut","Matuguinao","Motiong","Pagsanghan","Paranas","Pinabacdao","San Jorge","San Jose de Buan","San Sebastian","Santa Margarita","Santa Rita","Santo Niño","Tagapul-an","Talalora","Tarangnan","Villareal","Zumarraga"],
      "Southern Leyte": ["Maasin City","Anahawan","Bontoc","Hinunangan","Hinundayan","Libagon","Liloan","Limasawa","Macrohon","Malitbog","Padre Burgos","Pintuyan","Saint Bernard","San Francisco","San Juan","San Ricardo","Silago","Sogod","St. Bernard","Tomas Oppus"]
    },
    "Region IX": {
      "Zamboanga del Norte": ["Dipolog City","Dapitan City","Baliguian","Godod","Gutalac","Jose Dalman","Kalawit","Katipunan","La Libertad","Labason","Liloy","Manukan","Mutia","Piñan","Polanco","President Manuel A. Roxas","Rizal","Salug","Sergio Osmeña Sr.","Siayan","Sibuco","Sibutad","Sindangan","Siocon","Sirawai","Tampilisan"],
      "Zamboanga del Sur": ["Zamboanga City","Pagadian City","Aurora","Bayog","Dimataling","Dinas","Dumalinao","Dumingag","Guipos","Josefina","Kumalarang","Labangan","Lakewood","Lapuyan","Mahayag","Margosatubig","Midsalip","Molave","Pitogo","Ramon Magsaysay","San Miguel","San Pablo","Tabina","Tambulig","Tigbao","Tukuran","Vincenzo Sagun","Zamboanga City"],
      "Zamboanga Sibugay": ["Ipil","Alicia","Buug","Diplahan","Imelda","Kabasalan","Mabuhay","Malangas","Naga","Olutanga","Payao","Roseller Lim","Siay","Talusan","Titay","Tungawan"]
    },
    "Region X": {
      "Bukidnon": ["Malaybalay City","Valencia City","Baungon","Cabanglasan","Damulog","Dangcagan","Don Carlos","Impasugong","Kadingilan","Kalilangan","Kibawe","Kitaotao","Lantapan","Libona","Malitbog","Manolo Fortich","Maramag","Pangantucan","Quezon","San Fernando","Sumilao","Talakag"],
      "Camiguin": ["Mambajao","Catarman","Guinsiliban","Mahinog","Sagay"],
      "Lanao del Norte": ["Iligan City","Bacolod","Baloi","Baroy","Kapatagan","Kauswagan","Kolambugan","Lala","Linamon","Magsaysay","Maigo","Munai","Nunungan","Pantao Ragat","Pantar","Poona Piagapo","Salvador","Sapad","Sultan Naga Dimaporo","Tagoloan","Tangcal","Tubod"],
      "Misamis Occidental": ["Oroquieta City","Ozamiz City","Tangub City","Aloran","Baliangao","Bonifacio","Calamba","Clarin","Concepcion","Don Victoriano Chiongbian","Jimenez","Lopez Jaena","Panaon","Plaridel","Sapang Dalaga","Sinacaban","Tudela"],
      "Misamis Oriental": ["Cagayan de Oro City","Gingoog City","Alubijid","Balingasag","Balingoan","Binuangan","Claveria","El Salvador","Gitagum","Initao","Jasaan","Kinoguitan","Lagonglong","Laguindingan","Libertad","Lugait","Magsaysay","Manticao","Medina","Naawan","Opol","Salay","Sugbongcogon","Tagoloan","Talisayan","Villanueva"]
    },
    "Region XI": {
      "Davao de Oro": ["Nabunturan","Compostela","Laak","Mabini","Maco","Maragusan","Mawab","Monkayo","Montevista","New Bataan","Pantukan"],
      "Davao del Norte": ["Tagum City","Panabo City","Island Garden City of Samal","Asuncion","Braulio E. Dujali","Carmen","Kapalong","New Corella","San Isidro","Santo Tomas","Talaingod"],
      "Davao del Sur": ["Davao City","Digos City","Bansalan","Don Marcelino","Hagonoy","Jose Abad Santos","Kiblawan","Magsaysay","Malalag","Matanao","Padada","Santa Cruz","Sulop"],
      "Davao Occidental": ["Malita","Don Marcelino","Jose Abad Santos","Sarangani","Santa Maria"],
      "Davao Oriental": ["Mati City","Baganga","Banaybanay","Boston","Caraga","Cateel","Governor Generoso","Lupon","Manay","San Isidro","Tarragona"]
    },
    "Region XII": {
      "Cotabato": ["Kidapawan City","Alamada","Aleosan","Arakan","Banisilan","Carmen","Kabacan","Libungan","Magpet","Makilala","Matalam","Midsayap","M'lang","Pigkawayan","Pikit","President Roxas","Tulunan"],
      "Sarangani": ["Alabel","Glan","Kiamba","Maasim","Maitum","Malapatan","Malungon"],
      "South Cotabato": ["Koronadal City","Banga","Lake Sebu","Norala","Polomolok","Santo Niño","Surallah","T'boli","Tampakan","Tantangan","Tupi"],
      "Sultan Kudarat": ["Isulan","Bagumbayan","Columbio","Esperanza","Kalamansig","Lambayong","Lebak","Lutayan","Palimbang","President Quirino","Senator Ninoy Aquino","Tacurong City"]
    },
    "CARAGA": {
      "Agusan del Norte": ["Butuan City","Cabadbaran City","Buenavista","Carmen","Jabonga","Kitcharao","Las Nieves","Magallanes","Nasipit","Remedios T. Romualdez","Santiago","Tubay"],
      "Agusan del Sur": ["Bayugan City","Bunawan","Esperanza","La Paz","Loreto","Prosperidad","Rosario","San Francisco","San Luis","Santa Josefa","Sibagat","Talacogon","Trento","Veruela"],
      "Dinagat Islands": ["San Jose","Basilisa","Cagdianao","Dinagat","Libjo","Loreto","Tubajon"],
      "Surigao del Norte": ["Surigao City","Alegria","Bacuag","Burgos","Claver","Dapa","Del Carmen","General Luna","Gigaquit","Mainit","Malimono","Pilar","Placer","San Benito","San Francisco","San Isidro","Santa Monica","Sison","Socorro","Tagana-an","Tubod"],
      "Surigao del Sur": ["Tandag City","Bislig City","Barobo","Bayabas","Cagwait","Cantilan","Carmen","Carrascal","Cortes","Hinatuan","Lanuza","Lianga","Lingig","Madrid","Marihatag","San Agustin","San Miguel","Tagbina","Tago"]
    },
    "CAR": {
      "Abra": ["Bangued","Boliney","Bucay","Bucloc","Daguioman","Danglas","Dolores","La Paz","Lacub","Lagangilang","Lagayan","Langiden","Licuan-Baay","Luba","Malibcong","Manabo","Peñarrubia","Pidigan","Pilar","Sallapadan","San Isidro","San Juan","San Quintin","Tayum","Tineg","Tubo","Villaviciosa"],
      "Apayao": ["Kabugao","Calanasan","Conner","Flora","Luna","Pudtol","Santa Marcela"],
      "Benguet": ["Baguio City","Atok","Bakun","Bokod","Buguias","Itogon","Kabayan","Kapangan","Kibungan","La Trinidad","Mankayan","Sablan","Tuba","Tublay"],
      "Ifugao": ["Lagawe","Aguinaldo","Alfonso Lista","Asipulo","Banaue","Hingyon","Hungduan","Kiangan","Lamut","Mayoyao","Tinoc"],
      "Kalinga": ["Tabuk City","Balbalan","Lubuagan","Pasil","Pinukpuk","Rizal","Tanudan","Tinglayan"],
      "Mountain Province": ["Bontoc","Barlig","Bauko","Besao","Natonin","Paracelis","Sabangan","Sadanga","Sagada","Tadian"]
    },
    "BARMM": {
      "Basilan": ["Isabela City","Akbar","Al-Barka","Hadji Mohammad Ajul","Hadji Muhtamad","Lantawan","Maluso","Sumisip","Tabuan-Lasa","Tipo-Tipo","Tuburan","Ungkaya Pukan"],
      "Lanao del Sur": ["Marawi City","Bacolod-Kalawi","Balabagan","Balindong","Bayang","Binidayan","Buadiposo-Buntong","Bubong","Bumbaran","Butig","Calanogas","Ditsaan-Ramain","Ganassi","Kapai","Kapatagan","Lumba-Bayabao","Lumbaca-Unayan","Lumbatan","Lumbayanague","Madalum","Madamba","Maguing","Malabang","Marantao","Marogong","Masiu","Mulondo","Pagayawan","Piagapo","Picong","Poona Bayabao","Pualas","Saguiaran","Sultan Dumalondong","Sultan Gumander","Tagoloan II","Tamparan","Taraka","Tubaran","Tugaya","Wao"],
      "Maguindanao del Norte": ["Datu Odin Sinsuat","Barira","Buldon","Kabuntalan","Northern Kabuntalan","Parang","Sultan Kudarat","Sultan Mastura","Upi"],
      "Maguindanao del Sur": ["Buluan","Datu Abdullah Sangki","Datu Anggal Midtimbang","Datu Blah T. Sinsuat","Datu Hoffer Ampatuan","Datu Montawal","Datu Paglas","Datu Piang","Datu Salibo","Datu Saudi-Ampatuan","Datu Unsay","General Salipada K. Pendatun","Guindulungan","Mamasapano","Mangudadatu","Pagalungan","Paglat","Pandag","Rajah Buayan","Shariff Aguak","Shariff Saydona Mustapha","South Upi","Sultan sa Barongis","Talayan","Talitay"],
      "Sulu": ["Jolo","Hadji Panglima Tahil","Indanan","Kalingalan Caluang","Lugus","Luuk","Maimbung","Old Panamao","Omar","Pandami","Panglima Estino","Pangutaran","Parang","Pata","Patikul","Siasi","Talipao","Tapul","Tongkil"],
      "Tawi-Tawi": ["Bongao","Balimbing","Languyan","Mapun","Panglima Sugala","Sapa-Sapa","Sibutu","Simunul","Sitangkai","South Ubian","Tandubas","Turtle Islands"]
    }
  };

  const regionSel   = document.getElementById('e-region');
  const provinceSel = document.getElementById('e-province');
  const citySel     = document.getElementById('e-city');
  if (!regionSel || !provinceSel || !citySel) return;

  function resetSelect(sel, placeholder) {
    sel.innerHTML = `<option value="">${placeholder}</option>`;
    sel.disabled = true;
  }

  /* Init */
  resetSelect(provinceSel, 'Select Province');
  resetSelect(citySel, 'Select City / Municipality');

  regionSel.addEventListener('change', () => {
    const region = regionSel.value;
    resetSelect(provinceSel, 'Select Province');
    resetSelect(citySel, 'Select City / Municipality');

    if (!region || !PH[region]) return;

    Object.keys(PH[region]).forEach(prov => {
      const opt = document.createElement('option');
      opt.value = prov;
      opt.textContent = prov;
      provinceSel.appendChild(opt);
    });
    provinceSel.disabled = false;
  });

  provinceSel.addEventListener('change', () => {
    const region   = regionSel.value;
    const province = provinceSel.value;
    resetSelect(citySel, 'Select City / Municipality');

    if (!province || !PH[region]?.[province]) return;

    PH[region][province].forEach(city => {
      const opt = document.createElement('option');
      opt.value = city;
      opt.textContent = city;
      citySel.appendChild(opt);
    });
    citySel.disabled = false;
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Show button when user scrolls down 300px from the top
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // When the user clicks on the button, scroll to the top of the document
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Native smooth scroll backup
    });
  });
});

// Detect change instantly on step 1 dropdown select
function handleFormDropdownChange() {
    const dropdown = document.getElementById('filingForm');
    const selectedText = dropdown.options[dropdown.selectedIndex].text;
    const regNameField = document.getElementById('alt-regname-group');

    // UX Logic: Auto-show/hide corporate field if a corporate form is selected
    if (dropdown.value.startsWith('1702')) {
        regNameField.style.display = 'flex';
    } else {
        // Optional: Hide or disable it if selecting an Individual Form like 1701
        regNameField.style.display = 'none';
    }
}

// Processing flow for Step 1
function processStep1() {
    const dropdown = document.getElementById('filingForm');
    const selectedValue = dropdown.value;
    const selectedText = dropdown.options[dropdown.selectedIndex].text;

    // Validation: Stop progression if no form selection is made
    if (!selectedValue) {
        dropdown.style.borderColor = "var(--red-err, #dc2626)";
        alert("Please select a valid filing tax form before continuing.");
        return;
    } else {
        dropdown.style.borderColor = "var(--gray-200)";
    }

    // Pull TIN inputs
    const t1 = document.getElementById('ft1').value;
    const t2 = document.getElementById('ft2').value;
    const t3 = document.getElementById('ft3').value;
    const t4 = document.getElementById('ft4').value;

    // Update Confirmation Data instantly inside the modal framework
    document.getElementById('sum-name').innerText = document.getElementById('alt-data').value || '-';
    document.getElementById('sum-tin').innerText = `${t1}-${t2}-${t3}-${t4}`;
    
    // Send selected dropdown text name directly to step 3 summary block
    document.getElementById('sum-form').innerText = selectedText;

    // Set contextual message for Step 2 based on selected form
    const dynamicContext = document.getElementById('dynamicFormContext');
    dynamicContext.style.display = 'block';
    dynamicContext.innerHTML = `You are filing <strong>${selectedValue}</strong>. Please select your preferred handling method below:`;

    // Forward animation step cleanly inside modal view
    goToPanel('panel-filing2');
}

