import "./List.css"
// import {BsTrash} from "react-icons/bs"
// import {MdOutlineEditNote} from "react-icons/md"



const List = ({data,isDone,onChecked,id,onDelete,onEdit}) => {

    const handleChange = () => {
            onChecked(id)
    }
    const handleDelete = () => {
        onDelete(id)
    }
    const handleEdit = () => {
        onEdit(id)
    }

    return (
        <div className={`container ${isDone && "done"}` }>
            <div className="textContainer">
                <input checked={isDone} onChange={handleChange} type="checkbox" />
                <p>{data}</p>
            </div>
            <div className="btnContainer">
                <button onClick={handleDelete}>
                    {/*<BsTrash/>*/}
                </button>
                <button onClick={handleEdit}>
                    {/*<MdOutlineEditNote/>*/}
                </button>
            </div>
        </div>
    )
}

export default List