import React from "react";
import style from "./CustomButton.module.scss"

interface Props {
    children?: React.ReactNode;
    background?: string;
    color?: string;
    padding?: string,
    radius?: string,
    onClick?: () => void;
    filter?: string;
}

const CustomButton: React.FC<Props> = ({children, background,color, padding, radius, filter, onClick}) => {
    return (
        <button onClick={onClick}
                style={{background: background, backdropFilter: filter, color: color, padding: padding, borderRadius: radius}}
                className={style.button}
        >
            {children}
        </button>
    );
};

export default CustomButton;