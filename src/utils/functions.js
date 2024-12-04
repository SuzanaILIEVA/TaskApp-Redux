import {themeColors} from '../theme/colors';
import {statusType} from './constants';

const setColors = status => {
  switch (status) {
    case statusType.COMPLETED:
      return themeColors.green;
    case statusType.INPROGRESS:
      return themeColors.darkblue;
    case statusType.INREVIEW:
      return themeColors.lightBlue;
    case statusType.ONHOLD:
      return themeColors.yellow;

    default:
      return themeColors.lightGray;
  }
};

export {setColors};
