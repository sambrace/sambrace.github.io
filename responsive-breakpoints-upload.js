require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('img/dog.jpg', { 
    responsive_breakpoints: 
    { create_derived: true, 
        bytes_step: 20000, 
        min_width: 200, 
        max_width: 1000, 
        transformation: 
        { crop: 'fill', 
        aspect_ratio: '16:9', 
        gravity: 'auto' } 
    } 
},)
    .then(uploadResult => console.log(uploadResult))
    .catch(error => console.error(error));