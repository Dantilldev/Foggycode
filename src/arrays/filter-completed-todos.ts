function completedTodos(
  todos: {id: number; title: string; completed: boolean}[]
): {id: number; title: string; completed: boolean}[] {
  // TODO: return a NEW array of only completed todos
  return todos.filter((todo) => todo.completed === true);
}

console.log(
  completedTodos([
    {id: 1, title: "A", completed: true},
    {id: 2, title: "B", completed: false},
  ])
); // [{ id: 1, title: 'A', completed: true }]

// Your Task
// Complete completedTodos(todos: { id: number; title: string; completed: boolean }[]): { id: number; title: string; completed: boolean }[].
// Do not mutate the input array.
// Examples
// completedTodos([{ id: 1, title: 'A', completed: true }, { id: 2, title: 'B', completed: false }]) → [{ id: 1, title: 'A', completed: true }]
