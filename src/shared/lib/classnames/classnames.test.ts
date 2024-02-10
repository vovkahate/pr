import { classNames } from "./classnames";

describe('classNames', ()=>{
    test('with only one param', ()=>{
        expect(classNames('someClass')).toBe('someClass')
})

test('with additional param', ()=>{
    const expected = 'someClass class1 class2 hovered scrollable'
    expect(classNames('someClass', {hovered: true, scrollable: true}, ['class1', 'class2'])).toBe(expected)
})

test('with false param', ()=>{
    const expected = 'someClass class1 class2 hovered'
    expect(classNames('someClass', {hovered: true, scrollable: false}, ['class1', 'class2'])).toBe(expected)
})
})