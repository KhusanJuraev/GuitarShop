
class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = ''
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '',
            sumCatalog = 0,
            i = 1;

        CATALOG.forEach(({id, name, price}) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr> 
                   <td class="shopping-element__count">${i++}</td>
                   <td class="shopping-element__name">${name}</td>
                   <td class="shopping-element__price">${price.toLocaleString()} UZS</td>
                </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
          <div class="shopping-container">
             <div class="shopping-container__close" onclick="shoppingPage.handleClear()">
                <i class="fas fa-times"></i>
             </div>
             <table>
                ${htmlCatalog}
                <tr> 
                   <td class="shopping-element__count">#</td>
                   <td class="shopping-element__name">Сумма:</td>
                   <td class="shopping-element__price">${sumCatalog.toLocaleString()} UZS</td>
                </tr>
             </table>
          </div>
        `
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();

