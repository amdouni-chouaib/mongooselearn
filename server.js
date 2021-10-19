const connectDB = require("./config/db")
// DATA BASE CONNECT 
connectDB()

const {save_person,
    find_multi_peoples,create_multiple_people,
    Find_One_Person,Updating,New_Update
    ,Delete_One,Delete_Many,Chain_Search_Query
      } = require("./controllers/person.controllers")

// create a person
  //    save_person()
//  console.log(save_person())
// find all peoples
 //find_multi_peoples()
 //console.log(find_multi_peoples())
// find one person 
// Find_One_Person()
// console.log(Find_One_Person())
// create multiple person
// create_multiple_people()
// console.log(create_multiple_people())
// update 
//Updating()
//new update 
//New_Update()
// delete one person     
//Delete_One()
//delete many persons 
//Delete_Many()
//chain search
//Chain_Search_Query()