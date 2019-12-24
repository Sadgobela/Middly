import React, { useEffect } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { array, string, bool, func } from 'prop-types';

import Icon from 'components/Icon';
import Buttons from '../Buttons';

import {
  PopupOverlay,
  PopupWrapper,
  IconWrapper,
  FormGroup,
  FormTitle,
  FormValues,
  FormValue
} from './styled';

const Popup = ({
  colors,
  sizes,
  color,
  size,
  setColor,
  setSize,
  showVariationsPopup,
  setShowVariationsPopup,
  setShowMessage
}) => {

  useEffect(() => {
    if(showVariationsPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showVariationsPopup]);

  return <>
    <PopupOverlay active={showVariationsPopup} onClick={() => setShowVariationsPopup(false)} />
    <PopupWrapper active={showVariationsPopup}>
      <IconWrapper onClick={() => setShowVariationsPopup(false)}>
        <Icon
          type="close"
          svgStyle={{ width: 24, height: 24, color: '#1A1A1A' }}
        />
      </IconWrapper>

      <FormGroup>
        <FormTitle>
          Select Size
          <span>Size Guide</span>
        </FormTitle>

        {
          sizes && sizes.length &&
          <FormValues>
            <Scrollbar
              disableTracksWidthCompensation
              style={{ height: 40 }}
              trackXProps={{
                renderer: (props) => {
                  const { elementRef, ...restProps } = props;
                  return <span {...restProps} ref={elementRef} className="TrackX"/>;
                }
              }}
            >
              {
                sizes.map((sizeValue, key) =>
                  <FormValue
                    onClick={() => setSize(sizeValue)}
                    key={key}
                    active={sizeValue === size}
                  >
                    {sizeValue}
                  </FormValue>
                )
              }
            </Scrollbar>
          </FormValues>
        }
      </FormGroup>

      <FormGroup>
        <FormTitle>
          Select Color
        </FormTitle>

        {
          colors && colors.length &&
          <FormValues>
            <Scrollbar
              disableTracksWidthCompensation
              style={{ height: 40 }}
              trackXProps={{
                renderer: (props) => {
                  const { elementRef, ...restProps } = props;
                  return <span {...restProps} ref={elementRef} className="TrackX"/>;
                }
              }}
            >
              {
                colors.map((colorValue, key) =>
                  <FormValue
                    onClick={() => setColor(colorValue)}
                    key={key}
                    active={colorValue === color}
                  >
                    {colorValue}
                  </FormValue>
                )
              }
            </Scrollbar>
          </FormValues>
        }
      </FormGroup>

      <Buttons
        style={{ marginTop: 0 }}
        setShowMessage={setShowMessage}
      />
    </PopupWrapper>
  </>
};

Popup.defaultProps = {
  colors: [],
  sizes: [],
  color: null,
  size: null,
  showVariationsPopup: false,
  setColor: () => {},
  setSize: () => {},
  setShowVariationsPopup: () => {},
  setShowMessage: () => {}
};

Popup.propTypes = {
  colors: array,
  sizes: array,
  color: string,
  size: string,
  showVariationsPopup: bool,
  setColor: func,
  setSize: func,
  setShowVariationsPopup: func,
  setShowMessage: func
};

export default Popup;