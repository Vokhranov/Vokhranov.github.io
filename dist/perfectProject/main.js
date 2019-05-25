(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_tracker_main_tracker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-tracker/main-tracker.component */ "./src/app/main-tracker/main-tracker.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");





var routes = [
    { path: '', component: _main_tracker_main_tracker_component__WEBPACK_IMPORTED_MODULE_3__["MainTrackerComponent"] },
    { path: 'reports', component: _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_4__["UserInfoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"base\">    \r\n    <app-header></app-header>\r\n    <div class=\"wrapper\">\r\n        <router-outlet></router-outlet>\r\n        <!-- <app-main-tracker></app-main-tracker> -->\r\n        <!-- <app-user-info></app-user-info> -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 1fr, 1fr;\n  grid-row-gap: 35px;\n  justify-items: center; }\n\napp-header {\n  grid-row: 1;\n  grid-column-start: 1;\n  grid-column-end: -1;\n  width: 100%; }\n\n.wrapper {\n  grid-row: 2;\n  grid-column-start: 2;\n  grid-column-end: -2;\n  grid-row-gap: 40px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXHdlYlByb2dyYW1taW5nXFxwZXJmZWN0UHJvamVjdFxccGVyZmVjdFByb2plY3Qvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2Uge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwgMWZyO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAzNXB4O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hcHAtaGVhZGVyIHtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IC0yO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'perfectProject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_tracker_main_tracker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-tracker/main-tracker.component */ "./src/app/main-tracker/main-tracker.component.ts");
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-info/user-info.component */ "./src/app/user-info/user-info.component.ts");
/* harmony import */ var _main_tracker_duration_duration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-tracker/duration/duration.component */ "./src/app/main-tracker/duration/duration.component.ts");
/* harmony import */ var _main_tracker_clock_clock_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-tracker/clock/clock.component */ "./src/app/main-tracker/clock/clock.component.ts");
/* harmony import */ var _main_tracker_choose_activity_choose_activity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-tracker/choose-activity/choose-activity.component */ "./src/app/main-tracker/choose-activity/choose-activity.component.ts");
/* harmony import */ var _user_info_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-info/tabs/tabs.component */ "./src/app/user-info/tabs/tabs.component.ts");
/* harmony import */ var _user_info_tabs_activity_activity_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-info/tabs/activity/activity.component */ "./src/app/user-info/tabs/activity/activity.component.ts");
/* harmony import */ var _user_info_tabs_chart_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-info/tabs/chart/chart.component */ "./src/app/user-info/tabs/chart/chart.component.ts");
/* harmony import */ var _main_tracker_choose_activity_prev_activity_prev_activity_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-tracker/choose-activity/prev-activity/prev-activity.component */ "./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _main_tracker_main_tracker_component__WEBPACK_IMPORTED_MODULE_8__["MainTrackerComponent"],
                _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_9__["UserInfoComponent"],
                _main_tracker_duration_duration_component__WEBPACK_IMPORTED_MODULE_10__["DurationComponent"],
                _main_tracker_clock_clock_component__WEBPACK_IMPORTED_MODULE_11__["ClockComponent"],
                _main_tracker_choose_activity_choose_activity_component__WEBPACK_IMPORTED_MODULE_12__["ChooseActivityComponent"],
                _user_info_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
                _user_info_tabs_activity_activity_component__WEBPACK_IMPORTED_MODULE_14__["ActivityComponent"],
                _user_info_tabs_chart_chart_component__WEBPACK_IMPORTED_MODULE_15__["ChartComponent"],
                _main_tracker_choose_activity_prev_activity_prev_activity_component__WEBPACK_IMPORTED_MODULE_16__["PrevActivityComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"logo\">\n        <a routerLink=\"/\"><img src=\"./assets/img/icons/logo.png\" alt=\"Logo\"></a>\n    </div>\n    <nav class=\"menu\">\n        <div><a routerLink=\"/\" class=\"active\">Tracking</a></div>\n        <div><a routerLink=\"/reports\">Reports</a></div>\n    </nav>\n    <div class=\"additional\">\n        <a href=\"#\"><img src=\"./assets/img/icons/auth.png\" alt=\"user\"></a>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  padding: 5px;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  justify-items: center;\n  align-items: center; }\n  header .logo {\n    margin: 0px 20px;\n    height: 40px;\n    grid-column: 1;\n    justify-self: left; }\n  header .logo img {\n      height: 100%; }\n  header .menu {\n    grid-column: 2;\n    display: flex;\n    justify-content: center; }\n  header .menu a {\n      text-decoration: none;\n      color: #878787;\n      margin: 10px 40px;\n      font-weight: bold;\n      font-size: 20px;\n      padding: 10px; }\n  header .menu .active {\n      color: #6e6e6e;\n      border-bottom: 2px solid orange; }\n  header .additional {\n    grid-column: 3;\n    justify-self: right;\n    height: 40px; }\n  header .additional a {\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n  header .additional img {\n      height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7RUFMdkI7SUFRUSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQVgxQjtNQWNZLFlBQVksRUFBQTtFQWR4QjtJQW1CUSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QixFQUFBO0VBckIvQjtNQXdCWSxxQkFBcUI7TUFDckIsY0FBeUI7TUFDekIsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsYUFBYSxFQUFBO0VBN0J6QjtNQWlDWSxjQUF5QjtNQUN6QiwrQkFBK0IsRUFBQTtFQWxDM0M7SUF1Q1EsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUF6Q3BCO01DREkseUJBQXlCO01BQ3pCLHNCQUFzQjtNQUN0QixxQkFBcUI7TUFDckIsaUJBQWlCLEVBQUE7RURGckI7TUFnRFksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogNXB4OyAgIFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBncmlkLWNvbHVtbjogMTsgICAgICAgIFxyXG4gICAgICAgIGp1c3RpZnktc2VsZjogbGVmdDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVudSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMzUsIDEzNSwgMTM1KTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIG9yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZGl0aW9uYWwge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAzO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbm9TZWxsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1peGluIG5vU2VsbGVjdGlvbiB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gc2hhZG93VGV4dCB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC41cHggMC41cHggMC41cHggcmdiKDY2LCA2NiwgNjYpO1xyXG59XHJcblxyXG4leWVsbG93U2VsZWN0aW9uIHtcclxuICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjQ1KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMCwgMC40NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiV0ZXh0RWxlbWVudHNNYXJnaW4wIHtcclxuICAgIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-tracker/choose-activity/choose-activity.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main-tracker/choose-activity/choose-activity.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"interaction\">\r\n  <label for=\"activity\">Start activity:</label>\r\n  <div class=\"input\">\r\n    <input type=\"text\" id=\"activity\" autocomplete=\"off\"/>\r\n    <div class=\"arrow\" \r\n        [style.display] = \"allowPreviousActivity ? 'block' : 'none'\"\r\n        (click)=\"showPrevious()\">\r\n      <img [class.rotate]=\"showPreviousDialog\" src=\"./assets/img/icons/rightArrow.png\" alt=\"choose\">\r\n    </div>\r\n    <app-prev-activity\r\n      [show] = \"showPreviousDialog\"\r\n      [closable] = \"true\"\r\n      [theme] = \"'dark'\"\r\n      [title] = \"'Previous activities'\"\r\n      \r\n      \r\n      (needClose) = \"closePrevious()\"\r\n      >\r\n    </app-prev-activity>\r\n  </div>\r\n  <button class=\"awesomeBtn\">Start</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/main-tracker/choose-activity/choose-activity.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main-tracker/choose-activity/choose-activity.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".interaction {\n  display: grid;\n  margin: 20px;\n  grid-template-columns: auto;\n  grid-template-rows: 1fr, 1fr, 1fr;\n  grid-row-gap: 10px;\n  justify-items: center;\n  align-items: center; }\n\nlabel {\n  text-shadow: 0.5px 0.5px 0.5px #424242;\n  font-size: 28px;\n  font-weight: bold; }\n\n.input {\n  display: flex;\n  position: relative; }\n\n.input .arrow {\n    margin: 0px 10px;\n    height: 40px;\n    width: auto;\n    cursor: pointer; }\n\n.input .arrow img {\n      transition-duration: 200ms;\n      height: 100%; }\n\n.input .disabled {\n    display: none; }\n\n.input .rotate {\n    /* IE 9 */\n    -webkit-transform: rotate(180deg);\n    /* Chrome, Safari, Opera */\n    transform: rotate(180deg); }\n\ninput, input:focus {\n  text-shadow: 0.5px 0.5px 0.5px #424242;\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid white;\n  outline: none;\n  text-align: center;\n  width: 550px;\n  color: white;\n  font-size: 26px;\n  font-style: italic; }\n\n.awesomeBtn {\n  margin: 20px 15px;\n  font-size: 22px;\n  text-shadow: 0.5px 0.5px 0.5px #424242;\n  color: white;\n  font-weight: bold;\n  width: 180px;\n  height: 55px;\n  background: rgba(0, 0, 0, 0.4);\n  border: 1.5px solid rgba(255, 255, 255, 0.75);\n  border-radius: 10px; }\n\nbutton:hover {\n  background: rgba(0, 0, 0, 0.6);\n  border-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi10cmFja2VyL2Nob29zZS1hY3Rpdml0eS9FOlxcd2ViUHJvZ3JhbW1pbmdcXHBlcmZlY3RQcm9qZWN0XFxwZXJmZWN0UHJvamVjdC9zcmNcXGFwcFxcbWFpbi10cmFja2VyXFxjaG9vc2UtYWN0aXZpdHlcXGNob29zZS1hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi10cmFja2VyL2Nob29zZS1hY3Rpdml0eS9FOlxcd2ViUHJvZ3JhbW1pbmdcXHBlcmZlY3RQcm9qZWN0XFxwZXJmZWN0UHJvamVjdC9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VDSkksc0NBQThDO0VETTlDLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRnRCO0lBS1EsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZSxFQUFBOztBQVJ2QjtNQVdZLDBCQUEwQjtNQUMxQixZQUFZLEVBQUE7O0FBWnhCO0lBaUJRLGFBQWEsRUFBQTs7QUFqQnJCO0lBcUJ1QyxTQUFBO0lBQy9CLGlDQUFpQztJQUFFLDBCQUFBO0lBQ25DLHlCQUF5QixFQUFBOztBQUlqQztFQ3JDSSxzQ0FBOEM7RUR1QzlDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQ0FBOEM7RUFDOUMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLDhCQUEyQjtFQUMzQiw2Q0FBMEM7RUFDMUMsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksOEJBQTJCO0VBQzNCLG1CQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi10cmFja2VyL2Nob29zZS1hY3Rpdml0eS9jaG9vc2UtYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmludGVyYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwgMWZyLCAxZnI7XHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgQGluY2x1ZGUgc2hhZG93VGV4dDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuYXJyb3cge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc2FibGVkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3RhdGUge1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyAvKiBJRSA5ICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dCwgaW5wdXQ6Zm9jdXMge1xyXG4gICAgQGluY2x1ZGUgc2hhZG93VGV4dDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1NTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmF3ZXNvbWVCdG4ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC41cHggMC41cHggMC41cHggcmdiKDY2LCA2NiwgNjYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpXHJcbn0iLCJAbWl4aW4gbm9TZWxsZWN0aW9uIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3dUZXh0IHtcclxuICAgIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCAwLjVweCByZ2IoNjYsIDY2LCA2Nik7XHJcbn1cclxuXHJcbiV5ZWxsb3dTZWxlY3Rpb24ge1xyXG4gICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA6Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjQ1KTtcclxuICAgIH1cclxufVxyXG5cclxuJXRleHRFbGVtZW50c01hcmdpbjAge1xyXG4gICAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-tracker/choose-activity/choose-activity.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main-tracker/choose-activity/choose-activity.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChooseActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseActivityComponent", function() { return ChooseActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prev_activity_prev_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prev-activity/prev-activity.component */ "./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.ts");



var ChooseActivityComponent = /** @class */ (function () {
    function ChooseActivityComponent() {
        this.allowPreviousActivity = true;
        this.showPreviousDialog = false;
    }
    ChooseActivityComponent.prototype.ngOnInit = function () {
    };
    ChooseActivityComponent.prototype.showPrevious = function () {
        // switch flag
        this.showPreviousDialog = (this.showPreviousDialog) ? false : true;
        if (this.showPreviousDialog) {
            this.prevActivityComponent.entered();
        }
        else {
            this.prevActivityComponent.left();
        }
    };
    ChooseActivityComponent.prototype.closePrevious = function () {
        this.prevActivityComponent.beforeClose();
        this.showPreviousDialog = false;
        this.prevActivityComponent.afterClose();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_prev_activity_prev_activity_component__WEBPACK_IMPORTED_MODULE_2__["PrevActivityComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _prev_activity_prev_activity_component__WEBPACK_IMPORTED_MODULE_2__["PrevActivityComponent"])
    ], ChooseActivityComponent.prototype, "prevActivityComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ChooseActivityComponent.prototype, "allowPreviousActivity", void 0);
    ChooseActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-activity',
            template: __webpack_require__(/*! ./choose-activity.component.html */ "./src/app/main-tracker/choose-activity/choose-activity.component.html"),
            styles: [__webpack_require__(/*! ./choose-activity.component.scss */ "./src/app/main-tracker/choose-activity/choose-activity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChooseActivityComponent);
    return ChooseActivityComponent;
}());



/***/ }),

/***/ "./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sellectActivity\"\r\n    [class.closable] = \"closable\"\r\n    [style.display] = \"show ? 'block' : 'none'\"\r\n    [ngClass] = \"setTheme()\">\r\n  <div class=\"head\">\r\n    <h4>{{title}}</h4>\r\n    <img class=\"closeImg\" (click)=\"doClose()\" src=\"./assets/img/icons/close.png\" alt=\"close\">\r\n  </div>\r\n  <mat-action-list>\r\n    <button mat-list-item (click)=\"sellect()\" *ngFor=\"let activity of activities\">\r\n      {{activity}}\r\n    </button>\r\n  </mat-action-list>\r\n</div>"

/***/ }),

/***/ "./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sellectActivity {\n  border-radius: 15px;\n  font-size: 16px;\n  min-width: 250px;\n  max-width: 300px;\n  padding: 8px 0px 12px;\n  position: absolute;\n  left: 100%;\n  bottom: 0px; }\n  .sellectActivity .head {\n    border-bottom: 1px solid grey; }\n  .sellectActivity .head h4 {\n      text-align: center;\n      padding: 5px; }\n  .sellectActivity .head .closeImg {\n      display: none; }\n  .sellectActivity button {\n    font-style: italic; }\n  .sellectActivity button:hover {\n    background-color: rgba(150, 150, 150, 0.5); }\n  .closable .head {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 1fr, auto 1fr; }\n  .closable .head h4 {\n    grid-column: 2; }\n  .closable .head .closeImg {\n    display: block;\n    height: 10px;\n    width: auto;\n    margin: 8px;\n    justify-self: right;\n    cursor: pointer;\n    grid-column: 3; }\n  .light {\n  background-color: rgba(255, 255, 255, 0.9);\n  color: #323232; }\n  .dark {\n  background-color: rgba(20, 20, 20, 0.9);\n  color: #c8c8c8; }\n  .transparent {\n  background-color: rgba(20, 20, 20, 0.5);\n  color: white;\n  border: 1px solid white; }\n  .hide {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi10cmFja2VyL2Nob29zZS1hY3Rpdml0eS9wcmV2LWFjdGl2aXR5L0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcYXBwXFxtYWluLXRyYWNrZXJcXGNob29zZS1hY3Rpdml0eVxccHJldi1hY3Rpdml0eVxccHJldi1hY3Rpdml0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7RUFSZjtJQVdRLDZCQUE2QixFQUFBO0VBWHJDO01BY1ksa0JBQWtCO01BQ2xCLFlBQVksRUFBQTtFQWZ4QjtNQW1CWSxhQUFhLEVBQUE7RUFuQnpCO0lBeUJRLGtCQUFrQixFQUFBO0VBekIxQjtJQTZCUSwwQ0FBMEMsRUFBQTtFQUtsRDtFQUdRLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsb0NBQW9DLEVBQUE7RUFMNUM7SUFRWSxjQUFjLEVBQUE7RUFSMUI7SUFZWSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFLMUI7RUFDSSwwQ0FBMEM7RUFDMUMsY0FBc0IsRUFBQTtFQUcxQjtFQUNJLHVDQUF1QztFQUN2QyxjQUF5QixFQUFBO0VBRzdCO0VBQ0ksdUNBQXVDO0VBQ3ZDLFlBQXlCO0VBQ3pCLHVCQUF1QixFQUFBO0VBRzNCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi10cmFja2VyL2Nob29zZS1hY3Rpdml0eS9wcmV2LWFjdGl2aXR5L3ByZXYtYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlbGxlY3RBY3Rpdml0eSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcblxyXG4gICAgLmhlYWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5OyAgICAgICAgXHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2VJbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSAgXHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY2xvc2FibGUge1xyXG5cclxuICAgIC5oZWFkIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciwgYXV0byAxZnI7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2VJbWcgeyBcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xyXG59XHJcblxyXG4uZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIDAuOSk7XHJcbiAgICBjb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAwLjUpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PrevActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevActivityComponent", function() { return PrevActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { disableDebugTools } from '@angular/platform-browser';
var Theme;
(function (Theme) {
    Theme["light"] = "light";
    Theme["dark"] = "dark";
    Theme["transparent"] = "transparent";
})(Theme || (Theme = {}));
var PrevActivityComponent = /** @class */ (function () {
    function PrevActivityComponent() {
        this.activities = ['my previous activity 1', 'my previous activity 2', 'my previous large text activity 3', 'my previous activity 4', 'my previous activity 5'];
        this.disabled = false;
        this.show = false;
        this.closable = false;
        this.theme = Theme.light;
        this.title = "Sellect option";
        this.needClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PrevActivityComponent.prototype.ngOnInit = function () {
        // debug
        console.log('ChooseActivity:', '\n\t\tShow: ', this.show, '\n\t\tClosable: ', this.closable, '\n\t\tTheme: ', this.theme, '\n\t\tTitle: ', this.title);
    };
    PrevActivityComponent.prototype.setTheme = function () {
        var resultClasses;
        switch (this.theme) {
            case Theme.dark: {
                resultClasses = {
                    light: false,
                    dark: true,
                    transparent: false
                };
                break;
            }
            case Theme.transparent: {
                resultClasses = {
                    light: false,
                    dark: false,
                    transparent: true
                };
                break;
            }
            default: {
                resultClasses = {
                    light: true,
                    dark: false,
                    transparent: false
                };
            }
        }
        return resultClasses;
    };
    PrevActivityComponent.prototype.doClose = function () {
        this.needClose.emit();
    };
    PrevActivityComponent.prototype.entered = function () {
        console.log("entered entered()");
    };
    PrevActivityComponent.prototype.left = function () {
        console.log("entered left()");
    };
    PrevActivityComponent.prototype.beforeClose = function () {
        console.log("entered beforeClose()");
    };
    PrevActivityComponent.prototype.afterClose = function () {
        console.log("entered afterClose()");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PrevActivityComponent.prototype, "show", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PrevActivityComponent.prototype, "closable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PrevActivityComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PrevActivityComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PrevActivityComponent.prototype, "needClose", void 0);
    PrevActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prev-activity',
            template: __webpack_require__(/*! ./prev-activity.component.html */ "./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.html"),
            styles: [__webpack_require__(/*! ./prev-activity.component.scss */ "./src/app/main-tracker/choose-activity/prev-activity/prev-activity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrevActivityComponent);
    return PrevActivityComponent;
}());



/***/ }),

/***/ "./src/app/main-tracker/clock/clock.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main-tracker/clock/clock.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clock\">\r\n  <h1>17:23</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/main-tracker/clock/clock.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main-tracker/clock/clock.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clock {\n  padding: 0px 85px;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0)); }\n\nh1 {\n  margin: 0px;\n  font-size: 200px;\n  text-align: center;\n  text-shadow: 4px 2px 2px #7A7A7A; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi10cmFja2VyL2Nsb2NrL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcYXBwXFxtYWluLXRyYWNrZXJcXGNsb2NrXFxjbG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFpQjtFQUNqQixvR0FBMkYsRUFBQTs7QUFHL0Y7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQ0FBZ0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4tdHJhY2tlci9jbG9jay9jbG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4uY2xvY2sge1xyXG4gICAgcGFkZGluZzogMHB4IDg1cHg7ICAgICAgICAgICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuNzUpLCByZ2JhKDAsMCwwLDApKTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCAycHggMnB4ICM3QTdBN0E7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-tracker/clock/clock.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main-tracker/clock/clock.component.ts ***!
  \*******************************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClockComponent = /** @class */ (function () {
    function ClockComponent() {
    }
    ClockComponent.prototype.ngOnInit = function () {
    };
    ClockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clock',
            template: __webpack_require__(/*! ./clock.component.html */ "./src/app/main-tracker/clock/clock.component.html"),
            styles: [__webpack_require__(/*! ./clock.component.scss */ "./src/app/main-tracker/clock/clock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClockComponent);
    return ClockComponent;
}());



/***/ }),

/***/ "./src/app/main-tracker/duration/duration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-tracker/duration/duration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"duration\">\r\n    <h3>Current activity duration: 5.3h</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/main-tracker/duration/duration.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main-tracker/duration/duration.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".duration {\n  margin: 20px; }\n\nh3 {\n  text-shadow: 0.5px 0.5px 0.5px #424242;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi10cmFja2VyL2R1cmF0aW9uL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcYXBwXFxtYWluLXRyYWNrZXJcXGR1cmF0aW9uXFxkdXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi10cmFja2VyL2R1cmF0aW9uL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VDRUksc0NBQThDO0VEQTlDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi10cmFja2VyL2R1cmF0aW9uL2R1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5kdXJhdGlvbiB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIEBpbmNsdWRlIHNoYWRvd1RleHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJAbWl4aW4gbm9TZWxsZWN0aW9uIHtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiBzaGFkb3dUZXh0IHtcclxuICAgIHRleHQtc2hhZG93OiAwLjVweCAwLjVweCAwLjVweCByZ2IoNjYsIDY2LCA2Nik7XHJcbn1cclxuXHJcbiV5ZWxsb3dTZWxlY3Rpb24ge1xyXG4gICAgOjpzZWxlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNDUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICA6Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjQ1KTtcclxuICAgIH1cclxufVxyXG5cclxuJXRleHRFbGVtZW50c01hcmdpbjAge1xyXG4gICAgcCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-tracker/duration/duration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-tracker/duration/duration.component.ts ***!
  \*************************************************************/
/*! exports provided: DurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationComponent", function() { return DurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DurationComponent = /** @class */ (function () {
    function DurationComponent() {
    }
    DurationComponent.prototype.ngOnInit = function () {
    };
    DurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-duration',
            template: __webpack_require__(/*! ./duration.component.html */ "./src/app/main-tracker/duration/duration.component.html"),
            styles: [__webpack_require__(/*! ./duration.component.scss */ "./src/app/main-tracker/duration/duration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DurationComponent);
    return DurationComponent;
}());



/***/ }),

/***/ "./src/app/main-tracker/main-tracker.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-tracker/main-tracker.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTracker\">\r\n    <app-duration></app-duration>\r\n    <app-clock></app-clock>\r\n    <app-choose-activity [allowPreviousActivity] = \"true\"></app-choose-activity>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-tracker/main-tracker.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main-tracker/main-tracker.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainTracker {\n  font-size: 30px;\n  color: white; }\n  .mainTracker div, .mainTracker form {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi10cmFja2VyL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcYXBwXFxtYWluLXRyYWNrZXJcXG1haW4tdHJhY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi10cmFja2VyL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFlO0VBQ2YsWUFBWSxFQUFBO0VBRmhCO0lDREkseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluLXRyYWNrZXIvbWFpbi10cmFja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5tYWluVHJhY2tlciB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGl2LCBmb3JtIHtcclxuICAgICAgICBAaW5jbHVkZSBub1NlbGxlY3Rpb247XHJcbiAgICB9XHJcbn1cclxuIiwiQG1peGluIG5vU2VsbGVjdGlvbiB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5AbWl4aW4gc2hhZG93VGV4dCB7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC41cHggMC41cHggMC41cHggcmdiKDY2LCA2NiwgNjYpO1xyXG59XHJcblxyXG4leWVsbG93U2VsZWN0aW9uIHtcclxuICAgIDo6c2VsZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjQ1KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgOjotbW96LXNlbGVjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMCwgMC40NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiV0ZXh0RWxlbWVudHNNYXJnaW4wIHtcclxuICAgIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-tracker/main-tracker.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-tracker/main-tracker.component.ts ***!
  \********************************************************/
/*! exports provided: MainTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTrackerComponent", function() { return MainTrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainTrackerComponent = /** @class */ (function () {
    function MainTrackerComponent() {
    }
    MainTrackerComponent.prototype.ngOnInit = function () {
    };
    MainTrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-tracker',
            template: __webpack_require__(/*! ./main-tracker.component.html */ "./src/app/main-tracker/main-tracker.component.html"),
            styles: [__webpack_require__(/*! ./main-tracker.component.scss */ "./src/app/main-tracker/main-tracker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainTrackerComponent);
    return MainTrackerComponent;
}());



/***/ }),

/***/ "./src/app/user-info/tabs/activity/activity.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user-info/tabs/activity/activity.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"activity\">\r\n    \r\n  <!--repeatable-->\r\n  <div class=\"task\">\r\n      <div class=\"duration\">\r\n          <p>5.4h</p>\r\n      </div>\r\n        <div class=\"title\">\r\n          <p>some kind of activity 1</p>\r\n      </div>\r\n  </div>\r\n  <!--repeatable-->\r\n  \r\n  <!--repeatable-->\r\n  <div class=\"task\">\r\n      <div class=\"duration\">\r\n          <p>3.0h</p>\r\n      </div>\r\n      <div class=\"title\">\r\n          <p>some kind of activity 2</p>\r\n      </div>\r\n  </div>\r\n  <!--repeatable-->\r\n\r\n  <!--repeatable-->\r\n  <div class=\"task\">\r\n      <div class=\"duration\">\r\n          <p>3.0h</p>\r\n      </div>\r\n      <div class=\"title\">\r\n          <p>some kind of activity 3</p>\r\n      </div>\r\n  </div>\r\n  <!--repeatable-->\r\n\r\n  <!--repeatable-->\r\n  <div class=\"task\">\r\n      <div class=\"duration\">\r\n          <p>3.0h</p>\r\n      </div>\r\n      <div class=\"title\">\r\n          <p>some kind of activity 4</p>\r\n      </div>\r\n  </div>\r\n      <!--repeatable-->\r\n\r\n  <!--repeatable-->\r\n  <div class=\"task\">\r\n      <div class=\"duration\">\r\n          <p>3.0h</p>\r\n      </div>\r\n      <div class=\"title\">\r\n          <p>some kind of activity 5</p>\r\n      </div>\r\n  </div>\r\n  <!--repeatable-->\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/user-info/tabs/activity/activity.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user-info/tabs/activity/activity.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity {\n  padding: 10px; }\n  .activity .task {\n    display: grid;\n    grid-template-columns: 60px 1fr;\n    grid-column-gap: 10px;\n    align-items: center;\n    justify-items: left;\n    margin: 5px 0px;\n    padding: 0px 10px;\n    background: rgba(100, 100, 100, 0.5); }\n  .activity .task div {\n      padding: 5px; }\n  .activity .task p {\n      font-weight: normal; }\n  .activity .task .duration {\n      grid-column: 1; }\n  .activity .task .title {\n      grid-column: 2;\n      justify-self: left;\n      font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbmZvL3RhYnMvYWN0aXZpdHkvRTpcXHdlYlByb2dyYW1taW5nXFxwZXJmZWN0UHJvamVjdFxccGVyZmVjdFByb2plY3Qvc3JjXFxhcHBcXHVzZXItaW5mb1xcdGFic1xcYWN0aXZpdHlcXGFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYSxFQUFBO0VBRGpCO0lBSVEsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFFckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUVuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9DQUFvQyxFQUFBO0VBYjVDO01BZ0JZLFlBQVksRUFBQTtFQWhCeEI7TUFvQlksbUJBQW1CLEVBQUE7RUFwQi9CO01Bd0JZLGNBQWMsRUFBQTtFQXhCMUI7TUE0QlksY0FBYztNQUNkLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby90YWJzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2aXR5IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICAgIC50YXNrIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxZnI7ICAgICAgICBcclxuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBsZWZ0O1xyXG5cclxuICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpO1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZHVyYXRpb24ge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogbGVmdDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user-info/tabs/activity/activity.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-info/tabs/activity/activity.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/user-info/tabs/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.scss */ "./src/app/user-info/tabs/activity/activity.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/user-info/tabs/chart/chart.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user-info/tabs/chart/chart.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart\">\r\n  <form class=\"select\">\r\n      <label for=\"selectGroup\">Group by:</label>\r\n      <select id=\"selectGroup\">\r\n          <option>day</option>\r\n          <option>week</option>\r\n          <option>month</option>                           \r\n      </select>\r\n  </form>\r\n  <div class=\"view\"><p>chart here</p></div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-info/tabs/chart/chart.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user-info/tabs/chart/chart.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart label {\n  font-size: 18px; }\n\n.chart form {\n  margin: 10px; }\n\n.chart .view {\n  background: rgba(100, 100, 100, 0.5);\n  height: 300px;\n  display: grid;\n  align-items: center;\n  justify-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbmZvL3RhYnMvY2hhcnQvRTpcXHdlYlByb2dyYW1taW5nXFxwZXJmZWN0UHJvamVjdFxccGVyZmVjdFByb2plY3Qvc3JjXFxhcHBcXHVzZXItaW5mb1xcdGFic1xcY2hhcnRcXGNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR1EsZUFBZSxFQUFBOztBQUh2QjtFQU9RLFlBQVksRUFBQTs7QUFQcEI7RUFXUSxvQ0FBb0M7RUFDcEMsYUFBYTtFQUViLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLWluZm8vdGFicy9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2hhcnQge1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlldyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpO1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgLy8gdGVtcG9yYXJ5OlxyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-info/tabs/chart/chart.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-info/tabs/chart/chart.component.ts ***!
  \*********************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/user-info/tabs/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/user-info/tabs/chart/chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/user-info/tabs/tabs.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/tabs/tabs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight disableRipple mat-align-tabs=\"center\">\r\n  <mat-tab label=\"Activity\"> \r\n    <app-activity></app-activity>\r\n  </mat-tab>\r\n  <mat-tab label=\"Chart\">\r\n    <app-chart></app-chart>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/user-info/tabs/tabs.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-info/tabs/tabs.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaW5mby90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-info/tabs/tabs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/tabs/tabs.component.ts ***!
  \**************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/user-info/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/user-info/tabs/tabs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/user-info/user-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userInfo\">\r\n    <div id=\"periodInterval\">\r\n        <form class=\"dateRange\">\r\n            <div class=\"fromBlk\">\r\n                <label for=\"dateFrom\">From:</label>\r\n                <input type=\"text\" id=\"dateFrom\"/>\r\n            </div>\r\n            <div class=\"toBlk\">\r\n                <label for=\"dateTo\">To:</label>\r\n                <input type=\"text\" id=\"dateTo\"/>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"general\">\r\n        <p id=\"hoursInRange\">Total activity in range: 123.5h</p>\r\n    </div>\r\n\r\n    <app-tabs></app-tabs>\r\n</div>"

/***/ }),

/***/ "./src/app/user-info/user-info.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-info/user-info.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userInfo {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  font-weight: bold;\n  border-radius: 15px;\n  padding: 15px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  grid-row-gap: 30px; }\n  .userInfo #periodInterval label {\n    font-size: 14px;\n    font-style: italic; }\n  .userInfo #periodInterval form {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n    align-items: center;\n    grid-column-gap: 120px; }\n  .userInfo #periodInterval form .fromBlk {\n      grid-column: 1;\n      justify-self: right; }\n  .userInfo #periodInterval form .toBlk {\n      grid-column: 2;\n      justify-self: left; }\n  .userInfo .general {\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    justify-content: center;\n    align-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pbmZvL0U6XFx3ZWJQcm9ncmFtbWluZ1xccGVyZmVjdFByb2plY3RcXHBlcmZlY3RQcm9qZWN0L3NyY1xcYXBwXFx1c2VyLWluZm9cXHVzZXItaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBRWIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsa0JBQWtCLEVBQUE7RUFWdEI7SUFlWSxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUFoQjlCO0lBb0JZLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0IsRUFBQTtFQXhCbEM7TUEyQmdCLGNBQWM7TUFDZCxtQkFBbUIsRUFBQTtFQTVCbkM7TUFnQ2dCLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQWpDbEM7SUF1Q1EsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VySW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIGdyaWQtcm93LWdhcDogMzBweDtcclxuXHJcbiAgICAjcGVyaW9kSW50ZXJ2YWwge1xyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMTIwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLmZyb21CbGsge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnRvQmxrIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ2VuZXJhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH0gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-info/user-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/app/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/app/user-info/user-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\webProgramming\perfectProject\perfectProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map