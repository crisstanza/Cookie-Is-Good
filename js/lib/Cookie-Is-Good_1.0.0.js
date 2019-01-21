var CookieIsGood = {};

(function() {

	CookieIsGood.SUCCESS = 0;
	CookieIsGood.NOT_FOUND = -1;

	CookieIsGood.del = function(cookieName, path) {
		var result = CookieIsGood.get(cookieName, path);
		if (result === CookieIsGood.NOT_FOUND) {
			return result;
		} else {
			return CookieIsGood.set(cookieName, '', path, new Date(0));
		}
	};

	CookieIsGood.get = function(cookieName) {
		var cookieString = document.cookie;
		var cookies = cookieString.split(/\s*;\s*/);
		var cookiesLength = cookies.length;
		for (var i = 0; i < cookiesLength; i++) {
			var cookie = cookies[i];
			var cookieNameValue = cookie.split(/\s*=\s*/);
			if (cookieNameValue[0] == cookieName) {
				return decodeURIComponent(cookieNameValue[1]);
			}
		}
		return CookieIsGood.NOT_FOUND;
	};

	CookieIsGood.set = function(cookieName, cookieValue, path, expirationInDays) {
		if (expirationInDays) {
			var expiration = new Date();
			expiration.setTime(expiration.getTime() + expirationInDays*24*60*60*1000);
		}
		document.cookie = cookieName + '=' + encodeURIComponent(cookieValue) + (expirationInDays ? '; expires=' + expiration.toUTCString() : '') + '; path=' + (path ? path : '');
		return CookieIsGood.SUCCESS;
	};

})();
