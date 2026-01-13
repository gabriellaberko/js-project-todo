export const TaskForm = ({ ref }) => {

  const closeForm = () => {
    ref.current?.close();
  }

  return(
    <dialog ref={ref}>
      <form>
        <h2>Add a new task</h2>
        <label>Task name
          <input type="text" name="name" required />
        </label>
        <label>Task description
          <textarea name="description"/>
        </label>
        <label>Task category
          <select name="category" required>
            <option>Work</option>
            <option>Personal</option>
          </select>
        </label>
        <label>Deadline
          <input type="date" name="deadline" />
        </label>
        <button onClick={closeForm}>Cancel</button>
        <button type="submit">Add task</button>
      </form>
    </dialog>
  );
}