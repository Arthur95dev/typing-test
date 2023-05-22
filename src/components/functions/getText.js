function getText(languange) {
    let url;
    if (languange === 'Русский') {
        url = 'https://fish-text.ru/get?number=2';
        return fetch(url).then(response => {
            if (response.ok) return response.json().then(obj => obj.text);
            
            return response.json().then(err => {
                const e = new Error('Ошибочка');
                e.data = err;
                throw e;
            })
        })
    } else if (languange === 'Английский') {
        url = 'https://baconipsum.com/api/?type=meat-and-filler';
        return fetch(url).then(response => {
            if (response.ok) return response.json().then(arr => arr[0]);
            
            return response.json().then(err => {
                const e = new Error('Ошибочка');
                e.data = err;
                throw e;
            })
        })
    }
}
export default getText;
