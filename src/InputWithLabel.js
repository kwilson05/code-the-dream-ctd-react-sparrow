const InputWithLabel = ({id, type="text", value, handleTitleChange, children }) => {
   return  (<>
            <label htmlFor={id}>
                {children}
            </label>
            <input 
            type={type}
            value={value} 
            onChange={handleTitleChange} 
            id={id}/>
            </>);
};

export default InputWithLabel;