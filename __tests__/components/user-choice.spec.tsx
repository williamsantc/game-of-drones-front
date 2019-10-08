import * as React from "react";
import {mount, ReactWrapper} from "enzyme";
import UserChoice from "../../components/user-choice";
import {MovementsType} from "../../models/movements.type";

describe('UserChoice', () => {
  const ROUND = 1;
  const NICKNAME = 'TEST';

  it('component renders', () => {
    // Arrange - Act - Assert
    mount(<UserChoice round={ROUND}  nickname={NICKNAME} saveMovement={() => {}} />);
  });

  it('component has three buttons with ROCK, SCISSORS and PAPER values', () => {
    // Arrange
    const options =  [MovementsType.PAPER, MovementsType.ROCK, MovementsType.SCISSORS];
    const buttonsNumber = 3;

    // Act
    const wrapper = mount(<UserChoice round={ROUND}  nickname={NICKNAME} saveMovement={() => {}} />);
    const textButtons = wrapper.find('button').map(el => el.text());

    // Assert
    expect(textButtons.length).toBe(3);
    textButtons.forEach(buttonText => {
      expect(options.some(option => buttonText.includes(option))).toBe(true);
    });
  });

  it('should call saveMovement method with value ROCK on ROCK option', () => {
    // Arrange
    const test = {
      saveMovement: (movement: MovementsType) => {},
    };
    spyOn(test, "saveMovement");
    // Act
    const wrapper = mount(<UserChoice round={ROUND}  nickname={NICKNAME} saveMovement={test.saveMovement} />);
    wrapper.find(`#${MovementsType.ROCK}`).first().simulate('click');

    // Assert
    expect(test.saveMovement).toHaveBeenCalledWith(MovementsType.ROCK);
  });

  it('should call saveMovement method with value PAPER on PAPER option', () => {
    // Arrange
    const test = {
      saveMovement: (movement: MovementsType) => {},
    };
    spyOn(test, "saveMovement");
    // Act
    const wrapper = mount(<UserChoice round={ROUND}  nickname={NICKNAME} saveMovement={test.saveMovement} />);
    wrapper.find(`#${MovementsType.PAPER}`).first().simulate('click');

    // Assert
    expect(test.saveMovement).toHaveBeenCalledWith(MovementsType.PAPER);
  });

  it('should call saveMovement method with value SCISSORS on SCISSORS option', () => {
    // Arrange
    const test = {
      saveMovement: (movement: MovementsType) => {},
    };
    spyOn(test, "saveMovement");
    // Act
    const wrapper = mount(<UserChoice round={ROUND}  nickname={NICKNAME} saveMovement={test.saveMovement} />);
    wrapper.find(`#${MovementsType.SCISSORS}`).first().simulate('click');

    // Assert
    expect(test.saveMovement).toHaveBeenCalledWith(MovementsType.SCISSORS);
  });

});