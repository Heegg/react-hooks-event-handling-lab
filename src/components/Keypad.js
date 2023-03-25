// Code Keypad Component Here

function Keypad(){

    function makeKeyPad() {
        console.log('Entering password...')
    }

    return (
        <div>
            <input 
            type="password" 
            onChange={makeKeyPad}
            />
        </div>
    )
}

export default Keypad;

