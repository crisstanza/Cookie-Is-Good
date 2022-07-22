if (!io) var io = {};
if (!io.github) io.github = {};
if (!io.github.crisstanza) io.github.crisstanza = {};
if (!io.github.crisstanza.CookieIsGood) io.github.crisstanza.CookieIsGood = {};

(function() {

	io.github.crisstanza.CookieIsGood.SUCCESS = 0;
	io.github.crisstanza.CookieIsGood.NOT_FOUND = -1;

	io.github.crisstanza.CookieIsGood.del = function(cookieName, path) {
		let result = io.github.crisstanza.CookieIsGood.get(cookieName, path);
		if (result === io.github.crisstanza.CookieIsGood.NOT_FOUND) {
			return result;
		} else {
			return io.github.crisstanza.CookieIsGood.set(cookieName, '', path, new Date(0));
		}
	};

	io.github.crisstanza.CookieIsGood.get = function(cookieName) {
		let cookieString = document.cookie;
		let cookies = cookieString.split(/\s*;\s*/);
		let cookiesLength = cookies.length;
		for (let i = 0; i < cookiesLength; i++) {
			let cookie = cookies[i];
			let cookieNameValue = cookie.split(/\s*=\s*/);
			if (cookieNameValue[0] == cookieName) {
				let cookieValue  = decodeURIComponent(cookieNameValue[1]);
				cookieValue = cookieValue.replace(new RegExp('%28', 'g'), '(');
				cookieValue = cookieValue.replace(new RegExp('%29', 'g'), ')');
				return cookieValue;
			}
		}
		return io.github.crisstanza.CookieIsGood.NOT_FOUND;
	};

	io.github.crisstanza.CookieIsGood.set = function(cookieName, cookieValueOrJson, path, expirationInDays) {
		let expiration;
		if (expirationInDays) {
			expiration = new Date();
			expiration.setTime(expiration.getTime() + expirationInDays*24*60*60*1000);
		}
		let cookieValue;
		if (typeof cookieValueOrJson == 'object') {
			cookieValue = JSON.stringify(cookieValueOrJson);
		} else if (typeof cookieValueOrJson != 'string') {
			cookieValue = new String(cookieValueOrJson);
		} else {
			cookieValue = cookieValueOrJson;
		}
		cookieValue = cookieValue.replace(new RegExp('\\(', 'g'), '%28');
		cookieValue = cookieValue.replace(new RegExp('\\)', 'g'), '%29');
		cookieValue = encodeURIComponent(cookieValue);
		document.cookie = cookieName + '=' + cookieValue + (expirationInDays ? ';expires=' + expiration.toUTCString() : '') + (path ? ';path=' + path : '') + ';SameSite=Strict';
		return io.github.crisstanza.CookieIsGood.SUCCESS;
	};

})();
