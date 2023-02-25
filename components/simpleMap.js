'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import { set } from 'date-fns';

function App() {
  const [map, setMap] = useState();
  const mapElement = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [873820.033, 6105640.629],
        zoom: 17,
      }),
    });
  }, []);

  return (
    <section>
      <div
        ref={mapElement}
        className="w-84 flex h-72 flex-row items-center justify-center gap-x-5 bg-red-500/25"
      />
    </section>
  );
}

export default App;
