const barbieMovies = [
    { name: "Swan lake", year: 2001 },
    { name: "Princess and the pauper", year: 2008 },
    { name: "Fairies", year: 2014 },
];

const ratedBarbieMovies = barbieMovies.map((movie) => {
    movie.rating = 10;
    return movie;
});

const recentBarbieMovies = barbieMovies.filter(movie => movie.year > 2005);

/* Loop Advice
Only use for loops if you are doing "finger counting". 
I.E. counting to a number. 

Don't use enhanced for loops. 

Only use forEach if you are doing something and don't care about the result. 
I.E. populating the DOM with elements. 

Always prefer functional loop methods such as:
map, filter and reduce. 

Map for mapping 1:1
Filter for filtering the array. 
Reduce to reducing the content of the array. 
*/