import HorizontalInput from './HorizontalInput';
import SingleInput from './SingleInput';

export default ({value, onChangeMethod, type = 'text', placeholder, icon, title, smTitle=2, smCol=10, mode="single"}) => {
    let input = null
    switch (mode) {
        case "single":
            input = <SingleInput 
                    value={value}
                    onChangeMethod={onChangeMethod}
                    type={type}
                    placeholder={placeholder}
                    icon={icon} />
        break;
        case "horizontal":
            input = <HorizontalInput
                value={value}
                onChangeMethod={onChangeMethod}
                type={type}
                placeholder={placeholder}
                icon={icon}
                title={title}
                smTitle={smTitle}
                smCol={smCol} />
        break;
    } 
    return input;
}

