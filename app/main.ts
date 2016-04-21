import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router';
import {provide} from "angular2/core";
import {App} from "./app/app.component";
import {HTTP_PROVIDERS} from "angular2/http";


bootstrap(App, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);

