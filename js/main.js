// Keyboard layout definitions
const keyboardLayouts = {
  mac: [
    { text: '`', shift: '~' },
    { text: '1', shift: '!' },
    { text: '2', shift: '@' },
    { text: '3', shift: '#' },
    { text: '4', shift: '$' },
    { text: '5', shift: '%' },
    { text: '6', shift: '^' },
    { text: '7', shift: '&' },
    { text: '8', shift: '*' },
    { text: '9', shift: '(' },
    { text: '0', shift: ')' },
    { text: '-', shift: '_' },
    { text: '=', shift: '+' },
    { text: 'delete', class: 'special r', id: 'delete', width: 96 },
    { text: 'tab', class: 'special l', id: 'tab', width: 96 },
    { text: 'Q' }, { text: 'W' }, { text: 'E' }, { text: 'R' }, { text: 'T' },
    { text: 'Y' }, { text: 'U' }, { text: 'I' }, { text: 'O' }, { text: 'P' },
    { text: '[', shift: '{' },
    { text: ']', shift: '}' },
    { text: '\\', shift: '|' },
    { text: 'caps lock', class: 'special l', id: 'caps-lock', width: 114 },
    { text: 'A' }, { text: 'S' }, { text: 'D' }, { text: 'F' }, { text: 'G' },
    { text: 'H' }, { text: 'J' }, { text: 'K' }, { text: 'L' },
    { text: ';', shift: ':' },
    { text: "'", shift: '"' },
    { text: 'return', shift: 'enter', class: 'special r', id: 'enter', width: 112 },
    { text: 'shift', class: 'special shift l', width: 154 },
    { text: 'Z' }, { text: 'X' }, { text: 'C', pressed: true }, { text: 'V' }, { text: 'B' },
    { text: 'N' }, { text: 'M' },
    { text: ',', shift: '<' },
    { text: '.', shift: '>' },
    { text: '/', shift: '?' },
    { text: 'shift', class: 'special shift r', width: 155 },
    { text: 'fn', class: 'special tall l' },
    { text: 'control', class: 'special tall less-padding l' },
    { text: 'option', shift: 'alt', class: 'special tall less-padding l' },
    { text: 'command', shift: '⌘', class: 'special tall command r pressed', width: 71 },
    { text: '', class: 'special tall', id: 'space', width: 379 },
    { text: 'command', shift: '⌘', class: 'special tall command l', width: 71 },
    { text: 'option', shift: 'alt', class: 'special tall less-padding r' },
    { text: '↑', class: 'arrow up' },
    { text: '←', class: 'arrow' },
    { text: '↓', class: 'arrow down' },
    { text: '→', class: 'arrow' }
  ],
  windows: [
    { text: '`', shift: '~' },
    { text: '1', shift: '!' },
    { text: '2', shift: '@' },
    { text: '3', shift: '#' },
    { text: '4', shift: '$' },
    { text: '5', shift: '%' },
    { text: '6', shift: '^' },
    { text: '7', shift: '&' },
    { text: '8', shift: '*' },
    { text: '9', shift: '(' },
    { text: '0', shift: ')' },
    { text: '-', shift: '_' },
    { text: '=', shift: '+' },
    { text: 'backspace', class: 'special r', id: 'backspace', width: 96 },
    { text: 'tab', class: 'special l', id: 'tab', width: 96 },
    { text: 'Q' }, { text: 'W' }, { text: 'E' }, { text: 'R' }, { text: 'T' },
    { text: 'Y' }, { text: 'U' }, { text: 'I' }, { text: 'O' }, { text: 'P' },
    { text: '[', shift: '{' },
    { text: ']', shift: '}' },
    { text: '\\', shift: '|' },
    { text: 'caps lock', class: 'special l', id: 'caps-lock', width: 114 },
    { text: 'A' }, { text: 'S' }, { text: 'D' }, { text: 'F' }, { text: 'G' },
    { text: 'H' }, { text: 'J' }, { text: 'K' }, { text: 'L' },
    { text: ';', shift: ':' },
    { text: "'", shift: '"' },
    { text: 'enter', class: 'special r', id: 'enter', width: 112 },
    { text: 'shift', class: 'special shift l', width: 154 },
    { text: 'Z' }, { text: 'X' }, { text: 'C', pressed: true }, { text: 'V' }, { text: 'B' },
    { text: 'N' }, { text: 'M' },
    { text: ',', shift: '<' },
    { text: '.', shift: '>' },
    { text: '/', shift: '?' },
    { text: 'shift', class: 'special shift r', width: 155 },
    { text: 'ctrl', class: 'special tall less-padding l' },
    { text: 'win', class: 'special tall less-padding l' },
    { text: 'alt', class: 'special tall less-padding l' },
    { text: 'ctrl', class: 'special tall command r pressed', width: 71 },
    { text: '', class: 'special tall', id: 'space', width: 379 },
    { text: 'ctrl', class: 'special tall command l', width: 71 },
    { text: 'alt', class: 'special tall less-padding r' },
    { text: 'win', class: 'special tall less-padding r' },
    { text: 'del', class: 'special tall less-padding r' },
    { text: '↑', class: 'arrow up' },
    { text: '←', class: 'arrow' },
    { text: '↓', class: 'arrow down' },
    { text: '→', class: 'arrow' }
  ]
};

let currentLayout = 'mac';

function generateKeyboard(layout) {
  const keyboard = document.getElementById('keyboard');
  keyboard.innerHTML = '';
  
  keyboardLayouts[layout].forEach(key => {
    const li = document.createElement('li');
    
    if (key.class) {
      li.className = key.class;
    }
    if (key.id) {
      li.id = key.id;
    }
    if (key.width) {
      li.style.width = key.width + 'px';
    }
    if (key.pressed) {
      li.classList.add('pressed');
    }
    
    if (key.shift && key.text) {
      li.innerHTML = `<span>${key.shift}</span>${key.text}`;
    } else {
      li.textContent = key.text;
    }
    
    keyboard.appendChild(li);
  });
  
  // Re-bind click events to new elements
  bindKeyboardEvents();
}

function bindKeyboardEvents() {
  const keys = document.querySelectorAll('#keyboard li');
  keys.forEach(key => {
    key.addEventListener('click', (e) => {
      const btn = e.target;
      if (btn.classList.contains('pressed')) {
        btn.classList.remove('pressed');
      } else {
        btn.classList.add('pressed');
      }
      console.log('clicked on li', e);
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Generate initial keyboard
  generateKeyboard(currentLayout);
  
  // Shortcut info input handler
  document.getElementById('shortcut-info').addEventListener('input', function () {
    document.getElementById('shortcut-title').textContent = this.value;
  });

  // Keyboard layout toggle
  document.getElementById('keyboard-toggle').addEventListener('click', function() {
    currentLayout = currentLayout === 'mac' ? 'windows' : 'mac';
    generateKeyboard(currentLayout);
    
    // Update toggle button text
    const toggleText = currentLayout === 'mac' ? 'Switch to Windows' : 'Switch to Mac';
    this.textContent = toggleText;
    
    // Update shortcut example text
    const exampleText = currentLayout === 'mac' ? 'Press Cmd + C to copy anything' : 'Press Ctrl + C to copy anything';
    if (document.getElementById('shortcut-info').value === '') {
      document.getElementById('shortcut-title').textContent = exampleText;
    }
  });

  // Hide image preview initially
  document.getElementById('img-preview-div').style.display = 'none';
  
  // Save image button handler
  document.getElementById('save-img-btn').addEventListener('click', function () {
    const e = document.getElementById('main');
    const e_width = e.offsetWidth;
    const e_height = e.offsetHeight;
    const e_x_offset = window.scrollX + e.getBoundingClientRect().left;
    const e_y_offset = window.scrollY + e.getBoundingClientRect().top;

    html2canvas(e, {
      dpi: 192,
      scale: 1,
      backgroundColor: null,
    }).then((canvas) => {
      // Show image preview
      document.getElementById('img-preview-div').style.display = 'block';
      const base64image = canvas.toDataURL('image/png');

      const imgDiv = document.createElement('img');
      imgDiv.src = base64image;
      imgDiv.width = 640;
      
      const previewContainer = document.getElementById('img-out-preview');
      previewContainer.innerHTML = '';
      previewContainer.appendChild(imgDiv);

      imgDiv.onload = () => {
        const sizeLabel = document.getElementById('gen-img-size-label');
        if (sizeLabel) {
          sizeLabel.textContent = 'image dimensions = ' + imgDiv.width + 'px, ' + imgDiv.height + 'px';
        }
      };

      setTimeout(() => {
        window.scrollBy(0, 500);
      }, 250);
    });
  });
});
