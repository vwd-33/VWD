import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-page'

const ProductPagePreview = ({ entry, getAsset }) => {
  const entryDescriptionList = entry.getIn(['data', 'description', 'descriptionList'])
  const descriptionList = entryDescriptionList ? entryDescriptionList.toJS() : []
  
  const entryLabels = entry.getIn(['data', 'labels'])
  const labels = entryLabels ? entryLabels.toJS() : []

  return (
    <ProductPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      description2={{
        emailText: entry.getIn(['data', 'description2', 'emailText']),
        email: entry.getIn(['data', 'description2', 'email']),
        descriptionList: descriptionList,
      }}
      labels={labels}
    />
  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ProductPagePreview
