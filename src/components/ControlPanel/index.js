import React from 'react';
import Button from '../Button';

export const ControlPanel = ({
    showHistory,
    removeOneChar,
    clearDisplay,
    sectionClassName = "buttons--controls",
    buttonClassName = "control",
    clearText = "c",
    historyText = "History",
    removeOneCharText = String.fromCharCode(8592)
}) => (
    <section className={sectionClassName}>
        <Button buttonClass={buttonClassName} text={removeOneCharText} clickHandler={removeOneChar} />
        <Button buttonClass={buttonClassName} text={clearText} clickHandler={clearDisplay} />
        <Button buttonClass={buttonClassName} text={historyText} clickHandler={showHistory} />
    </section>
);

export default ControlPanel;