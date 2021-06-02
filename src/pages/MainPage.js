import React, {useState} from "react"

// import styles from "../assets/MainPage.module.css"

const MainPage = ({title, action}) => {
    const [text, setText] = useState("");
    //1st way to solve task 3
    // const [name, setName] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [otchestvo, setOtchestvo] = useState("");
    //2nd way to solve task 3
    const [data, setData] = useState({
        name: '',
        lastname: '',
        otchestvo: ''
    });

    const handleChange = (event) => {
        const copy = {...data};
        copy[event.target.name] = event.target.value;
        setData(copy);
    }
    const [res, setRes] = useState(false);
    const handleClick = (e) => setRes(true);

    const ShowOnClick = () => {
        return (
            <div>
                <p>{data.name}-{data.lastname}-{data.otchestvo}</p>
            </div>
        )
    }
    //task 5
    const [colors] = useState(["red","blue","yellow","#cf7500"])
    const [currentColor, setCurrentcolor] = useState("");
    //task 6
    const [isShow, setShow] = useState(true);
    return (
        <div>
            {/*    task 1*/}
            <p>{text}</p>
            <input onChange={event => setText(event.target.value)} type="text"/>
            {/*    task 2*/}
            <p>{text.toUpperCase()}</p>
            {/* 1st way   task 3*/}
            {/*<p>{name}-{lastname}-{otchestvo}</p>*/}
            {/*<input onChange={event => setName(event.target.value)} type="text"/>*/}
            {/*<input onChange={event => setLastname(event.target.value)} type="text"/>*/}
            {/*<input onChange={event => setOtchestvo(event.target.value)} type="text"/>*/}
            <br/>
            {/*    2nd way task 3*/}
            {/*<input name={"name"} onChange={event => handleChange(event)} type="text"/>*/}
            {/*<input name={"lastname"} onChange={event => handleChange(event)} type="text"/>*/}
            {/*<input name={"otchestvo"} onChange={event => handleChange(event)} type="text"/>*/}
            {/*    task 4*/}
            <p>task 4</p>
            <input name={"name"} onChange={event => handleChange(event)} type="text"/>
            <input name={"lastname"} onChange={event => handleChange(event)} type="text"/>
            <input name={"otchestvo"} onChange={event => handleChange(event)} type="text"/>
            <button onClick={handleClick} type={"button"}>Submit</button>
            {res ? <ShowOnClick/> : null}
            <p>task 5</p>
            <p style={{backgroundColor:currentColor}}>color</p>
            <select onChange={(event => setCurrentcolor(event.target.value))} name="" id="">
                {/* eslint-disable-next-line array-callback-return */}
                {colors.map((el,index)=>(
                    <option key={index} value={el}>{el}</option>
                ))}
            </select>
            <p>task 6</p>
            {isShow && (
                <p>I am visible</p>
            )}

            <input checked={isShow} onChange={() => setShow(!isShow)} type="checkbox"/>
        </div>
    )
}


export default MainPage;