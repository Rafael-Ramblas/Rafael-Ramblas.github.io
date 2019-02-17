import React, { useState } from 'react'


const BoxCollapse = (props) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div onClick={() => setIsOpen(!isOpen)} >
            {isOpen ? props.children : "FECHADO MEU BOM"}
        </div>
    )
}

export default BoxCollapse