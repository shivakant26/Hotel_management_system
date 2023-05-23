import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const InputField = ({ label, name, control, placeholder,type, rules }) => {
    return (
      <div>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
              {error && <span className='error'>{error.message}</span>}
            </div>
          )}
        />
      </div>
    );
  };
  

  export default InputField;