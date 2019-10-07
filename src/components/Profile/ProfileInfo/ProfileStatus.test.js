import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props shuold be in the state", () => {
        const component = create(<ProfileStatus status='qwe-qwe' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('qwe-qwe');
    });

    test("After creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status='qwe-qwe' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("After creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status='qwe-qwe' />);
        const root = component.root;

        expect(()=>{
            let input = root.findByType('input');
        }).toThrow();
    });

    test("After creation <span> with correct status should be displayed", () => {
        const component = create(<ProfileStatus status='qwe-qwe' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('qwe-qwe');
    });

    test("Input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status='qwe-qwe' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('qwe-qwe');
    });

    test("updateStatus Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='qwe-qwe'
                                                updateUserStatus={mockCallback}
        />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});



















