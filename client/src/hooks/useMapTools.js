import * as d3 from "d3";
import { useState, useEffect } from "react";

export const useMapTools = () => {
  // Store loaded map data in a state

  const [mapData, setMapData] = useState({
    data: {},
    loading: true,
  });

  // Load map data from a file
  useEffect(() => {
    d3.json("https://xihai01.github.io/friendly-journey/map_data.geojson").then(
      (data) => {
        setMapData((prevState) => {
            return {...prevState,data:data,loading: false,
            
        });
    }).catch((err) => {
        console.log("error occured with loading map", err)
    })

    // tootip creation
    d3.select("body")
        .append("div")
        .attr("id", "tootip")
        .attr("style", "position: absolute; opacity: 0;")
  }, []);

  return {mapData}
};
