const fs = require('fs');
// const csvWriter = require('csv-write-stream');
// let writer = csvWriter();
let faker = require('faker');
let casual = require('casual');
let counter = 0;
//open path to write it 
const writer = fs.createWriteStream('generateData.csv', { flags: 'a' });

// const dataGen = () => {
//     for (let i = 0; i < 10000000; i++) {
//         for (let j = 0; j < 10; j++) {
//             let seed = [i, counter++, faker.lorem.words(2), faker.image.food(), 
// casual.date(format = 'YYYY-MM-DD'), faker.random.number(1)];
//             let seeded = seed.join(',') + '\n';
//             writer.write(seeded);
//         }
//     }
//     writer.end();
//     console.log('done');
// };

// dataGen();


function seed10Mil(writer) {
    let i = 10000000;

    function write() {
        let ok = true;

        do {
            let seeded = '';
            for (let j = 0; j < 10; j++) {
                let seed = [i, counter++, faker.image.imageUrl(), casual.date(format = 'YYYY-MM-DD')];
                seeded += seed.join(',') + '\n';
            }
            i--;
            if (i === 0) {
                writer.write(seeded);
            } else {
                ok = writer.write(seeded);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            writer.once('drain', write);
        }
    }
    write()
}
seed10Mil(writer)




// rest_id: i,
// photo_id: counter++,
// rest_name: faker.company.companyName(),
// image: faker.image.food(),
// timestamp: casual.date(format = 'YYYY-MM-DD'),
// dislike: faker.random.number(1)