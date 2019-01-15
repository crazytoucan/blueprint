/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

function removeElement(childNode: Node) {
    // Remark: IE11 does not support childNode.remove()
    const parent = childNode.parentNode;
    if (parent !== null) {
        parent.removeChild(childNode);
    }
}

/**
 * Measure width in pixels of a string displayed with styles provided by `className`.
 * Should only be used if measuring can't be done with existing DOM elements.
 */
export function measureTextWidth(text: string, className = "", containerElement = document.body) {
    if (containerElement == null) {
        return 0;
    }
    const span = document.createElement("span");
    span.classList.add(className);
    span.textContent = text;

    containerElement.appendChild(span);
    const spanWidth = span.offsetWidth;
    removeElement(span);

    return spanWidth;
}

export function padWithZeroes(str: string, minLength: number) {
    if (str.length < minLength) {
        return `${stringRepeat("0", minLength - str.length)}${str}`;
    } else {
        return str;
    }
}

function stringRepeat(str: string, numTimes: number) {
    return new Array(numTimes + 1).join(str);
}
