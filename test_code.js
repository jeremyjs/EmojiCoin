    function GroupArray(array) {
      let result = {};
      array.forEach(function(item) {
        Object.keys(item).forEach(function(key) {
          if (!result[key]) result[key] = [];
          if (result[key].indexOf(item[key]) == -1) {
            result[key].push(item[key]);
          }
        });
      });
      return result;
    }

    var cars = [
            {
                'make': 'audi',
                'model': 'hello',
                'year': '2012'
            },
            {
                'make': 'audi',
                'model': 'rs5',
                'year': '2013'
            },
            {
                'make': 'ford',
                'model': 'mustang',
                'year': '2012'
            },
            {
                'make': 'ford',
                'model': 'fusion',
                'year': '2015'
            },
            {
                'make': 'kia',
                'model': 'optima',
                'year': '2012'
            },

        ];

    console.log(GroupArray(cars));
