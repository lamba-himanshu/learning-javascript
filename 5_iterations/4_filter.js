//filter returns the accessed value from array
const nums = [1,2,3,4,5,6,7,8,9,10];
//const values = nums.filter( (item) => item >= 3  ) //return an array with values >= 3

const values=nums.filter( (i)=> {
    return i>=3;
})
//console.log(values);   //[3, 4, 5,  6, 7, 8, 9, 10]

const user=[
    {   userName:"himanshu", userId: 100, cityName:"delhi",salary: 100000},
    {   userName:"sumit", userId: 101, cityName:"mumbai",salary: 150000},
    {   userName:"amit", userId: 200, cityName:"delhi",salary: 40000},
    {   userName:"raghav", userId: 102, cityName:"jaipur",salary: 60000},
    {   userName:"sunil", userId: 103, cityName:"mumbai",salary: 200000},
];

const userCity=user.filter( (city) => city.cityName === "delhi" );
const userDetails = user.filter( (val)=> {
    return val.cityName=== "mumbai" && val.salary >=100000;
});
console.log(userDetails);
