import React from "react";
import ingredCSS from './css/BurgerIngred.module.css';
import PropTypes from 'prop-types';

class BurgerIngred extends React.Component {

    render() {

        let ingred = null;


        switch (this.props.type) {
            case('bread-bottom') :
                ingred = (<div className={ingredCSS.BreadBottom}></div>);
                break;
            case ('bread-top') :
                ingred = (<div className={ingredCSS.BreadTop}>
                    <div className={ingredCSS.Seeds1}></div>
                    <div className={ingredCSS.Seeds2}></div>
                </div>);
                break;
            case ('meat') :
                ingred = (<div className={ingredCSS.Meat}></div>);
                break;
            case ('cheese') :
                ingred = (<div className={ingredCSS.Cheese}></div>);
                break;
            case ('salad') :
                ingred = (<div className={ingredCSS.Salad}></div>);
                break;
            case ('bacon') :
                ingred = (<div className={ingredCSS.Bacon}></div>);
                break;
            default :
                ingred = null
        }

        return (
            {ingred}
        )
    }
}

BurgerIngred.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngred;