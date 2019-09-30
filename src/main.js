import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
import 'amfe-flexible';
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);

import { Button } from 'vant';

Vue.use(Button);

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

import { Search } from 'vant';

Vue.use(Search);

import { NavBar } from 'vant';

Vue.use(NavBar);

import { AddressEdit } from 'vant';

Vue.use(AddressEdit);

import { Area } from 'vant';

Vue.use(Area);

import { Popup } from 'vant';

Vue.use(Popup);
import { Sticky } from 'vant';

Vue.use(Sticky);

import { Divider } from 'vant';

Vue.use(Divider);

import { Panel } from 'vant';

Vue.use(Panel);

import { Swipe, SwipeItem } from 'vant';


Vue.use(Swipe).use(SwipeItem);

import { Lazyload } from 'vant';

import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);

import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);

import { List } from 'vant';

Vue.use(List);
import { Toast } from 'vant';

Vue.use(Toast);

import { Skeleton } from 'vant';


Vue.use(Skeleton);
// options 为可选参数，无则不传
Vue.use(Lazyload);

import { AddressList } from 'vant';

Vue.use(AddressList);

import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);

import { Icon } from 'vant';

Vue.use(Icon);

import { Image } from 'vant';

Vue.use(Image);

import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);

import { Tag } from 'vant';

Vue.use(Tag);

import { Field } from 'vant';

Vue.use(Field);
import { PasswordInput, NumberKeyboard } from 'vant';

Vue.use(PasswordInput).use(NumberKeyboard);
import { Notify } from 'vant';

//高德地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);




Vue.use(Notify);
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {

  //下一个
  next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
