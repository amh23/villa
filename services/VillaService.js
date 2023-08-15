const VillaModel = require('../models/villa');

const villas = require('../villas.json');

exports.initDataFilled = async() => {
    const count =  await VillaModel.countDocuments();
    if(count === 0){
        for(let villa of villas){
            await VillaModel.create(villa);
        }
        console.log('Data successfully loaded!!');
    }
    
}
 
exports.createVilla = async (villa) => {
    return await VillaModel.create(villa);
};

exports.getAllVillas = async () => {
    return await VillaModel.find();
};

exports.getVillaById = async (id) => {
    return await VillaModel.findById(id);
};

exports.updateVilla = async (id, villa) => {
    return await VillaModel.findByIdAndUpdate(id, villa);
};

exports.deleteVilla = async (id) => {
    return await VillaModel.findByIdAndDelete(id);
};