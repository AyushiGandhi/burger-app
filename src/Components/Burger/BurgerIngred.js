import React from "react";
import ingredCSS from './css/BurgerIngred.module.css';
import PropTypes from 'prop-types';

class BurgerIngred extends React.Component {

    render() {
        let ingredients = null;
        switch (this.props.type) {
            case('bread-bottom') :
                ingredients = <div className={ingredCSS.BreadBottom}></div>;
                break;
            case ('bread-top') :
                ingredients = (<div className={ingredCSS.BreadTop}>
                    <div className={ingredCSS.Seeds1}></div>
                    <div className={ingredCSS.Seeds2}></div>
                </div>);
                break;
            case ('meat') :
                ingredients = <div className={ingredCSS.Meat}></div>;
                break;
            case ('cheese') :
                ingredients = <div className={ingredCSS.Cheese}></div>;
                break;
            case ('salad') :
                ingredients = <div className={ingredCSS.Salad}></div>;
                break;
            case ('bacon') :
                ingredients = <div className={ingredCSS.Bacon}></div>;
                break;
            default :
                ingredients = null
        }

        return ingredients
    }
}

BurgerIngred.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngred;