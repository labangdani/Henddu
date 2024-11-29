import React, { useEffect } from 'react';
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "@maptiler/geocoding-control/style.css";
import './SimpleMap.css';




export default function SimpleMap() {
    const tokyo = { lng: -4.024429, lat: 5.345317 };
    const zoom = 14;

    useEffect(() => {

        maptilersdk.config.apiKey = "WNJhulbQcVxyC54UMaMl";
        maptilersdk.config.primaryLanguage = maptilersdk.Language.FRENCH;

        const map = new maptilersdk.Map({
            container: 'map', // container's id or the HTML element to render the map
            style: maptilersdk.MapStyle.STREETS,
            center: [tokyo.lng, tokyo.lat],
            zoom: 12,
            fullscreenControl: "bottom-right",
            geolocateControl: "bottom-right",
            navigationControl: "bottom-right",
            minZoom: 1,
            maxZoom: 14
        });

        map.on('load', function () {
            // add a clustered GeoJSON source for a sample set of earthquakes
            map.addSource('earthquakes', {
                'type': 'geojson',
                'data': 'https://docs.maptiler.com/sdk-js/assets/earthquakes.geojson',
                cluster: true,
                clusterMaxZoom: 14, // Max zoom to cluster points on
                clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
            });
            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'earthquakes',
                filter: ['has', 'point_count'],
                paint: {
                    // Use step expressions (https://docs.maptiler.com/gl-style-specification/expressions/#step)
                    // with three steps to implement three types of circles:
                    //   * Blue, 20px circles when point count is less than 100
                    //   * Yellow, 30px circles when point count is between 100 and 750
                    //   * Pink, 40px circles when point count is greater than or equal to 750
                    'circle-color': [
                        'step',
                        ['get', 'point_count'],
                        '#51bbd6',
                        100,
                        '#f1f075',
                        750,
                        '#f28cb1'
                    ],
                    'circle-radius': [
                        'step',
                        ['get', 'point_count'],
                        20,
                        100,
                        30,
                        750,
                        40
                    ]
                }
            });

            map.addLayer({
                id: 'cluster-count',
                type: 'symbol',
                source: 'earthquakes',
                filter: ['has', 'point_count'],
                layout: {
                    'text-field': '{point_count_abbreviated}',
                    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                    'text-size': 12
                }
            });

            map.addLayer({
                id: 'unclustered-point',
                type: 'circle',
                source: 'earthquakes',
                filter: ['!', ['has', 'point_count']],
                paint: {
                    'circle-color': '#11b4da',
                    'circle-radius': 4,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#fff'
                }
            });

            // inspect a cluster on click
            map.on('click', 'clusters', async function (e) {
                const features = map.queryRenderedFeatures(e.point, {
                    layers: ['clusters']
                });
                const clusterId = features[0].properties.cluster_id;
                const zoom = await map.getSource('earthquakes').getClusterExpansionZoom(clusterId);
                map.easeTo({
                    center: features[0].geometry.coordinates,
                    zoom
                });
            });

            // When a click event occurs on a feature in
            // the unclustered-point layer, open a popup at
            // the location of the feature, with
            // description HTML from its properties.
            map.on('click', 'unclustered-point', function (e) {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var mag = e.features[0].properties.mag;
                var tsunami;

                if (e.features[0].properties.tsunami === 1) {
                    tsunami = 'yes';
                } else {
                    tsunami = 'no';
                }

                // Ensure that if the map is zoomed out such that
                // multiple copies of the feature are visible, the
                // popup appears over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new maptilersdk.Popup()
                    .setLngLat(coordinates)
                    .setHTML(
                        'magnitude: ' + mag + '<br>Was there a tsunami?: ' + tsunami
                    )
                    .addTo(map);
            });

            map.on('mouseenter', 'clusters', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'clusters', function () {
                map.getCanvas().style.cursor = '';
            });
            map.on('mouseenter', 'unclustered-point', function () {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'unclustered-point', function () {
                map.getCanvas().style.cursor = '';
            });
        });

        

        // // Create the marker element manually
        // const markerElement = document.createElement('div');
        // markerElement.className = 'w-5 h-5 rounded-full bg-red-400';
        // const el = document.createElement('div');
        // el.className = 'marker';

        // // Create and add the marker
        // new maptilersdk.Marker({
        //     color: "#FF0000",
        //     element: el,
        // })
        //     .setLngLat([-4.024429,  5.345317])
        //     .addTo(map);

    }, [tokyo.lng, tokyo.lat, zoom]);



    return (
        <div>
            <div className="map-wrap">
                <div id='map' />
            </div>
        </div>
    );
}