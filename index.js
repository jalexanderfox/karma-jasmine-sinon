
var path = require('path');

var createPattern = function(file) {
    return {pattern: file, included: true, served: true, watched: false};
};

var initJasmineSinon = function(files) {
    var jasmineSinonPath = path.dirname(require.resolve('jasmine-sinon')) + '/../lib';
    files.unshift(createPattern(jasmineSinonPath + '/jasmine-sinon.js'));
};

initJasmineSinon.$inject = ['config.files'];

module.exports = {
    'framework:jasmine-sinon': ['factory', initJasmineSinon]
};