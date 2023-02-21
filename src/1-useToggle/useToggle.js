
import { useState } from 'react'

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    function toogleValue(value) {
        setValue(currentValue => typeof value === 'boolean' ? value : ! currentValue)
    }
  return [value, toogleValue]
}

export default useToggle