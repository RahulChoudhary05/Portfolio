/* eslint-disable no-undef, no-use-before-define */
/*
  Faithful port of the reference portfolio's inline <script> IIFE.
  Runs after React has mounted the DOM and queries it by the same
  ids / classes / selectors as the reference. Every lookup is guarded
  so a missing element or missing CDN script (gsap / ScrollTrigger /
  three) can never crash the app.
*/

export default function initPortfolio() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  // React.StrictMode double-invokes effects in dev; the effects must only wire up once.
  if (window.__portfolioInit) return;
  window.__portfolioInit = true;

  /* ========================================================
     0. CONFIG — the only place to change backend wiring
     ======================================================== */
  var CONFIG = {
    // Leave empty to use the mailto fallback. Drop in a Formspree / Resend /
    // your own Express endpoint URL and the form POSTs JSON to it instead.
    FORM_ENDPOINT: "",
    MAIL_TO: "rahulchoudhary.sk@gmail.com"
  };

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var TOUCH   = window.matchMedia("(hover: none)").matches;
  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  var el = function (tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "className") n.className = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    if (text != null) n.textContent = text;
    return n;
  };
  // Scroll-linked motion and the WebGL field only matter once someone moves, scrolls,
  // touches or types — so their code-split chunks are fetched then, never on the
  // critical path (and never as main-thread work during the initial load).
  var onFirstInteraction = function (fn) {
    var evs = ["pointermove", "pointerdown", "touchstart", "wheel", "scroll", "keydown"];
    function go() {
      evs.forEach(function (e) { window.removeEventListener(e, go, true); });
      if ("requestIdleCallback" in window) window.requestIdleCallback(fn, { timeout: 400 });
      else setTimeout(fn, 50);
    }
    evs.forEach(function (e) { window.addEventListener(e, go, { capture: true, passive: true }); });
  };

  /* Code-split enhancements: GSAP ScrollTrigger motion and the WebGL field. */
  var enhanced = false;
  function loadEnhancements() {
    if (enhanced) return;
    enhanced = true;
    if (!REDUCED) {
      import("./motion").then(function (m) { scrollMotion(m.gsap, m.ScrollTrigger); }, function () { scrollMotion(); });
    }
    var cv = $("#field");
    if (cv) import("./heroField").then(function (m) { m.default(cv, REDUCED); }, function () {});
  }

  /* Failsafe: if anything at all throws, drop the enhancement flag so every
     progressively-hidden element becomes visible and the page still reads. */
  window.addEventListener("error", function () {
    document.documentElement.classList.remove("js");
    var b = document.getElementById("boot");
    if (b) { b.hidden = true; b.style.display = "none"; }
  });
  setTimeout(function () {
    var b = document.getElementById("boot");
    if (b && !b.hidden) {
      b.hidden = true;
      document.documentElement.classList.remove("js");
    }
  }, 9000);

  // eslint-disable-next-line no-unused-vars
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ========================================================
     2. TOAST
     ======================================================== */
  var toastEl = $("#toast"), toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("up");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("up"); }, 2600);
  }

  /* ========================================================
     3. BOOT SEQUENCE
     ======================================================== */
  (function boot() {
    var el = $("#boot"), num = $("#bootNum"), bar = $("#bootBar"), log = $("#bootLog");
    if (!el || !num || !bar || !log) { onFirstInteraction(loadEnhancements); return; }
    var lines = [
      "resolving typefaces", "compiling shaders", "seeding particle field",
      "mounting sections", "warming scroll triggers", "ready"
    ];
    // The loader's type is revealed (CSS: #boot.fonts) only once its own webfonts are in,
    // capped at 1.2s, so a late font swap can never shift it. Nothing else is awaited:
    // the page is prerendered, and the intro is never gated on window "load".
    var started = false;
    var fontsIn = document.fonts && document.fonts.load
      ? Promise.all(["800 1em Syne", "700 1em Syne", "400 1em 'JetBrains Mono'"].map(function (f) { return document.fonts.load(f); }))
      : Promise.resolve();
    fontsIn.then(start, start);
    setTimeout(start, 1200);

    function start() {
      if (started) return;
      started = true;
      el.classList.add("fonts");
      $$(".boot-mark span").forEach(function (c, i) {
        if (!c.animate) return;
        c.animate(
          [{ transform: "translateY(110%)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
          { duration: 820, delay: 90 + i * 70, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
        );
      });
      setTimeout(function () { el.classList.add("lit"); }, 520);
      count();
    }

    function count() {
      var pct = 0, li = 0;
      var tick = setInterval(function () {
        pct = Math.min(100, pct + (100 - pct) * 0.30 + 3.2);
        var shown = Math.floor(pct);
        num.textContent = shown < 10 ? "0" + shown : String(shown);
        bar.style.transform = "scaleX(" + (pct / 100) + ")";
        var next = Math.min(lines.length - 1, Math.floor(pct / 100 * lines.length));
        if (next !== li) { li = next; log.textContent = lines[li]; }
        if (pct >= 99.4) {
          clearInterval(tick);
          num.textContent = "100";
          setTimeout(finish, 140);
        }
      }, 40);
    }

    function finish() {
      el.classList.add("done");
      setTimeout(function () { el.hidden = true; }, 620);
      document.body.dataset.ready = "1";
      heroIn();
      var f = $("#field"); if (f) f.classList.add("lit");
      onFirstInteraction(loadEnhancements);
    }
  })();

  /* ========================================================
     4. HERO ENTRANCE (WAAPI)
     ======================================================== */
  function heroIn() {
    var lines = $$(".wordmark .ln > span");
    var rest = $$(".hero .rv");
    // Guarantee the hero is never left hidden — timers still fire even when the
    // rAF-driven WAAPI animation is throttled (background tab, power-save).
    function forceReveal() {
      lines.forEach(function (l) { l.style.transform = "none"; });
      rest.forEach(function (r) { r.classList.add("in"); });
    }
    if (REDUCED) { forceReveal(); return; }
    lines.forEach(function (l, i) {
      if (!l.animate) { l.style.transform = "none"; return; }
      l.animate([{ transform: "translateY(102%)" }, { transform: "translateY(0)" }],
        { duration: 720, delay: i * 60, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" });
    });
    rest.forEach(function (r, i) { setTimeout(function () { r.classList.add("in"); }, 260 + i * 55); });
    // Failsafe: if the animation hasn't landed the wordmark within ~1s, snap it in.
    setTimeout(forceReveal, 1000);
    counters();
  }

  /* ========================================================
     5. REVEALS
     ======================================================== */
  (function reveals() {
    var items = $$(".rv").filter(function (n) { return !n.closest(".hero"); });
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (n) { n.classList.add("in"); });
      $$(".proj-art").forEach(function (n) { n.classList.add("seen"); });
      $$(".meter").forEach(function (m) { var f = $(".meter-fill", m); if (f) f.style.width = m.dataset.v + "%"; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target;
        var sibs = n.parentElement ? $$(".rv", n.parentElement) : [];
        var idx = Math.max(0, sibs.indexOf(n));
        setTimeout(function () { n.classList.add("in"); }, Math.min(idx, 5) * 70);
        io.unobserve(n);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (n) { io.observe(n); });

    // project artwork wipe + stack meters
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("seen");
        if (TOUCH) e.target.classList.add("lit");
        io2.unobserve(e.target);
      });
    }, { threshold: 0.25 });
    $$(".proj-art").forEach(function (n) { io2.observe(n); });

    var io3 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        $$(".meter", e.target).forEach(function (m, i) {
          setTimeout(function () {
            var f = $(".meter-fill", m);
            if (f) f.style.width = m.dataset.v + "%";
          }, i * 110);
        });
        io3.unobserve(e.target);
      });
    }, { threshold: 0.35 });
    var meters = $("#meters"); if (meters) io3.observe(meters);
  })();

  /* ========================================================
     6. COUNTERS
     ======================================================== */
  function counters() {
    $$("[data-count]").forEach(function (el) {
      var target = parseInt(el.dataset.count, 10);
      var suffix = el.dataset.suffix || "";
      if (REDUCED) { el.textContent = target + suffix; return; }
      var start = performance.now(), dur = 1700;
      (function step(now) {
        var p = clamp((now - start) / dur, 0, 1);
        var eased = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(target * eased) + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(step);
      })(start);
      // Failsafe: land the final value even if rAF is throttled and never ticks.
      setTimeout(function () { el.textContent = target + suffix; }, dur + 250);
    });
  }

  /* ========================================================
     7. HEADER, PROGRESS, RAIL, ACTIVE SECTION
     ======================================================== */
  (function chrome() {
    var top = $("#top"), prog = $("#prog"), last = 0;
    function onScroll() {
      var y = window.scrollY;
      var cmdkEl = $("#cmdk"), drawerEl = $("#drawer");
      var blocked = (cmdkEl && cmdkEl.classList.contains("open")) || (drawerEl && drawerEl.classList.contains("open"));
      if (top) top.classList.toggle("hide", y > 420 && y > last && !blocked);
      last = y;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (prog) prog.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var ids = ["hero", "about", "experience", "stack", "work", "services", "background", "contact"];
    var links = $$("#nav a").concat($$("#rail a"));
    if ("IntersectionObserver" in window) {
      var seen = {};
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { seen[e.target.id] = e.intersectionRatio; });
        var best = null, bv = 0;
        ids.forEach(function (id) { if ((seen[id] || 0) > bv) { bv = seen[id]; best = id; } });
        if (!best) return;
        links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + best); });
      }, { threshold: [0.12, 0.35, 0.6] });
      ids.forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
    }

    var toTop = $("#toTop");
    if (toTop) {
      toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }); });
      var toggleTop = function () { toTop.classList.toggle("show", window.scrollY > 600); };
      window.addEventListener("scroll", toggleTop, { passive: true });
      toggleTop();
    }
    var yr = $("#yr"); if (yr) yr.textContent = new Date().getFullYear();
  })();

  /* ========================================================
     8. MOBILE DRAWER
     ======================================================== */
  (function drawer() {
    var b = $("#burger"), d = $("#drawer");
    if (!b || !d) return;
    var links = $$("nav a", d);
    function setOpen(open) {
      d.classList.toggle("open", open);
      b.classList.toggle("x", open);
      b.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("is-locked", open);
      links.forEach(function (a, i) { a.style.transitionDelay = open ? (0.12 + i * 0.055) + "s" : "0s"; });
    }
    b.addEventListener("click", function () { setOpen(!d.classList.contains("open")); });
    links.forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  })();

  /* 9. TICKER is rendered by components/Ticker.jsx. */

  /* ========================================================
     10. CURSOR + MAGNETIC
     ======================================================== */
  (function cursor() {
    if (TOUCH || REDUCED) return;
    var ring = $("#cur"), dot = $("#curDot");
    if (!ring || !dot) return;
    var mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my, raf = 0;
    // The trailing ring only animates while it is catching up, so an idle page does no per-frame work.
    function loop() {
      rx = lerp(rx, mx, 0.16); ry = lerp(ry, my, 0.16);
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      raf = Math.abs(rx - mx) + Math.abs(ry - my) > 0.3 ? requestAnimationFrame(loop) : 0;
    }
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    loop();
    $$("a,button,[data-cur],input,textarea").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        ring.classList.add("grow");
        ring.setAttribute("data-label", el.getAttribute("data-cur") || "");
      });
      el.addEventListener("mouseleave", function () { ring.classList.remove("grow"); ring.removeAttribute("data-label"); });
    });
    // magnetic buttons
    $$(".btn, .icon-btn, .brand-glyph").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        var dy = (e.clientY - (r.top + r.height / 2)) * 0.32;
        el.style.transform = "translate(" + dx + "px," + dy + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  })();

  /* ========================================================
     11. TILT + SPOTLIGHT
     ======================================================== */
  (function tilt() {
    if (TOUCH || REDUCED) return;
    $$(".term, .proj-art").forEach(function (el) {
      el.style.transformStyle = "preserve-3d";
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(1100px) rotateY(" + (px * 5).toFixed(2) + "deg) rotateX(" + (-py * 5).toFixed(2) + "deg)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; el.style.transition = "transform .7s cubic-bezier(.22,1,.36,1)"; });
      el.addEventListener("mouseenter", function () { el.style.transition = "transform .12s linear"; });
    });
    $$(".svc").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty("--mx", (e.clientX - r.left) + "px");
        el.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  })();

  /* ========================================================
     12. SCROLL-LINKED MOTION (GSAP ScrollTrigger when present)
     ======================================================== */
  // Called with GSAP once the motion chunk loads; without it (reduced motion,
  // or the chunk failed) it falls back to a plain scroll listener.
  if (REDUCED) scrollMotion();
  function scrollMotion(gsap, ScrollTrigger) {
    var fill = $("#tlFill"), tl = $("#tl");
    function manual() {
      function on() {
        if (tl && fill) {
          var r = tl.getBoundingClientRect();
          var p = clamp((window.innerHeight * 0.75 - r.top) / Math.max(1, r.height), 0, 1);
          fill.style.height = (p * 100) + "%";
        }
        $$("[data-parallax]").forEach(function (el) {
          var rr = el.getBoundingClientRect();
          var mid = (rr.top + rr.height / 2 - window.innerHeight / 2) / window.innerHeight;
          el.style.setProperty("--py", (mid * parseFloat(el.dataset.parallax) * 100).toFixed(2) + "px");
          if (!REDUCED) el.style.translate = "0 " + (mid * parseFloat(el.dataset.parallax) * -60).toFixed(1) + "px";
        });
      }
      window.addEventListener("scroll", on, { passive: true });
      window.addEventListener("resize", on);
      on();
    }

    if (gsap && ScrollTrigger && !REDUCED) {
      gsap.registerPlugin(ScrollTrigger);
      // Sections use content-visibility:auto, so their real height is only known once they
      // first render; re-measure trigger positions when that happens.
      var refreshT;
      $$(".section,.foot").forEach(function (s) {
        s.addEventListener("contentvisibilityautostatechange", function () {
          clearTimeout(refreshT);
          refreshT = setTimeout(function () { ScrollTrigger.refresh(); }, 120);
        });
      });
      if (tl && fill) {
        gsap.to(fill, { height: "100%", ease: "none",
          scrollTrigger: { trigger: tl, start: "top 72%", end: "bottom 62%", scrub: 0.4 } });
      }
      $$("[data-parallax]").forEach(function (el) {
        gsap.fromTo(el, { yPercent: 5 * parseFloat(el.dataset.parallax) * 10 },
          { yPercent: -5 * parseFloat(el.dataset.parallax) * 10, ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 } });
      });
      if ($(".wordmark") && $("#hero")) {
        gsap.to(".wordmark", { yPercent: -14, opacity: 0.55, ease: "none",
          scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 0.5 } });
      }
    } else {
      manual();
    }
  }


  /* 13. WEBGL IDENTITY FIELD lives in ./heroField.js (loaded on first interaction). */

  /* ========================================================
     14. COMMAND PALETTE
     ======================================================== */
  (function cmdk() {
    var box = $("#cmdk"), input = $("#cmdkInput"), list = $("#cmdkList");
    if (!box || !input || !list) return;
    var items = [
      { t: "Work", k: "projects portfolio", a: "#work", h: "section" },
      { t: "About", k: "bio who", a: "#about", h: "section" },
      { t: "Experience", k: "career jobs omnithrive", a: "#experience", h: "section" },
      { t: "Stack", k: "skills tech tools", a: "#stack", h: "section" },
      { t: "Services", k: "hire freelance offer", a: "#services", h: "section" },
      { t: "Background", k: "education patent certification", a: "#background", h: "section" },
      { t: "Contact", k: "email hire message", a: "#contact", h: "section" },
      { t: "durabolt", k: "npm open source postgres", a: "https://www.npmjs.com/package/@rahulchoudhary05/durabolt", h: "project" },
      { t: "CipherSQL Studio", k: "sql learning", a: "https://ciphersqlschool.vercel.app/", h: "project" },
      { t: "MEDO Shield AI", k: "telemedicine health", a: "https://medoshieldai.vercel.app/", h: "project" },
      { t: "ComboFinder", k: "data tool", a: "https://combofinder.vercel.app/", h: "project" },
      { t: "S Raj Infra Projects", k: "saas client", a: "https://srajinfra.vercel.app/", h: "project" },
      { t: "GitHub", k: "code repo", a: "https://github.com/RahulChoudhary05", h: "link" },
      { t: "LinkedIn", k: "profile network", a: "https://www.linkedin.com/in/rahulchoudhary210505/", h: "link" },
      { t: "X / Twitter", k: "social", a: "https://twitter.com/krahul_21", h: "link" },
      { t: "Download CV", k: "resume pdf", a: "https://drive.google.com/file/d/1Jj0pxIaMYz1qWwOoHxd5HTJwZhQR41Di/view?usp=sharing", h: "file" },
      { t: "Email Rahul", k: "mail contact", a: "mailto:" + CONFIG.MAIL_TO, h: "action" },
      { t: "Copy email address", k: "clipboard", a: "copy", h: "action" }
    ];
    var view = items.slice(), sel = 0;

    function render() {
      // Built with DOM nodes, never innerHTML, so Trusted Types can stay enforced.
      list.textContent = "";
      if (!view.length) {
        list.appendChild(el("li", { className: "cmdk-empty", role: "presentation" }, "Nothing matches that. Try “durabolt” or “hire”."));
        return;
      }
      view.forEach(function (it, i) {
        var li = el("li", { role: "option", className: i === sel ? "sel" : "", "aria-selected": String(i === sel) });
        li.dataset.i = i;
        li.appendChild(el("span", null, it.t));
        li.appendChild(el("em", null, it.h));
        list.appendChild(li);
      });
    }
    function open() {
      box.classList.add("open");
      document.body.classList.add("is-locked");
      input.value = ""; view = items.slice(); sel = 0; render();
      setTimeout(function () { input.focus(); }, 40);
    }
    function close() { box.classList.remove("open"); document.body.classList.remove("is-locked"); }
    function run(it) {
      if (!it) return;
      if (it.a === "copy") { copyMail(); close(); return; }
      close();
      if (it.a.charAt(0) === "#") {
        var el = document.querySelector(it.a);
        if (el) el.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth", block: "start" });
      } else { window.open(it.a, it.a.indexOf("mailto:") === 0 ? "_self" : "_blank", "noopener"); }
    }

    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      view = !q ? items.slice() : items.filter(function (it) {
        return (it.t + " " + it.k + " " + it.h).toLowerCase().indexOf(q) > -1;
      });
      sel = 0; render();
    });
    list.addEventListener("click", function (e) {
      var li = e.target.closest("li[data-i]");
      if (li) run(view[+li.dataset.i]);
    });
    box.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) close(); });
    var openBtn = $("#openCmd");
    if (openBtn) openBtn.addEventListener("click", open);
    var cmdKey = $("#cmdKey");
    if (cmdKey && /Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgent || "")) cmdKey.textContent = "⌘";
    document.addEventListener("keydown", function (e) {
      var k = (e.key || "").toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "k") { e.preventDefault(); if (box.classList.contains("open")) { close(); } else { open(); } return; }
      if (!box.classList.contains("open")) {
        var tag = document.activeElement ? document.activeElement.tagName : "";
        if (k === "k" && !/input|textarea/i.test(tag)) { e.preventDefault(); open(); }
        return;
      }
      if (e.key === "Escape") { close(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(view.length - 1, sel + 1); render(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); render(); }
      else if (e.key === "Enter") { e.preventDefault(); run(view[sel]); }
    });
  })();

  /* ========================================================
     15. CONTACT — validation, transport, fallbacks
     ======================================================== */
  function copyMail() {
    var txt = CONFIG.MAIL_TO;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast("Email address copied"); },
        function () { toast(txt); });
    } else { toast(txt); }
  }

  (function contact() {
    var form = $("#msgForm"), btn = $("#sendBtn"), note = $("#formNote");
    var copyBtn = $("#copyMail");
    if (copyBtn) copyBtn.addEventListener("click", copyMail);
    if (!form) return;

    function val(id) {
      var el = document.getElementById(id);
      return el ? el.value.trim() : "";
    }
    function setErr(id, msg) {
      var el = document.getElementById(id);
      var f = el ? el.closest(".field") : null;
      if (f) f.classList.toggle("bad", !!msg);
      var e = $('.err[data-for="' + id + '"]');
      if (e) e.textContent = msg || "";
    }
    function validate() {
      var ok = true;
      var name = val("f-name");
      var mail = val("f-mail");
      var msg = val("f-msg");
      setErr("f-name", name ? "" : "Add a name so I know who I'm replying to.");
      if (!name) ok = false;
      var mailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);
      setErr("f-mail", mailOk ? "" : "This address doesn't look reachable — check it once.");
      if (!mailOk) ok = false;
      setErr("f-msg", msg.length >= 12 ? "" : "A sentence or two about the work helps me answer properly.");
      if (msg.length < 12) ok = false;
      return ok;
    }
    ["f-name", "f-mail", "f-msg"].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener("blur", function () { if (el.value.trim()) validate(); });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) { toast("Check the highlighted fields"); return; }
      var payload = {
        name: val("f-name"),
        email: val("f-mail"),
        subject: val("f-sub") || "New project enquiry",
        message: val("f-msg")
      };
      var original = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

      if (CONFIG.FORM_ENDPOINT) {
        fetch(CONFIG.FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        }).then(function (r) {
          if (!r.ok) throw new Error(r.status);
          done();
        }).catch(function () {
          if (btn) { btn.disabled = false; btn.textContent = original; }
          if (note) note.textContent = "That didn't go through. Opening your mail app instead.";
          mailto(payload);
        });
      } else {
        mailto(payload);
        setTimeout(done, 400);
      }

      function mailto(p) {
        var body = "From: " + p.name + " (" + p.email + ")\n\n" + p.message;
        window.location.href = "mailto:" + CONFIG.MAIL_TO +
          "?subject=" + encodeURIComponent(p.subject) + "&body=" + encodeURIComponent(body);
      }
      function done() {
        var sent = el("div", { className: "sent" });
        sent.appendChild(el("b", null, "Message on its way."));
        sent.appendChild(el("span", null, "Thanks " + payload.name.split(" ")[0] +
          " — I read everything that lands in this inbox and usually reply within a day."));
        form.replaceChildren(sent);
        toast("Message prepared");
      }
    });
  })();
}
