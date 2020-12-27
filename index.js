function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('https://api.jsonbin.io/b/5fe8b4d0d151a57b8938bdf6')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handlerClear();
        render();
    })
    .catch(error => {
        spinnerPage.handlerClear();
        errorPage.render();
    })

