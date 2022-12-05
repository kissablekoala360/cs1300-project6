import React from 'react'

function Accordian(props) {
    const {icon, title, text} = props;
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div style={{marginBottom: 20}}>
            <div className='accordian' onClick={() => toggleOpen(true)}>
                <div className='accordian-icon'>{icon}</div>
                <div className='accordian-title'>{title}</div>
                <div className='accordian-drop' >{open ? "-" : "+"}</div>
            </div>
            {open && (
                <div className='accordian-content'>
                    {text}
                </div>
            )}
        </div>
    )
}

export default Accordian