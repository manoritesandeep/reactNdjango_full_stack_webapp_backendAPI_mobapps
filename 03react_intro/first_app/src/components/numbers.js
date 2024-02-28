import React, {useState, useEffect} from "react";

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three'])
    const [letters, setLetters] = useState(['a', 'b', 'c'])

    const nextNumber = () => {
        setNumbers([...numbers, 'four'])
    }

    const nextLetter = () => {
        setLetters([...letters, 'd'])
    }

    useEffect( () => {
        console.log('Our use effect triggers for specified funcs (numbers, letters).')
    }, [numbers, letters])

    return (
        <div>
            <h1>Numbers</h1>
            {
                numbers.map( num => {
                    return (
                        <div key={num}>
                            <h4>{num}</h4>
                        </div>
                    )
                })
            }
            {/* add button */}
            <button onClick={nextNumber}> Click to get next a number in object. </button>
            <h1>Letters</h1>
            {
                letters.map(letter => {
                    return (
                        <div key={letter}>
                            <h4>{letter}</h4>
                        </div>
                    )
                })
            }
            {/* add button */}
            <button onClick={nextLetter}> Click to get next letter from object. </button>
        </div>
    )
}


export default Numbers;