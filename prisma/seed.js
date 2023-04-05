const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// eslint-disable-next-line func-style
async function main() {

  const tycosDr82 = await prisma.address.create({
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
          phone: '636-313-2463',
          stars: 0,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg'
        }
      }
    }
  });

  const leslie1095 = await prisma.address.create({
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
          phone: '416-500-1413',
          stars: 3,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg'
        }
      }
    }
  });

  const eglinton1880 = await prisma.address.create({
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
          phone: '866-987-6453',
          stars: 1,
          avatar: 'https://xsgames.co/randomusers/assets/avatars/female/27.jpg'
        }
      }
    }
  });

  /*
  ------------------------------
  Street:  4263 Rue King
  City:  Sherbrooke
  State/province/area:   Quebec
  Phone number  819-348-1596
  Zip code  J1H 1R4
  Country calling code  +1
  Country  Canada
  ------------------------------
  Street:  950 Hamilton Street
  City:  Elrose
  State/province/area:   Saskatchewan
  Phone number  306-378-0480
  Zip code  S4P 3Y2
  Country calling code  +1
  Country  Canada
  ------------------------------
  Street:  4628 Tycos Dr
  City:  Toronto
  State/province/area:   Ontario
  Phone number  416-888-0978
  Zip code  M5T 1T4
  Country calling code  +1
  Country  Canada
  ------------------------------
  Street:  3360 Port Washington Road
  City:  Banff
  State/province/area:   Alberta
  Phone number  403-763-9439
  Zip code  T0L 0C0
  Country calling code  +1
  Country  Canada
  ------------------------------

  */
  console.log({ tycosDr82, leslie1095 });
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