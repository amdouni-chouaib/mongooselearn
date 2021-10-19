const Person = require("../module/personSchema")

const save_person = async () => {
    const person = new Person({
        name : "chouaib",
        age : 20 , 
        favoriteFood : ["Margarine" , "Pizza"]
    })

    try {
        await person.save(() => {
            console.log("person was craeted")
        })
    } catch (err) {
        console.log(err)
    }
}
const find_multi_peoples = async()=>{
    try {
        await Person.find({},(res)=>{
            console.log(res)
        })
    } catch (err) {
        console.log(err)
    }
}


const Find_One_Person = async () => {
    try {
        await Person.findOne({ favoriteFoods: "Bread" }, (err, data) => {
            if (err) throw err;
            console.log("one person  finded \n", data);
        });
    } catch (err) {
        console.log(err);
    }
};


const create_multiple_people = async()=>{
const ManyPeople = [
    {
        name: "person1",
        age: 2020,
        favoriteFoods: ["Steak", "Seafood", "burritos"],
    },
    {
        name: "person2",
        age: 60,
        favoriteFoods: ["Bread", "Steak"],
    },
    {
        name: "person3",
        age: 14,
        favoriteFoods: ["Fish", "Pizza", "burritos"],
    },
    {
        name: "person4",
        age: 19,
        favoriteFoods: ["Pizza", "Steak"],
    },
    { name: "Mary", age: 20, favoriteFoods: ["Pizza", "Steak"] },
    { name: "Mary", age: 30, favoriteFoods: ["Fish", "Steak"] },
    { name: "Mary", age: 10, favoriteFoods: ["Pizza", "Bread"] },
];
try {
    Person.create(ManyPeople, () => {
        console.log("Many Person added succesfully !!!");
    });
} catch (err) {
    console.log(err);
}
};
const find_By_Id = async () => {
    try {
        await Person.findById("610019d17795d217785f3d6b", (err, data) => {
            console.log("find a person by Id\n", data);
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Perform Classic Updates by Running Find, Edit, then Save

const Updating = async () => {
    try {
        Person.findByIdAndUpdate(
            "610019d17795d217785f3d6b",
            { $push: { favoriteFoods: "hamburger" } },
            (err, data) => {
                console.log(data);
            }
        );
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Perform New Updates on a Document Using model.findOneAndUpdate()

const New_Update = async () => {
    try {
        await Person.findOneAndUpdate(
            { name: "person1" },
            { age: 40 },
            (err, data) => {
                console.log(data);
            }
        );
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Delete One Document Using model.findByIdAndRemove

const Delete_One = async () => {
    try {
        await Person.findByIdAndRemove(
            "610019d17795d217785f3d6d",
            (err, data) => {
                console.log(data);
            }
        );
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// MongoDB and Mongoose - Delete Many Documents with model.remove()

const Delete_Many = async () => {
    try {
        await Person.deleteMany({ name: "Mary" }, (err, data) => {
            console.log(data);
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Chain Search Query Helpers to Narrow Search Results

const Chain_Search_Query = async () => {
    Person.find({ favoriteFoods: "burritos" }) // find Person
        .limit(2) // limit to Two
        .sort({ name: 1 }) // sort ascending by name
        .select({ age: false }) // Make age hidden
        .exec((err, data) => {
            if (err) {
                console.log(err);
            } else console.log(data);
        });
};

module.exports = {save_person,
                find_multi_peoples,create_multiple_people,Find_One_Person,Updating,New_Update
                 ,Delete_One,Delete_Many,Chain_Search_Query   }