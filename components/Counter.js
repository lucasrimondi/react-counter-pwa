const Counter = () => {

    const [counter, setCounter] = React.useState(0);
    
    const add = () => setCounter(counter + 1);
    const subtract = () => setCounter(counter - 1);
    const reset = () => setCounter(0);


    return (
    <div>
        <h1 className={ counter < 0 ? "negative" : "positive" }>Counter: { counter }</h1> 
        <hr />

        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <br></br>
        <br></br>
        <button onClick={reset}>Reset</button>


    </div>
    ); //Click in capital letter is a React feature
    //It is used "className" instead of class to avoid confussion with javascript "class"
};