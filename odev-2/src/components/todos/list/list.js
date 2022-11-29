import { useState, useEffect } from 'react'

function List({ toDoList, editToDoList }) {

    // Checkbox tıklandığında check = false yapan fonksyon
    const onChangeCheckbox = (index) => {
        toDoList[index].check = !toDoList[index].check
        editToDoList([...toDoList])
    }

    const [buttonIndex, setButtonIndex] = useState(1)
    const [filterList, setFilterList] = useState(toDoList)

    // Bunun nedeni listeye eleman eklendiğinde filtered 
    // listesini güncellemektir hangi butonda kalmışsa ona göre
    useEffect(() => {
        console.log('fkjghvj')
        if (buttonIndex == 1)
            allButton()
        else if (buttonIndex == 2)
            activeButton()
        else
            completed()
    }, [toDoList])


    // Alttaki üç filterList listesini değiştidi sadece
    const allButton = () => {
        setButtonIndex(1)
        setFilterList(toDoList);
    }
    const activeButton = () => {
        setButtonIndex(2)
        setFilterList(toDoList.filter(item => !item.check))
    }
    const completed = () => {
        setButtonIndex(3)
        setFilterList(toDoList.filter(item => item.check))
    }

    // Alttaki iki direkt asıl listeyi değiştirdik
    // üstü çizi olan tüm elemanları siliyor
    const clearAllCompleted = () => {
        editToDoList(toDoList.filter(item => !item.check))
    }

    // Çarpıya basarak sildiğimiz herhangi bir elaman
    const removeThisElement = (index) => {
        editToDoList([...toDoList.slice(0, index), ...toDoList.slice(index + 1, (toDoList.length))])
    }


    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        filterList.map((item, index) => (
                            <li key={index} className={item.check ? "completed" : ""}>
                                <div className="view">
                                    <input className="toggle"
                                        checked={item.check}
                                        type="checkbox"
                                        onChange={() => onChangeCheckbox(index)} />
                                    <label>{item.note}</label>
                                    <button className="destroy"
                                        onClick={() => removeThisElement(index)}>
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>

            <footer className="footer">
                <span className="todo-count">
                    <strong>{filterList.length}  </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a href="#/" className={buttonIndex == 1 ? "selected" : ""}
                            onClick={allButton}>All</a>
                    </li>
                    <li>
                        <a href="#/" className={buttonIndex == 2 ? "selected" : ""}
                            onClick={activeButton}>Active</a>
                    </li>
                    <li>
                        <a href="#/" className={buttonIndex == 3 ? "selected" : ""}
                            onClick={completed}>Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={clearAllCompleted}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default List