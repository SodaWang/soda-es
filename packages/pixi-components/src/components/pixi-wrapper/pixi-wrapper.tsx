import {forwardRef} from "react";

export interface PixiWrapperProps {

}

const PixiWrapper = forwardRef<HTMLDivElement, PixiWrapperProps>((props, ref) => {

    return (
        <div ref={ref}>
            PIXI_WRAPPER
        </div>
    )
});

export default PixiWrapper;