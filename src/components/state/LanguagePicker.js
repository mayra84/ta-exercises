import React, { useState } from 'react'

function LanguagePicker() {
    const [showOptions, setShowOptions] = useState(false)
    const [flag, setFlag] = useState('🇺🇸')

    const handleToggle = () => {
        setShowOptions(!showOptions)
    }

    const languages = [
        '🇺🇸',
        '🇦🇺',
        '🇬🇧',
        '🇰🇷',
        '🇯🇵',
        '🇨🇳',
        '🇪🇸',
        '🇲🇽',
        '🇩🇪',
        '🇨🇭',
        '🇫🇷',
        '🇮🇹'
    ];


    const handlePick = (picked) => {
        setFlag(picked)
        setShowOptions(false)
    }

    return (
        <div>
            <button onClick={handleToggle}>{flag}</button>
            <br></br>
            {showOptions && (
                <span>
                    {languages.map((language, i) => {
                        if (language === flag) {
                            return null
                        }
                        return (
                            <button key={i} onClick={() => handlePick(language)}>{language}</button>
                        )
                    })}</span>
            )}

        </div>
    )
}

export default LanguagePicker