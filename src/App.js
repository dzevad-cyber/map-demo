import { useState } from 'react';

import ReactMapGl from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 5,
  });

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle='mapbox://styles/mapbox/satellite-v9'
        mapboxApiUrl='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js?access_token=pk.eyJ1IjoicGF0aWVudDAiLCJhIjoiY2tqNGRwcXRiMGp1YjJ6bzllN3pvbHFpNCJ9.il1cJ3czzp4n0r8CrXsinw'
      >
        hello world
      </ReactMapGl>
    </div>
  );
}

export default App;
