import data from './rawBooks.json' assert { type: 'json' };


fetch('./rawBooks.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


// # of books read 
//     var y = 0 
// for ( var x = 0; x < data.length; x++){
//     // console.log(data[x]['read?']);
//     if (data[x]['read?']== 'Yes'){
//         y = y + 1;
//     }
    
// }
// console.log("Mx. Bradford has read " + y +  " books"); 


// Largest Genre/ catagory 


// const genre = []; 

// for (var c = 0; c < data.length; c++){
//     if (!genre.includes((data[c]['category']))){
//  genre.push(data[c]['category']);
// }
 
// }


// const count = []; 
// count.legnth = 44; 

// for (var o = 0; o < 44; o++){
//     count[o] = 0; 
// }

// for (var t = 0; t < data.length; t++){
//     for (var u = 0; u < 44; u++){
//         if (data[t]['category'] === genre[u]){
//         count[u] = count[u] + 1; 
//      }
//     }
// }

// var MaxGenre = count.indexOf(Math.max(...count)); 

// console.log("the largest genre that Mx. B has is " + genre[MaxGenre] + ". They have " + Math.max(...count) + " " + genre[MaxGenre] + " books");

// % of books that have audio Books 

// var audioCount = 0; 

// for ( var x = 0; x < data.length; x++){
//         if (data[x]['audio?']== 'Yes'){
//             audioCount = audioCount + 1; 
//         }
// }

// console.log("Out of " + data.length +" books, " + audioCount + " have audio books. Meaning that " + (Math.round((audioCount/data.length)*100))+ "% have audio books"); 

// What book was read most recently (not sure how to start this if its like a string. How can you sort a string like this)





const dateData = data.filter(e => e["read?"] === "Yes" && e["Time on TBR (days)"] > 0);

const dateData2 = dateData.filter(e => //{
    e["Date Read"].split(" ")[2]>2022 
    
)

const readMarch = []; 

for (var x = 0; x < dateData2.length; x++){
    if(dateData2[x]["Date Read"].split(" ")[0].includes("March")){
        readMarch.push(dateData2[x]["Date Read"].split(" ")[1]); 

    }
} 

for (var y = 0; y < readMarch.length; y++){
readMarch[y] = readMarch[y].replace(',','');
readMarch[y]= Number(readMarch[y]); 
}

console.log(readMarch.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})); 

var latestDate = Math.max(...readMarch); 

for (var t = 0; t < readMarch.length; t++){
    if (readMarch[t]== latestDate){
        

    }
}



// dateData2[x]["Date Read"].split(" ")[0]+ " " + 

// for (var x = 0; x < dataData.length; x++ ){

// }

// What book has sat on TBR the longest before Mx. B finished it 








