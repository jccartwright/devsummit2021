import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import Extent from "@arcgis/core/geometry/Extent";
import webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";
import HelloWorld from "./HelloWorld/HelloWorld";
import Recenter from "./Recenter/Recenter";
import "./MapPanel.css";

function MapPanel() {
  const mapDiv = useRef(null);
  // const drawExtentTool = useRef(null);
  // const clearExtentTool = useRef(null);

  useEffect(() => {
    console.log("inside useEffect");

    // wait until DOM node has been constructed
    if (mapDiv.current) {
      console.log("inside mapDiv.current");

      // mapDiv.current.dispatchEvent(new Event("testme"));

      const map = new ArcGISMap({
        basemap: "gray-vector",
      });

      const view = new MapView({
        map,
        container: mapDiv.current,
        extent: {
          spatialReference: {
            wkid: 102100,
          },
          xmax: -13581772,
          xmin: -13584170,
          ymax: 4436367,
          ymin: 4435053,
        },
      });

    view.when(function() {
        const recenter = new Recenter({
          view: view,
          initialCenter: [-100.33, 43.69]
        });
        view.ui.add(recenter, "top-right");
    });
    
      const greetingsWidget = new HelloWorld({
        eventName: "DevSummit",
        eventYear: "2021",
        emphasized: false,
        container: document.createElement("div")
    });
    view.ui.add(greetingsWidget, "bottom-right");


   

      view.on(["pointer-down", "pointer-move"], function (evt) {
        showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
      });


      function showCoordinates(point) {
        const coords = `Lat/Lon ${point.latitude.toFixed(3)} ${point.longitude.toFixed(3)}`;
        console.log(coords);
      }
    } else {
      console.log("mapDiv not yet available");
    }
  }, []);
  return (
    <div className="MapPanel" ref={mapDiv}>
    </div>
  );
}

export default MapPanel;
