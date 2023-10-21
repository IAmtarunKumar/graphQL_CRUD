// const { ApolloServer } = require("apollo-server-express");
const { TodoModel } = require("./model/todoModel");
const { UserModel } = require("./model/userModel");
const { ApolloServer } = require("@apollo/server");
// const { default: axios } = require("axios");
const server = new ApolloServer({
    typeDefs : `
        type User {
            id: ID!
            name: String
            email: String
            phone: String
            userId : String
            
        }

        type Todo {
            id: ID!
            userId : String
            title: String
            completed: String
            user: User 
        }

    

        type Query {
            getTodos: [Todo]
            getTodoById(id : ID!) : Todo
            getAllUsers : [User]
            getUserById(id : ID!) : User
           
        }




        input UserInput {
            userId : String
            name: String
            email: String
            phone: String
          }

        input TodoInput {
            userId : String
            title : String
            completed : String
        }
        
          type Mutation {
            createUser(input: UserInput!): User
            updateUser(id: ID!, input: UserInput!): User
            deleteUser(id:ID!) : User
          }

          type Mutation {
            createTodo(input: TodoInput!): Todo
            updateTodo(id: ID!, input: TodoInput!): Todo
            deleteTodo(id:ID!) : Todo
          }

        
      

    `,
    resolvers: {
      
        //GET TODO DATA AND CREATOR DATA
        Todo : {user : async(todo)=> {
            console.log(todo)
            let userData = await UserModel.findOne({"userId" : todo.userId})
            console.log(userData)
            return userData
        }},

       
        Query : {
         
            
            //GET ALL TODO
            getTodos : async()=>{
                return TodoModel.find()
            },

            //GET TODO BY ID
            getTodoById : async(parent , agr)=>{
                return TodoModel.findOne({"_id" : agr.id})
            },

           
            //GET ALL USER
            getAllUsers : async()=>{
                return UserModel.find()
            },

     

            //GET USER BY ID
            getUserById : async(parent , agr)=>{
                console.log(parent,agr)
                return UserModel.findOne({"_id" : agr.id})
            },
           
        },

        ///
        Mutation: {

            //USER CREATED
            createUser: async (_, { input }) => {
              const user = new UserModel(input);
              await user.save();
              return user;
            },

            //USER UPDATED
            updateUser: async (_, { id, input }) => {
                try {
                    const updatedUser = await UserModel.findByIdAndUpdate(id, input, { new: true });
                    if(!updatedUser){
                        throw new error("User Update failed")
                    }
                    return `${id} : id user data is Update in DB`
                } catch (error) {
                    throw new Error("Failed to update user: " + error.message);
                   
                }
              
              },

            //USER DELETED
            deleteUser : async(_,{id})=>{
                try {
                    const deleteUser = await UserModel.findByIdAndDelete({"_id" : id})
                    if(!deleteUser){
                        throw new error("User delete failed")
                    }
                    return `${id} : id user is delete from DB` 
                } catch (error) {
                    throw new Error("Failed to update user: " + error.message);
                }
           
            },

         
            // TODO CREATED
              createTodo: async (_, { input }) => {
                console.log(input)
                const userIdChecker  = await UserModel.findOne({"userId" : input.userId})
                console.log(userIdChecker)
                if(userIdChecker){
                    const todo = new TodoModel(input);
                    await todo.save();
                    return todo;
                }else{
                    throw new error("userId not found")
                }
              
              },
              // TODO UPDATED
              updateTodo: async (_, { id, input }) => {

                try {
                    const updatedTodo = await TodoModel.findByIdAndUpdate(id, input, { new: true });
                    if(!updatedTodo){
                      throw new error("todo Update failed")
                  }
                    return `${id} : id todo data is Update in DB`
                } catch (error) {
                    throw new Error("Failed to update user: " + error.message);
                }
              
                },
  
              //TODO DELETED
              deleteTodo : async(_,{id})=>{
                try {
                    const deleteUser = await TodoModel.findByIdAndDelete({"_id" : id})
                    if(!deleteUser){
                      throw new error("todo delete failed")
                  }
                    
                    return `${id} : id todo is delete from DB`
                } catch (error) {
                    throw new Error("Failed to update user: " + error.message);
                }
           
              }
  

        }  
    },
  });


  module.exports = {
    server
  }