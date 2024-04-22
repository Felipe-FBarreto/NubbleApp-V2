/* eslint-disable react/react-in-jsx-scope */

import {useToast, useToastService, ToastPosition} from '@services';
import {useCallback, useEffect, useRef} from 'react';
import {ToastContent} from './components/ToastContent';
import {Animated} from 'react-native';
const DEFAUTL_DURANTION = 2000;
export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();
  const position: ToastPosition = toast?.position || 'top';
  const fadeAnim = useRef(new Animated.Value(0.5)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitgAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();
      setTimeout(() => {
        runExitgAnimation(hideToast);
      }, toast.duration || DEFAUTL_DURANTION);
    }
  }, [hideToast, toast, runEnteringAnimation, runExitgAnimation]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnim,
        [position]: 100,
      }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
