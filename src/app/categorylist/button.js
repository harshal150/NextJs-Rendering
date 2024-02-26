"use client"

function Button({price}) {

    function clickHandler(){
        alert(price)
    }
    return ( <div>
        <button onClick={clickHandler}>Check Price</button>
    </div> );
}

export default Button;