// Initialize CodeMirror editor
const editor = CodeMirror.fromTextArea(document.getElementById('codeInput'), {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'dracula',
  lineWrapping: true
});

// Function to update the status indicator
function updateStatus(inGame) {
  const statusIndicator = document.getElementById('status');
  statusIndicator.style.backgroundColor = inGame ? 'green' : 'red';
}

// Function to execute code
function executeCode() {
  const code = editor.getValue();
  const username = document.getElementById('username').value;
  fetch('https://githubbingcode.github.io/h4x-ss/execute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code: code, username: username })
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error('Error:', error));
}

// Function to clear the code input
function clearCode() {
  editor.setValue('');
}

// Function to set character to R6
function setR6() {
  const username = document.getElementById('username').value;
  fetch('https://githubbingcode.github.io/h4x-ss/setR6', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username })
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error('Error:', error));
}

// Function to reset the character
function resetCharacter() {
  const username = document.getElementById('username').value;
  fetch('https://githubbingcode.github.io/h4x-ss/resetCharacter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username })
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error('Error:', error));
}

// Function to check user's game status
function checkUserStatus() {
  const username = document.getElementById('username').value;
  fetch(`https://api.roblox.com/users/${username}/onlinestatus`)
    .then(response => response.json())
    .then(data => updateStatus(data.InGame))
    .catch(error => console.error('Error:', error));
}

// Event listener for username input changes
document.getElementById('username').addEventListener('input', checkUserStatus);
