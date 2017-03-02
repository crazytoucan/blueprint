export interface ISyntheticEvent<T> {
    bubbles: boolean;
    currentTarget: EventTarget & T;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: Event;
    target: EventTarget;
    timeStamp: Date;
    type: string;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
}

export interface IMouseEvent<T> extends ISyntheticEvent<T> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    metaKey: boolean;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
    getModifierState(key: string): boolean;
}

export interface IFormEvent<T> extends ISyntheticEvent<T> {
}

export interface IEventHandler<E> {
    (event: E): void;
}

export interface IKeyboardEvent<T> extends ISyntheticEvent<T> {
    altKey: boolean;
    charCode: number;
    ctrlKey: boolean;
    key: string;
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    which: number;
    getModifierState(key: string): boolean;
}

export interface ITouchEvent<T> extends ISyntheticEvent<T> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
    getModifierState(key: string): boolean;
}

export type IReactType = string | React.ComponentClass<any> | React.StatelessComponent<any>;
