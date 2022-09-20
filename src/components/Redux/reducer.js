const initialState = {
   part3 : JSON.parse(localStorage.getItem("part3")) || [],
   part1 : JSON.parse(localStorage.getItem("part1")) || [],
   part2 : JSON.parse(localStorage.getItem("part2")) || []
};


export const partData = (state = initialState, { type, payload }) => {
   console.log(payload)
   switch (type) {
      case "PART1":
         return {
            ...state,
            part1 : payload 
         };

      case "PART2":
         return {
            ...state,
            part2: payload
         };

      case "PART3":
         return {
            ...state,
            part3: [ ...state.part3, payload]
         };
         
      default:
         return state;
   }
}



// const setPersist = todos =>
//     window.localStorage.setItem("todos2", JSON.stringify(todos));

// export const addTodo = (state = initState, action) => {
//     switch (action.type) {
//         case "PERSIST_TODOS":
//             const todos = JSON.parse(window.localStorage.getItem("todos2"));
//             return { 
   // ...state, 
   // todos: todos ? todos : [] 
// };
//         case "ADD_TEXT":
//             return { ...state, text: action.payload };
//         case "ADD_TODO":
//             const todos2 = state.todos.concat(action.payload);
//             window.localStorage.setItem("todos2", JSON.stringify(todos2));
//             return { ...state, todos: todos2, text: "" };
//         case "DELETE_TODO":
//             const todo3 = state.todos.filter((todo, i) => i !== action.payload);
//             setPersist(todo3);
//             return {
//                 ...state,
//                 todos: todo3
//             };
//         case "EDIT_TODO":
//             return {
//                 ...state,
//                 text: state.todos[action.payload],
//                 selected: action.payload
//             };
//         case "EDIT_ADD_TODO":
//             const todo4 = state.todos.map((todo, i) =>
//                 i !== action.payload.selected ? todo : action.payload.value
//             );
//             setPersist(todo4);
//             return {
//                 ...state,
//                 todos: todo4,
//                 selected: undefined,
//                 text: ""
//             };
//         case "DELETE_ALL":
//             setPersist([]);
//             return { ...state, todos: [], text: "" };
//         default:
//             return state;
//     }
// };
