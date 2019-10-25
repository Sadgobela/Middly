import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Modal, Button, Menu, Dropdown, Icon } from 'antd';

import '../../styles/comp-styles/header/MobileMenuContent.scss';
import '../../styles/comp-styles/modal/ModalSetting.scss';
// import {
//   getAllCountries,
//   setCountry,
//   getCountry,
// } from '../../actions/countries';

class ModalTools extends React.Component {
  componentWillMount() {
    // const { getAllCountries, getCountry } = this.props;
    // getCountry();
    // getAllCountries();
  }

  render() {
    const {
      visible,
      onOk,
      onCancel,
      countries,
      currentCountry,
      setCountry,
    } = this.props;

    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );

    const countriesMenu = (
      <Menu>
        {/*{countries &&*/}
        {/*  countries.map((country, index) => {*/}
        {/*    return (*/}
        {/*      <Menu.Item key={index} onClick={() => setCountry(country)}>*/}
        {/*        {country.name}*/}
        {/*      </Menu.Item>*/}
        {/*    );*/}
        {/*  })}*/}
      </Menu>
    );

    return (
      <Modal
        className="settings-modal"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        footer={[
          <Button key="back" onClick={() => onCancel()}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => onOk}>
            Save
          </Button>,
        ]}
        title={[
          <h2>Update your settings</h2>,
          <h3>
            Set where you live, what language you speak, and the currency you
            use.
            <Link to="/">
              <a>Learn more</a>
            </Link>
          </h3>,
        ]}
      >
        <Dropdown overlay={countriesMenu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            {currentCountry ? currentCountry.name : ''}
            <Icon />
          </a>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            English (US)
            <Icon />
          </a>
        </Dropdown>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            $ United states Dollar (USD)
            <Icon />
          </a>
        </Dropdown>
      </Modal>
    );
  }
}
//
// const mapStateToProps = (state) => {
//   return {
//     countries: state.countries.countries,
//     currentCountry: state.countries.currentCountry,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllCountries: (...args) => dispatch(getAllCountries(...args)),
//     setCountry: (...args) => dispatch(setCountry(...args)),
//     getCountry: (...args) => dispatch(getCountry(...args)),
//   };
// };

export default ModalTools;
// (
//   mapStateToProps,
//   mapDispatchToProps
// )(ModalTools);
