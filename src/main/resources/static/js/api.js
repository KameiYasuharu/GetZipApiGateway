async function getZip() {
	const status = document.getElementById('status');

	const basePath = window.location.pathname.substring(0, window.location.pathname.indexOf('/', 1)) || '';
	try {
		window.location.href = `${basePath}/ApiGateway`;

		status.textContent = 'ZIPダウンロードが完了しました。';
	} catch (error) {
		status.textContent = 'ZIPダウンロード失敗: ' + error.message;
	}

}

