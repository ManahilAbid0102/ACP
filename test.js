let objArr=[
    {
        fruit: 'banana',
        quantity: 12
    },
    {
        fruit: 'orange',
        quantity: 16
    },
    {
        fruit: 'apple',
        quantity: 1
    },
    {
        fruit: 'rambutan',
        quantity: 6
    },
];
function print_data(data){
    console.log(data);
}
let new_arr = objArr.map(print_data);
console.log(new_arr);