window.ajaxDataAsync = function (get, params = '') {
    return new Promise(function (resolve, reject) {
        var object = '';
        var xhr = new XMLHttpRequest();

        // если во время выполнения запроса отправили еще запрос, то прерываем предыдущий

        // для формы поиска сообщений
        if ($('#messagesSearchInput').length > 0) {
            $('#messagesSearchInput').on('keyup', function (e) {
                xhr.abort();
            });
        }

        xhr.open("POST", apiUrl + "/" + apiVer + "/" + get, true);
        xhr.withCredentials = true;
        var str = new FormData();
        if (params !== '') {
            $.each(params, function (index, val) {
                str.append(index, val);
            });
        }
        xhr.setRequestHeader('token', token);
        xhr.onreadystatechange = function (e) {
            if (e.target.readyState == 4) { // по завершению обработки запроса к серверу
                if (e.target.status == 0) {
                    object = {connection: true};
                    resolve(object);
                }
                if (e.target.status == 200 || e.target.status == 400) { // если запрос выполнен успешно
                    try {
                        object = JSON.parse(e.target.response);
                        if (object.error) {
                            /*Sentry.configureScope(scope => scope.setTransactionName(get));
                            Sentry.captureException(JSON.stringify(object));*/
                        }
                        // if (object.response.subjects[0].message.id && get === 'chat.getList') {
                        //     console.log(object.response.subjects[0].message.id);
                        // }
                        resolve(object);
                    } catch (error) {
                        console.log('error', error);
                        /*Sentry.captureException(e.target.response);*/
                        /*console.log('Ошибка!!! Запрос - ', get);
                        console.log(e.target.response);*/
                    }
                }
            }
        }
        xhr.send(str); // отправка на сервер
    });
}

$('head').append('<link type="text/css" rel="stylesheet" href="/css/style.css?' + ver + '">');
/*$('head').append('<link id="favicon" rel="shortcut icon" type="image/png" href="/images/favicon.png?' + ver + '" src="/images/favicon.png?' + ver + '">');*/

document.write('<script src="/js/core.js?' + ver + '" type="text/javascript"></script>');