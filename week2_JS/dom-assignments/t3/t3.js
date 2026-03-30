const target = document.getElementById('target');

const userAgent = navigator.userAgent;
let browser = 'Unknown browser';
let os = 'Unknown OS';

// Browser detection
if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
  const version = userAgent.match(/Chrome\/(\d+)/);
  browser = `Google Chrome, ${version ? version[1] : 'unknown version'}`;
} else if (userAgent.includes('Firefox')) {
  const version = userAgent.match(/Firefox\/(\d+)/);
  browser = `Mozilla Firefox, ${version ? version[1] : 'unknown version'}`;
} else if (userAgent.includes('Edg')) {
  const version = userAgent.match(/Edg\/(\d+)/);
  browser = `Microsoft Edge, ${version ? version[1] : 'unknown version'}`;
} else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
  const version = userAgent.match(/Version\/(\d+)/);
  browser = `Safari, ${version ? version[1] : 'unknown version'}`;
}

// OS detection
if (userAgent.includes('Windows')) {
  os = 'Windows';
} else if (userAgent.includes('Mac OS')) {
  os = 'macOS';
} else if (userAgent.includes('Linux')) {
  os = 'Linux';
} else if (userAgent.includes('Android')) {
  os = 'Android';
} else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
  os = 'iOS';
}

const screenSize = `${screen.width} x ${screen.height}`;
const availableSize = `${screen.availWidth} x ${screen.availHeight}`;

const now = new Date();

const formattedDate = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const formattedTime = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>Browser: ${browser}</p>
  <p>Operating system: ${os}</p>
  <p>Screen width and height: ${screenSize}</p>
  <p>Available screen space: ${availableSize}</p>
  <p>Date: ${formattedDate}</p>
  <p>Time: ${formattedTime}</p>
`;
