(function() {
  var API_URL = document.getElementById('ac-canvas').dataset.api;
  var canvas = document.getElementById('ac-canvas');
  var input = document.getElementById('ac-input');
  var btn = document.getElementById('ac-btn');
  var statusEl = document.getElementById('ac-status');
  var countEl = document.getElementById('ac-count');

  var STOP_WORDS = new Set([
    'a','an','the','and','or','but','in','on','at','to','for','of','with',
    'by','from','is','it','this','that','are','was','were','be','been',
    'being','have','has','had','do','does','did','will','would','could',
    'should','may','might','can','i','me','my','we','our','you','your',
    'they','them','their','he','she','his','her','its','not','no','so',
    'if','about','how','what','which','who','when','where','why','all',
    'each','every','both','few','more','most','other','some','such','than',
    'too','very','just','also','as','into','like','through','after','before',
    'think','really','much','many','well','because','there','things','people'
  ]);

  function isDark() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function getColors() {
    return isDark()
      ? ['#79c0ff','#bc8cff','#7ee787','#f0b860','#ff9bce','#a5d6ff','#d2a8ff']
      : ['#4a90d9','#7c5cbf','#2da562','#c88a1e','#c74476','#3b82c4','#9466cc'];
  }

  function processWords(texts) {
    var freq = {};
    texts.forEach(function(text) {
      text.split(/,/).forEach(function(phrase) {
        var words = phrase.toLowerCase().trim()
          .replace(/[^a-z0-9\s\-]/g, ' ')
          .split(/\s+/)
          .filter(function(w) { return w.length > 2 && !STOP_WORDS.has(w); });
        if (words.length >= 2 && words.length <= 3) {
          var joined = words.join(' ');
          freq[joined] = (freq[joined] || 0) + 1;
        }
        words.forEach(function(w) { freq[w] = (freq[w] || 0) + 1; });
      });
    });
    return Object.entries(freq)
      .sort(function(a, b) { return b[1] - a[1]; })
      .slice(0, 80)
      .map(function(e) { return [e[0], e[1]]; });
  }

  function renderCloud(words) {
    try { WordCloud(canvas, { list: [] }); } catch(e) {}

    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!words.length) {
      ctx.fillStyle = isDark() ? '#8b949e' : '#656d76';
      ctx.font = '500 16px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Be the first to share your concern!', canvas.width / 2, canvas.height / 2);
      return;
    }

    var maxCount = Math.max.apply(null, words.map(function(w) { return w[1]; }));
    var colors = getColors();

    setTimeout(function() {
      WordCloud(canvas, {
        list: words,
        gridSize: Math.round(8 * (canvas.width / 600)),
        weightFactor: function(size) {
          var scale = canvas.width / 600;
          return Math.max(16, (size / maxCount) * 56 * scale);
        },
        fontFamily: 'Inter, -apple-system, sans-serif',
        fontWeight: '700',
        color: function() { return colors[Math.floor(Math.random() * colors.length)]; },
        rotateRatio: 0.2,
        rotationSteps: 2,
        backgroundColor: 'transparent',
        shuffle: true,
        drawOutOfBound: false
      });
    }, 50);
  }

  function resizeCanvas() {
    var wrap = canvas.parentElement;
    canvas.width = Math.max(300, wrap.clientWidth - 40);
    canvas.height = Math.max(250, Math.min(380, window.innerHeight * 0.35));
  }

  var cachedData = null;

  function jsonp(params, callback) {
    var cbName = '_wc_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    window[cbName] = function(data) {
      delete window[cbName];
      callback(null, data);
    };
    var s = document.createElement('script');
    s.src = API_URL + '?' + params + '&callback=' + cbName;
    s.onerror = function() {
      delete window[cbName];
      s.remove();
      callback('error');
    };
    s.onload = function() { s.remove(); };
    document.head.appendChild(s);
  }

  function handleData(data) {
    cachedData = data;
    countEl.textContent = data.length;
    resizeCanvas();
    renderCloud(processWords(data.map(function(d) { return d.text; })));
  }

  function loadCloud() {
    resizeCanvas();
    if (cachedData !== null) {
      handleData(cachedData);
      return;
    }
    if (!API_URL) { renderCloud([]); return; }
    jsonp('', function(err, data) {
      if (err) { renderCloud([]); return; }
      handleData(data);
    });
  }

  window.submitConcern = function() {
    var text = input.value.trim();
    if (!text || !API_URL) return;

    btn.disabled = true;
    btn.textContent = 'Submitting...';

    jsonp('submit=' + encodeURIComponent(text), function(err, data) {
      btn.disabled = false;
      btn.textContent = 'Submit';

      if (err) {
        statusEl.textContent = 'Something went wrong. Please try again.';
        return;
      }

      input.value = '';
      statusEl.textContent = 'Thanks for sharing!';
      setTimeout(function() { statusEl.textContent = ''; }, 3000);
      handleData(data);
    });
  };

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      window.submitConcern();
    }
  });

  window.addEventListener('resize', function() {
    clearTimeout(window._wcResize);
    window._wcResize = setTimeout(loadCloud, 250);
  });

  new MutationObserver(function() {
    loadCloud();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  loadCloud();
})();
