const villaService = require('../services/VillaService');

exports.createVilla = async(req, res) => {
    try{
        const villa = await villaService.createVilla(req.body);
        res.json({ data: villa, status : "success"});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.getAllVillas = async (req, res) => {
    try{
        const villas = await villaService.getAllVillas();
        res.json({ data: villas, status: "success"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

exports.getVillaById = async (req, res) => {
    try{
        const villa = await villaService.getVillaById(req.params.id);
        res.json({ data: villa,  status: "success"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};

exports.updateVilla = async (req, res) => {
    try{
        const villa = await villaService.updateVilla(req.params.id, req.body);
        res.json({ data: villa, status: "success" });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};  

exports.deleteVilla = async (req, res) => {
    try{
        const villa = await villaService.deleteVilla(req.params.id);
        res.json({ data: villa, status: "success"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};