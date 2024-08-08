import {
  InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    wrapperClassName?: string;
}

const Input = memo(({
  className, wrapperClassName, type = 'text', autoFocus, ...props
} : InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, []);

  return (
    <div className={classNames(classes.InputWrapper, {}, [wrapperClassName])}>
      <input ref={inputRef} className={classNames(classes.Input, {}, [className])} type={type} {...props} />
      <span className={classes.FocusBorder} />
    </div>
  );
});

export default Input;
