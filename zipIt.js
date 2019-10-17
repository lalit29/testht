const zipFolder = require('zip-a-folder');
const path = require('path');
const origin = path.join(__dirname, 'tests_output');
const destination = path.join(__dirname, 'tests_output.zip');

class ZipAFolder {

    static main() {
        zipFolder.zipFolder(origin, destination, function(err) {
            if(err) {
                console.log('Something went wrong!', err);
            } else {
                console.log('success');
            }
        });
    }
}

ZipAFolder.main();