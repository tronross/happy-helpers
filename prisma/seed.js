const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// eslint-disable-next-line func-style
async function main() {

  // Create users with addresses ---------------------------------------------
  await prisma.address.create({
    data: {
      address: '82 Tycos Dr',
      city: 'North York',
      postcode: 'M6B 1V9',
      latitude: '43.70536',
      longitude: '-79.45664',
      Users: {
        create: {
          firstName: 'Anderson',
          lastName: 'Khorsandi',
          description: 'Expert in mowing grass hills.',
          email: 'Anderson.Khorsandi@gmail.com',
          password: 'alligator',
          phone: '(636)313-2463',
          stars: 2,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
          skills: 'Yardwork and moving stuff.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '1095 Leslie St',
      city: 'North York',
      postcode: 'M3C 2J7',
      latitude: '43.71956',
      longitude: '-79.34931',
      Users: {
        create: {
          firstName: 'Kayleen',
          lastName: 'Lunski',
          description: 'Ex-Formula 1 driver, great at helping people get to places on time.',
          email: 'K.Lunski@ferrari.it',
          password: 'aardvark',
          phone: '(416)500-1413',
          stars: 0,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
          skills: 'Safe driver and pretty good baker.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '1880 Eglinton Ave E',
      city: 'Scarborough',
      postcode: 'M1L 2L1',
      latitude: '43.72567',
      longitude: '-79.29782',
      Users: {
        create: {
          firstName: 'Tiana',
          lastName: 'Wahman',
          description: 'Super Chef! Ready to help if you need help with meals or some cookies for your fundraiser.',
          email: 'TianaW@ovengloves.com',
          password: 'burntthetoast',
          phone: '(866)987-6453',
          stars: 1,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg',
          skills: 'Incredible in the kitchen.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '4274 Graham St',
      city: 'Pierrefonds-Roxboro',
      postcode: 'H9H 3S5',
      latitude: '45.47760',
      longitude: '-73.84980',
      Users: {
        create: {
          firstName: 'Elvis',
          lastName: 'Jarzynka',
          description: 'Friendly carpenter... if you need any shelves putting up?!',
          email: 'elvis@graceland.com',
          password: 'funnydancer',
          phone: '(514)347-3653',
          stars: 11,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg',
          skills: 'Woodwork and general DIY tasks.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '1100 Broad St',
      city: 'Regina',
      postcode: 'S4R 1X8',
      latitude: '50.46124',
      longitude: '-104.60669',
      Users: {
        create: {
          firstName: 'Javier',
          lastName: 'Tarczynski',
          description: 'Wonderful singer if you need a little cheering up, can also move heavy furniture.',
          email: 'jtarc2010@karaoke.com',
          password: 'sofaman',
          phone: '(306)551-8238',
          stars: 2,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
          skills: 'Dancing.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '1805 Taunton Rd',
      city: 'Hampton',
      postcode: 'L0B 1J0',
      latitude: '43.95273',
      longitude: '-78.79027',
      Users: {
        create: {
          firstName: 'Lore',
          lastName: 'Winks',
          description: 'Great with animals if your dog ever needs a walk.',
          email: 'l.winks2010@nature.com',
          password: 'gooddog',
          phone: '(905)725-6089',
          stars: 22,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg',
          skills: 'Animal care'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '1580 Bloor st w',
      city: 'Toronto',
      postcode: 'M6P 2B2',
      latitude: '43.656178',
      longitude: '-79.452746',
      Users: {
        create: {
          firstName: 'Miriam',
          lastName: 'Bohannes',
          description: "I love baking sweets, and walking dogs!",
          email: 'miriam@bakesale.ca',
          password: 'cupcake',
          phone: '(416)313-2463',
          stars: 15,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/19.jpg',
          skills: 'Baking.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '16 Beechborough Ave',
      city: 'York',
      postcode: 'M6M 1Y9',
      latitude: '43.695630',
      longitude: '-79.470593',
      Users: {
        create: {
          firstName: 'Marcella',
          lastName: 'DiPiaggo',
          description: 'Good with computers.',
          email: 'M.DiPiaggo@newegg.ca',
          password: 'floppyD',
          phone: '(416)313-2443',
          stars: 11,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/17.jpg',
          skills: 'Tech'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '32 Reigate Rd',
      city: 'Etobicoke',
      postcode: 'M9A 2Y4',
      latitude: '43.660045',
      longitude: '-79.524124',
      Users: {
        create: {
          firstName: 'Samantha',
          lastName: 'Dominic',
          description: 'Cat Lady!',
          email: 'msMeow@catlady.ca',
          password: 'floppyD',
          phone: '(647)715-2422',
          stars: 25,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/55.jpg',
          skills: 'Animal care'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '22 Hewitt Ave',
      city: 'Toronto',
      postcode: 'M6R 1Y3',
      latitude: '43.652541249465415',
      longitude: '-79.45311063155081',
      Users: {
        create: {
          firstName: 'Jania',
          lastName: 'Pylowska',
          description: 'I am a real car nut: driving and doing basic repairs.',
          email: 'jania@greasemonkey.ca',
          password: 'iridium',
          phone: '(647)447-2422',
          stars: 25,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/11.jpg',
          skills: 'Driving, mechanic.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '199 Humberside Ave',
      city: 'Toronto',
      postcode: 'M6P 1K7',
      latitude: '43.661198101516526',
      longitude: '-79.46449998697834',
      Users: {
        create: {
          firstName: 'Morgan',
          lastName: "D'Angelo",
          description: 'I like troubleshooting technical problems, good with IT.',
          email: 'morgan.dangelo@utoronto.ca',
          password: '5Q$@Qkm3o%9t',
          phone: '(647)457-2988',
          stars: 17,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/11.jpg',
          skills: 'Tech'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '574 Briar Hill Ave',
      city: 'Toronto',
      postcode: 'M5N 1M9',
      latitude: '43.70986677226693',
      longitude: '-79.4196003252618',
      Users: {
        create: {
          firstName: 'Dan',
          lastName: 'Jordan',
          description: 'I like helping seniors, I can drive you to appointments.',
          email: 'danny6000@gmail.com',
          password: '5Q$@o%9t',
          phone: '(647)744-2988',
          stars: 10,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/45.jpg',
          skills: 'Driving, handyman'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '56A Wentworth Ave',
      city: 'North York',
      postcode: 'M2N 1T7',
      latitude: '43.76015080914169',
      longitude: '-79.4297336948085',
      Users: {
        create: {
          firstName: 'Steve',
          lastName: 'Sakamoto',
          description: 'I like spending time outdoors, I can walk your dog.',
          email: 'steve@stevesakamoto.dev',
          password: '5Q$@ofhgkjhdfh%9t',
          phone: '(647)742-2911',
          stars: 40,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/49.jpg',
          skills: 'Animal care, wordpress.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '42 Bomarc Rd',
      city: 'North York',
      postcode: 'M2K 1V7',
      latitude: '43.7764958942872',
      longitude: '-79.3877670043887',
      Users: {
        create: {
          firstName: 'Dominic',
          lastName: 'Peron',
          description: "I'm often driving around North York, I can pick things up and drop them off.",
          email: 'dom990@saultspring.ca',
          password: 'hdfh%9t',
          phone: '(647)744-7711',
          stars: 10,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/55.jpg',
          skills: 'Driving, life-guard.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '66 Forest Grove Dr',
      city: 'North York',
      postcode: 'M2K 1Z6',
      latitude: '43.780116136577725',
      longitude: '-79.37607698654072',
      Users: {
        create: {
          firstName: 'Marcus',
          lastName: 'Knowles',
          description: "DJ! Also love pet-sitting.",
          email: 'mizellbros@saultnoize.ca',
          password: 'hsdfghddfh%9t',
          phone: '(647)744-9991',
          stars: 10,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/65.jpg',
          skills: 'DJ, animal care.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '195 Norton Ave',
      city: 'North York',
      postcode: 'M2N 4B1',
      latitude: '43.77471384862357',
      longitude: '-79.40049616289224',
      Users: {
        create: {
          firstName: 'Danny',
          lastName: 'Khan',
          description: 'Piano player, has BBQ skills',
          email: '88khan@theresariver.ca',
          password: 'hsdfght',
          phone: '(647)745-8921',
          stars: 15,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/29.jpg',
          skills: 'Musician, cooking.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '1 Flanders Rd',
      city: 'York',
      postcode: 'M6C 3K5',
      latitude: '43.69739980416425',
      longitude: '-79.43284588068727',
      Users: {
        create: {
          firstName: 'John',
          lastName: 'DiGasperis',
          description: 'Woodworker and carpenter, I like to help seniors.',
          email: 'boostthatoyz@pierrefronds.ca',
          password: 'hsh%9t',
          phone: '(647)747-9955',
          stars: 10,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/14.jpg',
          skills: 'Carpenter, house repairs.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '2393 Queen St E',
      city: 'Toronto',
      postcode: 'M4E 1H5',
      latitude: '43.672607330457325',
      longitude: '-79.28685648616003',
      Users: {
        create: {
          firstName: 'Samuel',
          lastName: 'Dormand',
          description: 'I like to go grocery shopping, and house-sitting.',
          email: 'dormand1237@gmail.com',
          password: 'hsh%9t',
          phone: '(647)788-9955',
          stars: 12,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/39.jpg',
          skills: 'House-sitting, errands, yardwork.'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '26 Juniper Ave',
      city: 'Toronto',
      postcode: 'M4L 1S3',
      latitude: '43.676853518866615',
      longitude: '-79.30116247387848',
      Users: {
        create: {
          firstName: 'Anita',
          lastName: 'Silvers',
          description: 'I am a fiend for assembling Ikea furniture',
          email: 'silversart27@me.com',
          password: 'hsh%afsdkjh5879t',
          phone: '(647)847-9445',
          stars: 20,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/42.jpg',
          skills: 'Assembly, measurements, mounting and installation.'
        }
      }
    }
  });



  // Create organizations with addresses -------------------------------------
  await prisma.address.create({
    data: {
      address: '15 Ave Donegani',
      city: 'Pointe-Claire',
      postcode: 'H9R 2W0',
      latitude: '45.45135',
      longitude: '-73.78387',
      Organizations: {
        create: {
          name: 'Canada Post',
          avatar: 'https://avatars.steamstatic.com/21aeab4f4ef2360a38a834128540b383972f0955_full.jpg',
          website: 'https://www.canadapost.ca/'
        }
      }
    }
  });

  await prisma.address.create({
    data: {
      address: '3000 Rue du Marché',
      city: 'Dollard-des-Ormeaux',
      postcode: 'H9B 2Y3',
      latitude: '45.48391',
      longitude: '-73.89939',
      Organizations: {
        create: {
          name: 'Sami Fruits',
          avatar: 'https://avatars.steamstatic.com/a743b09087e00eeb7940c0c49e60f042f8531e72_full.jpg',
          website: 'http://samifruits.com/'
        }
      }
    }
  });



  // Create bonus addresses ----------------------------------------------------------------
  await prisma.address.create({
    data: {
      address: '443 Arlington Ave',
      city: 'York',
      postcode: 'M6C 3A2',
      latitude: '43.70005698916069',
      longitude: '-79.43281854010421',
    }
  });

  await prisma.address.create({
    data: {
      address: '115 Oxford St',
      city: 'Toronto',
      postcode: 'M5T 1P4',
      latitude: '43.655670103882805',
      longitude: '-79.40498958636594',
    }
  });

  await prisma.address.create({
    data: {
      address: '20 Mervyn Ave',
      city: 'Etobicoke',
      postcode: 'M9B 1M8',
      latitude: '-79.5385131008',
      longitude: '43.64353364730',
    }
  });

  await prisma.address.create({
    data: {
      address: "48 O'Hara Ave",
      city: 'Toronto',
      postcode: 'M6K 2R1',
      latitude: '43.6428322501',
      longitude: '-79.4350752462',
    }
  });

  await prisma.address.create({
    data: {
      address: '257 Bellwoods Ave',
      city: 'Toronto',
      postcode: 'M6J 2R3',
      latitude: '43.6531388762',
      longitude: '-79.4134362639',
    }
  });
  
  await prisma.address.create({
    data: {
      address: '27 Howie Ave',
      city: 'Toronto',
      postcode: 'M4M 2H9',
      latitude: '43.6608817745',
      longitude: '-79.348122311',
    }
  });
   
  await prisma.address.create({
    data: {
      address: '790 Queen St W',
      city: 'Toronto',
      postcode: 'M6J 1G3',
      latitude: '43.64739127639',
      longitude: '-79.4137343319',
    }
  });
 
  await prisma.address.create({
    data: {
      address: '875 Dufferin St',
      city: 'Toronto',
      postcode: 'M6H 3K8',
      latitude: '43.6567843532',
      longitude: '-79.432771251',
    }
  });

  await prisma.address.create({
    data: {
      address: '375 Colborne Lodge Dr',
      city: 'Toronto',
      postcode: 'M6R 2Z3',
      latitude: '43.651358468886',
      longitude: '-79.46367033041',
    }
  });

  // Create tasks ----------------------------------------------------------------

  // User 1 Tasks ------------------------
  // OPEN

  await prisma.task.create({
    data: {
      name: 'Take out bins',
      description: 'Move bins to the bottom of the driveway for collection.',
      image: 'https://pbs.twimg.com/media/EU74XyTX0AE6l5i.jpg',
      category: 'Heavy Lifting',
      startDate: new Date('2023-05-15 00:00+0500'),
      endDate: new Date('2023-04-29 02:00+0500'),
      userId: 1,
      status: 'OPEN',
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Move couch',
      description: 'Heavy couch needs to go up to 23rd floor apartment.',
      image: 'https://www.stor-it.com/wp-content/uploads/shutterstock_280426793-1.jpg',
      category: 'Heavy Lifting',
      startDate: new Date('2023-04-30 01:00+0500'),
      endDate: new Date('2023-04-30 15:00+0500'),
      userId: 1,
      status: 'OPEN',
      nbHelpers: 3,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Walk dog',
      description: 'I have broken my leg, need someone to walk the dog.',
      image: 'https://www.akc.org/wp-content/uploads/2018/04/beagle-walking-on-leash-looking-up.jpg',
      category: 'Animal Care',
      startDate: new Date('2023-04-28 22:00+0500'),
      endDate: new Date('2023-05-02 15:00+0500'),
      userId: 1,
      status: 'OPEN',
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Fix shelf',
      description: 'Shelf fell off wall and broke all my picture frames. Need help fixing it up',
      image: 'https://img.wonderhowto.com/img/original/86/72/63522808758754/0/635228087587548672.jpg',
      category: 'DIY',
      startDate: new Date('2023-05-18 02:00+0500'),
      endDate: new Date('2023-05-18 13:00+0500'),
      status: 'OPEN',
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Change light bulb',
      description: 'Bulb is too high for me to reach.',
      image: 'https://m.media-amazon.com/images/I/41kDzl61vxS._AC_.jpg',
      category: 'DIY',
      startDate: new Date('2023-05-05 02:00+0500'),
      endDate: new Date('2023-05-05 15:00+0500'),
      status: 'OPEN',
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Need ride to airport',
      description: 'Going on holiday, parking is too expensive at the airport.',
      image: 'https://images.ctfassets.net/cnu0m8re1exe/6sLnMf6GKSgsXxbJbpGXWO/7ea7a98ebc24318f0d60b1f5484053de/shutterstock_707735803.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill',
      category: 'Driving',
      startDate: new Date('2023-05-19 00:00+0500'),
      endDate: new Date('2023-05-19 15:00+0500'),
      status: 'OPEN',
      userId: 1,
      nbHelpers: 1,
      addressId: 4
    }
  });

  // User 1 Pending Tasks ------------------


  await prisma.task.create({
    data: {
      name: 'Donations wanted for bake sale',
      description: 'Any cakes would be welcome, I hate cooking.',
      image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/rainbow_cake_20402_16x9.jpg',
      category: 'Cooking',
      startDate: new Date('2023-04-28 19:00+0500'),
      endDate: new Date('2023-04-28 15:00+0500'),
      userId: 1,
      status: 'PENDING',
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Cookies needed for meeting',
      description: 'Nobody liked my lasagne last time, need a change of menu.',
      image: 'https://static01.nyt.com/images/2022/02/12/dining/JT-Chocolate-Chip-Cookies/JT-Chocolate-Chip-Cookies-master768.jpg?w=1280&q=75',
      category: 'Cooking',
      startDate: new Date('2023-04-29 18:00+0500'),
      endDate: new Date('2023-04-29 19:00+0500'),
      status: 'PENDING',
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Supper required on Friday',
      description: 'My kids get hungry and I have to go out.',
      image: 'https://i2.wp.com/www.differencebetween.com/wp-content/uploads/2014/12/Dinner_Difference-Between-Dinner-and-Supper.jpg?resize=300%2C200&ssl=1',
      category: 'Cooking',
      startDate: new Date('2023-04-29 03:00+0500'),
      endDate: new Date('2023-05-10 20:00+0500'),
      status: 'PENDING',
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Cat sitter required',
      description: 'I will be on holiday next week and my cat did not want to come.',
      image: 'https://www.professionalcatsitter.com/wp-content/uploads/2014/02/cat1.jpg',
      category: 'Animal Care',
      startDate: new Date('2023-05-11 18:00+0500'),
      endDate: new Date('2023-05-30 20:00+0500'),
      status: 'PENDING',
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Snake feeder needed',
      description: 'I will be on holiday next week and am scared my snake will eat my gerbil.',
      image: 'https://www.saferbrand.com/media/Articles/Safer-Brand/identify-and-get-rid-of-venmous-snakes.jpg',
      category: 'Animal Care',
      status: 'PENDING',
      startDate: new Date('2023-05-10 18:00+0500'),
      endDate: new Date('2023-05-10 18:00+0500'),
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Frog handler required',
      description: 'My frog is out of control, need help keeping it on lillypad.',
      image: 'https://www.pbs.org/wnet/nature/files/2021/05/frog-610x343.png',
      category: 'Animal Care',
      startDate: new Date('2023-05-10 18:00+0500'),
      endDate: new Date('2023-05-10 18:00+0500'),
      status: 'PENDING',
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  // User 1 Complete Tasks ------------------

  await prisma.task.create({
    data: {
      name: 'Mopper',
      description: 'The ice-rink in my back yard melted, need help mopping up the garden.',
      image: 'https://saundersequipment.com/wp-content/uploads/2013/06/650-600x406.jpg',
      category: 'Yard Work',
      status: 'COMPLETE',
      startDate: new Date('2023-04-10 18:00+0500'),
      endDate: new Date('2023-04-10 18:00+0500'),
      userId: 1,
      nbHelpers: 10,
      addressId: 1,
      starred: true
    }
  });

  await prisma.task.create({
    data: {
      name: 'Squirrel chaser',
      description: 'My yard is overrun with squirrels, need help to chase them away.',
      image: 'https://api.time.com/wp-content/uploads/2020/03/Squirrel.jpg',
      category: 'Yard Work',
      startDate: new Date('2023-04-01 18:00+0500'),
      endDate: new Date('2023-04-01 18:00+0500'),
      userId: 1,
      status: 'COMPLETE',
      nbHelpers: 1,
      addressId: 1,
      starred: true
    }
  });

  await prisma.task.create({
    data: {
      name: 'Fence painter',
      description: 'Need help repainting my fence.',
      image: 'https://www.owatroldirect.co.uk/wp-content/uploads/2016/02/colourfence.jpg.webp',
      category: 'Yard Work',
      status: 'COMPLETE',
      startDate: new Date('2023-04-05 18:00+0500'),
      endDate: new Date('2023-04-10 18:00+0500'),
      userId: 1,
      nbHelpers: 2,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Leaf removal',
      description: 'My beautiful lawn is covered with leaves, if anyone has a leaf blower I would be very appreciative.',
      image: 'https://www.bhg.com/thmb/rh4fzRctBkAWiGbr7MZfidV2_XU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/person-raking-fall-autumn-leaves-87a68497cbac4cf1828694592dd42c5b.jpg',
      category: 'Yard Work',
      status: 'COMPLETE',
      startDate: new Date('2023-03-30 18:00+0500'),
      endDate: new Date('2023-03-30 18:00+0500'),
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Need lift to garage',
      description: 'My car is in the shop, need a lift there so I can pick it up.',
      image: 'https://cdn.vox-cdn.com/thumbor/j-v62q5_S0NgB2gvFt3JJ_zX9ow=/0x0:7492x5619/920x613/filters:focal(0x0:7492x5619):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/46484254/shutterstock_244451992.0.0.jpg',
      category: 'Driving',
      status: 'COMPLETE',
      startDate: new Date('2023-04-15 18:00+0500'),
      endDate: new Date('2023-04-15 22:00+0500'),
      userId: 1,
      nbHelpers: 1,
      addressId: 1,
      starred: true
    }
  });

  await prisma.task.create({
    data: {
      name: 'Astronaut required',
      description: 'Need co-pilot to take over while I sleep on excursion to Mars and back.',
      image: 'https://starlust.org/wp-content/uploads/elementor/thumbs/astronaut-floating-in-space-prf2kzw2msp5wib3hkumemjv9k51vj6jsrzwlx8y6o.webp',
      category: 'Driving',
      startDate: new Date('2023-04-07 18:00+0500'),
      endDate: new Date('2023-04-10 22:00+0500'),
      status: 'COMPLETE',
      userId: 1,
      nbHelpers: 1,
      addressId: 1,
      starred: true
    }
  });

  // User 2 ----- OPEN Tasks

  await prisma.task.create({
    data: {
      name: 'Boat driver required',
      description: 'I love to waterski, but have no-one to drive the boat since my husband fell overboard last year.',
      image: 'https://cdn-bmkic.nitrocdn.com/mfayRNjpwuryPngPrBbCMHYQdhKGQOLg/assets/images/optimized/rev-c2761dd/boating-resources/wp-content/uploads/2021/06/How-to-drive-a-boat-1120x580.png.webp',
      category: 'Driving',
      startDate: new Date('2023-05-07 18:00+0500'),
      endDate: new Date('2023-05-10 22:00+0500'),
      status: "PENDING",
      userId: 2,
      nbHelpers: 2,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Cyclist required',
      description: 'I have a tandem but my boyfriend dumped me.',
      image: 'https://cdn.shopify.com/s/files/1/0989/0486/files/IMG_5284_copy_2048x2048.jpg?v=1613255134',
      category: 'Driving',
      startDate: new Date('2023-06-07 18:00+0500'),
      endDate: new Date('2023-06-10 22:00+0500'),
      userId: 2,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Carrying groceries',
      description: 'Need help to get my groceries from the car into the house.',
      image: 'https://www.budget101.com/wp-content/uploads/2021/05/groceries-in-car.jpg',
      category: 'Heavy Lifting',
      startDate: new Date('2023-05-01 18:00+0500'),
      endDate: new Date('2023-05-01 18:00+0500'),
      userId: 2,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Install Shelf',
      description: 'Need help installing shelf in bathroom above toilet, should be able to hold 10lbs.',
      image: 'https://plankandpillow.com/wp-content/uploads/2018/08/shelf-install-1024x709.jpg',
      category: 'DIY',
      startDate: new Date('2023-05-05 03:00+0500'),
      endDate: new Date('2023-05-30 15:00+0500'),
      userId: 2,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Raking Grass',
      description: 'Need someone to rake my lawn after a long winter, can no longer get around as easily.',
      image: 'https://www.treehugger.com/thmb/IkMEHl0MbY3DN6qLAeOLE7lJ4LI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/is-it-better-to-rake-or-leave-leaves-4864213-14-e72dd5a4996e490e9d09b609c7dd8d9c.jpg',
      category: 'Yard Work',
      startDate: new Date('2023-05-01 01:00+0500'),
      endDate: new Date('2023-05-01 15:00+0500'),
      userId: 2,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Fix Fence',
      description: 'I have a small hole in my fence and cats keep getting in and eatting my strawberries. Need someone to wire it closed.',
      image: 'https://images.fineartamerica.com/images-medium-large-5/hole-in-chain-link-fence-ron-koeberer.jpg',
      category: 'Yard Work',
      startDate: new Date('2023-05-02 00:00+0500'),
      endDate: new Date('2023-05-02 15:00+0500'),
      userId: 2,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 2
    }
  });

  // User 2 ----- PENDING Tasks

  await prisma.task.create({
    data: {
      name: 'Rubber Duck Maker',
      description: 'Looking for someone to make a custom rubber duck for the annual duck race.',
      image: 'https://m.media-amazon.com/images/I/61rYCPyg8PL._AC_SL1500_.jpg',
      category: 'DIY',
      startDate: new Date('2023-05-01 01:00+0500'),
      endDate: new Date('2023-05-01 15:00+0500'),
      status: "PENDING",
      userId: 2,
      nbHelpers: 2,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Move Appliances',
      description: 'I have a fridge, stove and dishwasher I need to get rid of, will have trailer to load onto with someone to take it away.',
      image: 'https://media.istockphoto.com/id/506060186/photo/worker-carrying-a-washing-machine-on-his-back.jpg?s=612x612&w=0&k=20&c=unSb80hqNYwQYuUnu518kvMYP3SD84lViH_3YYJzO5k=',
      category: 'Heavy Lifting',
      startDate: new Date('2023-05-02 15:00+0500'),
      endDate: new Date('2023-05-02 15:00+0500'),
      userId: 2,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Change Curtains',
      description: 'Need help changing my curtains, they are 15ft from floor and I dont have a ladder.',
      image: 'https://www.thespruce.com/thmb/qVNQXcJYNRSKozXrf1ZDvwnoqLE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/signs-time-to-replace-curtains-5525795-hero-43fd522a36d24c28b0c08fe6c4ffe5cd.jpg',
      category: 'Housework',
      startDate: new Date('2023-05-05 15:00+0500'),
      endDate: new Date('2023-05-06 15:00+0500'),
      userId: 2,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Pick up Pet Food',
      description: 'Need someone to pick up pet food at mailbox, there are 4 10lb bags.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Heavy Lifting',
      startDate: new Date('2023-06-01 15:00+0500'),
      endDate: new Date('2023-06-01 15:00+0500'),
      userId: 2,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Dust Fan',
      description: 'Need someone to dust my fan, with tall ceilings I am unable to reach up there with no ladder.',
      image: 'https://organizeyourstuffnow.com/wp-content/uploads/2018/10/Ceiling-Fan-dusty-blades-1024x683.jpg',
      category: 'Housework',
      startDate: new Date('2023-05-11 15:00+0500'),
      endDate: new Date('2023-05-12 15:00+0500'),
      userId: 2,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Remove Ice',
      description: 'Need someone to remove the large hanging icicles as they are melting and getting dangerous to walk under.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      startDate: new Date('2023-06-05 15:00+0500'),
      endDate: new Date('2023-06-06 15:00+0500'),
      userId: 2,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 2
    }
  });

  // User 2 ----- COMPLETE Tasks

  await prisma.task.create({
    data: {
      name: 'Deliver Flyers',
      description: 'Looking for someone to deliver flyers Sat and Sun as I am out of town',
      image: 'https://letterboxdistribution.co.uk/wp-content/uploads/2019/05/Letterbox-distribution-London-delivering-flyers-leaflets-and-promotional-material-1.jpg',
      category: 'Other',
      startDate: new Date('2023-04-01 15:00+0500'),
      endDate: new Date('2023-04-01 15:00+0500'),
      status: "COMPLETE",
      userId: 2,
      nbHelpers: 2,
      addressId: 2,
      starred: true
    }
  });

  await prisma.task.create({
    data: {
      name: 'Move Standard Car',
      description: 'I have a standard car needing to be moved down the road but I am unable to drive stick',
      image: 'https://cdn.jdpower.com/JDPA_Manual%20Transmission%20Shift%20Pattern%20by%20Pexels.jpg',
      category: 'Driving',
      startDate: new Date('2023-04-11 15:00+0500'),
      endDate: new Date('2023-04-11 15:00+0500'),
      userId: 2,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 2,
      starred: true
    }
  });

  await prisma.task.create({
    data: {
      name: 'Watch Turtle',
      description: 'My turtle gets lonely and I am away for a week, looking for someone to watch him',
      image: 'https://cdn.reptileadvisor.com/wp-content/uploads/2020/02/pet-turtles.jpg',
      category: 'Housework',
      startDate: new Date('2023-04-11 15:00+0500'),
      endDate: new Date('2023-04-12 15:00+0500'),
      userId: 2,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Salt Walkway',
      description: 'Need someone to salt the walkway at the appartment entrance tomorrow morning as I have an appointment',
      image: 'https://www.whygoodnature.com/hs-fs/hubfs/Winter%20Salt%20Sidewalk.jpg?width=1280&name=Winter%20Salt%20Sidewalk.jpg',
      category: 'Heavy Lifting',
      startDate: new Date('2023-01-01 15:00+0500'),
      endDate: new Date('2023-01-01 15:00+0500'),
      userId: 2,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 2,
      starred: true
    }
  });

  await prisma.task.create({
    data: {
      name: 'Game Booth Volunteer',
      description: 'Need someone to man the game booth at our upcoming festival, duties include making sure each kid gets a turn and a prize',
      image: 'https://tipjunkie.com/wp-content/uploads/cache/de/84/de84b9df831f3cc7af7522695c9da6b5.jpg',
      category: 'Charity & Causes',
      startDate: new Date('2023-03-01 15:00+0500'),
      endDate: new Date('2023-03-10 15:00+0500'),
      userId: 2,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Remove Stump',
      description: 'Need help moving stump, was dug out last year and would like it gone by end of month.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      startDate: new Date('2023-04-01 15:00+0500'),
      endDate: new Date('2023-04-01 20:00+0500'),
      userId: 2,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 2
    }
  });

  // User 3 ----- OPEN Tasks

  await prisma.task.create({
    data: {
      name: 'Walking Partner',
      description: 'Looking for a walking partner for the week so I feel more safe going out on the town.',
      image: 'https://media.istockphoto.com/id/1144320423/photo/crosswalk-people-crossing-in-downtown.jpg?s=612x612&w=0&k=20&c=00bXtY6qbcH_3XGO_XJeCz167oR4VQYEy9D2hrg6w5M=',
      category: 'Personal Care',
      startDate: new Date('2023-04-29 22:00+0500'),
      endDate: new Date('2023-04-29 20:00+0500'),
      status: "OPEN",
      userId: 3,
      nbHelpers: 2,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Hanging Picture',
      description: 'I have a large picture I want to hang in my living room, need another person to hold one side.',
      image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/18/0/IO_Suzanne-Childress_Marin-Rancher_12.jpg.rend.hgtvcom.616.411.suffix/1503074475260.jpeg',
      category: 'Housework',
      startDate: new Date('2023-05-05 22:00+0500'),
      endDate: new Date('2023-05-07 20:00+0500'),
      userId: 3,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Sweep Path',
      description: 'I broke a glass vase along the community path, my eyes are not good enough to see all pieces, need someone to clean up the rest.',
      image: 'https://literaryyard.files.wordpress.com/2013/10/broken-vase.jpg',
      category: 'Yard Work',
      startDate: new Date('2023-04-29 18:00+0500'),
      endDate: new Date('2023-04-29 11:00+0500'),
      userId: 3,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Clean Computer',
      description: 'My computer has slowed down and I am afraid there may be a virus, need someone to look and see if everything is ok.',
      image: 'https://www.ups.com/assets/resources/webcontent/images/how-to-ship-laptop-G-1134966284-Q421.jpg',
      category: 'Tech Support',
      startDate: new Date('2023-04-30 03:00+0500'),
      endDate: new Date('2023-04-30 20:00+0500'),
      userId: 3,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Ipad Help',
      description: 'Need someone to show me the ropes of my new Ipad, didnt have time to stay at the Apple store and learn',
      image: 'https://cdn.vox-cdn.com/thumbor/_fO7TX18HE07otQ4CcxWC4_4lcM=/0x0:2040x1360/1400x788/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24128006/226361_Apple_iPad_10.9_10th_gen_DSeifert_0004.jpg',
      category: 'Tech Support',
      startDate: new Date('2023-05-05 03:00+0500'),
      endDate: new Date('2023-05-05 20:00+0500'),
      userId: 3,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Fix Garden Box',
      description: 'My garden box is starting to rot, need to support it so it does not cave in',
      image: 'https://m.media-amazon.com/images/I/71ZN2rx5CGL._AC_SX522_.jpg',
      category: 'Yard Work',
      startDate: new Date('2023-05-05 03:00+0500'),
      endDate: new Date('2023-05-05 20:00+0500'),
      userId: 3,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 3
    }
  });

  // User 3 ----- PENDING Tasks

  await prisma.task.create({
    data: {
      name: 'Remove Lights',
      description: 'Need someone to remove Christmas lights from house, I have no ladder and my wife doesnt like them up all year long.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      startDate: new Date('2023-04-28 18:00+0500'),
      endDate: new Date('2023-04-28 20:00+0500'),
      status: "PENDING",
      userId: 3,
      nbHelpers: 2,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Chop Wood',
      description: 'I have 2 piles of firewood to be chopped for woodstove',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      startDate: new Date('2023-05-05 18:00+0500'),
      endDate: new Date('2023-05-05 20:00+0500'),
      userId: 3,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Milk Delivery',
      description: 'Cant move due to injury, looking for someone to bring me milk for my cereal.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Housework',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Drop Off',
      description: 'Need to bring my car in for repair, need someone to come with me and give me a lift home after.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Water Flowers',
      description: 'Looking for someone to water the community flowers while I am away',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Remove Webs',
      description: 'I have so many spider webs accumulating in corner of garage, need someone to sweep/vacuum them away',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Housework',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "PENDING",
      nbHelpers: 1,
      addressId: 3
    }
  });

  // User 3 ----- COMPLETE Tasks

  await prisma.task.create({
    data: {
      name: 'Help at Appointment',
      description: 'Looking for someone to help me get to my appointment, the hospital is so big and I dont know how to get around',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Personal Care',
      // startDate: Date.now(),
      // endDate:
      status: "COMPLETE",
      userId: 3,
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Donate Box',
      description: 'I have a big box of random things to be donated, but I do not drive. Please help get these items to a new home.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Cook Dinner',
      description: 'My husband is not able to cook and I am away for the night, need someone to bing him dinner.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Cooking',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Wash Fish',
      description: 'My fish went on an adventure and needs a bath, if you can help me with this please let me know.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Animal Care',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Church Supper',
      description: 'Need someone to take tickets upon entry for the evening of the Church supper. Supper will be provided.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Charity & Causes',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Clean Yard',
      description: 'With the snow melting all the garbage that flew into my yard is now showing, need someone to clean it up.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      status: "COMPLETE",
      nbHelpers: 1,
      addressId: 3
    }
  });

  //////////////////////////
  // Other Users and Tasks
  //////////////////////////
  await prisma.task.create({
    data: {
      name: 'Walk my dog',
      description: "My dog likes meeting new dog-friends! If you can come by and take my dog for a walk, I can do the same for you later in the week!",
      image: 'https://www.lawscountrykennel.com/wp-content/uploads/2018/04/Dog-Walk.jpg',
      category: 'Animal Care',
      startDate: new Date('2023-05-05 22:00+0500'),
      endDate: new Date('2023-05-05 13:00+0500'),
      userId: 7,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 7
    }
  });

  await prisma.task.create({
    data: {
      name: 'Move heavy bags',
      description: "I have some big bags (20kg) of flour and sugar in my van, but I hurt my back. Can you carry them into my basement? I'll give you cookies!",
      image: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRVSp6lnjgy68ENobCFIam16G5G-JJ7oXy6cAsKibCpAzga39tvcWbmw9iSeQZmyabl',
      category: 'Heavy Lifting',
      startDate: new Date('2023-04-29 22:00+0500'),
      endDate: new Date('2023-04-29 23:00+0500'),
      userId: 8,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 8
    }
  });

  await prisma.task.create({
    data: {
      name: 'Drive my Mom',
      description: "My mom has a dentist's appointment. Can you drive her there and I can pick her up? (about a half hour away)",
      image: 'https://www.vectornator.io/blog/content/images/2022/09/Cover-How-to-draw-a-car.png',
      category: 'Driving',
      startDate: new Date('2023-04-29 00:00+0500'),
      endDate: new Date('2023-04-29 13:00+0500'),
      userId: 9,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 9
    }
  });

  await prisma.task.create({
    data: {
      name: 'Watch football',
      description: "I'm a big Manchester United fan, but don't know any other fans (new to Toronto). Looking for someone to watch a match at the pub with me.",
      image: 'https://download.logo.wine/logo/Manchester_United_F.C./Manchester_United_F.C.-Logo.wine.png',
      category: 'Social',
      startDate: new Date('2023-05-06 00:00+0500'),
      endDate: new Date('2023-05-06 16:00+0500'),
      userId: 10,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 26
    }
  });

  await prisma.task.create({
    data: {
      name: 'Play Scrabble',
      description: "I'm looking for another Scrabble nerd to play with! I prefer playing outdoors, like in the park.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0Fr7jhu6qjt8Tn_H_wcF4rz5S28GQ4cYYw&usqp=CAU',
      category: 'Social',
      startDate: new Date('2023-04-30 00:00+0500'),
      endDate: new Date('2023-04-30 16:00+0500'),
      userId: 11,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 27
    }
  });

  await prisma.task.create({
    data: {
      name: 'Free Jigsaw',
      description: "I just got a new jigsaw for my birthday. Would you like my other one? It's in great shape, but I don't need two!",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4zauTkSODYG8LJaI4FX5QIRSsD_2gHT7TRsoGwbzFtwED9Lc2hWD7ZdO8dEwpVTMRl8&usqp=CAU',
      category: 'Giving',
      startDate: new Date('2023-04-29 03:00+0500'),
      endDate: new Date('2023-04-29 16:00+0500'),
      userId: 12,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 12
    }
  });

  await prisma.task.create({
    data: {
      name: 'Bake Sale',
      description: "I'm organizing a bake sale in High Park! Proceeds will benefit Toronto Cat Rescue. Contact me for more details.",
      image: 'https://www.signupgenius.com/cms/socialMediaImages/bake-sale-ideas-fundraising-facebook-1200x630.png',
      category: 'Cooking',
      startDate: new Date('2023-04-30 02:00+0500'),
      endDate: new Date('2023-05-03 16:00+0500'),
      userId: 13,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 30
    }
  });
  
  await prisma.task.create({
    data: {
      name: 'Food Drive',
      description: "Upcoming food drive: 15 people are leaving a box of food out for collection, so we can deliver it to a food bank.Will you help me collect it and load it into the van?",
      image: 'https://www.uwkc.org/wp-content/uploads/2020/10/How_it_works_03.jpg',
      category: 'Charity & Causes',
      startDate: new Date('2023-05-07 04:00+0500'),
      endDate: new Date('2023-05-07 12:00+0500'),
      userId: 19,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 19
    }
  });
  
  
  await prisma.task.create({
    data: {
      name: 'Pick up prescription',
      description: "I'm sick at home. Could you pick up my medicine from the pharmacy for me?",
      image: 'https://img.myloview.com/posters/sick-cartoon-funny-face-with-tired-expression-and-thermometer-vector-illustration-isolated-on-white-background-700-259685614.jpg',
      category: 'Errands',
      startDate: new Date('2023-04-30 00:00+0500'),
      endDate: new Date('2023-04-30 01:00+0500'),
      userId: 15,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 22
    }
  });

  await prisma.task.create({
    data: {
      name: 'Record Fair',
      description: "I'm organizing a record sale in Trinity Bellwoods! Come on out if you want to Buy, Sell, or Trade any records!",
      image: 'https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/_resampled/FillWzY4OCwzNDRd/vinyl.jpg',
      category: 'Other',
      startDate: new Date('2023-05-06 00:00+0500'),
      endDate: new Date('2023-05-07 12:00+0500'),
      userId: 15,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 28
    }
  });
  
  await prisma.task.create({
    data: {
      name: 'Build Ikea Dresser',
      description: "I'm terrible at assembling Ikea stuff - can you help me put together a dresser? I have cookies!",
      image: 'https://1.bp.blogspot.com/-qtt18mo4f-k/XitkpbTfl_I/AAAAAAAASoI/dd5H5GjhXZQVEoqJCnPoCW467O6wIsxywCNcBGAsYHQ/s1600/ikea-manual.jpg',
      category: 'DIY',
      startDate: new Date('2023-04-30 19:00+0500'),
      endDate: new Date('2023-05-01 00:00+0500'),
      userId: 11,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 11
    }
  });

  await prisma.task.create({
    data: {
      name: 'Build Picnic Table',
      description: "I need help building a pinic table. I'll BBQ us lunch when we're done!",
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Picnic_table.jpg',
      category: 'DIY',
      startDate: new Date('2023-04-29 19:00+0500'),
      endDate: new Date('2023-04-30 00:00+0500'),
      userId: 18,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 18
    }
  });


  // Create offers ---------------------------------------------------------------
  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 1,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 1,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 1,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 1,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 2,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 4,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 4,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 4,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 5,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 6,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 7,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 8,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 9,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 10,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 10,
      status: 'DENIED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 11,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 12,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 13,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 13,
      status: 'DENIED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 14,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 14,
      status: 'DENIED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 15,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 15,
      status: 'DENIED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 16,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 17,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 18,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 19,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 19,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 19,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 20,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 22,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 22,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 24,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 24,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 25,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 26,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 27,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 28,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 29,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 30,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 31,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 32,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 33,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 34,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 35,
      status: 'ACCEPTED'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 36,
      status: 'ACCEPTED'
    }
  });

  // Create messages -------------------------------------------------------------
  await prisma.message.create({
    data: {
      userId: 1,
      type: 'STAR',
      cpId: 4,
      cpName: 'Elvis Jarzynka',
      taskName: 'Eat tacos',
      receivedAt: new Date('2023-04-20 22:15+0500'),
      markedRead: false,
      active: true
    }
  });

  await prisma.message.create({
    data: {
      userId: 1,
      type: 'RECEIVED',
      cpId: 6,
      cpName: 'Lore Winks',
      taskName: 'Walk dog',
      receivedAt: new Date('2023-04-19 22:00+0500'),
      markedRead: false,
      active: true
    }
  });

  await prisma.message.create({
    data: {
      userId: 1,
      type: 'RECEIVED',
      cpId: 16,
      cpName: 'Danny Khan',
      taskName: 'Burp baby',
      receivedAt: new Date('2023-04-11 20:00+0500'),
      markedRead: false,
      active: true
    }
  });

  await prisma.message.create({
    data: {
      userId: 1,
      type: 'ACCEPTED',
      cpId: 2,
      cpName: 'Kayleen Lunski',
      taskName: 'Free hostages',
      receivedAt: new Date('2023-04-18 22:00+0500'),
      markedRead: false,
      active: true
    }
  });

  await prisma.message.create({
    data: {
      userId: 1,
      type: 'DENIED',
      cpId: 3,
      cpName: 'Tiana Wahman',
      taskName: 'Fix window',
      receivedAt: new Date('2023-04-19 16:00+0500'),
      markedRead: false,
      active: true
    }
  });

  await prisma.message.create({
    data: {
      userId: 1,
      type: 'RECEIVED',
      cpId: 3,
      cpName: 'Tiana Wahman',
      taskName: 'Milk cow',
      receivedAt: new Date('2023-04-01 21:00+0500'),
      markedRead: true,
      active: false
    }
  });
}

main()
  .then(async() => {
    await prisma.$disconnect();
  })
  .catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });