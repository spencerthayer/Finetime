var dashboard = {
    cache: {
        load: Object.getOwnPropertyNames(window)
    }
};
dashboard.debug = {
    pollution: (function() {
        var pollution,                                     
            base = cache.load, // window at load         
            filter = function(a,b) { // difference of two arrays
                return a.filter(function(i) {
                    return !(b.indexOf(i) > -1);
                });
            },                          
            library = filter(Object.getOwnPropertyNames(window), base), 
            custom = function() { 
                return filter(Object.getOwnPropertyNames(window),
                        base.concat(library)); 
            };       

        delete cache.load;

        pollution = function() {
            console.log('Global namespace polluted with:\n ' + 
                    custom().length + ' custom objects \n ' +
                    library.length + ' library objects');

            return {custom: custom().sort(), library: library.sort()};
        };

        return pollution;
    }())  
};