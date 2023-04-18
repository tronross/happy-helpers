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
          stars: 0,
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
          stars: 3,
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
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg'
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
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/21.jpg'
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

  // Create tasks ----------------------------------------------------------------

  // User 1 Tasks ------------------------
  // OPEN

  await prisma.task.create({
    data: {
      name: 'Take out bins',
      description: 'Move bins to the bottom of the driveway for collection.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Heavy Lifting',
      startDate: new Date('2023-04-29 16:00+0500'),
      endDate: new Date('2023-04-29 20:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Heavy Lifting',
      startDate: new Date('2023-04-30 15:00+0500'),
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
      image: 'https://dogsbestlife.com/wp-content/uploads/2020/02/walk-your-dog-860x573.jpeg',
      category: 'Animal Care',
      startDate: new Date('2023-05-02 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'DIY',
      startDate: new Date('2023-05-18 12:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'DIY',
      startDate: new Date('2023-05-22 10:00+0500'),
      endDate: new Date('2023-05-23 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      startDate: new Date('2023-05-19 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Cooking',
      startDate: new Date('2023-04-28 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Cooking',
      startDate: new Date('2023-05-01 18:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      startDate: new Date('2023-05-07 18:00+0500'),
      endDate: new Date('2023-05-10 22:00+0500'),
      status: "OPEN",
      userId: 2,
      nbHelpers: 2,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Cyclist required',
      description: 'I have a tandem but my boyfriend dumped me.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      startDate: new Date('2023-06-07 18:00+0500'),
      endDate: new Date('2023-06-10 22:00+0500'),
      userId: 2,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Carrying groceries',
      description: 'Need help to get my groceries from the car into the house.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'DIY',
      startDate: new Date('2023-04-30 15:00+0500'),
      endDate: new Date('2023-04-30 15:00+0500'),
      userId: 2,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Raking Grass',
      description: 'Need someone to rake my lawn after a long winter, can no longer get around as easily.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      startDate: new Date('2023-05-01 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      startDate: new Date('2023-05-02 15:00+0500'),
      endDate: new Date('2023-05-02 15:00+0500'),
      userId: 2,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 2
    }
  });

  // User 2 ----- PENDING Tasks

  await prisma.task.create({
    data: {
      name: 'Rubber Duck Maker',
      description: 'Looking for someone to make a custom rubber duck for the annual duck race.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'DIY',
      startDate: new Date('2023-05-01 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Personal Care',
      startDate: new Date('2023-04-29 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Housework',
      startDate: new Date('2023-05-05 15:00+0500'),
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
      startDate: new Date('2023-04-29 10:00+0500'),
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
      description: 'My computer has sloweed down and I am afraid there may be a virus, need someone to look and see if everything is ok.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Tech Support',
      startDate: new Date('2023-04-30 15:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Tech Support',
      startDate: new Date('2023-05-05 18:00+0500'),
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
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yard Work',
      startDate: new Date('2023-05-05 18:00+0500'),
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
      startDate: new Date('2023-05-05 12:00+0500'),
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
      startDate: new Date('2023-04-29 12:00+0500'),
      endDate: new Date('2023-04-29 13:00+0500'),
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
      startDate: new Date('2023-04-29 12:00+0500'),
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
      image: 'https://s.yimg.com/ny/api/res/1.2/IkCaDFntWIRZvjSsEMrOcw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMDtjZj13ZWJw/https://media.zenfs.com/en-us/aniin.com/593197b95c26fa4e721def4e9cb83ce7',
      category: 'Social',
      startDate: new Date('2023-05-06 13:00+0500'),
      endDate: new Date('2023-05-06 16:00+0500'),
      userId: 10,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 10
    }
  });

  await prisma.task.create({
    data: {
      name: 'Play Scrabble',
      description: "I'm looking for another Scrabble nerd to play with! I like playing outdoors, like in the park.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKC02CgWUEBu7YCpsKSv1Z-Mphbh6HAZBnQ&usqp=CAU',
      category: 'Social',
      startDate: new Date('2023-04-30 13:00+0500'),
      endDate: new Date('2023-04-30 16:00+0500'),
      userId: 11,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 11
    }
  });

  await prisma.task.create({
    data: {
      name: 'Free Jigsaw',
      description: "I just got a new jigsaw for my birthday. Would you like my other one? It's in great shape, but I don't need two!",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4zauTkSODYG8LJaI4FX5QIRSsD_2gHT7TRsoGwbzFtwED9Lc2hWD7ZdO8dEwpVTMRl8&usqp=CAU',
      category: 'Giving',
      startDate: new Date('2023-04-29 13:00+0500'),
      endDate: new Date('2023-04-29 16:00+0500'),
      userId: 12,
      status: "OPEN",
      nbHelpers: 1,
      addressId: 12
    }
  });




  // Create offers ---------------------------------------------------------------
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
      userId: 5,
      taskId: 13,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 14,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 15,
      status: 'COMPLETE'
    }
  });

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
      taskId: 10,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 7,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 8,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 9,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 10,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 11,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 12,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 2,
      taskId: 13,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 14,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 15,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 16,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 17,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 18,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 19,
      status: 'OPEN'
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
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 22,
      status: 'OPEN'
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
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 25,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 26,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 27,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 4,
      taskId: 28,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 29,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 5,
      taskId: 30,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 31,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 32,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 33,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 3,
      taskId: 34,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 35,
      status: 'COMPLETE'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 6,
      taskId: 36,
      status: 'COMPLETE'
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