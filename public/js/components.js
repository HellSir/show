const app = Vue.createApp({})

app.component('component_header', {
    template: `
                <header>
                <!-- TOP HEADER -->
                <div id="top-header">
                    <div class="container">
                        <ul class="header-links pull-left">
                            <li><a href="#"><i class="fa fa-phone"></i>  +7-911-073-94-75</a></li>
                            <li><a href="#"><i class="fa fa-envelope-o"></i> niki_2023@mail.ru</a></li>
                            <li><a href="#"><i class="fa fa-map-marker"></i> Phuket</a></li>
                        </ul>
                        <ul class="header-links pull-right">
                            <li><a href="#"><i class="fa fa-dollar"></i> USD</a></li>
                            <li><a href="#"><i class="fa fa-user-o"></i> Личный кабинет</a></li>
                        </ul>
                    </div>
                </div>

                <div id="header">
                    <!-- container -->
                    <div class="container">
                        <!-- row -->
                        <div class="row">
                            <!-- LOGO -->
                            <div class="col-md-3">
                                <div class="header-logo">
                                    <a href="#" class="logo">
                                        <img src="./img/logo.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <!-- /LOGO -->

                            <!-- SEARCH BAR -->
                            <div class="col-md-6">
                                <div class="header-search">
                                    <form>
                                        <select class="input-select">
                                            <option value="0">Все категории</option>
                                            <option value="1">Категория 1</option>
                                            <option value="1">Категория 2</option>
                                        </select>
                                        <input class="input" placeholder="Введите товар">
                                            <button class="search-btn">Поиск</button>
                                    </form>
                                </div>
                            </div>
                            <!-- /SEARCH BAR -->

                            <!-- ACCOUNT -->
                            <div class="col-md-3 clearfix">
                                <div class="header-ctn">
                                    <!-- Wishlist -->
                                    <div>
                                        <a href="#">
                                            <i class="fa fa-heart-o"></i>
                                            <span>Любимое</span>
                                            <div class="qty">2</div>
                                        </a>
                                    </div>
                                    <!-- /Wishlist -->

                                    <!-- Cart -->
                                    <div class="dropdown">
                                        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                            <i class="fa fa-shopping-cart"></i>
                                            <span>Корзина</span>
                                            <div class="qty">3</div>
                                        </a>
                                        <div class="cart-dropdown">
                                            <div class="cart-list">
                                                <div class="product-widget">
                                                    <div class="product-img">
                                                        <img src="./img/product01.png" alt="">
                                                    </div>
                                                    <div class="product-body">
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
                                                    </div>
                                                    <button class="delete"><i class="fa fa-close"></i></button>
                                                </div>

                                                <div class="product-widget">
                                                    <div class="product-img">
                                                        <img src="./img/product02.png" alt="">
                                                    </div>
                                                    <div class="product-body">
                                                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                                        <h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
                                                    </div>
                                                    <button class="delete"><i class="fa fa-close"></i></button>
                                                </div>
                                            </div>
                                            <div class="cart-summary">
                                                <small>3 Предмета(ов) выбрано</small>
                                                <h5>Общая стоимость: $2940.00</h5>
                                            </div>
                                            <div class="cart-btns">
                                                <a href="#">Корзина</a>
                                                <a href="#">Оплата<i class="fa fa-arrow-circle-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Cart -->

                                    <!-- Menu Toogle -->
                                    <div class="menu-toggle">
                                        <a href="#">
                                            <i class="fa fa-bars"></i>
                                            <span>Меню</span>
                                        </a>
                                    </div>
                                    <!-- /Menu Toogle -->
                                </div>
                            </div>
                            <!-- /ACCOUNT -->
                        </div>
                        <!-- row -->
                    </div>
                    <!-- container -->
                </div>
                <!-- /MAIN HEADER -->
            </header>
            <!-- /HEADER -->
`
})

app.component('component_footer', {
    template: `<div>

                     <!-- FOOTER -->
            <footer id="footer">
                <!-- top footer -->
                <div class="section">
                    <!-- container -->
                    <div class="container">
                        <!-- row -->
                        <div class="row">
                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">О нас</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                                    <ul class="footer-links">
                                        <li><a href="#"><i class="fa fa-map-marker"></i>Phuket</a></li>
                                        <li><a href="#"><i class="fa fa-phone"></i> +7-911-073-94-75</a></li>
                                        <li><a href="#"><i class="fa fa-envelope-o"></i>niki_2023@mail.ru</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Категории</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">Горячие предложения</a></li>
                                        <li><a href="#">Ноутбуки</a></li>
                                        <li><a href="#">Смартфоны</a></li>
                                        <li><a href="#">Камеры</a></li>
                                        <li><a href="#">Акксесуары</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="clearfix visible-xs"></div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Информация</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">о нас</a></li>
                                        <li><a href="#">Наши контакты</a></li>
                                        <li><a href="#">Политика конфиденциальности</a></li>
                                        <li><a href="#">Заказы и возврат</a></li>
                                        <li><a href="#">Правила и Условия</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-3 col-xs-6">
                                <div class="footer">
                                    <h3 class="footer-title">Услуги</h3>
                                    <ul class="footer-links">
                                        <li><a href="#">Мой аккаунт</a></li>
                                        <li><a href="#">Корзина</a></li>
                                        <li><a href="#">Список желаний</a></li>
                                        <li><a href="#">Отследите мой заказ</a></li>
                                        <li><a href="#">Помощь</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /top footer -->

                <!-- bottom footer -->
                <div id="bottom-footer" class="section">
                    <div class="container">
                        <!-- row -->
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <ul class="footer-payments">
                                    <li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
                                    <li><a href="#"><i class="fa fa-credit-card"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
                                </ul>

                            </div>
                        </div>
                        <!-- /row -->
                    </div>
                    <!-- /container -->
                </div>
                <!-- /bottom footer -->
            </footer>
            <!-- /FOOTER -->

    </div>`
})


app.mount('#coms')
