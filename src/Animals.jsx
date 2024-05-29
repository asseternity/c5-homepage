function ListItem(props) {
    return (<li>{props.animal}</li>)
}

function List(props) {
    if (!props.animals) {
        return <div>Loading...</div>
    }

    if (props.animals.length === 0) {
        return <div>There are no animals in the list!</div>
    }

    return (
        <ul>
            {props.animals.map((i) => {
                return i.startsWith("c") && <li key={i}>{i}</li>;
            })}
        </ul>
    );
}

function Animals() {
    const animals = ['cow', 'lion', 'tiger', 'bee', 'crocodile'];

    return (
        <div>
            <h1>Animals:</h1>
            <ul>
                <List animals={animals} />
            </ul>
        </div>
    );
}

export default Animals;