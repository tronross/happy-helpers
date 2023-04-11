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
  await prisma.task.create({
    data: {
      name: 'Take out bins',
      description: 'Move bins to the bottom of the driveway for collection.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Heavy Lifting',
      startDate: new Date('2023-04-20 16:00+0500'),
      endDate: new Date('2023-04-20 20:00+0500'),
      userId: 1,
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
      startDate: new Date('2023-04-19 15:00+0500'),
      endDate: new Date('2023-04-19 15:00+0500'),
      userId: 2,
      nbHelpers: 3,
      addressId: 2
    }
  });

  await prisma.task.create({
    data: {
      name: 'Walk dog',
      description: 'I have broken my leg, need someone to walk the dog.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Animal Care',
      startDate: new Date('2023-04-21 15:00+0500'),
      endDate: new Date('2023-04-21 15:00+0500'),
      userId: 1,
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
      startDate: new Date('2023-04-18 12:00+0500'),
      endDate: new Date('2023-04-18 13:00+0500'),
      userId: 4,
      nbHelpers: 1,
      addressId: 4
    }
  });

  await prisma.task.create({
    data: {
      name: 'Change light bulb',
      description: 'Bulb is too high for me to reach.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'DIY',
      startDate: new Date('2023-04-22 10:00+0500'),
      endDate: new Date('2023-04-23 15:00+0500'),
      userId: 5,
      nbHelpers: 1,
      addressId: 5
    }
  });

  await prisma.task.create({
    data: {
      name: 'Need ride to airport',
      description: 'Going on holiday, parking is too expensive at the airport.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      startDate: new Date('2023-04-19 15:00+0500'),
      endDate: new Date('2023-04-19 15:00+0500'),
      userId: 4,
      nbHelpers: 1,
      addressId: 4
    }
  });

  await prisma.task.create({
    data: {
      name: 'Donations wanted for bake sale',
      description: 'Any cakes would be welcome, I hate cooking.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Cooking',
      startDate: new Date('2023-04-16 15:00+0500'),
      endDate: new Date('2023-04-16 15:00+0500'),
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Cookies needed for meeting',
      description: 'Nobody like my lasagne last time, need a change of menu.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Cooking',
      startDate: new Date('2023-04-29 18:00+0500'),
      endDate: new Date('2023-04-29 19:00+0500'),
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
      // startDate: Date.now(),
      // endDate:
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
      // startDate: Date.now(),
      // endDate:
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
      // startDate: Date.now(),
      // endDate:
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
      // startDate: Date.now(),
      // endDate:
      userId: 1,
      nbHelpers: 1,
      addressId: 1
    }
  });

  await prisma.task.create({
    data: {
      name: 'Mopper',
      description: 'The ice-rink in my back yard melted, need help mopping up the garden.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yardwork',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      nbHelpers: 10,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Squirrel chaser',
      description: 'My yard is overrun with squirrels, need help to chase them away.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yardwork',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Fence painter',
      description: 'Need help repainting my fence.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yardwork',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      nbHelpers: 2,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Leaf removal',
      description: 'My beautiful lawn is covered with leaves, if anyone has a leaf blower I would be very appreciative.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Yardwork',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Need lift to garage',
      description: 'My car is in the shop, need a lift there so I can pick it up.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Astronaut required',
      description: 'Need co-pilot to take over while I sleep on excursion to Mars and back.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      // startDate: Date.now(),
      // endDate:
      userId: 3,
      nbHelpers: 1,
      addressId: 3
    }
  });

  await prisma.task.create({
    data: {
      name: 'Boat driver required',
      description: 'I love to waterski, but have no-one to drive the boat since my husband fell overboard last year.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      category: 'Driving',
      // startDate: Date.now(),
      // endDate:
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
      // startDate: Date.now(),
      // endDate:
      userId: 2,
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
      // startDate: Date.now(),
      // endDate:
      userId: 5,
      nbHelpers: 1,
      addressId: 5
    }
  });

  // Create offers ---------------------------------------------------------------
  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 4,
      status: 'OPEN'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 5,
      status: 'PENDING'
    }
  });

  await prisma.offer.create({
    data: {
      userId: 1,
      taskId: 6,
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