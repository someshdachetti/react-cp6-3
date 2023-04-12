// Write your code here
import './index.css'

const TodoItem = props => {
  const {all, onDelete} = props
  const {id, title} = all
  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <div className="titles">
      <p className="heading">
        {title}
        <button type="button" onClick={onDeleteButton} className="button">
          Delete
        </button>
      </p>
    </div>
  )
}
export default TodoItem
