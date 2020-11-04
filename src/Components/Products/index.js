import React from 'react'
import {
    ProductsContainer,
    ProductsWrap,
    ProductsHeading,
    ProductsTitle,
    ProductsCard,
    ProductsImg,
    ProductsInfo,
    ProductsDesc,
    ProductsPrice,
    ProductsButton
} from './ProjectEl'

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>
                {heading}
            </ProductsHeading>
            <ProductsWrap>
                {data.map((product, index) =>{
                    return(
                        <ProductsCard key={index}>
                           <ProductsImg src={product.img} alt={product.alt}/>
                           <ProductsInfo>
                              <ProductsTitle>{product.name}</ProductsTitle>
                               <ProductsDesc>{product.desc}</ProductsDesc>
                                <ProductsPrice>{product.price}</ProductsPrice>
                                   <ProductsButton>{product.button}</ProductsButton>
                           </ProductsInfo>
                        </ProductsCard>
                    )
                })}
            </ProductsWrap>
        </ProductsContainer>
    )
}

export default Products
