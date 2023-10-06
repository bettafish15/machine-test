import React, { FC } from 'react';
import { IDirections } from 'types/date';
import cn from 'classnames';

import styles from './header.module.scss';

interface IHeaderProps {
  onClickArrow: (direction: IDirections) => void;
  displayedDate: string;
}

const Header: FC<IHeaderProps> = ({
  onClickArrow,
  displayedDate
}) => {

  const changeToPrev = () => onClickArrow('left');
  const changeToNext = () => onClickArrow('right');
  const changeToToday = () => onClickArrow('today');

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <button
          className={cn(styles.navigation__today__btn, "button")}
          onClick={changeToToday}
        >
          Today</button>
        <div className={styles.navigation__body}>
          <div className={styles.navigation__icons}>
            <button
              className={cn("icon-button", styles.navigation__icon)}
              onClick={changeToPrev}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className={cn("icon-button", styles.navigation__icon)}
              onClick={changeToNext}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <span className={styles.navigation__date}>{displayedDate}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
