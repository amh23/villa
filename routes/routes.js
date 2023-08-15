const express = require('express');
const router = express.Router();
const { createVilla,
        getAllVillas,
        getVillaById,
        updateVilla,
        deleteVilla,
  
    } = require('../controllers/villaController');

router.post('/post', createVilla);

router.get('/get', getAllVillas);

router.get('/get/:id', getVillaById);

router.patch('/update/:id', updateVilla);

router.post('/delete/:id', deleteVilla);
 
module.exports = router;