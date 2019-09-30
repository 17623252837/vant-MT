import VueAMap from 'vue-amap';

//配置
const arr = VueAMap.initAMapApiLoader({
  key: 'acbe045af3802c1764f65d4ef8e0afa4',
  plugin: ['AMap.Autocomplete',
           'AMap.PlaceSearch',
           'AMap.Scale',
           'AMap.OverView',
           'AMap.ToolBar',
           'AMap.MapType',
           'AMap.PolyEditor',
           'AMap.CircleEditor'],
  v: '1.4.4'
});

export default function gteArr() {

}
