const express = require('express');
const router = express.Router();

const voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

// Add a car to the array
router.post('/cars', (req, res) => {
    const newCar = req.body;
    voitures.push(newCar);
    res.json(newCar);
});

// List all cars
router.get('/cars', (req, res) => {
    res.json(voitures);
});

// Get a car by ID
router.get('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const car = voitures.find(car => car.id === id);
    if (car) {
    res.json(car);
    } else {
    res.status(404).send('Car not found');
    }
});

// Update a car by ID
router.put('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCar = req.body;
    const index = voitures.findIndex(car => car.id === id);
    if (index !== -1) {
    voitures[index] = updatedCar;
    res.json(updatedCar);
    } else {
    res.status(404).send('Car not found');
    }
});

// Delete a car by ID
router.delete('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(car => car.id === id);
    if (index !== -1) {
    const deletedCar = voitures.splice(index, 1)[0];
    res.json(deletedCar);
    } else {
    res.status(404).send('Car not found');
    }
});

module.exports = router;
