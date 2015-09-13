/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    city: 'testCity',
    summerLocation: 'testSummer',
    cgpa: '5',
    phoneNumber: '5555555555',
    rollNumber: 'tttttttt',
    roomNumber: '111',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    city: 'adminCity',
    summerLocation: 'adminSummer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
  },
  {
    provider: 'local',
    role: 'core',
    name: 'core1',
    email: 'core1@core.com',
    password: 'core',
    city: 'core1City',
    summerLocation: 'core1Summer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
  },
  {
    provider: 'local',
    role: 'core',
    name: 'core2',
    email: 'core2@core.com',
    password: 'core',
    city: 'core2City',
    summerLocation: 'core2Summer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
},
{
    provider: 'local',
    role: 'coord',
    name: 'coord1',
    email: 'coord1@coord.com',
    password: 'coord',
    city: 'coord1City',
    summerLocation: 'coord1Summer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
},
{
    provider: 'local',
    role: 'coord',
    name: 'coord2',
    email: 'coord2@coord.com',
    password: 'coord',
    city: 'coord2City',
    summerLocation: 'coord2Summer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
},
{
    provider: 'local',
    role: 'coord',
    name: 'coord3',
    email: 'coord3@coord.com',
    password: 'coord',
    city: 'coord3City',
    summerLocation: 'coord3Summer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
},{
    provider: 'local',
    role: 'superCoord',
    name: 'supcoord1',
    email: 'supcoord1@coord.com',
    password: 'sup',
    city: 'coord3City',
    summerLocation: 'coord3Summer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
}, {
    provider: 'local',
    role: 'superCoord',
    name: 'supcoord2',
    email: 'supcoord2@coord.com',
    password: 'sup',
    city: 'coord3City',
    summerLocation: 'coord3Summer',
    cgpa: '10',
    phoneNumber: '9999999999',
    rollNumber: 'aaaaaaaa',
    roomNumber: '222',
    hostel: {
              name : 'Narmada',
              value : 'narmada'
            }    
},function() {
      console.log('finished populating users');
    }
  );
});