class Error {
    render() {
        const html = `
        <div class="error-message"><h3>НЕТ ДОСТУПА!</h3><p>Попробуйте зайти позже</p></div>
        `
        
        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();