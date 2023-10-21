# GraphQL Server

This is a simple GraphQL server built using Apollo Server, MongoDB, and Mongoose. The server provides APIs for managing users and todos.

## Features

- Create, Read, Update, and Delete Users
- Create, Read, Update, and Delete Todos
- Fetch all Todos with associated User data
- Error handling and validation

## Getting Started

### Prerequisites

- Node.js (>=12.0.0)
- MongoDB

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/IAmtarunKumar/graphQL_CRUD.git


2. Install dependencies:

   ```bash
   npm install

3. Run server:

   ```bash
   npm run server

4. Run server:

   ```bash
   Access the GraphQL playground at : http://localhost:{Your_Port}/graphql




## Features

- **User Schema**
  - `id`: User ID
  - `name`: User's name
  - `email`: User's email
  - `phone`: User's phone number
  - `userId`: User's unique identifier

- **Todo Schema**
  - `id`: Todo ID
  - `userId`: User ID associated with the Todo
  - `title`: Todo title
  - `completed`: Todo completion status
  - `user`: User data associated with the Todo

## Queries

<img src="./img//get_all_todo.png" alt="">

- `getTodos`: Retrieve all Todos.  
  Sample Query:
  ```graphql
  query {
    getTodos {
      id
      title
      completed
    }
  }




<hr>



<img src="./img//get_todo_by_id.png" alt="">

- `getTodoById(id: ID!)`: Retrieve Todo by ID.  
  Sample Query:
  ```graphql
  query ExampleQuery( $getTodoByIdId: ID!) {
    getTodoById(id: $getTodoByIdId) {
    title
    completed 
    id
    }
 
}
  

<hr>


<img src="./img//get_all_user.png" alt="">

- `getAllUsers`: Retrieve all users.  
  Sample Query:
  ```graphql
  query ExampleQuery {
    getAllUsers {
    email
    name
    phone
    id
    }
 
}



<hr>

<img src="./img//get_user_by_id.png" alt="">

- `getUserById(id: ID!)`: Retrieve user by ID.  
  Sample Query:
  ```graphql
        query ExampleQuery($getUserByIdId: ID!) {
        getUserById(id: $getUserByIdId)
        {
        name
        email
        phone 
        id
        }
 
}
  


## Mutations

<img src="./img//create_user.png" alt="">

- `createUser(input: UserInput!)`: Create User.  
  Sample Query:

  ```graphql
  mutation Mutation(  $input: UserInput!) {
    createUser(input: $input) {
    name email phone id
    }
    }





<hr>
<img src="./img//update_user.png" alt="">

- `updateUser(id: ID!, input: UserInput!)`: Update User.  
  Sample Query:

  ```graphql
  mutation Mutation(   $updateUserId: ID!,  $updateUserInput2: UserInput!) {
    updateUser(id: $updateUserId, input: $updateUserInput2) {
    name

    }
    }


<hr>

<img src="./img//delete_user.png" alt="">

- `deleteUser(id: ID!)`: Delete User.  
  Sample Query:

  ```graphql
  mutation($deleteUserId: ID!){
  deleteUser(id: $deleteUserId) {
    name
        }
    }





<hr>



<img src="./img//create_todo.png" alt="">

- `createTodo(input: TodoInput!)`: Create Todos.  
  Sample Query:

  ```graphql
  mutation Mutation($input: TodoInput!) {
  createTodo(input: $input) {
    title
    completed
    userId
  }
}


<hr>

<img src="./img//update_todo.png" alt="">


- `updateTodo(id: ID!, input: TodoInput!)`: Update todo.  
  Sample Query:
  ```graphql
    mutation Mutation( $updateTodoId: ID!, $input: TodoInput!) {
    updateTodo(id: $updateTodoId, input: $input) {
    title
 }
}




<hr>

<img src="./img//delete_todo.png" alt="">


- `deleteTodo(id: ID!)`: delete Todos.  
  Sample Query:
  ```graphql
        mutation Mutation($deleteTodoId: ID!) {
        deleteTodo(id: $deleteTodoId) {
            title
  }
}



<hr>

## Error Handling

All mutations have proper error handling to provide meaningful error messages.



 

