import { AdaptedEvent, EventTypes, TouchEventType } from '../interfaces';
export default abstract class EventManager<T> {
    protected readonly view: T;
    protected pointersInBounds: number[];
    protected activePointersCounter: number;
    constructor(view: T);
    abstract setListeners(): void;
    protected abstract mapEvent(event: Event, eventType: EventTypes, index?: number, touchEventType?: TouchEventType): AdaptedEvent;
    protected onPointerDown(_event: AdaptedEvent): void;
    protected onPointerAdd(_event: AdaptedEvent): void;
    protected onPointerUp(_event: AdaptedEvent): void;
    protected onPointerRemove(_event: AdaptedEvent): void;
    protected onPointerMove(_event: AdaptedEvent): void;
    protected onPointerLeave(_event: AdaptedEvent): void;
    protected onPointerEnter(_event: AdaptedEvent): void;
    protected onPointerCancel(_event: AdaptedEvent): void;
    protected onPointerOutOfBounds(_event: AdaptedEvent): void;
    protected onPointerMoveOver(_event: AdaptedEvent): void;
    protected onPointerMoveOut(_event: AdaptedEvent): void;
    setOnPointerDown(callback: (event: AdaptedEvent) => void): void;
    setOnPointerAdd(callback: (event: AdaptedEvent) => void): void;
    setOnPointerUp(callback: (event: AdaptedEvent) => void): void;
    setOnPointerRemove(callback: (event: AdaptedEvent) => void): void;
    setOnPointerMove(callback: (event: AdaptedEvent) => void): void;
    setOnPointerLeave(callback: (event: AdaptedEvent) => void): void;
    setOnPointerEnter(callback: (event: AdaptedEvent) => void): void;
    setOnPointerCancel(callback: (event: AdaptedEvent) => void): void;
    setOnPointerOutOfBounds(callback: (event: AdaptedEvent) => void): void;
    setOnPointerMoveOver(callback: (event: AdaptedEvent) => void): void;
    setOnPointerMoveOut(callback: (event: AdaptedEvent) => void): void;
    protected markAsInBounds(pointerId: number): void;
    protected markAsOutOfBounds(pointerId: number): void;
    resetManager(): void;
}