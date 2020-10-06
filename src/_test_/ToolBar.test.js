import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToolBar from "../Components/Navigation/ToolBar";
import React from "react";
import toolbarCSS from "../Components/Navigation/css/ToolBar.module.css";
import {Link} from "react-router-dom";



enzyme.configure({adapter: new Adapter()});

describe('[ToolBar.js]', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ToolBar isAuthenticated={true}/>);
    })

    it('[ToolBar.js] LOGOUT Exists', function () {
        expect(wrapper.contains(<Link to={'/logout'} className={toolbarCSS.listRight}>LOGOUT</Link>)).toEqual(true)
    });

    it('[ToolBar.js] LOGIN Exists', function () {
        const wrapper = shallow(<ToolBar isAuthenticated={true}/>);
        expect(wrapper.contains(<Link to={'/auth'} className={toolbarCSS.listRight}>LOGIN</Link>)).toEqual(false)
    });

})