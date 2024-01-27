import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
    const className = [props.className, props.isPrimary && "bg-blue-500 text-white", props.isLarge && "text-lg", props.isSmall && "text-sm", props.isBlock && "block", props.hasShadow && "shadow"].filter(Boolean).join(" ");

    const onClick = () => {
        if (props.onClick) props.onClick();
    };

    if (props.isDisabled || props.isLoading) {
        return (
            <span className={className} style={props.style}>
                {props.isLoading ? (
                    <>
                        <span className="spinner-border spinner-border-sm mx-5"></span>
                        <span className="sr-only">Loading...</span>
                    </>
                ) : (
                    props.children
                )}
            </span>
        );
    }

    if (props.type === "link") {
        if (props.isExternal) {
            return (
                <a href={props.href} className={className} style={props.style} target={props.target === "_blank" ? "_blank" : undefined} rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
                    {props.children}
                </a>
            );
        } else {
            return (
                <Link to={props.href} className={className} style={props.style} onClick={onClick}>
                    {props.children}
                </Link>
            );
        }
    }

    return (
        <button className={className} style={props.style} onClick={onClick}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    href: propTypes.string,
    onClick: propTypes.func,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isExternal: propTypes.bool,
    isPrimary: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool,
};
