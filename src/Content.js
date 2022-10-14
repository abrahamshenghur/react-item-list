import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'dave', 'tim'];
        const int = Math.floor(Math.random() * 3);
        console.log(int)
        return names[int];
    }
      
    return (
        <main>
            <p>Hello {handleNameChange()}</p>
        </main>
    )
}

export default Content