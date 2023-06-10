// below line imports the Cloudinary library into code and assigns it to the variable cloudinary. This allows  to use Cloudinary's functionality in  application.

const cloudinary = require("cloudinary");
// below line calls the config method of the cloudinary object to configure  Cloudinary settings.
cloudinary.config({
  // below line sets the cloud_name parameter to the value 'drrxoeewj'. Replace 'drrxoeewj' with  actual Cloudinary cloud name.
  cloud_name: 'drrxoeewj',
  // below line sets the api_key parameter to the value '221396286524381'. Replace '221396286524381' with  actual Cloudinary API key.
  api_key: '221396286524381',
  // below sets the api_secret parameter to the value '_LB3HM6a0s3oI6Kvma4_MI9_Rj4'. Replace '_LB3HM6a0s3oI6Kvma4_MI9_Rj4' with  actual Cloudinary API secret.
  api_secret: '_LB3HM6aOs3oI6Kvma4_MI9_Rj4',
});
//  exports the cloudinary object, allowing to use it in other parts of  application by importing it using require.

module.exports = cloudinary;