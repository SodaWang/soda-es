import {forwardRef} from 'react';

export interface PixiWrapperProps {}

const PixiWrapper = forwardRef<HTMLDivElement, PixiWrapperProps>((props, ref) => {

    return (
        <div ref={ref}>
            pixi wrapper
        </div>
    );
});

export default PixiWrapper;