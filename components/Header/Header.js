class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }
    render(count) {
        const htmlHeader = `
           <div class="header-container">
              <div class="header-logo">
                 <h3>GUITAR SHOP</h3>
              </div>
              <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage()">
                 <i class="fas fa-shopping-cart"></i> ${count}
              </div>
           </div>
        `;

        ROOT_HEADER.innerHTML = htmlHeader;
    }
}

const headerPage = new Header();