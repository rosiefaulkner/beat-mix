// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
//const presetHandler = () => {};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;


// A function named presetHandler. This function will be called from within your server to get an existing preset or create/update a preset.

// presetHandler takes up to three arguments. The first argument is a string representing the request type: 'GET' or 'PUT'. The second argument is the array index of the presets array. For 'PUT' requests, a third argument, newPresetArray will also be passed in, representing the new drum preset array to save at that index.

// If presetHandler is called a method that is not 'GET' or 'PUT', it should return an array with 400 as the first element, meaning that it was a Bad Request.

const presentHandler = (requestType, presetsIndex, newPresetArray) => {
    index = true;
    newArray = [];
    
    if (!index){
        return newArray.push(404);
    }else if(index){
        return newArray.push(200);
    }

    if (requestType !== 'GET' ||  requestType !== 'PUT'){
        return newArray.push(400);
    }

    if(index && requestType == 'GET'){
        return newArray.push(newPresetArray);
    }else if(index && requestType == 'PUT'){
        return newArray.splice(1, 0, newPresetArray);
    }

}

// If the index was valid, presetHandler should also return a second element in the array. for 'GET' requests, that element should be the preset array at that array index. For 'PUT' requests, it should save the newPresetArray to that index and then also return it as the second element.



