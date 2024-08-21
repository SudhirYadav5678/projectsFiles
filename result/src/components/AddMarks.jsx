import React, { useEffect } from 'react'

function AddMarks() {
    useEffect(() => {
        document.title = "Result | Marks"
    }, [])
    return (
        <div>AddMarks</div>
    )
}

export default AddMarks