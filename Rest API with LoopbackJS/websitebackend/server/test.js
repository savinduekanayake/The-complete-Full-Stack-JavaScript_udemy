var models = require('./server.js').models;
/*
// create a new one
models.Profile.create({name: 'Nick1',id:'5e79279d5c41eb5528f9449d'},(err,profile)=>{
    console.log("data?",err,profile);
});

//upsert=>look for existant one. if not create (need id to find)
models.Profile.upsert({name: 'Nick1',id:'5e79279d5c41eb5528f9449d'},(err,profile)=>{
    console.log("data?",err,profile);
});

find if not create
models.Profile.findOrCreate({name: 'Nick2'},(err,profile)=>{
    //update method 1
    if(err){
        console.log("There was an error",err);
    }else if(profile){
        profile.updateAttributes({
            email: "sk.ekanayake1@gmail.com"
        },(updareError,updated)=>{
            console.log("Saved?",updareError,updated);
        })
    }

    //update method 2
    if(err){
        console.log("There was an error",err);
    }else if(profile){
        profile.email = 'sk.ekanayake2@gmail.com';
        profile.save((ue,updated)=>{
            console.log('updated?',updated);
        })
    }
});


var toSave = [
    {name:"SK", email:"sk.ekanayake1@gmail.com"},
    {name:"SK1", email:"sk.ekanayake2@gmail.com"},
    {name:"SK2", email:"sk.ekanayake3@gmail.com"},
    {name:"SK3", email:"sk.ekanayake4@gmail.com"},
    {name:"SK4", email:"sk.ekanayake5@gmail.com"},
    {name:"SK5", email:"sk.ekanayake6@gmail.com"},
    {name:"someone1", email:"sk.ekanayake@gmail.com"},
    {name:"someone2", email:"sk.ekanayake8@gmail.com"},
    {name:"someone3", email:"sk.ekanayake9@gmail.com"},
    {name:"someone4", email:"sk.ekanayake10@gmail.com"},
    {name:"someone5", email:"sk.ekanayake11@gmail.com"},

];


toSave.map(obj => {
    models.Profile.create(obj,(err,created)=>{
        console.log("created?",created);
    })
})


var filter = {
    where: {}, //kind of like MYSQL where clause
    order: 'date ASC', //order by
    limit: 3, //how many to return
    include: {
        relation: 'Posts',
        scope: {
            limit: 5,
            order: 'date DESC',
            include: {
                relation: 'Image',
                limit: 1,
                where: {type: 'thumbnail'}
            }
        }
    }
}
*/

/*
//quary a instance
var filter = {
    where: {
        name:{like:"SK"},
        email: {like:'sk'},
        // postCount: {gt:10}
    }, //kind of like MYSQL where clause
    order: 'id ASC', //order by
    limit: 10, //how many to return
    skip: 3, //skip first 3 result
    fields: {
        email:true
    }
}

models.Profile.find(filter, (err,found)=>{
    console.log("found?",err,found)
})


models.Profile.findById("5e792d8346d1b85ad87addf3",filter, (err,found)=>{
    console.log("found?",err,found)
})
*/


/*
//delete data
var filter = {
    where: {
        name:{like:"SK"},
        email: {like:'sk'},
        // postCount: {gt:10}
    }, //kind of like MYSQL where clause
    order: 'id ASC', //order by
    limit: 10, //how many to return
    skip: 3, //skip first 3 result
    fields: {
        email:true
    }
}

models.Profile.findById("5e792d8346d1b85ad87addf3", (err,found)=>{
    console.log("found?",err,found);
    found.destroy();
});

models.Profile.destroyAll(filter.where, (err,found)=>{
    console.log("found?",err,found);
    
});
models.Profile.destroyById("5e7925160e47067708dc214c", (err,found)=>{
    console.log("found?",err,found);
    
});
*/



