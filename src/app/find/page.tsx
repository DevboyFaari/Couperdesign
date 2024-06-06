"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RestaurantSearch = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError("Error getting location: " + err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      fetchRestaurants();
    }
  }, [location]);

  const fetchRestaurants = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&limit=10&q=restaurant&lat=${location.lat}&lon=${location.lon}`
      );
      setRestaurants(response.data);
    } catch (err) {
      setError("Error fetching restaurants: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container bg-[#871F78] mx-auto p-4">
      <h1 className="text-white mb-4">Restaurants Near You</h1>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="relative h-[500px] w-full mb-4">
        {location.lat && location.lon && (
          <MapContainer
            center={[location.lat, location.lon]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.lat, location.lon]}>
              <Popup>Your location</Popup>
            </Marker>
            {restaurants.map((restaurant, index) => (
              <Marker key={index} position={[restaurant.lat, restaurant.lon]}>
                <Popup>
                  <strong>{restaurant.display_name}</strong>
                  <br />
                  Latitude: {restaurant.lat}
                  <br />
                  Longitude: {restaurant.lon}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index} className="mb-2 text-white">
            <strong>{restaurant.display_name}</strong>
            <p>Latitude: {restaurant.lat}</p>
            <p>Longitude: {restaurant.lon}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantSearch;
