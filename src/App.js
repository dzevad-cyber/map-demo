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

  console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN);

  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        hello world
      </ReactMapGl>
    </div>
  );
}

export default App;
