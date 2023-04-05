const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// eslint-disable-next-line func-style
async function main() {

  // Create skills -----------------------------------------------------------
  await prisma.skill.create({
    data: {
      name: 'Cooking',
    }
  });
  
  await prisma.skill.create({
    data: {
      name: 'Animal Care',
    }
  });

  await prisma.skill.create({
    data: {
      name: 'DIY',
    }
  });
  
  await prisma.skill.create({
    data: {
      name: 'Yardwork',
    }
  });

  await prisma.skill.create({
    data: {
      name: 'Driving',
    }
  });
  
  await prisma.skill.create({
    data: {
      name: 'Heavy Lifting',
    }
  });

  // Create users with addresses and skills ----------------------------------
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
          Skills: {
            create: {
              name: 'Yardwork'
            }
          }
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
          Skills: {
            create: [
              { name: 'Driving' },
              { name: 'Cooking' }
            ]
          }
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
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg'
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
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/27.jpg'
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

  // Create categories -----------------------------------------------------------
  await prisma.category.create({
    data: {
      name: 'Cooking',
    }
  });

  await prisma.category.create({
    data: {
      name: 'Animal Care',
    }
  });

  await prisma.category.create({
    data: {
      name: 'DIY',
    }
  });
  
  await prisma.category.create({
    data: {
      name: 'Yardwork',
    }
  });

  await prisma.category.create({
    data: {
      name: 'Driving',
    }
  });
  
  await prisma.category.create({
    data: {
      name: 'Heavy Lifting',
    }
  });

  // Create tasks ----------------------------------------------------------------
  await prisma.task.create({
    data: {
      name: 'Take out bins',
      description: 'Move bins to the bottom of the driveway for collection.',
      image: 'https://images.unsplash.com/photo-1635614986085-bf0d7a4ae4da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      categoryId: 6,
      // startDate: Date.now(),
      // endDate:
      userId: 1,
      nbHelpers: 1,
      addressId: 1
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