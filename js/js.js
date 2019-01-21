(function() {

	var frmTest, cookieName, cookieValue, btRead, btWrite, btErase, result, documentCookie;

	function log(obj) {
		console.log(obj);
	}

	function initGlobals(event) {
		frmTest = document.forms['frmTest'];
		cookieName = frmTest.cookieName;
		cookieValue = frmTest.cookieValue;
		btRead = frmTest.btRead;
		btWrite = frmTest.btWrite;
		btErase = frmTest.btErase;
		result = document.getElementById('result');
		documentCookie = document.getElementById('documentCookie');
	}

	function initButtons(event) {
		btRead.addEventListener('click', btRead_Click);
		btWrite.addEventListener('click', btWrite_Click);
		btErase.addEventListener('click', btErase_Click);
	}

	function showDocumentCookie() {
		documentCookie.innerHTML = document.cookie ? document.cookie : '<i>empty</i>';
	}

	function showResult(str) {
		if (str === CookieIsGood.SUCCESS) {
			result.innerHTML = '<i>success</i>';
		} else if (str === CookieIsGood.NOT_FOUND) {
			result.innerHTML = '<i>cookie not found</i>';
		} else if (str) {
			result.innerHTML = str;
		} else {
			result.innerHTML = '<i>empty</i>';
		}
	}

	function btRead_Click(event) {
		var name = cookieName.value;
		var value = CookieIsGood.get(name);
		showResult(value);
		showDocumentCookie();
	}

	function btWrite_Click(event) {
		var name = cookieName.value;
		var value = cookieValue.value;
		var result = CookieIsGood.set(name, value);
		showResult(result);
		showDocumentCookie();
	}

	function btErase_Click(event) {
		var name = cookieName.value;
		var result = CookieIsGood.del(name);
		showResult(result);
		showDocumentCookie();
	}

	function init (event) {
		initGlobals(event);
		initButtons(event);
	}

	function window_Load(event) {
		init(event);
	}

	window.addEventListener('load', window_Load);

})();
