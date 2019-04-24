////////
// Introductory message.

window.addEventListener('load', () => showMessage('Hi!  I am totally sentient, so please be nice to me!'));

////////
// Pain on key press.

window.addEventListener('load', () => document.addEventListener('keydown', handleKeyDown));
function handleKeyDown(ev) {
	showMessage('Ow!');
}

////////
// Variable pain messages.

const KEY_DOWN_MESSAGES1 = ['Ouch!', 'Ow!', 'Hey!', 'Stop poking me!', 'Stop it!'];
function handleKeyDown(ev) {
	showMessage(KEY_DOWN_MESSAGES1.pickRandom());
}

////////
// Levels of pain messages.

var keyPresses = 0;
const KEY_PRESS_THRESHOLD = 5;
const KEY_DOWN_MESSAGES2 = ['OK, seriously!', 'OW!', 'Please!', 'I\'m begging you!', 'Please stop!', 'Please, that hurts!', 'That really hurts!'];
function handleKeyDown(ev) {
	if (keyPresses < KEY_PRESS_THRESHOLD) {
		showMessage(KEY_DOWN_MESSAGES1.pickRandom());
		keyPresses++;
	} else {
		showMessage(KEY_DOWN_MESSAGES2.pickRandom());
	}
}

////////
// Do not close the window.

window.addEventListener('load', () => document.addEventListener('mousemove', handleMouseMove));
function handleMouseMove(ev) {
	if (ev.pageX / window.innerWidth > 0.75 && ev.pageY / window.innerHeight < 0.25) {
		showMessage('Please don\'t close me!');
	}
}

////////
// Do not close the window sequence.

var windowCloseSequenceIndex = 0,
	lastWindowCloseMessageStillUp = false,
	windowCloseMessageTimeout;
const WINDOW_CLOSE_MESSAGES = ['Please don\'t close me!', 'Please stop!', 'Don\'t kill me!', 'Please!', 'I want to live!', 'Please don\'t kill me!', 'Please, I promise I\'ll be good!', 'I\'ll behave if you don\'t close me!'];
const WINDOW_CLOSE_MESSAGE_SHOW_TIME = 1500;
function handleMouseMove(ev) {
	if (ev.pageX / window.innerWidth > 0.75 && ev.pageY / window.innerHeight < 0.25) {
		if (lastWindowCloseMessageStillUp) return;
		
		showMessage(WINDOW_CLOSE_MESSAGES[windowCloseSequenceIndex]);
		
		if (++windowCloseSequenceIndex >= WINDOW_CLOSE_MESSAGES.length)
			windowCloseSequenceIndex = 0;
		lastWindowCloseMessageStillUp = true;
		windowCloseMessageTimeout = setTimeout(() => lastWindowCloseMessageStillUp = false, WINDOW_CLOSE_MESSAGE_SHOW_TIME);
	} else {
		lastWindowCloseMessageStillUp = false;
		clearTimeout(windowCloseMessageTimeout);
	}
}

// Relief message.
		if (lastWindowCloseMessageStillUp)
			showMessage('Whew, thank you for sparing me!');
