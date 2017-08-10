import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class RecipeItem extends React.Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onSetActive: PropTypes.func.isRequired,
    isSelected: PropTypes.bool
  };

  handleClick = () => {
    const { recipe } = this.props;
    this.props.onSetActive(recipe.id);
  };

  render () {
    const { recipe, isSelected } = this.props;
    const itemClasses = classnames('recipe-item', {
      'recipe-item--active': isSelected
    });

    return (
      <div className={itemClasses} onClick={this.handleClick}>
        <div className='recipe-item__title'>{recipe.title}</div>
        <img src={recipe.image} className='recipe-item__image' />
        {isSelected &&
          <div>
            {recipe.ingredients.map((item, i) => {
              return (
                <span key={i}>{item}<br /></span>
              )
            })}
          </div>
        }
      </div>
    )
  }
}
