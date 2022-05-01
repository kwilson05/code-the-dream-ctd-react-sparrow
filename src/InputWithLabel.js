const InputWithLabel = ({id, type="text", value, handleTitleChange, children, isFocused }) => {
   return  (<>
            <label htmlFor={id}>
                {children}
            </label>
            <input 
            type={type}
            value={value} 
            onChange={handleTitleChange} 
            autoFocus={isFocused}
            id={id}/>
            </>);
};

export default InputWithLabel;