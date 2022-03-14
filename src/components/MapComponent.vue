<template lang="html">
  <div ref="map-root" style="width: 100%; height: 100%;"></div>
</template>

<script>
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import {useGeographic} from 'ol/proj';
import 'ol/ol.css'

export default {
  name: 'MapComponent',
  data() {
    return {
      olMap: null,
    }
  },
  computed: {
    showJob() {
      return this.$root.$data.show;
    },
  },
  mounted() {
    useGeographic();
    var marker = new Feature({
      geometry: new Point(this.showJob),
      type: "company",
      name: "company"
    })
    var vectorLayer = new VectorLayer({
      title: "companies",
      source: new VectorSource({
        features: [marker],
      })
    })
    this.olMap = new Map({
      target: this.$refs['map-root'],
      layers: [
        new TileLayer({
          source: new OSM()
        }),
      ],
      view: new View({
        zoom: 2,
        center: this.showJob,
        constrainResolution: true
      }),
    })
    this.olMap.on("click", function(e) {
      console.log(e.coordinate);
    });
    this.olMap.addLayer(vectorLayer);
  },
}

</script>

<style scoped>
</style>
