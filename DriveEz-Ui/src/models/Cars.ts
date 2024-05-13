interface Cars {
    make: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    registrationNo: {
        type: String,
        require: true
    },
    availableStatus: {
        type: String,
        require: true
    }
}
// export const courses: Cars[] = [
//     {
//         _id: '1',
//         name: 'INFO 6150',
//         instructor: 'Amuthan',
//         location: {
//             room: '102',
//             building: 'Shillman'
//         },
//         schedule: {
//             startTime: 'Wed 6:10 PM',
//             endTime: 'Wed 9:40 PM'
//         }
//     }
// ];
export default Cars;