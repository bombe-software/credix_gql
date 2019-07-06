var fs = require('fs');
const mongoose = require('mongoose');

exports.send = function (req, res) {
    console.log(req.query);

    /*
    var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

    var visualRecognition = new VisualRecognitionV3({
      version: '2018-03-19',
      iam_apikey: 'vUt4mo3qJw0Gbg0B_iNG6dmel_PJptPlym-08bL4k-LH'
    });

    var params = {
      images_file: this.webcam.getScreenshot(),
      classifier_ids: ["DefaultCustomModel_1460318682"],
      threshold: 0.2
    };

    visualRecognition.classify(params, function(err, response) {
      if (err) { 
        console.log(err);
      } else {
        console.log(JSON.stringify(response, null, 2))
      }
    });
    */
};