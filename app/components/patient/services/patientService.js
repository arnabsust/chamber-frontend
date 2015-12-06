module.exports = function($resource) {
    return $resource('http://localhost:1337/patient/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
};
