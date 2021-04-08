import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import Extent from "@arcgis/core/geometry/Extent";
import webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";
// import HelloWorld from "./HelloWorld/HelloWorld";
// import Recenter from "./Recenter/Recenter";
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
        // const recenter = new Recenter({
        //   view: view,
        //   initialCenter: [-100.33, 43.69]
        // });
        // view.ui.add(recenter, "top-right");

        // view.ui.add('drawExtentTool', "bottom-left");
        // drawExtentTool.current.addEventListener("click", function(e){
        //     console.log("drawExtentTool click", e);
        // });
        // view.ui.add('clearExtentTool', "bottom-left");
        // clearExtentTool.current.addEventListener("click", function(e){
        //     console.log("clear ExtentTool click", e);
        // });

        // console.log(drawExtentTool.current);
    });
    
    //   const greetingsWidget = new HelloWorld({
    //     firstName: "John",
    //     lastName: "Cartwright",
    //     emphasized: false,
    //     container: document.createElement("div")
    // });
    // view.ui.add(greetingsWidget, "bottom-right");


      // const popupTemplate = {
      //   // autocasts as new PopupTemplate()
      //   title: "station: {Station_Name}",
      //   content: [
      //     {
      //       // It is also possible to set the fieldInfos outside of the content
      //       // directly in the popupTemplate. If no fieldInfos is specifically set
      //       // in the content, it defaults to whatever may be set within the popupTemplate.
      //       type: "fields",
      //       fieldInfos: [
      //         {
      //           fieldName: "Fuel_Type_Code",
      //           label: "Fuel type",
      //         },
      //         {
      //           fieldName: "EV_Network",
      //           label: "EV network",
      //         },
      //         {
      //           fieldName: "EV_Connector_Types",
      //           label: "EV connection types",
      //         },
      //         {
      //           fieldName: "Station_Name",
      //           label: "Station Name",
      //         },
      //       ],
      //     },
      //   ],
      // };

      // const scale = 36112;
      // const layer1 = new FeatureLayer({
      //   url:
      //     "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",
      //   outFields: ["*"],
      //   // popupTemplate,
      //   renderer: new DictionaryRenderer({
      //     url:
      //       "https://jsapi.maps.arcgis.com/sharing/rest/content/items/30cfbf36efd64ccf92136201d9e852af",
      //     fieldMap: {
      //       fuel_type: "Fuel_Type_Code",
      //     },
      //     config: {
      //       show_label: "false",
      //     },
      //     visualVariables: [
      //       {
      //         type: "size",
      //         valueExpression: "$view.scale",
      //         stops: [
      //           { value: scale / 2, size: 20 },
      //           { value: scale * 2, size: 15 },
      //           { value: scale * 4, size: 10 },
      //           { value: scale * 8, size: 5 },
      //           { value: scale * 16, size: 2 },
      //           { value: scale * 32, size: 1 },
      //         ],
      //       },
      //     ],
      //   }),
      //   minScale: 0,
      //   maxScale: 10000,
      // });

      // const layer2 = new FeatureLayer({
      //   url:
      //     "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer",
      //   outFields: ["*"],
      //   popupTemplate,
      //   renderer: new DictionaryRenderer({
      //     url:
      //       "https://jsapi.maps.arcgis.com/sharing/rest/content/items/30cfbf36efd64ccf92136201d9e852af",
      //     fieldMap: {
      //       fuel_type: "Fuel_Type_Code",
      //       connector_types: "EV_Connector_Types",
      //       network: "EV_Network",
      //       name: "Station_Name",
      //     },
      //     config: {
      //       show_label: "true",
      //     },
      //   }),
      //   minScale: 10000,
      //   maxScale: 0,
      // });

      // map.addMany([layer1, layer2]);

      view.on(["pointer-down", "pointer-move"], function (evt) {
        // console.log(evt);
        // console.log(view.toMap({ x: evt.x, y: evt.y }));
        showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
      });

    //   view.ui.add("select-by-polygon", "top-left");
    //   const selectButton = document.getElementById("select-by-polygon");
    //   selectButton.addEventListener("click", function () {
    //     console.log("button click");
    //   });
    //   view.ui.add("coordinates-panel", "bottom-left");

      function showCoordinates(point) {
        const coords = `Lat/Lon ${point.latitude.toFixed(3)} ${point.longitude.toFixed(3)}`;
        // const coords = `Lat/Lon ${point.latitude.toFixed(3)} ${point.longitude.toFixed(3)} | Scale 1:${Math.round(this.view.scale * 1) / 1} | Zoom ${this.view.zoom}`;
        // console.log(coords);
        // setMapCoords(coords);
        // mapDiv.current.dispatchEvent(
        //   new CustomEvent("testme", { bubbles: true, detail: "mydata" })
        // );
        // document.getElementById('coordinates-panel').innerText = coords;
        // console.log()
      }
    } else {
      console.log("mapDiv not yet available");
    }
  }, []);
  return (
    <div className="MapPanel" ref={mapDiv}>
        {/* <div
            id="drawExtentTool"
            ref={drawExtentTool} className="esri-widget esri-widget--button esri-interactive esri-icon-sketch-rectangle"
            title="Draw the area of interest">    
        </div>
        <div id="clearExtentTool" ref={clearExtentTool} className="esri-widget esri-widget--button esri-interactive esri-icon-trash"
            title="Clear the area of interest">
        </div> */}
      {/* 
        <span class="esri-icon-locate"></span>
      </div>
      <div
        id="coordinates-panel"
        class="esri-widget esri-widget esri-interactive"
        title="current location"
      >
      testme
      </div> */}
    </div>
  );
}

export default MapPanel;
