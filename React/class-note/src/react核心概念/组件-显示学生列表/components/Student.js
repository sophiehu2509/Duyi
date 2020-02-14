import React from 'react'

export default function Student(props) {
    return (
        <li>
            [姓名]{props.name}
            [姓名]{props.address}
            [姓名]{props.sex}
        </li>
    )
}

