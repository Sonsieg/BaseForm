export const showToast = (type, text1, text2, position) => {
  switch (type) {
    case 'success':
      Toast.show({
        type: 'success',
        text1,
        text2,
        position: {position},
        visibilityTime: 4000,
        autoHide: true,
        bottomOffset: 50,
      });
      break;
    case 'error':
      Toast.show({
        type: 'error',
        text1,
        text2,
        position: {position},
        visibilityTime: 4000,
        autoHide: true,
        bottomOffset: 50,
      });
      break;
    default:
      null;
  }
};
