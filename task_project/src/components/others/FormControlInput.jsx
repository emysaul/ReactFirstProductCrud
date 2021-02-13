import HorizontalInput from './HorizontalInput';
import SingleInput from './SingleInput';

export default ({value, name, onChangeMethod, placeholder, icon, title, required = false, autoComplete="off", type = 'text', smTitle=2, smCol=10, mode="single"}) => {
    let input = null
    switch (mode) {
        case "single":
            input = <SingleInput 
                    value={value}
                    onChangeMethod={onChangeMethod}
                    type={type}
                    placeholder={placeholder}
                    icon={icon}
                    name={name}
                    autoComplete={autoComplete}
                    required={required}/>
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
                smCol={smCol}
                name={name}
                autoComplete={autoComplete}
                required={required}/>
        break;
    } 
    return input;
}

