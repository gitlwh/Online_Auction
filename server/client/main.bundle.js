webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-search></app-search>\n    </div>\n    <div class=\"col-md-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My Auction Website';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__ = __webpack_require__("./src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stars_stars_component__ = __webpack_require__("./src/app/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipe_filter_pipe__ = __webpack_require__("./src/app/pipe/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_web_socket_service__ = __webpack_require__("./src/app/shared/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routeConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'product/:productId', component: __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__["a" /* ProductDetailComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_7__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_8__stars_stars_component__["a" /* StarsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pipe_filter_pipe__["a" /* FilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot(routeConfig),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__shared_product_service__["b" /* ProductService */], __WEBPACK_IMPORTED_MODULE_16__shared_web_socket_service__["a" /* WebSocketService */],
                { provide: __WEBPACK_IMPORTED_MODULE_17__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_17__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/***/ (function(module, exports) {

module.exports = ".slide-image{\n  width: 100%;\n\n}\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p>Weiheng Li Angular4</p>\n        <span class=\"glyphicon glyphicon-star\"></span>\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <app-carousel></app-carousel>\n</div>\n<div class=\"row\">\n  <app-product class=\"col-12\"></app-product>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Online Auction</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Contact Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Website Maps</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterField, keyword) {
        if (!filterField || !keyword) {
            return list;
        }
        return list.filter(function (item) {
            var fieldValue = item[filterField];
            return fieldValue.indexOf(keyword) >= 0;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\n  <img src=\"http://placehold.it/820x230\" alt=\"\">\n  <div>\n    <h4 class=\"float-right\">{{product?.price}} $</h4>\n    <h4>{{product?.title}}</h4>\n    <p>{{product?.desc}}</p>\n  </div>\n  <div>\n    <p class=\"float-right\">{{comments?.length}}</p>\n    <p>\n      <app-stars [rating]=\"product?.rating\"></app-stars>\n    </p>\n  </div>\n\n</div>\n<div class=\"thumbnail\">\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" [class.active]=\"isWatched\" (click)=\"watchProduct()\">\n    {{isWatched?'Unfollow':'follow'}}\n  </button>\n  <label>Latest bid: {{currentBid | number:'.2-2'}}$</label>\n</div>\n<div class=\"card card-block bg-faded\">\n  <div>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"isCommentHidden=!isCommentHidden\">Make Comments</button>\n  </div>\n  <div [hidden] = \"isCommentHidden\">\n    <div>\n      <app-stars [(rating)]=\"newRating\" [readonly]=\"false\"></app-stars>\n    </div>\n    <div>\n      <textarea [(ngModel)] = \"newComment\"></textarea>\n    </div>\n    <div>\n      <button type=\"button\" class=\"btn\" (click)=\"addComment()\">Upload</button>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\"let comment of comments\">\n    <hr>\n    <div class=\"col-md-12\">\n      <app-stars [rating]=\"comment.rating\"></app-stars>\n      <span>{{comment.user}}</span>\n      <span class=\"float-right\">\n        {{comment.timestamp}}\n      </span>\n      <p></p>\n      <p>{{comment.content}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_socket_service__ = __webpack_require__("./src/app/shared/web-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(routeInfo, productService, wsService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.wsService = wsService;
        this.newRating = 5;
        this.newComment = '';
        this.isCommentHidden = true;
        this.isWatched = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var productId = this.routeInfo.snapshot.params['productId'];
        this.productService.getProduct(productId).subscribe(function (product) {
            _this.product = product;
            _this.currentBid = product.price;
        });
        this.productService.getCommentsForProductId(productId).subscribe(function (comments) { return _this.comments = comments; });
    };
    ProductDetailComponent.prototype.addComment = function () {
        var comment = new __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* Comment */](0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
        this.comments.unshift(comment);
        var sum = this.comments.reduce(function (sum, comment) { return sum + comment.rating; }, 0);
        this.product.rating = sum / this.comments.length;
        this.newComment = null;
        this.newRating = 5;
        this.isCommentHidden = true;
    };
    ProductDetailComponent.prototype.watchProduct = function () {
        var _this = this;
        if (this.subsription) {
            this.subsription.unsubscribe();
            this.isWatched = false;
            this.subsription = null;
        }
        else {
            this.isWatched = true;
            this.subsription = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id).
                subscribe(function (products) {
                var product = products.find(function (p) { return p.productId === _this.product.id; });
                _this.currentBid = product.bid;
            });
        }
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["b" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_web_socket_service__["a" /* WebSocketService */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--<div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Input the key words\" [formControl]=\"titleFilter\">\n      </div>\n    </div>\n  </div>-->\n  <div class=\"row\">\n      <div *ngFor=\"let product of products | async\" class=\"card col-lg-4 col-6\">\n        <img class=\"img-thumbnail img-fluid\" [src]=\"imgUrl\" alt=\"\">\n        <div class=\"caption\">\n          <h5 class=\"float-right\">{{product.price}}$</h5>\n          <h5><a [routerLink] = \"['/product', product.id]\">{{product.title}}</a></h5>\n          <p>{{product.desc}}</p>\n        </div>\n        <div>\n          <app-stars [rating]=\"product.rating\"></app-stars>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService) {
        this.productService = productService;
        /*  public keyword: string;
        
          public titleFilter: FormControl = new FormControl();*/
        this.imgUrl = 'http://via.placeholder.com/320x150';
        /* this.titleFilter.valueChanges
           .debounceTime(500)
           .subscribe(
           value => this.keyword = value
         );*/
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productService.getProducts();
        this.productService.searchEvent.subscribe(function (params) { return _this.products = _this.productService.search(params); });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["b" /* ProductService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formModel\" (ngSubmit)=\"onSearch()\" novalidate>\n  <div class=\"form-group\" [class.has-error]=\"formModel.hasError('minlength','title')\">\n    <label for=\"productTitle\">Name:</label>\n    <input formControlName=\"title\" type=\"text\" id=\"productTitle\" placeholder=\"Product Name\" class=\"form-control\">\n    <span class=\"text-danger\" [hidden]=\"!formModel.hasError('minlength','title')\">\n      Please input at least three words!\n    </span>\n  </div>\n  <div class=\"form-group\" [class.has-error]=\"formModel.hasError('positiveNumber','price')\">\n    <label for=\"productPrice\">Price:</label>\n    <input formControlName=\"price\" type=\"number\" id=\"productPrice\" placeholder=\"Product Price\" class=\"form-control\">\n    <span class=\"text-danger\" [hidden]=\"!formModel.hasError('positiveNumber','price')\">\n      Please input positive number!\n    </span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"productCategory\">Category:</label>\n    <select formControlName=\"category\" id=\"productCategory\" class=\"form-control\">\n      <option value=\"-1\">All types</option>\n      <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary btn-block\">Search</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("./src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService) {
        this.productService = productService;
        var fb = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]();
        this.formModel = fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)],
            price: [null, this.positiveNumberValidator],
            category: ['-1']
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.categories = this.productService.getAllCategories();
    };
    SearchComponent.prototype.positiveNumberValidator = function (control) {
        if (!control.value) {
            return null;
        }
        var price = parseInt(control.value);
        if (price > 0) {
            return null;
        }
        else {
            return { positiveNumber: true };
        }
    };
    SearchComponent.prototype.onSearch = function () {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
            this.productService.searchEvent.emit(this.formModel.value);
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_product_service__["b" /* ProductService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductService; });
/* unused harmony export ProductSearchParams */
/* unused harmony export Product */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.searchEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ProductService.prototype.getAllCategories = function () {
        return ['electronic', 'hardware', 'book'];
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get('/api/products');
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get('/api/products/' + id);
    };
    ProductService.prototype.getCommentsForProductId = function (id) {
        return this.http.get('/api/products/' + id + '/comments');
    };
    ProductService.prototype.search = function (params) {
        console.log(this.encodeParams(params));
        return this.http.get('/api/products', { params: this.encodeParams(params) });
    };
    ProductService.prototype.encodeParams = function (params) {
        var httpParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        Object.keys(params)
            .filter(function (key) { return params[key]; })
            .forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        });
        return httpParams;
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());

var ProductSearchParams = /** @class */ (function () {
    function ProductSearchParams(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
    return ProductSearchParams;
}());

var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());

var Comment = /** @class */ (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/shared/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.createObservableSocket = function (url, id) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
            _this.ws.onopen = function (event) { return _this.sendMessage({ productId: id }); };
            return function () { return _this.ws.close(); };
        }).map(function (message) { return JSON.parse(message); });
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.send(JSON.stringify(message));
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/stars/stars.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <i *ngFor=\"let star of stars; let i = index;\" [class.far]=\"star\" [class.fas]=\"!star\" class=\"fa-star\" (click)=\"clickStar(i)\"></i>\n  <span>{{rating|number:'1.0-2'}} stars</span>\n</p>\n"

/***/ }),

/***/ "./src/app/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.rating = 0;
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.readonly = true;
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    StarsComponent.prototype.ngOnChanges = function (changes) {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    };
    StarsComponent.prototype.clickStar = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "rating", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], StarsComponent.prototype, "ratingChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "readonly", void 0);
    StarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stars',
            template: __webpack_require__("./src/app/stars/stars.component.html"),
            styles: [__webpack_require__("./src/app/stars/stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map