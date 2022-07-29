import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

// Ref: https://www.pakainfo.com/get-location-name-from-latitude-and-longitude-javascript/

const GeoLocation = () => {
  const [location, setLocation] = useState({
    city: "",
    locality: "",
    country: "",
    error: "",
    latitude: "",
    longitude: "",
    status: "",
  });
  const baseURL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = async (position) => {
    const response = await axios.get(
      `${baseURL}?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}l&localityLanguage=en`
    );
    const { city, locality, countryName } = await response.data;
    setLocation({
      city,
      locality,
      country: countryName,
      error: "",
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      status: "success",
    });
  };

  const error = (err) => {
    toast.error(err.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        ...location,
        status: "Geolocation is not supported by your browser",
      });
    } else {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, []);

  return (
    <Container className="mt-2 text-center">
      <Card>
        <Card.Header>{location.country}</Card.Header>
        <Card.Body>
          <Card.Title>{location.city}</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">{location.locality}</Card.Footer>
      </Card>
    </Container>
  );
};

export default GeoLocation;
