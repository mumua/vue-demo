<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>

import esriload from 'esri-loader'
export default{
  name: 'IndexView',
  data () {
    return {
      map: {'loaded': ''}
    }
  },
  methods: {
    createMap: function () {
      // esriload.dojoRequire(['esri/map', 'dojo/domReady!'], (Map) => {
      //   let map = new Map('map', {
      //     center: [-118, 34.5],
      //     zoom: 8,
      //     logo: false,
      //     basemap: 'top'
      //   })
      // })
      const options = {
        url: 'https://js.arcgis.com/3.25/'
      };
      esriload.loadModules(['esri/map'], options)
        .then(([Map]) => {
          // create map with the given options at a DOM node w/ id 'mapNode'
          let map = new Map('map', {
            center: [108, 34.5],
            zoom: 4,
            basemap: 'dark-gray'
          });
        })
    }
  },
  mounted: function () {
    if (!esriload.isLoaded) {
      esriload.bootstrap((err) => {
        if (err) {
          console.error(err);
        } else {
          this.createMap();
        }
      }, {
        url: 'https://js.arcgis.com/3.20/'
      })
    } else {
      this.createMap();
    }
  }
}
</script>
<style lang="less" scoped>
@import url('https://js.arcgis.com/3.15/dijit/themes/tundra/tundra.css');
@import url('https://js.arcgis.com/3.20/esri/css/esri.css');
#map {
  min-height: 480px;
}
</style>
