import React, {Component} from 'react';
import styles from './key-overlay.css';
import {KeyboardAPI} from '../utils/keyboard-api';

export class KeyOverlay extends Component {
  render() {
    const {device, matrixLayout, selectedKey} = this.props;
    if (selectedKey) {
      const {row, col} = matrixLayout[parseInt(selectedKey)];
      return (
        <div
          className={[!!selectedKey && styles.selected, styles.keyOverlay].join(
            ' '
          )}
        >
          {selectedKey} : ({row}, {col})
        </div>
      );
    }
    return <div className={styles.keyOverlay} />;
  }
}
