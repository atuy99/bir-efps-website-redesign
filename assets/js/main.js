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