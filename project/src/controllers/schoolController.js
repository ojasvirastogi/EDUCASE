import db from "../config/db.js";

export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    
    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({
        success: false,
        message: "Latitude and Longitude must be numbers",
      });
    }

    await db.query(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );

    res.status(201).json({
      success: true,
      message: "School added successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; 

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

export const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res.status(400).json({
        success: false,
        message: "User latitude and longitude required",
      });
    }

    const [schools] = await db.query("SELECT * FROM schools");

    const sortedSchools = schools
      .map((school) => ({
        ...school,
        distance: getDistance(
        Number(latitude),
  Number(longitude),
  school.latitude,
  school.longitude
),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json({
      success: true,
      data: sortedSchools,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};