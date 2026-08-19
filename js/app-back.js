// app-back.js — the Android hardware back button (v1.27.13)
//
// ─── WHAT BACK MEANS ON ANDROID ──────────────────────────────────────────────
//
// On Android the back button is a system-wide "close the thing on top". It is
// not a browser Back and it is not a second navigation control: users expect it
// to undo the last thing that opened, one layer at a time, and to leave the app
// only when there is nothing left open. An app that ignores it — and Deckstack
// did — closes itself the moment you press it, mid-session, which reads as a
// crash.
//
// So this file adds no button and no arrow. It maps the hardware key onto the
// close affordance the app ALREADY shows on screen: the ✕ on a training
// screen, the ✕ on an overlay, Skip on a guide, ← on the mode screen. Whatever
// the visible way out is, back takes it. That is why the ladder below mostly
// clicks existing buttons instead of reimplementing what they do — the two can
// then never drift apart.
//
// At the very bottom, on the home screen with nothing open, the convention is
// press-back-twice-to-exit with a hint in between. One stray press should not
// end a training session.
//
// ─── REQUIRES @capacitor/app ─────────────────────────────────────────────────
//
// The event only arrives if the App plugin is installed natively:
//
//     npm install @capacitor/app
//     npx cap sync android
//
// Without it, Android's default takes over and the app just closes — which is
// today's behaviour, so a missing plugin is a no-op, never a break.

(function initBackButton() {

  // ── Is this element actually on screen? ────────────────────────────────────
  //
  // Deckstack opens things two different ways, and the difference matters here:
  //
  //   · screens (mode, training, guides) are switched with INLINE display
  //   · overlays are `.settings-overlay`, hidden in CSS and opened by adding
  //     the class `open`
  //
  // So "is it open" cannot be one question. Asking getComputedStyle instead
  // would look tidier and be wrong in exactly the place it matters: it depends
  // on the stylesheet having loaded, which is not something a back handler
  // should be able to get wrong.

  // For screens: opened by setting display explicitly.
  function isOpen(el) {
    return !!(el && el.style && el.style.display && el.style.display !== 'none');
  }

  // For things toggled by class or shown by clearing display — tabs, banner
  // buttons. Absence of `display:none` is the signal.
  function isShown(el) {
    return !!(el && (!el.style || el.style.display !== 'none'));
  }

  function click(el) { if (el) { el.click(); return true; } return false; }

  // Click the first control in `root` that matches, in the order given.
  function clickFirst(root, selectors) {
    if (!root) return false;
    for (const sel of selectors) {
      const btn = root.querySelector(sel);
      if (btn && isShown(btn)) return click(btn);
    }
    return false;
  }

  // ── The ladder ─────────────────────────────────────────────────────────────
  // Ordered by what is visually on top. First match wins; each rung returns
  // true when it consumed the press.
  const RUNGS = [

    // 1. A note panel over a card. Closes before the card does.
    function noteePanel() {
      const note = document.querySelector('.card-note.visible');
      if (!note) return false;
      return clickFirst(note, ['[id$="CardNoteClose"]', '#cardNoteClose'])
          || (note.classList.remove('visible'), true);
    },

    // 2. The card info panel (the ⓘ description over a card).
    function cardInfo() {
      const info = document.querySelector('.card-info.visible, .card-info.open');
      if (!info) return false;
      return clickFirst(info, ['[id$="CardInfoClose"]', '#cardInfoClose'])
          || (info.classList.remove('visible', 'open'), true);
    },

    // 3. Any open overlay — settings, pack settings, about, what's new, the
    //    export modal, the rating prompt. Newest on top wins: later in the DOM
    //    is later added, and the dynamically built ones are appended last.
    function overlays() {
      const open = [
        ...document.querySelectorAll('.settings-overlay.open'),
        ...[...document.querySelectorAll('[id$="Overlay"]')].filter(isOpen),
      ];
      if (!open.length) return false;
      const top = open[open.length - 1];
      if (clickFirst(top, ['[id$="Close"]', '[id$="CloseBtn"]', '.overlay-close', '[aria-label="Close"]'])) return true;
      // No close button of its own (the pro nudge, the recommendation prompt).
      top.classList.remove('open');
      top.style.display = 'none';
      return true;
    },

    // 4. A guide, a pack intro, or onboarding. All three live in the same two
    //    screens and all three end with Skip.
    function introScreens() {
      for (const id of ['packIntroScreen', 'onboardingScreen']) {
        const el = document.getElementById(id);
        if (!isOpen(el)) continue;
        if (clickFirst(el, ['#gdSkipBtn', '#piSkipBtn', '#obSkipBtn', '.ob-skip'])) return true;
        el.style.display = 'none';
        return true;
      }
      return false;
    },

    // 5. A checkpoint quiz. Leaving abandons the attempt — same as the app
    //    being closed mid-quiz — and lands back in the program, which is where
    //    the user was. Questions are drawn fresh each attempt anyway.
    function checkpoint() {
      const el = document.getElementById('checkpointScreen');
      if (!isOpen(el)) return false;
      if (clickFirst(el, ['#cp-back-btn'])) return true;
      el.style.display = 'none';
      if (window.renderProgramList) renderProgramList();
      return true;
    },

    // 6. A training screen. Every one of the twelve carries its own ✕ in the
    //    top bar; pressing it does the tidying up (ending the session, stopping
    //    speech) that back must not skip.
    function trainingScreen() {
      const ids = (typeof TRAINING_SCREENS !== 'undefined' && TRAINING_SCREENS.length)
        ? TRAINING_SCREENS
        : ['trainingScreen','msScreen','memScreen','collScreen','challScreen','mindScreen','flowScreen','guidedScreen',
           'hfScreen','hfMemScreen','hfCollScreen','hfChallScreen','hfMindScreen','hfFlowScreen'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!isOpen(el)) continue;
        if (clickFirst(el, ['[id$="CloseBtn"]', '#closeBtn'])) return true;
      }
      return false;
    },

    // 7. The mode screen — exactly what the ← arrow does, which is what he
    //    asked for: no second way out, the same way out.
    function modeScreen() {
      const el = document.getElementById('modeScreen');
      if (!isOpen(el)) return false;
      if (window.showHome) { showHome(); return true; }
      return false;
    },

    // 8. Settings reached from the home screen.
    function homeSettings() {
      const el = document.getElementById('homeSettingsScreen');
      if (!isOpen(el)) return false;
      return clickFirst(el, ['#homeSettingsBackBtn']);
    },

    // 9. An opened folder returns to the folder list. The banner grows its own
    //    ← while a folder is open, and that button already re-renders the list
    //    and restores the sub-nav — so press it rather than half-repeat it.
    function openFolder() {
      const back = document.getElementById('libBannerBackBtn');
      if (!isShown(back)) return false;
      return click(back);
    },

    // 10. A program's detail view returns to the program list.
    function programDetail() {
      const tab = document.getElementById('libTabPrograms');
      if (!isShown(tab) || !tab.querySelector('.program-detail')) return false;
      if (window.renderProgramList) { renderProgramList(); return true; }
      return false;
    },

    // 11. Any tab other than the first one returns there, the way back works
    //     everywhere else on Android.
    function toFirstTab() {
      const active = document.querySelector('.nav-tab.active');
      const first  = document.querySelector('.nav-tab');
      if (!active || !first || active === first) return false;
      const tab = first.dataset.tab;
      if (window.showTab) { showTab(tab); return true; }
      first.click();
      return true;
    },
  ];

  // ── Leaving ────────────────────────────────────────────────────────────────
  // Two presses, with a hint in between. One accidental press should never end
  // a session.
  let armed = 0;
  function tryExit() {
    const now = (window.performance && performance.now) ? performance.now() : 0;
    if (armed && (now - armed) < 2500) {
      armed = 0;
      const C = window.Capacitor;
      try {
        const App = (C && C.registerPlugin) ? C.registerPlugin('App') : (C && C.Plugins && C.Plugins.App);
        if (App && App.exitApp) { App.exitApp(); return; }
      } catch (e) {}
      return;
    }
    armed = now;
    if (window.showToast) showToast('Press back again to leave Deckstack.', 2200);
  }

  // The whole thing, in one callable place — also what the tests drive.
  function dsBack() {
    for (const rung of RUNGS) {
      let handled = false;
      try { handled = rung(); } catch (e) { handled = false; }
      if (handled) { armed = 0; return rung.name || true; }
    }
    tryExit();
    return false;
  }
  window.dsBack = dsBack;

  // ── The hardware key ───────────────────────────────────────────────────────
  // registerPlugin() hands back a proxy whether or not the native half is
  // there, so this is wrapped: with the plugin missing, addListener does
  // nothing and Android's own default (close the app) stands — today's
  // behaviour, unchanged.
  try {
    const C = window.Capacitor;
    if (C && (typeof C.isNativePlatform !== 'function' || C.isNativePlatform())) {
      const App = C.registerPlugin ? C.registerPlugin('App') : (C.Plugins && C.Plugins.App);
      if (App && App.addListener) App.addListener('backButton', () => { dsBack(); });
    }
  } catch (e) {}
})();
